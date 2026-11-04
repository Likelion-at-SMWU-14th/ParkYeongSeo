import { useState } from "react";
import { useUpdateUser } from "../hooks/useUpdateUser";

function UpdateForm() {
  const [username, setUsername] = useState("");
  const { mutate } = useUpdateUser();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) return;

    mutate({
      userId: 1,
      username,
    });

    setUsername("");
  };

  return (
    <form onSubmit={handleSubmit}>
    <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="수정할 사용자명 입력"
    />


    <button type="submit">
      수정
    </button>
    </form>
  );
}

export default UpdateForm;