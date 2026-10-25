const hamburger = document.querySelector("#hamburger");
const hiddenmenu = document.querySelector("#hiddenmenu");

//Button, text, and click boolean for project 1
const project1Button = document.querySelector("#read1");
const project1Text = document.querySelector("#text1");
//clicked variable keeps track of what the button will do
//either add text or remove text
var clicked1 = false;

//Button, text, and click boolean for project 2
const project2Button = document.querySelector("#read2");
const project2Text = document.querySelector("#text2");
var clicked2 = false;

//Button, text, and click boolean for Blog 1
const Blog1Button = document.querySelector("#read3");
const Blog1Text = document.querySelector("#text3");
var clicked3 = false;

//Button, text, and click boolean for Blog 2
const Blog2Button = document.querySelector("#read4");
const Blog2Text = document.querySelector("#text4");
var clicked4 = false;

//Button, text, and click boolean for Experience 1
const Exp1Button = document.querySelector("#read5");
const Exp1Text = document.querySelector("#text5");
var clicked5 = false;

//Button, text, and click boolean for Experience 2
const Exp2Button = document.querySelector("#read6");
const Exp2Text = document.querySelector("#text6");
var clicked6 = false;

//toggles hiddenmenu to display as block or none upon clicking the hamburger menu icon
hamburger.addEventListener(
    'click',
    () => {
        if (hiddenmenu.style.display == 'none') {
            hiddenmenu.style.display = 'block';
        }
        else {
            hiddenmenu.style.display = 'none';
        }
        
    }
)

project1Button.addEventListener(
    'click',
    () => {
        //checks if the button is in "read more" mode or "read less" mode
        if (clicked1 == false) {
            //Adds text and changes button to "read less"
            project1Text.textContent = "For this project, I was assigned with the task of creating a wireframe of my portfolio. This involved aligning all the groups of the portfolio (nav, about me, projects, education, blogs, experience, and footer) in an orderly fashion with limited attention to color and design. The goal of the project was to showcase my ability to differentiate design from layout and to organize subjects in a way that prioritized efficiency."
            project1Button.textContent = "Read Less";
            clicked1 = true;
        }
        else {
            //Removes text and changes button back to "read more"
            project1Text.textContent = "For this project, I was assigned with the task of creating a wireframe of my portfolio. This involved aligning all the groups of the portfolio (nav, about me, projects, education, blogs, experience, and footer) in an orderly fashion with limited attention to color and design.";
            project1Button.textContent = "Read More";
            clicked1 = false;
        }

    }
)

project2Button.addEventListener(
    'click',
    () => {
        if (clicked2 == false) {
            project2Text.textContent = "For this project, I was assigned to take my wireframe and transform it into an actual website. This involved creating an interactive website using HTML, CSS, and JavaScript. The website also required a professional color palette and appropriate sizing. Another important aspect of the assignment was including a working hamburger menu for smaller screens like phone screens."
            project2Button.textContent = "Read Less";
            clicked2 = true;
        }
        else {
            project2Text.textContent = "For this project, I was assigned to take my wireframe and transform it into an actual website. This involved creating an interactive website using HTML, CSS, and JavaScript. The website also required a professional color palette and appropriate sizing.";
            project2Button.textContent = "Read More";
            clicked2 = false;
        }

    }
)

Blog1Button.addEventListener(
    'click',
    () => {
        if (clicked3 == false) {
            Blog1Text.textContent = "Halloween is a very important holiday in my family. Since we grew up on horror movies and enjoyed a good fright, we naturally went all out on our costumes during Halloween. Some of mine were an evil toothfairy, Pennywise the Clown, a fallen angel, a poltergeist shark, and a costume that involved having a working clock eye."
            Blog1Button.textContent = "Read Less";
            clicked3 = true;
        }
        else {
            Blog1Text.textContent = "Halloween is a very important holiday in my family. Since we grew up on horror movies and enjoyed a good fright, we naturally went all out on our costumes during Halloween. Some of mine were...";
            Blog1Button.textContent = "Read More";
            clicked3 = false;
        }

    }
)

Blog2Button.addEventListener(
    'click',
    () => {
        if (clicked4 == false) {
            Blog2Text.textContent = "Art has always been a very important part of my life, but body art has aways been my passion. The term Body Art refers to anything artistic that is done on/to the body such as makeup, facepaint, henna, tattoo designs, special FX, etc."
            Blog2Button.textContent = "Read Less";
            clicked4 = true;
        }
        else {
            Blog2Text.textContent = "Art has always been a very important part of my life, but body art has aways been my passion. The term Body Art refers to anything artistic that is done on/to the body such as..."
            Blog2Button.textContent = "Read More";
            clicked4 = false;
        }

    }
)

Exp1Button.addEventListener(
    'click',
    () => {
        if (clicked5 == false) {
            Exp1Text.textContent = "In my career, I am tasked with helping customers with their needs in a kind and patient way. More specifically, I help customers check out their products, return unwanted products, and answer any questions they have about the store. I am also tasked with promoting the TJX credit card to all customers fairly. Since working at Marshall's, I have recieved 6 REACH cards which demonstrates my efforts and capabilities as a hard worker."
            Exp1Button.textContent = "Read Less";
            clicked5 = true;
        }
        else {
            Exp1Text.textContent = "In my career, I am tasked with helping customers with their needs in a kind and patient way. More specifically, I help customers check out their products, return unwanted products, and answer any questions they have about the store. I am also tasked with promoting the TJX credit card to all customers fairly."
            Exp1Button.textContent = "Read More";
            clicked5 = false;
        }

    }
)

Exp2Button.addEventListener(
    'click',
    () => {
        if (clicked6 == false) {
            Exp2Text.textContent = "My time volunteering at the Midland County Humane Society involved helping with assigned chores and tasks. These chores and tasks involved walking dogs, cleaning cages, socializing the animals, replacing food/water, and replacing used litter. Some additional tasks included helping clean up around the store and socializing with the customers."
            Exp2Button.textContent = "Read Less";
            clicked6 = true;
        }
        else {
            Exp2Text.textContent = "My time volunteering at the Midland County Humane Society involved helping with assigned chores and tasks. These chores and tasks involved walking dogs, cleaning cages, socializing the animals, replacing food/water, and replacing used litter."
            Exp2Button.textContent = "Read More";
            clicked6 = false;
        }

    }
)
