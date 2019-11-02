var str = 'The quick brown fox jumps over the lazy dog.';

var words = str.split();
console.log(words);
// expected output: "fox"

var chars = str.split('');
// expected output: "k"

var strCopy = str.split();
// expected output: Array ["The quick brown fox jumps over the lazy dog."]
