import LeftSideBar from './LeftSideBar'
import MainBody from './MainBody'
import RightSideBar from './RightSideBar'
import shuffle from './fisherYatesShuffle.js'
import {useState} from 'react'
import './styles.css'
import cnames from '../data/constellationList.json'
import {useEffect} from 'react'
import {useRef} from 'react'






const Parent = () => {

    const numbers = [...Array(30).keys()]         //Array 0:29
    const [order, setOrder] = useState(numbers)   //Initial State 0:29
    
    const firstName = cnames[order[0]].Name       //First Name = currentState[0]
    const [display, setDisplay] = useState(firstName)

    const[list, setList] = useState(true)
    const[label, setLabel] = useState(true)
    const[up, setUp] = useState(false) //Used to set behavior of upArrow keyDown and keyUp
    const[lines, setLines] = useState(true)



    useEffect(() => {
        setDisplay(cnames[order[0]].Name)  //Reset display after sort
    },[order])

    //Focus on parent div on page load
    const ref = useRef(null);  
    useEffect(() => {
        ref.current.focus();
    }, []);

    //Try to make this a seperate function
    const handleKeyDown = event => {
        if(event.key == 'ArrowRight'){
            for(let i=0; i<cnames.length; i++){
                if(cnames[order[i]].Name == display){
                    if(i<(cnames.length-1)){
                        setDisplay(cnames[order[i+1]].Name)
                    } else{setDisplay(cnames[order[0]].Name)}
                    break
                }
            }
        }

        if(event.key == 'ArrowLeft'){
            for(let i=0; i<cnames.length; i++){
                if(cnames[order[i]].Name == display){
                    if(i>0){
                        setDisplay(cnames[order[i-1]].Name)
                    } else{setDisplay(cnames[order[cnames.length-1]].Name)}
                    break
                }
            }
        }

        if(event.key == 'ArrowUp'){
            console.log('arrowUp')
            if(label == false){
                setLabel(true) 
                setUp(true)
            }
        }
    };
    
    //Needs work - gets reversed if up arrow and toggle done simultaneously
    const handleKeyUp = event => {
        if(event.key == 'ArrowUp'){
            if(up == true){
                setLabel(false)
                setUp(false)
            }

        }
    }
    


    return(
        <div id = 'parent' ref={ref} tabIndex={-1} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}>
            <LeftSideBar o1 = {order} o2 = {setOrder} n1 = {numbers} l1 = {list} l2 = {setList} d2 = {setDisplay} label1 = {label} label2 = {setLabel} lines1 = {lines} lines2 = {setLines}/>
            <MainBody d1 = {display} l1 = {list} label1 = {label} label2 = {setLabel} lines1 = {lines} lines2 = {setLines}/>
            <RightSideBar o1 = {order} d1={display} d2 = {setDisplay} o1 = {order} l1 = {list}/>
        </div>
    )

}

export default Parent


// https://bobbyhadz.com/blog/react-onkeydown-div