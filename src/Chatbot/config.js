import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [createChatBotMessage(`Hola Humano!`)],
  botName: 'Bot-diccionario',
  state:{
      estado: 0
  }
}

export default config