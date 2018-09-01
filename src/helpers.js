const findWordsInText = (text) => {
  const spaceRegexp = / /g;
  const letterRegexp = /[.,:;?!'"-()\r\n]/g;
  let cleanText;
  let result;

  cleanText = text.toLowerCase().replace(letterRegexp, ' ').split(spaceRegexp);
  result = cleanText.filter((value) => value.length > 2);

  return result;
}

const findOccurrences = (text) => {
  const words = findWordsInText(text);
  const total = words.length;
  let occurences = {};

  for (var i = 0, n = total; i < n; i++) {
    let word = words[i];

    if (occurences.hasOwnProperty(word)) {
      let occurence = occurences[word].occurence + 1;
      occurences[word] = setOccurence(occurence, total);
    } else {
      occurences[word] = setOccurence(1, total);
    }
  }

  return occurences;
}

const setOccurence = (occurence, total) => ({
  occurence,
  frequency: calculateFrequency(occurence, total),
});

const calculateFrequency = (occurence, total) => (occurence / total) * 100;

export default findOccurrences;
