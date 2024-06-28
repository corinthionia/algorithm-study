const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const N = Number(input.shift());
const tree = {};

input.forEach((inp) => {
    const [root, left, right] = inp.split(' ');
    tree[root] = [left, right];
});

const preorder_res = [];
const inorder_res = [];
const postorder_res = [];

const preorder = (root) => {
    if (root !== '.') {
        preorder_res.push(root);
        preorder(tree[root][0]);
        preorder(tree[root][1]);
    }
};

const inorder = (root) => {
    if (root !== '.') {
        inorder(tree[root][0]);
        inorder_res.push(root);
        inorder(tree[root][1]);
    }
};

const postorder = (root) => {
    if (root !== '.') {
        postorder(tree[root][0]);
        postorder(tree[root][1]);
        postorder_res.push(root);
    }
};

preorder('A');
console.log(preorder_res.join(''));

inorder('A');
console.log(inorder_res.join(''));

postorder('A');
console.log(postorder_res.join(''));
