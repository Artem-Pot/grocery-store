const swiper = new Swiper('.swiper', {
    loop: true, //зацикливание слайдов до бесконечности
    speed: 1000, //скорость переключения слайда
 
    effect: 'fade', //эффект прозрачности при смене слайдов
    fadeEffect: {
        crossFade: true, //дополнение к эффекту fade - параллельная смена прозрачности, добавляет плавность
    },
  
    direction: 'horizontal', //горизонтальный слайдер

    autoplay: {
        delay: 3000, //паузка между прокруткой
        disableOnInteraction: true, // отключить при ручном переключении
    },
  });