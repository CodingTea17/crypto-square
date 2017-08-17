function encoder(unencoded){
  console.log(unencoded);
  var unencodedMatrix = [[]];
  var unencoded = unencoded.match(/([A-Za-z])/g);
  console.log(unencoded);
  var length = unencoded.length;
  var height;
  var width;
  var counter = 0;
  if(Math.sqrt(length) === Math.floor(Math.sqrt(length))){
    height = Math.sqrt(length);
    width = Math.sqrt(length);
  } else{
    width = Math.ceil(Math.sqrt(length));
    height = Math.floor(Math.sqrt(length));
  }
  for(var i = 0;i < height; i++){
    unencodedMatrix[i] = [];
    for(var j = 0;j < width; j++){
      if(counter >= length){
        unencodedMatrix[i][j] = "";
      } else {
        unencodedMatrix[i][j] = unencoded[counter];
      }
      counter += 1;
    }
  }
  console.log(JSON.stringify(unencodedMatrix));
  counter = 0;
  var tempString = "";
  var codedArray = [];
  for(var i = 0; i < width; i++){
    for(var j = 0; j < height; j++){
      if(counter === 5){
        counter = 0;
        codedArray.push(tempString);
        tempString = "";
        // console.log(" ");
      } else if ((i === (width - 1)) && (j === (height - 1))){
        codedArray.push(tempString);
      } else {
        if(unencodedMatrix[j][i] === ""){
          // DO NOTHING
        } else {
          tempString = tempString + unencodedMatrix[j][i];
          counter += 1;
        }
      }
    }
  }
  return codedArray;
}



$(document).ready(function(){
  $("#crypto").submit(function(event){
    event.preventDefault();
    var sentence = $("#user-input").val();
    var encodedSentence = encoder(sentence);
    $("#encoded-text").show().append("Your encoded sentence: " + "<strong>" + encodedSentence.join(" ") + "</strong><br>");
  })
})
