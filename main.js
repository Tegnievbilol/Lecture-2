// Task-1
// function sum(a){
//     return a==0 ? a+1 : a-1
// }
// console.log(sum(0));
// console.log(sum(1));


// Task-2
// function sum(a,b){
//     return -b/a
// }
// console.log(sum(4,5));


// Task-3
// function sum(a){
//     let cnt = 1
//     let cnt1 = 1
//     for(let i=3;i<=a;i++){
//         let cnt2=cnt+cnt1
//         cnt1 = cnt
//         cnt = cnt2
//     }
//     return cnt
// }
// console.log(sum(12));


// Task-4
// function sum(a){
//     let cnt = 0
//     for(let i=a;i>0;i=Math.floor(i/2)){
//         if(i%2==0){
//             return true
//         }
//         else{
//             return false
//         }
//     }
// }
// console.log(sum(9));


// Task-5
// function sum(a){
//     let cnt = ""
//     for(let i=a;i>0;i=Math.floor(i/10)){
//         cnt+=i%10
//     }
//     return cnt<a
// }
// console.log(sum(72));