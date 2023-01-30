var lengthOfLastWord = function(s) {
    let counter =0, wordFound=false;
    for(let x=s.length-1;x>=0;x--)
    {
        if(s[x]===' '){
            if(!wordFound)
            {
                continue;
            }
            break;
        }
        wordFound=true;
        counter++;
    }
    return counter;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord( "   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));