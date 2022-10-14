import './styles.css'
import React from 'react'
import cnames from '../data/constellationList_with_abbr.json'



const RightSideBar = (props) => {



    const x = props.l1
    if(x == false){
        return null
    }

    else{
        let elements= [];
        for (let i = 0; i<cnames.length; i++){

            const selected = 'nameListSelected'
            const notSelected = 'nameList'
            const getClass = () => {
                if(props.d1 == cnames[props.o1[i]].Name){
                    return selected
                }
                else{
                    return notSelected
                }
            }

            let rowElements = []
            rowElements.push(React.createElement('p', {className: 'listNumber', key: 1}, i+1,'.'))
            rowElements.push(React.createElement('p', {key: 2}, cnames[props.o1[i]].Name))
            elements.push(React.createElement('div', {className: getClass(), key: cnames[i].Name, onClick: () => {props.d2(cnames[props.o1[i]].Name)}}, rowElements))
        }

        const rightSideBar = React.createElement('div', {id: 'rightSideBar',}, elements)

        return rightSideBar
    }
}

export default RightSideBar


//elements.push(React.createElement('div', {className: 'nameList', key: cnames[i].Name, onClick: () => {props.d2(cnames[props.o1[i]].Name)}}, rowElements))
