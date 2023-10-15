import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import ListAltIcon from '@mui/icons-material/ListAlt';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useEffect, useRef, useState } from "react";
import { getUserDetails } from "../services/user";
import MonthlyWiseCard from "../components/monthlyWiseCard/MonthlyWiseCard";
import './Dashboard.scss'
import Chart from '../components/chart/ChartComponent'
import MenuIcon from '@mui/icons-material/Menu';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// fgdsgds
import SidePanelOptionButton from "../components/sidePanelOptionButton/SidePanelOptionButton"
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import PersonIcon from '@mui/icons-material/Person';

function Dashboard() {
    const [user, setUser] = useState({})
    const menu = useRef();

    const handleMenu = () => {
        menu.current.style.left = menu.current.style.left === "0px" ? "-300px" : "0px";
    }
    const monthlyDetails = [
        {
            name: 'Earnings',
            icon: <AttachMoneyIcon className="icon" />,
            value: 234,
            hike: {
                status: 'up',
                value: '37.8%'
            },
            iconBg: "rgba(0, 128, 0, 0.2)",
            iconColor: 'green'
        }, {
            name: 'Orders',
            icon: <ListAltIcon className="icon" />,
            value: 234,
            hike: {
                status: 'down',
                value: '2%'
            },
            iconBg: "rgba(206, 0, 206, 0.2)",
            iconColor: 'purple'
        }, {
            name: 'Balance',
            icon: <AccountBalanceWalletIcon className="icon" />,
            value: 234,
            hike: {
                status: 'down',
                value: '2%'
            },
            iconBg: "rgba(21, 0, 214, 0.2)",
            iconColor: 'blue'
        }, {
            name: 'Total Sales',
            icon: <ShoppingBagIcon className="icon" />,
            value: 234,
            hike: {
                status: 'up',
                value: '11%'
            },
            iconColor: 'red'
        }
    ]
    window.addEventListener('resize', (ctx) => {
        if (ctx.target.innerWidth > 1366) {
            menu.current.style.left = "0px"
        } else if (ctx.target.innerWidth < 1100) {
            menu.current.style.left = "-300px"
        }
    })
    useEffect(() => {
        const user = getUserDetails()
        setUser(user)
    }, [])
    const barChartLabel = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const barchartConfig = {
        type: 'bar',
        data: {
            labels: barChartLabel,
            datasets: [
                {
                    backgroundColor: barChartLabel?.map(() => "rgba(182, 183, 255, 0.296)"),
                    hoverBackgroundColor: barChartLabel?.map(() => "blue"),
                    data: barChartLabel?.map(() => Math.random() * 100),
                    borderSkipped: false,
                    borderRadius: 10,
                    padding: 10
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false,
                    }
                    , border: {
                        display: false,
                    },
                },
                y: {
                    grid: {

                        display: false,
                    },
                    border: {
                        display: false,
                    },
                    ticks: {
                        display: false,
                    }
                }
            },
            title: {
                display: false,
                text: 'Predicted world population (millions) in 2050'
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    }
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
    const sliceThickness = {
        id: "sliceThickness",
        beforeDraw(chart, plugin) {
            chart.getDatasetMeta(0).data[0].outerRadius = 150

            chart.getDatasetMeta(0).data[1].outerRadius = 140
            chart.getDatasetMeta(0).data[1].innerRadius = 90

            chart.getDatasetMeta(0).data[2].innerRadius = 100
            chart.getDatasetMeta(0).data[2].outerRadius = 130


            // add text
            const ctx = chart.ctx;

            ctx.fillStyle = "black";
            ctx.font = "bold 33px Arial";

            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("65%", chart.width / 2, chart.height / 2 - 22);

            ctx.font = "bold 20px Arial";
            ctx.fillText("Total New", chart.width / 2, chart.height / 2);
            ctx.fillText("Customers", chart.width / 2, chart.height / 2 + 22);
        }
    }
    const doughnutChartConfig = {
        type: 'doughnut',
        data: {
            labels: ["Africa", "Asia", "Europe"],
            datasets: [
                {
                    label: "Population (millions)",
                    backgroundColor: ["#ff0080", "#8400ff", "rgba(182, 183, 255, 0.296)"],
                    data: [20, 40, 40],
                    borderWidth: [0, 0, 0]
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'Predicted world population (millions) in 2050'
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        },
        plugins: [sliceThickness]
    }

    return (
        <div className="dashboard">
            <div className={"side-panel"} ref={menu}>

                <div className="close-menu" onClick={handleMenu}>
                    <CloseIcon />
                </div>
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
            <div className="dashboard-details">
                <div className="dashboard-container">
                    <div className="welcome-message">
                        <div className="left">
                            <div className="menu-hamberger" onClick={handleMenu}>
                                <MenuIcon />
                            </div>
                            <h4>Hello {user.name} 👋</h4>
                        </div>
                        <div className="right">
                            <div className="serach-bar">
                                <ManageSearchIcon/>
                                <input type="text" placeholder='Search' className='search-input'/>
                            </div>
                        </div>
                    </div>
                    <div className="monthly-details">
                        {
                            monthlyDetails?.map((props, index) => <MonthlyWiseCard {...props} key={index} />)
                        }
                    </div>
                    <div className="graph">
                        <div className="line-graph">
                            <div className="head">
                                <div className="left">
                                    <h3>Overview</h3>
                                    <span>Monthly Earning</span>
                                </div>
                                <div className="right">
                                    <span>Quarterly</span>
                                    <ExpandMoreIcon/>
                                </div>
                            </div>
                            <Chart key={1} data={barchartConfig?.data} type={barchartConfig?.type} options={barchartConfig?.options} plugins={barChartLabel?.plugin} />
                        </div>
                        <div className="pie-graph">
                            <div className="head">
                                <h3>Customers</h3>
                                <span>Customers that Buy products</span>
                            </div>
                            <Chart key={2} data={doughnutChartConfig?.data} options={doughnutChartConfig?.options} type={doughnutChartConfig?.type} plugins={doughnutChartConfig?.plugins} />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Dashboard