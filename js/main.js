import Body1 from "./Body1.js"

const setup = document.querySelector('.setup')
const ques = document.querySelector('.ques')
const answ = document.querySelector('.answ')
const save = document.querySelector('.save')
const add = document.querySelector('.add')
const boxcontent = document.querySelector('.box__content')
const icon = document.querySelector('.box-icon')
const msg = document.querySelector('.msg');
var bool = true;

add.onclick = () => {
    if(bool) {
        bool = false;
        boxcontent.style.display = 'block'
    }else if(!bool){
        boxcontent.style.display = 'none'
        bool= true
    }
}
icon.onclick = () =>{
    boxcontent.style.display = 'none'
    bool= true
    ques.innerHTML = ''
    answ.innerHTML = ''
}

save.onclick = () => {
    if(ques.innerHTML == '' 
    && answ.innerHTML == '') {
        msg.style.display = 'block'
        msg.classList.add('msg-active');
        setTimeout(function() {
            msg.style.display = 'none'
        },3000)
    }else{
        new Body1(document.querySelector('.body'));    
    }
}

