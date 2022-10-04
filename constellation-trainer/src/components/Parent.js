import LeftSideBar from './LeftSideBar'
import MainBody from './MainBody'
import RightSideBar from './RightSideBar'
import shuffle from './fisherYatesShuffle.js'
import {useState} from 'react'
import './styles.css'
import cnames from '../data/constellationList.json'
import { useEffect } from 'react'

const Parent = () => {

    const numbers = [...Array(30).keys()]         //Array 0:29
    const [order, setOrder] = useState(numbers)   //Initial State 0:29
    
    const firstName = cnames[order[0]].Name       //First Name = currentState[0]
    const [display, setDisplay] = useState(firstName)

    const[list, setList] = useState(true)

    useEffect(() => {
        setDisplay(cnames[order[0]].Name)  //Reset display after sort
    },[order])


    return(
        <div id = 'parent'>
            <LeftSideBar o1 = {order} o2 = {setOrder} n1 = {numbers} l1 = {list} l2 = {setList} d2 = {setDisplay}/>
            <MainBody d1 = {display} l1 = {list}/>
            <RightSideBar o1 = {order} d1={display} d2 = {setDisplay} o1 = {order} l1 = {list}/>
        </div>
    )

}

export default Parent