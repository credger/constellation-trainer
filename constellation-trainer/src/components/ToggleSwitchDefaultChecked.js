import styles from './ToggleSwitch.module.css'

//props passed from parent to LeftSideBar to ToggleSwitch
const ToggleSwitchDefaultChecked = (props) => {
    
    return(
        <div>
            <label className = {styles.toggleBox}>
                <input onChange = {() => props.setState(!props.state)} type = 'checkbox' className = {styles.checkbox} defaultChecked></input>
                <div className = {styles.toggleSlider}></div>
            </label>
        </div>

    )
}

export default ToggleSwitchDefaultChecked