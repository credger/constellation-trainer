import './styles.css'
import ToggleSwitch from './ToggleSwitch'
import upArrow from '../icons/arrow-up-bold.svg'
import downArrow from '../icons/arrow-down-bold.svg'
import leftArrow from '../icons/arrow-left-bold.svg'
import rightArrow from '../icons/arrow-right-bold.svg'
import shuffle from './fisherYatesShuffle.js'

const LeftSideBar = (props) => {

    const x = [...Array(30).keys()]
    const shuffleList = () => {
        console.log('clicked')
        props.o2(shuffle(x))
    }

    return(
        <div id = 'leftSideBar'>
            <div id = 'toggleSwitchContainer'>
                <div className = 'toggleFeature'>
                    <p>Lines</p>
                    <ToggleSwitch />
                </div>
                <div className = 'toggleFeature'>
                    <p>Background</p>
                    <ToggleSwitch />
                </div>
                <div className = 'toggleFeature'>
                    <p>Names</p>
                    <ToggleSwitch />
                </div>
                <div className = 'toggleFeature'>
                    <p>List</p>
                    <ToggleSwitch />
                </div>
            </div>
            <div id = 'sortButtonContainer'>
                <button className = 'sortButton'>Sort Alphabetical</button>
                <button onClick={shuffleList} className = 'sortButton'>Sort Random</button>  
            </div>
            <div id = 'arrowButtonContainer'>
                <img src = {upArrow} className = 'arrowButton'></img>
                <div>
                    <img src = {leftArrow} className = 'arrowButton'></img>
                    <img src = {rightArrow} className = 'arrowButton'></img>
                </div>
                <img src = {downArrow} className = 'arrowButton'></img>
            </div>

        </div>
    )
}

export default LeftSideBar