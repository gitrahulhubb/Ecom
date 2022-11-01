const bar = document.getElementById('bar');
const CLOSE = document.getElementById('CLOSE');
const nav = document.getElementById('navbar');
 
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');

    })
}

    if (close) {
        close.addEventListener('click', () => {
            nav.classList.remove('active');
    
        })





        
}