gdjs.MainCode = {};
gdjs.MainCode.localVariables = [];
gdjs.MainCode.GDBGObjects1= [];
gdjs.MainCode.GDBGObjects2= [];
gdjs.MainCode.GDInfoObjects1= [];
gdjs.MainCode.GDInfoObjects2= [];
gdjs.MainCode.GDHMObjects1= [];
gdjs.MainCode.GDHMObjects2= [];
gdjs.MainCode.GDSettingsButtonObjects1= [];
gdjs.MainCode.GDSettingsButtonObjects2= [];
gdjs.MainCode.GDGolder_9595KingObjects1= [];
gdjs.MainCode.GDGolder_9595KingObjects2= [];
gdjs.MainCode.GDMarksObjects1= [];
gdjs.MainCode.GDMarksObjects2= [];


gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDMarksObjects1Objects = Hashtable.newFrom({"Marks": gdjs.MainCode.GDMarksObjects1});
gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.MainCode.GDBGObjects1);
{for(var i = 0, len = gdjs.MainCode.GDBGObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBGObjects1[i].play();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "a");
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save", "MON", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save", "ID", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HM"), gdjs.MainCode.GDHMObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDHMObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDHMObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDHMObjects1[k] = gdjs.MainCode.GDHMObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDHMObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__Iframe__Create.func(runtimeScene, "1", "https://topiminez.github.io/hmstr/", 719, 1000, 0, 100, false, false, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Marks"), gdjs.MainCode.GDMarksObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDMarksObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("Save", "MON", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0));
}{gdjs.evtsExt__Iframe__Delete.func(runtimeScene, "1", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "a") >= 5;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "a");
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save", "MON", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Golder_King"), gdjs.MainCode.GDGolder_9595KingObjects1);
{for(var i = 0, len = gdjs.MainCode.GDGolder_9595KingObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDGolder_9595KingObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() + " МОН");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SettingsButton"), gdjs.MainCode.GDSettingsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDSettingsButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDSettingsButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDSettingsButtonObjects1[k] = gdjs.MainCode.GDSettingsButtonObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDSettingsButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Shop", false);
}}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDBGObjects1.length = 0;
gdjs.MainCode.GDBGObjects2.length = 0;
gdjs.MainCode.GDInfoObjects1.length = 0;
gdjs.MainCode.GDInfoObjects2.length = 0;
gdjs.MainCode.GDHMObjects1.length = 0;
gdjs.MainCode.GDHMObjects2.length = 0;
gdjs.MainCode.GDSettingsButtonObjects1.length = 0;
gdjs.MainCode.GDSettingsButtonObjects2.length = 0;
gdjs.MainCode.GDGolder_9595KingObjects1.length = 0;
gdjs.MainCode.GDGolder_9595KingObjects2.length = 0;
gdjs.MainCode.GDMarksObjects1.length = 0;
gdjs.MainCode.GDMarksObjects2.length = 0;

gdjs.MainCode.eventsList0(runtimeScene);
gdjs.MainCode.GDBGObjects1.length = 0;
gdjs.MainCode.GDBGObjects2.length = 0;
gdjs.MainCode.GDInfoObjects1.length = 0;
gdjs.MainCode.GDInfoObjects2.length = 0;
gdjs.MainCode.GDHMObjects1.length = 0;
gdjs.MainCode.GDHMObjects2.length = 0;
gdjs.MainCode.GDSettingsButtonObjects1.length = 0;
gdjs.MainCode.GDSettingsButtonObjects2.length = 0;
gdjs.MainCode.GDGolder_9595KingObjects1.length = 0;
gdjs.MainCode.GDGolder_9595KingObjects2.length = 0;
gdjs.MainCode.GDMarksObjects1.length = 0;
gdjs.MainCode.GDMarksObjects2.length = 0;


return;

}

gdjs['MainCode'] = gdjs.MainCode;