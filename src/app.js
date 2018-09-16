import css from './main.css';
import { shuffle, setScrollToBottom } from './utilities';
import { normalColors, bgColors, mainColor } from './colors';

// shuffle colors after every page reload
window.normalColors = shuffle(normalColors);
window.bgColors = shuffle(bgColors);

const colored_text = document.getElementById("colored-text");
colored_text.addEventListener("input", () => {
    createColoredText();
});

const defaultText = `<div><span><br></span></div>`;
const TEXT_STORAGE_NAME = 'plainText';

/**
 * create colored text paragraph
 */
function createColoredText()
{
    let normalColorCounter = 0;
    let bgColorCounter = 0;

    let lines = colored_text.querySelectorAll('div, p, font');

    // set to storage
    if (colored_text.innerText)
        localStorage.setItem(TEXT_STORAGE_NAME, colored_text.innerHTML);
    else
        localStorage.setItem(TEXT_STORAGE_NAME, '');

    for (let i = 0; i < lines.length; i++) {

        let currentColor = (i === 0) ? mainColor : (i + 1) % 5 === 0
            ? bgColors[bgColorCounter++]
            : normalColors[normalColorCounter++];

        if (normalColorCounter >= normalColors.length)
            normalColorCounter = 0;

        if (bgColorCounter >= bgColors.length)
            bgColorCounter = 0;

        let line = lines[i];

        // if there is a conflict of elements here, don't make it more complex...
        if (line.querySelectorAll(':not(span)').length > 0 && !line.classList.contains('MsoNormal'))
            continue;

        // always content of each line are in a single span
        if (line.querySelectorAll('span').length !== 1) {
            line.innerHTML = `<span>${line.innerText}</span>`;
        }

        // set styles of line
        line = line.querySelector('span');

        line.style.color = currentColor.textColor;
        line.style.backgroundColor = currentColor.bgColor;
        line.id = `colored-text-${i}`;

        let lineText = line.innerText;

        // set line font size by length
        if (lineText.length <= 16)
            line.style.fontSize = '70px';

        else if (lineText.length > 16 && lineText.length <= 20)
            line.style.fontSize = '55px';

        else if (lineText.length > 20 && lineText.length <= 26)
            line.style.fontSize = '50px';

        else if (lineText.length > 26 && lineText.length <= 31)
            line.style.fontSize = '43px';

        else if (lineText.length > 31 && lineText.length <= 40)
            line.style.fontSize = '38px';

        else if (lineText.length > 40 && lineText.length <= 50)
            line.style.fontSize = '27px';

        else if (lineText.length > 50)
            line.style.fontSize = '20px';
    }
}

function selectAll()
{
    colored_text.focus();
    document.execCommand('selectAll', false, null);
}

function clearInput()
{
    colored_text.innerHTML = defaultText;
    createColoredText();
}

document.getElementById('select-all-btn').addEventListener('click', () => {
    selectAll();
});

document.getElementById('clear-btn').addEventListener('click', () => {
    clearInput();
    colored_text.focus();
});

// set saved text to page
(function() {
    const coloredText = document.getElementById('colored-text');

    let mainText = localStorage.getItem(TEXT_STORAGE_NAME);
    if (mainText)
        coloredText.innerHTML = mainText;
    else
        coloredText.innerHTML = defaultText;

    createColoredText();
    setScrollToBottom(coloredText);
})();