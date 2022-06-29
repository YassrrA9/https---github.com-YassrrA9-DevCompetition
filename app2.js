// document.getElementById('TermSelection1').addEventListener('click',toShowSelection());
// document.getElementById('TermSelection2').addEventListener('click',toShowSelection());
// document.getElementById('TermSelection3').addEventListener('click',toShowSelection());

function toShowSelection221(){
    // document.getElementById('checkBoxAppearing').setAttribute('style','visibility: visible')
    document.getElementById('submitButton2').setAttribute('style','display:none')
    document.getElementById('submitButton3').setAttribute('style','display:none')
    document.getElementById('submitButton1').setAttribute('style','visibility: visible')
    document.getElementById('submitButton1D').setAttribute('style','visibility: visible')
    document.getElementById('submitButton2D').setAttribute('style','display:none')
    document.getElementById('submitButton3D').setAttribute('style','display:none')
    document.getElementById('Term222').setAttribute('style','display: none')
    document.getElementById('Term223').setAttribute('style','display: none')
    document.getElementById('Term221').setAttribute('style','visibility: visible')
    



}
function toShowSelection222(){
    // document.getElementById('checkBoxAppearing').setAttribute('style','visibility: visible')
    document.getElementById('submitButton1').setAttribute('style','display:none')
    document.getElementById('submitButton3').setAttribute('style','display:none')
    document.getElementById('submitButton2').setAttribute('style','visibility: visible')
    document.getElementById('submitButton1D').setAttribute('style','display:none')
    document.getElementById('submitButton2D').setAttribute('style','visibility: visible')
    document.getElementById('submitButton3D').setAttribute('style','display:none')
    document.getElementById('Term221').setAttribute('style','display: none')
    document.getElementById('Term223').setAttribute('style','display: none')
    document.getElementById('Term222').setAttribute('style','visibility: visible')
    



}
function toShowSelection223(){
    // document.getElementById('checkBoxAppearing').setAttribute('style','visibility: visible')
    document.getElementById('submitButton1').setAttribute('style','display:none')
    document.getElementById('submitButton2').setAttribute('style','display:none')
    document.getElementById('submitButton3').setAttribute('style','visibility: visible')
    document.getElementById('submitButton1D').setAttribute('style','display:none')
    document.getElementById('submitButton2D').setAttribute('style','display:none')
    document.getElementById('submitButton3D').setAttribute('style','visibility: visible')
    document.getElementById('Term221').setAttribute('style','display: none')
    document.getElementById('Term222').setAttribute('style','display: none')
    document.getElementById('Term223').setAttribute('style','visibility: visible')
    



}

function toHideSelection(){
    // document.getElementById('checkBoxAppearing').setAttribute('style','visibility: hidden')
    document.getElementById('submitButton1').setAttribute('style','display:none')
    document.getElementById('submitButton2').setAttribute('style','display:none')
    document.getElementById('submitButton3').setAttribute('style','display: none')
    document.getElementById('submitButton1D').setAttribute('style','display:none')
    document.getElementById('submitButton2D').setAttribute('style','display:none')
    document.getElementById('submitButton3D').setAttribute('style','display:none')
    document.getElementById('Term221').setAttribute('style','display: none')
    document.getElementById('Term222').setAttribute('style','display: none')
    document.getElementById('Term223').setAttribute('style','display: none')

}

// var generalChoice = document.getElementsByName('Gchoice')

// if(generalChoice.checked==true){
//     selects();
// }
function selects1(){  
    var ele=document.getElementsByName('choice1'); 
    document.getElementById('submitButton1D').setAttribute('style','visibility: visible')
    for(var i=0; i<ele.length; i++){  
        if(ele[i].type=='checkbox')  
            ele[i].checked=true;  
    }  
}  
function selects2(){  
    var ele=document.getElementsByName('choice2'); 
    document.getElementById('submitButton2D').setAttribute('style','visibility: visible') 
    for(var i=0; i<ele.length; i++){  
        if(ele[i].type=='checkbox')  
            ele[i].checked=true;  
    }  
}  
function selects3(){  
    var ele=document.getElementsByName('choice3');  
    document.getElementById('submitButton3D').setAttribute('style','visibility: visible')
    for(var i=0; i<ele.length; i++){  
        if(ele[i].type=='checkbox')  
            ele[i].checked=true;  
    }  
}  
function deSelect1(){  
    var ele=document.getElementsByName('choice1');  
    for(var i=0; i<ele.length; i++){  
        if(ele[i].type=='checkbox')  
            ele[i].checked=false;  
          
    }  
}    
function deSelect2(){  
    var ele=document.getElementsByName('choice2');  
    for(var i=0; i<ele.length; i++){  
        if(ele[i].type=='checkbox')  
            ele[i].checked=false;  
          
    }  
}           
function deSelect3(){  
    var ele=document.getElementsByName('choice3');  
    for(var i=0; i<ele.length; i++){  
        if(ele[i].type=='checkbox')  
            ele[i].checked=false;  
          
    }  
}  

// const terms = ['221','222','223']
// terms[0] = [
//     event1 = {Id:1, subject:'Classes begin', date: new Date(2022,7,28)},
//     event2 = {Id:2, subject:'Last day for registration confirmation', date: new Date(2022,7,30)},
//     event3 = {Id:3, subject:'Last day for dropping course(s) without permanent record', date: new Date(2022,8,8)},
//     event4 = {Id:4, subject:'National Day Holiday', date: new Date(2022,8,22)},
//     event5 = {Id:5, subject:'Registration for Co-op/Internship in term 222/223', date: new Date(2022,8,25)},
//     event6 = {Id:6, subject:'Last day for dropping course(s) with grade of "W"', date: new Date(2022,10,3)},
//     event7 = {Id:7, subject:'Beginning of Early Registration for 222', date: new Date(2022,10,5)},
//     event8 = {Id:8, subject:'Midterm Break', date: new Date(2022,10,24)},
//     event9 = {Id:9, subject:'Classes resumes after Midterm Break', date: new Date(2022,11,4)},
//     event10 = {Id:10, subject:'Normal Thursday classes', date: new Date(2022,11,18)},
//     event11 = {Id:11, subject:'Exam preparation break', date: new Date(2022,11,19)},
//     event12 = {Id:12, subject:'Final examinations', date: new Date(2022,11,21)},
//     event13 = {Id:13, subject:'Last day for faculty to submit grades to the Deanship', date: new Date(2023,0,5)}
//     ]
// terms[1] = [
//     event1 = {Id:1, subject:'Classes begin', date: new Date(2023,0,15)},
//     event2 = {Id:2, subject:'Last day for registration confirmation', date: new Date(2023,0,17)},
//     event3 = {Id:3, subject:'Last day for dropping course(s) without permanent record', date: new Date(2023,0,26)},
//     event4 = {Id:4, subject:'Registration for Co-op/Internship in 223/231 and Summer Training 223', date: new Date(2023,1,5)},
//     event5 = {Id:5, subject:'Saudi Founding Day', date: new Date(2023,1,22)},
//     event6 = {Id:6, subject:'Last day for dropping course(s) with grade of "W"', date: new Date(2023,2,23)},
//     event7 = {Id:7, subject:'Beginning of Early Registration for 223,231', date: new Date(2023,2,25)},
//     event8 = {Id:8, subject:'Eid Al-Fitr Holidays', date: new Date(2023,3,14)},
//     event9 = {Id:9, subject:'Classes resumes after Ramadhan Break', date: new Date(2023,3,30)},
//     event10 = {Id:10, subject:'Last day for withdrawal from all courses with grade of "W"', date: new Date(2023,4,4)},
//     event11 = {Id:11, subject:'Normal Wednesday classes', date: new Date(2023,4,14)},
//     event12 = {Id:12, subject:'Normal Thursday classes', date: new Date(2023,4,15)},
//     event13 = {Id:13, subject:'Exam preparation break', date: new Date(2023,4,16)},
//     event14 = {Id:13, subject:'Final examinations', date: new Date(2023,4,17)},
//     event15 = {Id:13, subject:'Last day for faculty to submit grades to the Deanship', date: new Date(2023,5,1)}

// ]
// terms[2] = [
//     event1 = {Id:1, subject:'Classes begin', date: new Date(2023,5,11)},
//     event2 = {Id:2, subject:'Last day for registration confirmation', date: new Date(2023,5,13)},
//     event3 = {Id:3, subject:'Last day for dropping course(s) without permanent record', date: new Date(2023,5,18)},
//     event4 = {Id:4, subject:'Hajj Holidays', date: new Date(2023,5,23)},
//     event5 = {Id:5, subject:'Classes resume after Hajj Holidays', date: new Date(2023,6,9)},
//     event6 = {Id:6, subject:'Last day for dropping course(s) with grade of "W" thru Portal', date: new Date(2023,6,27)},
//     event7 = {Id:7, subject:'Last day of dropping all course(s) with grade W', date: new Date(2023,7,10)},
//     event8 = {Id:8, subject:'Final examinations', date: new Date(2023,7,15)},
//     event9 = {Id:9, subject:'Last day for faculty to submit grades to the Deanship ', date: new Date(2023,7,20)}
//     ]

// console.log(terms[0])
// console.log('--------------------------------------------')
// console.log(terms[1])
// console.log('--------------------------------------------')
// console.log(terms[2])
// console.log('--------------------------------------------')
