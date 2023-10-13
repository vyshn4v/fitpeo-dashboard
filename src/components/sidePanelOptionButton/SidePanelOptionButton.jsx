import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './sidePanelOptionButton.scss'
function SidePanelOptionButton({ name, icon }) {
    return (
        <div className="option">
            <div className="left-side">
                <div className="icon">
                    {icon}
                </div>
                <div className="name">
                    {name}
                </div>
            </div>
            <div className="right-side">
                <ArrowForwardIosIcon className='icon' />
            </div>
        </div>
    )
}

export default SidePanelOptionButton