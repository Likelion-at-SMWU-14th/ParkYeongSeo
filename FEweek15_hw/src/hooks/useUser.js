import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/users";

export const useUser = (userId) => {
  return useQuery({
    queryKey: ["myPage", userId],
    queryFn: () => fetchUsers(userId),

    staleTime: 30 * 1000,
    retry: 3,
  });
};