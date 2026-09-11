import { useState } from "react";
import { useCreateUser } from "../hooks/useCreateUser";

function SignupForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { mutate } = useCreateUser();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username.trim() || !password.trim()) return;

        mutate({
            username,
            password,
        });

        setUsername("");
        setPassword("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="사용자명 입력"
            />

            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호 입력"
            />

            <button type="submit">
                가입
            </button>
        </form>
    );
}

export default SignupForm;