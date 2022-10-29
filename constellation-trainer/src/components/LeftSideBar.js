import './styles.css'
import ToggleSwitch from './ToggleSwitch'
import arrows from '../images/arrows.png'
import shuffle from './fisherYatesShuffle.js'
import ToggleSwitchDefaultChecked from './ToggleSwitchDefaultChecked'
import cnames from '../data/constellationList.json'
import { useEffect } from 'react'

const LeftSideBar = (props) => {

    const alphabetizeList = () => {
        const x = Object.create(props.n1) //Object.create avoids reference
        props.o2(x)
    }

    const shuffleList = () => {
        const y = Object.create(props.o1) 
        props.o2(shuffle(y))
    }

    return(
        <div id = 'leftSideBar' className = 'leftContainer'>
            <div id = 'toggleSwitchContainer' className = 'leftContainer'>
                <h1>Constellation Trainer</h1>      
                <div className = 'toggleFeature'>
                    <p>Lines</p>
                    <ToggleSwitchDefaultChecked s1 = {props.lines1} s2 = {props.lines2} />
                </div>
                <div className = 'toggleFeature'>
                    <p>Background</p>
                    <ToggleSwitch s1 = {props.background1} s2 = {props.background2}/>
                </div>
                <div className = 'toggleFeature'>
                    <p>Labels</p>
                    <ToggleSwitchDefaultChecked s1 = {props.label1} s2 = {props.label2}/>
                </div>
                <div className = 'toggleFeature'>
                    <p>List</p>
                    <ToggleSwitchDefaultChecked s1 = {props.l1} s2 = {props.l2}  />
                </div>
            </div>
            <div id = 'sortButtonContainer' className = 'leftContainer'>
                <button onClick={alphabetizeList} className = 'sortButton'>Sort Alphabetical</button>
                <button onClick={shuffleList} className = 'sortButton'>Sort Random</button>  
            </div>
            <div id = 'arrowButtonContainer' className = 'leftContainer'>
                <div className = 'arrowRightLeftLabel'>Previous</div>
                <div id = 'arrowInner'>
                    <h2 id = 'keyboardGuide'>Keyboard Guide</h2>
                    <p className = 'arrowUpDownLabel'>Show Label</p>
                    <img src = {arrows} className = 'arrowsImage'></img>
                    <p className = 'arrowUpDownLabel'>Audio Label</p>
                </div>
                <div className = 'arrowRightLeftLabel'>Next</div>
            </div>

        </div>
    )
}

export default LeftSideBar