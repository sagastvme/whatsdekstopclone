<template>
    <div class="mb-1 select-none text-white gap-3 grid grid-cols-4 overflow-y-scroll bg-gray-500 h-48 w-1/3 rounded-lg shadow-2xl ml-2">

        <span v-for="emoji in emojis" :key="emoji" @click="addEmoji($event.target.innerText)"
              class="cursor-pointer hover:bg-gray-400">{{ emoji }}</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            emojis: [
                "\u{1F601}", "\u{1F602}", "\u{1F603}", "\u{1F604}", "\u{1F605}", "\u{1F606}", "\u{1F609}", "\u{1F60A}",
                "\u{1F60B}", "\u{1F60E}", "\u{1F60D}", "\u{1F618}", "\u{1F617}", "\u{1F619}", "\u{1F61A}", "\u{1F61C}",
                "\u{1F61D}", "\u{1F61B}", "\u{1F60F}", "\u{1F636}", "\u{1F610}", "\u{1F611}", "\u{1F612}", "\u{1F613}",
                "\u{1F614}", "\u{1F615}", "\u{1F616}", "\u{1F644}", "\u{1F910}", "\u{1F913}", "\u{1F645}", "\u{1F646}",
                "\u{1F647}", "\u{1F648}", "\u{1F649}", "\u{1F64A}", "\u{1F911}", "\u{1F912}", "\u{1F913}", "\u{1F914}",
                "\u{1F915}", "\u{1F917}", "\u{1F920}", "\u{1F921}", "\u{1F923}", "\u{1F924}", "\u{1F925}", "\u{1F926}",
                "\u{1F928}", "\u{1F929}", "\u{1F92A}", "\u{1F92B}", "\u{1F92C}", "\u{1F92D}", "\u{1F92E}", "\u{1F92F}",
                "\u{1F930}", "\u{1F931}", "\u{1F932}", "\u{1F933}", "\u{1F934}", "\u{1F935}", "\u{1F936}", "\u{1F937}",
                "\u{1F938}", "\u{1F939}", "\u{1F93A}", "\u{1F93C}", "\u{1F93D}", "\u{1F93E}", "\u{1F9D0}", "\u{1F9D1}",
                "\u{1F9D2}", "\u{1F9D3}", "\u{1F9D4}", "\u{1F9D5}", "\u{1F9D6}", "\u{1F9D7}", "\u{1F9D8}", "\u{1F9D9}",
                "\u{1F9DA}", "\u{1F9DB}", "\u{1F9DC}", "\u{1F9DD}", "\u{1F9DE}", "\u{1F9DF}", "\u{1F9E0}", "\u{1F9E1}",
                "\u{1F9E2}", "\u{1F9E3}"
            ]

        }
    },

    methods: {
        addEmoji(e) {
            this.$emit('addEmoji', e)
        }
    }
}
</script>
