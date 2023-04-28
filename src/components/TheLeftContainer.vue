<template>
    <div class="flex flex-col bg-gray-900 w-2/5 h-full">
        <top-bar-left-container/>
        <div class="flex-grow bg-red-950 overflow-y-scroll">
            <conversation-preview v-for="n in 20" :key="n"/>
        </div>
    </div>

</template>

<script>
import ConversationPreview from "@/components/ConversationPreview.vue";
import TopBarLeftContainer from "@/components/TopBarLeftContainer.vue";

export default {
    name: "TheLeftContainer",
    components: {
        TopBarLeftContainer,
        ConversationPreview,


    },
    data() {
        return {
            placeholder: ''
        }
    }
}
</script>
