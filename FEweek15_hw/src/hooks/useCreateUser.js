import { useMutation } from "@tanstack/react-query";
import { createUser } from "../api/users";

export const useCreateUser = () => {
  return useMutation({
    mutationFn: createUser,

    onSuccess: () => {
      alert("환영합니다");
    },

    onError: (error) => {
      console.error("회원가입 실패:", error.message);
    },
  });
};