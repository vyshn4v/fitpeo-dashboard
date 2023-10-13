import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import "./MonthlyWiseCard.scss"
function MonthlyWiseCard(props) {
  const { name, icon, value, hike } = props;
  return (
    <div className="monthly-wise-card">
      <div className="icons">
        <div className="round">
          {icon}
        </div>
      </div>
      <div className="details">
        <div className="name">
          <h6>{" " + name}</h6>
        </div>
        <div className="value">
          <h3><AttachMoneyIcon />{value}</h3>
        </div>
        <div className="hike">
            <ArrowUpwardIcon />
            in this month
        </div>
      </div>
    </div>
  )
}

export default MonthlyWiseCard