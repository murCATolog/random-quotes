//дана функція повертає обʼєкт проміс
loadData = async () => {
    try {
        // надсилаємо http запит на сервер за допомогою fetch
        // await чекаємо поки запит завершиться
        const response = await fetch('http://127.0.0.1:5500/quotes.json');
        // чекає і отримуємо дані і перетворюємо їх в json
        const data = await response.json();
        const addData = () => {
            // функція рандомайзер
            let getRandomQuote = () => Math.floor(Math.random() * data.length);
            //додаємо елементи в DOM
            let number = getRandomQuote();
            let getQuote = document.querySelector('.quote');
            let getAuthor = document.querySelector('.author');
            getQuote.innerText = (data[number]['quote']);
            getAuthor.innerText = (data[number]['author']);
        };
        
        if (data) {
            addData();
        };
    }
    // ловимо помилку
    catch (error) {
        console.error('Помилка отримання даних: ', error);
    }
};

//обробка кліку
document.getElementById('button').addEventListener('click', () => loadData());