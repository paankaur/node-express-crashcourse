function generateRandomNumber() {
    return Math.floor(Math.random() * 100) +1;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}



const firstName = "Pat";
const lastName = "Rick";
const greetings = () => console.log(`Konnichiwaa ${firstName} son of ${lastName}`);
// greetings();

module.exports = {
    generateRandomNumber,
    celsiusToFahrenheit,
    greetings
};