import LeftSideBar from './LeftSideBar'
import MainBody from './MainBody'
import RightSideBar from './RightSideBar'
import {useState} from 'react'
import './styles.css'
import cnames from '../data/constellationList.json'
import React from 'react';
import {useEffect} from 'react'
import {useRef} from 'react'



const Parent = () => {

    const numbers = [...Array(30).keys()]         //Array 0:29
    const [order, setOrder] = useState(numbers)   //Initial State 0:29
    const [display, setDisplay] = useState(cnames[order[0]].Name)
    const[list, setList] = useState(true)
    const[label, setLabel] = useState(true)
    const[up, setUp] = useState(false)  //Used to set behavior of upArrow keyDown and keyUp
    const[lines, setLines] = useState(true)
    const[background,setBackground] = useState(false)

    useEffect(() => {      //Reset display after a sort button is clicked
        setDisplay(cnames[order[0]].Name) 
    },[order])

    const ref = useRef(null);  //Set focus to parent div on page load
    useEffect(() => {
        ref.current.focus();
    }, []);

    const handleKeyDown = event => {    //KeyDown event logic for arrow keys
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
            setUp(true)

        }


        // https://create-react-app.dev/docs/using-the-public-folder/
        // put audio files and public folder to access dynamically
        if(event.key == 'ArrowDown'){
            const audioFile =  (process.env.PUBLIC_URL + '../sounds/' + display + '.mp3').toLowerCase().replace(' ', '_')
            console.log(audioFile)
            let audio = new Audio(audioFile)
            audio.play()
            
        }
    };
    
    const handleKeyUp = event => {      //KeyUp event logic for arrow keys
        if(event.key == 'ArrowUp'){
            if(up == true){
                setUp(false)
            }

        }
    }

    return(
        <div id = 'parent' ref={ref} tabIndex={-1} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}>
            <LeftSideBar orderState = {order} orderSetState = {setOrder} numberState = {numbers} listState = {list} listSetState = {setList} displaySetState = {setDisplay}
                labelState = {label} labelSetState = {setLabel} linesState = {lines} linesSetState = {setLines} backgroundState = {background}
                backgroundSetState = {setBackground}/>
            <MainBody displayState = {display} listState = {list} labelState = {label} labelSetState = {setLabel} linesState = {lines} linesSetState = {setLines}
                backgroundState = {background} backgroundSetState = {setBackground} upState = {up} upSetState = {setUp} orderState = {order}/>
            <RightSideBar orderState = {order} displayState={display} displaySetState= {setDisplay} listState = {list}/>
        </div>
    )

}

export default Parent


// https://bobbyhadz.com/blog/react-onkeydown-div
