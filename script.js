const navLinks = document.querySelectorAll('.nav-link');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const sections = document.querySelectorAll('main section');

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open navigation');
    });
});

function updateActiveNav() {
    let currentSection = '';

    sections.forEach(section => {
        if (section.getBoundingClientRect().top <= 110) {
            currentSection = section.id;
        }
    });

    navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'location');
        } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

function filterProjects(category) {
    projectCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(filterButton => {
            filterButton.classList.remove('active');
            filterButton.setAttribute('aria-pressed', 'false');
        });
        button.classList.add('active');
        button.setAttribute('aria-pressed', 'true');
        filterProjects(button.getAttribute('data-filter'));
        updateActiveNav();
    });
});

navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', isOpen);
    navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

const skillBars = document.querySelectorAll('.skill-progress');

function animateSkills() {
    const skillsSection = document.querySelector('#skills');

    if (skillsSection.getBoundingClientRect().top < window.innerHeight) {
        skillBars.forEach(bar => {
            bar.style.width = bar.style.getPropertyValue('--skill-level');
        });
    }
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('resize', animateSkills);
animateSkills();

const contactForm = document.querySelector('#contact-form');
const formInputs = document.querySelectorAll('#name, #email, #message');
const formStatus = document.querySelector('#form-status');
let resetTimer;

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clearError(input) {
    const error = input.parentElement.querySelector('.error-message');

    if (error) {
        error.remove();
    }

    input.classList.remove('error');
    input.removeAttribute('aria-invalid');
    input.removeAttribute('aria-describedby');
}

function showError(input, message) {
    clearError(input);
    const error = document.createElement('span');
    error.className = 'error-message';
    error.id = `${input.id}-error`;
    error.textContent = message;
    input.classList.add('error');
    input.classList.remove('success');
    input.setAttribute('aria-invalid', 'true');
    input.setAttribute('aria-describedby', error.id);
    input.parentElement.appendChild(error);
}

function validateInput(input) {
    let message = '';

    if (input.id === 'name' && input.value.trim().length < 2) {
        message = 'Name must be at least 2 characters.';
    } else if (input.id === 'email' && !isValidEmail(input.value.trim())) {
        message = 'Please enter a valid email address.';
    } else if (input.id === 'message' && input.value.trim().length < 10) {
        message = 'Message must be at least 10 characters.';
    }

    if (message) {
        showError(input, message);
        return false;
    }

    clearError(input);
    input.classList.add('success');
    return true;
}

formInputs.forEach(input => {
    input.addEventListener('input', () => {
        validateInput(input);
    });
});

contactForm.addEventListener('input', () => {
    clearTimeout(resetTimer);
    formStatus.textContent = '';
    formStatus.classList.remove('success-message');
});

contactForm.addEventListener('submit', event => {
    event.preventDefault();
    clearTimeout(resetTimer);
    formStatus.textContent = '';
    formStatus.classList.remove('success-message');
    let isValid = true;

    formInputs.forEach(input => {
        if (!validateInput(input)) {
            isValid = false;
        }
    });

    if (!isValid) {
        contactForm.querySelector('.error').focus();
        return;
    }

    if (!contactForm.reportValidity()) {
        return;
    }

    formStatus.textContent = 'Thank you! Your demo submission was successful.';
    formStatus.classList.add('success-message');

    resetTimer = setTimeout(() => {
        contactForm.reset();
        formStatus.textContent = '';
        formStatus.classList.remove('success-message');
        formInputs.forEach(input => {
            clearError(input);
            input.classList.remove('success');
        });
    }, 3000);
});
