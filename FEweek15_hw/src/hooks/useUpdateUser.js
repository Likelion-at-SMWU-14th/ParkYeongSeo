import { useMutation,useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../api/users";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUser,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["myPage"],
      });
      alert("수정이 완료되었습니다.");
    },
  });
};