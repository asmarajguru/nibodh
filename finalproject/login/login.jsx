var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <style dangerouslySetInnerHTML={{__html: "\n      h1{font-size:70px;\n        color:#791137;\n        text-align:center;\n      }\n      body {\n        background-image: url(main3.jpg);\n      }\n      .square {\n        margin: 20%;\n      }\n    " }} />
          <link rel="stylesheet" href="bass.css" />
          <nav>
            <h2 className="logo">Essence of<span> Music</span></h2>
            <ul>
              <li><a href="main.html">Home</a></li>
              <li><a href="instru.html">Instrument</a></li>
              <li><a href="singer.html">Inspiration</a></li>
              <li><a href="login.html">Login</a></li>
            </ul>
          </nav>
          <main>
            <section className="square">
              <h1>Sign up to be a Student</h1>
              <br />
              <br />
              <form action="dbconnection (1).php" method="post">
                <label htmlFor="Name" style={{marginLeft: '150px'}}><b>NAME:</b></label>
                <input type="text" id="Name" style={{textAlign: 'center'}} name="Name" placeholder="enter your name" required />
                <br /><br /><label htmlFor="Phone_no" style={{marginLeft: '150px'}}><b>PHONE NUMBER:</b></label>
                <input type="tel" id="Phone_no" name="Phone_no" placeholder="enter number" style={{textAlign: 'center'}} pattern=".{10,}" title="Enter a 10-digit valid mobile number" required />
                <br /><br /><label htmlFor="Email_id" style={{marginLeft: '150px'}}><b>EMAIL:</b></label>
                <input type="email" id="Email_id" name="Email_id" style={{textAlign: 'center'}} placeholder="enter email id " pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                <br /><br /><label htmlFor="User_id" style={{marginLeft: '150px'}}><b>UserName:</b></label>
                <input type="text" id="User_id" name="User_id" style={{textAlign: 'center'}} placeholder="create a user_id" />
                <br /><br /><label htmlFor="Password" style={{marginLeft: '150px'}}><b>PASSWORD:</b></label>
                <input type="password" id="Password" name="Password" style={{textAlign: 'center'}} placeholder="Strong password" pattern=".{8,}" title="Must Include 8 characters" required />
                <br /><br /><button className="btn" type="submit" ; name="submit" style={{textAlign: 'center', marginLeft: '150px', fontSize: '18px'}}> SUBMIT</button>
              </form>
            </section>
          </main>
          <footer>
            <p>Contact Us</p>
            <p style={{fontSize: '25px'}}>1234567890</p>
            <br /><br />
            <p>other Details</p>
            <div className="social">
              <a href="#"><i className="fa-brands fa-instagram" /></a>
              <a href="#"><i className="fa-brands fa-twitter" /></a>
              <a href="#"><i className="fa-brands fa-facebook" /></a>
            </div>
            <p className="end" style={{fontSize: '120%'}}>THANK YOU</p>
          </footer>
        </div>
      );
    }
  });