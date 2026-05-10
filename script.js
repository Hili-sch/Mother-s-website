document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.getElementById('main-nav');

    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            
            if (mainNav.classList.contains('active')) {
                mobileMenuBtn.innerHTML = '✕';
            } else {
                mobileMenuBtn.innerHTML = '☰';
            }
        });
    }

    // Elegant Form Submit Animation / Behavior
    const elegantForm = document.querySelector('.elegant-form');
    if (elegantForm) {
        elegantForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = elegantForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Visual feedback
            submitBtn.disabled = true;
            submitBtn.textContent = 'שולח...';
            submitBtn.style.opacity = '0.8';
            
            setTimeout(() => {
                submitBtn.textContent = '✓ ההודעה נשלחה בהצלחה!';
                submitBtn.style.backgroundColor = '#48BB78'; // Green success color
                elegantForm.reset();
                
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                    submitBtn.style.backgroundColor = ''; // Restore to CSS primary
                    submitBtn.style.opacity = '';
                }, 3000);
            }, 1500);
        });
    }
});