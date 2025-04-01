// Клас QuoteGenerator для генерації цитат
class QuoteGenerator {
    constructor() {
        // Елемент для відображення тексту цитати
        this.quote = document.querySelector('.quote');
        // Елемент для відображення імені автора
        this.author = document.querySelector('.author');
        // Кнопка для генерації нової цитати
        this.button = document.getElementById('button');
        // Масив для улюблених цитат
        this.favoriteQuotes = [];
        // Масив для зберігання цитат із JSON
        this.data = [];

        // Додаємо слухача події на кнопку
        this.button.addEventListener('click', () => this.getRandomQuote());
    }

    // Метод для генерації випадкового індексу
    randomiser() {
        return Math.floor(Math.random() * this.data.length);
    }

    // Метод для завантаження цитат із сервера
    async getJson() {
        // Відправляємо GET-запит на сервер для отримання quotes.json
        const response = await fetch('http://127.0.0.1:5500/quotes.json');
        // Чекаємо відповідь і перетворюємо її в масив об'єктів
        this.data = await response.json();
    }

    // Метод для генерації та виведення випадкової цитати
    async getRandomQuote() {
        await this.getJson(); // Чекаємо, поки дані завантажаться
        const randomQuote = this.data[this.randomiser()]; // Отримуємо випадкову цитату
        console.log(randomQuote); // Виводимо цитату в консоль для перевірки
        // Оновлюємо DOM-елементи для відображення
        this.quote.textContent = randomQuote.quote; // Оновлюємо текст цитати
        this.author.textContent = randomQuote.author; // Оновлюємо ім’я автора
    }
}

// Створюємо екземпляр класу
const quote = new QuoteGenerator();

// Викликаємо метод для першої цитати
quote.getRandomQuote();