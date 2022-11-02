//import coords from '../data/percentBackground.json'
import backgroundCoords from '../data/stereographic_backgroundStars_percent_coords_magnitude_6point5_cuttoff.json'
import React from 'react'
import cnames from '../data/constellationList_with_abbr.json'

const DrawBackgroundStars = (props) => {

    if(props.backgroundState == false){
        return null
    }
    
    else {

    
        let c = null
        for(let i=0; i<cnames.length; i++){                 //Get abbreviation for currently displayed constellation 
            if (cnames[i]['Name'] == props.displayState){
                c = cnames[i]['Abbr']                       //Abbr used to filter cnames
                break
            }
        }

        let backgroundStars = []
        for(let i = 0; i< backgroundCoords.length; i++){
            if(backgroundCoords[i]['C'] == c){
                const starSize = String(Math.abs(parseFloat(backgroundCoords[i]['V'])+(-6.5))*2)+"px"  //Convert star visual magnitude to px value for height and width
                const starRadius = String(Math.abs(parseFloat(backgroundCoords[i]['V'])+(-6.5)))+"px"  //StarRadius set to 1/2 of starSize
                const px = backgroundCoords[i]['percentX']                                             //star x position as %
                const py = backgroundCoords[i]['percentY']                                             //star y position as %
                backgroundStars.push(React.createElement('div', {className: 'star', key: 'background' + String(backgroundCoords[i]['HR']),
                style: {right: `calc(${px} - ${starRadius})`, bottom: `calc(${py} - ${starRadius})`,
                height: starSize, width: starSize, borderRadius: starRadius }}))
            }
        }

        return backgroundStars
    }
}   

export default DrawBackgroundStars