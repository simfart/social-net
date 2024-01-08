import { useQuery } from 'react-query'
import { getUser } from "shared/api";


export const useUser = () => useQuery('user', getUser)
