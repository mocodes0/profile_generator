const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :): ", (nickNameAnswer) => {
  rl.question("What's an activity you like doing?: ", (activityAnswer) => {
    rl.question("What do you listen to while doing that?: ", (listenAnswer) => {
 rl.question("Which meal is your favourite (eg: dinner, brunch, etc.): ", (mealAnswer) => {
        rl.question("What's your favourite thing to eat for that meal?: ", (foodAnswer) => {
  rl.question("Which sport is your absolute favourite?: ", (sportAnswer) => {
              rl.question("What is your superpower? In a few words, tell us what you are amazing at!: ", (superPowerAnswer) => {
              console.log("\nOnline Profile:");
              console.log(`${nickNameAnswer} loves listening to ${listenAnswer} while ${activityAnswer}, devouring ${foodAnswer} for ${mealAnswer}, prefers ${sportAnswer} over any other sport, and is amazing at ${superPowerAnswer}.`);

              rl.close();
         });
        });
        });
  });
    });
});
}); 

