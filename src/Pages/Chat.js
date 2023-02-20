import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './App.css';
import ChatbotService from '../Services/ChatbotServices'
function Chat() {
  const [messages, setMessages] = useState([]);
  //React props to pass messages and input between the component and the service.


  const sendMessage = (text) => {
    const newMessage = {
      text,
      sender: 'user'
    };
    setMessages([...messages, newMessage]);

    ChatbotService.getResponse(text).then((response) => {
      const botMessage = {
        text: response,
        sender: 'bot'
      };
      setMessages([...messages, botMessage]);
    });
  };
  //we have a ChatbotService that handles the chatbot logic and returns a response to the user input. The sendMessage function takes user input and adds it to the messages state. It then sends the user input to the ChatbotService and adds 
  //the response to the messages state. The App component renders the chat messages and input box using Bootstrap classes.

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="container mt-5 p-5 float-end mx-3">
          <div>
            <div className='mb-2 ms-5'>
              <img src='https://neuralmind.io/images/logo-techplus-x-template.svg' className='ms-5' />
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="chat">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`message ${message.sender === 'bot' ? 'bot' : 'user'}`}
                  >
                    {message.text}
                  </div>
                ))}
              </div>
              <div className='col-12 float-end'>
                <div class="container3 mt-5">
                  <div class="row">
                    <div class="col-2">

                    </div>
                    <div class="col-5">
                      <p className='para p-1'>I want to use Bing anymore.</p>
                    </div>
                    <div class="col-5">
                      <p className='para p-1'>i'm scared of u</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=''>
                <div className="input">
                <input class="form-control" id="exampleFormControlInput1" placeholder="Ask me anything....."
                    type="text"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        sendMessage(e.target.value);
                        e.target.value = '';
                      }
                    }
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
