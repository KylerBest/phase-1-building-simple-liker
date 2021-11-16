// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeButtons = document.querySelectorAll(".like-glyph");
function init(){
  likeButtons.forEach(button => function(){
    button.addEventListener("click", function(){
      mimicServerCall()
        .then(()=>{
          if(button.textContent == EMPTY_HEART){
            button.classList.add("activated-heart");
            console.log(button.classList);
            button.textContent = FULL_HEART;
          }else{
            button.classList.remove("activated-heart");
            console.log(button.classList);
            button.textContent = EMPTY_HEART;
          }
        })
        .catch(()=>{
          document.querySelector("#modal").className = "";
          setTimeout(function(){
            return document.querySelector("#modal").className = "hidden";
          }, 3000);
        });
    });
  }());
}
init();



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
