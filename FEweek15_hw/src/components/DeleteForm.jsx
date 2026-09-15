import { useState } from "react";
import { useDeleteUser } from "../hooks/useDeleteUser";

function DeleteForm() {
  const [userId, setUserId] = useState("");

  const { mutate } = useDeleteUser();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userId.trim()) return;

    mutate(userId);

    setUserId("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="삭제할 사용자명 입력"
      />

      <button type="submit">
        삭제
      </button>
    </form>
  );
}

export default DeleteForm;