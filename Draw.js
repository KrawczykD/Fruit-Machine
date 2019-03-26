class Draw{
    constructor(){
        this.options = ["red","green","blue"];
        let _result = this.drawResult();

        this.getDrawResult = () =>{
            return _result;
        }
    }

    drawResult(){
        let colors = [];

        for(let e = 0 ; e<this.options.length ; e++){
            const index = Math.floor(Math.random()* this.options.length);
            const color = this.options[index];
            colors[e] = color;
        }

        return colors;
    }


}

// let draw = new Draw();