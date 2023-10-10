// var topic = "HTML";

var topics = ["HTML", "CSS", "JS", "Git", "ReadMe"]
var randomTopic = topics[Math.floor(Math.random()*topics.length)];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];
function selectTopic(){
if (randomTopic === 'HTML') {
  console.log("Let's study HTML!");
} else if (randomTopic === 'CSS') {
  console.log("Let's study CSS!");
} else if (randomTopic === 'Git') {
  console.log("Let's study Git!");
} else if (randomTopic === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
}
}
var shapes = ["circle","square","rectangle","triangle"];

for (var x =0; x <topics.length; x++){
    console.log(topics[x])
}

function helloWorld(){
    console.log("Hello World, I am a function")
}

function listTopics(){
    for (var x =0; x < topics.length; x++){
        console.log(topics[x])
    }
}