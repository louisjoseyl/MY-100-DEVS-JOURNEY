//Write your pseduo code first! 

//click event (smurf)
document.querySelector('#zebra').addEventListener('click', convert)

// declare your function
function convert(){
  //get the values from the input
  const celsius = document.querySelector('#brainStorm').value
  //quick maths convert it 
  const convertedValue = celsius * 9/5 + 32
  // display the value
  document.querySelector('#talkThatTalk').innerHTML = convertedValue
}



/* function convert(){
    //get the values from the input
  //quick maths convert it 
  const convertedValue = document.querySelector('#brainStorm').value * 9/5 + 32
  // display the value
  console.log(convertedValue)

}*/
 