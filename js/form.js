document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Останавливаем отправку формы
    
    // Скрываем форму и показываем сообщение "Bedankt voor het inschrijven"
    document.getElementById('subscribe-form').style.display = 'none';
    document.getElementById('thank-you-message').style.display = 'block';
});