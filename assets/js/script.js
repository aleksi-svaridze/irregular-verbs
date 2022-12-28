// Variables
const searchInput = document.querySelector('#searchInput');
const outputSearched = document.querySelector('.output-searched-word');
const form = document.querySelector('form');

// URLs
const localDataUrl = 'http://127.0.0.1:5501/assets/data/verbs.json';

// Search data
const searchVerb = async searchText => {
    const response = await fetch(localDataUrl);
    const words = await response.json();

    let matches = words.filter(word => {
        return word.verb.toLowerCase().indexOf(searchText) > -1;
        // return word.verb.toLowerCase().includes(searchText);
    });

    if(searchText === 0 || searchText === ' ') {
        matches = [];
    }

    outputSearchedWord(matches);
};

const outputSearchedWord = matches => {

    console.log(matches.length);
     
    let html = ``;

    if(matches.length > 0) {
        html = matches.map(match => (
            `<section class="word-box">
                <section class="word-box__content word-box__content--desc">
                    <section>Verb</section>
                    <section>Past Tense</section>
                    <section>Past Participle</section>
                </section>
                <section class="word-box__content word-box__content--cases">
                    <section>${match.verb}</section>
                    <section>${match.past_tense}</section>
                    <section>${match.past_participle}</section>
                </section>
            </section>`
        )).join('');

        outputSearched.innerHTML = html;
    }
};

searchInput.addEventListener('input', () => searchVerb(searchInput.value));



    // 1. when input is empty ==> do not wont to render anything

    // 2. when searching word ==> do not wont to empty space has affected