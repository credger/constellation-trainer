import LeftSideBar from './LeftSideBar'
import MainBody from './MainBody'
import RightSideBar from './RightSideBar'
import {useState} from 'react'
import './styles.css'

const Parent = () => {
    const [display, setDisplay] = useState('Andromeda')
    return(
        <div id = 'parent'>
            <LeftSideBar />
            <MainBody d1 = {display}/>
            <RightSideBar d1={display} d2 = {setDisplay}/>
        </div>
    )
}

export default Parent