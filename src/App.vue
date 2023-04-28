<template>
    <div class="hidden md:block md:h-screen  md:flex ">
        <the-left-container/>
        <the-right-container/>
    </div>
    <div class="md:hidden text-center flex  items-center h-screen bg-gradient-to-tr from-black to-green-500">
        <h1 class="mb-40  text-3xl text-white font-bold text-center py-8">
            Sorry, but this is a <span class="underline">WhatsApp Desktop clone</span>, so you <span class="italic">can't</span>
            see it on your phone. Thanks for checking it out!
        </h1>
    </div>
</template>

<script>

import TheRightContainer from "@/components/TheRightContainer.vue";
import TheLeftContainer from "@/components/TheLeftContainer.vue";

export default {
    name: 'App',
    components: {
        TheLeftContainer,
        TheRightContainer,

    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;


}

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background-color: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 2px;
}

::-webkit-scrollbar-thumb:hover {
    background-color: #555;
}

body {
    scrollbar-width: inherit;
}

/* For Firefox */
body {
    scrollbar-color: #888 #f1f1f1;
}

/* For Chrome and Safari */
::-webkit-scrollbar-thumb {
    background-color: #888;
}

::-webkit-scrollbar-track {
    background-color: darkgray;
}


</style>

