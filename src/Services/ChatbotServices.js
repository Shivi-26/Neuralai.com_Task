import React from 'react';
class ChatbotService {
    async getResponse(message) {
      const response = await fetch(`your-api-url-here?message=${message}`);
      const json = await response.json();
      //the ChatbotService component has a getResponse method that takes a user message and sends it to an API endpoint (replace your-api-url-here with the actual endpoint URL). The API endpoint 
      //returns a JSON object with a message property containing the chatbot's response.
      return json.message;
    }
  }
  
  export default new ChatbotService();
  