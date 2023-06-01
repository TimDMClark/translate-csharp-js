class Die {
    constructor(value) {
        this.Value = value;
    }

    toString() {
        let dieString = "Unknown";

        switch (this.Value) {
            case 1:
                dieString = "one";
                break;
            case 2:
                dieString = "two";
                break;
            case 3:
                dieString = "three";
                break;
            case 4:
                dieString = "four";
                break;
            case 5:
                dieString = "five";
                break;
            case 6:
                dieString = "six";
                break;
        }

        return dieString;
    }
}

function roll() {
    const dieValue = getRandomNumber(1, 6);
    const die = new Die(dieValue);
    return die;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Let's roll some dice, baby!");
console.log("---------------------------");

for (let i = 0; i < 10; i++) {
    const die1 = roll();
    const die2 = roll();

    let message = `${die1} + ${die2} == ${die1.Value + die2.Value}`;
    if (die1.Value === die2.Value) {
        message += " DOUBLES!";
    }

    console.log(message);
}
