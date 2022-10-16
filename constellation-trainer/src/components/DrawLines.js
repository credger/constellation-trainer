import clines from '../data/lines.json'

const DrawLines = (props) => {
    
    console.log("Props from DrawLines: ", props.lines1)

    if(props.lines1 == false){
        return null
    }

    else{
        return(
            <svg height="100%" width="100%" key = 'svg1001'>  
                <line x1="20%" y1="20%" x2="50%" y2="50%" style={{stroke:"red", strokeWidth:2}} key = 'line1001'></line>
            </svg>
        )
    }

}

export default DrawLines