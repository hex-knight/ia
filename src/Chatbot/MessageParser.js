import * as states from './States'
import axios from 'axios'

class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }

    searchWord = (word) =>{
        return axios.get(
            `https://api.dictionaryapi.dev/api/v2/entries/es/${word}`
            ).then( response =>{
                console.log(response.data)
                return response.data[0].meanings[0].definitions[0].definition
            }
            ).catch( error => {
                console.log(error)
                return "0";
            });
        
    }
  
    parse(message) {
      const lower = message.toLowerCase();

    //   if(lower.includes("hola") && this.state.estado === states.inicial){
    //       this.actionProvider.greetingHandler();
    //   }

    //   if(lower.includes("si"||"sí") && this.state.estado === 1){

    //   }
      switch (this.state.estado) {
          case states.inicial:
            if(lower.includes("hola")){
                this.actionProvider.greetingHandler();
            }       
              break;
            case states.inicio:
                if(lower.includes("si")||lower.includes("sí")){
                    this.actionProvider.responseHandler(
                        this.actionProvider.setEstado(states.inicio)
                        )
                }else if(lower.includes("no")){
                    this.actionProvider.responseHandler(
                        this.actionProvider.setEstado(states.explicacion)
                    )
                }
                break;
            case states.espera:
                if(lower !== ''){
                    this.actionProvider.responseHandler(
                        states.espera
                    )
                    setTimeout(async() => {
                        let result = await this.searchWord(lower)
                        this.actionProvider.postResult(result)
                     }, 1000);

                }
                break;
            case states.segundoInicio:
                if(lower.includes("si")||lower.includes("sí")){
                    this.actionProvider.responseHandler(
                        this.actionProvider.setEstado(states.inicio)
                        )
                }else if(lower.includes("no")){
                    this.actionProvider.responseHandler(
                        this.actionProvider.setEstado(states.salida)
                    )
                }
                break;
            case states.secondChance:
                if(lower.includes("hola")){
                    this.actionProvider.responseHandler(
                        this.actionProvider.setEstado(states.secondChance)
                    )
                }
                break;
            default:
                break;
      }

    }
  }
  
  export default MessageParser;
  