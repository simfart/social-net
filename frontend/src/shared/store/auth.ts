import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface IAuthStore {
  isLoggedIn: boolean
  setIsLoggedIn: (payload: boolean) => void
}

export const useAuthStore = create<IAuthStore>()(
  devtools(
    immer((set) => ({
      isLoggedIn: !!window.localStorage.getItem('jwt'),
      setIsLoggedIn: (payload) =>
        set((state) => {
          state.isLoggedIn = payload
        }),
    })),
  ),
)

const test1: Record<string, Array<string | number>> = { ['string']: [1, '2'] }
const test2: Record<string, Record<string, Array<number | string>>> = {
  ['string']: { ['string']: [1, '2'] },
}
