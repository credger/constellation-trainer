import coords from '../data/percent3.json'
import React from 'react'

const DrawStars = () => {

    const c = 'Boo'


    let stars = []
    for(let i = 0; i< coords.length; i++){
        if(coords[i]['C'] == c){
            console.log(coords[i])
            stars.push(React.createElement('div', {className: 'testStar', key: coords[i]['HR'], style: {right: coords[i]['percentX'], bottom: coords[i]['percentY']}}))
        }
    }
    const fixedAspectRatio = React.createElement('div', {className: 'fixedAspectRatio',}, stars)

    return fixedAspectRatio
    


    
}

export default DrawStars