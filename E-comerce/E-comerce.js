
  const bar = document.getElementById('bar');
  const close = document.getElementById('close');
 const nav = document.getElementById('navbar');

  if(bar){
    bar.addEventListener('click', () =>{
       nav.classList.add('show');
    })
  }

  if(close){
    close.addEventListener('click', () =>{
       nav.classList.remove('show');
    })
  }

  const changeBg=()=>{
    document.getElementById('hero').style.backgroundImage="url('img/sproduct/insta2.jpg')"
  }
  const changeBg1=()=>{
    document.getElementById('hero').style.backgroundImage="url(img/simg.jpg)"
  }
  

  // const sjs = document.getElementsByClassName('sjs');
  // sjs.addEventListener('mouseenter',()=>{
  //   console.log('mouse enter bro');
  // });