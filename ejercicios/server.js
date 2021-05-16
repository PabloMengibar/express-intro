console.log("Server File");

const express = require("express");
const server = express();
const { randomItem } = require("./utils/utils.js");

server.use(express.static("public"));

server.get("/", (req, res) => {
  res.sendFile("./public/index.html", { root: __dirname });
});

const jkList = [
  { id: 1, joke: "Why do hardcore raiders smell? -Because they never wipe!" },
  { id: 2, joke: "Yo mama so fat earth shield ran out before it made a single orbit" },
  { id: 3, joke: "Why did the enchanter have to clean out his bank? -Because it was full of dust!" },
  { id: 4, joke: "Aye baby is your pants purple? Because dat ass is epic" },
  { id: 5, joke: "Yo mama so fat, she exalted with McDonalds" },
  { id: 6, joke: "Why are warriors the worst salesman? -They charge too much" },
  { id: 7, joke: "How many GM's does it take to change a lightbulb? -None. It's working as intended ;D" },
  { id: 8, joke: "How do you know you play too much WoW? -When your girlfriends pants have a low drop rate" },
  { id: 9, joke: "How many warriors to change a lightbulb? -None, there's not path available" },
  { id: 10, joke: "BFA is good" },
  { id: 11, joke: "What do you call 3 resto druids? A treesome." },
  { id: 12, joke: "Where do Hellscreams park their cars? In the garrosh." },
  { id: 13, joke: "Arthas and Uther walk into a building. Arthas asks: What’s this switch for? Uther replies: For the Light!" },
  { id: 14, joke: "Roses are gray, violets are gray, I'm dead and colorblind." },
  { id: 15, joke: "Orc smash!" },
  { id: 16, joke: "I heard if you cut off an extremity it'll regenerate a little bigger. Don't believe it." },
  { id: 17, joke: "I look bigger in those mirrors where things look bigger." },
  { id: 18, joke: "A dwarf walks out of a bar…" },
  { id: 19, joke: "What do noobs and rogues have in common? They both pick locks." },
  { id: 20, joke: "How does Naxxramas fly? With its four wings." },
];

server.get("/jokes", (req, res) => {
  res.send(jkList);
});

server.get("/jokes/:id", (req, res) => {
  const id = +req.params.id;

  const [joke] = jkList.filter((joke) => joke.id === id);
  res.send(joke);
});

server.get("/jokes/random", (req, res) => {
  const randomJoke = randomItem(jkList);
  res.send(randomJoke);
});

server.listen(5500);