//download the automation scripts zip file, extracts zip file, invokes automation start
function invokeJasmineAutomation() {
    if (appConfig.testAutomationURL == undefined || appConfig.testAutomationURL == null || appConfig.testAutomationURL == "" || !appConfig.testAutomationURL.startsWith("http")) {
        //invalid server automation server url.
        kony.print("invalid server automation server url.")
        return;
    }

    try {
        var metaInfoURL = appConfig.testAutomationURL + getChannelName() + "metaInfo.js";
        var ipAddress = appConfig.testAutomationURL.split('://')[1].split(':')[0];
        if(null != _getIpAddress()) {
            ipAddress = _getIpAddress();
            metaInfoURL = "http://"+ipAddress+":8888/testresources/"+
                appConfig.testAutomationURL.split('testresources/')[1] + getChannelName() + "metaInfo.js";
        }
        var metaInfoRequest = new kony.net.HttpRequest();
        metaInfoRequest.open(constants.HTTP_METHOD_GET, metaInfoURL, false);
        metaInfoRequest.onReadyStateChange = function() {
            if (metaInfoRequest.readyState == constants.HTTP_READY_STATE_DONE) {
                if (metaInfoRequest.status == 200) {
                    try {

//                        var ipAddress = appConfig.testAutomationURL.split('://')[1].split(':')[0];
                        //TODO: presently, staring client if file is present
                        kony.automation.startAutomationClient(ipAddress);
                        /*if(metaInfoRequest.response.automationWindowOpened){
                            kony.automation.startAutomationClient();
                        } else {
                            fetchAutomationScripts();
                        }*/
                    }
                    catch (e) {
                        kony.print("unable to read file metaInfo.json");
                        logError(e);
                    }
                }
                else if(metaInfoRequest.status == 404) {
                    //there is no file yet so starting the regular playback
                    //kony.automation.startAutomationClient();
                    fetchAutomationScripts();
                }
                else{
                    kony.print("failed to start automation");
                }
            }
        };
        metaInfoRequest.send();
    }catch(e) {
        logError(e);
    }

}

function _getIpAddress() {
    return kony.automation.getIPAddress();
}

function logError(e) {
        var err = kony.getError(e);
        if (err instanceof KonyError)
            kony.print("" + "\tMessage:" + err.Message);
    }

//Below function to write the data in files of data directory path of device.
function saveResponse(file, data, isRaw) {
    try {
        kony.print("data : " + data);
        if (file.exists()) {
            file.remove(true);
        }
        file.createFile();
        file.write(data, false);
        return file.fullPath;
    }
    catch (err) {
        kony.print("CATCH : saveResponse " + err);
    }
}
//Following function is to ensure the path and create files & directories in the data directory path of device.
function ensurePath(path) {
    try {
        kony.print("path" + path);
        var file = null;
        var bPath = kony.io.FileSystem.getDataDirectoryPath() + "\/";
        file = new kony.io.File(bPath + path);
        if (file.exists()) {
            file.remove();
            kony.print("removed existing scripts zip file.");
        }
        kony.print("file : " + file);
        return file;
    }
    catch (err) {
        kony.print("CATCH : ensurePath " + err);
    }
}

function fetchAutomationScripts() {
    try {
        var testResourceURL = appConfig.testAutomationURL;
        if(null != _getIpAddress()) {
            testResourceURL = "http://"+_getIpAddress()+":8888/testresources/"+
                appConfig.testAutomationURL.split('testresources/')[1];
        }
        var endUrl = testResourceURL + getChannelName() + getZipScriptsFileName();
        var request = new kony.net.HttpRequest();
        request.open(constants.HTTP_METHOD_GET, endUrl, false);
        request.onReadyStateChange = function () {

            if (request.readyState == constants.HTTP_READY_STATE_DONE) {
                if (request.status == 200) {
                    try {
                        kony.print("response: " + JSON.stringify(request.response));
                        var resulttable = request.response;
                        kony.print("typeof: " + typeof (resulttable));
                        kony.print("request.status : " + request.status);
                        var scripts_name = "AutomationScripts";

                        //save zip response
                        saveResponse(ensurePath(scripts_name + ".zip"), resulttable, true);


                        var bPath = kony.io.FileSystem.getDataDirectoryPath();
                        var extractedScriptsPath = bPath + constants.FILE_PATH_SEPARATOR + scripts_name;
                        var zipFilePath = bPath + constants.FILE_PATH_SEPARATOR + scripts_name + ".zip";

                        //remove existing AutomationScripts folder
                        var folder = new kony.io.File(extractedScriptsPath);
                        if (folder.exists()) {
                            folder.remove();
                        }

                        //unzip now
                        kony.io.unzip(zipFilePath, extractedScriptsPath);

                        //remove zip file
                        var file = new kony.io.File(zipFilePath);
                        file.remove();
                        //call native with sandbox memory folder path
                        kony.automation.start(extractedScriptsPath);
                    }
                    catch (e) {
                        kony.print("automation scripts download request successful. and failed to start.");
                        logError(e);
                    }
                }
                else {
                    kony.print("fetch automation scripts request.status: " + request.status);
                }
            }
            else {
                kony.print("fetch automation scripts request.readyState: " + request.readyState);
            }
        };
        request.send();
    }
    catch (e) {
        kony.print("fetch automation scripts download request failed.");
        logError(e);
    }
}

function getChannelName() {
    var result;
    var deviceInfo = kony.os.deviceInfo();
    var platformName = (deviceInfo.name).toLowerCase();

    if (platformName == "windows10" || platformName == "windows8" || platformName.indexOf("ipad") !== -1) {
        result = "Tablet/";
    }
    else if (platformName == "windows10mobile" || platformName == "WindowsPhone" || platformName.indexOf("iphone") !== -1){
        result = "Mobile/";
    }
    else if (platformName.indexOf("windows 10") !== -1 || platformName == "windows 7") {
        result = "Desktop/";
    }
    else if(platformName == "android") {
        result = "Mobile/";
        if((deviceInfo.deviceHeight / (160 * deviceInfo.density)) > 6 )
            result = "Tablet/";
    }
    else {
        kony.print("Failed to find the channel.")
    }
    return result;
}

function getZipScriptsFileName() {
    var deviceInfo = kony.os.deviceInfo();
    var platformName = (deviceInfo.name).toLowerCase();
    if(platformName.indexOf("ipad") !== -1 || platformName.indexOf("iphone") !== -1)
    {
       return "automationScripts.tar";
    }
    else
    {
        return "automationScripts.zip";
    }
}