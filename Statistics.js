class Statistics{
    constructor(){
        this.gameResults = [];
    }

    addGametoStatistics(win , bid){
        let gameResult = {
            win:win,
            bid:bid

        }
        this.gameResults.push(gameResult);
        return this.gameResults;
    }

    showGameStatistics(){

        let games = this.gameResults.length;

        let wins = this.gameResults.filter(game => {
           return game.win === true;
        } );

        let loses = this.gameResults.filter((game)=>{
            return game.win === false;
        })

        return[games,wins.length,loses.length];

    }

}

// let stats = new Statistics();