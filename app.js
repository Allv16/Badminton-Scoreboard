
var homeScore = document.querySelectorAll('span')[1], awayScore = document.querySelectorAll('span')[2];

const homeBtn = document.querySelector('#homeBtn'), awayBtn = document.querySelector('#awayBtn'), resetBtn = document.querySelector('#resetBtn');


var homeCounters = 0, awayCounters = 0;
const start = () =>{
    
    homeScore.innerText = homeCounters;
    awayScore.innerText = awayCounters;
    homeScore.style.color = 'black';
    awayScore.style.color = 'black';
}

const actionBtn = (boolean) => {
    homeBtn.disabled = boolean;
    awayBtn.disabled = boolean;
}

start();


    homeBtn.addEventListener('click', ()=>{
        homeCounters++;
        homeScore.innerText = `${homeCounters}`
        
        if(homeCounters >=5 && awayCounters>=4 && homeCounters-awayCounters === 2 || homeCounters === 5 && awayCounters < 4)
        {
            actionBtn(true);
            homeScore.style.color = 'green';
            awayScore.style.color = 'red';
            setTimeout(()=>(alert('Home Wins!'), 1500))
        }
        
            
    });

    awayBtn.addEventListener('click', ()=>{
        awayCounters++;
        awayScore.innerText = `${awayCounters}`
        if(awayCounters >=5 && homeCounters>=4 && awayCounters-homeCounters === 2 || awayCounters=== 5 && homeCounters < 4)
        {
            actionBtn(true);
            homeScore.style.color = 'red';
            awayScore.style.color = 'green';
            setTimeout(()=>(alert('Away Wins!'), 1500))
        }
            
    });

    resetBtn.addEventListener('click', () => {
        homeCounters = 0;
        awayCounters = 0;
        actionBtn(false);
        start();
    });

    











