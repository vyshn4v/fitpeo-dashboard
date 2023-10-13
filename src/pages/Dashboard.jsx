import SidePanelOptionButton from "../components/sidePanelOptionButton/SidePanelOptionButton"
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Dashboard.scss'
import { useEffect, useState } from "react";
import { getUserDetails } from "../services/user";
function Dashboard() {
    const [user, setUser] = useState({})
    const sidePanelOptions = [
        {
            name: "Dashboard",
            icon: <DashboardIcon />
        },
        {
            name: "Product",
            icon: <ViewInArIcon />
        },
        {
            name: "Customers",
            icon: <PersonIcon />
        },
        {
            name: "Income",
            icon: <AttachMoneyIcon />
        },
        {
            name: "Promote",
            icon: <LocalOfferIcon />
        },
        {
            name: "Help",
            icon: <LiveHelpIcon />
        }
    ]
    useEffect(() => {
        const user = getUserDetails()
        setUser(user)
    }, [])
    return (
        <div className="dashboard">
            <div className="side-panel">
                <div className="dashboard-head">
                    <div className="head">
                        <SpaceDashboardIcon /><h4>Dashboard</h4>
                    </div>
                </div>
                <div className="options">
                    {
                        sidePanelOptions?.map(({ name, icon }, index) => <SidePanelOptionButton key={index} name={name} icon={icon} />)
                    }
                </div>
                <div className="user-details">
                    <div className="user-profile">
                        <div className="left-side">
                            <div className="profile">
                                <img src={user?.profile_pic} alt="profile_pic" />
                            </div>
                            <div className="details">
                                <h4>{user?.name}</h4>
                                <span className="description">{user?.job}</span>
                            </div>
                        </div>
                        <div className="right-side">
                            <div className="icon">
                                <KeyboardArrowDownIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard