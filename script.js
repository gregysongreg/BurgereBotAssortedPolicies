document.addEventListener('DOMContentLoaded', function() {
    const policyButtons = document.querySelectorAll('.policy-btn');
    const policySections = document.querySelectorAll('.policy-section');

    policyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const policyId = this.getAttribute('data-policy');

            // Remove active class from all buttons and sections
            policyButtons.forEach(btn => btn.classList.remove('active'));
            policySections.forEach(section => section.classList.remove('active'));

            // Add active class to clicked button and corresponding section
            this.classList.add('active');
            document.getElementById(policyId).classList.add('active');
        });
    });
});