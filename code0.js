gdjs.LoadCode = {};
gdjs.LoadCode.localVariables = [];
gdjs.LoadCode.GDBGObjects1= [];
gdjs.LoadCode.GDBGObjects2= [];
gdjs.LoadCode.GDNameObjects1= [];
gdjs.LoadCode.GDNameObjects2= [];
gdjs.LoadCode.GDGolder_9595KingObjects1= [];
gdjs.LoadCode.GDGolder_9595KingObjects2= [];
gdjs.LoadCode.GDMarksObjects1= [];
gdjs.LoadCode.GDMarksObjects2= [];


gdjs.LoadCode.asyncCallback11398820 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LoadCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}{gdjs.evtsExt__GamePushAds__ShowFullscreen.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}gdjs.LoadCode.localVariables.length = 0;
}
gdjs.LoadCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LoadCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.LoadCode.asyncCallback11398820(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoadCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.LoadCode.GDBGObjects1);
{gdjs.evtsExt__GamePushAds__Initialization.func(runtimeScene, "17515", "AMI2KwNIiSv1kxFPMdl3N23bh2b1Yqt5", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save", "IDs", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(2));
}{for(var i = 0, len = gdjs.LoadCode.GDBGObjects1.length ;i < len;++i) {
    gdjs.LoadCode.GDBGObjects1[i].play();
}
}
{ //Subevents
gdjs.LoadCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.LoadCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoadCode.GDBGObjects1.length = 0;
gdjs.LoadCode.GDBGObjects2.length = 0;
gdjs.LoadCode.GDNameObjects1.length = 0;
gdjs.LoadCode.GDNameObjects2.length = 0;
gdjs.LoadCode.GDGolder_9595KingObjects1.length = 0;
gdjs.LoadCode.GDGolder_9595KingObjects2.length = 0;
gdjs.LoadCode.GDMarksObjects1.length = 0;
gdjs.LoadCode.GDMarksObjects2.length = 0;

gdjs.LoadCode.eventsList1(runtimeScene);
gdjs.LoadCode.GDBGObjects1.length = 0;
gdjs.LoadCode.GDBGObjects2.length = 0;
gdjs.LoadCode.GDNameObjects1.length = 0;
gdjs.LoadCode.GDNameObjects2.length = 0;
gdjs.LoadCode.GDGolder_9595KingObjects1.length = 0;
gdjs.LoadCode.GDGolder_9595KingObjects2.length = 0;
gdjs.LoadCode.GDMarksObjects1.length = 0;
gdjs.LoadCode.GDMarksObjects2.length = 0;


return;

}

gdjs['LoadCode'] = gdjs.LoadCode;
