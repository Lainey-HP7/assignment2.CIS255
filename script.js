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
            project1Text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet."
            project1Button.textContent = "Read Less";
            clicked1 = true;
        }
        else {
            //Removes text and changes button back to "read more"
            project1Text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet."
            project1Button.textContent = "Read More";
            clicked1 = false;
        }

    }
)

project2Button.addEventListener(
    'click',
    () => {
        if (clicked2 == false) {
            project2Text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet."
            project2Button.textContent = "Read Less";
            clicked2 = true;
        }
        else {
            project2Text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet."
            project2Button.textContent = "Read More";
            clicked2 = false;
        }

    }
)

Blog1Button.addEventListener(
    'click',
    () => {
        if (clicked3 == false) {
            Blog1Text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            Blog1Button.textContent = "Read Less";
            clicked3 = true;
        }
        else {
            Blog1Text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            Blog1Button.textContent = "Read More";
            clicked3 = false;
        }

    }
)

Blog2Button.addEventListener(
    'click',
    () => {
        if (clicked4 == false) {
            Blog2Text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            Blog2Button.textContent = "Read Less";
            clicked4 = true;
        }
        else {
            Blog2Text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            Blog2Button.textContent = "Read More";
            clicked4 = false;
        }

    }
)

Exp1Button.addEventListener(
    'click',
    () => {
        if (clicked5 == false) {
            Exp1Text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            Exp1Button.textContent = "Read Less";
            clicked5 = true;
        }
        else {
            Exp1Text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            Exp1Button.textContent = "Read More";
            clicked5 = false;
        }

    }
)

Exp2Button.addEventListener(
    'click',
    () => {
        if (clicked6 == false) {
            Exp2Text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            Exp2Button.textContent = "Read Less";
            clicked6 = true;
        }
        else {
            Exp2Text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            Exp2Button.textContent = "Read More";
            clicked6 = false;
        }

    }
)
