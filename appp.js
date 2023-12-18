let b1 = document.querySelector('#but1');
let b2 = document.querySelector('#but2');
let sp1 = document.querySelector('#sp1');
let sp2 = document.querySelector('#sp2');
let res = document.querySelector('#res');
let play = document.querySelector('#play');

let i1 = 0;
let i2 = 0;
let win = 3;
let gameo = false;

b1.addEventListener('click' , function()
{
    if(!gameo)
    {
    i1++;
    if(i1==win)
    {
        gameo = true;
        sp1.classList.add('winner');
        sp2.classList.add('loser');
    }
    sp1.innerText = i1;
    }
})

b2.addEventListener('click' , function()
{
    if(!gameo)
    {
    i2++;
    if(i2==win)
    {
        gameo = true;
        sp2.classList.add('winner');
        sp1.classList.add('loser');
    }
    sp2.innerText = i2;
    }
})

play.addEventListener('change' , function()
{
    win = parseInt(this.value);
    reset(); 
})

res.addEventListener('click' , reset)

function reset()
{
    gameo = false;
    i1=0;
    i2=0;
    sp1.innerText = i1;
    sp2.innerText = i2;
    sp1.classList.remove('winner', 'loser');
    sp2.classList.remove('winner', 'loser');
}

