// Homework 

// 1-rasm
// let arr = [55,3,2,11,3,4,6,7,12]
// console.log(arr.sort((a,b) => a-b));

// 2-task
// let arr = [1,6,9,5,8,10,15]
// function rangeSum(arr, startIndex, endIndex){
//     let evenRes = 0
//     const res = arr.slice(startIndex, endIndex + 1)
//     res.forEach(value => evenRes += value);
//     return evenRes
// }
// console.log(rangeSum(arr, 2 , 5));

// 3-task
// let arr = [2,4,5,6,6,3,2,1]
// let all = []
// const res = arr.filter(value => {
//     if(!all.includes(value)){
//         all.push(value)
//         return all
//     }
// })
// console.log(res);

// 4-task
// let arr = [10, 2, 3, 4, 5, 6, 8, 1022];
// function findMaxMin(array){
//     let min = array[0]
//     let max = array[0]
//     array.filter(value => {
//         if(value < min){
//             min = value
//         }
//         else{
//             max = value
//         }
//     });
//     console.log(`MAX: ${max}`);
//     console.log(`MIN: ${min}`);
// }
// findMaxMin(arr)

// 5-task
// let arr = [1,5,8,9,10]
// let firstNum = arr[0]
// arr.shift()
// arr.push(firstNum)
// console.log(arr);

// 6-task
// let arr = [1,2,3,5,6,8]
// const res = arr.map(value => value)
// console.log(res.reverse());

// 7-task
// let arr = [5,4,36,7,8,3,2,9,6,1]
// const res = arr.filter(value => {
//     if(value % 2 != 0){
//         return value
//     }
// })
// console.log(res);

// 8-task
// let arr = [2,3,4,5,7,6]
// const res = arr.filter((value, index, arr) => index % 2 != 0)
// console.log(res);

// 9-task
// let arr = [2,3,4,25,7,35]
// let max = [0]
// function findMax(arr){
//     arr.forEach((value, index, arr) => {
//         if(index % 2 != 0){
//             if(max < value){
//                 max = value
//             }
//         }
//     })
//     console.log(max);
// }
// findMax(arr)

// 11-task
// let arr = [1,2,3,4,5,6,7]
// const res = arr.filter(value => value % 2 != 0)
// console.log(res);

// 12-task
// let arr = [22,5,6,3,2]
// let all = []
// const res = arr.filter(value => {
//     all.unshift(value)
// })
// console.log(all);

// 13-task
// let arr = [2,4,5,5,6,6,3,2,2]
// let all = []
// const res = arr.filter(value => {
//     if(!all.includes(value)){
//         all.push(value)
//         return all
//     }
// })
// console.log(res.sort((a, b) => a - b));

// 14-task
// let arr = [10,1,2,3,4,5,6]
// let min = arr[0]
// arr.filter((value, index, arr) => {
//     if(index % 2 == 0){
//         if(min > value){
//             min = value
//         }
//     }
// })
// console.log(min);


// 2-rasm

// 1-task
// let workersList = [
//     {
//         id:1,
//         workerName:"Olim",
//         workerAge:21,
//         workerSalary:"1000"
//     },
//     {
//         id:2,
//         workerName:"Abdulloh",
//         workerAge:25,
//         workerSalary:"1500"
//     },
//     {
//         id:3,
//         workerName:"John",
//         workerAge:18,
//         workerSalary:"2500"
//     },
// ]
// function findSalary(workersList) {
//     const res = workersList.map(value => value.workerSalary)
//     console.log(res);
    
//     // let evenRes = 0
//     const res2 = workersList.reduce((all, value) => {
//         all += Number(value.workerSalary)
//         return all
//     }, 0)   
//     console.log(`Yeg'indisi: ${res2}`);
    
// }
// findSalary(workersList)

// 2-task
// let workersList = [
//     {
//         id:1,
//         workerName:"Olim",
//         workerAge:21,
//         workerSalary:"1000"
//     },
//     {
//         id:2,
//         workerName:"Abdulloh",
//         workerAge:25,
//         workerSalary:"1500"
//     },
//     {
//         id:3,
//         workerName:"John",
//         workerAge:18,
//         workerSalary:"2500"
//     },
// ]
// function findSalary(workersList) {
//     const res = workersList.map(value => value.workerSalary)
    
//     let max = res[0]
//     res.filter(value => {
//         if(max < value){
//             max = value
//         }
//     })

//     let findName = workersList.find(value => value.workerSalary == max).workerName
//     console.log(findName);
// }
// findSalary(workersList)

// 3-task
// let workersList = [
//     {
//         id:1,
//         workerName:"Bahrom",
//         workerAge:21,
//         workerSalary:"2500"
//     },
//     {
//         id:2,
//         workerName:"Abdulloh",
//         workerAge:25,
//         workerSalary:"1500"
//     },
//     {
//         id:3,
//         workerName:"John",
//         workerAge:18,
//         workerSalary:"1000"
//     },
// ]
// function sortArr(sortAll){
//     if(sortAll == "name"){
//         console.log(workersList.sort((a, b) => a.workerName > b.workerName ? 1 : -1));
//     }
//     else if(sortAll == "age"){
//         console.log(workersList.sort((a, b) => a.workerAge - b.workerAge));
//     }
//     else if(sortAll == "salary"){
//         console.log(workersList.sort((a, b) => a.workerSalary - b.workerSalary));
//     }
//     else{
//         console.log('Invalid sort option');
//     }
// }

// sortArr("name")
// sortArr("age")
// sortArr("salary")

// 4-task
// let arr = [43,12,76,23,97,28,11]
// console.log(arr.sort((a, b) => a- b) );

// 5-task
// let arr = [43,12,76,23,97,28,11]
// let min = arr[0]
// arr.forEach(value => {
//     if(min > value){
//         min = value
//     }
// })
// console.log(min);

// 7-task
// let workersList = [
//     {
//         id:1,
//         workerName:"Bahrom",
//         workerAge:21,
//         workerSalary:"2500"
//     },
//     {
//         id:2,
//         workerName:"Abdulloh",
//         workerAge:25,
//         workerSalary:"1500"
//     },
//     {
//         id:3,
//         workerName:"John",
//         workerAge:18,
//         workerSalary:"1000"
//     },
// ]
// let Id = prompt("enter id !!!") - 0
// function findName(workersList){
//     workersList.findIndex((value , index) => {
//         if(value.id == Id){
//             console.log(`index: ${index}`);
//             console.log(value);
//         }
//     })
// }
// findName(workersList)

