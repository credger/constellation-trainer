import coords from '../data/percent3.json'
import React from 'react'
import cnames from '../data/constellationList_with_abbr.json'

const DrawStars = (props) => {

    console.log(props.d1)
    let c = null
    const currentDisplay = props.d1
    for(let i=0; i<cnames.length; i++){
        if (cnames[i]['Name'] == props.d1){
            c = cnames[i]['Abbr']
            console.log(c)
            break
        }
    }

    // const c = 'Ori'


    let stars = []
    for(let i = 0; i< coords.length; i++){
        if(coords[i]['C'] == c){
            // console.log(coords[i])
            stars.push(React.createElement('div', {className: 'testStar', key: coords[i]['HR'], style: {right: coords[i]['percentX'], bottom: coords[i]['percentY']}}))
        }
    }
    const fixedAspectRatio = React.createElement('div', {className: 'fixedAspectRatio',}, stars)

    return fixedAspectRatio
    


    
}

export default DrawStars