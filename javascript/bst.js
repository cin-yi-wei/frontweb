class Node{
    constructor(e,right=undefined,left=undefined){
        this.e = e;
        this.right=right;
        this.left=left;
    }
}

class bst{
    static size = 0;
    constructor(root){
        this.root = root;
        this.size = 0;
    }
    
    static isempty = () =>{
        return size === 0
    }
    add = (e) =>{
        if (this.root == undefined){
            this.root = new Node(e);
            this.size++;
        }else{
            this.#add(this.root,e)
        }
    }
    #add =(node,e) => {
        console.log(node,e);
        if(node.e < e && node.right == undefined){
            node.right = new Node(e);
            return;
        }else if(node.e > e && node.left == undefined){
            node.left = new Node(e);
            return;
        }
        if(node.e < e){
            this.#add(node.right,e);
        }else if(node.e > e){
            this.#add(node.left,e);
        }
    }
}

let a = new bst();
a.add(7);
a.add(4);
a.add(9);
a.add(5);
a.add(11);


console.log(a.root);
// console.log(a.root.e.left.e,a.root.e.right.e);