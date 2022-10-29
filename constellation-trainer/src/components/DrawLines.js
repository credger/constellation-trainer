import clines from '../data/stereographic_lines.json'
import cnames from '../data/constellationList_with_abbr.json'
import React from 'react'
import { calculateNewValue } from '@testing-library/user-event/dist/utils'

const DrawLines = (props) => {
    

    if(props.lines1 == false){
        return null
    }

    else{
       
        let c2 = null
        for(let i=0; i<cnames.length; i++){
            if (cnames[i]['Name'] == props.d1){
                c2 = cnames[i]['Abbr']
                break
            }
        }

        console.log(clines[c2][0][1][1])
        console.log(clines[c2].length)
       
        // let lines = []
        // for(let i = 0; i<clines[c2].length; i++){
        //     lines.push(React.createElement('line', {x1=clines[c2][i][0][0], y1=clines[c2][i][0][1], x2=clines[c2][i][1][0], y2=clines[c2][i][1][1] })
        // }

        let lines = []
        for(let i = 0; i<clines[c2].length; i++){
            const x1 = clines[c2][i][0][0]
            const y1 = clines[c2][i][0][1]
            const x2 = clines[c2][i][1][0]
            const y2 = clines[c2][i][1][1]

        lines.push(React.createElement('line', {x1: `calc(100% - ${x1})`, y1: `calc(100% - ${y1})`, x2: `calc(100% - ${x2})`, y2:`calc(100% - ${y2})`, className: 'LineStyle'}))


        }
        const testSvg = React.createElement('svg', {height: '100%', width: '100%'}, lines)

        //need to subract from 100 for line xy coords
        //lines draw to top right corner of star; need to discover fix
        return(
            testSvg
        )
    }

}

export default DrawLines

//style: {stroke:'red', strokeWidth:1}