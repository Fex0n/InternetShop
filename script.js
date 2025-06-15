document.addEventListener('DOMContentLoaded', function() {
  // Burger menu
  const burgerMenu = document.querySelector('.burger-menu');
  const mainNav = document.querySelector('.main-nav');
  
  burgerMenu.addEventListener('click', function() {
    mainNav.classList.toggle('active');
  });
  
  // Search
  const searchBtn = document.querySelector('.search-btn');
  const searchInput = document.querySelector('.search-input');
  
  searchBtn.addEventListener('click', function(e) {
    e.preventDefault();
    searchInput.classList.toggle('active');
    if (searchInput.classList.contains('active')) {
      searchInput.focus();
    }
  });
  
  // Close menu when clicking on a link
  const navItems = document.querySelectorAll('.nav__links li a');
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        mainNav.classList.remove('active');
      }
    });
  });
  
  // Close search when clicking outside the field
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.search-container')) {
      searchInput.classList.remove('active');
    }
  });
  
  // Adaptation when resizing the window
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      mainNav.classList.remove('active');
    }
  });

  // Product catalog functionality
  const iphone = document.querySelector('.iphone');
  const samsung = document.querySelector('.samsung');
  const realme = document.querySelector('.realme');
  const vivo = document.querySelector('.vivo');

  function setupProductCard(productCard) {
    productCard.addEventListener("click", function(event) {
      let clickTarget = event.target;
      let activeButton = productCard.querySelector('.active');
      let priceItem = productCard.querySelector('.price');
      let colorItem = productCard.querySelector('.color');
      let activeButtonColor = productCard.querySelector('.active-border'); 

      // Color button click
      if (clickTarget.classList.contains('color-btn') && !clickTarget.classList.contains('active-border')) {
        clickTarget.classList.add('active-border');        
        activeButtonColor.classList.remove('active-border');
      }
      
      // Main button click
      if (clickTarget.classList.contains('btn-round') && !clickTarget.classList.contains('active')) {
        clickTarget.classList.add('active');
        activeButton.classList.remove('active');
      }

      const currentPrice = clickTarget.getAttribute('data-size');
      const currentColor = clickTarget.getAttribute('data-color');

      // Update price based on size
      if (currentPrice === 'medium') {
        if (productCard === iphone) priceItem.textContent = '200 000 руб.';
        else if (productCard === samsung) priceItem.textContent = '80 000 руб.';
        else if (productCard === realme) priceItem.textContent = '12 490 руб.';
        else if (productCard === vivo) priceItem.textContent = '15 242 руб.';
      }
      if (currentPrice === 'large') {
        if (productCard === iphone) priceItem.textContent = '290 000 руб.';
        else if (productCard === samsung) priceItem.textContent = '104 074 руб.';
        else if (productCard === realme) priceItem.textContent = '16 500 руб.';
        else if (productCard === vivo) priceItem.textContent = '20 500 руб.';
      }

      // Update color text
      if (currentColor === 'blue') colorItem.textContent = 'Цвет: синий';
      if (currentColor === 'black') colorItem.textContent = 'Цвет: черный';
      if (currentColor === 'green') colorItem.textContent = 'Цвет: зеленый';
      if (currentColor === 'sky-blue') colorItem.textContent = 'Цвет: небесно-голубой';
      if (currentColor === 'light-blue') colorItem.textContent = 'Цвет: голубой';
    });
  }

  if (iphone) setupProductCard(iphone);
  if (samsung) setupProductCard(samsung);
  if (realme) setupProductCard(realme);
  if (vivo) setupProductCard(vivo);
});
// Плавная прокрутка для ссылок в футере
document.querySelectorAll('.footer a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    if(this.getAttribute('href') === '#') return;
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});