import LeftSideBar from './LeftSideBar'
import MainBody from './MainBody'
import RightSideBar from './RightSideBar'
import {useState} from 'react'
import './styles.css'
import cnames from '../data/constellationList.json'
import React from 'react';
import {useEffect} from 'react'
import {useRef} from 'react'

import andromedaAudio from '../sounds/andromeda.mp3'
import aquariusAudio from '../sounds/aquarius.mp3'
import aquillaAudio from '../sounds/aquilla.mp3'
import bootesAudio from '../sounds/bootes.mp3'
import cancerAudio from '../sounds/cancer.mp3'
import canisMajorAudio from '../sounds/canis_major.mp3'
import capricornusAudio from '../sounds/capricornus.mp3'
import cassiopeiaAudio from '../sounds/cassiopeia.mp3'
import cepheusAudio from '../sounds/cepheus.mp3'
import cetusAudio from '../sounds/cetus.mp3'
import craterAudio from '../sounds/crater.mp3'
import cygnusAudio from '../sounds/cygnus.mp3'
import dracoAudio from '../sounds/draco.mp3'
import eridanusAudio from '../sounds/eridanus.mp3'
import geminiAudio from '../sounds/gemini.mp3'
import herculesAudio from '../sounds/hercules.mp3'
import hydraAudio from '../sounds/hydra.mp3'
import leoAudio from '../sounds/leo.mp3'
import lyraAudio from '../sounds/lyra.mp3'
import ophiuchusAudio from '../sounds/ophiuchus.mp3'
import orionAudio from '../sounds/orion.mp3'
import pegasusAudio from '../sounds/pegasus.mp3'
import perseusAudio from '../sounds/perseus.mp3'
import piscesAudio from '../sounds/pisces.mp3'
import sagittariusAudio from '../sounds/sagittarius.mp3'
import scorpiusAudio from '../sounds/scorpius.mp3'
import taurusAudio from '../sounds/taurus.mp3'
import ursaMajorAudio from '../sounds/ursa_major.mp3'
import ursaMinorAudio from '../sounds/ursa_minor.mp3'
import virgoAudio from '../sounds/virgo.mp3'

const Parent = () => {
    const numbers = [...Array(30).keys()]         //Array 0:29
    const [order, setOrder] = useState(numbers)   //Initial State 0:29
    const [display, setDisplay] = useState(cnames[order[0]].Name)
    const[list, setList] = useState(true)
    const[label, setLabel] = useState(true)
    const[up, setUp] = useState(false)  //Used to set behavior of upArrow keyDown and keyUp
    const[lines, setLines] = useState(true)
    const[background,setBackground] = useState(false)

    const audioFiles = [andromedaAudio, aquariusAudio, aquillaAudio, bootesAudio, cancerAudio, canisMajorAudio,  //audio files - must be same order as cnames
                        capricornusAudio, cassiopeiaAudio, cepheusAudio, cetusAudio, craterAudio, cygnusAudio,
                        dracoAudio, eridanusAudio, geminiAudio, herculesAudio, hydraAudio, leoAudio, lyraAudio,
                        ophiuchusAudio, orionAudio, pegasusAudio, perseusAudio, piscesAudio, sagittariusAudio,
                        scorpiusAudio, taurusAudio, ursaMajorAudio, ursaMinorAudio, virgoAudio]  


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

        if(event.key == 'ArrowDown'){
            for(let i=0; i<cnames.length; i++){
                if(cnames[order[i]].Name == display){
                    let audio = new Audio(audioFiles[order[i]])
                    audio.play()   
                }
            }
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
