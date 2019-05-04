'use strict';


const story = document.getElementById('historyTrying');
const randomNum = createRand(4, 0, 9).join('');
let counter = 0;


// генератор рандомных неповторяющихся чисел.
function inArray(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (num === arr[i]) return true;
    }
    return false;
}

function createRand(randLength, min, max) {
    let randArray = [],
        i = 0;
    if (randLength > (max - min + 1)) {
        return null;
    }
    while (i < randLength) {
        let rand = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!(inArray(randArray, rand))) {
            i++;
            randArray.unshift(rand);
        }
    }
    return randArray;
}

// функция  с логикой работы игры
function bullsAndCows() {
    let bulls = 0;
    let cows = 0;
    counter++;
    let uTry = document.getElementById('input_lag').value.slice(0, 4);

    if (randomNum === uTry) {
        story.insertAdjacentHTML('afterend', '<b style="color:green">' + uTry + '<br>Мои поздравления! В этот раз вы победили! <br> Правильный ответ был  ' + randomNum );
        return false;
    }
    for (let i = 0; i < 4; i++) {
        if (randomNum[i] === uTry[i]) {
            bulls++;
        } else if (randomNum.indexOf(uTry[i]) >= 0) {
            cows++;
        } else if (counter >= 8) {
            story.insertAdjacentHTML('beforeBegin', '<b style="color:red">' + '<br>Количество попыток исчерпано! <br>В следующий раз повезет! <br> Правильный ответ был  ' + randomNum );
            document.getElementById('magic').innerHTML = ' <form id="form" onsubmit="return false">\n' +
                '                <input type="text" id="input_lag" name="get_num" onkeyup="validate(this)" disabled placeholder=" Введи 4 цифры"\n' +
                '                       autocomplete="off" \n' +
                '                       />\n' +
                '                <input class="submits" type="submit" value="Отправить"/>\n' +
                '            </form>';

            break;
        }
    }


    story.insertAdjacentHTML('afterend', '' +
        '<div style="border:1px solid #aaa;padding:3px 7px; margin: 7px; font-size: 12px">' +
        'Попытка №' + counter + ' &nbsp; &nbsp;       Введено    -' + uTry + '    &nbsp;   =>  ' + bulls + ' Быков и ' + cows + ' Коров</div>')
}












