document.addEventListener('DOMContentLoaded', () => {
    
    // הפעלת תפריט המובייל
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            mobileMenuBtn.innerHTML = '✖';
        } else {
            mobileMenuBtn.innerHTML = '☰';
        }
    });

    // סגירת תפריט מובייל בעת לחיצה על קישור
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '☰';
            }
        });
    });

    // מניעת שליחת טופס והצגת הודעת הדמיה
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('הפרטים נשלחו בהצלחה (מצב הדמיה).');
        contactForm.reset();
    });
});