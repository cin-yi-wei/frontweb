let change = (arr,x,y) =>{   //call by address
    arr[x] = arr[y] ^ arr[x];
    arr[y] = arr[x] ^ arr[y];   
    arr[x] = arr[x] ^ arr[y];
}
let sortone = (a,start,end) =>{
    let j = start;
    for(let i = start+1 ; i <= end  ;i++){
        if( a[start] > a[i] ){
            j++;
            if(i !== j) change(a,i,j);          
        }
    }
    if(j!==start) change(a,start,j)
    return j+start;
}

let quicksort = (a,start,end) => {
    // if(a.length === 0 ) return;
    if(start>end ) {
        console.log("err",start,end );
        return;
    }
    
   
    console.log( a,start,end);
    let middle = sortone(a,start,end);
    if(middle >= a.length) return;
    console.log( "middle"  ,middle);
   
    if(middle <= 0) return;
    quicksort(a,start,middle-1);
    quicksort(a,(middle+1), end);
    // a.slice(0,middle) = quicksort(a.slice(0,middle));
    // a.slice(middle+1, a.length) = quicksort(a.slice(middle+1, a.length));      
}
let a = [5,1,7,3,8,4,6]; //
quicksort(a,0,a.length-1);
console.log(a);
// let digitunit =["元整","拾","佰","仟","萬","拾","佰","仟", "億","拾","佰","仟", "兆","拾","佰","仟", "京","拾","佰","仟"]; 
// let num = ["零","壹","貳","參","肆","伍","陸","柒","捌","玖"];
// let a = 1234;
// let str_a=String(a);
// let str = "";
// for(let i=str_a.length-1;i>=0; i--){
//     console.log(parseInt(str_a[i]));
//     str += num[parseInt(str_a[str_a.length-1-i])]+ digitunit[i]
// }
// console.log(str);

  
// let digitunit =["元整","拾","佰","仟","萬","拾","佰","仟", "億","拾","佰","仟", "兆","拾","佰","仟", "京","拾","佰","仟"]; 
// let num = ["零","壹","貳","參","肆","伍","陸","柒","捌","玖"];
// let a = 1234;
// let str_a=String(a);
// let str = "";
// for(let i=0;i<str_a.length; i++){
//     // console.log(parseInt(str_a[i]));
//     str += num[parseInt(str_a[i])]+ digitunit[str_a.length-1-i]
//     console.log(i,str);
// }
