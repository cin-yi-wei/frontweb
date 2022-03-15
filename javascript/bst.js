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
        
            this.root = this.#add(this.root,e)
        
    }
    #add =(node,e) => {
        if(node == undefined){
            this.size++;
            return new Node(e);
        }
        console.log("aaa",node);
        if(node.e < e){
            node.right = this.#add(node.right,e);
        }else if(node.e > e){
            node.left = this.#add(node.left,e);
        }
        return node;
    }
}

let a = new bst();
a.add(7);
// console.log(a);
a.add(4);
// console.log(a);
a.add(9);
// console.log(a);
a.add(5);
// console.log(a);
a.add(11);
a.add(10);
a.add(10);
console.log(a);
// console.log(a.root.e.left.e,a.root.e.right.e);