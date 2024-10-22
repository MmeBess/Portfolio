
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 60, 
            behavior: 'smooth'
        });
    });
});

const contactButton = document.querySelector('.cta-button');
contactButton.addEventListener('mouseenter', () => {
    contactButton.style.transform = 'scale(1.1)';
    contactButton.style.transition = 'transform 0.3s ease';
});

contactButton.addEventListener('mouseleave', () => {
    contactButton.style.transform = 'scale(1)';
});


const competenceCartes = document.querySelectorAll('.competence-carte');

competenceCartes.forEach(carte => {
    carte.addEventListener('mouseenter', () => {
        carte.style.transform = 'scale(1.05)'; 
        carte.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)'; 
        carte.style.backgroundColor = '#2980B9'; 
        carte.style.color = '#FFFFFF'; 
        carte.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease';
    });

    carte.addEventListener('mouseleave', () => {
        carte.style.transform = 'scale(1)';
        carte.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; 
        carte.style.backgroundColor = '#FFFFFF'; 
        carte.style.color = '#333333'; 
    });
});


const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault(); 
    alert('Merci pour votre message ! Je vous répondrai bientôt.');
    form.reset(); 
});
