var score = 0;
function User_Name(){
  sessionStorage.clear();
  var UserName1 = document.getElementById("UserName");
  if(UserName1.value == "" || UserName1.value == " "){
    alert("Please Enter Your name first");
  }
  else {
    sessionStorage.setItem("name",UserName1.value);
    startQuiz();
  }
}
function startQuiz(){
  window.location.href = "index.html";
}
function check(){
  var RightAnsOne = document.getElementById("q1-op1");
  var RightAnsTwo = document.getElementById("q2-op3");
  var RightAnsThree = document.getElementById("q3-op3");
  var RightAnsFour = document.getElementById("q4-op4");

  if(RightAnsOne.checked == true){
    alert("Q1: Right Answer")
  score++;
  }
  else{
    alert("Q1: Wrong Answer")
  }

  if(RightAnsTwo.checked == true){
    alert("Q2: Right Answer")
  score++;
  }
  else{
    alert("Q2: Wrong Answer")
  }

  if(RightAnsThree.checked == true){
    alert("Q3: Right Answer")
  score++;
  }
  else{
    alert("Q3: Wrong Answer")
  }
   
  if(RightAnsFour.checked == true){
    alert("Q4: Right Answer")
  score++;
  }
  else{
    alert("Q4: Wrong Answer")
  }
  alert("Your score is: "+score+" Out of 4")
}