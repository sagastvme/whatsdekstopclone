<template>
    <div @click="setClickedContact"
         class=" hover:cursor-pointer hover:bg-gray-500 bg-gray-900 text-white flex items-center h-16 w-full border-b border-b-gray-500 py-10 ">
        <div class=" h-full  flex items-center    ">
            <img class="  h-14  rounded-full ml-2"
                 src="https://pps.whatsapp.net/v/t61.24694-24/340534384_196924629790337_3417524613970873582_n.jpg?stp=dst-jpg_s96x96&amp;ccb=11-4&amp;oh=01_AdRKTgnC44h1kwW3ExFGKPaFq4pIGPkkT7RALWpMULg_QA&amp;oe=6457CC2C">
        </div>
        <div class="flex  -ml-5 flex-col ">
            <span class="text-left ml-8">Neymar Jr</span>
            <div class="flex flex-row">
                <double-tick-icon v-if="this.getMessages[randomNumber].status === 'delivered' || this.getMessages[randomNumber].status === 'read'
" class="ml-8 mt-0.5" :class="this.getMessages[randomNumber].status==='read' ? 'text-blue-500' : '' "/>
                <one-tick-icon v-else class="ml-8 mt-1.5"/>
                <span class=" flex flex-row ml-2 ">{{ this.getMessages[randomNumber].content }}</span>
            </div>

        </div>
    </div>
</template>

<script>
import DoubleTickIcon from "@/assets/icons/DoubleTickIcon.vue";
import {mapGetters, mapMutations} from "vuex";
import OneTickIcon from "@/assets/icons/OneTickIcon.vue";

export default {
    name: "ConversationPreview",
    components: {OneTickIcon, DoubleTickIcon},
    methods: {
        ...mapMutations(['setClickedContact'])
    },
    computed: {
        ...mapGetters(['getMessages'])
    },
    data(){
        return{
            randomNumber : Math.floor(Math.random() * 15)
        }
    }

}
</script>
