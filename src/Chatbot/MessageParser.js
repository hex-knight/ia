class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      const lower = message.toLowerCase();

      if(lower.includes("hola")){
          this.actionProvider.greetingHandler();
      }
    }
  }
  
  export default MessageParser;
  