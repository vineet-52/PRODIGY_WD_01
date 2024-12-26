// Update the active link dynamically
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelectorAll('.navbar a').forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});
