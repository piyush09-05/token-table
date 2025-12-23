import { useQuery } from '@tanstack/react-query'
import { fetchTokens } from '../services/token-api-sevice';

export const useTokens = () => {
  return useQuery({
    queryKey: ['tokens'],
    queryFn: fetchTokens,
  })
}
