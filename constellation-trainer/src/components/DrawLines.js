import clines from '../data/stereographic_lines.json'
import cnames from '../data/constellationList_with_abbr.json'
import React from 'react'

const DrawLines = (props) => {
    
    if(props.linesState == false){
        return null
    }

    else{
       
        let c2 = null
        for(let i=0; i<cnames.length; i++){
            if (cnames[i]['Name'] == props.displayState){
                c2 = cnames[i]['Abbr']
                break
            }
        }

        let lines = []
        for(let i = 0; i<clines[c2].length; i++){
            const x1 = clines[c2][i][0][0]
            const y1 = clines[c2][i][0][1]
            const x2 = clines[c2][i][1][0]
            const y2 = clines[c2][i][1][1]

        lines.push(React.createElement('line', {key: 'Lines' + String(clines[c2][i]), x1: `calc(100% - ${x1})`,
            y1: `calc(100% - ${y1})`, x2: `calc(100% - ${x2})`, y2:`calc(100% - ${y2})`, className: 'lineStyle'}))  //Calc() requires space before and after operator
        }

        const linesSvg = React.createElement('svg', {height: '100%', width: '100%', key: 'linesSvg' }, lines)

        return(
            linesSvg
        )
    }

}

export default DrawLines

