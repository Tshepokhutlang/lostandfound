document.addEventListener('DOMContentLoaded', function() {

    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            let isValid = true;
            const inputs = this.querySelectorAll('input[required], textarea[required], select[required]');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = 'black';
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    });
    
    
    const reportForms = document.querySelectorAll('.report-form, .register-form, .login-form');
    
    reportForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            
            const formData = new FormData(this);
            const data = {};
            
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            console.log('Form data:', data);
            
            
            alert('Form submitted successfully!');
            this.reset();
            
            
            if (this.classList.contains('report-form')) {
                setTimeout(() => {
                    window.location.href = 'my-items.html';
                }, 1000);
            } else if (this.classList.contains('login-form') || this.classList.contains('register-form')) {
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1000);
            }
        });
    });
});