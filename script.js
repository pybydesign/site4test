// Слайдер с индикаторами на главной странице
// Форма на странице контактов

document.addEventListener('DOMContentLoaded', function() {
    // Слайдер
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    const indicators = document.querySelectorAll('.slider-indicator, .indicator');
    let curr = 0;
    if(slides.length){
        function showSlide(idx) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === idx);
            });
            if(indicators&&indicators.length===slides.length){
                indicators.forEach((dot, i)=>{
                    dot.classList.toggle('active', i===idx);
                });
            }
        }
        prevBtn && prevBtn.addEventListener('click', () => {
            curr = (curr === 0) ? slides.length - 1 : curr - 1;
            showSlide(curr);
        });
        nextBtn && nextBtn.addEventListener('click', () => {
            curr = (curr === slides.length - 1) ? 0 : curr + 1;
            showSlide(curr);
        });
        if(indicators&&indicators.length===slides.length){
            indicators.forEach((dot, i) => {
                dot.addEventListener('click', () => {
                    curr = i; showSlide(curr);
                });
            });
        }
        showSlide(curr);
    }

    // Форма обратной связи на contacts.html
    const form = document.querySelector('.contacts-form form');
    const formMessage = document.getElementById('form-message');
    if(form && formMessage){
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            formMessage.style.color = "#2164a1";
            formMessage.style.padding = "12px";
            formMessage.textContent = "Спасибо! Ваше сообщение отправлено.";
            form.reset();
            setTimeout(() => { formMessage.textContent=''; }, 3500);
        });
    }
});
