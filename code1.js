gdjs.ComputerCode = {};
gdjs.ComputerCode.localVariables = [];
gdjs.ComputerCode.idToCallbackMap = new Map();
gdjs.ComputerCode.forEachIndex2 = 0;

gdjs.ComputerCode.forEachObjects2 = [];

gdjs.ComputerCode.forEachTemporary2 = null;

gdjs.ComputerCode.forEachTotalCount2 = 0;

gdjs.ComputerCode.GDBackgroundObjects1= [];
gdjs.ComputerCode.GDBackgroundObjects2= [];
gdjs.ComputerCode.GDBackgroundObjects3= [];
gdjs.ComputerCode.GDAction_9595btnObjects1= [];
gdjs.ComputerCode.GDAction_9595btnObjects2= [];
gdjs.ComputerCode.GDAction_9595btnObjects3= [];
gdjs.ComputerCode.GDButton_9595textObjects1= [];
gdjs.ComputerCode.GDButton_9595textObjects2= [];
gdjs.ComputerCode.GDButton_9595textObjects3= [];
gdjs.ComputerCode.GDNotificationObjects1= [];
gdjs.ComputerCode.GDNotificationObjects2= [];
gdjs.ComputerCode.GDNotificationObjects3= [];
gdjs.ComputerCode.GDClose_9595btnObjects1= [];
gdjs.ComputerCode.GDClose_9595btnObjects2= [];
gdjs.ComputerCode.GDClose_9595btnObjects3= [];
gdjs.ComputerCode.GDHint_9595btnObjects1= [];
gdjs.ComputerCode.GDHint_9595btnObjects2= [];
gdjs.ComputerCode.GDHint_9595btnObjects3= [];
gdjs.ComputerCode.GDNotification_9595HeadObjects1= [];
gdjs.ComputerCode.GDNotification_9595HeadObjects2= [];
gdjs.ComputerCode.GDNotification_9595HeadObjects3= [];
gdjs.ComputerCode.GDNotification_9595textObjects1= [];
gdjs.ComputerCode.GDNotification_9595textObjects2= [];
gdjs.ComputerCode.GDNotification_9595textObjects3= [];
gdjs.ComputerCode.GDNotification_9595down_9595btnObjects1= [];
gdjs.ComputerCode.GDNotification_9595down_9595btnObjects2= [];
gdjs.ComputerCode.GDNotification_9595down_9595btnObjects3= [];
gdjs.ComputerCode.GDBottomfadeObjects1= [];
gdjs.ComputerCode.GDBottomfadeObjects2= [];
gdjs.ComputerCode.GDBottomfadeObjects3= [];
gdjs.ComputerCode.GDSafeareaObjects1= [];
gdjs.ComputerCode.GDSafeareaObjects2= [];
gdjs.ComputerCode.GDSafeareaObjects3= [];
gdjs.ComputerCode.GDDarkenObjects1= [];
gdjs.ComputerCode.GDDarkenObjects2= [];
gdjs.ComputerCode.GDDarkenObjects3= [];
gdjs.ComputerCode.GDMaskObjects1= [];
gdjs.ComputerCode.GDMaskObjects2= [];
gdjs.ComputerCode.GDMaskObjects3= [];
gdjs.ComputerCode.GDNotification_9595close_9595btnObjects1= [];
gdjs.ComputerCode.GDNotification_9595close_9595btnObjects2= [];
gdjs.ComputerCode.GDNotification_9595close_9595btnObjects3= [];


gdjs.ComputerCode.mapOfEmptyGDAction_9595btnObjects = Hashtable.newFrom({"Action_btn": []});
gdjs.ComputerCode.mapOfEmptyGDAction_9595btnObjects = Hashtable.newFrom({"Action_btn": []});
gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDAction_95959595btnObjects2Objects = Hashtable.newFrom({"Action_btn": gdjs.ComputerCode.GDAction_9595btnObjects2});
gdjs.ComputerCode.mapOfEmptyGDAction_9595btnObjects = Hashtable.newFrom({"Action_btn": []});
gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDAction_95959595btnObjects2Objects = Hashtable.newFrom({"Action_btn": gdjs.ComputerCode.GDAction_9595btnObjects2});
gdjs.ComputerCode.eventsList0 = function(runtimeScene) {

};gdjs.ComputerCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Action_btn"), gdjs.ComputerCode.GDAction_9595btnObjects1);

for (gdjs.ComputerCode.forEachIndex2 = 0;gdjs.ComputerCode.forEachIndex2 < gdjs.ComputerCode.GDAction_9595btnObjects1.length;++gdjs.ComputerCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Button_text"), gdjs.ComputerCode.GDButton_9595textObjects2);
gdjs.ComputerCode.GDAction_9595btnObjects2.length = 0;


gdjs.ComputerCode.forEachTemporary2 = gdjs.ComputerCode.GDAction_9595btnObjects1[gdjs.ComputerCode.forEachIndex2];
gdjs.ComputerCode.GDAction_9595btnObjects2.push(gdjs.ComputerCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ComputerCode.GDButton_9595textObjects2.length;i<l;++i) {
    if ( gdjs.ComputerCode.GDButton_9595textObjects2[i].getVariableNumber(gdjs.ComputerCode.GDButton_9595textObjects2[i].getVariables().getFromIndex(0)) == ((gdjs.ComputerCode.GDAction_9595btnObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.ComputerCode.GDAction_9595btnObjects2[0].getVariables()).getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.ComputerCode.GDButton_9595textObjects2[k] = gdjs.ComputerCode.GDButton_9595textObjects2[i];
        ++k;
    }
}
gdjs.ComputerCode.GDButton_9595textObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9876196);
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.ComputerCode.GDButton_9595textObjects2.length ;i < len;++i) {
    gdjs.ComputerCode.GDButton_9595textObjects2[i].getBehavior("Sticker").Stick(gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDAction_95959595btnObjects2Objects, null);
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDAction_9595btnObjects2.length ;i < len;++i) {
    gdjs.ComputerCode.GDAction_9595btnObjects2[i].setX(((1920 - (((gdjs.ComputerCode.GDAction_9595btnObjects2[i].getWidth()) * runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber()) + 50)) / 2) + (((gdjs.ComputerCode.GDAction_9595btnObjects2[i].getWidth()) + 50) * gdjs.ComputerCode.GDAction_9595btnObjects2[i].getVariables().getFromIndex(0).getAsNumber()));
}
}
}
}

}


};gdjs.ComputerCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.ComputerCode.mapOfEmptyGDAction_9595btnObjects) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Action_btn"), gdjs.ComputerCode.GDAction_9595btnObjects2);
gdjs.copyArray(runtimeScene.getObjects("Button_text"), gdjs.ComputerCode.GDButton_9595textObjects2);
{for(var i = 0, len = gdjs.ComputerCode.GDAction_9595btnObjects2.length ;i < len;++i) {
    gdjs.ComputerCode.GDAction_9595btnObjects2[i].setX((1920 - (gdjs.ComputerCode.GDAction_9595btnObjects2[i].getWidth())) / 2);
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDButton_9595textObjects2.length ;i < len;++i) {
    gdjs.ComputerCode.GDButton_9595textObjects2[i].setX((1920 - (gdjs.ComputerCode.GDButton_9595textObjects2[i].getWidth())) / 2);
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDButton_9595textObjects2.length ;i < len;++i) {
    gdjs.ComputerCode.GDButton_9595textObjects2[i].setY((( gdjs.ComputerCode.GDAction_9595btnObjects2.length === 0 ) ? 0 :gdjs.ComputerCode.GDAction_9595btnObjects2[0].getPointY("")) + ((( gdjs.ComputerCode.GDAction_9595btnObjects2.length === 0 ) ? 0 :gdjs.ComputerCode.GDAction_9595btnObjects2[0].getHeight()) - (gdjs.ComputerCode.GDButton_9595textObjects2[i].getHeight()) / 2) - 10);
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDButton_9595textObjects2.length ;i < len;++i) {
    gdjs.ComputerCode.GDButton_9595textObjects2[i].getBehavior("Sticker").Stick(gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDAction_95959595btnObjects2Objects, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.ComputerCode.mapOfEmptyGDAction_9595btnObjects) > 1;
if (isConditionTrue_0) {

{ //Subevents
gdjs.ComputerCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDNotification_95959595down_95959595btnObjects2Objects = Hashtable.newFrom({"Notification_down_btn": gdjs.ComputerCode.GDNotification_9595down_9595btnObjects2});
gdjs.ComputerCode.asyncCallback10358140 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ComputerCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Notification_down_btn"), gdjs.ComputerCode.GDNotification_9595down_9595btnObjects3);

{for(var i = 0, len = gdjs.ComputerCode.GDNotification_9595down_9595btnObjects3.length ;i < len;++i) {
    gdjs.ComputerCode.GDNotification_9595down_9595btnObjects3[i].getBehavior("Tween").addObjectAngleTween2("", 180, "linear", 0.2, false);
}
}
gdjs.ComputerCode.localVariables.length = 0;
}
gdjs.ComputerCode.idToCallbackMap.set(10358140, gdjs.ComputerCode.asyncCallback10358140);
gdjs.ComputerCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.ComputerCode.localVariables);
for (const obj of gdjs.ComputerCode.GDNotification_9595down_9595btnObjects2) asyncObjectsList.addObject("Notification_down_btn", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.ComputerCode.asyncCallback10358140(runtimeScene, asyncObjectsList)), 10358140, asyncObjectsList);
}
}

}


};gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDNotification_95959595down_95959595btnObjects1Objects = Hashtable.newFrom({"Notification_down_btn": gdjs.ComputerCode.GDNotification_9595down_9595btnObjects1});
gdjs.ComputerCode.asyncCallback9389916 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ComputerCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Notification_down_btn"), gdjs.ComputerCode.GDNotification_9595down_9595btnObjects2);

{for(var i = 0, len = gdjs.ComputerCode.GDNotification_9595down_9595btnObjects2.length ;i < len;++i) {
    gdjs.ComputerCode.GDNotification_9595down_9595btnObjects2[i].getBehavior("Tween").addObjectAngleTween2("", 0, "linear", 0.2, false);
}
}
gdjs.ComputerCode.localVariables.length = 0;
}
gdjs.ComputerCode.idToCallbackMap.set(9389916, gdjs.ComputerCode.asyncCallback9389916);
gdjs.ComputerCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.ComputerCode.localVariables);
for (const obj of gdjs.ComputerCode.GDNotification_9595down_9595btnObjects1) asyncObjectsList.addObject("Notification_down_btn", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.ComputerCode.asyncCallback9389916(runtimeScene, asyncObjectsList)), 9389916, asyncObjectsList);
}
}

}


};gdjs.ComputerCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Notification_down_btn"), gdjs.ComputerCode.GDNotification_9595down_9595btnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDNotification_95959595down_95959595btnObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ComputerCode.GDNotification_9595down_9595btnObjects2.length;i<l;++i) {
    if ( gdjs.ComputerCode.GDNotification_9595down_9595btnObjects2[i].getAngle() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.ComputerCode.GDNotification_9595down_9595btnObjects2[k] = gdjs.ComputerCode.GDNotification_9595down_9595btnObjects2[i];
        ++k;
    }
}
gdjs.ComputerCode.GDNotification_9595down_9595btnObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ComputerCode.GDNotification_9595down_9595btnObjects2.length;i<l;++i) {
    if ( gdjs.ComputerCode.GDNotification_9595down_9595btnObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.ComputerCode.GDNotification_9595down_9595btnObjects2[k] = gdjs.ComputerCode.GDNotification_9595down_9595btnObjects2[i];
        ++k;
    }
}
gdjs.ComputerCode.GDNotification_9595down_9595btnObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10113844);
}
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Action_btn"), gdjs.ComputerCode.GDAction_9595btnObjects2);
gdjs.copyArray(runtimeScene.getObjects("Mask"), gdjs.ComputerCode.GDMaskObjects2);
gdjs.copyArray(runtimeScene.getObjects("Notification"), gdjs.ComputerCode.GDNotificationObjects2);
{for(var i = 0, len = gdjs.ComputerCode.GDAction_9595btnObjects2.length ;i < len;++i) {
    gdjs.ComputerCode.GDAction_9595btnObjects2[i].getBehavior("Sticker").Unstick(null);
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDMaskObjects2.length ;i < len;++i) {
    gdjs.ComputerCode.GDMaskObjects2[i].getBehavior("Sticker").Unstick(null);
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDNotificationObjects2.length ;i < len;++i) {
    gdjs.ComputerCode.GDNotificationObjects2[i].getBehavior("Tween").addObjectPositionYTween2("", (( gdjs.ComputerCode.GDAction_9595btnObjects2.length === 0 ) ? 0 :gdjs.ComputerCode.GDAction_9595btnObjects2[0].getPointY("")) - 30, "easeInOutQuad", 0.5, false);
}
}

{ //Subevents
gdjs.ComputerCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Notification_down_btn"), gdjs.ComputerCode.GDNotification_9595down_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDNotification_95959595down_95959595btnObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ComputerCode.GDNotification_9595down_9595btnObjects1.length;i<l;++i) {
    if ( gdjs.ComputerCode.GDNotification_9595down_9595btnObjects1[i].getAngle() == 180 ) {
        isConditionTrue_0 = true;
        gdjs.ComputerCode.GDNotification_9595down_9595btnObjects1[k] = gdjs.ComputerCode.GDNotification_9595down_9595btnObjects1[i];
        ++k;
    }
}
gdjs.ComputerCode.GDNotification_9595down_9595btnObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ComputerCode.GDNotification_9595down_9595btnObjects1.length;i<l;++i) {
    if ( gdjs.ComputerCode.GDNotification_9595down_9595btnObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.ComputerCode.GDNotification_9595down_9595btnObjects1[k] = gdjs.ComputerCode.GDNotification_9595down_9595btnObjects1[i];
        ++k;
    }
}
gdjs.ComputerCode.GDNotification_9595down_9595btnObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9549796);
}
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Action_btn"), gdjs.ComputerCode.GDAction_9595btnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mask"), gdjs.ComputerCode.GDMaskObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification"), gdjs.ComputerCode.GDNotificationObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_text"), gdjs.ComputerCode.GDNotification_9595textObjects1);
{for(var i = 0, len = gdjs.ComputerCode.GDAction_9595btnObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDAction_9595btnObjects1[i].getBehavior("Sticker").Unstick(null);
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDMaskObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDMaskObjects1[i].getBehavior("Sticker").Unstick(null);
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDNotificationObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDNotificationObjects1[i].getBehavior("Tween").addObjectPositionYTween2("", 890 - (( gdjs.ComputerCode.GDNotification_9595textObjects1.length === 0 ) ? 0 :gdjs.ComputerCode.GDNotification_9595textObjects1[0].getHeight()) - 50 - (( gdjs.ComputerCode.GDAction_9595btnObjects1.length === 0 ) ? 0 :gdjs.ComputerCode.GDAction_9595btnObjects1[0].getHeight()) - 30, "easeInOutQuad", 0.5, false);
}
}

{ //Subevents
gdjs.ComputerCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDNotification_95959595close_95959595btnObjects1Objects = Hashtable.newFrom({"Notification_close_btn": gdjs.ComputerCode.GDNotification_9595close_9595btnObjects1});
gdjs.ComputerCode.asyncCallback9828612 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ComputerCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(7).setBoolean(true);
}
gdjs.ComputerCode.localVariables.length = 0;
}
gdjs.ComputerCode.idToCallbackMap.set(9828612, gdjs.ComputerCode.asyncCallback9828612);
gdjs.ComputerCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.ComputerCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.ComputerCode.asyncCallback9828612(runtimeScene, asyncObjectsList)), 9828612, asyncObjectsList);
}
}

}


};gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDHint_95959595btnObjects2Objects = Hashtable.newFrom({"Hint_btn": gdjs.ComputerCode.GDHint_9595btnObjects2});
gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDNotification_95959595close_95959595btnObjects2Objects = Hashtable.newFrom({"Notification_close_btn": gdjs.ComputerCode.GDNotification_9595close_9595btnObjects2});
gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDAction_95959595btnObjects2Objects = Hashtable.newFrom({"Action_btn": gdjs.ComputerCode.GDAction_9595btnObjects2});
gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDNotification_95959595down_95959595btnObjects2Objects = Hashtable.newFrom({"Notification_down_btn": gdjs.ComputerCode.GDNotification_9595down_9595btnObjects2});
gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDHint_95959595btnObjects2Objects = Hashtable.newFrom({"Hint_btn": gdjs.ComputerCode.GDHint_9595btnObjects2});
gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDNotification_95959595close_95959595btnObjects2Objects = Hashtable.newFrom({"Notification_close_btn": gdjs.ComputerCode.GDNotification_9595close_9595btnObjects2});
gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDAction_95959595btnObjects2Objects = Hashtable.newFrom({"Action_btn": gdjs.ComputerCode.GDAction_9595btnObjects2});
gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDNotification_95959595down_95959595btnObjects1Objects = Hashtable.newFrom({"Notification_down_btn": gdjs.ComputerCode.GDNotification_9595down_9595btnObjects1});
gdjs.ComputerCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Hint_btn"), gdjs.ComputerCode.GDHint_9595btnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDHint_95959595btnObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.ComputerCode.GDHint_9595btnObjects2 */
{for(var i = 0, len = gdjs.ComputerCode.GDHint_9595btnObjects2.length ;i < len;++i) {
    gdjs.ComputerCode.GDHint_9595btnObjects2[i].getBehavior("Animation").setAnimationName("d");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Notification_close_btn"), gdjs.ComputerCode.GDNotification_9595close_9595btnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDNotification_95959595close_95959595btnObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.ComputerCode.GDNotification_9595close_9595btnObjects2 */
{for(var i = 0, len = gdjs.ComputerCode.GDNotification_9595close_9595btnObjects2.length ;i < len;++i) {
    gdjs.ComputerCode.GDNotification_9595close_9595btnObjects2[i].getBehavior("Animation").setAnimationName("d");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Action_btn"), gdjs.ComputerCode.GDAction_9595btnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDAction_95959595btnObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.ComputerCode.GDAction_9595btnObjects2 */
{for(var i = 0, len = gdjs.ComputerCode.GDAction_9595btnObjects2.length ;i < len;++i) {
    gdjs.ComputerCode.GDAction_9595btnObjects2[i].getBehavior("Animation").setAnimationName("d");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Notification_down_btn"), gdjs.ComputerCode.GDNotification_9595down_9595btnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDNotification_95959595down_95959595btnObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.ComputerCode.GDNotification_9595down_9595btnObjects2 */
{for(var i = 0, len = gdjs.ComputerCode.GDNotification_9595down_9595btnObjects2.length ;i < len;++i) {
    gdjs.ComputerCode.GDNotification_9595down_9595btnObjects2[i].getBehavior("Animation").setAnimationName("d");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hint_btn"), gdjs.ComputerCode.GDHint_9595btnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDHint_95959595btnObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.ComputerCode.GDHint_9595btnObjects2 */
{for(var i = 0, len = gdjs.ComputerCode.GDHint_9595btnObjects2.length ;i < len;++i) {
    gdjs.ComputerCode.GDHint_9595btnObjects2[i].getBehavior("Animation").setAnimationName("h");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Notification_close_btn"), gdjs.ComputerCode.GDNotification_9595close_9595btnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDNotification_95959595close_95959595btnObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.ComputerCode.GDNotification_9595close_9595btnObjects2 */
{for(var i = 0, len = gdjs.ComputerCode.GDNotification_9595close_9595btnObjects2.length ;i < len;++i) {
    gdjs.ComputerCode.GDNotification_9595close_9595btnObjects2[i].getBehavior("Animation").setAnimationName("h");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Action_btn"), gdjs.ComputerCode.GDAction_9595btnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDAction_95959595btnObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.ComputerCode.GDAction_9595btnObjects2 */
{for(var i = 0, len = gdjs.ComputerCode.GDAction_9595btnObjects2.length ;i < len;++i) {
    gdjs.ComputerCode.GDAction_9595btnObjects2[i].getBehavior("Animation").setAnimationName("h");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Notification_down_btn"), gdjs.ComputerCode.GDNotification_9595down_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDNotification_95959595down_95959595btnObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.ComputerCode.GDNotification_9595down_9595btnObjects1 */
{for(var i = 0, len = gdjs.ComputerCode.GDNotification_9595down_9595btnObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDNotification_9595down_9595btnObjects1[i].getBehavior("Animation").setAnimationName("h");
}
}
}

}


};gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDNotificationObjects1Objects = Hashtable.newFrom({"Notification": gdjs.ComputerCode.GDNotificationObjects1});
gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDNotificationObjects1Objects = Hashtable.newFrom({"Notification": gdjs.ComputerCode.GDNotificationObjects1});
gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDNotificationObjects1Objects = Hashtable.newFrom({"Notification": gdjs.ComputerCode.GDNotificationObjects1});
gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDNotificationObjects1Objects = Hashtable.newFrom({"Notification": gdjs.ComputerCode.GDNotificationObjects1});
gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDNotificationObjects1Objects = Hashtable.newFrom({"Notification": gdjs.ComputerCode.GDNotificationObjects1});
gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDNotificationObjects1Objects = Hashtable.newFrom({"Notification": gdjs.ComputerCode.GDNotificationObjects1});
gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDNotification_95959595textObjects1Objects = Hashtable.newFrom({"Notification_text": gdjs.ComputerCode.GDNotification_9595textObjects1});
gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDMaskObjects1Objects = Hashtable.newFrom({"Mask": gdjs.ComputerCode.GDMaskObjects1});
gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDNotification_95959595HeadObjects1Objects = Hashtable.newFrom({"Notification_Head": gdjs.ComputerCode.GDNotification_9595HeadObjects1});
gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDMaskObjects1Objects = Hashtable.newFrom({"Mask": gdjs.ComputerCode.GDMaskObjects1});
gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDAction_95959595btnObjects1Objects = Hashtable.newFrom({"Action_btn": gdjs.ComputerCode.GDAction_9595btnObjects1});
gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDNotificationObjects1Objects = Hashtable.newFrom({"Notification": gdjs.ComputerCode.GDNotificationObjects1});
gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDNotificationObjects1Objects = Hashtable.newFrom({"Notification": gdjs.ComputerCode.GDNotificationObjects1});
gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDAction_95959595btnObjects1Objects = Hashtable.newFrom({"Action_btn": gdjs.ComputerCode.GDAction_9595btnObjects1});
gdjs.ComputerCode.asyncCallback10641036 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ComputerCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Notification_down_btn"), gdjs.ComputerCode.GDNotification_9595down_9595btnObjects2);
{for(var i = 0, len = gdjs.ComputerCode.GDNotification_9595down_9595btnObjects2.length ;i < len;++i) {
    gdjs.ComputerCode.GDNotification_9595down_9595btnObjects2[i].getBehavior("Tween").addObjectAngleTween2("", 180, "linear", 0.2, false);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(true);
}
gdjs.ComputerCode.localVariables.length = 0;
}
gdjs.ComputerCode.idToCallbackMap.set(10641036, gdjs.ComputerCode.asyncCallback10641036);
gdjs.ComputerCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.ComputerCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.8), (runtimeScene) => (gdjs.ComputerCode.asyncCallback10641036(runtimeScene, asyncObjectsList)), 10641036, asyncObjectsList);
}
}

}


};gdjs.ComputerCode.asyncCallback10644788 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ComputerCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Notification_down_btn"), gdjs.ComputerCode.GDNotification_9595down_9595btnObjects3);
{for(var i = 0, len = gdjs.ComputerCode.GDNotification_9595down_9595btnObjects3.length ;i < len;++i) {
    gdjs.ComputerCode.GDNotification_9595down_9595btnObjects3[i].getBehavior("Tween").addObjectAngleTween2("", 0, "linear", 0.2, false);
}
}
gdjs.ComputerCode.localVariables.length = 0;
}
gdjs.ComputerCode.idToCallbackMap.set(10644788, gdjs.ComputerCode.asyncCallback10644788);
gdjs.ComputerCode.eventsList9 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.ComputerCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.8), (runtimeScene) => (gdjs.ComputerCode.asyncCallback10644788(runtimeScene, asyncObjectsList)), 10644788, asyncObjectsList);
}
}

}


};gdjs.ComputerCode.asyncCallback10644716 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ComputerCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Action_btn"), gdjs.ComputerCode.GDAction_9595btnObjects2);
gdjs.copyArray(runtimeScene.getObjects("Notification"), gdjs.ComputerCode.GDNotificationObjects2);
gdjs.copyArray(runtimeScene.getObjects("Notification_text"), gdjs.ComputerCode.GDNotification_9595textObjects2);
{for(var i = 0, len = gdjs.ComputerCode.GDNotificationObjects2.length ;i < len;++i) {
    gdjs.ComputerCode.GDNotificationObjects2[i].getBehavior("Tween").addObjectPositionYTween2("", 890 - (( gdjs.ComputerCode.GDNotification_9595textObjects2.length === 0 ) ? 0 :gdjs.ComputerCode.GDNotification_9595textObjects2[0].getHeight()) - 50 - (( gdjs.ComputerCode.GDAction_9595btnObjects2.length === 0 ) ? 0 :gdjs.ComputerCode.GDAction_9595btnObjects2[0].getHeight()) - 30, "easeInOutQuad", 1, false);
}
}

{ //Subevents
gdjs.ComputerCode.eventsList9(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.ComputerCode.localVariables.length = 0;
}
gdjs.ComputerCode.idToCallbackMap.set(10644716, gdjs.ComputerCode.asyncCallback10644716);
gdjs.ComputerCode.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.ComputerCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.8), (runtimeScene) => (gdjs.ComputerCode.asyncCallback10644716(runtimeScene, asyncObjectsList)), 10644716, asyncObjectsList);
}
}

}


};gdjs.ComputerCode.asyncCallback10646532 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ComputerCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Apartment_2", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(false);
}
gdjs.ComputerCode.localVariables.length = 0;
}
gdjs.ComputerCode.idToCallbackMap.set(10646532, gdjs.ComputerCode.asyncCallback10646532);
gdjs.ComputerCode.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.ComputerCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.ComputerCode.asyncCallback10646532(runtimeScene, asyncObjectsList)), 10646532, asyncObjectsList);
}
}

}


};gdjs.ComputerCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8114628);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mask"), gdjs.ComputerCode.GDMaskObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification"), gdjs.ComputerCode.GDNotificationObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_Head"), gdjs.ComputerCode.GDNotification_9595HeadObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_close_btn"), gdjs.ComputerCode.GDNotification_9595close_9595btnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_down_btn"), gdjs.ComputerCode.GDNotification_9595down_9595btnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_text"), gdjs.ComputerCode.GDNotification_9595textObjects1);
{for(var i = 0, len = gdjs.ComputerCode.GDNotificationObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDNotificationObjects1[i].getBehavior("Resizable").setWidth(1980);
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDNotificationObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDNotificationObjects1[i].setY(1100);
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDNotificationObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDNotificationObjects1[i].setX((1920 - (gdjs.ComputerCode.GDNotificationObjects1[i].getWidth())) / 2);
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDNotification_9595HeadObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDNotification_9595HeadObjects1[i].setY(1130);
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDNotification_9595HeadObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDNotification_9595HeadObjects1[i].setX((1920 - (gdjs.ComputerCode.GDNotification_9595HeadObjects1[i].getWidth())) / 2);
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDNotification_9595textObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDNotification_9595textObjects1[i].setY(1180);
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDNotification_9595textObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDNotification_9595textObjects1[i].setX((1920 - (gdjs.ComputerCode.GDNotification_9595textObjects1[i].getWidth())) / 2);
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDNotification_9595down_9595btnObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDNotification_9595down_9595btnObjects1[i].setY(1130);
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDNotification_9595down_9595btnObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDNotification_9595down_9595btnObjects1[i].setX(1620);
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDNotification_9595close_9595btnObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDNotification_9595close_9595btnObjects1[i].setY(1130);
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDNotification_9595close_9595btnObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDNotification_9595close_9595btnObjects1[i].setX(1620);
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDMaskObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDMaskObjects1[i].setY(1135);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.ComputerCode.mapOfEmptyGDAction_9595btnObjects));
}

{ //Subevents
gdjs.ComputerCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.ComputerCode.eventsList5(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Notification_close_btn"), gdjs.ComputerCode.GDNotification_9595close_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDNotification_95959595close_95959595btnObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ComputerCode.GDNotification_9595close_9595btnObjects1.length;i<l;++i) {
    if ( gdjs.ComputerCode.GDNotification_9595close_9595btnObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.ComputerCode.GDNotification_9595close_9595btnObjects1[k] = gdjs.ComputerCode.GDNotification_9595close_9595btnObjects1[i];
        ++k;
    }
}
gdjs.ComputerCode.GDNotification_9595close_9595btnObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(7).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9865420);
}
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Notification"), gdjs.ComputerCode.GDNotificationObjects1);
{for(var i = 0, len = gdjs.ComputerCode.GDNotificationObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDNotificationObjects1[i].getBehavior("Tween").addObjectPositionYTween2("", 1092, "easeInOutQuad", 1, false);
}
}

{ //Subevents
gdjs.ComputerCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


gdjs.ComputerCode.eventsList7(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Action_btn"), gdjs.ComputerCode.GDAction_9595btnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Darken"), gdjs.ComputerCode.GDDarkenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mask"), gdjs.ComputerCode.GDMaskObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification"), gdjs.ComputerCode.GDNotificationObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_Head"), gdjs.ComputerCode.GDNotification_9595HeadObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_close_btn"), gdjs.ComputerCode.GDNotification_9595close_9595btnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_down_btn"), gdjs.ComputerCode.GDNotification_9595down_9595btnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_text"), gdjs.ComputerCode.GDNotification_9595textObjects1);
{for(var i = 0, len = gdjs.ComputerCode.GDDarkenObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDDarkenObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDDarkenObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDDarkenObjects1[i].getBehavior("Tween").addObjectOpacityTween2("", 0, "linear", 0.2, false);
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDNotification_9595HeadObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDNotification_9595HeadObjects1[i].getBehavior("Sticker").Stick(gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDNotificationObjects1Objects, null);
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDNotification_9595textObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDNotification_9595textObjects1[i].getBehavior("Sticker").Stick(gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDNotificationObjects1Objects, null);
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDNotification_9595close_9595btnObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDNotification_9595close_9595btnObjects1[i].getBehavior("Sticker").Stick(gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDNotificationObjects1Objects, null);
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDNotification_9595down_9595btnObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDNotification_9595down_9595btnObjects1[i].getBehavior("Sticker").Stick(gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDNotificationObjects1Objects, null);
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDAction_9595btnObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDAction_9595btnObjects1[i].getBehavior("Sticker").Stick(gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDNotificationObjects1Objects, null);
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDMaskObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDMaskObjects1[i].getBehavior("Sticker").Stick(gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDNotificationObjects1Objects, null);
}
}
{gdjs.evtsExt__SpriteMasking__Mask.func(runtimeScene, gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDNotification_95959595textObjects1Objects, gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDMaskObjects1Objects, null);
}
{gdjs.evtsExt__SpriteMasking__Mask.func(runtimeScene, gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDNotification_95959595HeadObjects1Objects, gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDMaskObjects1Objects, null);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Action_btn"), gdjs.ComputerCode.GDAction_9595btnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Button_text"), gdjs.ComputerCode.GDButton_9595textObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mask"), gdjs.ComputerCode.GDMaskObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_Head"), gdjs.ComputerCode.GDNotification_9595HeadObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_text"), gdjs.ComputerCode.GDNotification_9595textObjects1);
{for(var i = 0, len = gdjs.ComputerCode.GDButton_9595textObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDButton_9595textObjects1[i].getBehavior("Text").setText("Go Back");
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDNotification_9595HeadObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDNotification_9595HeadObjects1[i].getBehavior("Text").setText("Notification:");
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDNotification_9595textObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDNotification_9595textObjects1[i].getBehavior("Text").setText("Czechia is such a beautiful country with such a rich history. \n I can learn everything I need to know to plan the perfect trip \n at VisitCzechia.com.");
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDAction_9595btnObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDAction_9595btnObjects1[i].setY((( gdjs.ComputerCode.GDNotification_9595textObjects1.length === 0 ) ? 0 :gdjs.ComputerCode.GDNotification_9595textObjects1[0].getY()) + (( gdjs.ComputerCode.GDNotification_9595textObjects1.length === 0 ) ? 0 :gdjs.ComputerCode.GDNotification_9595textObjects1[0].getHeight()) + 50);
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDMaskObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDMaskObjects1[i].getBehavior("Resizable").setHeight((( gdjs.ComputerCode.GDNotification_9595HeadObjects1.length === 0 ) ? 0 :gdjs.ComputerCode.GDNotification_9595HeadObjects1[0].getHeight()) + 50 + (( gdjs.ComputerCode.GDNotification_9595textObjects1.length === 0 ) ? 0 :gdjs.ComputerCode.GDNotification_9595textObjects1[0].getHeight()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Action_btn"), gdjs.ComputerCode.GDAction_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDAction_95959595btnObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10641324);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ComputerCode.GDAction_9595btnObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Button_text"), gdjs.ComputerCode.GDButton_9595textObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mask"), gdjs.ComputerCode.GDMaskObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification"), gdjs.ComputerCode.GDNotificationObjects1);
{for(var i = 0, len = gdjs.ComputerCode.GDAction_9595btnObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDAction_9595btnObjects1[i].getBehavior("Sticker").Stick(gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDNotificationObjects1Objects, null);
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDMaskObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDMaskObjects1[i].getBehavior("Sticker").Stick(gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDNotificationObjects1Objects, null);
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDButton_9595textObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDButton_9595textObjects1[i].getBehavior("Sticker").Stick(gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDAction_95959595btnObjects1Objects, null);
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDNotificationObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDNotificationObjects1[i].getBehavior("Tween").addObjectPositionYTween2("", 1092, "easeInOutQuad", 1, false);
}
}

{ //Subevents
gdjs.ComputerCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10644644);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.ComputerCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10646276);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Darken"), gdjs.ComputerCode.GDDarkenObjects1);
{for(var i = 0, len = gdjs.ComputerCode.GDDarkenObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDDarkenObjects1[i].getBehavior("Tween").addObjectOpacityTween2("", 255, "linear", 0.2, false);
}
}

{ //Subevents
gdjs.ComputerCode.eventsList11(runtimeScene);} //End of subevents
}

}


};

gdjs.ComputerCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ComputerCode.GDBackgroundObjects1.length = 0;
gdjs.ComputerCode.GDBackgroundObjects2.length = 0;
gdjs.ComputerCode.GDBackgroundObjects3.length = 0;
gdjs.ComputerCode.GDAction_9595btnObjects1.length = 0;
gdjs.ComputerCode.GDAction_9595btnObjects2.length = 0;
gdjs.ComputerCode.GDAction_9595btnObjects3.length = 0;
gdjs.ComputerCode.GDButton_9595textObjects1.length = 0;
gdjs.ComputerCode.GDButton_9595textObjects2.length = 0;
gdjs.ComputerCode.GDButton_9595textObjects3.length = 0;
gdjs.ComputerCode.GDNotificationObjects1.length = 0;
gdjs.ComputerCode.GDNotificationObjects2.length = 0;
gdjs.ComputerCode.GDNotificationObjects3.length = 0;
gdjs.ComputerCode.GDClose_9595btnObjects1.length = 0;
gdjs.ComputerCode.GDClose_9595btnObjects2.length = 0;
gdjs.ComputerCode.GDClose_9595btnObjects3.length = 0;
gdjs.ComputerCode.GDHint_9595btnObjects1.length = 0;
gdjs.ComputerCode.GDHint_9595btnObjects2.length = 0;
gdjs.ComputerCode.GDHint_9595btnObjects3.length = 0;
gdjs.ComputerCode.GDNotification_9595HeadObjects1.length = 0;
gdjs.ComputerCode.GDNotification_9595HeadObjects2.length = 0;
gdjs.ComputerCode.GDNotification_9595HeadObjects3.length = 0;
gdjs.ComputerCode.GDNotification_9595textObjects1.length = 0;
gdjs.ComputerCode.GDNotification_9595textObjects2.length = 0;
gdjs.ComputerCode.GDNotification_9595textObjects3.length = 0;
gdjs.ComputerCode.GDNotification_9595down_9595btnObjects1.length = 0;
gdjs.ComputerCode.GDNotification_9595down_9595btnObjects2.length = 0;
gdjs.ComputerCode.GDNotification_9595down_9595btnObjects3.length = 0;
gdjs.ComputerCode.GDBottomfadeObjects1.length = 0;
gdjs.ComputerCode.GDBottomfadeObjects2.length = 0;
gdjs.ComputerCode.GDBottomfadeObjects3.length = 0;
gdjs.ComputerCode.GDSafeareaObjects1.length = 0;
gdjs.ComputerCode.GDSafeareaObjects2.length = 0;
gdjs.ComputerCode.GDSafeareaObjects3.length = 0;
gdjs.ComputerCode.GDDarkenObjects1.length = 0;
gdjs.ComputerCode.GDDarkenObjects2.length = 0;
gdjs.ComputerCode.GDDarkenObjects3.length = 0;
gdjs.ComputerCode.GDMaskObjects1.length = 0;
gdjs.ComputerCode.GDMaskObjects2.length = 0;
gdjs.ComputerCode.GDMaskObjects3.length = 0;
gdjs.ComputerCode.GDNotification_9595close_9595btnObjects1.length = 0;
gdjs.ComputerCode.GDNotification_9595close_9595btnObjects2.length = 0;
gdjs.ComputerCode.GDNotification_9595close_9595btnObjects3.length = 0;

gdjs.ComputerCode.eventsList12(runtimeScene);
gdjs.ComputerCode.GDBackgroundObjects1.length = 0;
gdjs.ComputerCode.GDBackgroundObjects2.length = 0;
gdjs.ComputerCode.GDBackgroundObjects3.length = 0;
gdjs.ComputerCode.GDAction_9595btnObjects1.length = 0;
gdjs.ComputerCode.GDAction_9595btnObjects2.length = 0;
gdjs.ComputerCode.GDAction_9595btnObjects3.length = 0;
gdjs.ComputerCode.GDButton_9595textObjects1.length = 0;
gdjs.ComputerCode.GDButton_9595textObjects2.length = 0;
gdjs.ComputerCode.GDButton_9595textObjects3.length = 0;
gdjs.ComputerCode.GDNotificationObjects1.length = 0;
gdjs.ComputerCode.GDNotificationObjects2.length = 0;
gdjs.ComputerCode.GDNotificationObjects3.length = 0;
gdjs.ComputerCode.GDClose_9595btnObjects1.length = 0;
gdjs.ComputerCode.GDClose_9595btnObjects2.length = 0;
gdjs.ComputerCode.GDClose_9595btnObjects3.length = 0;
gdjs.ComputerCode.GDHint_9595btnObjects1.length = 0;
gdjs.ComputerCode.GDHint_9595btnObjects2.length = 0;
gdjs.ComputerCode.GDHint_9595btnObjects3.length = 0;
gdjs.ComputerCode.GDNotification_9595HeadObjects1.length = 0;
gdjs.ComputerCode.GDNotification_9595HeadObjects2.length = 0;
gdjs.ComputerCode.GDNotification_9595HeadObjects3.length = 0;
gdjs.ComputerCode.GDNotification_9595textObjects1.length = 0;
gdjs.ComputerCode.GDNotification_9595textObjects2.length = 0;
gdjs.ComputerCode.GDNotification_9595textObjects3.length = 0;
gdjs.ComputerCode.GDNotification_9595down_9595btnObjects1.length = 0;
gdjs.ComputerCode.GDNotification_9595down_9595btnObjects2.length = 0;
gdjs.ComputerCode.GDNotification_9595down_9595btnObjects3.length = 0;
gdjs.ComputerCode.GDBottomfadeObjects1.length = 0;
gdjs.ComputerCode.GDBottomfadeObjects2.length = 0;
gdjs.ComputerCode.GDBottomfadeObjects3.length = 0;
gdjs.ComputerCode.GDSafeareaObjects1.length = 0;
gdjs.ComputerCode.GDSafeareaObjects2.length = 0;
gdjs.ComputerCode.GDSafeareaObjects3.length = 0;
gdjs.ComputerCode.GDDarkenObjects1.length = 0;
gdjs.ComputerCode.GDDarkenObjects2.length = 0;
gdjs.ComputerCode.GDDarkenObjects3.length = 0;
gdjs.ComputerCode.GDMaskObjects1.length = 0;
gdjs.ComputerCode.GDMaskObjects2.length = 0;
gdjs.ComputerCode.GDMaskObjects3.length = 0;
gdjs.ComputerCode.GDNotification_9595close_9595btnObjects1.length = 0;
gdjs.ComputerCode.GDNotification_9595close_9595btnObjects2.length = 0;
gdjs.ComputerCode.GDNotification_9595close_9595btnObjects3.length = 0;


return;

}

gdjs['ComputerCode'] = gdjs.ComputerCode;
