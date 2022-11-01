import './styles.css'
import ToggleSwitch from './ToggleSwitch'
import arrows from '../images/arrows.png'
import shuffle from './fisherYatesShuffle.js'
import ToggleSwitchDefaultChecked from './ToggleSwitchDefaultChecked'

const LeftSideBar = (props) => {

    const alphabetizeList = () => {
        const x = Object.create(props.numberState) //Object.create avoids reference
        props.orderSetState(x)
    }

    const shuffleList = () => {
        const y = Object.create(props.orderState) 
        props.orderSetState(shuffle(y))
    }

    return(
        <div id = 'leftSideBar' className = 'leftContainer'>
            <div id = 'leftSideBarFlexContainer'>
                <h1>Constellation Trainer</h1> 
                <div id = 'toggleSwitchContainer' className = 'leftContainer'>     
                    <div className = 'toggleFeature'>
                        <p>Lines</p>
                        <ToggleSwitchDefaultChecked state = {props.linesState} setState = {props.linesSetState} />
                    </div>
                    <div className = 'toggleFeature'>
                        <p>Background</p>
                        <ToggleSwitch state = {props.backgroundState} setState = {props.backgroundSetState}/>
                    </div>
                    <div className = 'toggleFeature'>
                        <p>Labels</p>
                        <ToggleSwitchDefaultChecked state = {props.labelState} setState = {props.labelSetState}/>
                    </div>
                    <div className = 'toggleFeature'>
                        <p>List</p>
                        <ToggleSwitchDefaultChecked state = {props.listState} setState = {props.listSetState}  />
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
                <p className = 'leftSidebarNotes'>Note - constellation lines will not display in Firefox or Safari.  Use Google Chrome for best experience. </p>
            </div>
        </div>
    )
}

export default LeftSideBar