function fate() {
  if(onclick ="fate()"){
    alert("You stepped inside...");
  }
else{
    (onclick ="turnback()")
    alert("You turned away...");
}
}


function turnback(){
  alert("You turned away...")
}



function ramit(){
alert("You chose to ram the door... I hope their is nothing ready to pounce on you...")
}


function plead(){
  alert("The dead may give you the answers you seek...but at what cost?")
}

function kickdoor(){
  alert("You chose to kick down the door... I hope their is nothing waiting for you on the other side...")
}

function choices(){
  if(onclick ="kickdoor()"){
    alert("You chose to kick down the door... I hope their is nothing waiting for you on the other side...")
  }
if(onclick="ramit()"){
alert("You chose to ram the door... I hope their is nothing ready to pounce on you...")
}
else if(onclick="plead()"){
alert("The dead may give you the answers you seek...but at what cost?")
}
else if(onclick="turnback()"){
alert("You fled for safety... some might say that is a wise choice.")
}
}

function Upstairs(){
  alert("You decided to risk going up the crumbling stairs...")
}

function Downstairs(){
  alert("You decided to descend into the basement... wonder what's lurking there...")
}

function TheFoyer(){
  alert("You decided to look around the foyer... all these cobwebs are creepy...")
}

function Leave(){
  alert("You decided to leave... can't say I blame you...")
}

function HouseChoices(){
  if(onclick ="Upstairs()"){
      alert("You decided to risk going up the crumbling stairs...")
  }
if(onclick="Downstairs()"){
alert("You decided to descend into the basement... wonder what's lurking there...")
}
else if(onclick="TheFoyer()"){
alert("You decided to look around the foyer... all these cobwebs are creepy...")
}
else if(onclick="Leave()"){
alert("You decided to leave... can't say I blame you...")
}
}

function Clues(){
  alert("You decided to look at the clues... what do you think they will mean...?")
}

function Police(){
  alert("You decided to turn the evidence over to the police... wonder what the outcome will be...")
}

function Legend(){
  alert("You decided to turn a blind eye on the crippling truth... letting everyone believe in the urban legend....")
}

function End(){
  if(onclick="Police()"){
      alert("You decided to turn the evidence over to the police... wonder what the outcome will be...")
  }
  else if(onclick="Legend()"){
      alert("You decided to turn a blind eye on the crippling truth... letting everyone believe in the urban legend....")
  }
}
