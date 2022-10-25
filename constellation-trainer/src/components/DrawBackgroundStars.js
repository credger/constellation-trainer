import coords from '../data/percentBackground.json'
import React from 'react'
import cnames from '../data/constellationList_with_abbr.json'

const DrawBackgroundStars = (props) => {

    if(props.background1 == false){
        return null
    }
    
    else {

    
        let c = null
        //const currentDisplay = props.d1
        for(let i=0; i<cnames.length; i++){
            if (cnames[i]['Name'] == props.d1){
                c = cnames[i]['Abbr']
                break
            }
        }

        // const c = 'Ori'


        let backgroundStars = []
        for(let i = 0; i< coords.length; i++){
            if(coords[i]['C'] == c){
                //console.log(coords[i])
                const starSize = String(Math.abs(parseFloat(coords[i]['V'])+(-6.5))*2)+"px"
                const starRadius = String(Math.abs(parseFloat(coords[i]['V'])+(-6.5)))+"px"
                const px = coords[i]['percentX']
                const py = coords[i]['percentY']
                backgroundStars.push(React.createElement('div', {className: 'testStar', key: coords[i]['HR'],
                style: {right: `calc(${px} - ${starRadius})`, bottom: `calc(${py} - ${starRadius})`,
                height: starSize, width: starSize, borderRadius: starRadius }}))
            }
        }

        return backgroundStars
    }
}   

export default DrawBackgroundStars