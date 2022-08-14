// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const set = new Set();
  const sortedS = s.split("").sort().join();
  set.add(sortedS);
  const sortedT = t.split("").sort().join();
  return set.has(sortedT);
};

const isAnagram2 = (s, t) => {
  if (s.length !== t.length) return false;

  const mapS = {};
  const mapT = {};

  for (let i = 0; i < s.length; i++) {
    if (s[i] in mapS) {
      mapS[s[i]] = mapS[s[i]] + 1;
    } else {
      mapS[s[i]] = 1;
    }

    if (t[i] in mapT) {
      mapT[t[i]] = mapT[t[i]] + 1;
    } else {
      mapT[t[i]] = 1;
    }
  }

  for (const key in mapS) {
    if (mapS[key] !== mapT[key]) {
      return false;
    }
  }

  for (const key in mapT) {
    if (mapS[key] !== mapT[key]) {
      return false;
    }
  }

  return true;
};

const isAnagram3 = (s, t) => {
  if (s.length !== t.length) return false;

  const obj = {};

  for (let i = 0; i < s.length; i++) {
    if (obj?.[s[i]]?.s) {
      obj[s[i]].s++;
    } else {
      obj[s[i]] = {
        ...(obj?.[s[i]] || {}),
        s: 1,
      };
    }

    if (obj?.[t[i]]?.t) {
      obj[t[i]].t++;
    } else {
      obj[t[i]] = {
        ...(obj?.[t[i]] || {}),
        t: 1,
      };
    }
  }

  for (const key in obj) {
    if (obj[key].s !== obj[key].t) {
      return false;
    }
  }

  return true;
};

const res = isAnagram3("qwe", "ewq");
console.log(res);

const res2 = isAnagram3("qwevffv", "ewq");
console.log(res2);
