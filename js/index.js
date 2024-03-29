(function(){
    const link = document.querySelector('a');
if (Math.random() < 0.5) {
    link.textContent = 'ScriptJedi42';
    link.href = 'https://sj42.programmingmentor.com';
}

const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride';
sect.appendChild(para);

const text = document.createTextNode(' — the premier source for web development knowledge.');
const linkPara = document.querySelector('p');

linkPara.appendChild(text);

const textClone = text.cloneNode(true);

sect.appendChild(textClone);

linkPara.removeChild(text);

// textClone.parentElement.removeChild(textClone);
textClone.remove();

para.classList.add('chosen');


const clockElement = document.querySelector('.clock');
setInterval( () => clockElement.innerText = (new Date()).toLocaleTimeString(), 1000 );

const infoBlock = document.querySelector('.info-block');
for (let i = 0; i < 10; i++) {
    let info = document.createElement('p');
    info.style.padding = '10px';
    info.style.backgroundColor = '#999000';
    info.innerText = 'Item no: ' + i;
    infoBlock.appendChild(info);
}

    let counter = 0;
    document.querySelector('.counter-button').addEventListener('click', function() {
        document.querySelector('.click-count').textContent = ++counter;
    });

    // jQuery Sample
    $('.jq-sample').click( () => $('p').toggle('slow'));

  // Calculator
    const nums = document.querySelectorAll('.calc .nums button');
    const opers = document.querySelectorAll('.calc .opers button');
    const display = document.querySelector('.calc .display');
    const equal = document.querySelector('.calc .eq');

    let trigger = false;
    let deltaNumber;
    let deltaArr = [];
    let deltaOperation;
    let startData = 0;



    nums.forEach( buttonNum => buttonNum.addEventListener('click', numPressed) );
    function numPressed(ev) {
        const num = ev.target.innerText;
        display.value += num;
        deltaNumber = +num;
    }
    opers.forEach( buttonOper => buttonOper.addEventListener('click', operPressed) );
    function operPressed(ev) {
        startData = deltaNumber;
        const oper = ev.target.innerText;
        display.value = oper;
        deltaOperation = oper;
    }
    equal.addEventListener('click', calcOpereting );
    function calcOpereting(ev) {

    }

})();

