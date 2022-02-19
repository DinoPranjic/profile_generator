const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profile = {};

rl.question('What is your name? ', (answer) => {
  profile["name"] = answer;

  rl.question('What is an activity you like doing? ', (hobby) => {
    profile["hobby"] = hobby;

    rl.question('What do you listen to while doing that? ', (music) => {
      profile["music"] = music;

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (meal) => {
        profile["mealtime"] = meal;

        rl.question('What is your favourite thing to eat for that meal? ', (food) => {
          profile["food"] = food;

          rl.question('Which sport is your absolute favourite? ', (sport) => {
            profile["sport"] = sport;

            rl.question('What is your superpower? ', (superpower) => {
              profile["superpower"] = superpower;

              console.log(`${profile.name} loves listening to ${profile.music} while ${profile.hobby}, devouring ${profile.food} for ${profile.mealtime}, prefers ${profile.sport} over any other sport and is amazing at ${profile.superpower}`);

              rl.close();

            });

          });
        
         
        });
      
        
      });
    
    
    });
  
    
  });
  
});
