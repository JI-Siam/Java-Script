
console.log('js file working');

function ChangeBackground(){
    let x , y  , z; 
    x= Math.random() * 255 ; 
    y= Math.random() *255 ; 
    z = Math.random() * 255 ; 
    console.log(`${x} , ${y} , ${z}`);
    console.log("function called") ; 

    document.body.style.backgroundColor=`rgb(${x} ,${y} ,${z})` ; 
   
}
