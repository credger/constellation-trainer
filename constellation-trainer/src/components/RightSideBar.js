import './styles.css'
import React from 'react'
import cnames from '../data/constellationList.json'



const RightSideBar = (props) => {
    let elements= [];
    for (let i = 0; i<cnames.length; i++){
        let rowElements = []
        rowElements.push(React.createElement('p', {className: 'listNumber', key: 1}, i+1,'.'))
        rowElements.push(React.createElement('p', {key: 2}, cnames[props.o1[i]].Name))
        elements.push(React.createElement('div', {className: 'nameList', key: cnames[i].Name, onClick: () => {props.d2(cnames[props.o1[i]].Name)}}, rowElements))
    }

    const rightSideBar = React.createElement('div', {id: 'rightSideBar',}, elements)

    return rightSideBar
}

export default RightSideBar




// const RightSideBar = (props) => {
//     let elements= [];
//     for (let i = 0; i<cnames.length; i++){
//         let rowElements = []
//         rowElements.push(React.createElement('p', {className: 'listNumber', key: 1}, i+1,'.'))
//         rowElements.push(React.createElement('p', {key: 2}, cnames[i].Name))
//         elements.push(React.createElement('div', {className: 'nameList', key: cnames[i].Name, onClick: () => {props.d2(cnames[i].Name)}}, rowElements))
//     }

//     const rightSideBar = React.createElement('div', {id: 'rightSideBar',}, elements)

//     return rightSideBar
// }

// export default RightSideBar



// onClick: () => {ClickHandler()}
// onClick: () => {console.log(cnames[i].Name)}


