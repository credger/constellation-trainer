import './styles.css'
import React from 'react'
import DrawStars from './DrawStars'


const MainBody = (props) => {
    
    const getMainBodyLabelClass = () => {

        if(props.labelState == false && props.upState == false){
            return 'mainBodyHideLabel'      //css class when label toggle == false
        }
        else if(props.upState == true){     //props.UpState == true when 'ArrowUp' key is down
            return 'upLabel'                //css class when 'ArrowUp' key is down               
        }
        else{
            return 'mainBodyShowLabel'      //css class when label toggle == true
        }
    }

    return(
        <div className = 'mainBody'>
            <div className = 'labelContainer'>
                <p className = {getMainBodyLabelClass()}>{props.displayState}</p>
            </div>   
            <div className="wrapper">
                    <DrawStars displayState = {props.displayState} linesState = {props.linesState} backgroundState = {props.backgroundState}/>
            </div>            
        </div>
    )
}

export default MainBody


