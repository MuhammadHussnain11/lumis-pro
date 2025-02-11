const nav_ = document.getElementById("nav");
const body=document.body;

function openMenu(){
    nav_.classList.add('active');
    body.classList.add('overflow');

}
function closeMenu(){
    nav_.classList.remove('active');
    body.classList.remove('overflow');
}


const sections = document.querySelectorAll('.ph-sec__ .row');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            sections.forEach(sec => sec.classList.remove('active'));
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));