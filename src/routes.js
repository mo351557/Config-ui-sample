// @material-ui/icons
// import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
// import Notifications from "@material-ui/icons/Notifications";
// import Unarchive from "@material-ui/icons/Unarchive";
// import Language from "@material-ui/icons/Language";
import Apps from "@material-ui/icons/Apps";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";
// import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
// import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
// import NotificationsPage from "views/Notifications/Notifications.jsx";
// import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";
import Publish from "views/Publish/Publish.jsx"
// core components/views for RTL layout
// import RTLPage from "views/RTLPage/RTLPage.jsx";



const dashboardRoutes = [

  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "",
    icon: Apps,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Manage Metadata",
    rtlName: "",
    icon: Person,
    component: "",
    layout: "/"
  },
  {
    path: "/table",
    name: "Review and Approve",
    rtlName: "",
    icon: "content_paste",
    component: TableList,
    layout: "/"
  },
  {
    path: "/publish",
    name: "Publish",
    rtlName: "",
    icon: LibraryBooks,
    component: Publish,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "System Administrator",
    rtlName: "",
    icon: BubbleChart,
    component: Icons,
    layout: "/"
  },
  {
    path: "/maps",
    name: "Sign Out",
    rtlName: "",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  }
];

export default dashboardRoutes;
