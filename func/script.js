const Joke = document.getElementById('joke')
var NextBtn = document.getElementById('Next')
var HomeBtn = document.getElementById('goBack')

NextBtn.addEventListener('click', nextJoke);
HomeBtn.addEventListener('click',goHome);

function goHome(){
   parent.location='C:/Users/LENOVO/Desktop/Studies/5th year/App programming/Dad Jokes/index.html'
}

let j = 0;
function nextJoke() {
   j = j + 1
   for (var i = j - 1; i <= 50; i++) {
      switch (i) {
         case 1:
            return Joke.innerText = " How many narcissists does it take to screw in a light bulb? One.The narcissist holds the light bulb while the rest of the world revolves around him.";
         case 3:
            return Joke.innerText = 'I don’t trust stairs. They are always up to something.';

         case 5:
            return Joke.innerText = "Why don’t pirates take a bath before they walk the plank? They just wash up on shore.";

         case 7:
            return Joke.innerText = 'Barbers…you have to take your hat off to them.';

         case 9:
            return Joke.innerText = "I searched for a lighter on Amazon, but all I could find were 6, 000 matches.";

         case 11:
            return Joke.innerText = "I searched for a lighter on Amazon, but all I could find were 6, 000 matches.";

         case 13:
            return Joke.innerText = "I got hit in the head with a can of Coke today. Don’t worry, I’m not hurt.It was a soft drink.";
         case 15:
            return Joke.innerText = "The past, the present, and the future walked into a bar. It was tense.";
            break;
         case 17:
            return Joke.innerText = "Dad: Did you hear about the kidnapping at school? Son: No.What happened? Dad: The teacher woke him up.";
            break;
         case 19:
            return Joke.innerText = "The bank keeps calling me to give me compliments. They say I have an “outstanding balance.";
         case 21:
            return Joke.innerText = "A turtle is crossing the road when he’s mugged by two snails. When the police ask him what happened, the shaken turtle replies, “I don’t know. It all happened so fast";
         case 23:
            return Joke.innerText = "What do you call a hippie’s wife? Mississippi.";
         case 25:
            return Joke.innerText = "What’s the least-spoken language in the world? Sign language.";
         case 27:
            return Joke.innerText = "A friend of mine didn’t pay his exorcist. He got repossessed.";
         case 29:
            return Joke.innerText = "How do you make holy water? You boil the hell out of it."
         case 31:
            return Joke.innerText = "What do you call a fish with no eye? A fsh.";
            break;
      }
   }

}



