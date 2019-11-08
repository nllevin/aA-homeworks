import React from "react";
import { Route } from "react-router-dom";
import PostIndex from "./posts/PostIndex";
import CreatePost from "./posts/CreatePost";
import Register from "./Register";

const App = () => (
  <div>
    <h1>Hellloooo World!</h1>
    <Route exact path="/posts" component={PostIndex} />
    <Route path="/posts/new" component={CreatePost} />
    <Route exact path="/signup" component={Register} />
  </div>
);

export default App;
