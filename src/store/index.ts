import { useCollectionStore } from './collectionStore'
import { useHomeStore } from './homeStore'
import useUserStore from './userStore'
const useStore = () => {
    return {
        collection: useCollectionStore(),
        homeStore: useHomeStore(),
        userStore: useUserStore(),
    }
}
export default useStore
