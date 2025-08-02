console.log('Js file working') ;

let cnt=0 ;
function ShowClickCount(){
     document.getElementById('count').innerHTML=`${++cnt}`;
}
function ResetCount(){
    cnt=0 ;
   document.getElementById('count').innerHTML=`${cnt}`;
}