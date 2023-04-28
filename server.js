// function celsiusToFahrenheit(celsius) {
//   var fahrenheit = (celsius * 1.8) + 32;
//   return fahrenheit;
// }

// console.log(celsiusToFahrenheit(25))





// function findLargestSmallest(num1, num2, num3) {
//     var largest = num1;
//     var smallest = num1;

//     if (num2 > largest) {
//       largest = num2;
//     }

//     if (num3 > largest) {
//       largest = num3;
//     }

//     if (num2 < smallest) {
//       smallest = num2;
//     }

//     if (num3 < smallest) {
//       smallest = num3;
//     }

//     return [largest, smallest];
//   }


//   console.log(findLargestSmallest(9,3,5))




// var charcter = "A";
// if(charcter>="A" && charcter<= "Z"){
//     console.log("char is uppercase ");
// }
// else if (charcter >="a" && charcter<= "z"){
//     console.log("char is lowercase");
// }
// else{
//     console.log("char is not char");
// }



// function isSumEven(num1, num2) {
//     var sum = num1 + num2;
//     if (sum % 2 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   var res= isSumEven(2,9)
//   console.log(res)



// function check(num1 , num2){
//     var sum = num1+ num2;
//     if(sum %2==0){
//         console.log("sum is even")
//     }
//     else{
//         console.log("sum is odd")
//     }
// }
// var res = check(4,4)


// function num(n) {
//     if (n % 3 == 0 || n % 5 == 0) {
//         console.log("  n is d b 3 or 5")
//     }
//     else {
//         console.log("n is n d b 3 or 5")
//     }
// }
// var res = num(15)


// var n= 120;
// if(n%3==0 || n%5==0){
//     console.log("n is divisal by 3 0r 5");
// }
// else{
//     console.log("n is not  divisal by 3 0r 5");
// }


// var start = 5768;
// var end = 78656;
// var sum=0;
// for(var i=start; i<=end; i++){
//     if(i%2 ==0){
//         sum=sum+i;
//     }
// }
// console.log(sum)


// var array=[3,5,79,45,0,-67,23,77,19,78,12]
// var target=19;
// var flag=false;
// for(var i=0; i<array.length; i++){
//     if(array[i]==target){
//         flag=true;

//     }
// }
// if(flag){
//     console.log("found num")
// }
// else{
//     console.log("not found");
// }



// remove duplicates from sorted array

// function removeElement(nums, val) {
//     let k = 0;
//     for (let i = 0; i < nums.length; i++) {
//       if (nums[i] !== val) {
//         nums[k] = nums[i];
//         k++;
//       }
//     }
//     return k;
//   }
//   var res= removeElement()
//   console.log(res);




// sum of two integers is equal to target

// const nums = [2, 7, 11, 15];
// const target = 9;
// for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//         if (nums[i] + nums[j] === target) {
//             console.log(nums[i] + " , " + nums[j]);
//         }
//     }
// }



// var a=[0,0,1,1,1,2,2,3,3,4]
// var final=[]
// var dupe=[]
// for(i=0; i<a.length;i++){
//     if(a[i]==a[i+1]){
//         dupe.push(a[i])
//     }
//     else{
//         final.push(a[i])
//     }
// }
// console.log(final);


// var array = [34,45,65,23,5,676,32,34]
// var target=66;
// var flag=false;
// for( var i=0; i<array.length; i++){
//     for(var j=i+1; j<array.length;j++){
//         if(array[i] + array[j] == target){
//             // console.log("found")
//             flag=true
//         }
//     }
// }
// if(flag){
//     console.log("found");
// }
// else{
//     console.log("not found");
// }


// var array = [1, 3, 6, , 4, 4, 8]
// var k = 0;
// var val=0;
// for (var i = 0; i < array.length; i++) {
//     if (array[i] !== val) {
//         array[k] = array[i];
//         k++;

//     }
// }


// remove elements
// var array=[0,1,2,2,3,0,4,2]
// var val = 2;
// var rem=[];
// var res =[];
// for(var i =0; i<array.length;i++){
//     if(array[i]==val){
//         rem.push(array[i]);
//     }else{
//         res.push(array[i]);
//     }

// }
// console.log(res.length);
// console.log(res);
// console.log(rem)



// plus one

// function plusOne(digits) {
//     var carry = 1;

//     for (var i = digits.length - 1; i >= 0; i--) {
//         digits[i] += carry;
//         if (digits[i] > 9) {
//             digits[i] = 0;
//             carry = 1;
//         } else {
//             carry = 0;
//             break;
//         }
//     }

//     if (carry === 1) digits.unshift(1);
//     return digits;
// }


// var digits = [1, 2, 3];
// var result = plusOne(digits);
// console.log(result); 



// var array = [4,3,2,1];
// var str = "";
// var final = [];
// var ans, ans1=[];

// for(var i=0;i<array.length;i++){
//     str += array[i].toString();
// }

// var num = parseInt(str);
// num = num + 1;

// var numStr = num.toString();

// for(i=0;i<numStr.length;i++){
//     final.push(numStr[i]);
// }

// for(i=0;i<final.length;i++){
//     ans = parseInt(final[i]);
//     ans1.push(ans);
// }

// console.log(ans1);


// search insert positions

// var arr = [1, 3, 5, 6];
// var n = arr.length;
// var target= 7;
// function find_index(arr, n, target) {

//     for (var i = 0; i < n; i++)

//         if (arr[i] == target)
//             return i;

//         else if (arr[i] > target)
//             return i;

//     return n;
// }
// console.log((find_index(arr, n, target)));


// nums1 = [1,2,3,0,0,0], nums2 = [2,5,6]

// function merge(nums1, m, nums2, n) {
//     let i = m - 1; 
//     let j = n - 1; 

//     for (let k = m + n - 1; k >= 0; k--) {
//       if (j < 0) break; 

//       if (i >= 0 && nums1[i] > nums2[j]) {
//         nums1[k] = nums1[i];
//         i--;
//       } else {
//         nums1[k] = nums2[j];
//         j--;
//       }
//     }
//   }




// var arr1 = [1,2,3,0,0,0];
// var arr2 = [2,5,6];
// var mergedArray = [];

// var i = 0;
// var j = 0;

// for (var k = 0; k < arr1.length + arr2.length; k++) {
//   if (arr1[i] < arr2[j] || j >= arr2.length) {
//     mergedArray.push(arr1[i]);
//     i++;
//   } else {
//     mergedArray.push(arr2[j]);
//     j++;
//   }
// }

// console.log(mergedArray);

var arr1 = [1, 2, 3, 0, 0, 0];
var arr2 = [2, 5, 6];
var addarray = arr1 + arr2;
console.log(addarray);
var nwear = []
var mergedArray = [];
var carray = []
var flag=false;

for (var i = 0; i <= addarray.length; i++) {
    if (mergedArray[i] == 0) {
        mergedArray = carray;
        carray.pop(nwear)
        flag=true;

    }
   
}
if (flag){
    console.log(nwear)
}














