<template>
    <div class="w-full mt-10 mb-10 ">

        <ul>
            <li v-for="(message, index) in this.getMessages" :key="index">
                <div class=" my-2  "
                     :class="message.sender==='Alice' ? 'flex justify-start ml-5' : 'flex justify-end mr-5'">

                    <div class=" flex flex-row rounded-t-3xl  p-4 mb-2"
                         :class="message.sender==='Alice' ? 'rounded-r-3xl bg-gray-700' : 'bg-green-900 rounded-l-3xl rounded-t-3xl'">
                        <p>{{ message.content }}</p>

                        <p class="mt-5 flex flex-row ">{{ message.timestamp }}
                            <double-tick-icon v-if="message.status === 'delivered' || message.status === 'read'
" class="ml-2" :class="message.status==='read' ? 'text-blue-500' : '' "/>
                            <one-tick-icon v-else class="ml-2 mt-1"/>
                        </p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>


<script>


import {mapGetters, mapMutations} from "vuex";
import DoubleTickIcon from "@/assets/icons/DoubleTickIcon.vue";
import OneTickIcon from "@/assets/icons/OneTickIcon.vue";

export default {
    name: 'MessagePanel',
    components: {OneTickIcon, DoubleTickIcon},
    data() {
        return {};
    },
    computed: {
        ...mapGetters(['getMessages'])
    },
    mounted() {

        this.$emit('moveChat')


    },
    methods: {
        ...mapMutations(['addMessage'])
    }
};
</script>