// Light Mode
const initLightMode = () => {
    const checkbox = document.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', () => {
        document.body.classList.toggle('light-mode');
    });
};
initLightMode();

// Open Menu
const initOpenMenu = () => {
    const [menuBtn, closeBtn] = document.querySelectorAll('header .menu i');
    const menu = document.querySelector('.menuOpen');
    const header = document.querySelector('header');
    const links = document.querySelectorAll('nav a');

    const close = () => {
        menu.classList.add('hidden');
        menuBtn.classList.remove('hidden');
        closeBtn.classList.add('hidden');
        document.body.style.overflow = 'visible';
        header.classList.remove('open');
    };

    const open = () => {
        menu.classList.remove('hidden');
        menuBtn.classList.add('hidden');
        closeBtn.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        header.classList.add('open');
    };

    menuBtn.addEventListener('click', open);
    closeBtn.addEventListener('click', close);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') close();
    });

    links.forEach(link => link.addEventListener('click', close));
};
initOpenMenu();

// Scroll Animation
const initAnimationScroll = () => {
    const sections = document.querySelectorAll('.js-section');
    const windowHalfSize = window.innerHeight * 0.6;

    const animateScroll = () => {
        sections.forEach(section => {
            const top = section.getBoundingClientRect().top;
            section.classList.toggle('active', top - windowHalfSize < 0);
        });
    };

    animateScroll();
    window.addEventListener('scroll', animateScroll);
};
initAnimationScroll();

// Scroll Smooth
const initScrollSmooth = () => {
    const links = document.querySelectorAll('nav a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href');
            const section = document.querySelector(targetId);
            if (section) {
                window.scrollTo({
                    top: section.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
};
initScrollSmooth();

// Typing Animation
const initTypingAnimation = () => {
    const title = document.querySelector('#sobre .banner h1');
    const span = document.querySelector('#sobre .banner span');
    const paragraph = document.querySelector('#sobre .banner p');

    const animateTyping = (element, text, delay) => {
        element.innerHTML = '';
        text.split('').forEach((char, index) => {
            setTimeout(() => {
                element.innerHTML += char;
            }, delay * index);
        });
    };

    animateTyping(title, 'Olá, eu sou o ', 120);
    setTimeout(() => animateTyping(span, 'Alyfy Fernando', 150), 1600);
    setTimeout(() => animateTyping(paragraph, 'Desenvolvedor Front-End', 75), 3700);
};
initTypingAnimation();
