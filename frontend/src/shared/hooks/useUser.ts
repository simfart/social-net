import { useQuery } from 'react-query'
import { getUser } from 'shared/api'
import { User } from 'shared/types'

export const useUser = () => useQuery<User>('user', getUser)
