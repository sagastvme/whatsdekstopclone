<template>
    <div class=" w-3/5 h-full border-l border-l-gray-500">
        <div class=" h-full  text-white
    flex justify-center items-center bg-gray-700  flex flex-col overflow-y-hidden " v-if="!this.getClickedContact">

            <ThePhoneAndPcIcon class="  w-2/3 lg:w-2/5 mx-auto pt-28"/>

            <h1 class="text-4xl pb-16">Whatsapp Web by EduGomSags</h1>
            <div class=" flex flex-col  ">
                <span>Envía y recibe mensajes sin necesidad de tener tu teléfono conectado.</span>
                <span>Usa WhatsApp en hasta 4 dispositivos vinculados y 1 teléfono a la vez.</span>
            </div>
            <span class="h-20 flex flex-row justify-center mx-auto w-3/5 mt-48 mb-4">
                <lock-icon class="mt-1.5 mr-4 "/>
                cifrado de extremo a extremo</span>

            <div class="h-2 fixed  bottom-0 bg-green-400 w-3/5">
                &nbsp;
            </div>
        </div>


        <div id="chat" class=" h-full flex flex-col bg-gray-900" v-else>
            <div class="bg-gray-700 h-14 flex items-center py-4">
                <img class="cursor-pointer h-12 rounded-full ml-4" :src="ProfilePicture">
                <span class="text-white ml-4">{{ this.getClickedContactName }}</span>
                <div class="flex ml-auto mr-8 gap-6 text-white items-center">
                    <search-icon @click="search" class="cursor-pointer"/>
                    <three-dots @click="openMenu=!openMenu" class="cursor-pointer"/>
                </div>
            </div>

            <div v-if="openSearch" class=" p-4 h-8 flex justify-center items-center">
                <input ref="searchInput" type="text" class="pl-4 bg-gray-700 w-3/4  rounded-lg text-gray-300"
                       placeholder="Busque un mensaje aqui">

            </div>


            <div v-if="openMenu" class=" ml-auto  mr-4 w-1/4">
                <ul class="text-white select-none bg-gray-400 rounded-lg shadow-2xl">
                    <li class="py-4 hover:bg-gray-700 hover:rounded-lg ">Info. del contacto</li>
                    <li class="py-4 hover:bg-gray-700 hover:rounded-lg">Seleccionar mensajes</li>
                    <li class="py-4 hover:bg-gray-700 hover:rounded-lg">Cerrar chat</li>
                    <li class="py-4 hover:bg-gray-700 hover:rounded-lg">Silenciar notificaciones</li>
                    <li class="py-4 hover:bg-gray-700 hover:rounded-lg">Mensajes temporales</li>
                    <li class="py-4 hover:bg-gray-700 hover:rounded-lg">Vaciar mensajes</li>
                    <li class="py-4 hover:bg-gray-700 hover:rounded-lg">Eliminar chat</li>
                    <li class="py-4 hover:bg-gray-700 hover:rounded-lg">Reportar</li>
                    <li class="py-4 hover:bg-gray-700 hover:rounded-lg">Bloquear</li>
                </ul>
            </div>


            <div ref="panel" class="overflow-y-scroll  flex flex-grow text-white  ">

                <message-panel @moveChat="move"/>

            </div>


            <div class="mt-auto ">
                <emoji-panel @addEmoji="messageModify" v-if="openEmojiMenu"/>

                <div class="flex  gap-5 flex-row items-center bg-gray-800 w-full  h-16 ">
                    <emoji-icon @click="openEmojiMenu=!openEmojiMenu"
                                class="cursor-pointer ml-8 text-gray-400 w-8"></emoji-icon>
                    <input class="hidden" type="file" name="" id="clip">
                    <label for="clip">
                        <clip-icon class="cursor-pointer text-gray-400 w-8"></clip-icon>
                    </label>
                    <form @submit.prevent="prepareMessage" class="flex-row  flex w-4/5  h-1/2">
                        <input required type="text" v-model.trim="hasTyped"
                               class="pl-4 bg-gray-700 w-full rounded-lg text-gray-300"
                               placeholder="Escribe un mensaje aqui">

                    </form>
                    <div class="flex  mr-4  flex-row">
                        <mic-icon @click="startRecording" class="cursor-pointer text-gray-400   w-full"
                                  v-if="!this.hasClicked"></mic-icon>
                        <button v-else>
                            <send-icon class="cursor-pointer text-gray-400  "></send-icon>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div>


</template>

<script>
import ThePhoneAndPcIcon from "@/assets/icons/ThePhoneAndPcIcon.vue";
import LockIcon from "@/assets/icons/LockIcon.vue";
import {mapGetters, mapMutations} from "vuex";
import ThreeDots from "@/assets/icons/ThreeDots.vue";
import SearchIcon from "@/assets/icons/SearchIcon.vue";
import ProfilePicture from '../assets/neymar.jpg'
import EmojiIcon from "@/assets/icons/EmojiIcon.vue";
import ClipIcon from "@/assets/icons/ClipIcon.vue";
import MicIcon from "@/assets/icons/MicIcon.vue";
import SendIcon from "@/assets/icons/SendIcon.vue";
import EmojiPanel from "@/components/EmojiPanel.vue";
import MessagePanel from "@/components/MessagePanel.vue";

export default {
    name: "TheRightContainer",
    components: {
        MessagePanel,
        EmojiPanel,
        SendIcon,
        MicIcon,
        ClipIcon,
        EmojiIcon,
        SearchIcon,
        ThreeDots,
        LockIcon,
        ThePhoneAndPcIcon,
    },
    computed: {
        hasClicked() {
            if (this.hasTyped === '') {
                return false
            } else {
                return true
            }
        },

        ...mapGetters(['getClickedContact', 'getClickedContactName', 'getClickedContactPicture']),
        ProfilePicture() {
            return ProfilePicture;
        }
    },
    data() {
        return {
            hasTyped: '',

            openMenu: false,
            openEmojiMenu: false,
            openSearch: false,
            status: ['sent', 'read', 'delivered']
        }
    },
    methods: {
        startRecording() {
            navigator.mediaDevices.getUserMedia({audio: true})
                .then(stream => {
                    console.log('Microphone access granted', stream);

                })
                .catch(error => {
                    console.log('Microphone access denied', error);

                });
        },
        messageModify(e) {
            this.hasTyped = this.hasTyped + '' + e
        },
        search() {
            this.openSearch = !this.openSearch
            if (this.openSearch) {
                setTimeout(() => {
                        this.$refs.searchInput.focus()
                    },
                    1);
            }

        },
        prepareMessage() {
            const randomStatus = Math.floor(Math.random() * 3);
            this.addMessage({
                sender: 'Bob',
                content: this.hasTyped,
                status: this.status[randomStatus],
                timestamp: new Date().getHours() + ':' + new Date().getMinutes().toString().padStart(2, '0')
            })
            this.hasTyped = '',
                this.$nextTick(() => {
                    this.$refs.panel.scrollTop = this.$refs.panel.scrollHeight;
                });
        },
        move() {
            this.$nextTick(() => {
                this.$refs.panel.scrollTop = this.$refs.panel.scrollHeight;
            });
        },
        ...mapMutations(['addMessage'])

    },


}

</script>

<style scoped>
#chat {
    background-image: url("https://camo.githubusercontent.com/854a93c27d64274c4f8f5a0b6ec36ee1d053cfcd934eac6c63bed9eaef9764bd/68747470733a2f2f7765622e77686174736170702e636f6d2f696d672f62672d636861742d74696c652d6461726b5f61346265353132653731393562366237333364393131306234303866303735642e706e67");
}
</style>