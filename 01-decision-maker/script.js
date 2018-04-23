var phrases = [
  "Possibly",
  "Hell yes",
  "I'm not sure",
  "Ask again later",
  "Yeah, no",
  "It is certain",
  "Without a doubt",
  "Negatory, ghost rider",
  "IDK"

];

phrase=phrases[Math.floor(Math.random() * phrases.length)];
document.getElementById("result").innerHTML = phrase;
