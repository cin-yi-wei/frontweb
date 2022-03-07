for(let i = 1; i <= 9; i++){
    for(let j = 1; j <= 9; j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
}
//======================>
var height = 5;
for(let i = 0; i < 5 ; i++){
    var str = "";    
    for(let j = 0; j < i+1; j++){
        str += "*";    
    }
    console.log(str);
}

//======================>

height = 4;
for (let i = 0; i < height; i++) {
    let str = "";
    for (let j = 0; j < height-i-1; j++) {
        str += " ";
    }
    for (let j = 0; j < i; j++) {
        str += "*";
    }
    
    str += '*';
    str += str.slice(0,height-1).split('').reverse().join('');
    console.log(str);
    
}
console.log("======================>");
//======================>
String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}


height = 4;

for (let i = 0; i < height; i++) {
    let str = "";
    str = " ".repeat(2*height-1)  //"      "
    let start_index = height-i-1;
    let replace_str = "*".repeat(2*i+1);
    console.log(str.replaceAt(start_index , replace_str)); //start_index height-i-1  2*i+1 
}
