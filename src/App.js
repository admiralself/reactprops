import React, { Component } from 'react';
import './App.css';
import Profile from './profile/Profile'
import image from './image.jpg'
import PropTypes from "prop-types";
import Functionclick from './profile/Functionclick';

function App() {

  return (


    <div>
      <Profile   profession='Coach' email='Taher.kamoun@yahoo.com' 
      
      bio='“Taher Kamoun is a Human Resources specialist with a decade of successful experience in hiring and employee management. John specializes in Human Resource technologies and regularly attends national training sessions to showcase new HR tech trends, such as self-service, wellness apps, and people analytics tools. A strong believer in the power of positive thinking in the workplace, John regularly develops internal wellness campaigns to assist employees with effective mental health techniques. John enjoys a good Netflix binge but can also be found on long bike rides on hilly country roads.”' >
        <img style={{
          width: "200px",
          height: "200px"
        }} src={image} alt='image' />
        
      </Profile>
      <Functionclick name='Taher Kamoun'/>
    </div>
  );
}


Profile.propTypes = {
  profession: PropTypes.string,
  email: PropTypes.string,
  Hobbies: PropTypes.string.isRequired
};

Profile.defaultProps = {
Hobbies: 'All king of sport'

}


export default App;






