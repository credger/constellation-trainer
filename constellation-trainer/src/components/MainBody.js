import './styles.css'
import React from 'react'
import DrawStars from './DrawStars'


const MainBody = (props) => {
    const x = props.d1

    const showList = 'mainBodyList'
    const hideList = 'mainBodyNoList'
    const getMainBodyClass = () => {
        const y = props.l1
        if(y == false){
            return hideList
        }
        else{
            return showList
        }
    }

    const showLabel = 'mainBodyShowLabel'
    const hideLabel = 'mainBodyHideLabel'
    const getMainBodyLabelClass = () => {

        const z = props.label1
        console.log(z)
        if(z == false){
            return hideLabel
        }
        else{
            return showLabel
        }
    }




    return(
        <div className = {getMainBodyClass()}>
            <p className = {getMainBodyLabelClass()}>{x}</p>   
            <div className="wrapper">
                    <DrawStars d1 = {x}/>

                    {/* <svg width="100%" height="100%"><line x1="10%" y1="10%" x2="20%" y2="20%" stroke="red"/></svg> */}
                    
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
