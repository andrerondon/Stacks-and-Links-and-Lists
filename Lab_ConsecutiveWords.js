class Node {
    constructor(text) {
      this.text = text;
    }
}

function removeDuplicateWords(string) {
    let arr = string.split(' ')
    let newArr = " "
    for (let i = 0; i < arr.length; i++){
        newArr = arr[i]
        if (arr.includes(newArr)){
            return true
        } else {
            return false
        }
       
    }
    return newArr
}


// const nn = new Node("sun moon moon sun");
// console.log(nn.removeDuplicateWords());

  

console.log(removeDuplicateWords('sun moon moon sun'));
console.log(removeDuplicateWords('apple apple banana pear banana'));
console.log(removeDuplicateWords('a a a apple banana banana pineapple'));
  






  

// function characters( string ){
//     let unique='';
//     for(let i=0; i<string.length; i++){
//         if(unique.indexOf(string[i])==-1){
//             unique += string[i];
//         }
//     }
//     return unique;
// }
// console.log(characters('sun moon moon sun'));
// console.log(characters('apple apple banana pear banana'));
// console.log(characters('a a a apple banana banana pineapple'));




// function removeDuplicateWords (string) {
//     let arr = string.split(' ')
//     let finalStr = ''
//     for(let i = 0; i < arr.length; i++){
//         if(string.indexOf(finalStr[i])==-1){
//             finalStr += arr[i];
//         }
//     }

//       for ( let i = 0; i < arr.length; i++) {
//            let elem = arr[i]
//            if ( elem !== arr[i-1]){
//              finalStr += elem + ' '
//            } 
           
//          // check every element next to one and we will see how it works
          
//       }
//          return finalStr.trim('') // we have an extra space in the end and we need to remove it 
//          return finalStr
//   }