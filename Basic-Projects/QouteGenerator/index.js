console.log('Js file working'); 

const qoutes=["Nero Fiddles While Rom Burns" , "Don't Run Away, Break Through It" , "It's Now or Never" , "The world is so distracted , the one who focuses wins" , "Discipline is the Key" ]; 
let indx= Math.random() * 4 ; 

function GenerateRandomQoute(){

    let indx= Math.floor(Math.random() * 5) ; 
    console.log(indx) ;
    document.getElementById('qoute').innerHTML=`${qoutes[indx]}`;
}
