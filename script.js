

const texts = ["Computer Science Undergraduate", "Tech Enthusiatic", "Aspiring DSA and MERN Stack"];
    const speed = 50; // milliseconds per character
    let textIndex = 0;
    let charIndex = 0;

    function typeText() {
      const currentText = texts[textIndex];
      const textContainer = document.getElementById('text-container');

      if (charIndex < currentText.length) {
        textContainer.innerHTML = currentText.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeText, speed);
      } else {
        // Move to the next text or loop back to the beginning
        textIndex = (textIndex + 1) % texts.length;
        charIndex = 0;
        // Clear the border for the next text
        textContainer.className = "";
        // Add a delay before typing the next text
        setTimeout(() => {
          // Add the border class back before typing
          textContainer.className = "border";
          typeText();
        }, 1000);
      }
    }

    // Call the typing function when the page loads
    window.onload = typeText;


var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")

}

var icon=document.getElementById("icon");
icon.onclick=function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icon.src="assets/sun.png";}
    else{
      icon.src="assets/moon.png";
  }
}

