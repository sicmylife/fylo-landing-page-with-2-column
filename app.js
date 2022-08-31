

const input = document.getElementById('input1');
const input2 = document.getElementById('input2');
const btn = document.getElementById('btn-start');
const btn2 = document.getElementById('btn-start2');
const check = document.getElementById('check');
const check2 = document.getElementById('check2');
const sent = document.getElementById('sent');

btn.addEventListener('click',validate)
btn2.addEventListener('click',validate2)

function validate(){
 let email = input.value;
 let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 if (email.match(regex)){
     console.log('sirve');
check.classList.remove('show')




}else {
    console.log(' no sirve');
    input.setAttribute('style', 'border:2px solid red;');
    check.classList.add('show')



}
}

function validate2(){
    let email2 = input2.value;
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email2.match(regex)){
        console.log('sirve');
   check2.classList.remove('show')

   
   
   
   }else {
       console.log(' no sirve');
       input2.setAttribute('style', 'border:2px solid red;');
       check2.classList.add('show')
   
   
   }
   
   
   }