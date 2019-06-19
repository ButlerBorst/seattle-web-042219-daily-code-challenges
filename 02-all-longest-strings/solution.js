function longestStrings(stringArray){
  let arrayLength = stringArray.length
  let longStrings = []
  let maxLength = 0

  for (let i = 0; i < arrayLength; i++){
    console.log(`i: ${i}`)
    console.log(`string length: ${stringArray[i].length}`)
    if (stringArray[i].length > maxLength){
      maxLength = stringArray[i].length
    }
    console.log(`maxLength: ${maxLength}`)
  }
  for(let j = 0; j < arrayLength; j++){
    if (stringArray[j].length === maxLength){
      longStrings.push(stringArray[j])
    }
  }
  return longStrings
}
