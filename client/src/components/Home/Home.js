import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';
import flag from '../../images/USAflag.jpg';

// import Welcome from '../Welcome/Welcome.js';

const Home = () => {
 
  return (
    <div>
      <h1 className="main">USA STATES FLASHCARDS</h1>
      <h2 className="subheading">Sign Up and Make Your Own FlashCards</h2>
      <div className='signup-form'>

        <div className='left'>
          <img src={flag} height="300px" />
        </div>

        <div className='right'>
         <form className='form1'>
         <label for="uname">UserName </label> 
         <input type = "text" id="uname" name="name"  /><br/>
         <label for="upassword">Password   </label> 
         <input type = "password" id="upassword" name="password" /><br/>
         <Link to="/Welcome"><button className='btn'>SUBMIT</button></Link>
         </form>
        </div>

      </div>
    </div>
  )
}

export default Home;
