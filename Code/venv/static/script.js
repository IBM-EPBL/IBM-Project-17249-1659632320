window.watsonAssistantChatOptions = {
    integrationID: "60aa23f1-dfdf-47b5-8a9d-ecb63cd36e35", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "5a23a371-b01d-42c5-beff-b0fb3dc03a88", // The ID of your service instance.
    onLoad: function(instance) { 

        instance.updateCSSVariables({
            'BASE-z-index': '8000',
            'BASE-font-family': '"Roboto", Sans, serif',
            '$focus': '#ff0000'
        });

        instance.render();
        window.webChatInstance = instance; 
    }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });

