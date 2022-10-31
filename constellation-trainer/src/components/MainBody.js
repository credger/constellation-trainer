import './styles.css'
import React from 'react'
import DrawStars from './DrawStars'


const MainBody = (props) => {
    
    const getMainBodyLabelClass = () => {

        const z = props.labelState
        const u = props.upState
        if(z == false && u == false){
            return 'mainBodyHideLabel'
        }
        else if(u == true){
            return 'upLabel'
        }
        else{
            return 'mainBodyShowLabel'
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


