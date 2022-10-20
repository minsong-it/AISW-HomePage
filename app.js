// MainRollingBanner : image Slide 기능 
let imgIndex = 0;
carousel();

function carousel(){
    let i;
    var x = document.getElementsByClassName("myImg");
    for (i=0; i<x.length; i++){
        x[i].style.display = "none";
    }
    imgIndex++;

    if(imgIndex > x.length){
        imgIndex = 1
    }

    x[imgIndex-1].style.display = "block";
    setTimeout(carousel, 7000);
}
