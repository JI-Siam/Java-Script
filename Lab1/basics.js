
let courses=["HTML" , 'CSS' , 'JavaScript']

let student={
     name:"siam" , 
     age: 21 , 
     dept: "CSE", 
     email: "siam@gmail.com"
};

function showAlert(){
    alert(`Hello, ${student.name} Welcome to JavaScript class.`)
}

function showInfo(){
       document.getElementById("info-box").innerHTML=`
       <h1> Student Info </h2>
        <h2> Name: ${student.name} </h2> 
        <h2> Age : ${student.age} </h2> 
        <h2> Department : ${student.dept} </h2> 
        <h2> Email : ${student.email} </h2> 
       `
}
function showImage(){
    
}
