import styles from './ToggleSwitch.module.css'

const ToggleSwitch = (props) => {
    
    return(
        <div>
            <label className = {styles.toggleBox}>
                <input onChange = {() => props.s2(!props.s1)} type = 'checkbox' className = {styles.checkbox}></input>
                <div className = {styles.toggleSlider}></div>
            </label>
        </div>

    )
}

export default ToggleSwitch