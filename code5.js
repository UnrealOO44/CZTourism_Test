gdjs.FlightCode = {};
gdjs.FlightCode.localVariables = [];
gdjs.FlightCode.idToCallbackMap = new Map();
gdjs.FlightCode.GDFlightObjects1= [];
gdjs.FlightCode.GDFlightObjects2= [];
gdjs.FlightCode.GDAction_9595btnObjects1= [];
gdjs.FlightCode.GDAction_9595btnObjects2= [];
gdjs.FlightCode.GDButton_9595textObjects1= [];
gdjs.FlightCode.GDButton_9595textObjects2= [];
gdjs.FlightCode.GDNotificationObjects1= [];
gdjs.FlightCode.GDNotificationObjects2= [];
gdjs.FlightCode.GDClose_9595btnObjects1= [];
gdjs.FlightCode.GDClose_9595btnObjects2= [];
gdjs.FlightCode.GDHint_9595btnObjects1= [];
gdjs.FlightCode.GDHint_9595btnObjects2= [];
gdjs.FlightCode.GDNotification_9595HeadObjects1= [];
gdjs.FlightCode.GDNotification_9595HeadObjects2= [];
gdjs.FlightCode.GDNotification_9595textObjects1= [];
gdjs.FlightCode.GDNotification_9595textObjects2= [];
gdjs.FlightCode.GDNotification_9595down_9595btnObjects1= [];
gdjs.FlightCode.GDNotification_9595down_9595btnObjects2= [];
gdjs.FlightCode.GDBottomfadeObjects1= [];
gdjs.FlightCode.GDBottomfadeObjects2= [];
gdjs.FlightCode.GDSafeareaObjects1= [];
gdjs.FlightCode.GDSafeareaObjects2= [];
gdjs.FlightCode.GDDarkenObjects1= [];
gdjs.FlightCode.GDDarkenObjects2= [];
gdjs.FlightCode.GDMaskObjects1= [];
gdjs.FlightCode.GDMaskObjects2= [];
gdjs.FlightCode.GDNotification_9595close_9595btnObjects1= [];
gdjs.FlightCode.GDNotification_9595close_9595btnObjects2= [];


gdjs.FlightCode.asyncCallback11208500 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.FlightCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "End of Level 1", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(false);
}
gdjs.FlightCode.localVariables.length = 0;
}
gdjs.FlightCode.idToCallbackMap.set(11208500, gdjs.FlightCode.asyncCallback11208500);
gdjs.FlightCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.FlightCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.FlightCode.asyncCallback11208500(runtimeScene, asyncObjectsList)), 11208500, asyncObjectsList);
}
}

}


};gdjs.FlightCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Darken"), gdjs.FlightCode.GDDarkenObjects1);
{for(var i = 0, len = gdjs.FlightCode.GDDarkenObjects1.length ;i < len;++i) {
    gdjs.FlightCode.GDDarkenObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.FlightCode.GDDarkenObjects1.length ;i < len;++i) {
    gdjs.FlightCode.GDDarkenObjects1[i].getBehavior("Tween").addObjectOpacityTween2("", 0, "linear", 0.2, false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Flight"), gdjs.FlightCode.GDFlightObjects1);
{for(var i = 0, len = gdjs.FlightCode.GDFlightObjects1.length ;i < len;++i) {
    gdjs.FlightCode.GDFlightObjects1[i].play();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flight"), gdjs.FlightCode.GDFlightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FlightCode.GDFlightObjects1.length;i<l;++i) {
    if ( gdjs.FlightCode.GDFlightObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.FlightCode.GDFlightObjects1[k] = gdjs.FlightCode.GDFlightObjects1[i];
        ++k;
    }
}
gdjs.FlightCode.GDFlightObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11202620);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11207708);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Darken"), gdjs.FlightCode.GDDarkenObjects1);
{for(var i = 0, len = gdjs.FlightCode.GDDarkenObjects1.length ;i < len;++i) {
    gdjs.FlightCode.GDDarkenObjects1[i].getBehavior("Tween").addObjectOpacityTween2("", 255, "linear", 0.2, false);
}
}

{ //Subevents
gdjs.FlightCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.FlightCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FlightCode.GDFlightObjects1.length = 0;
gdjs.FlightCode.GDFlightObjects2.length = 0;
gdjs.FlightCode.GDAction_9595btnObjects1.length = 0;
gdjs.FlightCode.GDAction_9595btnObjects2.length = 0;
gdjs.FlightCode.GDButton_9595textObjects1.length = 0;
gdjs.FlightCode.GDButton_9595textObjects2.length = 0;
gdjs.FlightCode.GDNotificationObjects1.length = 0;
gdjs.FlightCode.GDNotificationObjects2.length = 0;
gdjs.FlightCode.GDClose_9595btnObjects1.length = 0;
gdjs.FlightCode.GDClose_9595btnObjects2.length = 0;
gdjs.FlightCode.GDHint_9595btnObjects1.length = 0;
gdjs.FlightCode.GDHint_9595btnObjects2.length = 0;
gdjs.FlightCode.GDNotification_9595HeadObjects1.length = 0;
gdjs.FlightCode.GDNotification_9595HeadObjects2.length = 0;
gdjs.FlightCode.GDNotification_9595textObjects1.length = 0;
gdjs.FlightCode.GDNotification_9595textObjects2.length = 0;
gdjs.FlightCode.GDNotification_9595down_9595btnObjects1.length = 0;
gdjs.FlightCode.GDNotification_9595down_9595btnObjects2.length = 0;
gdjs.FlightCode.GDBottomfadeObjects1.length = 0;
gdjs.FlightCode.GDBottomfadeObjects2.length = 0;
gdjs.FlightCode.GDSafeareaObjects1.length = 0;
gdjs.FlightCode.GDSafeareaObjects2.length = 0;
gdjs.FlightCode.GDDarkenObjects1.length = 0;
gdjs.FlightCode.GDDarkenObjects2.length = 0;
gdjs.FlightCode.GDMaskObjects1.length = 0;
gdjs.FlightCode.GDMaskObjects2.length = 0;
gdjs.FlightCode.GDNotification_9595close_9595btnObjects1.length = 0;
gdjs.FlightCode.GDNotification_9595close_9595btnObjects2.length = 0;

gdjs.FlightCode.eventsList1(runtimeScene);
gdjs.FlightCode.GDFlightObjects1.length = 0;
gdjs.FlightCode.GDFlightObjects2.length = 0;
gdjs.FlightCode.GDAction_9595btnObjects1.length = 0;
gdjs.FlightCode.GDAction_9595btnObjects2.length = 0;
gdjs.FlightCode.GDButton_9595textObjects1.length = 0;
gdjs.FlightCode.GDButton_9595textObjects2.length = 0;
gdjs.FlightCode.GDNotificationObjects1.length = 0;
gdjs.FlightCode.GDNotificationObjects2.length = 0;
gdjs.FlightCode.GDClose_9595btnObjects1.length = 0;
gdjs.FlightCode.GDClose_9595btnObjects2.length = 0;
gdjs.FlightCode.GDHint_9595btnObjects1.length = 0;
gdjs.FlightCode.GDHint_9595btnObjects2.length = 0;
gdjs.FlightCode.GDNotification_9595HeadObjects1.length = 0;
gdjs.FlightCode.GDNotification_9595HeadObjects2.length = 0;
gdjs.FlightCode.GDNotification_9595textObjects1.length = 0;
gdjs.FlightCode.GDNotification_9595textObjects2.length = 0;
gdjs.FlightCode.GDNotification_9595down_9595btnObjects1.length = 0;
gdjs.FlightCode.GDNotification_9595down_9595btnObjects2.length = 0;
gdjs.FlightCode.GDBottomfadeObjects1.length = 0;
gdjs.FlightCode.GDBottomfadeObjects2.length = 0;
gdjs.FlightCode.GDSafeareaObjects1.length = 0;
gdjs.FlightCode.GDSafeareaObjects2.length = 0;
gdjs.FlightCode.GDDarkenObjects1.length = 0;
gdjs.FlightCode.GDDarkenObjects2.length = 0;
gdjs.FlightCode.GDMaskObjects1.length = 0;
gdjs.FlightCode.GDMaskObjects2.length = 0;
gdjs.FlightCode.GDNotification_9595close_9595btnObjects1.length = 0;
gdjs.FlightCode.GDNotification_9595close_9595btnObjects2.length = 0;


return;

}

gdjs['FlightCode'] = gdjs.FlightCode;
