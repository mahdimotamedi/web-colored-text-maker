import css from './main.css';
import { shuffle } from './utilities';
import { normalColors, bgColors, mainColor } from './colors';

window.normalColors = shuffle(normalColors);
window.bgColors = shuffle(bgColors);

$("#colored-text").on("focus", () => {
    document.execCommand('selectAll', false, null);
});

function createColoredText()
{
    let colored_text = $("#colored-text");

    colored_text.html("");

    let normalColorCounter = 0;
    let bgColorCounter = 0;

    let lines = $("#main-text").val().split('\n');
    for (let i = 0; i < lines.length; i++) {

        let currentColor = i !== 0 ?
            i % 4 === 0 ? bgColors[bgColorCounter++] : normalColors[normalColorCounter++]
            : mainColor;

        if (normalColorCounter >= normalColors.length)
            normalColorCounter = 0;

        if (bgColorCounter >= bgColors.length)
            bgColorCounter = 0;

        colored_text.append(`<span style="color: ${currentColor.textColor}; background-color: ${currentColor.bgColor}" id="colored-text-${i}">
                ${lines[i]}
            </span><br>`);

        let span = document.getElementById(`colored-text-${i}`);

        if (span.innerText.length <= 16)
            continue;

        if (span.innerText.length > 16 && span.innerText.length <= 20)
            span.style.fontSize = '55px';

        else if (span.innerText.length > 20 && span.innerText.length <= 26)
            span.style.fontSize = '50px';

        else if (span.innerText.length > 26 && span.innerText.length <= 31)
            span.style.fontSize = '43px';

        else if (span.innerText.length > 31 && span.innerText.length <= 40)
            span.style.fontSize = '38px';

        else if (span.innerText.length > 40 && span.innerText.length <= 50)
            span.style.fontSize = '27px';

        else if (span.innerText.length > 50)
            span.style.fontSize = '20px';
    }
}

$("#main-text").on('keyup', (e) => {
    let code = (event.keyCode ? event.keyCode : event.which);
    if(code != '13' && code != '8')
        return;

    setTimeout(createColoredText, 0)
});

$("#main-text").on('focus blur', (e) => {
    setTimeout(createColoredText, 0)
});