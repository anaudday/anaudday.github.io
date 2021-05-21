let state = 'which life';
let cnv;
let points = 0;
let timer = 5;
let ballx = 450;
let bally = 150;
let ballSize = 150;
let score = 0;


function preload() {
  SeraSnow = loadImage('https://anaudday.github.io/lifeUnlike/Sera_snow_hunter.png');
  SeraSchool = loadImage('https://anaudday.github.io/lifeUnlike/Sera_high_school_student.png')
  boar = loadImage('https://anaudday.github.io/lifeUnlike/boar.png');
}

function setup() {
  cnv = createCanvas(700, 700);
  textFont('Cantarell');

  titleChoice1 = new titleChoice(200, 350);
  titleChoice2 = new titleChoice(500, 350);

  orb = new Choice(350, 600);

}

function draw() {

  findMouse();

  switch (state) {
      case 'which life':
      chooseLife();
      break;

      case 'student 1':
      student1();
      break;

      case 'hunter 1':
      hunterLvl1();
      break;
      case 'hunter 2':
      hunterLvl2();
      hunterLocked();
      break;
      case 'hunter med':
      hunterMed();
      break;
      case 'hunter small':
      hunterSmall();
      break;
      case 'hunter local':
      hunterLocal();
      break;
      case 'hunter bar':
      hunterBar();
      break;
      case 'hunter night':
      hunterNight();
      break;
      case 'hunter night 2':
      hunterNight2();
      break;
      case 'hunter save':
      hunterSave();
      break;
      case 'hunter stop':
      hunterStop();
      break;
      case 'hunter arrest':
      hunterArrest();
      break;
      case 'hunter boar':
      hunterBoar();
      break;
      case 'hunter look':
      hunterLook();
      break;
      case 'hunter GAME':
      hunterGAME();
      break;
      case 'hunter caught':
      hunterCaught();
      break;
      case 'hunter end 1':
      hunterEnd1();
      cnv.mouseClicked(endClick);
      break;
      case 'hunter end 2':
      hunterEnd2();
      cnv.mouseClicked(endClick);
      break;
      case 'hunter end 3':
      hunterEnd3();
      cnv.mouseClicked(endClick);
      break;
      case 'hunter end 4':
      hunterEnd4();
      cnv.mouseClicked(endClick);
      break;
      case 'hunter end 5':
      hunterEnd5();
      break;

  }
}

function findMouse() {
  console.log(state);
}

function mouseClicked() {
  if(state === 'which life') {
    if(mouseX > 131 && mouseX < 280 && mouseY > 279 && mouseY < 430) {
      state = 'hunter 1';
    } else if(mouseX > 430 && mouseX < 580 && mouseY > 279 && mouseY < 430) {
      state = 'student 1';
    }



  } else if(state === 'student 1') {
    if(mouseX > 300 && mouseX < 410 && mouseY > 560 && mouseY < 660){
        state = 'which life';
    }



  } else if(state === 'hunter 1') {
      if(mouseX > 300 && mouseX < 410 && mouseY > 560 && mouseY < 660){
        state = 'hunter 2';
    }


  } else if(state === 'hunter 2') {
      if(mouseX > 300 && mouseX < 410 && mouseY > 550 && mouseY < 660){
        state = 'hunter med';
    } else if(mouseX > 450 && mouseX < 560 && mouseY > 550 && mouseY < 660) {
        state = 'hunter small';
    }


  } else if(state === 'hunter med') {
      if(mouseX > 200 && mouseX < 310 && mouseY > 550 && mouseY < 660) {
        state = 'hunter local';
    } else if(mouseX > 400 && mouseX < 510 && mouseY > 550 && mouseY < 660) {
        state = 'hunter night';
      }


  } else if(state === 'hunter local') {
      if(mouseX > 200 && mouseX < 310 && mouseY > 550 && mouseY < 660){
        state = 'hunter bar';
    } else if(mouseX > 400 && mouseX < 510 && mouseY > 550 && mouseY < 660) {
        state = 'hunter night';
      }


  } else if(state === 'hunter bar') {
      if(mouseX > 300 && mouseX < 410 && mouseY > 550 && mouseY < 660){
        state = 'hunter end 1';
    }
  }


    else if(state === 'hunter night') {
      if(mouseX > 300 && mouseX < 410 && mouseY > 550 && mouseY < 660){
        state = 'hunter night 2';
    }


  } else if(state === 'hunter night 2') {
      if(mouseX > 200 && mouseX < 310 && mouseY > 550 && mouseY < 660){
        state = 'hunter save';
    } else if(mouseX > 400 && mouseX < 510 && mouseY > 550 && mouseY < 660) {
        state = 'hunter end 2';
      }


  } else if(state === 'hunter save') {
      if(mouseX > 200 && mouseX < 310 && mouseY > 550 && mouseY < 660){
        state = 'hunter stop';
    } else if(mouseX > 400 && mouseX < 510 && mouseY > 550 && mouseY < 660) {
        state = 'hunter end 4';
      }


  } else if(state === 'hunter stop') {
      if(mouseX > 200 && mouseX < 310 && mouseY > 550 && mouseY < 660){
        state = 'hunter arrest';
    } else if(mouseX > 400 && mouseX < 510 && mouseY > 550 && mouseY < 660) {
        state = 'hunter end 4';
      }


  } else if(state === 'hunter arrest') {
      if(mouseX > 300 && mouseX < 410 && mouseY > 550 && mouseY < 660){
        state = 'hunter 2';
    }


  } else if(state === 'hunter small') {
      if(mouseX > 400 && mouseX < 510 && mouseY > 550 && mouseY < 660){
        state = 'hunter boar';
      } else if(mouseX >200 && mouseX < 310 && mouseY > 550 && mouseY < 660) {
        state = 'hunter 2';
      }


  } else if(state === 'hunter boar') {
      if(mouseX > 200 && mouseX < 310 && mouseY > 550 && mouseY < 660){
        state = 'hunter look';
      } else if(mouseX >400 && mouseX < 510 && mouseY > 550 && mouseY < 660) {
        state = 'hunter end 5';
      }


  } else if(state === 'hunter look') {
     if(mouseX > 300 && mouseX < 410 && mouseY > 550 && mouseY < 660){
        state = 'hunter GAME';
      }


  }  else if(state == 'hunter caught') {
    if(mouseX > 300 && mouseX < 410 && mouseY > 550 && mouseY < 660) {
        state = 'hunter 2';
  }


  } else if(state === 'hunter end 5') {
      if(mouseX > 300 && mouseX < 410 && mouseY > 550 && mouseY < 660){
        state = 'hunter 2';
      }
  }
}

function chooseLife() {
  background(0);
  textSize(30);
  fill(255);
  textAlign(LEFT);
  text('Where will you go?', 210, 150);

  titleChoice1.display();
  fill(0);
  textSize(24);
  textAlign(CENTER);
  text('A snow\n forest', 200, 345);
  titleChoice2.display();
  fill(0);
  text('A high\n school', 500, 345);

  textSize(18);
  fill(255);
  text("The white orbs will guide you as you make choices along your journey.\n Click the orbs to choose your fate.", 345, 550);


}

function student1() {
  background(255);
  fill(0);
  textSize(45);
  textAlign(CENTER);
  textStyle(BOLD);

  image(SeraSchool, 230, 10, 250, 440);
  fill(255, 0, 0);
  textFont('VT323');
  text('ERROR\n File path not found.', 350, 450);

  noStroke();
  fill(0);
  circle(350, 600, 110);

  fill(255, 0, 0);
  textSize(22);
  textStyle(NORMAL)
  textFont('Cantarell');
  text('Go Back', 350, 605);
}

function hunterLvl1() {
  background(75, 107, 153);
  fill(255);
  textSize(25);
  textAlign(CENTER);
  textStyle(BOLD);

  image(SeraSnow, 205, -5, 250, 560);
  text('You are a BOUNTY HUNTER who resides\n in the snowy forests of Alendria. This is you.', 350, 480);

  orb.display(350, 600);

  fill(0);
  textSize(22);
  textStyle(NORMAL);
  text('Continue', 350, 605);
}

function hunterLvl2() {
  background(119, 165, 230);
  fill(0);
  textSize(21);
  textAlign(CENTER);
  textStyle(NORMAL);

  tint(255, 100);
  image(SeraSnow, 205, -5, 250, 560);
  text("It's the afternoon, and you've received three different requests from a\n few clients in the city. Each request rewards some amount of money.\n Which do you choose to take on first?", 350, 440);

  orb.display(200, 600);
  orb.display(350, 600);
  orb.display(500, 600);

  fill(0);
  textSize(22);
  textStyle(NORMAL);
  text('Medium\n reward', 350, 595);
  text('Large\n reward', 200, 595);
  text('Small\n reward', 500, 595);
}

function hunterMed() {
  background(119, 165, 230);
  fill(0);
  textSize(21);
  textAlign(CENTER);

  tint(255, 100);
  image(SeraSnow, 205, -5, 250, 560);
  text('Your client has asked that you capture an "infamous killer" who\n was responsible for murdering her husband. You stay indifferent\n about the details, as long as you get your money. In her request letter,\n she mentions that her husband was murdered during his "usual\n nightly delivery trips";\n he was a postman.\n Where do you start looking?', 350, 350);

  orb.display(250, 600);
  orb.display(450, 600);

  fill(0);
  textSize(22);
  textStyle(NORMAL);
  text('Ask\n locals', 250, 590);
  textSize(20);
  text('Wait until\n night', 450, 595);
}

function hunterSmall() {
  background(119, 165, 230);
  fill(0);
  textSize(21);
  textAlign(CENTER);

  tint(255, 100);
  image(SeraSnow, 205, -5, 250, 560);
  text('The client requests you to bring them hunt some wild boar for their\n meat. They plan to have a fancy dinner tonight for some small event.', 350, 390);
  text("....It seems they mistook you for the wrong type of hunter.\n This isn't really your line of work. But the cash reward seems\n enough for you to do it anyway.", 350, 460);

  orb.display(250, 600);
  orb.display(450, 600);

  fill(0);
  textSize(22);
  textStyle(NORMAL);
  text("Another\n bounty", 250, 595);
  textSize(22);
  text("It's boar\n season", 450, 595);
}

function hunterLocal() {
  background(119, 165, 230);
  fill(0);
  textSize(21);
  textAlign(CENTER);

  tint(255, 100);
  image(SeraSnow, 205, -5, 250, 560);
  text("You decide to ask the client's neighbours. They've seen her husband\n walk back to his home with one of the waitresses at the nearby bar on\n multiple occasions. This isn't enough information to go off of, but you\n don't want to involve too many people in this..\n What do you do?", 350, 400);

  orb.display(250, 600);
  orb.display(450, 600);

  fill(0);
  textSize(22);
  textStyle(NORMAL);
  text('Go to\n the bar', 250, 590);
  textSize(20);
  text('Wait until\n night', 450, 595);
}

function hunterBar() {
  background(24, 42, 107);
  fill(255);
  textSize(21);
  textAlign(CENTER);

  text("Ray, the bartender, recognizes you - and many of the townspeople\n very well. He's always willing to give info so long as you buy a drink.\n But you've never told him much about yourself, for\n professional reasons.", 350, 200);
  text("He slides you a glass of beer. Your alcohol tolerance is high, and\n he knows that. He thinks that one of the waitresses has been\n having an affair with the husband. But it's none of\n his business.", 350, 350);
  text("It's late. You decide to go home and continue your search tomorrow.", 350, 500);

  orb.display(350, 600);

  fill(0);
  textSize(22);
  textStyle(NORMAL);
  text('Continue', 350, 605);
}

function hunterNight() {
  background(24, 42, 107);
  fill(255);
  textSize(21);
  textAlign(CENTER);
  textStyle(NORMAL);

  text("You wait until night to ask the client herself at her home. You need\n more details from her. You take the alleyways for secrecy.\n It seems the client had the same idea. ", 350, 440);

  orb.display(350, 600);

  fill(0);
  textSize(22);
  textStyle(NORMAL);
  text('Continue', 350, 605);
}

function hunterNight2() {
  background(24, 42, 107);
  fill(255);
  textSize(21);
  textAlign(CENTER);
  textStyle(NORMAL);

  text("Someone is behind her with a knife. That must be the killer. \n Your client is unaware..", 350, 430);

  orb.display(250, 600);
  orb.display(450, 600);

  fill(255, 0, 0);
  textSize(26);
  textStyle(BOLD);
  text('Warn\n her', 450, 595);
  textSize(26);
  text('Stop\n them', 250, 590);

  textSize(100);
  text(timer, width/2, height/2);

  if (frameCount % 30 == 0 && timer > 0) {
    timer --;
  }
  if (timer == 0) {
    state = 'hunter end 3';
  }


}

function hunterSave() {
  background(24, 42, 107);
  fill(255);
  textSize(21);
  textAlign(CENTER);
  textStyle(NORMAL);

  text("You quietly and quickly run to the killer, dagger in hand, and cut low.\n They scream in pain and fall to the ground. It was the waitress\n from the bar.", 350, 170);
  text('She curses at the wife. Her last words are "Mother, why.."\n before quickly dying. How? Your cut was not meant to be lethal.', 350, 250);
  text("But the wife thanks you and hands you the cash anyway.\n She leaves in a hurry.", 350, 310)
  text("The waitress' final words fill you with suspicion. But as a bounty\n hunter, your personal opinions should not interfere with your job;\n you just take the money and move on to the next.", 350, 400);
  text("Yet, you feel a sense of unease..something doesn't add up here.", 350, 490);

  orb.display(250, 600);
  orb.display(450, 600);

  fill(0);
  textSize(26);
  textStyle(NORMAL);
  text('Stop\n her', 250, 595);
  textSize(26);
  text('Go\n home', 450, 590);
}

function hunterStop() {
  background(24, 42, 107);
  fill(255);
  textSize(21);
  textAlign(CENTER);
  textStyle(NORMAL);

  text("You stop the wife before she gets away.\n You run and jump on her, then pin her down hard.\n You threaten her for answers.", 350, 130);
  text('She tells you that she wanted to inherit his fortune.\n So she murdered him. You are filled with disdain.', 350, 220);
  text("Apparently, her daughter was the waitress at the bar.\n She was cast off by her mother, who only saw her as an obstacle.\n But the daughter cared for the father nonetheless, and brought\n him home after long days of deliveries. The wife knew the girl would\n get her vengeance after learning of her father's death,\n so she poisoned her. You were basically hired to\n protect the woman until the girl died.", 350, 300);
  text("You have your answers. What will you do with her?", 350, 510)

  orb.display(250, 600);
  orb.display(450, 600);

  fill(255, 0, 0);
  textSize(26);
  textStyle(BOLD);
  text('Arrest\n her', 250, 595);
  fill(0);
  textSize(26);
  textStyle(NORMAL);
  text('Leave\n her', 450, 595);
}

function hunterArrest() {
  background(151, 231, 247);
  fill(0);
  textSize(22);
  textAlign(CENTER);
  textStyle(NORMAL);

  text('You report the wife to the authorities. The next day, she is\n arrested for the alleged murder of two. The heirarchy\n condemns her actions.', 350, 280);
  text('You, on the other hand, keep quiet about the money,\n and continue on with your life and other bounties.', 350, 380);

  orb.display(350, 600);

  fill(0);
  textSize(22);
  textStyle(NORMAL);
  text('Continue', 350, 605);
}

function hunterLocked() {
  if(mouseX > 150 && mouseX < 260 && mouseY > 550 && mouseY < 660) {
    fill(255, 0, 0);
    textSize(30);
    textStyle(BOLD);
    text('LOCKED', 200, 610);
  }
}

function hunterBoar() {
  background(119, 165, 230);
  fill(0);
  textSize(21);
  textAlign(CENTER);

  tint(255, 100);
  image(SeraSnow, 205, -5, 250, 560);
  text("This shouldn't take long. You walk deeper into\n the forest to hunt some wild boar.", 350, 420);
  text("You search for an hour and find none. Maybe the other hunters got\n to them first. But you see some wild chickens in the distance.", 350, 490);

  orb.display(250, 600);
  orb.display(450, 600);

  fill(0);
  textSize(22);
  textStyle(NORMAL);
  text("Keep\n looking", 250, 590);
  textSize(22);
  text("Hunt the\n chickens", 450, 595);
}

function hunterLook() {
  background(212, 135, 85);
  fill(0);
  textSize(21);
  textAlign(CENTER);

  tint(255, 100);
  image(SeraSnow, 205, -5, 250, 560);
  text("Another hour of searching and the sun is now setting.", 350, 460);
  text("You see a boar though! But it notices you quickly, and starts to run.", 350, 490);

  orb.display(350, 600);

  fill(0);
  textSize(20);
  textStyle(NORMAL);
  text('Catch that\n boar!', 350, 600);
}

function hunterGAME() {
  background(54, 133, 71);

  let xc = constrain(mouseX, width, height);
  let distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize/1.5){
    ballx = random(width);
    bally = random(height);
    score = score +1;
  }
  if(score > 7){
    state= "hunter caught";
  }

  tint(255, 255);
  image(boar, ballx, bally, ballSize, ballSize);

}

function hunterCaught() {
  background(212, 135, 85);
  fill(0);
  textSize(21);
  textAlign(CENTER);

  tint(255, 100);
  image(SeraSnow, 205, -5, 250, 560);
  text("You finally caught the boar in time for dinner.\n You bring it to your client.", 350, 300);
  text("They are ecstatic to see how big of a boar is it too.\n They pay you, and you are invited to join them for dinner as well.", 350, 370);
  text("Afterwards, you go home with a nice, small pay and a full stomach.\n You're definitely ready for the next bounty tomorrow.", 350, 490);

  orb.display(350, 600);

  fill(0);
  textSize(22);
  textStyle(NORMAL);
  text('Another\n bounty', 350, 595);
}



function hunterEnd1() {
  textAlign(LEFT);
  background(115, 4, 0);
  fill(0);
  textFont('Georgia');
  textSize(28);
  textStyle(BOLD);
  text("You don't wake up the next day.", 30, 250);
  text("You died by poison in your sleep.", 30, 290);

  textStyle(NORMAL);
  textSize(24);
  text("The killer learned what you were up to..", 30, 350)

  textSize(22);
  textStyle(NORMAL);
  text('Click to restart your life.', 30, 550);
}

function hunterEnd2() {
  textAlign(LEFT);
  background(115, 4, 0);
  fill(0);
  textFont('Georgia');
  textStyle(NORMAL);
  textSize(24);
  text("You yell at her to move. You are heard.", 30, 210);

  textSize(28);
  textStyle(BOLD);
  text("The killer turns and shoots you.", 30, 290);

  textStyle(NORMAL);
  textSize(22);
  text("They stab the wife afterwards and leave the scene swiftly.", 30, 350);
  text("You collapse and die of blood loss.", 30, 380);

  textSize(22);
  textStyle(NORMAL);
  text('Click to restart your life.', 30, 550);
}

function hunterEnd3() {
  textAlign(LEFT);
  background(115, 4, 0);
  fill(0);
  textFont('Georgia');
  textSize(30);
  textStyle(BOLD);
  text("The killer stabs the wife in the back.", 30, 250);
  text("Your client is dead.", 30, 290);


  textStyle(NORMAL);
  textSize(24);
  text("You quickly leave the scene, as if nothing happened.", 30, 380);
  text("You have failed your task.", 30, 410);
  text("You get no more requests from clients. They don't trust you.", 30, 440)

  textSize(22);
  textStyle(NORMAL);
  text('Click to restart your life.', 30, 550);
}

function hunterEnd4() {
  textAlign(LEFT);
  background(142, 232, 173);
  fill(0);
  textFont('Georgia');
  textSize(30);
  textStyle(BOLD);
  text("You take your earnings and go home.", 30, 250);
  text("Tomorrow is a new day for new bounties.", 30, 290);


  textStyle(NORMAL);
  textSize(24);
  text("The wife's situation is none of your concern anymore.", 30, 380);

  textSize(22);
  textStyle(NORMAL);
  text('Click to restart your life.', 30, 550);
}

function hunterEnd5() {
  background(103, 161, 118);
  fill(0);
  textSize(22);
  textAlign(CENTER);
  textStyle(NORMAL);

  text('You hunt the chickens and bring them back to the client.', 350, 200);
  text("Apparently, the client's child is allergic to poultry meat. They get\n upset and refuse the chicken, asking why you couldn't just\n do what was requested. You don't get paid.", 350, 250);
  text("Also, the chickens you killed actually belonged to a nearby farmer.\n They ran away from their coop, and he's been searching for them.\n He is infuriated at the loss of his prized 'Doretta' and 'Jean',\n as he called them.", 350, 350);
  text('You return home in the evening empty-handed. Nothing bad really\n happened today. You just made a ton of people angry.', 350, 500);

  orb.display(350, 600);

  fill(0);
  textSize(24);
  textStyle(NORMAL);
  text('Try\n again', 350, 590);
}

function endClick() {
  textFont('Cantarell');
  state = 'which life';
}
