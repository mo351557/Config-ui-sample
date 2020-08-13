// @material-ui/icons
// import Dashboard from "@material-ui/icons/Dashboard";
// import Person from "@material-ui/icons/Person";
// import LibraryBooks from "@material-ui/icons/LibraryBooks";
// import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
// import Notifications from "@material-ui/icons/Notifications";
// import Unarchive from "@material-ui/icons/Unarchive";
// import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
// import DashboardPage from "views/Dashboard/Dashboard.jsx";
// import UserProfile from "views/UserProfile/UserProfile.jsx";
// import TableList from "views/TableList/TableList.jsx";
// import Typography from "views/Typography/Typography.jsx";
// import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
// import NotificationsPage from "views/Notifications/Notifications.jsx";
// import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";
// core components/views for RTL layout
// import RTLPage from "views/RTLPage/RTLPage.jsx";
import AdminNavbarLinks from "components/Navbars/AdminNavbarLinks.jsx";



const coreCarrierRoutes = [

        {
          path: "/carrierDetails",
          name: "Carrier Details",
          icon: LocationOn,
          component: Maps,
          layout: '/rtl'    
        },
        {
          path: "/businessdetails",
          name: "Business Details",
          icon: LocationOn,
          component: AdminNavbarLinks,
          layout: '/rtl'    
        },
        {
          path: "/lineofbusiness",
          name: "Line of Business",
          icon: LocationOn,
          component: AdminNavbarLinks,
          layout: '/rtl'    
        },
        {
          path: "/legalentity",
          name: "Legal Entity",
          icon: LocationOn,
          component: Maps,
          layout: '/rtl'
        },
        {
          path: "/invoiceremitto",
          name: "Invoice Remit To",
          icon: LocationOn,
          component: Maps
        },
        {
          path: "/ediregistration",
          name: "EDI Registration",
          icon: LocationOn,
          component: Maps,
          layout: '/rtl'
        }
        ];

export default coreCarrierRoutes;
