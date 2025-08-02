console.log('Js file working'); 

const imageUrls=["images/image1.jpg" ,"images/image2.jpg" , "images/image3.jpg" , "images/image4.jpg" , "images/image5.jpg" ];

let indx=0 ; 

function ShowPreviousImage(){
    if(indx != 0){
        indx--;
        document.querySelector('.image-box').style.backgroundImage=`url('${imageUrls[indx]}')`;
    }
    else{
        window.alert("slide next");
    }
}

function ShowNextImage(){
    if(indx != imageUrls.length-1){
        indx++;
        document.querySelector('.image-box').style.backgroundImage=`url('${imageUrls[indx]}')`;
    }
    else{
        window.alert("slide previous");
    }
}