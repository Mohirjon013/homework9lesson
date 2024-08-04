// Homework 
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

// 6-task
// let sizez = prompt("enter size") - 0
// let arr = []
// function enterObj(size){
//     let value = prompt("enter value")
//     arr.push(value)
//     let newValue = size - 1
//     if(newValue > 0){
//         enterObj(newValue)
//     }
// }
// console.log(enterObj(sizez)
// );
// console.log(arr);



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

