document.addEventListener('DOMContentLoaded', () => {
    // Получаем доступ к элементам на странице
    const scoreElement = document.getElementById('score-value');
    const tappableObject = document.getElementById('tappable-object');

    // Инициализируем Telegram Mini App
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand(); // Раскрываем приложение на весь экран

    let score = 0;

    // Функция, которая вызывается при каждом касании/клике
    function handleTap(event) {
        // Мгновенно увеличиваем счётчик на экране
        score++;
        scoreElement.innerText = score;

        // Добавляем класс для визуальной анимации
        tappableObject.classList.add('tapped');

        // Убираем класс анимации через короткое время
        setTimeout(() => {
            tappableObject.classList.remove('tapped');
        }, 100); // 100 миллисекунд
        
        // Предотвращаем стандартное поведение браузера (например, двойное нажатие с увеличением)
        event.preventDefault();
    }

    // Вешаем обработчик события на касание (для мобильных) и клик (для десктопа)
    tappableObject.addEventListener('touchstart', handleTap, { passive: false });
    tappableObject.addEventListener('click', handleTap);
});

