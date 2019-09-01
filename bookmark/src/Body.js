import React from 'react';
import './home.css';
import illustration from "./illustration-features-tab-1.svg";
import logo from "./logo-bookmark.svg"
import chrome from "./logo-chrome.svg"
import opera from "./logo-opera.svg"
import firefox from "./logo-firefox.svg"

function Body(){
    return(
        <div className="container">
        <nav className="nav">
                <div className = "nav_child"><img className = " img" src = {logo}/></div>
                <div className = "nav_child">
                <ul className="nav--list">
                <li>Features</li>
                <li>Pricing</li>
                <li>Contact</li>
                <button className = "nav--button">Login</button>
              </ul>
                </div>
        
          </nav>
          <section className="section section_1">
            <div className=" section_1 section_1--left">
                <h1>A Simple Bookmark Manager</h1>
                <p>
                  A clean and simple interface to organize your favourite websites. Open a new 
                    browser tab and see your sites load instantly. Try it for free.
                </p>
                <button className="section_1--button section_1--button--left blue-button">Get it on Chrome</button>
                <button className="section_1--button section_1--button--right">Get it on Firefox</button>
            </div>
            <div className="section_1--right">
                <img className="section_1--img" src={illustration} alt = "features-tab"/>
  
            </div>
        
          </section>
          <section className="section section_2">
              <h1>Features</h1>
              <p>
                  Our aim is to make it quick and easy for you to access your favourite websites. 
                  Your bookmarks sync between your devices so you can access them on the go.
              </p>
        
  
          </section>
          <section className="section section_3">
            <ul>
              <li> Simple Bookmarking</li>
              <li> Speedy Searching</li>
              <li>Easy Sharing</li>
            </ul>
          </section>
          <section className="section section_4">
              <h1>Bookmark in one click</h1>
        
              <p>Organize your bookmarks however you like. Our simple drag-and-drop interface 
                  gives you complete control over how you manage your favourite sites.</p>
                  <button>More Info</button>
              Intelligent search
        
              Our powerful search feature will help you find saved sites in no time at all. 
              No need to trawl through all of your bookmarks.
        
              More Info
        
              Share your bookmarks
        
              Easily share your bookmarks and collections with others. Create a shareable 
              link that you can send at the click of a button.
        
              More Info
        
              <h1>
                  Download the extension
              </h1>
              <p>
                  We’ve got more browsers in the pipeline. Please do let us know if you’ve 
                  got a favourite you’d like us to prioritize.
              </p>
          </section>
          <section className="section section_5">
              <div className = "section_5--container">
                <img className="img" src = {chrome}/>
                <h2>Add to Chrome</h2>
                <p>       
                    
                    Minimum version 62
                </p>
                <hr/>
                <button className = "blue-button">Add & Install Extension</button>
              </div>
              <div className = "section_5--container">
              <img className="img"src = {firefox}/>
              <h2>Add to Firefox</h2>
              <p>    
                Minimum version 55</p>
            <button className = "blue-button">Add & Install Extension</button>
              </div>
              <div className = "section_5--container">
              <img className="img" src = {opera}/>
              <h2>Add to Opera</h2>
              <p>    
                
                Minimum version 46
                </p>
                <button className = "blue-button">Add & Install Extension</button>
              </div>
          </section>
          <section className="section section_6">
              <h1>Frequently Asked Questions</h1>
              <p>          Here are some of our FAQs. If you have any other questions you’d like 
          answered please feel free to email us.</p>
          

          </section>
          <section className = "section section_7">
          <button class="collapsible">What is Bookmark?</button>
<div class="content">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
<button class="collapsible">How can I request a new browser?</button>
<div class="content">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
<button class="collapsible">Is there a mobile app?</button>
<div class="content">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
<button class="collapsible">What about other Chromium browsers?</button>
<div class="content">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

              
        
     
        
          <button>More Info</button>
          </section>
          <section className="section section_8">
              <h2>35,000+ already joined</h2>
        
              <h1>Stay up-to-date with what we’re doing</h1>
              <input type = "text">
                    
              </input>
              <button>Contact Us</button>
        
        
          </section>
        
          <footer className="footer">
          <ul className="nav--list">
                <li>Features</li>
                <li>Pricing</li>
                <li>Contact</li>
              </ul>
        
          </footer>

      </div>
    );


}
export default Body;