//hero section

document.addEventListener('DOMContentLoaded', function() {
    const getStartedButton = document.querySelector('.get-started');
    
    getStartedButton.addEventListener('click', function() {
        // Redirect to sign-up page
        window.location.href = '/signup?plan=free';
        
        // Optional: Add analytics tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', 'click', {
                'event_category': 'Button',
                'event_label': 'Get Started - Free Plan',
                'value': 1
            });
        }
    });
});

//plan card

document.addEventListener('DOMContentLoaded', function() {
    const buttons = [
        { element: document.querySelector('#getStartedBtn1'), plan: 'scale' },
        { element: document.querySelector('#getStartedBtn2'), plan: 'grow' },
        { element: document.querySelector('#getStartedBtn3'), plan: 'pro' }
    ];

    buttons.forEach(button => {
        if (button.element) {
            button.element.addEventListener('click', function() {
                // Redirect to sign-up page with plan parameter
                window.location.href = `/signup?plan=${button.plan}`;

                // Optional: Add analytics tracking
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'click', {
                        'event_category': 'Button',
                        'event_label': `Get Started - ${button.plan.charAt(0).toUpperCase() + button.plan.slice(1)} Plan`,
                        'value': 1
                    });
                }
            });
        }
    });
});



//fAQs
document.querySelectorAll('.faq-icon-wrapper').forEach(item => {
            item.addEventListener('click', () => {
                const faqItem = item.closest('.faq-item');
                const content = item.parentElement.nextElementSibling;
                const icon = item.querySelector('.faq-icon');
                if (content.style.display === 'flex') {
                    content.style.display = 'none';
                    content.classList.remove('show');
                    icon.classList.add('down');
                    faqItem.classList.remove('expanded');
                } else {
                    content.style.display = 'flex';
                    content.classList.add('show');
                    icon.classList.remove('down');
                    faqItem.classList.add('expanded');
                }
            });
        });
