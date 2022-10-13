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

    return(
        <div className = {getMainBodyClass()}>
            <p id = 'testDisplay'>{x}</p>   
            {/* <div className = 'testStar' id = 'one'></div>
            <div className = 'testStar' id = 'two'></div>
            <div className = 'testStar' id = 'three'></div>
            <div className = 'testStar' id = 'four'></div>
            <div className = 'testStar' id = 'five'></div> */}


            <div className="wrapper">
                    <DrawStars d1 = {x}/>
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
