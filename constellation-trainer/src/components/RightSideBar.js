import './styles.css'
import React from 'react'
import cnames from '../data/constellationList.json'

// const RightSideBar = () => {
//     let elements= [];
//     for (let i = 0; i<cnames.length; i++){
//         elements.push(React.createElement('div', {}, cnames[i].Name ))
//     }
//     const nameList = React.createElement('div', {}, elements)

//     return nameList
// }


const RightSideBar = () => {
    let elements= [];
    for (let i = 0; i<cnames.length; i++){
        let rowElements = []
        rowElements.push(React.createElement('p', {className: 'listNumber'}, i+1))
        rowElements.push(React.createElement('p', {}, cnames[i].Name))
        elements.push(React.createElement('div', {className: 'nameList', id: cnames[i].Name}, rowElements))
    }

    const rightSideBar = React.createElement('div', {id: 'rightSideBar'}, elements)

    return rightSideBar
}


export default RightSideBar

            {/* <div className = 'nameList'>
                <p className = 'listNumber'>1.</p>
                <p>Orion</p>
            </div>
            <div className = 'nameList'>
                <p className = 'listNumber'>2.</p>
                <p>Gemini</p>
            </div>
            <div className = 'nameList'>
                <p className = 'listNumber'>3.</p>
                <p>Andromeda</p>
            </div> */}