
let image = document.getElementById("image");
let quote = document.getElementById("quote");

let images = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
]

let beginning = [
    'Кто рано встает, ',
    'Не бойся ошибаться, ',
    'Когда меня рожали, ',
    'Каждый может кинуть камень в волка, ',
    'Нельзя стоять, когда другие работают, ',
    'Иногда, жизнь - это жизнь, ',
];

let ending = [
    'тот потом пожалеет о своем решении.',
    'собственно, тогда я и родился.',
    'но не каждый может кинуть волка в камень.',
    'надо лежать.',
    'а ты в ней - иногда.',
    'бойся не ошибаться.',
];

function generateQuote() {
    // Получает случайные элементы: начало и конец цитат + рандомное изображение
    let randomBeginning = getRandomElement(beginning);
    let randomEnd = getRandomElement(ending);
    let randomImg = getRandomElement(images);

    // Конкатенирует 2 части цитаты в одну
    let randomQuote = randomBeginning + ' ' + randomEnd;

    function getRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    hide();

    // Скрывает текущую цитату и изображение
    function hide() {
        image.classList.remove('show');
        quote.classList.remove('show');
        // Показывает следующую цитату и изображение с задержкой в полсекунды, чтобы успела сработать transition
        setTimeout(show, 500);
    }

    function show() {
        // Проверяет кол-во символов в тексте. Если их меньше 48, то меняет шрифт и выравнивает текст по центру, иначе — стандартные стили
        if (randomQuote.length <= 48) {
            quote.style.fontSize = '42px';
            quote.style.justifyContent = 'center';
        } else {
            quote.style.fontSize = '';
            quote.style.justifyContent = '';
        }

        image.src = 'images/' + randomImg;
        quote.textContent = randomQuote;

        image.classList.add('show');
        quote.classList.add('show');
    }
}
