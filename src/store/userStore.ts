import {defineStore} from 'pinia'
import {openUser} from '@/types/userType'
const useUserStore = defineStore('userStore',{
    state() {
        return {
            isFirstLogin:false as  boolean,
        }
    },
})

export default useUserStore