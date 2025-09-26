
        // // Mobile menu toggle
        // function toggleMobileMenu() {
        //     const mobileNav = document.getElementById('mobileNav');
        //     const isHidden = mobileNav.style.display === 'none' || mobileNav.style.display === '';
        //     mobileNav.style.display = isHidden ? 'flex' : 'none';
        // }

        // // Smooth scrolling for anchor links
        // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        //     anchor.addEventListener('click', function (e) {
        //         e.preventDefault();
        //         const target = document.querySelector(this.getAttribute('href'));
        //         if (target) {
        //             target.scrollIntoView({
        //                 behavior: 'smooth'
        //             });
        //         }
        //     });
        // });

        // // Close mobile menu when clicking on links
        // document.querySelectorAll('.mobile-nav a').forEach(link => {
        //     link.addEventListener('click', () => {
        //         document.getElementById('mobileNav').style.display = 'none';
        //     });
        // });

        // // Add scroll effect to header
        // window.addEventListener('scroll', function() {
        //     const header = document.querySelector('.header');
        //     if (window.scrollY > 100) {
        //         header.style.background = '#111827';
        //         header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        //     } else {
        //         header.style.background = '#111827';
        //         header.style.boxShadow = 'none';
        //     }
        // });

        // // Animate elements on scroll
        // function animateOnScroll() {
        //     const elements = document.querySelectorAll('.card, .feature-card, .testimonial-card');
            
        //     elements.forEach(element => {
        //         const elementTop = element.getBoundingClientRect().top;
        //         const elementVisible = 150;
                
        //         if (elementTop < window.innerHeight - elementVisible) {
        //             element.style.opacity = '1';
        //             element.style.transform = 'translateY(0)';
        //         } else {
        //             element.style.opacity = '0';
        //             element.style.transform = 'translateY(20px)';
        //         }
        //     });
        // }

        // // Initialize animations
        // document.addEventListener('DOMContentLoaded', function() {
        //     // Set initial state for animations
        //     const elements = document.querySelectorAll('.card, .feature-card, .testimonial-card');
        //     elements.forEach(element => {
        //         element.style.transition = 'all 0.6s ease';
        //         element.style.opacity = '0';
        //         element.style.transform = 'translateY(20px)';
        //     });
            
        //     // Start animation check
        //     animateOnScroll();
        //     window.addEventListener('scroll', animateOnScroll);
        // });

        // // Add hover effects for buttons
        // document.querySelectorAll('.btn').forEach(button => {
        //     button.addEventListener('mouseenter', function() {
        //         this.style.transform = 'translateY(-2px)';
        //     });
            
        //     button.addEventListener('mouseleave', function() {
        //         this.style.transform = 'translateY(0)';
        //     });
        // });
