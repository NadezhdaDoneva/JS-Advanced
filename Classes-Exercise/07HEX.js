class Hex {
    constructor (value){
        this.value = value;
    }
    valueOf(){
        return this.value;
    }
    toString(){
        return '0x' + this.value.toString(16).toUpperCase();

    }
    plus(number){
        return Number(number)
        ? new Hex(this.value+number)
        : new Hex(this.value + number.value);
    }
    minus(number){
      return Number(number)
      ? new Hex(this.value - number)
      : new Hex(this.value - number.value);
    }
    parse(string){
        return parseInt(string, 16);
    }
}
