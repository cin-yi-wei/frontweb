/*
is_leap_year =(y)=>{
    if ((y % 4 == 0 ) && (y % 100 != 0) || (y % 400 == 0)){
        return "閏年";
    }else{
        return "平年";
    }
  
}
isnan(year)
while (true) {
    let year = prompt("請輸入年份");
    console.log( is_leap_year(year) );

}

for (let index = 0; index < 10; index++) {
    index % 2 != 0 ? console.log(index ): console.log("");
}
*/
for (let index = 20; index >= 0; index -= 2) {
    console.log(index);
}

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