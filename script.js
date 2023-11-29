const title = document.getElementById('title');
const namefiled = document.getElementById('namefield');
const signin = document.getElementById('signin');
const signup = document.getElementById('signup');

signup.onclick = function(){
  title.innerHTML = "Sign Up";
  namefiled.style.display = "block";
}
signin.onclick = function(){
  title.innerHTML = "LogIn";
  namefiled.style.display = "none";
}