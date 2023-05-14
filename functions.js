// functions programs----------------

// 1.
// function largenum(num1,num2){
//     if (num1>num2){
//         return num1;
//     }
//     else{
//         return num2
//     }
// }
// console.log(largenum(100,12)) 


// 2.
// function checknum(num){
//     if(num%2==0){
//         return "even";
//     }
//     else{
//         return "odd"
//     }
// }
// console.log(checknum(7));


// 3.
// function checaklength(strlenght){
//     if(strlenght.length>0 && strlenght.length<5){
//         return "short"
//     }else if(strlenght.length=5 && strlenght.length<=10){
//         return "medium";
//     }else if(strlenght.length > 10){
//         return "long";
//     }
// }
// console.log(checaklength("happybirthday"));


// 4.
// function checkorder(a,b,c){
//     if(a<b && b<c){
//         return "increasing"
//     }else if(a>b && b>c){
//         return "decreasing"
//     }else{
//         return "neither"
//     }
// }
// console.log(checkorder(10,000,15000));


// 5.
// function checkword(stringword){
//     return  stringword.includes("hello")
// }
// console.log(checkword("helllo world"));


// 6.
// arr=[10,7,20,5,4,3]
// var sum = 0;
// function array(arr){
//     for( var i=0; i<arr.length; i++){
//         if(arr[i]%2==0){
//             sum= sum+arr[i]
//         }
//     }
//     console.log(sum);
// }
// array(arr);



// 7.
// function checknum(num){
//     if(num%3==0 || num%7==0){
//         return "true"
//     }
//     else{
//         return "false"
//     }
// }
// console.log(checknum(3)); 


// 8.Write a function that takes an array of numbers as an argument and returns the smallest positive number in the array. If there are no positive numbers in the array, return -1.
// var array=[4,3,4,400,7]
// function smnum(array){
//     for(var i=0; i<=array.length; i++){
//         if(array[i]>0){
//             return array[i]
//         }
//         else{
//             return -1
//         }
//     }
// }
// console.log(smnum(array));



//  array  questions-----------------------

// 1.
// var arr = [2, 3, 4, 2]
// var sum = 0;
// function array(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         sum = sum + arr[i]
//     }
//     console.log(sum);
// }
// array(arr)


// 2.
// var arr=[1,111,2,3,6,4,5,999]
// var maxvalue=arr[0];
// function maxarrlen(arr){
//     for(i=0; i<arr.length; i++){
//         if(arr[i]>maxvalue){
//             maxvalue = arr[i]
//         } 
//    }
//    console.log(maxvalue); 

// }
// maxarrlen(arr);



// 3.
// var arr=[111,2,3,6,4,5,999]
// var minvalue=arr[0];
// function maxarrlen(arr){
//     for(i=0; i<arr.length; i++){
//         if(arr[i]<minvalue){
//             minvalue = arr[i]
//         } 
//    }
//    console.log(minvalue); 

// }
// maxarrlen(arr);


// 4.
// var array =[2,3,4,5,6,7,8,9,10]
// var evenar=[];
// function evennum(array){
//     for(i=0; i<array.length; i++){
//         if(array[i]%2==0){
//            evenar.push(array[i])
//         }
//     }
//     return evenar
// }
// console.log(evennum(array));


// 5.
// var arr=[1,4,5,88,3]
// var odd = [];
// function oddarray(arr) {
//     for(var i=0; i<arr.length; i++){
//         if(arr[i]%2!==0){
//             odd.push(arr[i]);
//         }
//     }
//     return odd;
// }
// console.log(oddarray(arr));

// 6.
// var arr = [1, 2, 3, 4, 5];
// var len = arr.length;
// var sum = 0;
// var avg = 0;
// function avgArray(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     // console.log(sum);
//     avg = sum / len;
//     console.log(avg);
// }
// avgArray(arr);



// 7.
// var array=[1,2,3,4,5,6,7,8,9,10]
// var givannum = 5;
// var newarray = []
// function findnums(array){
//     for(var i=0; i<array.length; i++){
//         if(array[i]>givannum){
//             newarray.push(array[i])
//         }
//     }
//     return (newarray)
// }
// console.log(findnums(array));



// 8.
// var arr1=[1,2,3,4,5,6,7,8,9,10,15]
// var arr2=[2,4,6,8,10,12,13,14,15]
// var newarray=[]
// function commonelements(arr1,arr2){
//     for(var i=0; i<arr1.length; i++){
//         for(var j=0; j<arr2.length; j++){
//             if(arr1[i]==arr2[j]){
//                 newarray.push(arr1[i])
//             }
//         }

//     }
//     console.log(newarray);
// }
// commonelements(arr1,arr2)


// var array1=[100,200,300,400,500,600]
// var array2=[300,400,500,700]
// var newar=[]
// function findsimilar(array1, array2){
//     for(i=0; i<array1.length; i++){
//         if(array2.includes(array1[i])){
//             newar.push(array1[i])
//         }
//     }
//     return newar;
// }
// console.log(findsimilar(array1,array2));

// 9.
// var arr=[1,2,3,4,5];
// var newArray = [];
// function fun(arr) {
//     for(var i=arr.length-1; i>=0; i--){
//         newArray.push(arr[i])
//     }
//     console.log(newArray);
// }
// fun(arr);



// 10.
// const arr = [1, 2, 3, 4, 5];
// function cumulativeSum(arr) {
//     let result = [];
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//       result.push(sum);
//     }
//     return result;
//   }

// const result1 = cumulativeSum(arr);
// console.log(result1);



// loop questions-------------------------------------------------------------

// 1.
// for(var i=1; i<=10; i++){
//     console.log(i);
// }


// 2.
// for(i=1; i<=20; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }


// 3.
// sum=0;
// for(i=1; i<=100; i++){
//     sum=sum+i;
// }
// console.log(sum);


// 4.
// var num = 3;
// var multi;
// for (var i = 1; i <= 10; i++) {
//     multi = num * i
//     console.log(multi);

// }


// 5. reverse string
// var string= "name"
// var rev="";
// for(i=string.length-1; i>=0; i--){
//     rev=rev+string[i]
// }
// console.log(rev);



// array questions-----------------------------------------------

// 1. Write a program that creates an array of 5 integers and then prints each element of the array
// var array=[1,2,3,4,5]
// for(var i=0;i<=array.length; i++){
//     console.log(i);
// }


// 3. Write a program that creates an array of 7 integers and then prints the largest value in the array.

// var array=[1,2,3,4,5,6,7]
// var large=array[0]
// for(var i=0; i<array.length; i++){
//     if(array[i]>large){
//         large=array[i]
//     }
// }
// console.log(large);


// 4.Write a program that creates an array of 15 integers and then finds and prints the index of the first occurrence of the value 10 in the array.

// var array = [1, 2, 3, 1, 4, 5, 1, 10, 6, 7, 8, 9, 11, 13, 15]
// var value = 10;
// for(var i =0; i<array.length; i++){
//     if(array[i]== value){
//         console.log(i);
//         break;
//     }
// }



// 5. Write a program that creates an array of 20 integers and then calculates and prints the average of all the values in the array

// var array=[1,2,3,4,5]
// var len=array.length;
// var sum=0;
// var average=0;
// for(var i=0; i<array.length; i++){
//     sum=sum+array[i];

// }
// average=sum/len
// console.log(average);


// 6.Write a program that creates an array of 25 integers and then finds and prints the index of the last occurrence of the value 5 in the array.

// var array=[1,2,3,4,5,6,7,,7,5,1,2,5,99,22,44,55,5,11,44,77,88,5,7,8,0,9]
// var num =5;
// for(var i=array.length-1; i>=0; i--){
//     if(array[i]== num){
//         console.log(i);
//         break;
//     }
// }



// 7.Write a program that creates an array of 12 integers and then calculates and prints the product of all the elements in the array

// var array=[1,2,3,4,5,6,7,8,9,10,11,12]
// var product=1;
// for(i=0; i<array.length; i++){
//    product= product * array[i]
// }
// console.log(product);


// 8.Write a program that creates an array of 8 integers and then finds and prints the smallest value in the array

// var array=[8,6,7,3,1,4,2,5,]
// var smallest=array[0]
// for(i=0; i<array.length; i++){
//     if(array[i]<smallest){
//         smallest=array[i]
//     }
// }
// console.log(smallest);


// 9.Write a program that creates an array of 9 integers and then sorts the array in ascending order. The sorted array should then be printed
// var arr= [100,22,3,40,5];
// for(var i =0; i<arr.length; i++){
//     for(var j =i+1; j<arr.length; j++){
//         if(arr[i]>arr[j]){
//             var temp = arr[i];
//             arr[i] = arr[j];
//             arr[j]= temp;
//         }
//     }
// }
// console.log(arr);



// 10.Write a program that creates an array of 3 floating-point numbers and then calculates and prints the sum of the first and last elements in the array
// var arr= [1.2, 2.4, 4.8];
// var sum =0;
// for(var i = 0; i<arr.length; i++){
//     sum = arr[0] + arr[arr.length - 1];
// }
// console.log(sum);


// // 11.Write a program that creates an array of 5 strings and then prints each string in reverse order
// var arr=["gara","shikamaru","kakashi","naruto","akamaru"]
// for(i=0; i<arr.length; i++){
//     var str = arr[i];
//     var rev ="";
//    for(var j = str.length-1; j>=0; j--){
//         rev= rev + str[j];

//    }
//    console.log(rev);

// }


// 12.Write a program that creates an array of 8 integers and then finds and prints the total number of even integers in the array
// var arr = [1, 2, 3, 4, 5, 6, 7];
// var count = 0;
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         count++;
//     }
// }
// console.log(count);


// 13.Write a program that creates an array of 10 integers and then replaces all the even numbers with the value 0.

// var array=[1,2,3,4,5,6,7,8,9,10]
// for(i=0; i<=array.length; i++){
//     if(array[i]%2==0){
//         array[i]=0
//     }
// }
// console.log(array);


// 14.Q. Write a function that takes two arrays of integers and returns a new array that contains the sum of both arrays combined. For example : arr1 = [1,2,3,4,5,6,7,8,9], arr2 = [4,5,6,7,8,9,1,2,3]. Output = [5,7,9,11,13,15,8,10,12].

// var arr1=[1,2,3,4,5];
// var arr2=[1,2,3,4,5];
// var sum =[];
// for(var i=0; i<arr1.length;i++){
//    sum[i]=arr1[i]+arr2[i]

// }
// console.log(sum);


// palindrom number-----------------

// var num="racecar";
// var len=num.length;
// var flag=false;
// for(i=0; i<len/2; i++){
//     // console.log(num[i]);
//     // console.log(num[len-1-i]);
//     if(num[i]== num[len-1-i]){
//         flag = true
//     }
    
// }
// if(flag == true){
//     console.log(" palindrom");
// }else{
//     console.log("not palindrom");
// }


// var num1=1211;
// var num = num1.toString();
// var len=num.length;
// var flag = false
// for(i=0; i<len/2; i++){
//     // console.log(num[i]);
//     // console.log(num[len-1-i]);
//     if(num[i]== num[len-1-i]){
//         flag = true
//     }
    
// }
// if(flag == true){
//     console.log("yes");
// }else{
//     console.log("no");
// }


// test questions  -------------------

// 1.
// var array=[34,54,65,23,5,676,32,34]
// var target=66;
// var flag=false;
// for(i=0; i<array.length; i++){
//     for(j=i+1; j<array.length; j++){
//         if(array[i] + array[j] == target){
//             flag=true
//             console.log(array[i],array[j]);
//         }
//     }
// }
// if(!flag){
//     console.log("not found");
// }


// 2.
// var start=5768
// var end=78656
// sum=0;
// for(var i=start; i<=end; i++){
//     if(i%2==0){
//         sum=sum+i;
//     }
// }
// console.log(sum);


// 3.
// var num=19;
// var array=[3,5,33,23,56,19,,77,89]
// var index=0
// for(i=0; i<array.length; i++){
//     if(array[i]==num){
//         index=i
//     }
// }
// console.log(index);


// 4.
// var array=[2,4,5,6,7,8,9]
// var object={};
// for(i=0; i<array.length; i++){
//     object[i]=array[i]
// }
// console.log(object);

// var arr=[12,24,3,88,55,0]
// var newArray=[]
// for(var i =0; i<arr.length; i++){
//     for(var j=i+1; j<arr.length; j++){
//         if(arr[i]<arr[j]){
//             var temp = arr[i];
//             arr[i] = arr[j];
//             arr[j]= temp;
//         }
//     }
//     newArray.push(arr[i])
// }
// console.log(newArray);

// var arr=[1,3,4,0,6,3,3]
// var target = 3
// for(var i=arr.length-1; i>=0; i--){
//     if(arr[i]== target){
//         console.log(i);
//         break;
//     }
// }








