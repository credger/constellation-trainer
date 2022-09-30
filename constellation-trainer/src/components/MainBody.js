import './styles.css'
import React from 'react'


const MainBody = (props) => {
    const x = props.d1
    return(
        <div id = 'mainBody'>
            <p id = 'testDisplay'>{x}</p>
        </div>
    )
}

export default MainBody