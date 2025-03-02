const quote = document.getElementById('quote');
const author = document.getElementById('author');

const repost = document.getElementById('share-twitter');
const next = document.getElementById('random-quote');

const quotesAndAuthors = [
    "«Fake It Until You Make It! Act As If You Had All The Confidence You Require Until It Becomes Your Reality.» (Brian Tracy).",
    "«Take the first step in faith. You don’t have to see the whole staircase, just take the first step.» (Martin Luther King Jr).",
    "«No longer chasing butterflies, Camila and I planted our garden so they could come to us.» (Matthew Mcconaughey).",
    "«The  biggest  risk  is  not  taking  any  risk.  In a  world  that’s  changing  really  quickly, the only strategy  that  is  guaranteed  to  fail  is  not  taking  risks.» (Mark Zuckerberg).",
    "«A man is not called wise because he talks and talks again; but if he is peaceful, loving and fearless then he is in truth called wise.» (Gautama Buddha).",
    "«I hear babies cry, I watch them grow, They’ll learn much more, Then I’ll ever know. And I think to myself, What a wonderful World.»(Louis Armstrong).",
    "«Don’t you know that there ain’t no mountain high enough. Ain’t no valley low enough,ain’t no river wide enough. To keep me from getting to you, baby.»(Marvin Gaye & Tammi Terrell «Ain’t No Mountain High Enough»).",
    "«Don’t give upYou’ve got a reason to live Can’t forget you only get what you give.»(New Radicals «You Get What You Give»).",
    "«You only get one shot,do not miss your chance to blow.This opportunity comes once in a lifetime.»(Eminem).",
    "«Went the distance, now I’m back on my feet. Just a man and his will to survive.» (Survivor «Eye of the Tiger»).",
    "«All that is gold does not glitter, Not all those who wander are lost; The old that is strong does not wither, Deep roots are not reached by the frost!» (J.R.R. Tolkein).",
]


next.addEventListener('click', () => {
    const data = randomQuote();
    quote.textContent = data[0];
    author.textContent = data[1];
})

function randomQuote() {
    const currentQuote = quotesAndAuthors[Math.floor(Math.random() * quotesAndAuthors.length)];
    const currentAuthor = currentQuote.match(/\(([^)]+)\)(?!.*\([^)]+\))/)[1];
    return [currentQuote, currentAuthor];
};
randomQuote()