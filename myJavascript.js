
let mainmenu = {title: "Main Menu", subtitle:"", text:"Welcome to Brad's Javascript demos", button1Text:"", button2Text:""};
let countmenu = {title: "Counter", subtitle:"Count", text:"Push the button to add/subtract", button1Text:"Add", button2Text:"Subtract", value:0};
let darklightmenu = { title: "Theme", subtitle: "Light Mode", text: "Push the button switch between Light Mode and Dark Mode", button1Text: "Light", button2Text: "Dark", value: "light" };
let colourmenu = { title: "Colours", subtitle: "Colour Array", text: "Push the buttons to switch colours", button1Text: "Lighter", button2Text: "Darker", value: "777777" };
let pages = {mainmenu, countmenu, darklightmenu};

function displayMenu(menu_title) {
    
    switch(menu_title) {
        case (undefined): 
            menu_object = mainmenu;
            document.getElementById("cardButton1").innerHTML = "";
            document.getElementById("cardButton2").innerHTML = "";
            document.getElementById("cardButton1").classList.add("invisible");
            document.getElementById("cardButton2").classList.add("invisible");
            break;
        case (mainmenu.title):
            menu_object = mainmenu;
            document.getElementById("cardButton1").innerHTML = "";
            document.getElementById("cardButton2").innerHTML = "";
            document.getElementById("cardButton1").classList.add("invisible");
            document.getElementById("cardButton2").classList.add("invisible");
            break;
        case (countmenu.title):
            menu_object = countmenu;
            document.getElementById("cardButton1").classList.remove("invisible");
            document.getElementById("cardButton2").classList.remove("invisible");
            document.getElementById("menuTitle").innerHTML = menu_object.subtitle + ": "+menu_object.value;
            document.getElementById("cardButton1").innerHTML = menu_object.button1Text;
            document.getElementById("cardButton1").setAttribute("onclick", "countAdd()");
            document.getElementById("cardButton2").innerHTML = menu_object.button2Text;
            document.getElementById("cardButton2").setAttribute("onclick", "countSubtract()");
            break;
        case (darklightmenu.title):
            menu_object = darklightmenu;
            document.getElementById("cardButton2").innerHTML = "";
            document.getElementById("cardButton2").classList.add("invisible");
            document.getElementById("cardButton1").classList.remove("invisible");
            document.getElementById("cardButton1").setAttribute("onclick", "switchTheme()");
            if(darklightmenu.value == "light") {//if currently "light mode" display "Dark"
                document.getElementById("cardButton1").innerHTML = darklightmenu.button2Text;
            } else { //otherwise display "light"
                document.getElementById("cardButton1").innerHTML = darklightmenu.button1Text;
            }
            break;
    }

    document.getElementById("menuCard").classList.remove("invisible");
    document.getElementById("menuHeader").innerHTML = menu_object.title;
    
    document.getElementById("menuTextContent").innerHTML = menu_object.text;

}

function countAdd() {
    countmenu.value += 1;
    document.getElementById("menuTitle").innerHTML = menu_object.subtitle + ": "+menu_object.value;
}

function countSubtract() {
    countmenu.value -= 1;
    document.getElementById("menuTitle").innerHTML = menu_object.subtitle + ": "+menu_object.value;
}

function switchTheme() {
    document.getElementById("menuTitle").innerHTML = darklightmenu.value;
    if(darklightmenu.value=="light") {//change to dark
        darklightmenu.value = "dark";
        document.getElementById("cardButton1").innerHTML = darklightmenu.button1Text;

        $('.light-green').addClass('dark-green').removeClass('light-green');
        $('.light-blue').addClass('dark-blue').removeClass('light-blue');
        $('.light-red').addClass('dark-red').removeClass('light-red');
        $('.light-bw').addClass('dark-bw').removeClass('light-bw');
        $('.light-body').addClass('dark-body').removeClass('light-body');
    }
    else {//change to light
        darklightmenu.value = "light";
        document.getElementById("cardButton1").innerHTML = darklightmenu.button2Text;

        $('.dark-green').addClass('light-green').removeClass('dark-green');
        $('.dark-blue').addClass('light-blue').removeClass('dark-blue');
        $('.dark-red').addClass('light-red').removeClass('dark-red');
        $('.dark-bw').addClass('light-bw').removeClass('dark-bw');
        $('.dark-body').addClass('light-body').removeClass('dark-body');
    }
}

function lighterColour() {
    
}

function darkerColour() {

}