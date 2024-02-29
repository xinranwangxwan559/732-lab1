import React from "react"

function AboutMe(props) {
  
 
    const {name,age,favoriteFood} = props;

    return (
        <p>
            Hi, my name is {name}. I am {age} years old. My favorite food is {favoriteFood}.
        </p>
    );
     

}

export default AboutMe;
