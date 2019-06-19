function validTime(time){
  let time_array = time.split(":")
  if (parseInt(time_array[0], 10) < 24 && parseInt(time_array[0], 10) >= 0 && parseInt(time_array[1], 10) >= 0 && parseInt(time_array[1], 10) < 60 ){
    return true
  }
    else {
      return false
    }

}

console.log(validTime('13:58'));
console.log(validTime('25:51'));
console.log(validTime('02:76'));
