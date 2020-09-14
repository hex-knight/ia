import React, { useState } from 'react';
import './App.css';

import { Chatbot } from 'react-chatbot-kit';
import config from './Chatbot/config';
import MessageParser from './Chatbot/MessageParser';
import ActionProvider from './Chatbot/ActionProvider';
import {Button, Modal} from 'antd';

function App() {
  const [visible, setvisible] = useState(false)

  function closeModal(){
    setvisible(false);
  }

  function openModal(){
    setvisible(true);
  }


  return (
    <div className="App">
      <Modal
        title="Tarea 1 - Chatbot"
        visible={visible}
        onOk={() => closeModal()}
        onCancel={() => closeModal()}
        >
          <h4>Alumno</h4>
          <p>Mariscal Fernández Eduardo David</p>
          <h4>Código</h4>
          <p>213548579</p>
          <h4>Correo</h4>
          <a href="mailto:eduardo.mariscal5485@alumnos.udg.mx">
                eduardo.mariscal5485@alumnos.udg.mx
          </a>
          <h4>Materia</h4>
          <p>Inteligencia Artificial</p>
        </Modal>
      <header className="App-header">
        Tarea 1
        
        <Chatbot 
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        />
        <br />
        <Button type="primary"
        onClick={() => openModal()}>
          Información del Alumno
        </Button>
      </header>
    </div>
  );
}

export default App;

