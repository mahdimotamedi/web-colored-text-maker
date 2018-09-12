/**
 * shuffle an array (randomise items)
 *
 * @param array
 * @return array
 */
export const shuffle = function(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

/**
 * set scroll of an element ot bottom
 *
 * @param obj
 */
export const setScrollToBottom = function (obj) {
    obj.scrollTop = obj.scrollHeight;
};