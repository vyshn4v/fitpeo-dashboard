import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import "./MonthlyWiseCard.scss"
function MonthlyWiseCard(props) {
  const { name, icon, value, hike, iconColor, iconBg } = props;
  return (
    <div className="monthly-wise-card">
      <div className="icons" >
        <div className="round" style={{ backgroundColor: iconBg, color: iconColor }}>
          {icon}
        </div>
      </div>
      <div className="details">
        <div className="name">
          <h4>{" " + name}</h4>
        </div>
        <div className="value">
          <AttachMoneyIcon /><h3>{value + "K"}</h3>
        </div>
        <div className="hike">
          {
            hike?.status === 'up' ?
              <ArrowUpwardIcon style={{ color: 'green', fontSize: "12px" }} /> :
              <ArrowDownwardIcon style={{ color: 'red', fontSize: "12px" }} />
          }
          <b className="total-hike">
            {hike?.value}
          </b>
          this month
        </div>
      </div>
    </div>
  )
}

export default MonthlyWiseCard