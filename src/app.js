import css from './main.css';
import { shuffle, setScrollToBottom } from './utilities';
import { normalColors, bgColors, mainColor } from './colors';

// shuffle colors after every page reload
window.normalColors = shuffle(normalColors);
window.bgColors = shuffle(bgColors);

let colored_text = $("#colored-text");
colored_text.on("input", () => {
    createColoredText();
});

const defaultText = `<div><span><br></span></div>`;

/**
 * create colored text paragraph
 */
function createColoredText()
{
    let colored_text = $("#colored-text");

    let normalColorCounter = 0;
    let bgColorCounter = 0;

    let lines = colored_text.find('div, p, font');

    // set to storage
    localStorage.setItem('plainText', colored_text.html());

    for (let i = 0; i < lines.length; i++) {

        let currentColor = (i === 0) ? mainColor : (i + 1) % 5 === 0
            ? bgColors[bgColorCounter++]
            : normalColors[normalColorCounter++];

        if (normalColorCounter >= normalColors.length)
            normalColorCounter = 0;

        if (bgColorCounter >= bgColors.length)
            bgColorCounter = 0;

        let line = $(lines[i]);

        // if there is a conflict of elements here, don't make it more complex...
        if (line.find(':not(span)').length > 0 && !line.hasClass('MsoNormal'))
            continue;

        // always content of each line are in a single span
        if (line.find('span').length !== 1) {
            line.html(`<span>${line.text()}</span>`);
        }

        // set styles of line
        line = line.find('span');
        line.css({
            color: currentColor.textColor,
            backgroundColor: currentColor.bgColor,
        });
        line.attr('id', `colored-text-${i}`);

        let lineText = line.text();

        // set line font size by length
        if (lineText.length <= 16)
            line[0].style.fontSize = '70px';

        else if (lineText.length > 16 && lineText.length <= 20)
            line[0].style.fontSize = '55px';

        else if (lineText.length > 20 && lineText.length <= 26)
            line[0].style.fontSize = '50px';

        else if (lineText.length > 26 && lineText.length <= 31)
            line[0].style.fontSize = '43px';

        else if (lineText.length > 31 && lineText.length <= 40)
            line[0].style.fontSize = '38px';

        else if (lineText.length > 40 && lineText.length <= 50)
            line[0].style.fontSize = '27px';

        else if (lineText.length > 50)
            line[0].style.fontSize = '20px';
    }
}

function selectAll()
{
    colored_text.focus();
    document.execCommand('selectAll', false, null);
}

function clearInput()
{
    $("#colored-text").html(defaultText);
    createColoredText();
}

$("#select-all-btn").on('click', () => {
    selectAll();
});

$("#clear-btn").on('click', () => {
    clearInput();
    $("#colored-text").focus();
});

// set saved text to page
$(document).ready(() => {
    let mainText = localStorage.getItem('plainText');
    if (mainText)
        $("#colored-text").html(mainText);
    else
        $("#colored-text").html(defaultText);

    createColoredText();
});