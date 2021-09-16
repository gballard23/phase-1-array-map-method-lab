const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];



function titleCase(str) {
  const result = [];
  const wordsArr = str.split(' ');
  for (let i = 0; i < wordsArr.length; i++) {
    if (typeof wordsArr[i][0] === 'string') {
      const firstLetter = wordsArr[i][0].toUpperCase();
      result.push(firstLetter + wordsArr[i].slice(1));
    }
  }
  return result.join(' ');
}

const titleCased = () => {
  return tutorials.map(titleCase);
}

