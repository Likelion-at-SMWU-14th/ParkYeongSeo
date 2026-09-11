import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import SignupForm from "./components/SignupForm";
import UpdateUserForm from "./components/UpdateUserForm";

function App() {
  return(
    <div>
      <h1>Posts</h1>
      <SignupForm />
      <UpdateUserForm />
      <PostForm />
      <PostList />
    </div>
    );
  }

  export default App;