document.getElementById('button-submit').addEventListener('click',function(element){
const emailFeld=document.getElementById('user-email');
const emailValue=emailFeld.value;


const passwordFeld= document.getElementById('user-password');
const passwordValue=passwordFeld.value;


if(emailValue=== 'shsabbir02@gmail.com' && passwordValue==='myNameIsSabbir'){
    window.location.href=('html/index.html')
}
else{
    alert('chop madarcod')
}
})


