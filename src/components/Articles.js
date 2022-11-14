import { Component } from "react";
import "../styling/articles.css"

class Articles extends Component {
    render() {
        return (
            <>
            <div class="article">
                <h4 class="title">Hello WatchKit</h4>
                <p class="article-item">blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
                <div class="extras"> 
                    <p class="extra-item">12 comments</p>
                    <p class="extra-item">124 likes</p>
                </div>
            </div>
            
            
            <div class="article">
                <h4 class="title">Introduction to Swift</h4>
                <p class="article-item">blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
                <div class="extras"> 
                    <p class="extra-item">15 comments</p>
                    <p class="extra-item">45 likes</p>
                </div>
            </div>

            </>
        )
    }
  
}


export default Articles