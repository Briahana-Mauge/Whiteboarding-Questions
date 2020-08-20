/*
Given two strings, return whether the second can be transformed into the first by removing characters.

Ex. aabbaa can be transformed into aba by removing a, b, and a

Clarifications:

We can assume str2 always has greater or equal length than str1

Hints:

What if str1 is an empty string? Start with the case where str1 === str2 and then build up
 */

const newString = (str1, str2) => {
    let str2Obj = {};
  
    if(str2.length < str1.length || !str1.length) return false;
    for(let i = 0; i< str2.length; i++){
      if(!str2Obj[str2[i]]){
        str2Obj[str2[i]] = 1;
      }else{
        str2Obj[str2[i]]++;
      }
    }
    for(let i = 0; i<str1.length; i++){
      if(str2Obj[str1[i]]) {
        str2Obj[str1[i]]--;
      } else {
        return false;
        }
    }
    return true;
  }

  console.log(newString('aba','abcd')) //false
  console.log(newString('aba', 'aabbaa')) //true
  console.log(newString('cat', 'tacocta')) //true
  console.log(newString('wow', 'dinner')) //false
  console.log(newString('wow', 'dinner')) //false
  console.log(newString('wow', 'wo')) //false
  console.log(newString('', 'test')) //false