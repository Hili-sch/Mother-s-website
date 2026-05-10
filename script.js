document.addEventListener('DOMContentLoaded', () => {
    
    // 1. תפריט מובייל (Mobile Menu Toggle)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.getElementById('main-nav');

    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            
            // שינוי סמל התפריט (המבורגר לאיקס ולהיפך)
            if (mainNav.classList.contains('active')) {
                mobileMenuBtn.innerHTML = '✕';
            } else {
                mobileMenuBtn.innerHTML = '☰';
            }
        });
    }

    // 2. גלילה חלקה לקישורי עוגן (Smooth Scrolling)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            // התעלמות אם הקישור הוא רק "#"
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // סגירת תפריט מובייל בעת לחיצה על קישור
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    if (mobileMenuBtn) mobileMenuBtn.innerHTML = '☰';
                }

                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 3. חיווי שליחת טופס אלגנטי (Elegant Form Submit Animation)
    const elegantForm = document.querySelector('.elegant-form');
    if (elegantForm) {
        elegantForm.addEventListener('submit', (e) => {
            e.preventDefault(); // מניעת רענון העמוד
            
            const submitBtn = elegantForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // שינוי מצב כפתור בעת השליחה
            submitBtn.disabled = true;
            submitBtn.textContent = 'שולח...';
            submitBtn.style.opacity = '0.8';
            
            // סימולציית שליחה והצגת הודעת הצלחה
            setTimeout(() => {
                submitBtn.textContent = '✓ ההודעה נשלחה בהצלחה!';
                submitBtn.style.backgroundColor = '#48BB78'; // צבע ירוק להצלחה
                elegantForm.reset();
                
                // החזרת הכפתור למצב ההתחלתי אחרי 3 שניות
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                    submitBtn.style.backgroundColor = ''; 
                    submitBtn.style.opacity = '';
                }, 3000);
            }, 1500);
        });
    }

    // 4. לוגיקת יונים מרחפות (Floating Doves Logic)
    const dovesContainer = document.getElementById('doves-container');

    if (dovesContainer) {
        function createDovePair() {
            const dovePair = document.createElement('div');
            dovePair.classList.add('dove-pair');
            
            // הזרקת האימוג'י ישירות ל-HTML
            dovePair.innerHTML = '🕊️ 🕊️'; 
            
            // מיקום התחלתי אקראי לרוחב המסך (כדי למנוע חיתוך בצדדים)
            const startX = Math.random() * 80 + 10; 
            dovePair.style.left = `${startX}vw`;
            
            // זמן אנימציה אקראי לריחוף רגוע (בין 12 ל-22 שניות)
            const animationDuration = Math.random() * 10 + 12;
            dovePair.style.animation = `fly-up ${animationDuration}s linear forwards`;
            
            dovesContainer.appendChild(dovePair);
            
            // מחיקת האלמנט מה-DOM לאחר סיום האנימציה
            setTimeout(() => {
                if (dovePair.parentNode) {
                    dovePair.remove();
                }
            }, animationDuration * 1000);
        }

        // יצירת זוג היונים הראשון
        setTimeout(createDovePair, 500);

        // הופעת זוג יונים חדש כל 6 שניות
        setInterval(createDovePair, 6000);
    }
});