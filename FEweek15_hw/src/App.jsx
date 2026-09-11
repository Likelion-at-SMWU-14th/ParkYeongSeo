import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import SignupForm from "./components/SignupForm";
import UpdateForm from "./components/UpdateForm";
import UserList from "./components/UserList";

function App() {
  return(
    <div>
      <h1>Posts</h1>
      <SignupForm />
      <UpdateForm />
      <UserList />
      <PostForm />
      <PostList />
    </div>
    );
  }

  export default App;