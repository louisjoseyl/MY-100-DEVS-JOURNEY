document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here
  if (day === 'Tuesday' || day === 'Thursday'){
    alert("it is a class day")
  }
  else if (day === 'Saturday' || day === 'Sunday'){
    alert("Happy weekends")
  }
  else{
    alert("boring day")
  }

}
