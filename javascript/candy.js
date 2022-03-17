let time = "" ;
function humanReadableTimer(seconds) {
    // console.log(    );
    
    let division = divisionWithModulo(seconds,60);
    console.log("division",division[0],division[1]);
    // time += division[1].toString();
    time += division[1].toString()+"  ";
        console.log(time);
    if (  division[0] >= 60    ) {
        // console.log(division[0].toString() );
        return humanReadableTimer(division[0])
    }
    
    // return division[0]
    // let division = divisionWithModulo(seconds,60)
    // if (  division[0] < 60   ) {
    //     console.log(division[1].toString());
    //     return division[1].toString();
    // }else{

    //     time += humanReadableTimer(divisionWithModulo(division[0],60)[0]);
    //     console.log(time);
    // }
    // console.log(time);

    console.log( time );

}

function divisionWithModulo(divisor , dividend) {
    
    let quotient = Math.floor(divisor / dividend)
    let modulo = divisor % dividend
    // console.log("quotient"+quotient);
    return [quotient,modulo];
}
// 3601 /60  => 60  1

// 60/60  =>  1  0

  
//   console.log(humanReadableTimer(0))      // 印出 00:00:00
//   console.log(humanReadableTimer(59))     // 印出 00:00:59
//   console.log(humanReadableTimer(60))     // 印出 00:01:00
//   console.log(humanReadableTimer(90))     // 印出 00:01:30
//   console.log(humanReadableTimer(3599))   // 印出 00:59:59
//   console.log(humanReadableTimer(3600))   // 印出 01:00:00
//   console.log(humanReadableTimer(45296))  // 印出 12:34:56
//   console.log(humanReadableTimer(86399))  // 印出 23:59:59
//   console.log(humanReadableTimer(86400))  // 印出 24:00:00
//   console.log(humanReadableTimer(359999)) // 印出 99:59:59
// console.log(humanReadableTimer(216001));




// function numberToTWCurrency(amount,depth) {
//     // 123 % 10  10^1 = 3 / (10^(1-1))
//     if(depth == 4) return 0;
//     let a = amount % 10**depth;
//     console.log("a",depth,a);
//     let b = numberToTWCurrency (a,depth+1);
//     console.log( "b",depth,b);
//     // console.log("a-b",(a-b)/10**(depth-1),depth);
//     return a;
// }

// 123 % 1000  10^3 = 123 -23 = 100  / (10^(3-1)) =1
// 123 % 100  10^2 = 23-3 = 20 / (10^(2-1)) = 2
// 123 % 10  10^1 = 3 / (10^(1-1))
let str = "";
let flag = 0;
let prev = [];
let digit =["元整","拾","佰","仟","萬","拾","佰","仟", "億","拾","佰","仟", "兆","拾","佰","仟" ]; 
let num = ["零","壹","貳","參","肆","伍","陸","柒","捌","玖"];
let l = 0;
function numberToTWCurrency(amount) {
    reset();
    let money = amount;
    while(money !== 0){
        money = Math.floor( money / 10);
        l++;
    }
    recursive(amount,l);
   return str;
}

function reset(){
    str = "";
    flag = 0;
    prev = [];
    l = 0;
}

function recursive(amount,depth){
    if(depth == 0) return 0;
    let a = amount % 10**depth;
    // console.log("a",depth,a,amount);
    let b = recursive(a,depth-1);
    // console.log( "b",depth,b);
    let val = (a-b)/10**(depth-1);
    prev.push(val);
    // console.log(  val , b ,depth,  Boolean(val) && !Boolean(prev[prev.length-2])   );
    if(val == 0   ){
        if(depth % 4 == 1) str = str.replace(/(.{0})/,digit[depth-1]);
        if(depth % 4 == 0){
            str = str.replace(/(.{0})/,"零");
            flag = 0;
        }
        // console.log("into",digit[depth],depth);
        if (!Boolean(val) && Boolean(prev[prev.length-2]) ) flag = 1; //負緣觸發
    }else{
        if(flag == 1){
            // console.log( "into2",digit[depth],depth );
            str = str.replace(/(.{0})/,"零");
        }
        str = str.replace(/(.{0})/, num[val] + digit[depth-1])
        flag = 0;
    }
    return a;
}
console.log(numberToTWCurrency(1234)) ;   // 印出 壹仟肆佰伍拾圓整
console.log(numberToTWCurrency(817))     // 印出 捌佰壹拾柒圓整
console.log(numberToTWCurrency(9527))    // 印出 玖仟伍佰貳拾柒圓整
console.log(numberToTWCurrency(120000))  // 印出 壹拾貳萬圓整
console.log(numberToTWCurrency(1001100110011010)) // 印出 壹佰萬零壹
