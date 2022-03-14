const list = [19,5,42,2,77];
var min = Number.MAX_SAFE_INTEGER; //取最大值，才能在進入迴圈後被任意一數替換
var second_min = 0;
list.forEach(element => {
    if (element <=  min ) { //當元素小於之前的最小值時，應被更新為當前最小值
        second_min = min; //最後一個最小值，在發生數值替換前應為數列的第二小值
        min = element; //把當前最小值更新
    }
});
let sum = min + second_min;
console.log(sum);


/*
ulist.forEach( (element,index) => {
    console.log(element,element.charCodeAt(),index);
if ( ) {
    
}

});
*/
const ulist1 = ["a", "b", "c", "d", "f", "g"];
const ulist2 = ["O","Q","R","S"];
let test = (ulist) => {
    for(let i = 1; i < ulist.length; i++){
        let curr_ascii = ulist[i].charCodeAt();
        let pre_ascii = ulist[i-1].charCodeAt();
        if( curr_ascii-pre_ascii != 1)
            return String.fromCharCode(curr_ascii-1);
        }
    return "no less word"+ulist[i];    
        
}
console.log(test(ulist1));
console.log(test(ulist2));
