import './styles.css'
import ToggleSwitch from './ToggleSwitch'
import upArrow from '../icons/arrow-up-bold.svg'
import downArrow from '../icons/arrow-down-bold.svg'
import leftArrow from '../icons/arrow-left-bold.svg'
import rightArrow from '../icons/arrow-right-bold.svg'

const LeftSideBar = () => {
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
                <button className = 'sortButton'>Sort Random</button>  
            </div>
            <div id = 'arrowButtonContainer'>
                <img src = {upArrow} class = 'arrowButton'></img>
                <div>
                    <img src = {leftArrow} class = 'arrowButton'></img>
                    <img src = {rightArrow} class = 'arrowButton'></img>
                </div>
                <img src = {downArrow} class = 'arrowButton'></img>

            </div>

        </div>
    )
}

export default LeftSideBar