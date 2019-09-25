function findMax(myArray){
var maxNumber = 0;
for(var i = 0; i < myArray.length; i++){
  if(myArray[i] > maxNumber){
    maxNumber = myArray[i];
  }

}
return maxNumber;
}

var maximillion = [100, 3, 6, 12, 7, 21, 30, 650, 9, 1001, 950];
findMax(maximillion);
console.log(findMax(maximillion));
