const letters = document.querySelectorAll('.letter')

function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}

setInterval(function() {
    for (let letter of letters) {
        letter.style.color = randomRGB();
    }
}, 1500);

const form = document.querySelector("#meme-input");
const memePhoto = document.querySelector('input[name=image-url]');
const topText = document.querySelector('input[name=top-text]');
const bottomText = document.querySelector('input[name=bottom-text]');
const memeField = document.querySelector('#meme-field');
const memeCard = document.querySelector('.meme-card');

form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (memePhoto.value === '') {
        alert('Please input a meme photo')
    } else {
        const newMeme = addMeme(
            memePhoto.value, 
            topText.value,
            bottomText.value
            );
        const tileCard = document.createElement('div');
        tileCard.appendChild(newMeme);
        tileCard.className = "meme-tile";
        const removeBtn = document.createElement('button');
        removeBtn.innerText = 'Remove!';
        tileCard.appendChild(removeBtn);
        memeField.appendChild(tileCard);
        memePhoto.value = "";
        topText.value = "";
        bottomText.value = "";
    }
    

    
})

function addMeme(memePhoto, topText, bottomText){
    const meme = document.createElement('div');
    meme.className = "meme-card";
    meme.innerHTML = `<img src=${memePhoto}><h2 class="top-phrase">${topText}</h2><h2 class="bottom-phrase">${bottomText}</h2>`;
    return meme;
}

memeField.addEventListener('click', function(e){
    const targetOfClick = event.target.tagName.toLowerCase();
    if (targetOfClick === "button") {
        event.target.parentElement.remove();
    }
})