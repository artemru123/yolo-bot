function get(skuns) {
    document.getElementById("confurm").style.display = "flex";
    document.getElementById("confurms").onclick = function() {getss(skuns);};

}
function getss(skuns) {
    
    
    tg.sendData("buyss_" + skuns)
}
const urlParams = new URLSearchParams(window.location.search);









const balance = parseFloat(urlParams.get('bal'));
if (1 > 2) {
    console.error('Некорректный баланс');
    
} else {
    fetch('https://market.csgo.com/api/v2/prices/RUB.json')
    
    
        .then(response => response.json())
        .then(data => {
        
            const lists = data.items; 
            const datas = []; 
        
            let qu = 0; 
            lists.forEach(infos => {
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                const price = parseFloat(infos.price); 
                if (price > (balance / 100 * 70) - (pages * 3) && (balance / 100 * 90) - (pages * 3) > price) {
                    const hashs = infos.market_hash_name; 

                    datas.push({ price, hashs, qu });
                }
                
                
            });
            console.log(datas);
        })
        .catch(error => {
            console.error('Ошибка при запросе данных:', error);
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        });
}
console.log(datas, balance)