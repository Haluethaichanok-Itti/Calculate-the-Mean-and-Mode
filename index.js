function statsFinder(array) {
  // Write your code here
  //To sort numbers in the array from min to max
  array.sort();
  //Find the sum of the array
  let sum = array.reduce((a,b)=>{
    return a+b;
  });
//set n to be a number of array
let n = array.length;
//Find mean by sum divided by the number of array
let mean = sum/n;
//set count as an obj to count duplicate numbers in the array
let count={};
//set x to keep the value from the obj array
let x =[];
//set arrMax to keep the maximum number that is the most duplicate
let arrMax=[];
//Use for each to count duplicate numbers in the array
array.forEach(e=>{
  count[e] = (count[e]||0)+1;
});
// console.log(count);
//Use for in to push property value of count obj to keep in x
for(const property in count){

x.push(count[property]);
// console.log(x);
}
//find a maximum number that duplicates 
const max = Math.max(...x);
// console.log(max);
//find the most number that duplicates in the count
for(const property in count){
  if(count[property]=== max){
    // console.log(property);
    arrMax.push(property);
  }
}
// console.log(arrMax);
//find the most key that duplicates in the count
let mode = Math.max(...arrMax);
let ans =[];
ans.push(mean);
ans.push(mode);
//return mean and mode
  return ans;
}

console.log(statsFinder([500, 400, 400, 375, 300, 350, 325, 300]));

