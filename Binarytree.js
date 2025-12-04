import Node from "./Node.js";

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    this.root = this._insertRec(this.root, value);
  }

  _insertRec(node, value) {
    // raiz
    if (node === null) {
      return new Node(value);
    }

    // esquerda
    if (value < node.value) {
      node.left = this._insertRec(node.left, value);

    // direita
    } else {
      node.right = this._insertRec(node.right, value);
    }

    return node;  
  }

  inOrder(node = this.root) {
    if (!node) return;
    this.inOrder(node.left);
    console.log(node.value);
    this.inOrder(node.right);
  }
}

export default BinaryTree;
