class SummerCamp{
    constructor(organizer, location){
        this.organizer=organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = [];
    }

    registerParticipant (name, condition, money){
        if(this.priceForTheCamp.hasOwnProperty(condition)){
            let foundParticipant= this.listOfParticipants.find(el=>el.name==name);
            if (foundParticipant) {
                return `The ${name} is already registered at the camp.`;
            } else {
                let needToPay = 0;
                if(condition=='child'){
                    needToPay=150;
                } else if(condition=='student'){
                    needToPay=300;
                } else if(condition=='collegian'){
                    needToPay=350;
                }
                if(money<needToPay){
                    return `The money is not enough to pay the stay at the camp.`;
                } else {
                    this.listOfParticipants.push({name, condition, power: 100, wins: 0});
                    return `The ${name} was successfully registered.`
                }
            }
        } else {
            throw new Error("Unsuccessful registration at the camp.");
        }
    }

    unregisterParticipant (name){
        let foundParticipant = this.listOfParticipants.find(el=>el.name==name);
        if(foundParticipant){
            let index = this.listOfParticipants.indexOf(foundParticipant);
            this.listOfParticipants.slice(index,1);
            return `The ${name} removed successfully.`
        } else {
            throw new Error (`The ${name} is not registered in the camp.`);
        }
    }

    timeToPlay (typeOfGame, participant1, participant2) {
        if(typeOfGame=="WaterBalloonFights"){
            let foundPlayer1 = this.listOfParticipants.find(el=>el.name==participant1);
            let foundPlayer2 = this.listOfParticipants.find(el=>el.name==participant2);
            if(foundPlayer1&&foundPlayer2){
                if(foundPlayer1.condition===foundPlayer2.condition){
                    let winner =''
                    if(foundPlayer1.power>foundPlayer2.power){
                        foundPlayer1.wins++
                        winner = foundPlayer1.name;
                    } else {
                        foundPlayer2.wins++
                        winner = foundPlayer2.name;
                    }
                    return `The ${winner} is winner in the game WaterBalloonFights.`
                } else {
                    throw new Error (`Choose players with equal condition.`);
                }
            } else{
                throw new Error(`Invalid entered name/s.`);
            }
        } else if (typeOfGame=='Battleship') {
            let foundPlayer = this.listOfParticipants.find(el=>el.name==participant1);
            if(foundPlayer){
                foundPlayer.power+=20;
                return `The ${foundPlayer.name} successfully completed the game Battleship.`
            } else {
                throw new Error (`Invalid entered name/s.`);
            }
        } else {
            return `There is no winner.`;
        }
    }

    toString (){
        let res = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];
        let sorted = this.listOfParticipants.sort((a,b)=>{
            a.wins-b.wins
        });
        sorted = sorted.reverse()
        for (const el of sorted) {
            res.push(`${el.name} - ${el.condition} - ${el.power} - ${el.wins}`)
        };
        return res.join('\n');
    }
}
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());



