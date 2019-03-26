class Game {
    constructor(start){
        this.wallet = new Wallet(start);
        this.stats = new Statistics();

        this.colors = [...document.querySelectorAll(".game .color")];
        this.spanwallet = document.querySelector(".panel .wallet");
        this.spanResult = document.querySelector(".score .result");
        this.spanGames = document.querySelector(".score .number");
        this.spanWin = document.querySelector(".score .win");
        this.spanLoss = document.querySelector(".score .loss");

        this.inputBid = document.getElementById("bid");

        document.getElementById("start").addEventListener("click",this.startGame.bind(this));
        
        this.render();
    }

    render(colors = ["gray" ,"gray","gray"] , money = this.wallet.getWalletValue(),
    result = "" , stats = this.stats.showGameStatistics() , bid = 0 , wonMoney = 0 ){

        this.colors.forEach((color , i)=>{
            color.style.backgroundColor = colors[i]
        });

        this.spanwallet.textContent = money;
        if(result) {
            result = `You Win! ${wonMoney}`
        }
        else if(!result && result !==""){
            result = `You Lose!! ${Math.floor(this.inputBid.value)}`
        }
        this.spanResult.textContent = result;

        this.spanGames.textContent = stats[0];
        this.spanWin.textContent = stats[1];
        this.spanLoss.textContent = stats[2];

    };


    startGame(){
       if(this.inputBid.value < 1){
          let bid = Math.floor(this.inputBid.value);
           return alert("Put more money!");
       }

       if(!this.wallet.checkCanPlay(this.inputBid.value)){
           return alert("Not enough money in your wallet");
       }

       this.wallet.changeWallet(Math.floor(this.inputBid.value) ,"-");

       this.draw = new Draw();

       const colors = this.draw.getDrawResult();
       const win = Result.checkWinner(colors);
       
       const wonMoney = Result.moneyWinInGame(win , Math.floor(this.inputBid.value));
       this.wallet.changeWallet(wonMoney);
       
       this.stats.addGametoStatistics(win , Math.floor(this.inputBid.value));

       this.render(colors ,this.wallet.getWalletValue(),
       win , this.stats.showGameStatistics() 
       , Math.floor(this.inputBid.value) , wonMoney);
       console.log(wonMoney)
    }

}




let game = new Game(100);