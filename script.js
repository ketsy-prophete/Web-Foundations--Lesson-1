function stringCounter(sentence) {
    let sentenceArray = sentence.split(" ");
    let wordCount = sentenceArray.length;
    let characterCount = sentence.length;
    console.log(`No. of Words: ${wordCount}`);
    console.log(`No. of Characters: ${characterCount}`);
}


// // TEST CASE 1
let sentence1 = "The largest living thing on earth is a giant sequoia named General Sherman";
stringCounter(sentence1);

// TEST CASE 2 
let sentence2 = "A sunset on Mars is blue";
stringCounter(sentence2);
