
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.sidebar > ul > li > a').forEach(function(el){
        el.addEventListener('click', function(e){
            if(window.innerWidth <= 1024 && this.nextElementSibling && this.nextElementSibling.classList.contains('submenu')){
                e.preventDefault();
                this.parentElement.classList.toggle('open');
            }
        });
    });
    const contactToggle = document.querySelector('#contact-toggle');
    const contactPanel = document.querySelector('#contact-panel');
    if(contactToggle){
        contactToggle.addEventListener('click', function(e){
            e.preventDefault();
            contactPanel.classList.toggle('active');
        });
    }
});
