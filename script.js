var countmines = 3;function changepage() {
    console.log('clicked')
}; var currentx = 0.2; var bombpos; var games1 = false;

function openyacheika(index) {
      console.log(bombpos);document.getElementById('gamesstatus').innerText = 'Удачи! x' + parseFloat((1 * (currentx * (countmines - 2))).toFixed(1)); currentx += 0.3; games1 = true;
     
     
     if (bombpos.includes(index)) { document.getElementById('gamesstatus').innerText = 'Увы!';
         console.log('clickedbomb ' + Math.floor(Math.random() * (5 - 1)));document.getElementById('minusbutton').classList.remove('disabled'); document.getElementById('plus1button').classList.remove('disabled')
            for (let i = 0; i < document.querySelectorAll('.yacheyka').length; i++) { document.querySelectorAll('.yacheyka')[i].onclick = ''
              
              
              
              
              
              
              
              
             
                if (bombpos.includes((i + 1).toString())) {
                    document.querySelectorAll('.yacheyka')[i].classList.add('transitiondisable');
                     setTimeout(() => {
                    
                         document.querySelectorAll('.yacheyka')[i].classList.remove('transitiondisable');
                         
                }, 1200);setTimeout(() => {document.querySelectorAll('.yacheyka')[i].innerText = '✖'; document.querySelectorAll('.yacheyka')[i].classList.add('clickednotcorrectly');}, 600);document.querySelectorAll('.yacheyka')[i].classList.remove('transitionenable');document.querySelectorAll('.yacheyka')[i].onclick = function() {startgame(i + 1)};} else {
                    
                         document.querySelectorAll('.yacheyka')[i].classList.add('transitiondisable');
                     setTimeout(() => {
                    
                         document.querySelectorAll('.yacheyka')[i].classList.remove('transitiondisable');
                         
                         
                }, 1200);
                    setTimeout(() => {
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        document.querySelectorAll('.yacheyka')[i].innerText = '✓'; document.querySelectorAll('.yacheyka')[i].classList.add('clickedcorrectly'); document.querySelectorAll('.yacheyka')[i].onclick = function() {startgame(i + 1)}; currentx = 0.3;document.getElementById('plus1button').onclick = function() {changebombcount('1')};document.getElementById('minusbutton').onclick = function() {changebombcount('0')}}, 600); document.querySelectorAll('.yacheyka')[i].classList.remove('transitionenable');
                    
                }}    
     } else {
         
         console.log("unclicked");

            {
                    
                         document.querySelectorAll('.yacheyka')[index - 1].classList.add('transitiondisable');document.querySelectorAll('.yacheyka')[index - 1].onclick = '';
                     setTimeout(() => {    
                         document.querySelectorAll('.yacheyka')[index - 1].classList.remove('transitiondisable');
                          
                }, 1200);
                
                
                
                
                
                
                
                
                    setTimeout(() => {
                        document.querySelectorAll('.yacheyka')[index - 1].innerText = '✓'; document.querySelectorAll('.yacheyka')[index - 1].classList.add('clickedcorrectly')}, 700)
                    
                }; document.querySelectorAll('.yacheyka')[index - 1].classList.remove('transitionenable');     
     } 
}












function changepage(index){
    console.log(index)
}
function changebombcount(method) {
    
    switch (method) {
    case '0':
        if (countmines - 1 >= 3){document.getElementById('plus1button').classList.remove('disabled');
            
        document.getElementById('countmines').innerText = parseInt(document.getElementById('countmines').innerText) - 1;
        countmines -= 1};
        break;

    case '1':
            
        if (9 >= countmines + 1){document.getElementById('minusbutton').classList.remove('disabled');
        document.getElementById('countmines').innerText = parseInt(document.getElementById('countmines').innerText) + 1;
        countmines += 1};
            
        break;
}
if ( 3 >= countmines) {document.getElementById('minusbutton').classList.add('disabled')}else if(countmines + 1 > 9){document.getElementById('plus1button').classList.add('disabled')} 
}

function getRandomNumbers(count, min, max) {
    const numbers = new Set(); 
    while (numbers.size < count) {
        
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.add(randomNum.toString()); 
    }

    return Array.from(numbers);
}

function startgame(index) {
    const yacheyki = document.querySelectorAll('.yacheyka');document.getElementById('minusbutton').classList.add('disabled');document.getElementById('plus1button').classList.add('disabled');document.getElementById('plus1button').onclick = '';document.getElementById('minusbutton').onclick = '';
    for (let i = 0; i < yacheyki.length; i++) {
        
        if (games1) {
    yacheyki[i].classList.remove('clickedcorrectly', 'clickednotcorrectly', 'transitionenable');yacheyki[i].classList.add('transitiondisable');
            
    setTimeout(() => {
        yacheyki[i].classList.remove('transitiondisable');
        
          
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    }, 1200);
    setTimeout(() => {
        
        updateYacheyka(i, yacheyki, index);
    }, 600);
} else {
    
    updateYacheyka(i, yacheyki)}};
    bombpos = getRandomNumbers(countmines, 1, 25); openyacheika(index.toString())}
function updateYacheyka(i, yacheyki, index) {
    if (i != index - 1) {
    yacheyki[i].innerText = '?';
    yacheyki[i].classList.remove('clickedcorrectly', 'clickednotcorrectly', 'transitionenable');
    
    yacheyki[i].onclick = function() {
        openyacheika((i + 1).toString());
    };};

}