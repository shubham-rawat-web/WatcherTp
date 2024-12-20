
debugger
function speak(text) {
  const text_speak = new SpeechSynthesisUtterance(text);

  text_speak.rate = 1;
  text_speak.volume = 1;
  text_speak.pitch = 1;

  window.speechSynthesis.speak(text_speak);
}

function wishme () {  
 var day = new Date();
 var hour = day.getHours();

 if ( hour >= 0 && hour < 12)
 {
  speak(" good morning shubham sir")
 }
 else if  ( hour >= 12 && hour < 17)
 {
  speak(" good Afternoon  sir")
 }

 else {
  speak("Good Evening SHUBHAM SIR...");

 }


}

window.addEventListener('load', ()=> {
  speak(" hello boss");
  wishme()
})




document.getElementById("shubham").addEventListener("submit", function (event) {
    event.preventDefault()

    const username = document.getElementById("Username").value;
    const password = document.getElementById("password").value;
    const Text = document.getElementById("Text");

    const validusername = "s";
    const validpassword = "s";

    if ( username === validusername && password === validpassword)
    { 
       document.getElementById("Text").textContent="login successfull"
     document.getElementById ("Text").style.color="green";
     window.location.href ='../../page/homepage/home.html'
    
    ;
    speak(" SIR YOU successfully login")

    }
     

   else
   {
     document.getElementById("Text").textContent=" Invalid username or password"
     document.getElementById("Text").style.color="red";
    }

 
})



