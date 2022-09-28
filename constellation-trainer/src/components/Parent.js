import LeftSideBar from './LeftSideBar'
import MainBody from './MainBody'
import RightSideBar from './RightSideBar'
import './styles.css'

const Parent = () => {
    return(
        <div id = 'parent'>
            <LeftSideBar />
            <MainBody />
            <RightSideBar />
        </div>
    )
}

export default Parent