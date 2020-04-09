class CalcController{
    constructor(){
        //parâmetros privados
        this._displayCalc = "0";
        this._currentDate;
        this.initialize();
    }

    initialize(){
        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");
        
        displayCalcEl.innerHTML = "4567";
        dateEl.innerHTML = "08/04/2020";
        timeEl.innerHTML = "03:40";
    }

    //getters e setters com regras de como os parâmetros privados retornarão
    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(valor){
        this._displayCalc = valor;
    }

    get currentDate(){
        return this._currentDate;
    }

    set currentDate(valor){
        this._currentDate = valor;
    }

}