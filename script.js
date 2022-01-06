const search = document.querySelector('.searchBox');
const input = document.querySelector('input');


function ativarSearchBox(){
  search.classList.add('active');
  input.focus();
}

function scrollUp(){
  // Ao clicar no botão de rolagem, a barra de rolagem irá subir ao topo
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}


function scrollButtonActive(){
  let scrollY =  window.scrollY;
  if(scrollY === 0){
    // caso a barra de rolagem esteja na posição inicial, não mostre o botão
    document.querySelector('.scrollButton').style.display = 'none';
  }
  else if(scrollY > (document.querySelector('body').scrollHeight/4)){
    // Caso a barra de rolagem esteja em um posição maior do que um quarto da página, então mostre o botão
    document.querySelector('.scrollButton').style.display = 'block';
  }
}

window.addEventListener('scroll', scrollButtonActive); // Monitora a barra de rolagem para ativar a função scrollButtonActive


function ativarMenu(){
  document.querySelector('.menu-content').style.display = "flex"; //muda o display de none para flex
  setTimeout(() => { //depois de 100ms iremos ativar o menu
    document.querySelector('.menu-content').classList.toggle('active')
    },
    100);
}

function desativarMenu(){
  document.querySelector('.menu-content').classList.toggle('active');  
  setTimeout(() => { // depois de 400ms iremos mudar o display de flex para none
    document.querySelector('.menu-content').style.display = 'none'},
    400);
}