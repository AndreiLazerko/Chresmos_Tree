const buttonsOrder = document.querySelectorAll('.product__button_order');
const overlayOrder = document.querySelector('.overlay_order');
const order = overlayOrder.querySelector('.modal__order');
const headerConsultation = document.querySelector('.header__consultation');

buttonsOrder.forEach(buttonOrder => {
  buttonOrder.addEventListener('click', () => {
    overlayOrder.classList.add('overlay_active');
    order.value = buttonOrder.dataset.order;
  })
});

overlayOrder.addEventListener('click', event => {
  const targer = event.target;
  if(targer === overlayOrder || targer.closest('.modal__close')) {
    overlayOrder.classList.remove('overlay_active')
  }
  
});

headerConsultation.addEventListener('click', () => {
  overlayOrder.classList.add('overlay_active');
})