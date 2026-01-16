document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Print button functionality
    const printButton = document.createElement('button');
    printButton.className = 'fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors';
    printButton.innerHTML = '<i data-feather="printer"></i>';
    printButton.addEventListener('click', function() {
        window.print();
    });
    document.body.appendChild(printButton);
    feather.replace();
});