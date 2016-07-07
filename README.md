# speech-recognition-android
Speech recognition plugin for Android. This plugin is heavily based on [SpeechRecognitionPlugin](https://github.com/macdonst/SpeechRecognitionPlugin). I have removed iOS part and added few changes like partial results

<p>To install this plugin use </p>
<pre><code>cordova plugin add https://github.com/Gauri-P/speech-recognition-android
</code></pre>

<p> Example Usage </p>
<pre><code>var recognition = new speechRecognitionAndroid();
        recognition.onresult = function(event) 
        {
				   if (event.results.length > 0) 
				   {
                $scope.recognizedText = event.results[0][0].transcript;
                alert($scope.recognizedText);
           }
        };
</code></pre>
