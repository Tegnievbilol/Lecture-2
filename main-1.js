// Task-3



// Task-4
// function sum(a){
//     return a==0 ? a+10 : a%2==0 ? a-1 : a+1 
// }
// console.log(sum(3));
// console.log(sum(0));
// console.log(sum(10));


// Task-5
// function sum(a,b){
//     return a%b==0 ? a : b%a==0 ? b : Math.max(a,b)*2 % Math.min(a,b) == 0 ? Math.max(a,b) * 2 : Math.max(a,b) * Math.min(a,b)
// }
// console.log(sum(4,6));


// Task-6
// function sum(a){
//     let cnt = 0
//     for(let i=1;i<=a/2;i++){
//         if(a%i==0){
//             cnt+=i
//         }
//     }   
//     return a==cnt
// }
// console.log(sum(496));


// Task-7
// function sum(a){
//     let cnt = ""
//     for(let i=a)
// }
// console.log(sum(1233));

// Task-8
// let sum_Of_prime_In_range = (a, b) => {
//     let sum = 0;
//     let cnt = 0;
//     for (let i=a;i<=b;i++){
//         for (let j=1;j<=i;j++){
//             if (i%j===0){cnt++;}
//             if (cn ===2){sum+=i;}
//         }
//     }
//     return sum ;
// }
// console.log(sum_Of_prime_In_range(10,50))


// Task-9



// Task-10
// function sum(a){
//     let cnt = 1
//     let cnt1 = ""
//     for(let i=1;i<=a;i++){
//         cnt*=i
//     }
//     for(let j=cnt;j>0;j=Math.floor(j/10)){
//         cnt1+=j%10
//     }
//     return +cnt1
// }
// console.log(sum(5));