fetch('https://icanhazdadjoke.com/slack')
  .then((data) => data.json())
  .then((jokeData) => {
    const joke = jokeData.attachments[0].text;
    const jokeElement = document.getElementById('joke');
    jokeElement.innerText = joke;
  });
