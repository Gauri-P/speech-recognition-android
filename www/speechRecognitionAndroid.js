



var exec = require("cordova/exec");

/** 
    attribute SpeechGrammarList grammars;
    attribute DOMString lang;
    attribute boolean continuous;
    attribute boolean interimResults;
    attribute unsigned long maxAlternatives;
    attribute DOMString serviceURI;
 */
var speechRecognitionAndroid = function () {
    this.grammars = null;
    this.lang = "en";
    this.continuous = false;
    this.interimResults = false;
    this.maxAlternatives = 1;
    this.serviceURI = "";
    
    // event methods
    this.onaudiostart = null;
    this.onsoundstart = null;
    this.onspeechstart = null;
    this.onspeechend = null;
    this.onsoundend = null;
    this.onaudioend = null;
    this.onresult = null;
    this.onnomatch = null;
    this.onerror = null;
    this.onstart = null;
    this.onend = null;
	this.onpartialResults = null;
	this.onreadyForSpeech = null;

    exec(function() {
        console.log("initialized");
    }, function(e) {
        console.log("error: " + e);
    }, "speechRecognitionAndroid", "init", []);
};

speechRecognitionAndroid.prototype.start = function() {
    var that = this;
    var successCallback = function(event) {
        if (event.type === "audiostart")
		{
			console.log("audiostart")
			if (typeof that.onaudiostart === "function") {
			console.log("audiostart")
            that.onaudiostart(event);}
        } else if (event.type === "soundstart" && typeof that.onsoundstart === "function") {
            that.onsoundstart(event);
        } else if (event.type === "speechstart" && typeof that.onspeechstart === "function") {
            that.onspeechstart(event);
        } else if (event.type === "speechend" && typeof that.onspeechend === "function") {
            that.onspeechend(event);
        } else if (event.type === "soundend" && typeof that.onsoundend === "function") {
            that.onsoundend(event);
        } else if (event.type === "audioend" && typeof that.onaudioend === "function") {
            that.onaudioend(event);
        } else if (event.type === "result" && typeof that.onresult === "function") {
			console.log("Gauri:result");
            that.onresult(event);
        } else if (event.type === "nomatch" && typeof that.onnomatch === "function") {
            that.onnomatch(event);
        } else if (event.type === "start" && typeof that.onstart === "function") {
            that.onstart(event);
        } else if (event.type === "end" && typeof that.onend === "function") {
            that.onend(event);
        }else if (event.type === "partialResult" && typeof that.onpartialResults === "function") {
            that.onpartialResults(event);
        }else if (event.type === "readyForSpeech" && typeof that.onreadyForSpeech === "function") {
            that.onreadyForSpeech(event);
		}
    };
    var errorCallback = function(err) {
        if (typeof that.onerror === "function") {
            that.onerror(err.errorNumber);
        }
    };

    exec(successCallback, errorCallback, "speechRecognitionAndroid", "start", [this.lang]);
};

speechRecognitionAndroid.prototype.stop = function() {
    exec(null, null, "speechRecognitionAndroid", "stop", []);
};

speechRecognitionAndroid.prototype.abort = function() {
    exec(null, null, "speechRecognitionAndroid", "abort", []);
};

module.exports = speechRecognitionAndroid;
