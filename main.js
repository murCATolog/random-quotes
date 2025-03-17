//дана функція повертає обʼєкт проміс
const loadData = async () => {
    try {
        // надсилаємо http запит на сервер за допомогою fetch
        // await чекаємо поки запит завершиться
        const response = await fetch('http://127.0.0.1:5500/quotes.json');
        // чекає і отримуємо дані і перетворюємо їх в json
        const data = await response.json();
        const addData = (selector) => {
            const element = document.querySelector('.' + selector);
            return element.textContent = data[0][selector];
        };
        
        if (data) {
            addData('quote');
            addData('author');
        };
    }
    // ловимо помилку
    catch (error) {
        console.error('Помилка отримання даних: ', error);
    }
}

loadData();

// // функція рандомайзер
// const getRandomQuote = () => Math.floor(Math.random() * quotes.length);
// console.log(quotes[getRandomQuote()]);