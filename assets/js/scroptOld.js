// Variables
const searchInput = document.querySelector('#searchInput');
const outputSearched = document.querySelector('.output-searched-word');

// URLs
const localDataUrl = 'http://127.0.0.1:5501/assets/data/verbs.json';

// Load data
// document.addEventListener('load', fetchVerbs());
// document.addEventListener('load', fetchVerbs());

// Fetch data
// async function fetchVerbs () {
//     const response = await fetch(localDataUrl);
//     const words = await response.json();

//     const html = words.map(word => ( 
//             `<section>
//                 <h3>${word.verb}</h3>
//                 <ul>
//                     <li>Verb: ${word.verb}</li>
//                     <li>Past Tense: ${word.past_tense}</li>
//                     <li>Past Participle: ${word.past_participle}</li>
//                 </ul>
//             </section>`
//             )).join('');

//     outputSearched.innerHTML = html;
// };
// Search data
const searchVerb = async searchText => {
    const response = await fetch(localDataUrl);
    const words = await response.json();

    let matches = words.filter(word => {
        
        // switch(word) {
        //     case word.verb === searchText:
        //         console.log('verb');
        //         return word.verb.toLowerCase().indexOf(searchText) > -1;
        //     case word.past_tense === searchText:
        //         console.log('past tense');
        //         return word.past_tense.toLowerCase().indexOf(searchText) > -1;
        //     case word.past_participle === searchText:
        //         console.log('participle');
        //         return word.past_participle.toLowerCase().indexOf(searchText) > -1;
        //     default:
        //         console.log('from default========================')
        //         return word.verb.toLowerCase().indexOf(searchText) > -1;
        // }
        return word.verb.toLowerCase().indexOf(searchText) > -1;
        // return word.verb.toLowerCase().includes(searchText);
    });

    if(searchText === 0 ) {
        matches = [];
    };

    outputSearchedWord(matches);
};

const outputSearchedWord = matches => {
     
    let html;

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

    } else {
        console.log('There are not verbs')
    };
};

searchInput.addEventListener('input', () => searchVerb(searchInput.value));

{/* <td>${match.verb}</td>
<td>${match.past_tense}</td>
<td>${match.past_participle}</td> */}