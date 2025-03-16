async function loadQuotes(){
    try {
        // надсилаємо http запит на сервер за допомогою fetch
        // await чекаємо поки запит завершиться
        const response = await fetch('http://127.0.0.1:5500/quotes.json');
        // чекає і отримуємо дані і перетворюємо їх в json
        const quotes = await response.json();
        // функція рандомайзер
        const getRandomQuote = () => Math.floor(Math.random() * quotes.length);
        console.log(quotes[getRandomQuote()]);
    }
    // ловимо помилку
    catch (error) {
        console.error('Помилка отримання даних: ', error);
    }
}

loadQuotes();
