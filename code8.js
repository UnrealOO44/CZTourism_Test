gdjs.ExitCode = {};
gdjs.ExitCode.localVariables = [];
gdjs.ExitCode.idToCallbackMap = new Map();


gdjs.ExitCode.eventsList0 = function(runtimeScene) {

};

gdjs.ExitCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.ExitCode.eventsList0(runtimeScene);


return;

}

gdjs['ExitCode'] = gdjs.ExitCode;
