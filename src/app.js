import css from './main.css';
import { shuffle, setScrollToBottom } from './utilities';
import { normalColors, bgColors, mainColor } from './colors';

// shuffle colors after every page reload
window.normalColors = shuffle(normalColors);
window.bgColors = shuffle(bgColors);

$("#colored-text").on("input", () => {
    createColoredText();
});

/**
 * create colored text paragraph
 */
function createColoredText()
{
    let colored_text = $("#colored-text");

    let normalColorCounter = 0;
    let bgColorCounter = 0;

    let lines = colored_text.find('div');

    // set to storage
    localStorage.setItem('mainText', colored_text.html());

    for (let i = 0; i < lines.length; i++) {

        let currentColor = (i + 1) % 5 === 0
            ? bgColors[bgColorCounter++]
            : normalColors[normalColorCounter++];

        if (normalColorCounter >= normalColors.length)
            normalColorCounter = 0;

        if (bgColorCounter >= bgColors.length)
            bgColorCounter = 0;

        let line = $(lines[i]);
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

// set saved text to page
$(document).ready(() => {
    let mainText = localStorage.getItem('mainText');
    $("#colored-text").html(mainText);
    createColoredText();
});