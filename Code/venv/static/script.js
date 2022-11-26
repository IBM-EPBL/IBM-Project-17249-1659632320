var feedbackText = "Are you satisfied with the Chatbot experience?";
var endText = "Thank you and have a nice day!";

window.watsonAssistantChatOptions = {
    integrationID: "60aa23f1-dfdf-47b5-8a9d-ecb63cd36e35", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "5a23a371-b01d-42c5-beff-b0fb3dc03a88", // The ID of your service instance.
    onLoad: function(instance) {
      var endReached = false;
      // Event handlers
      function feedbackHandler(obj) {
        // Record user feedback
        if (obj.type == "send" && endReached) {
          var isSuccessful = 0;
          if (obj.data.input.text == "Yes") {
            isSuccessful = 1;
          }
          fetch('http://127.0.0.1:5000/write?isSuccessful=' + isSuccessful);
          endReached = false;
        }
        // Check Assistant response
        else if (obj.type == "receive") {
          var output = obj.data.output.generic;
          // console.log(obj.data);
          try {
            if (output[0].text == endText) {
              setTimeout(() => instance.closeWindow(), 5000);
            }
            else if (output[output.length - 2].text == feedbackText) {
              endReached = true;
            }
          }
          catch {
            return;
          }
        }
      }
        instance.updateCSSVariables({
            'BASE-z-index': '8000',
            'BASE-font-family': '"Roboto", Sans, serif',
            '$focus': '#ff0000'
        });

        instance.on({ type: "receive", handler: feedbackHandler });
        instance.on({ type: "send", handler: feedbackHandler });

        instance.render();
        window.webChatInstance = instance; 
    }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });

