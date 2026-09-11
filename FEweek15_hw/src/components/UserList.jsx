import { useUser } from "../hooks/useUser";

function UserList() {
  const userId = 1;

  const {
    data: user,
  } = useUser(userId);

  return (
    <div>
      <h2>마이페이지</h2>

      <p>ID: {user.id}</p>
      <p>사용자명: {user.username}</p>
    </div>
  );
}

export default UserList;