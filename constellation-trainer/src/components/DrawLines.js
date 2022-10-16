import clines from '../data/lines.json'
import cnames from '../data/constellationList_with_abbr.json'

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



        //need to subract from 100 for line xy coords
        //lines draw to top right corner of star; need to discover fix
        return(
            <svg height="100%" width="100%" key = 'svg1001'>  
                <line x1="26.19%" y1="92.5%" x2="32.37%" y2="62.51%" style={{stroke:"red", strokeWidth:2}} key = 'line1001'></line>
                <line x1="32.37%" y1="62.51%" x2="47.59%" y2="38.94%" style={{stroke:"blue", strokeWidth:2}} key = 'line1002'></line>
            </svg>
        )
    }

}

export default DrawLines