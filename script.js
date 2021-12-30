const search = document.querySelector('.searchBox');
const input = document.querySelector('input');


function ativarSearchBox(){
  search.classList.add('active');
  input.focus();
}