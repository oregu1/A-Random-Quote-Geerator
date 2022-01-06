const APIURL = 'https://api.quotable.io/random';

const quoteText = document.querySelector('.quote');
const quoteAuthor = document.querySelector('.author');

//Buttons
const quoteBtn = document.getElementById('getQuote');
const copyBtn = document.querySelector('.copy');
const speechBtn = document.querySelector('.speech');

quoteBtn.addEventListener('click', randomQuote);

function randomQuote() {
    //Text shown during loading
    quoteBtn.textContent = 'Loading a quote...';

    fetch(APIURL).then(
        //convert our response to JSON
        res => res.json()
    ).then(result => {
        quoteText.textContent = result.content;
        quoteAuthor.textContent = result.author;
        quoteBtn.textContent = 'Get a new quote';
    })
}
//Speech button
speechBtn.addEventListener('click', ()=> {
    let speechText = quoteText.textContent;
    let author = quoteAuthor.textContent;
    //appeal to web speech api
    let speechUtterance = new SpeechSynthesisUtterance(`${speechText} by ${author}`);
    speechUtterance.volume = 0.05;
    speechSynthesis.speak(speechUtterance);
})
//Copy button
copyBtn.addEventListener('click', ()=> {
    navigator.clipboard.writeText(quoteText.textContent);
})