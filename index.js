const lengthOfLongestSubstring = (s) => {
  let answer = 0;
  const map = new Map();
  for (let i = 0, j = 0; j < s.length; j++) {
    if (map.has(s.charAt(j))) {
      i = Math.max(map.get(s.charAt(j)), i);
    }
    answer = Math.max(answer, j - i + 1);
    map.set(s.charAt(j), j + 1);
  }
  return answer;
};

// Expected 7
console.log(lengthOfLongestSubstring('abcdeafbdgcbb'));
// Expected 3
console.log(lengthOfLongestSubstring('abcabcbb'));
// Expected 3
console.log(lengthOfLongestSubstring('pwwkew'));
// Expected 0
console.log(lengthOfLongestSubstring(''));
