import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import SignupForm from "./components/SignupForm";

function App() {
  return(
    <div>
      <h1>Posts</h1>
      <br />
      <SignupForm />
      <br/>
      <PostForm />
      <PostList />
    </div>
    );
  }

  export default App;