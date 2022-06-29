
// const toShowInfoC = document.getElementsByClassName('button5');
// document.getElementById('buttonPressed').addEventListener('click',toShowInfo());

function toShowInfo(){
    // const toBeApper = document.getElementsByClassName('InfoBox');
    // toBeApper.style.display = 'block';
    // document.getElementById("Info").style.visibility = "visible";
    document.getElementById('Info').setAttribute('style','visibility: visible')

}

function toHideInfo(){
    document.getElementById('Info').setAttribute('style','visibility: hidden')

}



