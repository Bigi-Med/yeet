const REGEX = /[^a-zA-Z ]/g;
var mostCommonWord = function(paragraph, banned) {
    paragraph = paragraph.replace(REGEX, ' ');
    const hashmapBanned = {};
    const hashmapParagraph = {};
    const arrayParagraph = paragraph.split(' ');
    let output;
    let count = 0;
    
    for (let i = 0; i < banned.length; i++) {
        hashmapBanned[banned[i]] = 1;
    }
    
    for (let i = 0; i < arrayParagraph.length; i++) {
        const word = arrayParagraph[i].toLowerCase();
        if (!hashmapBanned[word] && word) {
            if (hashmapParagraph[word]) {
                hashmapParagraph[word]++;
                if (hashmapParagraph[word] > count) {
                    output = word;
                    count = hashmapParagraph[word];
                }
            } else {
                hashmapParagraph[word] = 1;
                if (!count) {
                    output = word;
                    count = 1;
                }
            }
        }
    }
    
    return output;
};