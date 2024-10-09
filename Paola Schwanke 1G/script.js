// script.js

// Carrossel de imagens
const carouselContainer = document.querySelector('.carousel-container');
const images = document.querySelectorAll('.carousel-container img');
let index = 0;

function showSlide(i) {
    index = (i + images.length) % images.length;  // Para manter o índice dentro do limite de imagens
    const offset = -index * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

document.querySelector('.next').addEventListener('click', () => {
    showSlide(index + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
    showSlide(index - 1);
});


// Validação de formulário em tempo real
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

// Validação de nome
function validateName() {
    const nameValue = nameInput.value.trim();
    if (nameValue === '') {
        setError(nameInput, 'Por favor, insira seu nome.');
    } else {
        setSuccess(nameInput);
    }
}

// Validação de email
function validateEmail() {
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValue === '') {
        setError(emailInput, 'Por favor, insira seu email.');
    } else if (!emailRegex.test(emailValue)) {
        setError(emailInput, 'Por favor, insira um email válido.');
    } else {
        setSuccess(emailInput);
    }
}

// Validação de assunto
function validateSubject() {
    if (subjectInput.value === '') {
        setError(subjectInput, 'Por favor, selecione um assunto.');
    } else {
        setSuccess(subjectInput);
    }
}

// Validação de mensagem
function validateMessage() {
    const messageValue = messageInput.value.trim();
    if (messageValue === '') {
        setError(messageInput, 'Por favor, escreva sua mensagem.');
    } else {
        setSuccess(messageInput);
    }
}

// Funções de erro e sucesso
function setError(input, message) {
    const errorMessage = input.nextElementSibling;
    input.classList.add('error');
    input.classList.remove('success');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

function setSuccess(input) {
    const errorMessage = input.nextElementSibling;
    input.classList.remove('error');
    input.classList.add('success');
    errorMessage.style.display = 'none';
}

// Eventos de validação
nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
subjectInput.addEventListener('blur', validateSubject);
messageInput.addEventListener('blur', validateMessage);

// Submissão do formulário
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateName();
    validateEmail();
    validateSubject();
    validateMessage();
});
