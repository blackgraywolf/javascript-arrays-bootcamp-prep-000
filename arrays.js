var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array,element){
  return [element, ...array] 
}
function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array,elemen){
  return [...array, elemen]
}
function destructivelyAddElementToEndOfArray(array,elemen){
  array.push(elemen)
  return array
}

function accessElementInArray(array,index){
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift()
  //this or array.splice(0,1) also does not work
  //what is wrong
}
function removeElementFromBeginningOfArray(array){
  
}