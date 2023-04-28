//index.js
import  {createStore} from "vuex";
import messages from '@/messages.json';
const store = createStore({

    state() {
        return {
            clickedContact:false,
            clickedContactName:'Neymar JR',
            clickedContactPicture:'',
            messages: messages.messages,
        }
    },
    getters:{
        getClickedContact(state){
            return state.clickedContact
        },
        getClickedContactName(state){
            return state.clickedContactName
        },
        getClickedContactPicture(state){
            return state.clickedContactPicture
        },
        getMessages(state){
            return state.messages
        }
    },
    mutations:{
        addMessage(state, message){
            state.messages.push(message)
            console.log(state.messages)
        },
        setClickedContact(state){
             state.clickedContact =true
        },
    }

});


export default store