//import coords from '../data/percent3.json'
import coords from '../data/stereographic_mainStars_percent_coords.json'
import React from 'react'
import cnames from '../data/constellationList_with_abbr.json'
import DrawLines from './DrawLines'
import DrawBackgroundStars from './DrawBackgroundStars'

const DrawStars = (props) => {
    
    let c = null
    for(let i=0; i<cnames.length; i++){
        if (cnames[i]['Name'] == props.displayState){
            c = cnames[i]['Abbr']
            break
        }
    }

    let stars = []
    for(let i = 0; i< coords.length; i++){
        if(coords[i]['C'] == c){
            const starSize = String(Math.abs(parseFloat(coords[i]['V'])+(-6.5))*2)+"px" //Convert star visual magnitude to pixel dimension
            const starRadius = String(Math.abs(parseFloat(coords[i]['V'])+(-6.5)))+"px"
            const px = coords[i]['percentX']
            const py = coords[i]['percentY']
            stars.push(React.createElement('div', {className: 'star', key: 'mainStar' + String(coords[i]['HR']),
            style: {right: `calc(${px} - ${starRadius})`, bottom: `calc(${py} - ${starRadius})`,
            height: starSize, width: starSize, borderRadius: starRadius }}))
        }
    }
    
    const fixedAspectRatio = React.createElement('div', {className: 'fixedAspectRatio'}, [stars, DrawLines(props), DrawBackgroundStars(props)])

    return fixedAspectRatio 
}

export default DrawStars
