// Get The Required Dependencies
var readLineSync = require("readline-sync");
var chalk = require("chalk");

// Default Score Will Be ZERO
var score = 0;

// Questions & Options
var questionAndOption = [
  {
    question : `${chalk.hex('#40E0D0').bold(`1) The World's Largest Desert Is?

       a : Thar
       b : Sahara
       c : Kalahari
       d : Sonoran`)}
    `,
  answer : `B`
  },
  {
    question : `${chalk.hex('#40E0D0').bold(`2) Country That Has The Highest In Barley Production?

        a : China
        b : India
        c : Russia
        d : France`)}
    `,
    answer : `C`
  },
  {
    question : `${chalk.hex('#40E0D0').bold(`3) Mt-Everest Is Located In?

        a : India
        b : Nepal
        c : Tibet
        d : china`)}
    `,
    answer : `B`
  },
  {
    question : `${chalk.hex('#40E0D0').bold(`4) Which Soil Is Suitable For Agriculture?

        a : Red Soil
        b : Sand
        c : Black Soil
        d : Peaty Soil`)}
    `,
     answer : `D`
     },
  {
    question : `${chalk.hex('#40E0D0').bold(`5) Black Soils Are Best Suited For The Cultivtion Of?

        a : Cotton
        b : Rice
        c : Cereals
        d : Sugarcane`)}
    `,
    answer : `A`
    },
  {
    question : `${chalk.hex('#40E0D0').bold(`6) The Device For Measuring Altitudes Is?

        a : Altimeter
        b : Ammeter
        c : Audiometer
        d : Galvanometer`)}
    `,
    answer : `A`
     },
  {
    question : `${chalk.hex('#40E0D0').bold(`7) Which Is Considered As The Biggest Port In India?

        a : Kolkata
        b : Cochin
        c : Chennai
        d : Mumbai`)}
     `,
    answer : `D`
        },
  {
    question : `${chalk.hex('#40E0D0').bold(`8) Pink City In India Is?

        a : Mysore
        b : Hyderabad
        c : Karnataka
        d : Jaipur`)}
    `,
    answer : `D`
        }
  ];
// Options
var options = [
  { a : `Thar`,
    b : `Sahara`,
    c : `Kalahari`,
    d : `Sonoran`
  },
  {
    a : `China`,
    b : `India`,
    c : `Russia`,
    d : `France`
  },
  {
    a : `India`,
    b : `Nepal`,
    c : `Tibet`,
    d : `china`
  },
  {
     a : `Red Soil`,
     b : `Sand`,
     c : `Black Soil`,
     d : `Peaty Soil`
  },
  {
    a : `Cotton`,
    b : `Rice`,
    c : `Cereals`,
    d : `Sugarcane`
    
  },
  {
     a : `Altimeter`,
     b : `Ammeter`,
     c : `Audiometer`,
     d : `Galvanometer`
  },
  {
    a : `Kolkata`,
    b : `Cochin`,
    c : `Chennai`,
    d : `Mumbai`
  },
  {
    a : `Mysore`,
    b : `Hyderabad`,
    c : `Karnataka`,
    d : `Jaipur`
  }
];

// Answers
var answers = ["B", "C", "B", "D", "A", "A", "D", "D"];

// Display Correct Answer To The User
var rightAnswer = [
  (`${answers[0]} : ${options[0].b}`),
  (`${answers[1]} : ${options[1].c}`),
  (`${answers[2]} : ${options[2].b}`),
  (`${answers[3]} : ${options[3].d}`),
  (`${answers[4]} : ${options[4].a}`),
  (`${answers[5]} : ${options[5].a}`),
  (`${answers[6]} : ${options[6].d}`),
  (`${answers[7]} : ${options[7].d}`),
  ];

  // HighScores:
  var highScores = [
    {name : 'Minhaj', score : 7},
    {name  : 'Amer', score : 7}
    ];


// greet The user
function greet() {
  var userName = readLineSync.question(`${chalk.whiteBright.bold(`May I Know Your Name?`)} `).toUpperCase();
  userName = chalk.bgRed.white.bold(userName);
  console.log(`${chalk.bold.hex('#FFF')(`Welcome ${userName} To The Quiz!
-------------------
Here Are The Rules:
-------------------
i) There Are 3 Levels In This Game.
ii) The 1st Level Contains 3 Questions, Out Of Which Atleast 2 Answers Should Be Correct To Be Promoted To Level-2. Else, You Will Be Eliminated!!.
iii) The 2nd Level Contains again 3 Questions, Out Of Which Atleast 2 Answers Should Be Correct To Be Promoted To Level-3 (Final-Round). Else, You Will be Eliminated!!.
---------------------------------`)}`);

if(!!readLineSync.keyInYN((`${chalk.bgRed(`Are You Ready?`)}`))) {
  
  // iterate the questionAndOption array:
  for (i = 0; i < questionAndOption.length; i++){
    // Check Whether to Eliminate / not
  if ( ((i === 3) && (score < 2)) || ((i === 6) && (score <= 3)) ) {
    console.log(`You Were Eliminated!!!`);
    break;
  } else {
    //  call The playQuiz() Function
    playQuiz(questionAndOption[i].question, questionAndOption[i].answer);
  }
  }
}
}

greet();

// Take userAnswer & Show The Output
function playQuiz(question, answer) {
// Display Current-Level To The User
  if ((i === 0) && (score <= 2)) {
    console.log(`       
                `,`${chalk.bold.bgWhiteBright.black(`You Are In Level-1`)}`, `
    `); 
  }


// Take Answer From User
 var userAnswer = readLineSync.question(question).toUpperCase();
   
// Verify The Answer Using Branching
  if(userAnswer === answer) {
    console.log(`${chalk.bold.black.bgGreen(`You Are Right!`)}`);
    score++;
  } else {
    console.log(`${chalk.bold.black.bgYellow(`You Are Wrong!`)}`);

// Show The Right Answer 
  if ((i === 0) && userAnswer != answer) {
    console.log(`Correct Answer Is - ${rightAnswer[0]}`);
  } else if ((i === 1) && (userAnswer != answer)) {
    console.log(`Correct Answer Is - ${rightAnswer[1]}`);
  } else if ((i === 2) && (userAnswer != answer)) {
    console.log(`Correct Answer Is - ${rightAnswer[2]}`);
  } else if ((i === 3) && (userAnswer != answer)) {
    console.log(`Correct Answer Is - ${rightAnswer[3]}`);
  } else if ((i === 4) && (userAnswer != answer)) {
    console.log(`Correct Answer Is - ${rightAnswer[4]}`);
  } else if ((i === 5) && (userAnswer != answer)) {
    console.log(`Correct Answer Is - ${rightAnswer[5]}`);
  } else if ((i === 6) && (userAnswer != answer)) {
    console.log(`Correct Answer Is - ${rightAnswer[6]}`);
  } else if ((i === 7) && (userAnswer != answer)) {
    console.log(`Correct Answer Is - ${rightAnswer[7]}`);
  }
  
}

console.log(`${chalk.yellowBright.bold(`Your Current Score Is`)}`, `: ${score}`, `
------------------------`);
// Display Current-Level To The User
if ((i === 2) && (score >= 2)){
  console.log(`       
                `,`${chalk.bold.bgWhiteBright.black(`You Are In Level-2`)}`, `
    `);
} else if ((i === 5) && (score >= 4)) {
  console.log(`       
                `,`${chalk.bold.bgWhiteBright.black(`You Are In Level-3`)}`, `
    `);
} 

// Display HighScores
if((i === 7) && (score >= highScores[1].score)) {
  console.log(`High Scores:
------------------------`);
// Iterate HighScores
 for (let i = 0; i < highScores.length; i++) {
      console.log(`${highScores[i].name} : ${highScores[i].score}`);
    }
    
  console.log(`-----------------------
  `,
  `${chalk.bold.cyanBright(`YAY!! You Just Done A High Score!. Take A Snap & Dm Me, I Will Update It`)}`);
}

}
