gdjs.Apartment_952Code = {};
gdjs.Apartment_952Code.localVariables = [];
gdjs.Apartment_952Code.idToCallbackMap = new Map();
gdjs.Apartment_952Code.forEachIndex2 = 0;

gdjs.Apartment_952Code.forEachObjects2 = [];

gdjs.Apartment_952Code.forEachTemporary2 = null;

gdjs.Apartment_952Code.forEachTotalCount2 = 0;

gdjs.Apartment_952Code.GDBackgroundObjects1= [];
gdjs.Apartment_952Code.GDBackgroundObjects2= [];
gdjs.Apartment_952Code.GDBackgroundObjects3= [];
gdjs.Apartment_952Code.GDClick_9595doorObjects1= [];
gdjs.Apartment_952Code.GDClick_9595doorObjects2= [];
gdjs.Apartment_952Code.GDClick_9595doorObjects3= [];
gdjs.Apartment_952Code.GDClick_9595computerObjects1= [];
gdjs.Apartment_952Code.GDClick_9595computerObjects2= [];
gdjs.Apartment_952Code.GDClick_9595computerObjects3= [];
gdjs.Apartment_952Code.GDAction_9595btnObjects1= [];
gdjs.Apartment_952Code.GDAction_9595btnObjects2= [];
gdjs.Apartment_952Code.GDAction_9595btnObjects3= [];
gdjs.Apartment_952Code.GDButton_9595textObjects1= [];
gdjs.Apartment_952Code.GDButton_9595textObjects2= [];
gdjs.Apartment_952Code.GDButton_9595textObjects3= [];
gdjs.Apartment_952Code.GDNotificationObjects1= [];
gdjs.Apartment_952Code.GDNotificationObjects2= [];
gdjs.Apartment_952Code.GDNotificationObjects3= [];
gdjs.Apartment_952Code.GDClose_9595btnObjects1= [];
gdjs.Apartment_952Code.GDClose_9595btnObjects2= [];
gdjs.Apartment_952Code.GDClose_9595btnObjects3= [];
gdjs.Apartment_952Code.GDHint_9595btnObjects1= [];
gdjs.Apartment_952Code.GDHint_9595btnObjects2= [];
gdjs.Apartment_952Code.GDHint_9595btnObjects3= [];
gdjs.Apartment_952Code.GDNotification_9595HeadObjects1= [];
gdjs.Apartment_952Code.GDNotification_9595HeadObjects2= [];
gdjs.Apartment_952Code.GDNotification_9595HeadObjects3= [];
gdjs.Apartment_952Code.GDNotification_9595textObjects1= [];
gdjs.Apartment_952Code.GDNotification_9595textObjects2= [];
gdjs.Apartment_952Code.GDNotification_9595textObjects3= [];
gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects1= [];
gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects2= [];
gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects3= [];
gdjs.Apartment_952Code.GDBottomfadeObjects1= [];
gdjs.Apartment_952Code.GDBottomfadeObjects2= [];
gdjs.Apartment_952Code.GDBottomfadeObjects3= [];
gdjs.Apartment_952Code.GDSafeareaObjects1= [];
gdjs.Apartment_952Code.GDSafeareaObjects2= [];
gdjs.Apartment_952Code.GDSafeareaObjects3= [];
gdjs.Apartment_952Code.GDDarkenObjects1= [];
gdjs.Apartment_952Code.GDDarkenObjects2= [];
gdjs.Apartment_952Code.GDDarkenObjects3= [];
gdjs.Apartment_952Code.GDMaskObjects1= [];
gdjs.Apartment_952Code.GDMaskObjects2= [];
gdjs.Apartment_952Code.GDMaskObjects3= [];
gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects1= [];
gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects2= [];
gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects3= [];


gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDHint_95959595btnObjects2Objects = Hashtable.newFrom({"Hint_btn": gdjs.Apartment_952Code.GDHint_9595btnObjects2});
gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDNotification_95959595close_95959595btnObjects2Objects = Hashtable.newFrom({"Notification_close_btn": gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects2});
gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDAction_95959595btnObjects2Objects = Hashtable.newFrom({"Action_btn": gdjs.Apartment_952Code.GDAction_9595btnObjects2});
gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDNotification_95959595down_95959595btnObjects2Objects = Hashtable.newFrom({"Notification_down_btn": gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects2});
gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDHint_95959595btnObjects2Objects = Hashtable.newFrom({"Hint_btn": gdjs.Apartment_952Code.GDHint_9595btnObjects2});
gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDNotification_95959595close_95959595btnObjects2Objects = Hashtable.newFrom({"Notification_close_btn": gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects2});
gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDAction_95959595btnObjects2Objects = Hashtable.newFrom({"Action_btn": gdjs.Apartment_952Code.GDAction_9595btnObjects2});
gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDNotification_95959595down_95959595btnObjects1Objects = Hashtable.newFrom({"Notification_down_btn": gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects1});
gdjs.Apartment_952Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Hint_btn"), gdjs.Apartment_952Code.GDHint_9595btnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDHint_95959595btnObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Apartment_952Code.GDHint_9595btnObjects2 */
{for(var i = 0, len = gdjs.Apartment_952Code.GDHint_9595btnObjects2.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDHint_9595btnObjects2[i].getBehavior("Animation").setAnimationName("d");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Notification_close_btn"), gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDNotification_95959595close_95959595btnObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects2 */
{for(var i = 0, len = gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects2.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects2[i].getBehavior("Animation").setAnimationName("d");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Action_btn"), gdjs.Apartment_952Code.GDAction_9595btnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDAction_95959595btnObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Apartment_952Code.GDAction_9595btnObjects2 */
{for(var i = 0, len = gdjs.Apartment_952Code.GDAction_9595btnObjects2.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDAction_9595btnObjects2[i].getBehavior("Animation").setAnimationName("d");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Notification_down_btn"), gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDNotification_95959595down_95959595btnObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects2 */
{for(var i = 0, len = gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects2.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects2[i].getBehavior("Animation").setAnimationName("d");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hint_btn"), gdjs.Apartment_952Code.GDHint_9595btnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDHint_95959595btnObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Apartment_952Code.GDHint_9595btnObjects2 */
{for(var i = 0, len = gdjs.Apartment_952Code.GDHint_9595btnObjects2.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDHint_9595btnObjects2[i].getBehavior("Animation").setAnimationName("h");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Notification_close_btn"), gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDNotification_95959595close_95959595btnObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects2 */
{for(var i = 0, len = gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects2.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects2[i].getBehavior("Animation").setAnimationName("h");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Action_btn"), gdjs.Apartment_952Code.GDAction_9595btnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDAction_95959595btnObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Apartment_952Code.GDAction_9595btnObjects2 */
{for(var i = 0, len = gdjs.Apartment_952Code.GDAction_9595btnObjects2.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDAction_9595btnObjects2[i].getBehavior("Animation").setAnimationName("h");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Notification_down_btn"), gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDNotification_95959595down_95959595btnObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects1 */
{for(var i = 0, len = gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects1[i].getBehavior("Animation").setAnimationName("h");
}
}
}

}


};gdjs.Apartment_952Code.mapOfEmptyGDAction_9595btnObjects = Hashtable.newFrom({"Action_btn": []});
gdjs.Apartment_952Code.mapOfEmptyGDAction_9595btnObjects = Hashtable.newFrom({"Action_btn": []});
gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDAction_95959595btnObjects2Objects = Hashtable.newFrom({"Action_btn": gdjs.Apartment_952Code.GDAction_9595btnObjects2});
gdjs.Apartment_952Code.mapOfEmptyGDAction_9595btnObjects = Hashtable.newFrom({"Action_btn": []});
gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDAction_95959595btnObjects2Objects = Hashtable.newFrom({"Action_btn": gdjs.Apartment_952Code.GDAction_9595btnObjects2});
gdjs.Apartment_952Code.eventsList1 = function(runtimeScene) {

};gdjs.Apartment_952Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Action_btn"), gdjs.Apartment_952Code.GDAction_9595btnObjects1);

for (gdjs.Apartment_952Code.forEachIndex2 = 0;gdjs.Apartment_952Code.forEachIndex2 < gdjs.Apartment_952Code.GDAction_9595btnObjects1.length;++gdjs.Apartment_952Code.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Button_text"), gdjs.Apartment_952Code.GDButton_9595textObjects2);
gdjs.Apartment_952Code.GDAction_9595btnObjects2.length = 0;


gdjs.Apartment_952Code.forEachTemporary2 = gdjs.Apartment_952Code.GDAction_9595btnObjects1[gdjs.Apartment_952Code.forEachIndex2];
gdjs.Apartment_952Code.GDAction_9595btnObjects2.push(gdjs.Apartment_952Code.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Apartment_952Code.GDButton_9595textObjects2.length;i<l;++i) {
    if ( gdjs.Apartment_952Code.GDButton_9595textObjects2[i].getVariableNumber(gdjs.Apartment_952Code.GDButton_9595textObjects2[i].getVariables().getFromIndex(0)) == ((gdjs.Apartment_952Code.GDAction_9595btnObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Apartment_952Code.GDAction_9595btnObjects2[0].getVariables()).getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.Apartment_952Code.GDButton_9595textObjects2[k] = gdjs.Apartment_952Code.GDButton_9595textObjects2[i];
        ++k;
    }
}
gdjs.Apartment_952Code.GDButton_9595textObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9876196);
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Apartment_952Code.GDButton_9595textObjects2.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDButton_9595textObjects2[i].getBehavior("Sticker").Stick(gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDAction_95959595btnObjects2Objects, null);
}
}
{for(var i = 0, len = gdjs.Apartment_952Code.GDAction_9595btnObjects2.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDAction_9595btnObjects2[i].setX(((gdjs.evtTools.window.getWindowInnerWidth() - (((gdjs.Apartment_952Code.GDAction_9595btnObjects2[i].getWidth()) * runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber()) + 50)) / 2) + (((gdjs.Apartment_952Code.GDAction_9595btnObjects2[i].getWidth()) + 50) * gdjs.Apartment_952Code.GDAction_9595btnObjects2[i].getVariables().getFromIndex(0).getAsNumber()));
}
}
}
}

}


};gdjs.Apartment_952Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.Apartment_952Code.mapOfEmptyGDAction_9595btnObjects) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Action_btn"), gdjs.Apartment_952Code.GDAction_9595btnObjects2);
gdjs.copyArray(runtimeScene.getObjects("Button_text"), gdjs.Apartment_952Code.GDButton_9595textObjects2);
{for(var i = 0, len = gdjs.Apartment_952Code.GDAction_9595btnObjects2.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDAction_9595btnObjects2[i].setX((gdjs.evtTools.window.getWindowInnerWidth() - (gdjs.Apartment_952Code.GDAction_9595btnObjects2[i].getWidth())) / 2);
}
}
{for(var i = 0, len = gdjs.Apartment_952Code.GDButton_9595textObjects2.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDButton_9595textObjects2[i].setX((gdjs.evtTools.window.getWindowInnerWidth() - (gdjs.Apartment_952Code.GDButton_9595textObjects2[i].getWidth())) / 2);
}
}
{for(var i = 0, len = gdjs.Apartment_952Code.GDButton_9595textObjects2.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDButton_9595textObjects2[i].setY((( gdjs.Apartment_952Code.GDAction_9595btnObjects2.length === 0 ) ? 0 :gdjs.Apartment_952Code.GDAction_9595btnObjects2[0].getPointY("")) + ((( gdjs.Apartment_952Code.GDAction_9595btnObjects2.length === 0 ) ? 0 :gdjs.Apartment_952Code.GDAction_9595btnObjects2[0].getHeight()) - (gdjs.Apartment_952Code.GDButton_9595textObjects2[i].getHeight()) / 2) - 10);
}
}
{for(var i = 0, len = gdjs.Apartment_952Code.GDButton_9595textObjects2.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDButton_9595textObjects2[i].getBehavior("Sticker").Stick(gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDAction_95959595btnObjects2Objects, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.Apartment_952Code.mapOfEmptyGDAction_9595btnObjects) > 1;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Apartment_952Code.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDNotification_95959595down_95959595btnObjects2Objects = Hashtable.newFrom({"Notification_down_btn": gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects2});
gdjs.Apartment_952Code.asyncCallback10358140 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Apartment_952Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Notification_down_btn"), gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects3);

{for(var i = 0, len = gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects3.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects3[i].getBehavior("Tween").addObjectAngleTween2("", 180, "linear", 0.2, false);
}
}
gdjs.Apartment_952Code.localVariables.length = 0;
}
gdjs.Apartment_952Code.idToCallbackMap.set(10358140, gdjs.Apartment_952Code.asyncCallback10358140);
gdjs.Apartment_952Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Apartment_952Code.localVariables);
for (const obj of gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects2) asyncObjectsList.addObject("Notification_down_btn", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.Apartment_952Code.asyncCallback10358140(runtimeScene, asyncObjectsList)), 10358140, asyncObjectsList);
}
}

}


};gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDNotification_95959595down_95959595btnObjects1Objects = Hashtable.newFrom({"Notification_down_btn": gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects1});
gdjs.Apartment_952Code.asyncCallback9389916 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Apartment_952Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Notification_down_btn"), gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects2);

{for(var i = 0, len = gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects2.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects2[i].getBehavior("Tween").addObjectAngleTween2("", 0, "linear", 0.2, false);
}
}
gdjs.Apartment_952Code.localVariables.length = 0;
}
gdjs.Apartment_952Code.idToCallbackMap.set(9389916, gdjs.Apartment_952Code.asyncCallback9389916);
gdjs.Apartment_952Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Apartment_952Code.localVariables);
for (const obj of gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects1) asyncObjectsList.addObject("Notification_down_btn", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.Apartment_952Code.asyncCallback9389916(runtimeScene, asyncObjectsList)), 9389916, asyncObjectsList);
}
}

}


};gdjs.Apartment_952Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Notification_down_btn"), gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDNotification_95959595down_95959595btnObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects2.length;i<l;++i) {
    if ( gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects2[i].getAngle() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects2[k] = gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects2[i];
        ++k;
    }
}
gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects2.length;i<l;++i) {
    if ( gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects2[k] = gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects2[i];
        ++k;
    }
}
gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10113844);
}
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Action_btn"), gdjs.Apartment_952Code.GDAction_9595btnObjects2);
gdjs.copyArray(runtimeScene.getObjects("Mask"), gdjs.Apartment_952Code.GDMaskObjects2);
gdjs.copyArray(runtimeScene.getObjects("Notification"), gdjs.Apartment_952Code.GDNotificationObjects2);
{for(var i = 0, len = gdjs.Apartment_952Code.GDAction_9595btnObjects2.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDAction_9595btnObjects2[i].getBehavior("Sticker").Unstick(null);
}
}
{for(var i = 0, len = gdjs.Apartment_952Code.GDMaskObjects2.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDMaskObjects2[i].getBehavior("Sticker").Unstick(null);
}
}
{for(var i = 0, len = gdjs.Apartment_952Code.GDNotificationObjects2.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDNotificationObjects2[i].getBehavior("Tween").addObjectPositionYTween2("", (( gdjs.Apartment_952Code.GDAction_9595btnObjects2.length === 0 ) ? 0 :gdjs.Apartment_952Code.GDAction_9595btnObjects2[0].getPointY("")) - 30, "easeInOutQuad", 0.5, false);
}
}

{ //Subevents
gdjs.Apartment_952Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Notification_down_btn"), gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDNotification_95959595down_95959595btnObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects1.length;i<l;++i) {
    if ( gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects1[i].getAngle() == 180 ) {
        isConditionTrue_0 = true;
        gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects1[k] = gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects1[i];
        ++k;
    }
}
gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects1.length;i<l;++i) {
    if ( gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects1[k] = gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects1[i];
        ++k;
    }
}
gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9549796);
}
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Action_btn"), gdjs.Apartment_952Code.GDAction_9595btnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mask"), gdjs.Apartment_952Code.GDMaskObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification"), gdjs.Apartment_952Code.GDNotificationObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_text"), gdjs.Apartment_952Code.GDNotification_9595textObjects1);
{for(var i = 0, len = gdjs.Apartment_952Code.GDAction_9595btnObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDAction_9595btnObjects1[i].getBehavior("Sticker").Unstick(null);
}
}
{for(var i = 0, len = gdjs.Apartment_952Code.GDMaskObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDMaskObjects1[i].getBehavior("Sticker").Unstick(null);
}
}
{for(var i = 0, len = gdjs.Apartment_952Code.GDNotificationObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDNotificationObjects1[i].getBehavior("Tween").addObjectPositionYTween2("", 890 - (( gdjs.Apartment_952Code.GDNotification_9595textObjects1.length === 0 ) ? 0 :gdjs.Apartment_952Code.GDNotification_9595textObjects1[0].getHeight()) - 50 - (( gdjs.Apartment_952Code.GDAction_9595btnObjects1.length === 0 ) ? 0 :gdjs.Apartment_952Code.GDAction_9595btnObjects1[0].getHeight()) - 30, "easeInOutQuad", 0.5, false);
}
}

{ //Subevents
gdjs.Apartment_952Code.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDNotification_95959595close_95959595btnObjects1Objects = Hashtable.newFrom({"Notification_close_btn": gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects1});
gdjs.Apartment_952Code.asyncCallback9828612 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Apartment_952Code.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(7).setBoolean(true);
}
gdjs.Apartment_952Code.localVariables.length = 0;
}
gdjs.Apartment_952Code.idToCallbackMap.set(9828612, gdjs.Apartment_952Code.asyncCallback9828612);
gdjs.Apartment_952Code.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Apartment_952Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Apartment_952Code.asyncCallback9828612(runtimeScene, asyncObjectsList)), 9828612, asyncObjectsList);
}
}

}


};gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDNotificationObjects1Objects = Hashtable.newFrom({"Notification": gdjs.Apartment_952Code.GDNotificationObjects1});
gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDNotificationObjects1Objects = Hashtable.newFrom({"Notification": gdjs.Apartment_952Code.GDNotificationObjects1});
gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDNotificationObjects1Objects = Hashtable.newFrom({"Notification": gdjs.Apartment_952Code.GDNotificationObjects1});
gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDNotificationObjects1Objects = Hashtable.newFrom({"Notification": gdjs.Apartment_952Code.GDNotificationObjects1});
gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDNotificationObjects1Objects = Hashtable.newFrom({"Notification": gdjs.Apartment_952Code.GDNotificationObjects1});
gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDNotificationObjects1Objects = Hashtable.newFrom({"Notification": gdjs.Apartment_952Code.GDNotificationObjects1});
gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDNotification_95959595textObjects1Objects = Hashtable.newFrom({"Notification_text": gdjs.Apartment_952Code.GDNotification_9595textObjects1});
gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDMaskObjects1Objects = Hashtable.newFrom({"Mask": gdjs.Apartment_952Code.GDMaskObjects1});
gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDNotification_95959595HeadObjects1Objects = Hashtable.newFrom({"Notification_Head": gdjs.Apartment_952Code.GDNotification_9595HeadObjects1});
gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDMaskObjects1Objects = Hashtable.newFrom({"Mask": gdjs.Apartment_952Code.GDMaskObjects1});
gdjs.Apartment_952Code.asyncCallback10667036 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Apartment_952Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Notification"), gdjs.Apartment_952Code.GDNotificationObjects3);

{for(var i = 0, len = gdjs.Apartment_952Code.GDNotificationObjects3.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDNotificationObjects3[i].getBehavior("Tween").addObjectPositionYTween2("", 1092, "easeInOutQuart", 1, false);
}
}
gdjs.Apartment_952Code.localVariables.length = 0;
}
gdjs.Apartment_952Code.idToCallbackMap.set(10667036, gdjs.Apartment_952Code.asyncCallback10667036);
gdjs.Apartment_952Code.eventsList8 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Apartment_952Code.localVariables);
for (const obj of gdjs.Apartment_952Code.GDNotificationObjects2) asyncObjectsList.addObject("Notification", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Apartment_952Code.asyncCallback10667036(runtimeScene, asyncObjectsList)), 10667036, asyncObjectsList);
}
}

}


};gdjs.Apartment_952Code.asyncCallback10665492 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Apartment_952Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Notification"), gdjs.Apartment_952Code.GDNotificationObjects2);
gdjs.copyArray(runtimeScene.getObjects("Notification_text"), gdjs.Apartment_952Code.GDNotification_9595textObjects2);
{for(var i = 0, len = gdjs.Apartment_952Code.GDNotificationObjects2.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDNotificationObjects2[i].getBehavior("Tween").addObjectPositionYTween2("", 890 - (( gdjs.Apartment_952Code.GDNotification_9595textObjects2.length === 0 ) ? 0 :gdjs.Apartment_952Code.GDNotification_9595textObjects2[0].getHeight()) - 30, "easeInOutQuart", 1, false);
}
}

{ //Subevents
gdjs.Apartment_952Code.eventsList8(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Apartment_952Code.localVariables.length = 0;
}
gdjs.Apartment_952Code.idToCallbackMap.set(10665492, gdjs.Apartment_952Code.asyncCallback10665492);
gdjs.Apartment_952Code.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Apartment_952Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Apartment_952Code.asyncCallback10665492(runtimeScene, asyncObjectsList)), 10665492, asyncObjectsList);
}
}

}


};gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDHint_95959595btnObjects1Objects = Hashtable.newFrom({"Hint_btn": gdjs.Apartment_952Code.GDHint_9595btnObjects1});
gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDNotification_95959595close_95959595btnObjects1Objects = Hashtable.newFrom({"Notification_close_btn": gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects1});
gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDClick_95959595doorObjects1Objects = Hashtable.newFrom({"Click_door": gdjs.Apartment_952Code.GDClick_9595doorObjects1});
gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDNotificationObjects1Objects = Hashtable.newFrom({"Notification": gdjs.Apartment_952Code.GDNotificationObjects1});
gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDNotificationObjects1Objects = Hashtable.newFrom({"Notification": gdjs.Apartment_952Code.GDNotificationObjects1});
gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDAction_95959595btnObjects1Objects = Hashtable.newFrom({"Action_btn": gdjs.Apartment_952Code.GDAction_9595btnObjects1});
gdjs.Apartment_952Code.asyncCallback10673068 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Apartment_952Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Notification_down_btn"), gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects2);
{for(var i = 0, len = gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects2.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects2[i].getBehavior("Tween").addObjectAngleTween2("", 180, "linear", 0.2, false);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(true);
}
gdjs.Apartment_952Code.localVariables.length = 0;
}
gdjs.Apartment_952Code.idToCallbackMap.set(10673068, gdjs.Apartment_952Code.asyncCallback10673068);
gdjs.Apartment_952Code.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Apartment_952Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.8), (runtimeScene) => (gdjs.Apartment_952Code.asyncCallback10673068(runtimeScene, asyncObjectsList)), 10673068, asyncObjectsList);
}
}

}


};gdjs.Apartment_952Code.asyncCallback10674556 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Apartment_952Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Hallway", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(false);
}
gdjs.Apartment_952Code.localVariables.length = 0;
}
gdjs.Apartment_952Code.idToCallbackMap.set(10674556, gdjs.Apartment_952Code.asyncCallback10674556);
gdjs.Apartment_952Code.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Apartment_952Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Apartment_952Code.asyncCallback10674556(runtimeScene, asyncObjectsList)), 10674556, asyncObjectsList);
}
}

}


};gdjs.Apartment_952Code.eventsList12 = function(runtimeScene) {

{


gdjs.Apartment_952Code.eventsList0(runtimeScene);
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
gdjs.copyArray(runtimeScene.getObjects("Mask"), gdjs.Apartment_952Code.GDMaskObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification"), gdjs.Apartment_952Code.GDNotificationObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_Head"), gdjs.Apartment_952Code.GDNotification_9595HeadObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_close_btn"), gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_down_btn"), gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_text"), gdjs.Apartment_952Code.GDNotification_9595textObjects1);
{for(var i = 0, len = gdjs.Apartment_952Code.GDNotificationObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDNotificationObjects1[i].getBehavior("Resizable").setWidth(1980);
}
}
{for(var i = 0, len = gdjs.Apartment_952Code.GDNotificationObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDNotificationObjects1[i].setY(1100);
}
}
{for(var i = 0, len = gdjs.Apartment_952Code.GDNotificationObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDNotificationObjects1[i].setX((gdjs.evtTools.window.getWindowInnerWidth() - (gdjs.Apartment_952Code.GDNotificationObjects1[i].getWidth())) / 2);
}
}
{for(var i = 0, len = gdjs.Apartment_952Code.GDNotification_9595HeadObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDNotification_9595HeadObjects1[i].setY(1130);
}
}
{for(var i = 0, len = gdjs.Apartment_952Code.GDNotification_9595HeadObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDNotification_9595HeadObjects1[i].setX((gdjs.evtTools.window.getWindowInnerWidth() - (gdjs.Apartment_952Code.GDNotification_9595HeadObjects1[i].getWidth())) / 2);
}
}
{for(var i = 0, len = gdjs.Apartment_952Code.GDNotification_9595textObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDNotification_9595textObjects1[i].setY(1180);
}
}
{for(var i = 0, len = gdjs.Apartment_952Code.GDNotification_9595textObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDNotification_9595textObjects1[i].setX((gdjs.evtTools.window.getWindowInnerWidth() - (gdjs.Apartment_952Code.GDNotification_9595textObjects1[i].getWidth())) / 2);
}
}
{for(var i = 0, len = gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects1[i].setY(1130);
}
}
{for(var i = 0, len = gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects1[i].setX(1620);
}
}
{for(var i = 0, len = gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects1[i].setY(1130);
}
}
{for(var i = 0, len = gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects1[i].setX(1620);
}
}
{for(var i = 0, len = gdjs.Apartment_952Code.GDMaskObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDMaskObjects1[i].setY(1135);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.Apartment_952Code.mapOfEmptyGDAction_9595btnObjects));
}

{ //Subevents
gdjs.Apartment_952Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.Apartment_952Code.eventsList6(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Notification_close_btn"), gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDNotification_95959595close_95959595btnObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects1.length;i<l;++i) {
    if ( gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects1[k] = gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects1[i];
        ++k;
    }
}
gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects1.length = k;
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
gdjs.copyArray(runtimeScene.getObjects("Notification"), gdjs.Apartment_952Code.GDNotificationObjects1);
{for(var i = 0, len = gdjs.Apartment_952Code.GDNotificationObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDNotificationObjects1[i].getBehavior("Tween").addObjectPositionYTween2("", 1092, "easeInOutQuad", 1, false);
}
}

{ //Subevents
gdjs.Apartment_952Code.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Action_btn"), gdjs.Apartment_952Code.GDAction_9595btnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Darken"), gdjs.Apartment_952Code.GDDarkenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mask"), gdjs.Apartment_952Code.GDMaskObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification"), gdjs.Apartment_952Code.GDNotificationObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_Head"), gdjs.Apartment_952Code.GDNotification_9595HeadObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_close_btn"), gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_down_btn"), gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_text"), gdjs.Apartment_952Code.GDNotification_9595textObjects1);
{for(var i = 0, len = gdjs.Apartment_952Code.GDDarkenObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDDarkenObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.Apartment_952Code.GDDarkenObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDDarkenObjects1[i].getBehavior("Tween").addObjectOpacityTween2("", 0, "linear", 0.2, false);
}
}
{for(var i = 0, len = gdjs.Apartment_952Code.GDNotification_9595HeadObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDNotification_9595HeadObjects1[i].getBehavior("Sticker").Stick(gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDNotificationObjects1Objects, null);
}
}
{for(var i = 0, len = gdjs.Apartment_952Code.GDNotification_9595textObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDNotification_9595textObjects1[i].getBehavior("Sticker").Stick(gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDNotificationObjects1Objects, null);
}
}
{for(var i = 0, len = gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects1[i].getBehavior("Sticker").Stick(gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDNotificationObjects1Objects, null);
}
}
{for(var i = 0, len = gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects1[i].getBehavior("Sticker").Stick(gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDNotificationObjects1Objects, null);
}
}
{for(var i = 0, len = gdjs.Apartment_952Code.GDAction_9595btnObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDAction_9595btnObjects1[i].getBehavior("Sticker").Stick(gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDNotificationObjects1Objects, null);
}
}
{for(var i = 0, len = gdjs.Apartment_952Code.GDMaskObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDMaskObjects1[i].getBehavior("Sticker").Stick(gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDNotificationObjects1Objects, null);
}
}
{gdjs.evtsExt__SpriteMasking__Mask.func(runtimeScene, gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDNotification_95959595textObjects1Objects, gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDMaskObjects1Objects, null);
}
{gdjs.evtsExt__SpriteMasking__Mask.func(runtimeScene, gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDNotification_95959595HeadObjects1Objects, gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDMaskObjects1Objects, null);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Notification_Head"), gdjs.Apartment_952Code.GDNotification_9595HeadObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_close_btn"), gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_text"), gdjs.Apartment_952Code.GDNotification_9595textObjects1);
{for(var i = 0, len = gdjs.Apartment_952Code.GDNotification_9595HeadObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDNotification_9595HeadObjects1[i].getBehavior("Text").setText("Notification:");
}
}
{for(var i = 0, len = gdjs.Apartment_952Code.GDNotification_9595textObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDNotification_9595textObjects1[i].getBehavior("Text").setText("Someone just knocked on the door. Who could it be?");
}
}
{for(var i = 0, len = gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10665332);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Apartment_952Code.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hint_btn"), gdjs.Apartment_952Code.GDHint_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDHint_95959595btnObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10666092);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Notification"), gdjs.Apartment_952Code.GDNotificationObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_Head"), gdjs.Apartment_952Code.GDNotification_9595HeadObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_close_btn"), gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification_text"), gdjs.Apartment_952Code.GDNotification_9595textObjects1);
{for(var i = 0, len = gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Apartment_952Code.GDNotification_9595HeadObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDNotification_9595HeadObjects1[i].getBehavior("Text").setText("Hint:");
}
}
{for(var i = 0, len = gdjs.Apartment_952Code.GDNotification_9595textObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDNotification_9595textObjects1[i].getBehavior("Text").setText("Click on the door to open it.");
}
}
{for(var i = 0, len = gdjs.Apartment_952Code.GDNotificationObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDNotificationObjects1[i].getBehavior("Tween").addObjectPositionYTween2("", 890 - (( gdjs.Apartment_952Code.GDNotification_9595textObjects1.length === 0 ) ? 0 :gdjs.Apartment_952Code.GDNotification_9595textObjects1[0].getHeight()) - 30, "easeInOutQuart", 1, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Notification_close_btn"), gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDNotification_95959595close_95959595btnObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10670788);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Notification"), gdjs.Apartment_952Code.GDNotificationObjects1);
{for(var i = 0, len = gdjs.Apartment_952Code.GDNotificationObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDNotificationObjects1[i].getBehavior("Tween").addObjectPositionYTween2("", 1092, "easeInOutQuart", 1, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Click_door"), gdjs.Apartment_952Code.GDClick_9595doorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDClick_95959595doorObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10671564);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Action_btn"), gdjs.Apartment_952Code.GDAction_9595btnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Button_text"), gdjs.Apartment_952Code.GDButton_9595textObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mask"), gdjs.Apartment_952Code.GDMaskObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification"), gdjs.Apartment_952Code.GDNotificationObjects1);
{for(var i = 0, len = gdjs.Apartment_952Code.GDAction_9595btnObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDAction_9595btnObjects1[i].getBehavior("Sticker").Stick(gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDNotificationObjects1Objects, null);
}
}
{for(var i = 0, len = gdjs.Apartment_952Code.GDMaskObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDMaskObjects1[i].getBehavior("Sticker").Stick(gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDNotificationObjects1Objects, null);
}
}
{for(var i = 0, len = gdjs.Apartment_952Code.GDButton_9595textObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDButton_9595textObjects1[i].getBehavior("Sticker").Stick(gdjs.Apartment_952Code.mapOfGDgdjs_9546Apartment_9595952Code_9546GDAction_95959595btnObjects1Objects, null);
}
}
{for(var i = 0, len = gdjs.Apartment_952Code.GDNotificationObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDNotificationObjects1[i].getBehavior("Tween").addObjectPositionYTween2("", 1092, "easeInOutQuad", 1, false);
}
}

{ //Subevents
gdjs.Apartment_952Code.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10673508);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Darken"), gdjs.Apartment_952Code.GDDarkenObjects1);
{for(var i = 0, len = gdjs.Apartment_952Code.GDDarkenObjects1.length ;i < len;++i) {
    gdjs.Apartment_952Code.GDDarkenObjects1[i].getBehavior("Tween").addObjectOpacityTween2("", 255, "linear", 0.2, false);
}
}

{ //Subevents
gdjs.Apartment_952Code.eventsList11(runtimeScene);} //End of subevents
}

}


};

gdjs.Apartment_952Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Apartment_952Code.GDBackgroundObjects1.length = 0;
gdjs.Apartment_952Code.GDBackgroundObjects2.length = 0;
gdjs.Apartment_952Code.GDBackgroundObjects3.length = 0;
gdjs.Apartment_952Code.GDClick_9595doorObjects1.length = 0;
gdjs.Apartment_952Code.GDClick_9595doorObjects2.length = 0;
gdjs.Apartment_952Code.GDClick_9595doorObjects3.length = 0;
gdjs.Apartment_952Code.GDClick_9595computerObjects1.length = 0;
gdjs.Apartment_952Code.GDClick_9595computerObjects2.length = 0;
gdjs.Apartment_952Code.GDClick_9595computerObjects3.length = 0;
gdjs.Apartment_952Code.GDAction_9595btnObjects1.length = 0;
gdjs.Apartment_952Code.GDAction_9595btnObjects2.length = 0;
gdjs.Apartment_952Code.GDAction_9595btnObjects3.length = 0;
gdjs.Apartment_952Code.GDButton_9595textObjects1.length = 0;
gdjs.Apartment_952Code.GDButton_9595textObjects2.length = 0;
gdjs.Apartment_952Code.GDButton_9595textObjects3.length = 0;
gdjs.Apartment_952Code.GDNotificationObjects1.length = 0;
gdjs.Apartment_952Code.GDNotificationObjects2.length = 0;
gdjs.Apartment_952Code.GDNotificationObjects3.length = 0;
gdjs.Apartment_952Code.GDClose_9595btnObjects1.length = 0;
gdjs.Apartment_952Code.GDClose_9595btnObjects2.length = 0;
gdjs.Apartment_952Code.GDClose_9595btnObjects3.length = 0;
gdjs.Apartment_952Code.GDHint_9595btnObjects1.length = 0;
gdjs.Apartment_952Code.GDHint_9595btnObjects2.length = 0;
gdjs.Apartment_952Code.GDHint_9595btnObjects3.length = 0;
gdjs.Apartment_952Code.GDNotification_9595HeadObjects1.length = 0;
gdjs.Apartment_952Code.GDNotification_9595HeadObjects2.length = 0;
gdjs.Apartment_952Code.GDNotification_9595HeadObjects3.length = 0;
gdjs.Apartment_952Code.GDNotification_9595textObjects1.length = 0;
gdjs.Apartment_952Code.GDNotification_9595textObjects2.length = 0;
gdjs.Apartment_952Code.GDNotification_9595textObjects3.length = 0;
gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects1.length = 0;
gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects2.length = 0;
gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects3.length = 0;
gdjs.Apartment_952Code.GDBottomfadeObjects1.length = 0;
gdjs.Apartment_952Code.GDBottomfadeObjects2.length = 0;
gdjs.Apartment_952Code.GDBottomfadeObjects3.length = 0;
gdjs.Apartment_952Code.GDSafeareaObjects1.length = 0;
gdjs.Apartment_952Code.GDSafeareaObjects2.length = 0;
gdjs.Apartment_952Code.GDSafeareaObjects3.length = 0;
gdjs.Apartment_952Code.GDDarkenObjects1.length = 0;
gdjs.Apartment_952Code.GDDarkenObjects2.length = 0;
gdjs.Apartment_952Code.GDDarkenObjects3.length = 0;
gdjs.Apartment_952Code.GDMaskObjects1.length = 0;
gdjs.Apartment_952Code.GDMaskObjects2.length = 0;
gdjs.Apartment_952Code.GDMaskObjects3.length = 0;
gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects1.length = 0;
gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects2.length = 0;
gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects3.length = 0;

gdjs.Apartment_952Code.eventsList12(runtimeScene);
gdjs.Apartment_952Code.GDBackgroundObjects1.length = 0;
gdjs.Apartment_952Code.GDBackgroundObjects2.length = 0;
gdjs.Apartment_952Code.GDBackgroundObjects3.length = 0;
gdjs.Apartment_952Code.GDClick_9595doorObjects1.length = 0;
gdjs.Apartment_952Code.GDClick_9595doorObjects2.length = 0;
gdjs.Apartment_952Code.GDClick_9595doorObjects3.length = 0;
gdjs.Apartment_952Code.GDClick_9595computerObjects1.length = 0;
gdjs.Apartment_952Code.GDClick_9595computerObjects2.length = 0;
gdjs.Apartment_952Code.GDClick_9595computerObjects3.length = 0;
gdjs.Apartment_952Code.GDAction_9595btnObjects1.length = 0;
gdjs.Apartment_952Code.GDAction_9595btnObjects2.length = 0;
gdjs.Apartment_952Code.GDAction_9595btnObjects3.length = 0;
gdjs.Apartment_952Code.GDButton_9595textObjects1.length = 0;
gdjs.Apartment_952Code.GDButton_9595textObjects2.length = 0;
gdjs.Apartment_952Code.GDButton_9595textObjects3.length = 0;
gdjs.Apartment_952Code.GDNotificationObjects1.length = 0;
gdjs.Apartment_952Code.GDNotificationObjects2.length = 0;
gdjs.Apartment_952Code.GDNotificationObjects3.length = 0;
gdjs.Apartment_952Code.GDClose_9595btnObjects1.length = 0;
gdjs.Apartment_952Code.GDClose_9595btnObjects2.length = 0;
gdjs.Apartment_952Code.GDClose_9595btnObjects3.length = 0;
gdjs.Apartment_952Code.GDHint_9595btnObjects1.length = 0;
gdjs.Apartment_952Code.GDHint_9595btnObjects2.length = 0;
gdjs.Apartment_952Code.GDHint_9595btnObjects3.length = 0;
gdjs.Apartment_952Code.GDNotification_9595HeadObjects1.length = 0;
gdjs.Apartment_952Code.GDNotification_9595HeadObjects2.length = 0;
gdjs.Apartment_952Code.GDNotification_9595HeadObjects3.length = 0;
gdjs.Apartment_952Code.GDNotification_9595textObjects1.length = 0;
gdjs.Apartment_952Code.GDNotification_9595textObjects2.length = 0;
gdjs.Apartment_952Code.GDNotification_9595textObjects3.length = 0;
gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects1.length = 0;
gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects2.length = 0;
gdjs.Apartment_952Code.GDNotification_9595down_9595btnObjects3.length = 0;
gdjs.Apartment_952Code.GDBottomfadeObjects1.length = 0;
gdjs.Apartment_952Code.GDBottomfadeObjects2.length = 0;
gdjs.Apartment_952Code.GDBottomfadeObjects3.length = 0;
gdjs.Apartment_952Code.GDSafeareaObjects1.length = 0;
gdjs.Apartment_952Code.GDSafeareaObjects2.length = 0;
gdjs.Apartment_952Code.GDSafeareaObjects3.length = 0;
gdjs.Apartment_952Code.GDDarkenObjects1.length = 0;
gdjs.Apartment_952Code.GDDarkenObjects2.length = 0;
gdjs.Apartment_952Code.GDDarkenObjects3.length = 0;
gdjs.Apartment_952Code.GDMaskObjects1.length = 0;
gdjs.Apartment_952Code.GDMaskObjects2.length = 0;
gdjs.Apartment_952Code.GDMaskObjects3.length = 0;
gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects1.length = 0;
gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects2.length = 0;
gdjs.Apartment_952Code.GDNotification_9595close_9595btnObjects3.length = 0;


return;

}

gdjs['Apartment_952Code'] = gdjs.Apartment_952Code;
