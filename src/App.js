import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <h1>posts</h1>
      <PostList />
    </div>
  );
}

export default App;
