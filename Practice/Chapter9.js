// Q1)Write a program to load a js file in a browser using promises. Use .then() to display an alert when the load is complete?

let p = new Promise((resolve, reject) => {
    function loadScript(src){
        let script = document.createElement("script");
        script.src = src
        script.onload = ()=>{
          resolve(src + " Done Sucess")
        }
        document.head.appendChild(script)
        
    }
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js")
})

p.then((value)=>{
    console.log(value);
})
// .catch((err)=>{
//     console.log(err);
// })
// let main2 = async ()=>{
//     console.log(new Date().getMilliseconds());
//     let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" ) 
//     console.log(a);
//     console.log(new Date().getMilliseconds());

// }
// main2()


// Q2)Write the same program from previous question and use async/await syntax?

// const loadScript = async (src)=>{
//     return new Promise((resolve, reject) => {
    
//         let script = document.createElement("script");
//         script.src = src
//         script.onload = ()=>{
//             resolve(src + " Done Sucess")
//         }
//         document.head.appendChild(script)
//     })
// }
// let main2 = async ()=>{
//     console.log(new Date().getMilliseconds());
//     let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" ) 
//     console.log(a);
//     console.log(new Date().getMilliseconds());

// }
// main2()

// Q3)Create a promise which reject after 3 sec use an async/await to get its value.use a try catch to handle its error?
// async function name(){
//     let p = await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("Promise Rejected Sorry bro")
//         }, 3000);
//     })
//     p.then((value)=>{
//         console.log(value); 
//     }).catch((err)=>{
//         console.log(err);
//     })
// }
// name()
// Q4)Write a program using Promise.all() inside an async/await to await 3 promises. compare its results with the case where we await these promises one by one?