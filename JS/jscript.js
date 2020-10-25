const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.cal-screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');
const deleteBtn = document.querySelector(".btn-delete")

for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function(){
        let number = btns[i].getAttribute("data-num");
        screen.value += number;
    })

    equalBtn.addEventListener('click', function(){
        if(screen.value === ''){
            alert("input is empty")
        } else{
            let value = eval(screen.value)
            screen.value = value;
        }
    })

    clearBtn.addEventListener('click', function(){
        screen.value = '';
    })

    deleteBtn.addEventListener('click', function(){
        screen.value = pop(value);
    })

}


// calculator

const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexBtn = document.querySelector('.btn-one');
const bodyBcg = document.querySelector('body');
const hex = document.querySelector('.hex');


hexBtn.addEventListener('click', getHex);

function getHex(){
    let hexCol = '#';
    for(let i = 0; i < 6; i++){
        let random = Math.floor(Math.random() * hexNumbers.length);

        hexCol += hexNumbers[random];
    }
        bodyBcg.style.backgroundColor = hexCol;
        hex.innerHTML = hexCol;
}
