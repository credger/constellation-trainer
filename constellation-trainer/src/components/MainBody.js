import './styles.css'
import React from 'react'
import DrawStars from './DrawStars'


const MainBody = (props) => {
    const x = props.d1
    const j23 = props.lines1 //passing props to DrawStars and DrawLines
    const j24 = props.background1
 
    const showLabel = 'mainBodyShowLabel'
    const hideLabel = 'mainBodyHideLabel'
    const upLabel = 'upLabel'
    const getMainBodyLabelClass = () => {

        const z = props.label1
        const u = props.up1
        //console.log(z)
        if(z == false && u == false){
            return hideLabel
        }
        else if(u == true){
            return upLabel
        }
        else{
            return showLabel
        }
    }




    return(
        <div className = 'mainBody'>
            <div className = 'labelContainer'>
                <p className = {getMainBodyLabelClass()}>{x}</p>
            </div>   
            <div className="wrapper">
                    <DrawStars d1 = {x} lines1 = {j23} background1 = {j24}/>
            </div>            
        </div>
    )
}

export default MainBody





{/* <div className="wrapper">
<div className="fixedAspectRatio">
    This is your div with the specified aspect ratio.
    <div className = 'testStar' id = 'center'></div>
    <DrawStars />
</div>
</div> */}
