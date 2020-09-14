import * as messages from './ResponseConsts';
import * as states from './States';



class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
    greetingHandler = () => {
        const message = this.createChatBotMessage(messages.presentacion);
        this.setMessage(message);
        setTimeout(() => {
            const message2 = this.createChatBotMessage(messages.primeraPregunta);
            this.setMessage(message2);
        },600);
        this.setEstado(1)
    }

    responseHandler = (estadoActual) =>{
        let message;
        // if(estadoActual === states.explicacion){
        //     message = this.createChatBotMessage(messages.explicacion);
        //     this.setMessage(message);
        //     setTimeout(() =>{
        //         message = this.createChatBotMessage(messages.inicio)
        //         this.setMessage(message)},
        //         1000
        //     )
        // }else if(estadoActual === states.espera){
            
            
        // }
        switch (estadoActual) {
            case states.explicacion:
                message = this.createChatBotMessage(messages.explicacion);
            this.setMessage(message);
            setTimeout(() =>{
                message = this.createChatBotMessage(messages.inicio)
                this.setMessage(message)},
                1000
            )
            this.setEstado(states.espera);
                break;
            case states.inicio:
                message = this.createChatBotMessage(messages.segundoInicio)
            this.setMessage(message)
            this.setEstado(states.espera);
                break;
            case states.espera:
                message = this.createChatBotMessage(messages.buscando)
                this.setMessage(message);
                this.setEstado(states.segundoInicio);
                break;
            case states.salida:
                message = this.createChatBotMessage(messages.rechazo)
                this.setMessage(message)
                setTimeout(() => {
                    message = this.createChatBotMessage(messages.aviso)
                    this.setMessage(message)
                }, 1000);
                this.setEstado(states.secondChance)
                break;
            case states.secondChance:
                message = this.createChatBotMessage(messages.secondChance)
                this.setMessage(message);
                this.setEstado(states.espera);
                break;
            default:
                break;
        }
    }

    postResult = (result) =>{
        let message;
        if(result==="0"){
            message = this.createChatBotMessage(messages.error)
            this.setMessage(message);
        }else{
            message = this.createChatBotMessage(messages.resultado)
            this.setMessage(message);
            message = this.createChatBotMessage(result)
            this.setMessage(message);
        }
        setTimeout(() => {
            message = this.createChatBotMessage(messages.tercerInicio)
        this.setMessage(message);
        }, 500);
        this.setEstado(states.segundoInicio);
    }

    setEstado = (estadoSig) => {
        this.setState( state => ({ ...state,
        estado: estadoSig}))
        return estadoSig;
    }
  
    setMessage = (message) =>{
        this.setState( state => ({ ...state, 
      messages: [...state.messages, message]}))
    }






  }
  
  export default ActionProvider;