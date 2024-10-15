let emojis = ['💘', '💝', '💖', '💗', '💓', '💞', '💕', '💟', '❣️', '💔', '❤️', '🧡', '💛', '💚', '💙', '💜', '🤎', '🖤', '🤍', '❤️‍', '🔥', '❤️‍', '🩹', '💯', '♨️', '💢', '💬', '👁️‍🗨️', '🗨️', '🗯️', '💭', '💤', '🌐', '♠️', '♥️', '♦️', '♣️', '🃏', '🀄️', '🎴', '🎭️'];

let body = document.body;
let selector = document.querySelector('section p');
let section_of_body = document.querySelector('section');

selector.addEventListener('pointerover', () => {
    let randomColor = getRandomColor();
    body.style.backgroundColor = randomColor;

    let randomIndex = Math.floor(Math.random() * emojis.length);
    selector.innerHTML = emojis[randomIndex];
    section_of_body.style.backgroundColor = getContrastColor(randomColor); // Ensuring text color has enough contrast

});
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getContrastColor(hexColor) {
    // Function to determine text color based on background color
    let threshold = 130;
    let rgb = parseInt(hexColor.slice(1), 16);
    let r = (rgb >> 16) & 0xff;
    let g = (rgb >> 8) & 0xff;
    let b = (rgb >> 0) & 0xff;
    let luminance = 0.299 * r + 0.587 * g + 0.114 * b;
    return luminance > threshold ? 'black' : 'white';
}
