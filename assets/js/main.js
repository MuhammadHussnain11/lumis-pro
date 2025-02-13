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

// Back-to-top Button
let backTop = document.getElementById("back__top");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backTop.classList.add('active');
  } else {
    backTop.classList.remove('active');
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}