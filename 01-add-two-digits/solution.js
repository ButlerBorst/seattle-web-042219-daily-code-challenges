function addTwoDigits(num){
  let num_array = num.toString()
  num_array.split("")
  return parseInt(num_array[0]) + parseInt(num_array[1])

}
