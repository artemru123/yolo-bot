var countmines = 3;function changepage() {
    console.log('clicked')
}; var currentx = 0.2; var bombpos; var games1 = false;let isGameActive = false;

function openyacheika(index) {
      if (!isGameActive) return;console.log(bombpos);document.getElementById('game_play1sstatus').innerText = 'Удачи! x' + parseFloat((1 * (currentx * (countmines - 2))).toFixed(1)); currentx += 0.3; games1 = true;
     
     
     if (bombpos.includes(index)) { document.getElementById('game_play1sstatus').innerText = 'Увы!';document.getElementById('with1draw1').classList.remove('fade1test1');
         document.getElementById('minusbutton').classList.remove('disabled_play1'); document.getElementById('plus1button').classList.remove('disabled_play1')
            for (let i = 0; i < document.querySelectorAll('.yacheyka_play1').length; i++) { document.querySelectorAll('.yacheyka_play1')[i].onclick = ''
              
              
              
              
              
              
              
              
             
                if (bombpos.includes((i + 1).toString())) {
                    document.querySelectorAll('.yacheyka_play1')[i].classList.add('transitiondisable_play1');
                     setTimeout(() => {
                    
                         document.querySelectorAll('.yacheyka_play1')[i].classList.remove('transitiondisable_play1');document.querySelectorAll('.yacheyka_play1')[i].classList.remove('transitionenable1_play1');document.querySelectorAll('.yacheyka_play1')[i].onclick = function() {startgame(i + 1)};document.getElementById('with1draw1').classList.add('fadee1ing');document.getElementById('dopoloska').classList.add('fade1test1');
                         
                }, 500);setTimeout(() => {document.querySelectorAll('.yacheyka_play1')[i].innerText = '✖'; document.querySelectorAll('.yacheyka_play1')[i].classList.add('clickednotcorrectly_play1');}, 250);setTimeout(() => {isGameActive = false; document.getElementById('dopoloska').classList.remove('hidden');}, 2000)}  else {
                    
                         document.querySelectorAll('.yacheyka_play1')[i].classList.add('transitiondisable_play1');
                     setTimeout(() => {
                    
                         document.querySelectorAll('.yacheyka_play1')[i].classList.remove('transitiondisable_play1');
                         
                         
                }, 1200);
                    setTimeout(() => {
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        document.querySelectorAll('.yacheyka_play1')[i].innerText = '✓'; document.querySelectorAll('.yacheyka_play1')[i].classList.add('clickedcorrectly_play1'); document.querySelectorAll('.yacheyka_play1')[i].onclick = function() {startgame(i + 1)}; currentx = 0.3;document.getElementById('plus1button').onclick = function() {changebombcount('1')};document.getElementById('minusbutton').onclick = function() {changebombcount('0')}}, 250); document.querySelectorAll('.yacheyka_play1')[i].classList.remove('transitionenable1_play1');
                    
                }}    
     } else {
         
         

            {
                    
                         document.querySelectorAll('.yacheyka_play1')[index - 1].classList.add('transitiondisable_play1');document.querySelectorAll('.yacheyka_play1')[index - 1].onclick = '';
                     setTimeout(() => {    
                         document.querySelectorAll('.yacheyka_play1')[index - 1].classList.remove('transitiondisable_play1');
                          
                }, 500);
                
                
                
                
                
                
                
                
                    setTimeout(() => {
                        document.querySelectorAll('.yacheyka_play1')[index - 1].innerText = '✓'; document.querySelectorAll('.yacheyka_play1')[index - 1].classList.add('clickedcorrectly_play1')}, 250)
                    
                }; document.querySelectorAll('.yacheyka_play1')[index - 1].classList.remove('transitionenable1_play1');     
     } 
}












function changepage(index){ let toedit = '';
    switch (index) {
        case 1: toedit = `<div class='bannerbalance'>Ваш баланс:<br>0 Coin</div>
        <div class='game_indexs' style='text-align: center'>Любимые игры</div>
        <div class='game_indexs-wrapper'>
            
        <div class='game_indexs-container'>
            <div class="game_indexs-item">
            <div class='game_indexs-title'>Games</div><img class='game_index-img1' src="https://app.gmines.fun/assets/mines.png">
            </div>       <div class="game_indexs-item">
            <div class='game_indexs-title'>Games</div>
                
            </div>       <div class="game_indexs-item">
            <div class='game_indexs-title'>Games</div>
            </div>       <div class="game_indexs-item">
            
            
            
            
            
            
            
            
            
            
            
            
            <div class='game_indexs-title'>Games</div>       
            </div>       <div class="game_indexs-item">
            <div class='game_indexs-title'>Games</div>
            </div>       <div class="game_indexs-item">
            
            <div class='game_indexs-title'>Games</div>
            </div>    
            </div>
            
        </div><div class='game_indexs' style='text-align: center'>Халява</div>
        <div class='bannerbonus'><div class='bonuscontainer'><span>Ежедневный бонус</span><div class='buttonbonus'>Получить</div></div><div style="width: 100%; height: 2px; background: white; border-radius: 26px; margin-top: 5px;"></div><div class='bonuscontainer'><span>Посмотреть рекламу</span><div class='buttonbonus'>Выполнить</div></div></div>
        <div class='game_indexs' style='text-align: center'>Информация</div>
        <div class='game_indexs-wrapper'>
            <div class='game_indexs-container'><div class="game_indexs-item" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;width: 200px;height: 200px;"><div class='game_indexs-title' style='font-size: 20px; text-align: center;line-height: 1.1;'>Халявные промики</div><div class='game_indexs-title' style='font-size: 10px; text-align: center; color: rgba(256, 256, 256, 0.5);'>Реклама</div></div><div class="game_indexs-item" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;width: 200px;height: 200px;"><div class='game_indexs-title' style='font-size: 20px; text-align: center;line-height: 1.1;'>Промокоды добавлены</div></div></div>
        
        </div>`;break;
        case 2: toedit = `<span >Задания</span><div class='totalquestscontainer'>
        <div class='bonuscontainer_quests' style='font-size: 14px'><div class='buttoncontainer1'><span>Пригласи 3 друзей</span><span style='color: rgba(256, 256, 256, 0.5); font-size: 10px'>10 coin</span> </div><div class='buttonbonus'>Получить</div></div>
        <div class='bonuscontainer_quests' style='font-size: 14px'><div class='buttoncontainer1'><span>Подпишись на канал</span><span style='color: rgba(256, 256, 256, 0.5); font-size: 10px'>100 coin</span> </div><div class='buttonbonus'>Подписаться</div></div></div>
        
    </div>`; break;
            
        case 3: toedit = `<div class='bonuscontainer_play1'><span style='text-align: start; font-size: 25px'>Mines</span> <div class='bannerbalance_play1'><span style='text-align: center; font-size: 20px'>100 coin</span></div></div>
        <div class='centralcontainer_play1'><div class='game_play1container'><div class='yacheyka_play1' onclick='startgame(1)'>?</div><div class='yacheyka_play1' onclick='startgame(2)'>?</div><div class='yacheyka_play1' onclick='startgame(3)'>?</div><div class='yacheyka_play1' onclick='startgame(4)'>?</div><div class='yacheyka_play1' onclick='startgame(5)'>?</div><div class='yacheyka_play1' onclick='startgame(6)'>?</div><div class='yacheyka_play1' onclick='startgame(7)'>?</div><div class='yacheyka_play1' onclick='startgame(8)'>?</div><div class='yacheyka_play1' onclick='startgame(9)'>?</div><div class='yacheyka_play1' onclick='startgame(10)'>?</div><div class='yacheyka_play1' onclick='startgame(11)'>?</div><div class='yacheyka_play1' onclick='startgame(12)'>?</div><div class='yacheyka_play1' onclick='startgame(13)'>?</div><div class='yacheyka_play1' onclick='startgame(14)'>?</div><div class='yacheyka_play1' onclick='startgame(15)'>?</div><div class='yacheyka_play1' onclick='startgame(16)'>?</div><div class='yacheyka_play1' onclick='startgame(17)'>?</div><div class='yacheyka_play1' onclick='startgame(18)'>?</div><div class='yacheyka_play1' onclick='startgame(19)'>?</div><div class='yacheyka_play1' onclick='startgame(20)'>?</div><div class='yacheyka_play1' onclick='startgame(21)'>?</div><div class='yacheyka_play1' onclick='startgame(22)'>?</div><div class='yacheyka_play1' onclick='startgame(23)'>?</div><div class='yacheyka_play1' onclick='startgame(24)'>?</div><div class='yacheyka_play1' onclick='startgame(25)'>?</div></div></div><div class='centralcontainer_play1'> <div class='startgame_play1'><span style='text-align: center' id='game_play1sstatus'>Ожидание...</span> </div></div><div class='centralcontainer_play1'><div class='startgame_play1' style='height: auto; display: flex; flex-direction: column; padding: 5px; gap: 20px'><div style='display: flex; justify-content: space-between; align-items: center;'><div><span style='font-size: 20px'>Количество мин:</span><span style='font-size: 20px; ' id='countmines'>3</span></div><div style='margin-left: 25px'><div style='display: flex; align-items: center; gap: 5px; margin-top: 10px'><span class='clickedcorrectly_play1' style='height: 50px; width: 50px; border-radius: 10px; justify-content: center; align-content: center; font-size: 30px' onclick='changebombcount("1")' id='plus1button'>+</span><span class='clickednotcorrectly_play1 disabled_play1' style='height: 50px; width: 50px; border-radius: 10px; text-align: center; align-content: center; justify-content: center; font-size: 30px;' onclick='changebombcount("0")' id='minusbutton'>-</span></div></div></div><div><div style='display: flex; justify-content: space-between; align-items: flex-start; text-align: start; align-content: flex-start; gap: 10px'><div class='container-input-bet' style='position: relative'><input type="text" class='input-bet'  value='10' oninput="this.value = this.value.replace(/[^0-9]/g, '');"><span style='font-size: 10px; position: absolute; text-align: center; transform: translateX(175%); bottom: -2px'>Ставка</span></div><div class='buttonbonus_play1'>x0.5</div><div class='buttonbonus_play1'>x2</div></div></div></div> <div class='downpoloska_index hidden' id='with1draw1' style='display: none'><div class='buttonwithdraw'>Забрать</div></div>`;break;
        case 5: toedit = `<div class='banner_invite_friends'><div><span>Вы заработали:</span> <span id='countcoinfrominvitefriends'>100</span> <span>coin за приглашения</span></div> <div style="width: 100%; height: 2px; background: white; border-radius: 26px; margin-top: 5px;"></div><div style='margin-top: 20px; font-size: 16px'>Ваша уникальная ссылка для приглашения: </div>     <div style='display: flex; flex-direction: row; gap: 10px; margin-top: 5px'><div class='container-input-bet' style='width: 90%; margin-bottom: 10px; flex-direction: row;'><span class="fixed-url">start=</span><input id='input_link' type="text" class='input-bet' value='MD5HASHED' placeholder='желаемая ссылка'></div><div class='buttonbonus_play1' style='font-size: 16px'>Применить</div></div><div style='display: flex; flex-direction: row; gap: 10px; margin-bottom: 20px; margin-top: 10px'><div class='buttonbonus_play1' style='font-size: 16px'>Пригласить</div><div class='buttonbonus_play1' style='font-size: 16px' onclick='copy()'>Скопировать ссылку</div></div></div><span style='margin-top: 20px;'>Список друзей</span><div class='game_indexs-wrapper' style='flex-direction: column;height: auto; width: 100%; overflow-y: scroll; gap: 20px; margin-top: 20px'><div class='game_indexs-container' style='flex-direction: column;height: auto; width: 100%; overflow-y: scroll; gap: 10px'>
        <div class='invited-friend'><img src='logo.jpg' class='imgfriend'><span style='font-size: 16px'>Shlepa</span></div><div class='invited-friend'><img src='logo.jpg' class='imgfriend'><span style='font-size: 16px'>Shlepa</span></div></div></div>`
    }
                           
                           
                           
                           
                           
                           
                                        
    const buttons = document.querySelectorAll('.buttonclass');
    buttons.forEach(button => {
    if (button.classList.contains('choisedPg')) {
        
        button.classList.remove('choisedPg');
    }
});
    document.getElementById('toeditcontainer').classList.add('changepageanimation');
    setTimeout(() => {document.getElementById('toeditcontainer').innerHTML = toedit}, 300);document.querySelectorAll('.buttonclass')[index - 1].classList.add('choisedPg')
    setTimeout(() => {document.getElementById('toeditcontainer').classList.remove('changepageanimation')}, 600)
                           
}

function changebombcount(method) {
    
    switch (method) {
    case '0':
        if (countmines - 1 >= 3){document.getElementById('plus1button').classList.remove('disabled_play1');
            
        document.getElementById('countmines').innerText = parseInt(document.getElementById('countmines').innerText) - 1;
        countmines -= 1};
        break;

    case '1':
            
        if (9 >= countmines + 1){document.getElementById('minusbutton').classList.remove('disabled_play1');
        document.getElementById('countmines').innerText = parseInt(document.getElementById('countmines').innerText) + 1;
        countmines += 1};
            
        break;
}
if ( 3 >= countmines) {document.getElementById('minusbutton').classList.add('disabled_play1')}else if(countmines + 1 > 9){document.getElementById('plus1button').classList.add('disabled_play1')} 
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
    if (isGameActive) return;document.getElementById('with1draw1').style.display = 'flex';document.getElementById('dopoloska').classList.remove('fade1test1', 'hidden');isGameActive = true;;document.getElementById('dopoloska').classList.add('fadee1ing');const yacheyki = document.querySelectorAll('.yacheyka_play1');document.getElementById('minusbutton').classList.add('disabled');document.getElementById('plus1button').classList.add('disabled');document.getElementById('plus1button').onclick = '';document.getElementById('minusbutton').onclick = ''; setTimeout(() => {document.getElementById('dopoloska').classList.remove('fadee1ing');document.getElementById('dopoloska').classList.add('hidden');}, 1201);
    for (let i = 0; i < yacheyki.length; i++) {
        
        if (games1) {
    yacheyki[i].classList.remove('clickedcorrectly_play1', 'clickednotcorrectly_play1', 'transitionenable1_play1');yacheyki[i].classList.add('transitiondisable_play1');
            
    setTimeout(() => {
        
        yacheyki[i].classList.remove('transitiondisable_play1');document.getElementById('with1draw1').classList.add('fade1test1');
    }, 500);
    setTimeout(() => {
        
        
        
        
        
        
        
        
        
        updateYacheyka(i, yacheyki, index);
    }, 250); setTimeout(() => {document.getElementById('with1draw1')?.classList.remove('fadee1ing')}, 1201);
} else {
    
    updateYacheyka(i, yacheyki);document.getElementById('with1draw1').classList.remove('hidden');document.getElementById('with1draw1').classList.add('fade1test1');}};
    bombpos = getRandomNumbers(countmines, 1, 25); openyacheika(index.toString())}                    
function updateYacheyka(i, yacheyki, index) {
    
    if (i != index - 1) {
    yacheyki[i].innerText = '?';
                               
    yacheyki[i].classList.remove('clickedcorrectly_play1', 'clickednotcorrectly_play1', 'transitionenable1_play1');
    yacheyki[i].onclick = function() {
    
        openyacheika((i + 1).toString());
    };};

    
    
    
    
    
    
    
    
    
    
    
    
    
}
function copy() {
  let copyText = document.getElementById("input_link").value;
    
  let textToCopy = 'https://t.me/botnickname?start=' + copyText;
  navigator.clipboard.writeText(textToCopy) 
}