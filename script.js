const saying=[
    {
        name: 'martin luther ',
        theme: 'wisdom will kill me'
    },
    {
        name: 'william mar ',
        theme: 'whdufhshdns me'
    },
    {
        name: 'msamuel kalilir ',
        theme: 'wthe onejh ihcvugd me'
    },
    {
        name: 'mkenihd yeye ',
        theme: 'turn to the onse me'
    },
    {
        name: 'mtrevor miteir ',
        theme: 'karanja watamu'
    },
    {
        name: 'ogo ytat ',
        theme: 'bringinbuy forth'
    }
];

const btn= document.querySelector('.btn');
const author= document.querySelector('.author');
const quotes= document.querySelector('.quote');

btn.addEventListener('click', changeQuote);

function changeQuote(){
    let Number=Math.floor(Math.random()*saying.length);
    //console.log(Number);
    author.innerHTML=saying[Number].name;
    quotes.innerHTML=saying[Number].theme;
}