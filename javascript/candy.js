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


// 123 % 1000  10^3 = 123 -23 = 100  / (10^(3-1)) =1
// 123 % 100  10^2 = 23-3 = 20 / (10^(2-1)) = 2
// 123 % 10  10^1 = 3 / (10^(1-1))
let digit =["億","仟萬","佰萬","拾萬","萬","仟","佰","拾","元整"]; 
function numberToTWCurrency(amount,depth) {
    // 123 % 10  10^1 = 3 / (10^(1-1))
    if(depth == 0) return 0;
    let a = amount % 10**depth;
    // console.log("a",depth,a);
    let b = numberToTWCurrency (a,depth-1);
    // console.log( "b",depth,b);
    console.log("a-b",(a-b)/10**(depth-1),depth);
    return a;
}
  
  console.log(numberToTWCurrency(1234,4))    // 印出 壹仟肆佰伍拾圓整
//   console.log(numberToTWCurrency(817))     // 印出 捌佰壹拾柒圓整
//   console.log(numberToTWCurrency(9527))    // 印出 玖仟伍佰貳拾柒圓整
//   console.log(numberToTWCurrency(120000))  // 印出 壹拾貳萬圓整
//   console.log(numberToTWCurrency(1000001)) // 印出 壹佰萬零壹