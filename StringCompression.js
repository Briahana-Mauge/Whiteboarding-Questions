/*
For each character in a string log the character and the count in a compressed format. 
Ex: stringCompression("aaabbcca") // "a3b2c2a1"
*/

const stringCompression = str => {
    let output = '';
    let count = 0;
  
    if(str.length === 0) return output += count;
  
    for (let i = 0; i < str.length; i++) {
      count++;
      if (str[i] != str[i + 1]) {
        output += str[i] + count;
        count = 0;
      } 
    }
    return output;
  };
  
  console.log(stringCompression('')) // '0'
  console.log(stringCompression('aaabbcca')) // 'a3b2c2a1'
  console.log(stringCompression('xyzzyx')) // 'x1y1z2y1x1'