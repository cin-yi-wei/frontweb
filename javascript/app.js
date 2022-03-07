window.onload = () => {
  console.log("qqq");

  var h1 = document.createElement("h1");
  h1.innerHTML = "This is my h1!";
  document.body.appendChild(h1);
  var _x = document.createElement("h1");

  const age = ["a"];
  // for (var i = 0; i < 100000000000; i++) age.push(1);
  var aaa = isNaN( parseInt('abc123') ) 
  console.log(typeof(NaN) , parseInt('abc123') , NaN ,  aaa );

  if (true) {
    console.log("sdfa");
  }

};


var height = 4;
for (let i = 0; i < height; i++) {
    let str = "";
    for (let j = 0; j < height-i; j++) {
        str += " ";
    }
    for (let j = 0; j < (i)*2-1; j+=2) {
        str += "*";
    }
    str += '*';
    str += str.slice(0,height).split('').reverse().join('');
    console.log(str);
}


for( let n = 0; n < height; n++){
    var str = " ";
    let newstr = str.repeat(2*height-1); //2 * height +1
    let replace_str = "*".repeat(2*n+1);
    console.log( newstr.replaceAt(height - n -1 , replace_str));
    //start  height - n -1 == 3   end : 2*n+1
}

