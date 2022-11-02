import coords from '../data/stereographic_mainStars_percent_coords.json'
import React from 'react'
import cnames from '../data/constellationList_with_abbr.json'
import DrawLines from './DrawLines'
import DrawBackgroundStars from './DrawBackgroundStars'

const DrawStars = (props) => {
    
    let cname = null
    for(let i=0; i<cnames.length; i++){                 //Get abbreviation for currently displayed constellation
        if (cnames[i]['Name'] == props.displayState){   
            cname = cnames[i]['Abbr']                   //Abbr used to filter cnames
            break
        }
    }

    let stars = []
    for(let i = 0; i< coords.length; i++){
        if(coords[i]['C'] == cname){
            const starSize = String(Math.abs(parseFloat(coords[i]['V'])+(-6.5))*2)+"px" //Convert star visual magnitude to px value for height and width
            const starRadius = String(Math.abs(parseFloat(coords[i]['V'])+(-6.5)))+"px" //StarRadius set to 1/2 of starSize
            const px = coords[i]['percentX']                                            //star x position as %
            const py = coords[i]['percentY']                                            //star y position as %
            stars.push(React.createElement('div', {className: 'star', key: 'mainStar' + String(coords[i]['HR']),
            style: {right: `calc(${px} - ${starRadius})`, bottom: `calc(${py} - ${starRadius})`,
            height: starSize, width: starSize, borderRadius: starRadius }}))
        }
    }
    
    const fixedAspectRatio = React.createElement('div', {className: 'fixedAspectRatio'}, [stars, DrawLines(props), DrawBackgroundStars(props)])

    return fixedAspectRatio 
}

export default DrawStars
