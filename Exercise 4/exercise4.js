function reverseVowels(str) {
  const vowels = "aeiouAEIOU";
  const chars = [...str];
  const vowelChars = chars.filter(c => vowels.includes(c)).reverse();

  return chars
    .map(c => vowels.includes(c) ? vowelChars.shift() : c)
    .join('');
}
