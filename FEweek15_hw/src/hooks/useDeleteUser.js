import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { deleteUser } from "../api/users";

export const useDeleteUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteUser,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["myPage"],
            });
        alert("성공적으로 삭제되었습니다.");
    },

    onError: (error) => {
        console.error("회원삭제 실패", error.message);
    },
  });
};