import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useCounterStore = defineStore('counter', () => {

    //state
    const count = ref(1)

    //getter 
    const doubleCount = computed(() => count.value * 2)

    //action
    const add = () => count.value++

    return {
        count,
        doubleCount,
        add
    }
})