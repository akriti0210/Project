import React, { useState } from 'react'

function AutocorrectApp() {
    const [input, setInput] = useState("");
    const wordsToCorrect = {
        appel: "apple",
        henlo: "hello",
        google: "goggle"
    };

    function checkForWordMatch(e) {
        let allWords = e.split(" ");
        let lastTypedWord = allWords[allWords.length - 1];
        let currentTextLength = e.length;
        let wordToReplace = wordsToCorrect[lastTypedWord];
        if (wordsToCorrect[lastTypedWord] !== undefined) {
            e = e.slice(0, currentTextLength - lastTypedWord.length) + wordToReplace;
        }

        //For only one word, won't work for all words
        // if (wordsToCorrect[e] !== undefined) {
        //     let wordToReplace = wordsToCorrect[e]
        //     e = wordToReplace;
        // }

        setInput(e);

    }

    return (
        <div>
            <textarea type="text" onChange={(event) => checkForWordMatch(event.target.value)} value={input} >
            </textarea>
        </div>)
}

export default AutocorrectApp