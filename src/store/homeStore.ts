
import { defineStore } from 'pinia'
import {billType} from '@/types/orderType'

export const useHomeStore = defineStore('homeStore', {
    state: () => {
        return {
            bill:{} as billType
        }
    },
})
