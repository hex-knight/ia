import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Chatbot } from 'react-chatbot-kit';
import config from './Chatbot/config';
import MessageParser from './Chatbot/MessageParser';
import ActionProvider from './Chatbot/ActionProvider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Tarea 1
        <Chatbot 
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        />
      </header>
    </div>
  );
}

export default App;
