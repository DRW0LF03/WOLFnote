let input = document.querySelector("input");
let btn = document.querySelector(".btn");

btn.addEventListener('click',addList);
input.addEventListener('keyup', (e)=>{
    (e.keyCode === 13 ? addList(e) : null);
})


function addList(e){
    let notc = document.querySelector(".notCompleted");
    let com = document.querySelector(".Completed");

    let newLi = document.createElement('li');
    let checkBtn = document.createElement("button"); 
    let deletBtn = document.createElement("button"); 

    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    deletBtn.innerHTML = '<i class="fa fa-trash"></i>';

    if(input.value !== ''){
        newLi.textContent = input.value;
        input.value = '';
        notc.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(deletBtn);
    }

    checkBtn.addEventListener('click', function(){
        let parent = this.parentNode;
        parent.remove();
        com.appendChild(parent);
        checkBtn.style.display = "none";
    })

     deletBtn.addEventListener('click', function(){
        let parent = this.parentNode;
        parent.remove();
      
    })
}
// time here 
function show(){
    'use strict';
    var now = new Date(),
    hours = now.getHours(),
    minutes = now.getMinutes(),
    seconds = now.getSeconds()

   

    if(hours < 10 ){
        hours = '0'+ hours;
    }

    if(minutes < 10 ){
        minutes = '0'+ minutes;
    }
    if(seconds < 10 ) {
        seconds = '0'+ seconds;
    }
    var date = document.getElementById('clock').textContent = hours + ":" + minutes+ ":" + seconds;
}
window.onload =function() {
    'use strict';

    setInterval(show,500);

}
