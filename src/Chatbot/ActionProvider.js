class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
    greetingHandler = () => {
        const message = this.createChatBotMessage("¿Cuál es tu nombre?");
        this.setMessage(message);
    }
  
    setMessage = (message) =>{
        this.setState( state => ({ ...state, 
      messages: [...state.messages, message]}))
    }




  }
  
  export default ActionProvider;