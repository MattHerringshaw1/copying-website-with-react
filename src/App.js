import { Component } from "react";
import Menu from "./components/Menu";
import Articles from "./components/Articles";
import FeaturedArticle from "./components/FeaturedArticle";

class App extends Component {

  // constructor() {
  //   super()
  //   this.articles = [{}]
    
  // }

  render() {
    return (
      <>
        <Menu />
        <FeaturedArticle />
        <Articles />
        
      </>
    )
  }

}

export default App;
