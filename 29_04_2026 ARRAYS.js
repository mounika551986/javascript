//Arrays collection of data (collection of homogenious and heterogineous)
//it is used to store in [] bases to represent an array
// it is used to seperate by column and comma
// we can stored like strings,boolean, number, undefined, null within an array we can use multiple arrays
// multiple dimensional array// an array which is present in another array
//what is the need to store an array
//name
//location
//address
//...
//var  let const

var arr=[1,2,3,4]
console.log(arr)

//adding an element to an array

//push (adding numbers last)
arr.push(5)
console.log(arr)
function hai(){
    arr.push(5)
    
}
hai()
console.log(arr)
arr.push(7)
console.log(arr)

//unshit -adding numbers front
arr.unshift(8)
console.log(arr)

//splice (index value, delete count,new)- we can add it any where or any location

arr.splice(2,0,"hello") //adding
console.log(arr)

arr.splice(2,2,"hai")
console.log(arr)

//how to access single items in array items
//with the help of index values
// it starts from o and ends at n-1 //n--> length of the array
var a=[1,2,3,4]
console.log(a[0])
console.log(a[3])
//referenceofthearray[0][1][2][3]...arr.n-1

//remove element from the array
//pop we use pop remove element

arr.pop()
console.log(arr)

//shift 
arr.shift()
console.log(arr)

//splice using splice we can add elements or remove the eleming
arr.splice(1,1)
console.log(arr)