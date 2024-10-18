// console.log("Hello World!")
// var a = 12
// console.log("a="+a)
// if(a>10){
//     var a=30;
//     console.log("Hi",a)
// }
// console.log("Hello ",a)

// let c = 12
// let b = "12"
// let sim = Symbol("122")
// let today = Date()
// console.log(typeof today)
// console.log(today) 

// let a = 12
// let b = '12'
// if(a==b){
//     console.log("a==b is true")
// }
// else{
//     console.log("a==b is false")
// }
// if(a===b){
//     console.log("a===b is true")
// }
// else{
//     console.log("a===b is false")
// }

// let d = function (str = "Hello"){
//     console.log("Hi function calling "+str)
// }
// d("JS and CSS");

// function sum(a,b,c=50){
//     return a+b+c
// }
// let total = sum(3,4,100)
// console.log("Total = "+ total)


// function selectlanguage(lang){
//     let choice;
//     if(lang == 'C'){
//         function cCompiler(){
//             return "c compiler selected";
//         }
//         choice = cCompiler();
//     }
//     else if(lang == 'Java'){
//         function javaCompiler(){
//             return "java compiler selected";
//         }
//         choice = javaCompiler();
//     }
//     return choice;
// }
// console.log(selectlanguage('Java'))

// console.log("Hello JS")
// console.log(document);

// console.dir(document)
const div = document.getElementsByClassName("parent")
// console.log(div)
// div[0].innerHTML="<h2 style=color:red>ABES EC</h2>"
// const h1=document.createElement("h1")
// h1.innerText="Element is created by DOM function";
// h1.style.backgroundColor="cyan";
// h1.style.color="red";
// div[0].appendChild(h1);
// console.log(h1)

// const img=document.createElement("img")
// img.src="cat.jpg";
// img.setAttribute("height","200px");
// div[0].appendChild(img);
// div[0].removeChild(img);
// console.log(img)

// const button = document.getElementById("btn");
// console.log(button);
// const display = document.getElementById("disp");
// console.log(display);

// getData=()=>{
//     console.log('Calling getdata function');
//     display.innerHTML="<h3 style = color:red>Welcome to the CSE Department</h3>"
// }

// button.addEventListener("click",getData)

//Javascript Promises

// const promise = new Promise(
//     (resolve,reject)=>{
//         let a=12;
//         if(a>10){
//             resolve("Value of a is resolved");
//         }
//         else{
//             reject("a is rejected");
//         }
//     }
// );

// promise.then((msg)=>{console.log(msg)})
// .catch(error=>{console.log(error)})
// .finally(msg=>{console.log("All resources have been closed")})

// const promise = new Promise(
//     (resolve,reject)=>{
//         let a=Math.random()*100;
//         console.log(a)
//         if(a>=100 && a<=200){
//             resolve("Condition is true");
//         }
//         else{
//             reject("Condition is false");
//         }
//     }
// );

// promise.then((msg)=>{console.log(msg)})
// .catch(error=>{console.log(error)})
// .finally(msg=>{console.log("All resources have been closed")})

// const promise2 = new Promise(
//     (resolve,reject)=>{
//         resolve({name:"Jalaj",branch:"CSE"});
//     }
// );

// promise2.then((data)=>{console.log(data.name)})
// .catch(error=>{console.log(error)})

const response = fetch("https://dummyjson.com/products")
response.then(data=>{
    console.log(data);
    data.json().then(res=>{
        console.log(res.products[0].id+" "+res.products[0].title)
        const data=res.products[0].id+" "+res.products[0].title;
        div[0].innerHTML=`<h1> ${data} </h1>`
    })
})

