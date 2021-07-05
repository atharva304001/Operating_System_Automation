var robot = require("robotjs");
var fs = require("fs");
var screen = robot.getScreenSize();

setTimeout(automatechrome,2000);
function automatechrome(){
    robot.moveMouseSmooth(128,850);
    setTimeout(function(){
        robot.mouseClick();
        robot.typeString(" chrome");
        robot.keyTap("enter");
        
        setTimeout(opentabs,2000);
    },2000)    
}

function opentabs(){
    var rdata = fs.readFileSync("./sites.json");
    var tabs = JSON.parse(rdata);

    for(var i = 0; i < tabs.length ; i++){
        for(var j = 0; j < tabs[i].length ; j++){
            robot.typeString(tabs[i][j]);
            robot.keyTap("enter");

            if(j < tabs[i].length - 1){
                robot.keyToggle("control","down");
                robot.keyTap("t");
                robot.keyToggle("control","up");
            }
            else if(i < tabs.length - 1){
                robot.keyToggle("control","down");
                robot.keyTap("n");
                robot.keyToggle("control","up");

            }

        }

    }
    robot.moveMouseSmooth(500,500);
    setTimeout(automatewhatsapp,2000);

}

function automatewhatsapp(){
    setTimeout(function(){
        robot.moveMouseSmooth(128,850);
        robot.mouseClick();
        robot.typeString(" whatsapp");
        robot.keyTap("enter")
        robot.moveMouseSmooth(500,500);
        setTimeout(typewhatsapp,5000);

    },1000)
    
}
function typewhatsapp(){
    setTimeout(function(){
        robot.keyTap("tab");
        robot.typeString("PBL");
        robot.keyTap("enter");
        robot.typeString(" join meeting on time");
        robot.keyTap("enter");
        robot.moveMouseSmooth(500,500);
        setTimeout(ppt_automate,3000);

    },1000)
    
}    

function ppt_automate(){
    robot.moveMouseSmooth(128,850);
    robot.mouseClick();
    robot.typeString(" PowerPoint");
    robot.keyTap("enter");
    robot.moveMouseSmooth(500,500);
    setTimeout(ppt_functions,3000);
    
    
}
function ppt_functions(){
    robot.moveMouseSmooth(52,397);
    robot.mouseClick();
    robot.moveMouseSmooth(252,390);
    robot.mouseClick();
    robot.moveMouseSmooth(500,500);
    setTimeout(System_ready,3000);

}

function System_ready(){
    robot.moveMouseSmooth(128,850);
    robot.mouseClick();
    robot.typeString(" notepad");
    robot.keyTap("enter");
    robot.typeString(" System is ready for usage");
}








