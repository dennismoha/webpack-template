const jokes = [
    "Why are aliens jealous of the sun? Because the sun has a million degrees.",
    "What do you call an overweight E.T.? Extra Cholesterol.",
    "What do aliens spread on their toast? Space jam.",
    "What is an alien’s favorite website? Space-book.",
    "Where does an alien put his teacup? On a flying saucer.",
    "Why is it difficult to maintain a healthy relationship with an alien? Because he always needs his space.",
    "What does an alien do when he has to get in touch with Saturn? He gives Saturn a ring.",
    "Why haven't aliens visited earth? It's only rated one star.",
    "What is an alien's favorite beverage? Gravi-tea."
]

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

const generateJoke = async()=>{
    const aliendJokeNumber = getRandomIntInclusive(0, jokes.length - 1)
    console.log('alienjokenumber ', aliendJokeNumber)
    let k = "this is a very funny joke";
    document.getElementById('joke').innerHTML= jokes[aliendJokeNumber]
    return k
}
export default generateJoke