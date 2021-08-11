
let mainmenu = {title: "Main Menu", subtitle:"", text:"Welcome to Brad's Javascript demos", button1Text:"", button2Text:""};
let countmenu = {title: "Counter", subtitle:"Count", text:"Push the button to add/subtract", button1Text:"Add", button2Text:"Subtract", value:0};
let darklightmenu = {title: "Theme", subtitle:"Light Mode", text:"Push the button switch between Light Mode and Dark Mode", button1Text:"Light", button2Text:"Dark", value:"light"};
let pages = {mainmenu, countmenu, darklightmenu};

function displayMenu(menu_title) {
    
    switch(menu_title) {
        case (undefined): 
            menu_object = mainmenu;
            document.getElementById("cardButton1").innerHTML = "";
            document.getElementById("cardButton2").innerHTML = "";
            break;
        case (mainmenu.title):
            menu_object = mainmenu;
            document.getElementById("cardButton1").innerHTML = "";
            document.getElementById("cardButton2").innerHTML = "";
            break;
        case (countmenu.title):
            menu_object = countmenu;
            document.getElementById("menuTitle").innerHTML = menu_object.subtitle + ": "+menu_object.value;
            document.getElementById("cardButton1").innerHTML = menu_object.button1Text;
            document.getElementById("cardButton1").setAttribute("onclick", "countAdd()");
            document.getElementById("cardButton2").innerHTML = menu_object.button2Text;
            document.getElementById("cardButton2").setAttribute("onclick", "countSubtract()");
            break;
        case (darklightmenu.title):
            menu_object = darklightmenu;
            document.getElementById("cardButton2").innerHTML = "";
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
    if(darklightmenu.value=="light") {//change to dark
        darklightmenu.value = "dark";
        document.getElementById("cardButton1").innerHTML = darklightmenu.button1Text;
        document.body.classList.remove("bg-dark");
        document.body.classList.add("bg-secondary");
        document.getElementById("centreBackground").classList.remove("bg-info");
        document.getElementById("centreBackground").classList.add("bg-dark");
        
        document.getElementById("mainButton").classList.remove("bg-light");
        document.getElementById("mainButton").classList.add("bg-dark");
        document.getElementById("mainButton").classList.remove("text-dark");
        document.getElementById("mainButton").classList.add("text-light");

        document.getElementById("countButton").classList.remove("bg-light");
        document.getElementById("countButton").classList.add("bg-success");
        document.getElementById("countButton").classList.remove("text-success");
        document.getElementById("countButton").classList.add("text-light");
        
        document.getElementById("themeButton").classList.remove("bg-light");
        document.getElementById("themeButton").classList.add("bg-danger");
        document.getElementById("themeButton").classList.remove("text-danger");
        document.getElementById("themeButton").classList.add("text-light");
    }
    else {//change to light
        darklightmenu.value = "light";
        document.getElementById("cardButton1").innerHTML = darklightmenu.button2Text;
        document.body.classList.add("bg-dark");
        document.body.classList.remove("bg-secondary");
        document.getElementById("centreBackground").classList.add("bg-info");
        document.getElementById("centreBackground").classList.remove("bg-dark");

        document.getElementById("mainButton").classList.add("bg-light");
        document.getElementById("mainButton").classList.remove("bg-dark");
        document.getElementById("mainButton").classList.add("text-dark");
        document.getElementById("mainButton").classList.remove("text-light");

        document.getElementById("countButton").classList.add("bg-light");
        document.getElementById("countButton").classList.remove("bg-success");
        document.getElementById("countButton").classList.add("text-success");
        document.getElementById("countButton").classList.remove("text-light");
        
        document.getElementById("themeButton").classList.add("bg-light");
        document.getElementById("themeButton").classList.remove("bg-danger");
        document.getElementById("themeButton").classList.add("text-danger");
        document.getElementById("themeButton").classList.remove("text-light");
    }
}