<template>
    <div class="bg-gray-700 h-14 flex items-center py-4">
        <img class="cursor-pointer h-12 rounded-full ml-4"
             src="https://pps.whatsapp.net/v/t61.24694-24/340534384_196924629790337_3417524613970873582_n.jpg?stp=dst-jpg_s96x96&amp;ccb=11-4&amp;oh=01_AdRKTgnC44h1kwW3ExFGKPaFq4pIGPkkT7RALWpMULg_QA&amp;oe=6457CC2C">
        <div class="flex ml-auto mr-8 gap-6 text-white items-center">
            <people-icon class="cursor-pointer"/>
            <stories-icon class="cursor-pointer"/>
            <new-chat-icon class="cursor-pointer"/>
            <three-dots class="cursor-pointer"/>
        </div>
    </div>
    <div class="h-10">
        <div class="h-full flex-row flex items-center mb-4">
            <button class="w-1/12 flex items-center justify-center text-white rounded-l-lg h-7 ml-3 bg-gray-700">
                <search-icon/>
            </button>
            <input placeholder="Busca un chat o inicia uno nuevo." type="text"
                   class="rounded-r-lg text-gray-400 h-7 w-10/12 bg-gray-700">
            <kebab-menu class="mx-auto text-white cursor-pointer"/>
        </div>
    </div>
    <div class="h-20 flex items-center border-b-gray-500 border-b ">
        <archived-icon class="cursor-pointer ml-7 mr-5  text-green-600"/>
        <span class="text-white ">Archivados</span>
    </div>
</template>

<script>
import ArchivedIcon from "@/assets/icons/ArchivedIcon.vue";
import StoriesIcon from "@/assets/icons/StoriesIcon.vue";
import ThreeDots from "@/assets/icons/ThreeDots.vue";
import KebabMenu from "@/assets/icons/KebabMenu.vue";
import PeopleIcon from "@/assets/icons/PeopleIcon.vue";
import NewChatIcon from "@/assets/icons/NewChatIcon.vue";
import SearchIcon from "@/assets/icons/SearchIcon.vue";

export default {
    name: "TopBarLeftContainer",
    components: {SearchIcon, NewChatIcon, PeopleIcon, KebabMenu, ThreeDots, StoriesIcon, ArchivedIcon}
}
</script>
