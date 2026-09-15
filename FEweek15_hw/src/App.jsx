import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import SignupForm from "./components/SignupForm";
import UpdateForm from "./components/UpdateForm";
import DeleteForm from "./components/DeleteForm";

function App() {
  return(
    <div>
      <h1>Posts</h1>
      <SignupForm />
      <UpdateForm />
      <DeleteForm />
      <PostForm />
      <PostList />
    </div>
    );
  }

  export default App;