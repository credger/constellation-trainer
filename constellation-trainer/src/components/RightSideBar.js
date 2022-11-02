import './styles.css'
import React from 'react'
import cnames from '../data/constellationList_with_abbr.json'
import eyeOff from '../icons/eye-off.svg'

const RightSideBar = (props) => {

    if(props.listState == false){  //'rightSideBar' display when list toggle == off
        let elements= [];
        for (let i = 0; i<cnames.length; i++){

            const getClass = () => {
                if(props.displayState == cnames[props.orderState[i]].Name){
                    return 'nameListSelected'       //css class for 'rightSidebar' list item when selected (goldenrod background)
                }
                else{
                    return 'nameList'               //css class for 'rightSidebar list item when not selected (skyblue background)
                }
            }

            let rowElements = []
            rowElements.push(React.createElement('p', {className: 'listNumber', key: 1}, i+1,'.'))              //Paragraph tag for 'rightSidebar' number
            rowElements.push(React.createElement('img', {key: 2, src: eyeOff, className: 'eyeOffImage'}, null)) //Image tag for 'eyeOff' icon 
            elements.push(React.createElement('div', {className: getClass(), key: cnames[i].Name, onClick: () => {props.displaySetState(cnames[props.orderState[i]].Name)}}, rowElements))
        }

        const rightSideBar = React.createElement('div', {id: 'rightSideBar',}, elements)

        return(
            rightSideBar
        )


    }

    else{
        let elements= [];  //'rightSidebar' display when list toggle == true
        for (let i = 0; i<cnames.length; i++){

            const getClass = () => {
                if(props.displayState == cnames[props.orderState[i]].Name){
                    return 'nameListSelected'
                }
                else{
                    return 'nameList'
                }
            }

            let rowElements = []
            rowElements.push(React.createElement('p', {className: 'listNumber', key: 1}, i+1,'.'))  //Paragraph tag for 'rightSidebar' number
            rowElements.push(React.createElement('p', {key: 2}, cnames[props.orderState[i]].Name))  //Paragraph tag for 'rightSidebar' constellation name
            elements.push(React.createElement('div', {className: getClass(), key: cnames[i].Name, onClick: () => {props.displaySetState(cnames[props.orderState[i]].Name)}}, rowElements))
        }

        const rightSideBar = React.createElement('div', {id: 'rightSideBar',}, elements)

        return(
            rightSideBar
        )
    }
}

export default RightSideBar

