import LeftSideBar from './LeftSideBar'
import MainBody from './MainBody'
import RightSideBar from './RightSideBar'
import shuffle from './fisherYatesShuffle.js'
import {useState} from 'react'
import './styles.css'
import cnames from '../data/constellationList.json'

const Parent = () => {

    const numbers = [...Array(30).keys()]         //Array 0:29
    const [order, setOrder] = useState(numbers)   //Initial State 0:29
    const firstName = cnames[order[0]].Name       //First Name = state[0]



    const [display, setDisplay] = useState(firstName)
    return(
        <div id = 'parent'>
            <LeftSideBar o1 = {order} o2 = {setOrder} n1 = {numbers}/>
            <MainBody d1 = {display}/>
            <RightSideBar d1={display} d2 = {setDisplay} o1 = {order}/>
        </div>
    )

    // const [display, setDisplay] = useState('Andromeda')
    // return(
    //     <div id = 'parent'>
    //         <LeftSideBar />
    //         <MainBody d1 = {display}/>
    //         <RightSideBar d1={display} d2 = {setDisplay}/>
    //     </div>
    // )
}

export default Parent