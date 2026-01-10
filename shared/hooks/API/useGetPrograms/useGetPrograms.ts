import { apiClient } from "@/api/ApiClient"
import { queryKeys } from "@/api/queryKeys"
import { programsAtom } from "@/store/Programs/Programs"
import { useQuery } from "@tanstack/react-query"
import { useAtom } from "jotai"
import { useEffect } from "react"

export const useGetPrograms = () => {
  const [, setProgramsFromStore] = useAtom(programsAtom);

  const {
    data: programs,
    isPending: isLoadingPrograms,
    isSuccess: isSuccess,
    isError: isErrorPrograms
  } = useQuery({
    queryKey: queryKeys.useGetPrograms(),
    queryFn: async () => await apiClient.getPrograms(),
  })

  useEffect(() => {
    if (programs) {
      setProgramsFromStore(programs.map(p => [p.name, p]))
    }
  }, [isSuccess])

  return {
    programs,
    isLoadingPrograms,
    isErrorPrograms,
  }
}