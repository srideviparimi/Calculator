let cOperand=document.getElementsByClassName("current-operand");
let preOperand=document.getElementsByClassName("previous-operand");
  
  
function display(val){//display function
  if(!isNaN(val) | preOperand.value.includes("=")) // is a number
      cOperand.value+=val;
  else if(val==="."){
    dotInclude=cOperand.value.includes(".")
    !dotInclude? cOperand.value+=val : cOperand.value; 
    }
  else{
    /*coperand.value is the string for which we are checking the last character, if that isNaN()is true ,it is an operation and is not concatinated
    if the last character(isNaN is false) is a number, so we concatinate the operation ;*/
    !isNaN(cOperand.value.charAt(cOperand.value.length-1))? // if output is a number
    cOperand.value+=val://true: operation is concatinated
    cOperand.value;//false:operation is not concatinated
    }
  document.getElementById("result").innerHTML=cOperand.value;
}


function reset(){// clear function
  cOperand.value="";
  preOperand.value="";
}

function allclear(){
    cOperand.value="";
    preOperand.value="";
    document.getElementById("computation").innerHTML=cOperand.value;
    document.getElementById("result").innerHTML=cOperand.value;
}


function compute(){
  if(cOperand.value==="" |isNaN(cOperand.value.charAt(cOperand.value.length-1)) )//this gives the last character, so if it is NaN it gives true, then we return
   return;
  else{
    preOperand.value=cOperand.value;
    console.log(preOperand.value);
    cOperand.value=eval(preOperand.value);
    document.getElementById("computation").innerText=preOperand.value+="=";
    document.getElementById("result").innerHTML=cOperand.value;
  }
}
  

function del(){
  if(!cOperand.value.includes("="))//does not have equal to
   {
    cOperand.value=cOperand.value.slice(0,-1);
    document.getElementById("result").innerHTML=cOperand.value;
   }
}
