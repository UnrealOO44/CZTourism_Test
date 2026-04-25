gdjs.ApartmentCode = {};
gdjs.ApartmentCode.localVariables = [];
gdjs.ApartmentCode.idToCallbackMap = new Map();
gdjs.ApartmentCode.forEachIndex2 = 0;

gdjs.ApartmentCode.forEachObjects2 = [];

gdjs.ApartmentCode.forEachTemporary2 = null;

gdjs.ApartmentCode.forEachTotalCount2 = 0;

gdjs.ApartmentCode.GDBackgroundObjects1= [];
gdjs.ApartmentCode.GDBackgroundObjects2= [];
gdjs.ApartmentCode.GDBackgroundObjects3= [];
gdjs.ApartmentCode.GDHelpObjects1= [];
gdjs.ApartmentCode.GDHelpObjects2= [];
gdjs.ApartmentCode.GDHelpObjects3= [];
gdjs.ApartmentCode.GDhelp_9595Close_9595btnObjects1= [];
gdjs.ApartmentCode.GDhelp_9595Close_9595btnObjects2= [];
gdjs.ApartmentCode.GDhelp_9595Close_9595btnObjects3= [];
gdjs.ApartmentCode.GDClick_9595computerObjects1= [];
gdjs.ApartmentCode.GDClick_9595computerObjects2= [];
gdjs.ApartmentCode.GDClick_9595computerObjects3= [];
gdjs.ApartmentCode.GDAction_9595btnObjects1= [];
gdjs.ApartmentCode.GDAction_9595btnObjects2= [];
gdjs.ApartmentCode.GDAction_9595btnObjects3= [];
gdjs.ApartmentCode.GDButton_9595textObjects1= [];
gdjs.ApartmentCode.GDButton_9595textObjects2= [];
gdjs.ApartmentCode.GDButton_9595textObjects3= [];
gdjs.ApartmentCode.GDNotificationObjects1= [];
gdjs.ApartmentCode.GDNotificationObjects2= [];
gdjs.ApartmentCode.GDNotificationObjects3= [];
gdjs.ApartmentCode.GDClose_9595btnObjects1= [];
gdjs.ApartmentCode.GDClose_9595btnObjects2= [];
gdjs.ApartmentCode.GDClose_9595btnObjects3= [];
gdjs.ApartmentCode.GDHint_9595btnObjects1= [];
gdjs.ApartmentCode.GDHint_9595btnObjects2= [];
gdjs.ApartmentCode.GDHint_9595btnObjects3= [];
gdjs.ApartmentCode.GDNotification_9595HeadObjects1= [];
gdjs.ApartmentCode.GDNotification_9595HeadObjects2= [];
gdjs.ApartmentCode.GDNotification_9595HeadObjects3= [];
gdjs.ApartmentCode.GDNotification_9595textObjects1= [];
gdjs.ApartmentCode.GDNotification_9595textObjects2= [];
gdjs.ApartmentCode.GDNotification_9595textObjects3= [];
gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects1= [];
gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects2= [];
gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects3= [];
gdjs.ApartmentCode.GDBottomfadeObjects1= [];
gdjs.ApartmentCode.GDBottomfadeObjects2= [];
gdjs.ApartmentCode.GDBottomfadeObjects3= [];
gdjs.ApartmentCode.GDSafeareaObjects1= [];
gdjs.ApartmentCode.GDSafeareaObjects2= [];
gdjs.ApartmentCode.GDSafeareaObjects3= [];
gdjs.ApartmentCode.GDDarkenObjects1= [];
gdjs.ApartmentCode.GDDarkenObjects2= [];
gdjs.ApartmentCode.GDDarkenObjects3= [];
gdjs.ApartmentCode.GDMaskObjects1= [];
gdjs.ApartmentCode.GDMaskObjects2= [];
gdjs.ApartmentCode.GDMaskObjects3= [];
gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects1= [];
gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects2= [];
gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects3= [];


gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDHint_95959595btnObjects2Objects = Hashtable.newFrom({"Hint_btn": gdjs.ApartmentCode.GDHint_9595btnObjects2});
gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDNotification_95959595close_95959595btnObjects2Objects = Hashtable.newFrom({"Notification_close_btn": gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects2});
gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDAction_95959595btnObjects2Objects = Hashtable.newFrom({"Action_btn": gdjs.ApartmentCode.GDAction_9595btnObjects2});
gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDNotification_95959595down_95959595btnObjects2Objects = Hashtable.newFrom({"Notification_down_btn": gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects2});
gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDHint_95959595btnObjects2Objects = Hashtable.newFrom({"Hint_btn": gdjs.ApartmentCode.GDHint_9595btnObjects2});
gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDNotification_95959595close_95959595btnObjects2Objects = Hashtable.newFrom({"Notification_close_btn": gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects2});
gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDAction_95959595btnObjects2Objects = Hashtable.newFrom({"Action_btn": gdjs.ApartmentCode.GDAction_9595btnObjects2});
gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDNotification_95959595down_95959595btnObjects1Objects = Hashtable.newFrom({"Notification_down_btn": gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects1});
gdjs.ApartmentCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Hint_btn"), gdjs.ApartmentCode.GDHint_9595btnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDHint_95959595btnObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.ApartmentCode.GDHint_9595btnObjects2 */
{for(var i = 0, len = gdjs.ApartmentCode.GDHint_9595btnObjects2.length ;i < len;++i) {
    gdjs.ApartmentCode.GDHint_9595btnObjects2[i].getBehavior("Animation").setAnimationName("d");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Notification_close_btn"), gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDNotification_95959595close_95959595btnObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects2 */
{for(var i = 0, len = gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects2.length ;i < len;++i) {
    gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects2[i].getBehavior("Animation").setAnimationName("d");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Action_btn"), gdjs.ApartmentCode.GDAction_9595btnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDAction_95959595btnObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.ApartmentCode.GDAction_9595btnObjects2 */
{for(var i = 0, len = gdjs.ApartmentCode.GDAction_9595btnObjects2.length ;i < len;++i) {
    gdjs.ApartmentCode.GDAction_9595btnObjects2[i].getBehavior("Animation").setAnimationName("d");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Notification_down_btn"), gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDNotification_95959595down_95959595btnObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects2 */
{for(var i = 0, len = gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects2.length ;i < len;++i) {
    gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects2[i].getBehavior("Animation").setAnimationName("d");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hint_btn"), gdjs.ApartmentCode.GDHint_9595btnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDHint_95959595btnObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.ApartmentCode.GDHint_9595btnObjects2 */
{for(var i = 0, len = gdjs.ApartmentCode.GDHint_9595btnObjects2.length ;i < len;++i) {
    gdjs.ApartmentCode.GDHint_9595btnObjects2[i].getBehavior("Animation").setAnimationName("h");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Notification_close_btn"), gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDNotification_95959595close_95959595btnObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects2 */
{for(var i = 0, len = gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects2.length ;i < len;++i) {
    gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects2[i].getBehavior("Animation").setAnimationName("h");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Action_btn"), gdjs.ApartmentCode.GDAction_9595btnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDAction_95959595btnObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.ApartmentCode.GDAction_9595btnObjects2 */
{for(var i = 0, len = gdjs.ApartmentCode.GDAction_9595btnObjects2.length ;i < len;++i) {
    gdjs.ApartmentCode.GDAction_9595btnObjects2[i].getBehavior("Animation").setAnimationName("h");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Notification_down_btn"), gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDNotification_95959595down_95959595btnObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects1 */
{for(var i = 0, len = gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects1.length ;i < len;++i) {
    gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects1[i].getBehavior("Animation").setAnimationName("h");
}
}
}

}


};gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDNotificationObjects1Objects = Hashtable.newFrom({"Notification": gdjs.ApartmentCode.GDNotificationObjects1});
gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDNotificationObjects1Objects = Hashtable.newFrom({"Notification": gdjs.ApartmentCode.GDNotificationObjects1});
gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDNotificationObjects1Objects = Hashtable.newFrom({"Notification": gdjs.ApartmentCode.GDNotificationObjects1});
gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDNotificationObjects1Objects = Hashtable.newFrom({"Notification": gdjs.ApartmentCode.GDNotificationObjects1});
gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDNotificationObjects1Objects = Hashtable.newFrom({"Notification": gdjs.ApartmentCode.GDNotificationObjects1});
gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDNotificationObjects1Objects = Hashtable.newFrom({"Notification": gdjs.ApartmentCode.GDNotificationObjects1});
gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDNotification_95959595textObjects1Objects = Hashtable.newFrom({"Notification_text": gdjs.ApartmentCode.GDNotification_9595textObjects1});
gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDMaskObjects1Objects = Hashtable.newFrom({"Mask": gdjs.ApartmentCode.GDMaskObjects1});
gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDNotification_95959595HeadObjects1Objects = Hashtable.newFrom({"Notification_Head": gdjs.ApartmentCode.GDNotification_9595HeadObjects1});
gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDMaskObjects1Objects = Hashtable.newFrom({"Mask": gdjs.ApartmentCode.GDMaskObjects1});
gdjs.ApartmentCode.mapOfEmptyGDAction_9595btnObjects = Hashtable.newFrom({"Action_btn": []});
gdjs.ApartmentCode.mapOfEmptyGDAction_9595btnObjects = Hashtable.newFrom({"Action_btn": []});
gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDAction_95959595btnObjects2Objects = Hashtable.newFrom({"Action_btn": gdjs.ApartmentCode.GDAction_9595btnObjects2});
gdjs.ApartmentCode.mapOfEmptyGDAction_9595btnObjects = Hashtable.newFrom({"Action_btn": []});
gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDAction_95959595btnObjects2Objects = Hashtable.newFrom({"Action_btn": gdjs.ApartmentCode.GDAction_9595btnObjects2});
gdjs.ApartmentCode.eventsList1 = function(runtimeScene) {

};gdjs.ApartmentCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Action_btn"), gdjs.ApartmentCode.GDAction_9595btnObjects1);

for (gdjs.ApartmentCode.forEachIndex2 = 0;gdjs.ApartmentCode.forEachIndex2 < gdjs.ApartmentCode.GDAction_9595btnObjects1.length;++gdjs.ApartmentCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Button_text"), gdjs.ApartmentCode.GDButton_9595textObjects2);
gdjs.ApartmentCode.GDAction_9595btnObjects2.length = 0;


gdjs.ApartmentCode.forEachTemporary2 = gdjs.ApartmentCode.GDAction_9595btnObjects1[gdjs.ApartmentCode.forEachIndex2];
gdjs.ApartmentCode.GDAction_9595btnObjects2.push(gdjs.ApartmentCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ApartmentCode.GDButton_9595textObjects2.length;i<l;++i) {
    if ( gdjs.ApartmentCode.GDButton_9595textObjects2[i].getVariableNumber(gdjs.ApartmentCode.GDButton_9595textObjects2[i].getVariables().getFromIndex(0)) == ((gdjs.ApartmentCode.GDAction_9595btnObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.ApartmentCode.GDAction_9595btnObjects2[0].getVariables()).getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.ApartmentCode.GDButton_9595textObjects2[k] = gdjs.ApartmentCode.GDButton_9595textObjects2[i];
        ++k;
    }
}
gdjs.ApartmentCode.GDButton_9595textObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9876196);
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.ApartmentCode.GDButton_9595textObjects2.length ;i < len;++i) {
    gdjs.ApartmentCode.GDButton_9595textObjects2[i].getBehavior("Sticker").Stick(gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDAction_95959595btnObjects2Objects, null);
}
}
{for(var i = 0, len = gdjs.ApartmentCode.GDAction_9595btnObjects2.length ;i < len;++i) {
    gdjs.ApartmentCode.GDAction_9595btnObjects2[i].setX(((gdjs.evtTools.window.getWindowInnerWidth() - (((gdjs.ApartmentCode.GDAction_9595btnObjects2[i].getWidth()) * runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber()) + 50)) / 2) + (((gdjs.ApartmentCode.GDAction_9595btnObjects2[i].getWidth()) + 50) * gdjs.ApartmentCode.GDAction_9595btnObjects2[i].getVariables().getFromIndex(0).getAsNumber()));
}
}
}
}

}


};gdjs.ApartmentCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.ApartmentCode.mapOfEmptyGDAction_9595btnObjects) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Action_btn"), gdjs.ApartmentCode.GDAction_9595btnObjects2);
gdjs.copyArray(runtimeScene.getObjects("Button_text"), gdjs.ApartmentCode.GDButton_9595textObjects2);
{for(var i = 0, len = gdjs.ApartmentCode.GDAction_9595btnObjects2.length ;i < len;++i) {
    gdjs.ApartmentCode.GDAction_9595btnObjects2[i].setX((gdjs.evtTools.window.getWindowInnerWidth() - (gdjs.ApartmentCode.GDAction_9595btnObjects2[i].getWidth())) / 2);
}
}
{for(var i = 0, len = gdjs.ApartmentCode.GDButton_9595textObjects2.length ;i < len;++i) {
    gdjs.ApartmentCode.GDButton_9595textObjects2[i].setX((gdjs.evtTools.window.getWindowInnerWidth() - (gdjs.ApartmentCode.GDButton_9595textObjects2[i].getWidth())) / 2);
}
}
{for(var i = 0, len = gdjs.ApartmentCode.GDButton_9595textObjects2.length ;i < len;++i) {
    gdjs.ApartmentCode.GDButton_9595textObjects2[i].setY((( gdjs.ApartmentCode.GDAction_9595btnObjects2.length === 0 ) ? 0 :gdjs.ApartmentCode.GDAction_9595btnObjects2[0].getPointY("")) + ((( gdjs.ApartmentCode.GDAction_9595btnObjects2.length === 0 ) ? 0 :gdjs.ApartmentCode.GDAction_9595btnObjects2[0].getHeight()) - (gdjs.ApartmentCode.GDButton_9595textObjects2[i].getHeight())));
}
}
{for(var i = 0, len = gdjs.ApartmentCode.GDButton_9595textObjects2.length ;i < len;++i) {
    gdjs.ApartmentCode.GDButton_9595textObjects2[i].getBehavior("Sticker").Stick(gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDAction_95959595btnObjects2Objects, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.ApartmentCode.mapOfEmptyGDAction_9595btnObjects) > 1;
if (isConditionTrue_0) {

{ //Subevents
gdjs.ApartmentCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDNotification_95959595down_95959595btnObjects2Objects = Hashtable.newFrom({"Notification_down_btn": gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects2});
gdjs.ApartmentCode.asyncCallback10358140 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ApartmentCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Notification_down_btn"), gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects3);

{for(var i = 0, len = gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects3.length ;i < len;++i) {
    gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects3[i].getBehavior("Tween").addObjectAngleTween2("", 180, "linear", 0.2, false);
}
}
gdjs.ApartmentCode.localVariables.length = 0;
}
gdjs.ApartmentCode.idToCallbackMap.set(10358140, gdjs.ApartmentCode.asyncCallback10358140);
gdjs.ApartmentCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.ApartmentCode.localVariables);
for (const obj of gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects2) asyncObjectsList.addObject("Notification_down_btn", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.ApartmentCode.asyncCallback10358140(runtimeScene, asyncObjectsList)), 10358140, asyncObjectsList);
}
}

}


};gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDNotification_95959595down_95959595btnObjects1Objects = Hashtable.newFrom({"Notification_down_btn": gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects1});
gdjs.ApartmentCode.asyncCallback9389916 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ApartmentCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Notification_down_btn"), gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects2);

{for(var i = 0, len = gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects2.length ;i < len;++i) {
    gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects2[i].getBehavior("Tween").addObjectAngleTween2("", 0, "linear", 0.2, false);
}
}
gdjs.ApartmentCode.localVariables.length = 0;
}
gdjs.ApartmentCode.idToCallbackMap.set(9389916, gdjs.ApartmentCode.asyncCallback9389916);
gdjs.ApartmentCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.ApartmentCode.localVariables);
for (const obj of gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects1) asyncObjectsList.addObject("Notification_down_btn", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.ApartmentCode.asyncCallback9389916(runtimeScene, asyncObjectsList)), 9389916, asyncObjectsList);
}
}

}


};gdjs.ApartmentCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Notification_down_btn"), gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDNotification_95959595down_95959595btnObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects2.length;i<l;++i) {
    if ( gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects2[i].getAngle() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects2[k] = gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects2[i];
        ++k;
    }
}
gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects2.length;i<l;++i) {
    if ( gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects2[k] = gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects2[i];
        ++k;
    }
}
gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10113844);
}
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Action_btn"), gdjs.ApartmentCode.GDAction_9595btnObjects2);
gdjs.copyArray(runtimeScene.getObjects("Mask"), gdjs.ApartmentCode.GDMaskObjects2);
gdjs.copyArray(runtimeScene.getObjects("Notification"), gdjs.ApartmentCode.GDNotificationObjects2);
{for(var i = 0, len = gdjs.ApartmentCode.GDAction_9595btnObjects2.length ;i < len;++i) {
    gdjs.ApartmentCode.GDAction_9595btnObjects2[i].getBehavior("Sticker").Unstick(null);
}
}
{for(var i = 0, len = gdjs.ApartmentCode.GDMaskObjects2.length ;i < len;++i) {
    gdjs.ApartmentCode.GDMaskObjects2[i].getBehavior("Sticker").Unstick(null);
}
}
{for(var i = 0, len = gdjs.ApartmentCode.GDNotificationObjects2.length ;i < len;++i) {
    gdjs.ApartmentCode.GDNotificationObjects2[i].getBehavior("Tween").addObjectPositionYTween2("", (( gdjs.ApartmentCode.GDAction_9595btnObjects2.length === 0 ) ? 0 :gdjs.ApartmentCode.GDAction_9595btnObjects2[0].getPointY("")) - 30, "easeInOutQuad", 0.5, false);
}
}

{ //Subevents
gdjs.ApartmentCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Notification_down_btn"), gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDNotification_95959595down_95959595btnObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects1.length;i<l;++i) {
    if ( gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects1[i].getAngle() == 180 ) {
        isConditionTrue_0 = true;
        gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects1[k] = gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects1[i];
        ++k;
    }
}
gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects1.length;i<l;++i) {
    if ( gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects1[k] = gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects1[i];
        ++k;
    }
}
gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9549796);
}
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Action_btn"), gdjs.ApartmentCode.GDAction_9595btnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mask"), gdjs.ApartmentCode.GDMaskObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification"), gdjs.ApartmentCode.GDNotificationObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_text"), gdjs.ApartmentCode.GDNotification_9595textObjects1);
{for(var i = 0, len = gdjs.ApartmentCode.GDAction_9595btnObjects1.length ;i < len;++i) {
    gdjs.ApartmentCode.GDAction_9595btnObjects1[i].getBehavior("Sticker").Unstick(null);
}
}
{for(var i = 0, len = gdjs.ApartmentCode.GDMaskObjects1.length ;i < len;++i) {
    gdjs.ApartmentCode.GDMaskObjects1[i].getBehavior("Sticker").Unstick(null);
}
}
{for(var i = 0, len = gdjs.ApartmentCode.GDNotificationObjects1.length ;i < len;++i) {
    gdjs.ApartmentCode.GDNotificationObjects1[i].getBehavior("Tween").addObjectPositionYTween2("", 890 - (( gdjs.ApartmentCode.GDNotification_9595textObjects1.length === 0 ) ? 0 :gdjs.ApartmentCode.GDNotification_9595textObjects1[0].getHeight()) - 50 - (( gdjs.ApartmentCode.GDAction_9595btnObjects1.length === 0 ) ? 0 :gdjs.ApartmentCode.GDAction_9595btnObjects1[0].getHeight()) - 30, "easeInOutQuad", 0.5, false);
}
}

{ //Subevents
gdjs.ApartmentCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDNotification_95959595close_95959595btnObjects1Objects = Hashtable.newFrom({"Notification_close_btn": gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects1});
gdjs.ApartmentCode.asyncCallback9828612 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ApartmentCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(7).setBoolean(true);
}
gdjs.ApartmentCode.localVariables.length = 0;
}
gdjs.ApartmentCode.idToCallbackMap.set(9828612, gdjs.ApartmentCode.asyncCallback9828612);
gdjs.ApartmentCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.ApartmentCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.ApartmentCode.asyncCallback9828612(runtimeScene, asyncObjectsList)), 9828612, asyncObjectsList);
}
}

}


};gdjs.ApartmentCode.asyncCallback10596500 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ApartmentCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Action_btn"), gdjs.ApartmentCode.GDAction_9595btnObjects2);
gdjs.copyArray(runtimeScene.getObjects("Notification_close_btn"), gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects2);
gdjs.copyArray(asyncObjectsList.getObjects("Notification_text"), gdjs.ApartmentCode.GDNotification_9595textObjects2);

{for(var i = 0, len = gdjs.ApartmentCode.GDAction_9595btnObjects2.length ;i < len;++i) {
    gdjs.ApartmentCode.GDAction_9595btnObjects2[i].setY((( gdjs.ApartmentCode.GDNotification_9595textObjects2.length === 0 ) ? 0 :gdjs.ApartmentCode.GDNotification_9595textObjects2[0].getY()) + (( gdjs.ApartmentCode.GDNotification_9595textObjects2.length === 0 ) ? 0 :gdjs.ApartmentCode.GDNotification_9595textObjects2[0].getHeight()) + 50);
}
}
{for(var i = 0, len = gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects2.length ;i < len;++i) {
    gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects2[i].getBehavior("Sticker").Unstick(null);
}
}
gdjs.ApartmentCode.localVariables.length = 0;
}
gdjs.ApartmentCode.idToCallbackMap.set(10596500, gdjs.ApartmentCode.asyncCallback10596500);
gdjs.ApartmentCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.ApartmentCode.localVariables);
for (const obj of gdjs.ApartmentCode.GDNotification_9595textObjects1) asyncObjectsList.addObject("Notification_text", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.01), (runtimeScene) => (gdjs.ApartmentCode.asyncCallback10596500(runtimeScene, asyncObjectsList)), 10596500, asyncObjectsList);
}
}

}


};gdjs.ApartmentCode.asyncCallback10595964 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ApartmentCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Notification"), gdjs.ApartmentCode.GDNotificationObjects2);
{for(var i = 0, len = gdjs.ApartmentCode.GDNotificationObjects2.length ;i < len;++i) {
    gdjs.ApartmentCode.GDNotificationObjects2[i].setY(650);
}
}
gdjs.ApartmentCode.localVariables.length = 0;
}
gdjs.ApartmentCode.idToCallbackMap.set(10595964, gdjs.ApartmentCode.asyncCallback10595964);
gdjs.ApartmentCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.ApartmentCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.ApartmentCode.asyncCallback10595964(runtimeScene, asyncObjectsList)), 10595964, asyncObjectsList);
}
}

}


};gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDhelp_95959595Close_95959595btnObjects2Objects = Hashtable.newFrom({"help_Close_btn": gdjs.ApartmentCode.GDhelp_9595Close_9595btnObjects2});
gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDhelp_95959595Close_95959595btnObjects2Objects = Hashtable.newFrom({"help_Close_btn": gdjs.ApartmentCode.GDhelp_9595Close_9595btnObjects2});
gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDhelp_95959595Close_95959595btnObjects1Objects = Hashtable.newFrom({"help_Close_btn": gdjs.ApartmentCode.GDhelp_9595Close_9595btnObjects1});
gdjs.ApartmentCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("help_Close_btn"), gdjs.ApartmentCode.GDhelp_9595Close_9595btnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDhelp_95959595Close_95959595btnObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Darken"), gdjs.ApartmentCode.GDDarkenObjects2);
gdjs.copyArray(runtimeScene.getObjects("Help"), gdjs.ApartmentCode.GDHelpObjects2);
/* Reuse gdjs.ApartmentCode.GDhelp_9595Close_9595btnObjects2 */
{for(var i = 0, len = gdjs.ApartmentCode.GDhelp_9595Close_9595btnObjects2.length ;i < len;++i) {
    gdjs.ApartmentCode.GDhelp_9595Close_9595btnObjects2[i].getBehavior("Animation").setAnimationName("p");
}
}
{for(var i = 0, len = gdjs.ApartmentCode.GDDarkenObjects2.length ;i < len;++i) {
    gdjs.ApartmentCode.GDDarkenObjects2[i].getBehavior("Tween").addObjectOpacityTween2("", 0, "linear", 0.5, false);
}
}
{for(var i = 0, len = gdjs.ApartmentCode.GDHelpObjects2.length ;i < len;++i) {
    gdjs.ApartmentCode.GDHelpObjects2[i].getBehavior("Tween").addObjectOpacityTween2("", 0, "linear", 0.5, false);
}
}
{for(var i = 0, len = gdjs.ApartmentCode.GDhelp_9595Close_9595btnObjects2.length ;i < len;++i) {
    gdjs.ApartmentCode.GDhelp_9595Close_9595btnObjects2[i].getBehavior("Tween").addObjectOpacityTween2("", 0, "linear", 0.5, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("help_Close_btn"), gdjs.ApartmentCode.GDhelp_9595Close_9595btnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDhelp_95959595Close_95959595btnObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.ApartmentCode.GDhelp_9595Close_9595btnObjects2 */
{for(var i = 0, len = gdjs.ApartmentCode.GDhelp_9595Close_9595btnObjects2.length ;i < len;++i) {
    gdjs.ApartmentCode.GDhelp_9595Close_9595btnObjects2[i].getBehavior("Animation").setAnimationName("d");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("help_Close_btn"), gdjs.ApartmentCode.GDhelp_9595Close_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDhelp_95959595Close_95959595btnObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.ApartmentCode.GDhelp_9595Close_9595btnObjects1 */
{for(var i = 0, len = gdjs.ApartmentCode.GDhelp_9595Close_9595btnObjects1.length ;i < len;++i) {
    gdjs.ApartmentCode.GDhelp_9595Close_9595btnObjects1[i].getBehavior("Animation").setAnimationName("h");
}
}
}

}


};gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDHint_95959595btnObjects1Objects = Hashtable.newFrom({"Hint_btn": gdjs.ApartmentCode.GDHint_9595btnObjects1});
gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDNotificationObjects1Objects = Hashtable.newFrom({"Notification": gdjs.ApartmentCode.GDNotificationObjects1});
gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDAction_95959595btnObjects1Objects = Hashtable.newFrom({"Action_btn": gdjs.ApartmentCode.GDAction_9595btnObjects1});
gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDClick_95959595computerObjects1Objects = Hashtable.newFrom({"Click_computer": gdjs.ApartmentCode.GDClick_9595computerObjects1});
gdjs.ApartmentCode.asyncCallback10607644 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ApartmentCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Computer", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(false);
}
gdjs.ApartmentCode.localVariables.length = 0;
}
gdjs.ApartmentCode.idToCallbackMap.set(10607644, gdjs.ApartmentCode.asyncCallback10607644);
gdjs.ApartmentCode.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.ApartmentCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.ApartmentCode.asyncCallback10607644(runtimeScene, asyncObjectsList)), 10607644, asyncObjectsList);
}
}

}


};gdjs.ApartmentCode.eventsList12 = function(runtimeScene) {

{


gdjs.ApartmentCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Action_btn"), gdjs.ApartmentCode.GDAction_9595btnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Darken"), gdjs.ApartmentCode.GDDarkenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mask"), gdjs.ApartmentCode.GDMaskObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification"), gdjs.ApartmentCode.GDNotificationObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_Head"), gdjs.ApartmentCode.GDNotification_9595HeadObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_close_btn"), gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_down_btn"), gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_text"), gdjs.ApartmentCode.GDNotification_9595textObjects1);
{for(var i = 0, len = gdjs.ApartmentCode.GDDarkenObjects1.length ;i < len;++i) {
    gdjs.ApartmentCode.GDDarkenObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.ApartmentCode.GDDarkenObjects1.length ;i < len;++i) {
    gdjs.ApartmentCode.GDDarkenObjects1[i].getBehavior("Tween").addObjectOpacityTween2("", 0, "linear", 0.2, false);
}
}
{for(var i = 0, len = gdjs.ApartmentCode.GDNotification_9595HeadObjects1.length ;i < len;++i) {
    gdjs.ApartmentCode.GDNotification_9595HeadObjects1[i].getBehavior("Sticker").Stick(gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDNotificationObjects1Objects, null);
}
}
{for(var i = 0, len = gdjs.ApartmentCode.GDNotification_9595textObjects1.length ;i < len;++i) {
    gdjs.ApartmentCode.GDNotification_9595textObjects1[i].getBehavior("Sticker").Stick(gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDNotificationObjects1Objects, null);
}
}
{for(var i = 0, len = gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects1.length ;i < len;++i) {
    gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects1[i].getBehavior("Sticker").Stick(gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDNotificationObjects1Objects, null);
}
}
{for(var i = 0, len = gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects1.length ;i < len;++i) {
    gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects1[i].getBehavior("Sticker").Stick(gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDNotificationObjects1Objects, null);
}
}
{for(var i = 0, len = gdjs.ApartmentCode.GDAction_9595btnObjects1.length ;i < len;++i) {
    gdjs.ApartmentCode.GDAction_9595btnObjects1[i].getBehavior("Sticker").Stick(gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDNotificationObjects1Objects, null);
}
}
{for(var i = 0, len = gdjs.ApartmentCode.GDMaskObjects1.length ;i < len;++i) {
    gdjs.ApartmentCode.GDMaskObjects1[i].getBehavior("Sticker").Stick(gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDNotificationObjects1Objects, null);
}
}
{gdjs.evtsExt__SpriteMasking__Mask.func(runtimeScene, gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDNotification_95959595textObjects1Objects, gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDMaskObjects1Objects, null);
}
{gdjs.evtsExt__SpriteMasking__Mask.func(runtimeScene, gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDNotification_95959595HeadObjects1Objects, gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDMaskObjects1Objects, null);
}
}

}


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
gdjs.copyArray(runtimeScene.getObjects("Mask"), gdjs.ApartmentCode.GDMaskObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification"), gdjs.ApartmentCode.GDNotificationObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_Head"), gdjs.ApartmentCode.GDNotification_9595HeadObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_close_btn"), gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_down_btn"), gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_text"), gdjs.ApartmentCode.GDNotification_9595textObjects1);
{for(var i = 0, len = gdjs.ApartmentCode.GDNotificationObjects1.length ;i < len;++i) {
    gdjs.ApartmentCode.GDNotificationObjects1[i].setY(1100);
}
}
{for(var i = 0, len = gdjs.ApartmentCode.GDNotificationObjects1.length ;i < len;++i) {
    gdjs.ApartmentCode.GDNotificationObjects1[i].setX(-((((gdjs.ApartmentCode.GDNotificationObjects1[i].getWidth()) - gdjs.evtTools.window.getWindowInnerWidth()) / 2)));
}
}
{for(var i = 0, len = gdjs.ApartmentCode.GDNotification_9595HeadObjects1.length ;i < len;++i) {
    gdjs.ApartmentCode.GDNotification_9595HeadObjects1[i].setY(1130);
}
}
{for(var i = 0, len = gdjs.ApartmentCode.GDNotification_9595HeadObjects1.length ;i < len;++i) {
    gdjs.ApartmentCode.GDNotification_9595HeadObjects1[i].setX((gdjs.evtTools.window.getWindowInnerWidth() - (gdjs.ApartmentCode.GDNotification_9595HeadObjects1[i].getWidth())) / 2);
}
}
{for(var i = 0, len = gdjs.ApartmentCode.GDNotification_9595textObjects1.length ;i < len;++i) {
    gdjs.ApartmentCode.GDNotification_9595textObjects1[i].setY(1180);
}
}
{for(var i = 0, len = gdjs.ApartmentCode.GDNotification_9595textObjects1.length ;i < len;++i) {
    gdjs.ApartmentCode.GDNotification_9595textObjects1[i].setX((gdjs.evtTools.window.getWindowInnerWidth() - (gdjs.ApartmentCode.GDNotification_9595textObjects1[i].getWidth())) / 2);
}
}
{for(var i = 0, len = gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects1.length ;i < len;++i) {
    gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects1[i].setY(1130);
}
}
{for(var i = 0, len = gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects1.length ;i < len;++i) {
    gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects1[i].setX(1620);
}
}
{for(var i = 0, len = gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects1.length ;i < len;++i) {
    gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects1[i].setY(1130);
}
}
{for(var i = 0, len = gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects1.length ;i < len;++i) {
    gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects1[i].setX(1620);
}
}
{for(var i = 0, len = gdjs.ApartmentCode.GDMaskObjects1.length ;i < len;++i) {
    gdjs.ApartmentCode.GDMaskObjects1[i].setY(1135);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.ApartmentCode.mapOfEmptyGDAction_9595btnObjects));
}

{ //Subevents
gdjs.ApartmentCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.ApartmentCode.eventsList6(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Notification_close_btn"), gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDNotification_95959595close_95959595btnObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects1.length;i<l;++i) {
    if ( gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects1[k] = gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects1[i];
        ++k;
    }
}
gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects1.length = k;
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
gdjs.copyArray(runtimeScene.getObjects("Notification"), gdjs.ApartmentCode.GDNotificationObjects1);
{for(var i = 0, len = gdjs.ApartmentCode.GDNotificationObjects1.length ;i < len;++i) {
    gdjs.ApartmentCode.GDNotificationObjects1[i].getBehavior("Tween").addObjectPositionYTween2("", 1092, "easeInOutQuad", 1, false);
}
}

{ //Subevents
gdjs.ApartmentCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10590140);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Button_text"), gdjs.ApartmentCode.GDButton_9595textObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_Head"), gdjs.ApartmentCode.GDNotification_9595HeadObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_text"), gdjs.ApartmentCode.GDNotification_9595textObjects1);
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}
{for(var i = 0, len = gdjs.ApartmentCode.GDNotification_9595HeadObjects1.length ;i < len;++i) {
    gdjs.ApartmentCode.GDNotification_9595HeadObjects1[i].getBehavior("Text").setText("Notification:");
}
}
{for(var i = 0, len = gdjs.ApartmentCode.GDNotification_9595textObjects1.length ;i < len;++i) {
    gdjs.ApartmentCode.GDNotification_9595textObjects1[i].getBehavior("Text").setText("It's a perfect day for a new adventure. But where should I travel next?");
}
}
{for(var i = 0, len = gdjs.ApartmentCode.GDButton_9595textObjects1.length ;i < len;++i) {
    gdjs.ApartmentCode.GDButton_9595textObjects1[i].getBehavior("Text").setText("Explore");
}
}

{ //Subevents
gdjs.ApartmentCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10596708);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.ApartmentCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


gdjs.ApartmentCode.eventsList10(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Hint_btn"), gdjs.ApartmentCode.GDHint_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDHint_95959595btnObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10602860);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Action_btn"), gdjs.ApartmentCode.GDAction_9595btnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification"), gdjs.ApartmentCode.GDNotificationObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_Head"), gdjs.ApartmentCode.GDNotification_9595HeadObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_close_btn"), gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_text"), gdjs.ApartmentCode.GDNotification_9595textObjects1);
{for(var i = 0, len = gdjs.ApartmentCode.GDNotification_9595textObjects1.length ;i < len;++i) {
    gdjs.ApartmentCode.GDNotification_9595textObjects1[i].getBehavior("Text").setText("I should check my computer for emails.");
}
}
{for(var i = 0, len = gdjs.ApartmentCode.GDNotification_9595HeadObjects1.length ;i < len;++i) {
    gdjs.ApartmentCode.GDNotification_9595HeadObjects1[i].getBehavior("Text").setText("Hint:");
}
}
{for(var i = 0, len = gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects1.length ;i < len;++i) {
    gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects1[i].getBehavior("Sticker").Stick(gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDNotificationObjects1Objects, null);
}
}
{for(var i = 0, len = gdjs.ApartmentCode.GDAction_9595btnObjects1.length ;i < len;++i) {
    gdjs.ApartmentCode.GDAction_9595btnObjects1[i].getBehavior("Sticker").Unstick(null);
}
}
{for(var i = 0, len = gdjs.ApartmentCode.GDNotificationObjects1.length ;i < len;++i) {
    gdjs.ApartmentCode.GDNotificationObjects1[i].getBehavior("Tween").addObjectPositionYTween2("", 890 - (( gdjs.ApartmentCode.GDNotification_9595textObjects1.length === 0 ) ? 0 :gdjs.ApartmentCode.GDNotification_9595textObjects1[0].getHeight()) - 30, "easeInOutQuad", 1, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Action_btn"), gdjs.ApartmentCode.GDAction_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDAction_95959595btnObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10604900);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Notification"), gdjs.ApartmentCode.GDNotificationObjects1);
{for(var i = 0, len = gdjs.ApartmentCode.GDNotificationObjects1.length ;i < len;++i) {
    gdjs.ApartmentCode.GDNotificationObjects1[i].getBehavior("Tween").addObjectPositionYTween2("", 1092, "easeInOutQuad", 1, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Click_computer"), gdjs.ApartmentCode.GDClick_9595computerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ApartmentCode.mapOfGDgdjs_9546ApartmentCode_9546GDClick_95959595computerObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10606012);
}
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10607516);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Darken"), gdjs.ApartmentCode.GDDarkenObjects1);
{for(var i = 0, len = gdjs.ApartmentCode.GDDarkenObjects1.length ;i < len;++i) {
    gdjs.ApartmentCode.GDDarkenObjects1[i].getBehavior("Tween").addObjectOpacityTween2("", 255, "linear", 0.2, false);
}
}

{ //Subevents
gdjs.ApartmentCode.eventsList11(runtimeScene);} //End of subevents
}

}


};

gdjs.ApartmentCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ApartmentCode.GDBackgroundObjects1.length = 0;
gdjs.ApartmentCode.GDBackgroundObjects2.length = 0;
gdjs.ApartmentCode.GDBackgroundObjects3.length = 0;
gdjs.ApartmentCode.GDHelpObjects1.length = 0;
gdjs.ApartmentCode.GDHelpObjects2.length = 0;
gdjs.ApartmentCode.GDHelpObjects3.length = 0;
gdjs.ApartmentCode.GDhelp_9595Close_9595btnObjects1.length = 0;
gdjs.ApartmentCode.GDhelp_9595Close_9595btnObjects2.length = 0;
gdjs.ApartmentCode.GDhelp_9595Close_9595btnObjects3.length = 0;
gdjs.ApartmentCode.GDClick_9595computerObjects1.length = 0;
gdjs.ApartmentCode.GDClick_9595computerObjects2.length = 0;
gdjs.ApartmentCode.GDClick_9595computerObjects3.length = 0;
gdjs.ApartmentCode.GDAction_9595btnObjects1.length = 0;
gdjs.ApartmentCode.GDAction_9595btnObjects2.length = 0;
gdjs.ApartmentCode.GDAction_9595btnObjects3.length = 0;
gdjs.ApartmentCode.GDButton_9595textObjects1.length = 0;
gdjs.ApartmentCode.GDButton_9595textObjects2.length = 0;
gdjs.ApartmentCode.GDButton_9595textObjects3.length = 0;
gdjs.ApartmentCode.GDNotificationObjects1.length = 0;
gdjs.ApartmentCode.GDNotificationObjects2.length = 0;
gdjs.ApartmentCode.GDNotificationObjects3.length = 0;
gdjs.ApartmentCode.GDClose_9595btnObjects1.length = 0;
gdjs.ApartmentCode.GDClose_9595btnObjects2.length = 0;
gdjs.ApartmentCode.GDClose_9595btnObjects3.length = 0;
gdjs.ApartmentCode.GDHint_9595btnObjects1.length = 0;
gdjs.ApartmentCode.GDHint_9595btnObjects2.length = 0;
gdjs.ApartmentCode.GDHint_9595btnObjects3.length = 0;
gdjs.ApartmentCode.GDNotification_9595HeadObjects1.length = 0;
gdjs.ApartmentCode.GDNotification_9595HeadObjects2.length = 0;
gdjs.ApartmentCode.GDNotification_9595HeadObjects3.length = 0;
gdjs.ApartmentCode.GDNotification_9595textObjects1.length = 0;
gdjs.ApartmentCode.GDNotification_9595textObjects2.length = 0;
gdjs.ApartmentCode.GDNotification_9595textObjects3.length = 0;
gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects1.length = 0;
gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects2.length = 0;
gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects3.length = 0;
gdjs.ApartmentCode.GDBottomfadeObjects1.length = 0;
gdjs.ApartmentCode.GDBottomfadeObjects2.length = 0;
gdjs.ApartmentCode.GDBottomfadeObjects3.length = 0;
gdjs.ApartmentCode.GDSafeareaObjects1.length = 0;
gdjs.ApartmentCode.GDSafeareaObjects2.length = 0;
gdjs.ApartmentCode.GDSafeareaObjects3.length = 0;
gdjs.ApartmentCode.GDDarkenObjects1.length = 0;
gdjs.ApartmentCode.GDDarkenObjects2.length = 0;
gdjs.ApartmentCode.GDDarkenObjects3.length = 0;
gdjs.ApartmentCode.GDMaskObjects1.length = 0;
gdjs.ApartmentCode.GDMaskObjects2.length = 0;
gdjs.ApartmentCode.GDMaskObjects3.length = 0;
gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects1.length = 0;
gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects2.length = 0;
gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects3.length = 0;

gdjs.ApartmentCode.eventsList12(runtimeScene);
gdjs.ApartmentCode.GDBackgroundObjects1.length = 0;
gdjs.ApartmentCode.GDBackgroundObjects2.length = 0;
gdjs.ApartmentCode.GDBackgroundObjects3.length = 0;
gdjs.ApartmentCode.GDHelpObjects1.length = 0;
gdjs.ApartmentCode.GDHelpObjects2.length = 0;
gdjs.ApartmentCode.GDHelpObjects3.length = 0;
gdjs.ApartmentCode.GDhelp_9595Close_9595btnObjects1.length = 0;
gdjs.ApartmentCode.GDhelp_9595Close_9595btnObjects2.length = 0;
gdjs.ApartmentCode.GDhelp_9595Close_9595btnObjects3.length = 0;
gdjs.ApartmentCode.GDClick_9595computerObjects1.length = 0;
gdjs.ApartmentCode.GDClick_9595computerObjects2.length = 0;
gdjs.ApartmentCode.GDClick_9595computerObjects3.length = 0;
gdjs.ApartmentCode.GDAction_9595btnObjects1.length = 0;
gdjs.ApartmentCode.GDAction_9595btnObjects2.length = 0;
gdjs.ApartmentCode.GDAction_9595btnObjects3.length = 0;
gdjs.ApartmentCode.GDButton_9595textObjects1.length = 0;
gdjs.ApartmentCode.GDButton_9595textObjects2.length = 0;
gdjs.ApartmentCode.GDButton_9595textObjects3.length = 0;
gdjs.ApartmentCode.GDNotificationObjects1.length = 0;
gdjs.ApartmentCode.GDNotificationObjects2.length = 0;
gdjs.ApartmentCode.GDNotificationObjects3.length = 0;
gdjs.ApartmentCode.GDClose_9595btnObjects1.length = 0;
gdjs.ApartmentCode.GDClose_9595btnObjects2.length = 0;
gdjs.ApartmentCode.GDClose_9595btnObjects3.length = 0;
gdjs.ApartmentCode.GDHint_9595btnObjects1.length = 0;
gdjs.ApartmentCode.GDHint_9595btnObjects2.length = 0;
gdjs.ApartmentCode.GDHint_9595btnObjects3.length = 0;
gdjs.ApartmentCode.GDNotification_9595HeadObjects1.length = 0;
gdjs.ApartmentCode.GDNotification_9595HeadObjects2.length = 0;
gdjs.ApartmentCode.GDNotification_9595HeadObjects3.length = 0;
gdjs.ApartmentCode.GDNotification_9595textObjects1.length = 0;
gdjs.ApartmentCode.GDNotification_9595textObjects2.length = 0;
gdjs.ApartmentCode.GDNotification_9595textObjects3.length = 0;
gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects1.length = 0;
gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects2.length = 0;
gdjs.ApartmentCode.GDNotification_9595down_9595btnObjects3.length = 0;
gdjs.ApartmentCode.GDBottomfadeObjects1.length = 0;
gdjs.ApartmentCode.GDBottomfadeObjects2.length = 0;
gdjs.ApartmentCode.GDBottomfadeObjects3.length = 0;
gdjs.ApartmentCode.GDSafeareaObjects1.length = 0;
gdjs.ApartmentCode.GDSafeareaObjects2.length = 0;
gdjs.ApartmentCode.GDSafeareaObjects3.length = 0;
gdjs.ApartmentCode.GDDarkenObjects1.length = 0;
gdjs.ApartmentCode.GDDarkenObjects2.length = 0;
gdjs.ApartmentCode.GDDarkenObjects3.length = 0;
gdjs.ApartmentCode.GDMaskObjects1.length = 0;
gdjs.ApartmentCode.GDMaskObjects2.length = 0;
gdjs.ApartmentCode.GDMaskObjects3.length = 0;
gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects1.length = 0;
gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects2.length = 0;
gdjs.ApartmentCode.GDNotification_9595close_9595btnObjects3.length = 0;


return;

}

gdjs['ApartmentCode'] = gdjs.ApartmentCode;
