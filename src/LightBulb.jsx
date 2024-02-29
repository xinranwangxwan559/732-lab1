import React, {useState} from "react";

function LightBulb(){
    const [ isOn, setIsOn ] = useState(false);

    const offImage = './light-off.png';
    const onImage = './light-on.png';

    const handleClick = () => {
        setIsOn(!isOn);
    }

    const image = isOn ? onImage : offImage;

    return (
       <img
            src={image}
            alt={isOn ? "lightbulb on" : "lightbulb off"}
            onClick={handleClick} 
            style = {{cursor: "pointer"}}
        />
    );
}
        
          
export default LightBulb;