
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.sidebar > ul > li > a').forEach(function(el){
        el.addEventListener('click', function(e){
            if(window.innerWidth <= 768){
                e.preventDefault();
                let parent = this.parentElement;
                parent.classList.toggle('open');
            }
        });
    });
});
