import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

// Pages
import Home from "../pages/home";
import About from "../pages/about";
import Register from "../pages/register";
import Contact from "../pages/contact";
import Layout from "../pages/layout";

// Routes
class Main extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          id: "0",
          description: "Placholder1",
          imageLink: "https://via.placeholder.com/150"
        },
        {
          id: "1",
          description: "Placholder2",
          imageLink: "https://via.placeholder.com/150"
        }
      ]
    };
    this.removePhoto = this.removePhoto.bind(this);
    // console.log('Constructor')
  }

  removePhoto(postsRemoved) {
    console.log(postsRemoved.description);
    this.setState(state => ({
      posts: state.posts.filter(post => post !== postsRemoved)
    }));
  }

  componentDidMount() {
    console.log("Component Did Mount");
  }

  componentDidUpdate() {
    alert("re-render");
  }

  render() {
    console.log("Render");
    return (
      <BrowserRouter>
        <Route exact path="/" component={Layout} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/register" component={Register} />
        <Route path="/contact" component={Contact} />
      </BrowserRouter>
    );
  }
}

export default Main;