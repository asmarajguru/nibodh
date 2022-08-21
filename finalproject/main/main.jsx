import React from "react";
var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <title />
          <link rel="stylesheet" type="text/css" href="main.css" />
          <div className="container">
            <div className="header">
              <nav>
                <h2 className="logo">Essence of<span> Music</span></h2>
                <ul>
                  <li><a href="main.html">Home</a></li>
                  <li><a href="instru.html">Instrument</a></li>
                  <li><a href="singer.html">Inspiration</a></li>
                  <li><a href="login.html">Login</a></li>
                </ul>
              </nav>
            </div>
            <div className="content">
              <h1 style={{fontSize: '50px'}}>Essence Of Music</h1>
              <h4><span>Where we will take you in the world of <i>MUSIC</i></span> </h4>
              <button className="btn"><a href="login.html"> LOGIN</a></button>
            </div>
          </div>
        </div>
      );
    }
  });