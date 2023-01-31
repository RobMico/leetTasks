var operations = ["+"];
var openingBrackets = ['(', '{', '['];
var closingBrackets = [')', '}', ']'];


function binaryNode({ op = null, a = null, b = null, parrent = null }) {
    this.a = a;
    this.b = b;
    this.op = op;
    this.parrent = parrent;
    this.parse = function (code) {
        let stack = [];
        console.log(code);
        for (let i = 0; i < code.length; i++) {
            if (code[i] === '(') {
                stack.push(')');
                continue;
            }


            if (stack.length > 0) {
                if (stack[stack.length - 1] !== code[i]) {
                    continue;
                }
                else {
                    stack.pop();
                    if (stack.length == 0) {
                        this.a = new binaryNode({ parrent: this });
                        this.a.parse(code.slice(1, i));
                        continue;
                    }
                }
            }
            if (operations.includes(code[i])) {
                // if(!this.a){
                //     throw new Error(`Operations with no operrand, on ${i}`);
                // }
                this.op = code[i];
                this.b = new binaryNode({ parrent: this });
                this.b.parse(code.slice(i + 1));
                break;
            }

            if(this.a&&this.a instanceof unaryNode){
                this.a.param+=code[i];
            }
            else if(!this.a){
                this.a = new unaryNode(code[i]);
            }
            else
            {
                throw new Error('Opperation not found');
            }
        }
    }
    this.doOperation = function () {
        if(!this.op&&!this.a){
            throw new Error('Empty node');
        }
        if(this.op&&(!this.a||!this.b)){
            throw new Error('Op found, but opperands missed');
        }
        if(!this.op&&this.a){
            return parseInt(this.a.doOperation());
        }
        if(this.op&&this.a&&this.b){            
            if(this.op=="+")
            {
                return this.a.doOperation()+this.b.doOperation();    
            }
            // if(this.op=="-")
            // {
            //     return this.a.doOperation()-this.b.doOperation();    
            // }
            //return this.a.doOperation()+this.op+this.b.doOperation();
        }
    }
}
function unaryNode(param = '') {
    this.param = param;
    this.doOperation = function () {
        console.log("param:", this.param)
        return parseInt(this.param);
    }
}

var calculate = function (s) {
    s = s.replaceAll(' ', '');
    let tree = new binaryNode({});
    tree.parse(s);
    return tree.doOperation();
    // for(let x of s)
    // {
    //     //console.log(x);
    //     if(x==="("){
    //         stack.push(")");
    //         currentNode.a = new binaryNode({parrent:currentNode});
    //         currentNode = currentNode.a;
    //         continue;
    //     }
    //     if(x===")"){
    //         let bracket = stack.pop();
    //         if(bracket!==")"){
    //             throw new Error("Incorrect code");
    //         }
    //         if(!currentNode.a||!currentNode.b||!currentNode.op)
    //         {
    //             console.log("THROW")
    //         }
    //         currentNode = currentNode.parrent;
    //         continue;
    //     }
    //     if(operations.includes(x)){
    //         currentNode.op = x;
    //         currentNode.b = new binaryNode({parrent:currentNode})
    //         currentNode = currentNode.b;
    //         continue;
    //     }

    //     //currentNode.


    // }
    console.log(tree);
};

//new binaryNode({op:''})
//console.log(calculate("1+1"));
console.log(calculate(" 2-1 + 2 "));
//console.log(calculate("(1+(4+5+2)-3)+(6+8)"));

//(1+(4+5+2)-3)+(6+8)
//            \/             +            \/
//      \/     +        \/            \/   +   \/
//      1         \/    -   \/         6        8
//             \/ + \/      3
//              4 \/ + \/
//                 5    2


//1+2/2+1
//1+    2/2+1
//      2/      2+1
//              2+    1


//1-1+1
//1 +       (-1)+1
//           (-1)+      1

//2/2+1
//