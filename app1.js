
function func1() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;

    localStorage.setItem("name1",name)
    localStorage.setItem("email1",email)
    localStorage.setItem("pass1",pass)
    window.location.href = "index1.html"
    
}
function func() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
  
    var email1 = localStorage.getItem("email1");
    var pass1 = localStorage.getItem("pass1");
  
    if (email == email1 && pass == pass1) {
      window.location.href = "index3.html";
  
    } else {
      alert("email or password incorrect")
    }
  }
  
  
  function myFunction() {
    let text;
    let person = prompt("Team name:", "name");
    if (person == null || person == "") {
      text = "User cancelled the prompt.";
    } else {
      text = "Hello " + person + "! How are you today?";
    }
    document.getElementById("demo").innerHTML = text;
    // window.location.href = "hom1.html";
  }
