var i = 0;
var txt = ' Hi! my name is Lorieanne Teofilo, 19 years old.I write, design and love making arts.\n I am a first year student at Adamson University and at the same time a part time Web Developer at Google.\n I am a dreamer and a hard working student I strive to learn and explore more about the Information Technology Industry as I expand my knowledge and capabilities through the process. ';
var speed = 50;

function AboutMe() {
  if (i < txt.length) {
    document.getElementById("about").innerHTML += txt.charAt(i);
    i++;
    setTimeout(AboutMe, speed);
  }
}
function myFunction()
         {
            var x;
            var person=prompt("Please enter your name"," ");
            if (person!=null)
            {
              x="Hello " + person + "! How are you today?";
              document.getElementById("name").innerHTML=x;
              }
            }
