function validateHTML(html) {
    const tags = [];
    const splitHTML = html.split(/\s+/);
    for (let word of splitHTML) {
        if(word[0] === '<') {
            if (word[1] !== '/') {
                tags.push(word.substring(1, word.length - 1));
            } else {
                if (tags.length <= 0) {
                    return false;
                } else {
                    const tagToMatch = tags.pop();
                    if (tagToMatch !== word.substring(2, word.length - 1)) {
                        return false;
                    }
                }
            }
        }
    }
    return tags.length === 0;
}

const html = `<html> <body> This is abody <div>
I'm in the div  <h1> </div>   </h1> more
text </body> dklfjsldk 
</html>`;

console.log(validateHTML(html));