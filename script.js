// Form Validation Functions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(element, message) {
    const errorElement = element.nextElementSibling;
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    element.style.borderColor = '#ff4444';
}

function clearError(element) {
    const errorElement = element.nextElementSibling;
    errorElement.style.display = 'none';
    element.style.borderColor = '#ddd';
}

// Login Form Validation
function validateLoginForm() {
    let isValid = true;
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    if (!email.value) {
        showError(email, 'Email is required');
        isValid = false;
    } else if (!validateEmail(email.value)) {
        showError(email, 'Please enter a valid email');
        isValid = false;
    } else {
        clearError(email);
    }

    if (!password.value) {
        showError(password, 'Password is required');
        isValid = false;
    } else {
        clearError(password);
    }

    return isValid;
}

// Registration Form Validation
function validateRegistrationForm() {
    let isValid = true;
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    if (!name.value) {
        showError(name, 'Full name is required');
        isValid = false;
    } else {
        clearError(name);
    }

    if (!email.value) {
        showError(email, 'Email is required');
        isValid = false;
    } else if (!validateEmail(email.value)) {
        showError(email, 'Please enter a valid email');
        isValid = false;
    } else {
        clearError(email);
    }

    if (!password.value) {
        showError(password, 'Password is required');
        isValid = false;
    } else if (password.value.length < 6) {
        showError(password, 'Password must be at least 6 characters');
        isValid = false;
    } else {
        clearError(password);
    }

    if (!confirmPassword.value) {
        showError(confirmPassword, 'Please confirm your password');
        isValid = false;
    } else if (password.value !== confirmPassword.value) {
        showError(confirmPassword, 'Passwords do not match');
        isValid = false;
    } else {
        clearError(confirmPassword);
    }

    return isValid;
}

// Wellness Feedback Form Validation
function validateFeedbackForm() {
    let isValid = true;
    const name = document.getElementById('name');
    const age = document.getElementById('age');
    const topic = document.getElementById('topic');
    const feedback = document.getElementById('feedback');

    if (!name.value) {
        showError(name, 'Name is required');
        isValid = false;
    } else {
        clearError(name);
    }

    if (!age.value) {
        showError(age, 'Age is required');
        isValid = false;
    } else if (isNaN(age.value) || age.value < 1 || age.value > 120) {
        showError(age, 'Please enter a valid age');
        isValid = false;
    } else {
        clearError(age);
    }

    if (!topic.value) {
        showError(topic, 'Please select a topic');
        isValid = false;
    } else {
        clearError(topic);
    }

    if (!feedback.value) {
        showError(feedback, 'Feedback is required');
        isValid = false;
    } else {
        clearError(feedback);
    }

    return isValid;
}

// Newsletter Signup Form Validation
function validateNewsletterForm() {
    let isValid = true;
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const interests = document.querySelectorAll('input[type="checkbox"]');
    let hasInterests = false;

    if (!name.value) {
        showError(name, 'Full name is required');
        isValid = false;
    } else {
        clearError(name);
    }

    if (!email.value) {
        showError(email, 'Email is required');
        isValid = false;
    } else if (!validateEmail(email.value)) {
        showError(email, 'Please enter a valid email');
        isValid = false;
    } else {
        clearError(email);
    }

    interests.forEach(interest => {
        if (interest.checked) {
            hasInterests = true;
        }
    });

    if (!hasInterests) {
        const interestsError = document.getElementById('interestsError');
        interestsError.style.display = 'block';
        isValid = false;
    } else {
        const interestsError = document.getElementById('interestsError');
        interestsError.style.display = 'none';
    }

    return isValid;
} 