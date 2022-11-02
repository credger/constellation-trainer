import clines from '../data/stereographic_lines.json'
import cnames from '../data/constellationList_with_abbr.json'
import React from 'react'

const DrawLines = (props) => {
    
    if(props.linesState == false){  //State of lines toggle on 'leftSidebar'
        return null
    }

    else{
       
        let cname = null
        for(let i=0; i<cnames.length; i++){                 //Get abbreviation for currently displayed constellation
            if (cnames[i]['Name'] == props.displayState){   
                cname = cnames[i]['Abbr']                   //Abbr used to filter cnames
                break
            }
        }

        let lines = []
        for(let i = 0; i<clines[cname].length; i++){
            const x1 = clines[cname][i][0][0]  //line start point x
            const y1 = clines[cname][i][0][1]  //line star point y
            const x2 = clines[cname][i][1][0]  //line end point x
            const y2 = clines[cname][i][1][1]  // line end point y

        lines.push(React.createElement('line', {key: 'Lines' + String(clines[cname][i]), x1: `calc(100% - ${x1})`,
            y1: `calc(100% - ${y1})`, x2: `calc(100% - ${x2})`, y2:`calc(100% - ${y2})`, className: 'lineStyle'}))
        }
        
        const linesSvg = React.createElement('svg', {height: '100%', width: '100%', key: 'linesSvg' }, lines)

        return(
            linesSvg
        )
    }

}

export default DrawLines

