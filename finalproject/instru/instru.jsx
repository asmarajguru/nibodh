var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <title>bass</title>
          <link rel="stylesheet" href="instru.css" />
          <nav>
            <h2 className="logo">Essence of<span> Music</span></h2>
            <ul>
              <li><a href="main.html">Home</a></li>
              <li><a href="instru.html">Instrument</a></li>
              <li><a href="singer.html">Inspiration</a></li>
              <li><a href="login.html">Login</a></li>
            </ul>
          </nav>
          {/* blog */}
          <section className="design" id="design">
            <div className="containerr">
              <div className="title">
                <h2>Instruments</h2>
                <p>Where we can help you learn following Instruments.</p>
              </div>
              <div className="design-content">
                {/* item */}
                <div className="design-item">
                  <div className="design-img">
                    <img src="guitar.jpg" alt="" />
                    <span>Guitar</span>
                  </div>
                  <div className="design-title">
                    <a href="#">The guitar was invented in Spain in the 16th century. There are two types of guitars: acoustic guitar and electric guitar. The guitar consists mainly of four or six strings. Its wires are made of steel or nylon. The guitar is made of light wood. Guitar has taken music to a whole new level. It is the second most played musical instrument. The guitar is used for many types of music such as traditional ,  folk  , rock , pop etc. The traditional type of guitar is called Acoustic. In modern days electric guitars became popular. </a>
                  </div>
                </div>
                {/* end of item */}
                {/* item */}
                <div className="design-item">
                  <div className="design-img">
                    <img src="piano.jpg" alt="" />
                    <span>Piano</span>
                  </div>
                  <div className="design-title">
                    <a href="#">The piano is a stringed keyboard instrument in which the strings are struck by wooden hammers that are coated with a softer material (modern hammers are covered with dense wool felt; some early pianos used leather). It is played using a keyboard, which is a row of keys (small levers) that the performer presses down or strikes with the fingers and thumbs of both hands to cause the hammers to strike the strings. It was invented in Italy by Bartolomeo Cristofori around the year 1700.</a>
                  </div>
                </div>
                {/* end of item */}
                {/* item */}
                <div className="design-item">
                  <div className="design-img">
                    <img src="drums.jpg" alt="" />
                    <span>Drum</span>
                  </div>
                  <div className="design-title">
                    <a href="#">A drum is a musical instrument. It is played with the hands, sometimes using a drum stick. A collection of drums and cymbals is called a drum kit, or drum set. An Armenian Dhol drum
                      Drums are used to keep a steady beat in a song. They give music of many kinds a sense of feeling. For example, to make a song to be slow or fast, the drums play slower or faster.                    
                      A drum is a percussion instrument, which means it makes a noise by being hit. There are many types such as cymbals and bells; even a simple piece of wood can be used as a percussion instrument.</a>
                  </div>
                </div>
                {/* end of item */}
                {/* item */}
                <div className="design-item">
                  <div className="design-img">
                    <img src="sitar.jpg" alt="" />
                    <span>Sitar</span>
                  </div>
                  <div className="design-title">
                    <a href="#">The sitar definition is a plucked stringed instrument from India. It is known for its prominent role in Hindustani or North Indian classical music. Hindustani music features extensive improvisation, elaborate melodies, and complex rhythmic patterns. The sitar is one of the most frequently performed solo instruments in Hindustani music. Like a guitar, the sitar is an instrument with multiple strings. However, due to differences in the sitar's construction, its sound is much more complex than that of an acoustic guitar.</a>
                  </div>
                </div>
                {/* end of item */}
              </div>
            </div>
          </section>
        </div>
      );
    }
  });