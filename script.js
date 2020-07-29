let symbols = ["♠", "♣", "♥", "♦"]
let colors = ["black", "black", "#ff0034", "#ff0034"]
let faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A",]
let names = ['Ryan', 'Ashley', 'Alyssa', 'Pat'];
const title = ["Give 2 drinks", "Take a drink.", "Floor!", "Guys drink", "Chicks drink", "Heaven", "Drinking mate", "Rhyme", "Everyone drinks", "Rule", "Category", "Kings Cup", "Waterfall"]
const action = ["Pick two people to drink. Or pick one person twice.", "You must drink.", "Take 2 drinks, and give 2 drinks.", "All guys must drink.", "All girls must drink.", "You are the thumbmaster. You can place your thumb anytime on the table and and all players must follow. The last to do so, drinks.", "Choose a drinking mate. Anytime you must drink, your drinking mate also drinks.", "Choose a word. Take rounds saying rhyming words. First to pause or miss must drink.", "Cheers! Everyone drinks.", "Make a rule. If someone breaks it, they must drink.", "Choose a category. Take turns naming an item in chosen category. First to pause or miss must drink.", "Pour your drink into the cup. The fourth person who gets this card must drink the cup.", "Start drinking. Everyone must drink as long as you drink. You can stop at any time."]
document.querySelector('#click').addEventListener('click', function () {
    let randomAction = [(Math.random() * faces.length) | 0];

    let randomSymbol = [(Math.random() * symbols.length) | 0];

    console.log('Card Number: ' + faces[randomAction]);
    console.log('Card Suit:' + symbols[randomSymbol]);
    console.log('Color: ' + colors[randomSymbol]);
    document.querySelector('#click').textContent = 'Pick a card';
    document.querySelector('.card').classList.remove('card-bg');
    document.querySelector('.card-number').textContent = faces[randomAction];
    document.querySelector('.card-suit').textContent = symbols[randomSymbol];
    document.querySelector('.card-suit').style.color = colors[randomSymbol];
    document.querySelector('.card-todo').textContent = title[randomAction];
    document.querySelector('.card-action').textContent = action[randomAction];

});
