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


    timeToPlay(typeOfGame, participant1, participant2) {
        let player1 = this.listOfParticipants.find(participant => participant.name === participant1);
        let player2 = this.listOfParticipants.find(participant => participant.name === participant2);
        if (!player1) {
            throw new Error(`Invalid entered name/s.`);
        } else {
            if (typeOfGame === "WaterBalloonFights") {
                if (!player2) {
                    throw new Error(`Invalid entered name/s.`);
                } else {
                    if (player1.condition !== player2.condition) {
                        throw new Error(`Choose players with equal condition.`);
                    } else {
                        let winner = '';
                        if (player1.power > player2.power) {
                            player1.wins += 1;
                            winner = participant1;
                            return `The ${winner} is winner in the game ${typeOfGame}.`;
                        } else if(player1.power < player2.power) {
                            player2.wins += 1;
                            winner = participant2;
                            return `The ${winner} is winner in the game ${typeOfGame}.`;
                        } else {
                            return `There is no winner.`;
                        }
                    }
                }
            } else if (typeOfGame === "Battleship") {
                player1.power += 20;
                return `The ${player1.name} successfully completed the game ${typeOfGame}.`;
            }
        }
    }

    toString (){
        let result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);
        let sorted = this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        for(let participant of sorted){
            result.push(`${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`);
        }
        return result.join('\n');
    }
}
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());



