const datas = [];function get(skuns) {
    document.getElementById("confurm").style.animation = 'fadeIn 0.2s forwards';setTimeout(() => {document.getElementById("confurm").style.display = "flex";}, 100);
    document.getElementById("button").onclick = function() {getss(skuns);};

}
function getss(skuns) { const tg = window.Telegram.WebApp;
    
    
     const result = datas.find(items => items.qu === skuns); tg.sendData(JSON.stringify(result));
}
const urlParams = new URLSearchParams(window.location.search);








function skuns(){
const balance = parseFloat(urlParams.get('bal'));
if (1 > 2) {
    console.error('Некорректный баланс');
    
} else {
    fetch('https://yolo-bot.vercel.app/api/proxy?url=' + encodeURIComponent('https://market.csgo.com/api/v2/prices/RUB.json'))
    
    
        .then(response => response.json())
        .then(datass => {
        
            const lists = datass.items; 
            
        
            let qu = 0; background = document.getElementById("skunss");
            lists.forEach((infos, index) => { const price = parseFloat(infos.price); if (price > (balance / 100 * 70) && (balance / 100 * 90) > price) { const hashs = infos.market_hash_name; datas.push({ price, hashs, qu }); let utems = document.createElement("div"); utems.classList.add("container-skunss", "games_indexs-items"); let png = document.createElement("img"); png.src = "https://cdn2.csgo.com/item/image/width=500/" + encodeURIComponent(hashs) + ".png"; png.classList.add("skuns"); utems.onclick = ((quCopy) => () => get(quCopy))(qu); utems.append(png);background.append(utems); qu++; }});
                
                
                
                
                
                
                
                
                
                
                
                
                
                
               
                
                    
                    
                    
                
                
                
            
            
        })
        .catch(error => {
            console.error('Ошибка при запросе данных:', error);
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        });
}}


document.addEventListener('DOMContentLoaded', () => {skuns();window.onload = () => { const loadingScreen = document.getElementById('loading-screen'); loadingScreen.style.animation = 'fadeIn 1s forwards reverse'; setTimeout(() => loadingScreen.style.display = 'none', 1000); document.getElementById('confurm').addEventListener('click', e => { if (e.target.id === 'confurm') { document.getElementById("confurm").style.animation = 'fadeOut 0.2s forwards'; setTimeout(() => { document.getElementById("confurm").style.display = "none"; }, 100); } }); }; });