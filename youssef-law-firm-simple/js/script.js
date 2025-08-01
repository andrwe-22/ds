// Language Toggle Functionality
let currentLanguage = 'ar';

const content = {
    ar: {
        brandTitle: 'يوسف الصياح',
        brandSubtitle: 'للمحاماة والاستشارات القانونية',
        heroTitle: 'الخدمات القانونية المتميزة',
        heroSubtitle: 'نحن نحمي حقوقك ونقدم لك أفضل الخدمات القانونية في دولة الإمارات العربية المتحدة',
        heroButton: 'احجز استشارتك الآن',
        servicesTitle: 'خدماتنا القانونية',
        articlesTitle: 'المقالات القانونية',
        bookingTitle: 'احجز استشارتك القانونية',
        aboutTitle: 'عن المكتب',
        contactTitle: 'اتصل بنا',
        aboutDescription: 'مكتب يوسف الصياح للمحاماة والاستشارات القانونية هو أحد المكاتب الرائدة في دولة الإمارات العربية المتحدة، نقدم خدمات قانونية متميزة ومتخصصة في جميع فروع القانون. نحن نؤمن بأن العدالة حق للجميع ونسعى لتحقيق أفضل النتائج لعملائنا من خلال فريق من المحامين ذوي الخبرة والكفاءة العالية.',
        footerDescription: 'مكتب قانوني متخصص يقدم خدمات قانونية متميزة في دولة الإمارات العربية المتحدة',
        copyright: '© 2024 يوسف الصياح للمحاماة والاستشارات القانونية. جميع الحقوق محفوظة.',
        languageText: 'English',
        placeholders: {
            fullName: 'أدخل اسمك الكامل',
            phone: 'أدخل رقم هاتفك',
            email: 'أدخل بريدك الإلكتروني',
            caseDescription: 'اكتب وصفاً موجزاً لقضيتك'
        }
    },
    en: {
        brandTitle: 'Youssef Al-Sayyah',
        brandSubtitle: 'Law Firm & Legal Consultations',
        heroTitle: 'Distinguished Legal Services',
        heroSubtitle: 'We protect your rights and provide you with the best legal services in the United Arab Emirates',
        heroButton: 'Book Your Consultation Now',
        servicesTitle: 'Our Legal Services',
        articlesTitle: 'Legal Articles',
        bookingTitle: 'Book Your Legal Consultation',
        aboutTitle: 'About Us',
        contactTitle: 'Contact Us',
        aboutDescription: 'Youssef Al-Sayyah Law Firm and Legal Consultations is one of the leading law firms in the United Arab Emirates. We provide distinguished and specialized legal services in all branches of law. We believe that justice is a right for everyone and we strive to achieve the best results for our clients through a team of experienced and highly competent lawyers.',
        footerDescription: 'A specialized law firm providing distinguished legal services in the United Arab Emirates',
        copyright: '© 2024 Youssef Al-Sayyah Law Firm and Legal Consultations. All rights reserved.',
        languageText: 'العربية',
        placeholders: {
            fullName: 'Enter your full name',
            phone: 'Enter your phone number',
            email: 'Enter your email address',
            caseDescription: 'Write a brief description of your case'
        }
    }
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    initializeNavigation();
    initializeAnimations();
    initializeForm();
    initializeSmoothScroll();
});

// Language Toggle
function initializeLanguage() {
    const languageToggle = document.getElementById('languageToggle');
    
    languageToggle.addEventListener('click', function() {
        currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
        updateLanguage();
        localStorage.setItem('preferredLanguage', currentLanguage);
    });
    
    // Load saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && savedLanguage !== currentLanguage) {
        currentLanguage = savedLanguage;
        updateLanguage();
    }
}

function updateLanguage() {
    const html = document.documentElement;
    const body = document.body;
    
    // Update HTML attributes
    html.setAttribute('lang', currentLanguage);
    html.setAttribute('dir', currentLanguage === 'ar' ? 'rtl' : 'ltr');
    
    // Update language toggle button
    document.getElementById('languageText').textContent = content[currentLanguage].languageText;
    
    // Update main content
    updateElementContent('brandTitle', content[currentLanguage].brandTitle);
    updateElementContent('brandSubtitle', content[currentLanguage].brandSubtitle);
    updateElementContent('heroTitle', content[currentLanguage].heroTitle);
    updateElementContent('heroSubtitle', content[currentLanguage].heroSubtitle);
    updateElementContent('heroButton', content[currentLanguage].heroButton);
    updateElementContent('servicesTitle', content[currentLanguage].servicesTitle);
    updateElementContent('articlesTitle', content[currentLanguage].articlesTitle);
    updateElementContent('bookingTitle', content[currentLanguage].bookingTitle);
    updateElementContent('aboutTitle', content[currentLanguage].aboutTitle);
    updateElementContent('contactTitle', content[currentLanguage].contactTitle);
    updateElementContent('aboutDescription', content[currentLanguage].aboutDescription);
    updateElementContent('footerDescription', content[currentLanguage].footerDescription);
    updateElementContent('copyright', content[currentLanguage].copyright);
    
    // Update elements with data attributes
    updateDataAttributes();
    
    // Update form placeholders
    updateFormPlaceholders();
    
    // Add transition effect
    body.style.transition = 'all 0.3s ease';
    setTimeout(() => {
        body.style.transition = '';
    }, 300);
}

function updateElementContent(id, content) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = content;
    }
}

function updateDataAttributes() {
    const elements = document.querySelectorAll('[data-ar][data-en]');
    elements.forEach(element => {
        const content = currentLanguage === 'ar' ? element.getAttribute('data-ar') : element.getAttribute('data-en');
        element.textContent = content;
    });
}

function updateFormPlaceholders() {
    const placeholders = content[currentLanguage].placeholders;
    
    const fullNameInput = document.getElementById('fullName');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const caseDescriptionTextarea = document.getElementById('caseDescription');
    
    if (fullNameInput) fullNameInput.placeholder = placeholders.fullName;
    if (phoneInput) phoneInput.placeholder = placeholders.phone;
    if (emailInput) emailInput.placeholder = placeholders.email;
    if (caseDescriptionTextarea) caseDescriptionTextarea.placeholder = placeholders.caseDescription;
}

// Navigation
function initializeNavigation() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Update active link based on scroll position
    window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Smooth Scroll
function initializeSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Add animation classes to elements
    const animatedElements = document.querySelectorAll('.service-card, .article-card, .stat-item, .value-item, .contact-item');
    
    animatedElements.forEach((element, index) => {
        element.classList.add('fade-in');
        element.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(element);
    });
}

// Form Handling
function initializeForm() {
    const bookingForm = document.getElementById('bookingForm');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleFormSubmit);
        
        // Set minimum date to today
        const dateInput = document.getElementById('preferredDate');
        if (dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.setAttribute('min', today);
        }
        
        // Form validation
        const inputs = bookingForm.querySelectorAll('input[required], select[required]');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearFieldError);
        });
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const submitButton = e.target.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.innerHTML = '<span class="loading"></span> ' + (currentLanguage === 'ar' ? 'جاري المعالجة...' : 'Processing...');
    submitButton.disabled = true;
    
    // Collect form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Simulate API call
    setTimeout(() => {
        // Show success message
        showMessage(
            currentLanguage === 'ar' 
                ? 'تم إرسال طلب الحجز بنجاح! سنتواصل معك قريباً.' 
                : 'Booking request sent successfully! We will contact you soon.',
            'success'
        );
        
        // Reset form
        e.target.reset();
        
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // Scroll to message
        const messageElement = document.querySelector('.message');
        if (messageElement) {
            messageElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 2000);
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    clearFieldError(e);
    
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, currentLanguage === 'ar' ? 'هذا الحقل مطلوب' : 'This field is required');
        return false;
    }
    
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, currentLanguage === 'ar' ? 'البريد الإلكتروني غير صحيح' : 'Invalid email address');
            return false;
        }
    }
    
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
        if (!phoneRegex.test(value)) {
            showFieldError(field, currentLanguage === 'ar' ? 'رقم الهاتف غير صحيح' : 'Invalid phone number');
            return false;
        }
    }
    
    return true;
}

function showFieldError(field, message) {
    const formGroup = field.closest('.form-group');
    let errorElement = formGroup.querySelector('.field-error');
    
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.style.color = '#dc2626';
        errorElement.style.fontSize = '0.875rem';
        errorElement.style.marginTop = '0.25rem';
        formGroup.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
    field.style.borderColor = '#dc2626';
}

function clearFieldError(e) {
    const field = e.target;
    const formGroup = field.closest('.form-group');
    const errorElement = formGroup.querySelector('.field-error');
    
    if (errorElement) {
        errorElement.remove();
    }
    
    field.style.borderColor = '';
}

function showMessage(text, type) {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.message');
    existingMessages.forEach(msg => msg.remove());
    
    // Create new message
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    
    // Insert after booking form
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.parentNode.insertBefore(message, bookingForm.nextSibling);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (message.parentNode) {
                message.remove();
            }
        }, 5000);
    }
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance Optimization
const debouncedScrollHandler = debounce(updateActiveNavLink, 10);
window.addEventListener('scroll', debouncedScrollHandler);

// Accessibility Improvements
document.addEventListener('keydown', function(e) {
    // Close mobile menu with Escape key
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('navMenu');
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    }
});

// Handle browser back/forward buttons
window.addEventListener('popstate', function() {
    updateActiveNavLink();
});

// Preload critical resources
function preloadResources() {
    const criticalImages = [
        'images/logo.jpeg'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        document.head.appendChild(link);
    });
}

// Initialize preloading
preloadResources();

// Service Worker Registration (for future PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment when service worker is ready
        // navigator.serviceWorker.register('/sw.js');
    });
}

// Analytics and Tracking (placeholder)
function trackEvent(eventName, eventData) {
    // Placeholder for analytics tracking
    console.log('Event tracked:', eventName, eventData);
}

// Track form submissions
document.addEventListener('submit', function(e) {
    if (e.target.id === 'bookingForm') {
        trackEvent('form_submission', {
            form: 'booking',
            language: currentLanguage
        });
    }
});

// Track language changes
document.getElementById('languageToggle').addEventListener('click', function() {
    trackEvent('language_change', {
        from: currentLanguage,
        to: currentLanguage === 'ar' ? 'en' : 'ar'
    });
});

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // In production, send error to logging service
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    // In production, send error to logging service
});

