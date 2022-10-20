function longestWord (str){
    let words = str.split(" ");
    let longestWord = "";

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;       
        }
    }

    return longestWord;
}

console.log(longestWord("I decided to take a rest"));
console.log(longestWord("The second largest river in the world is the nile river"));