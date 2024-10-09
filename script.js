

function hidenav(){
    const dis = document.querySelector('.hide');
    const lela = document.querySelector('.checkbtn');
    const cross = document.querySelector('.cross');
    dis.style.left = '-100%';
    lela.style.display = '';
    cross.style.display = 'none';
    
}

function shownav(){
    const dis = document.querySelector('.hide');
    const checkbtn = document.querySelector('.checkbtn');
    const cross = document.querySelector('.cross');
    dis.style.left = '0%';
    checkbtn.style.display = 'none';
    cross.style.display = 'block';
}
