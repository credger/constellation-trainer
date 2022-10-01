import './styles.css'
import ToggleSwitch from './ToggleSwitch'
import upArrow from '../icons/arrow-up-bold.svg'
import downArrow from '../icons/arrow-down-bold.svg'
import leftArrow from '../icons/arrow-left-bold.svg'
import rightArrow from '../icons/arrow-right-bold.svg'
import shuffle from './fisherYatesShuffle.js'
import ToggleSwitchDefaultChecked from './ToggleSwitchDefaultChecked'


const LeftSideBar = (props) => {

    const alphabetizeList = () => {
        const x = Object.create(props.n1)
        props.o2(x)
    }

    const shuffleList = () => {
        const y = Object.create(props.o1)  //Object.create avoids reference
        props.o2(shuffle(y))
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
                    <ToggleSwitchDefaultChecked s1 = {props.l1} s2 = {props.l2}  />
                </div>
            </div>
            <div id = 'sortButtonContainer'>
                <button onClick={alphabetizeList} className = 'sortButton'>Sort Alphabetical</button>
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