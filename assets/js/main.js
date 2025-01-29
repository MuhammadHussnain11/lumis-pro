const menu_ = document.getElementById("menu__");
const body=document.body;

function openMenu(){
    menu_.classList.add('active');
    body.classList.add('overflow');

}
function closeMenu(){
    menu_.classList.remove('active');
    body.classList.remove('overflow');
}
