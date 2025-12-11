
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    // Add custom icons
    const style = document.createElement('style');
    style.innerHTML = `
        .fa-dinosaur:before {
            content: "\\f729";
        }
        .fa-users-cog:before {
            content: "\\f0c0";
        }
        .fa-paw:before {
            content: "\\f729";
        }
        .fa-user-shield:before {
            content: "\\f007";
        }
        .hero::after {
            content: "🦖🦕";
            position: absolute;
            font-size: 10rem;
            opacity: 0.2;
            transform: rotate(-15deg);
            bottom: -2rem;
            right: -2rem;
            z-index: 0;
        }
    `;
    document.head.appendChild(style);
});
