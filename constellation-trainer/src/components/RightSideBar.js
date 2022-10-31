import './styles.css'
import React from 'react'
import cnames from '../data/constellationList_with_abbr.json'
import eyeOff from '../icons/eye-off.svg'




const RightSideBar = (props) => {

    const x = props.listState //State of list toggle
    if(x == false){
        let elements= [];
        for (let i = 0; i<cnames.length; i++){

            const selected = 'nameListSelected'
            const notSelected = 'nameList'
            const getClass = () => {
                if(props.displayState == cnames[props.orderState[i]].Name){
                    return selected
                }
                else{
                    return notSelected
                }
            }

            let rowElements = []
            rowElements.push(React.createElement('p', {className: 'listNumber', key: 1}, i+1,'.'))
            rowElements.push(React.createElement('img', {key: 2, src: eyeOff, className: 'eyeOffImage'}, null))
            elements.push(React.createElement('div', {className: getClass(), key: cnames[i].Name, onClick: () => {props.displaySetState(cnames[props.orderState[i]].Name)}}, rowElements))
        }

        const rightSideBar = React.createElement('div', {id: 'rightSideBar',}, elements)

        return(
            rightSideBar
        )


    }

    else{
        let elements= [];
        for (let i = 0; i<cnames.length; i++){

            const selected = 'nameListSelected'
            const notSelected = 'nameList'
            const getClass = () => {
                if(props.displayState == cnames[props.orderState[i]].Name){
                    return selected
                }
                else{
                    return notSelected
                }
            }

            let rowElements = []
            rowElements.push(React.createElement('p', {className: 'listNumber', key: 1}, i+1,'.'))
            rowElements.push(React.createElement('p', {key: 2}, cnames[props.orderState[i]].Name))
            elements.push(React.createElement('div', {className: getClass(), key: cnames[i].Name, onClick: () => {props.displaySetState(cnames[props.orderState[i]].Name)}}, rowElements))
        }

        const rightSideBar = React.createElement('div', {id: 'rightSideBar',}, elements)

        return(
            rightSideBar
        )
    }
}

export default RightSideBar

