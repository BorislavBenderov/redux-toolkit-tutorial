import { AddPostForm } from "./components/AddPostForm";
import { Counter } from "./components/Counter";
import { PostsList } from "./components/PostsList";

function App() {
  return (
    <div className="App">
      <PostsList />
      <AddPostForm />
    </div>
  );
}

export default App;
