console.log("Js file working") ; 

let mode=0 ; 
/* 0 - light mode , 1- dark mode*/

function Toggle(){
    if(mode==0){
        //switch to dark mode
        document.body.style.backgroundColor="black";
        document.body.style.color="white" ; 
        mode=1; 
        document.getElementById('toggle-button').style.backgroundColor="white";
        document.getElementById('toggle-button').style.color="black";
          document.getElementById('toggle-button').innerText="Light Mode";
          document.getElementById('header').innerHTML="Dark Mode" ; 
       
    }
    else{
        console.log('light mode working');
        // switch to light mode
        document.body.style.backgroundColor="white";
        document.body.style.color="black" ;  
         document.getElementById('toggle-button').style.backgroundColor="black";
        document.getElementById('toggle-button').style.color="white";
          document.getElementById('toggle-button').innerText="Dark Mode";
            document.getElementById('header').innerHTML="Light Mode" ; 
        mode=0; 
    }
    
}
