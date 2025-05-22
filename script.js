//  Login/Signup Sidebar functionality         
        document.getElementById("loginBtn").addEventListener("click", function (e) {
          e.preventDefault();
          openSidebar("login");
        });
      
        function openSidebar(type) {
          document.getElementById("authSidebar").classList.add("open");
          switchForm(type);
        }
      
        function closeSidebar() {
          document.getElementById("authSidebar").classList.remove("open");
        }
      
        function switchForm(type) {
          document.getElementById("loginForm").classList.add("hidden");
          document.getElementById("signupForm").classList.add("hidden");
      
          if (type === "login") {
            document.getElementById("loginForm").classList.remove("hidden");
          } else {
            document.getElementById("signupForm").classList.remove("hidden");
          }
        }

// Search Form Handling       
document.querySelector('.search-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const from = document.getElementById('hero-from').value;
    const to = document.getElementById('hero-to').value;
    const date = document.getElementById('hero-date').value;

    if (from && to && date) {
        // Here you would typically handle the search functionality                
        console.log('Searching trains:', { from, to, date });
        alert('Search functionality would be implemented here');
    } else {
        alert('Please fill in all search fields');
    }
});

// Newsletter Subscription 
document.querySelector('.newsletter form').addEventListener('submit', function (e) {
    e.preventDefault(); const email = this.querySelector('input[type="email"]').value; if (validateEmail(email)) {
        alert('Thank you for subscribing!');
        this.reset();
    } else {
        alert('Please enter a valid email address');
    }
});

// Email validation helper       
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Event Listeners         
document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('authSidebar');
    const loginBtn = document.getElementById('loginBtn');

    loginBtn.addEventListener('click', function (e) {
        e.stopPropagation(); // ✋ Stop it from bubbling to the document
        openSidebar();
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', function (event) {
        if (!event.target.closest('#authSidebar')) {
            closeSidebar();
        }
    });

    // Prevent clicks *inside* the sidebar from closing it
    sidebar.addEventListener('click', function (e) {
        e.stopPropagation();
    });

    initializeCarousel();
});

// Form submission handlers (example)         
document.querySelectorAll('.form-section .submit-btn').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const form = this.closest('.form-section');
        const inputs = form.querySelectorAll('input:not([type="button"]):not([type="submit"]):not([disabled]):not([hidden])');
        let isValid = true;
        let firstInvalid = null;

        inputs.forEach(input => {
            const value = input.value.trim();
            if (!value) {
                isValid = false;
                input.classList.add('input-error');
                if (!firstInvalid) firstInvalid = input;
            } else {
                input.classList.remove('input-error');
            }
        });

        if (!isValid) {
            alert('Please fill in all required fields');
            firstInvalid.focus();
            return;
        }

        alert('Form submitted successfully!');
        inputs.forEach(input => input.value = '');
        closeSidebar();
    });
});
