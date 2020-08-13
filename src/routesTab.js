// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
// import Person from "@material-ui/icons/Person";
// import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
// import Notifications from "@material-ui/icons/Notifications";
// import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
import FileCopy from "@material-ui/icons/FileCopy";
import RateReview from "@material-ui/icons/RateReview";
import Link from "@material-ui/icons/Link";

// core components/views for Admin layout
// import DashboardPage from "views/Dashboard/Dashboard.jsx";
// import UserProfile from "views/UserProfile/UserProfile.jsx";
// import TableList from "views/TableList/TableList.jsx";
// import Typography from "views/Typography/Typography.jsx";
// import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
// import NotificationsPage from "views/Notifications/Notifications.jsx";
// import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";
//Core Details Components/views/CoreDetails
import CarrierComponent from "views/CoreDetails/CarrierComponent.jsx";
import BusinessDetails from "views/CoreDetails/BusinessDetails.jsx";
import LineOfBusiness from "views/CoreDetails/LineOfBusiness.jsx"
import LegalEntity from 'views/CoreDetails/LegalEntity/LegalEntity.jsx';

import AddLegalEntity from 'views/CoreDetails/LegalEntity/AddLegalEntity.jsx';
import InvoiceRemitTo from 'views/CoreDetails/InvoiceRemitTo/InvoiceRemitTo.jsx';
import AddInvoiceRemit from 'views/CoreDetails/InvoiceRemitTo/AddInvoiceRemit.jsx';
import EdiRegistration from 'views/CoreDetails/EdiRegistration/EdiRegistration.jsx';
import AddEdiRegistration from 'views/CoreDetails/EdiRegistration/AddEdiRegistration.jsx';

// core components/views for RTL layout
// import RTLPage from "views/RTLPage/RTLPage.jsx";
import AdminNavbarLinks from "components/Navbars/AdminNavbarLinks.jsx";



const dashboardRoutes = [


  //For Carrier Names 	

  {
    path: "/core",
    name: "Core Carrier",
    rtlName: "الرموز",
    icon: Dashboard,
    component: CarrierComponent,
    layout: "/rtl",
    extras: [

        {
          path: "/carrier",
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
          component: Maps,
          layout: '/rtl'
        },
        {
          path: "/ediregistration",
          name: "EDI Registration",
          icon: LocationOn,
          component: Maps,
          layout: '/rtl'
        }
        ]
  },
  {
    path: "/maps",
    name: "Finance and Billing",
    rtlName: "",
    icon: FileCopy,
    component: '',
    layout: "/rtl",
    extras: []
  },
  {
    path: "/service",
    name: "Online Services",
    rtlName: "",
    icon: Language,
    component: '',
    layout: "/rtl",
    extras: []

  },
  {
    path: "/plans",
    name: "Plans and Rates",
    rtlName: "",
    icon: RateReview,
    component: '',
    layout: "/rtl",
    extras: []

  },
  {
    path: "/policy",
    name: "Policy Administration",
    rtlName: "",
    icon: BubbleChart,
    component: '',
    layout: "/rtl",
    extras: []

  },
  {
    path: "/exchange",
    name: "Exchange Link",
    rtlName: "",
    icon: Link,
    component: '',
    layout: "/rtl",
    extras: []

  },
  //extras
  {
          path: "/carrier",
          name: "Carrier Details",
          icon: LocationOn,
          component: CarrierComponent,
          layout: '/subtabs',
          extras: [] 
        },
        {
          path: "/businessdetails",
          name: "Business Details",
          icon: LocationOn,
          component: BusinessDetails,
          layout: '/subtabs',
          extras: []     
        },
        {
          path: "/lineofbusiness",
          name: "Line of Business",
          icon: LocationOn,
          component: LineOfBusiness,
          layout: '/subtabs',
          extras: []     
        },
        {
          path: "/legalentity",
          name: "Legal Entity",
          icon: LocationOn,
          component: LegalEntity,
          layout: '/subtabs',
          extras: [] 
        },
        {
          path: "/invoiceremitto",
          name: "Invoice Remit To",
          icon: LocationOn,
          component: InvoiceRemitTo,
          layout: '/subtabs',
          extras: [] 
        },
        {
          path: "/ediregistration",
          name: "EDI Registration",
          icon: LocationOn,
          component: EdiRegistration,
          layout: '/subtabs',
          extras: [] 
        },
        {
          path: "/addlegalentity",
          name: "Add Legal Entity",
          icon: LocationOn,
          component: AddLegalEntity,
          layout: '/subtabs',
          extras: [] 
        },
        {
          path: "/addinvoiceremit",
          name: "Add Legal Entity",
          icon: LocationOn,
          component: AddInvoiceRemit,
          layout: '/subtabs',
          extras: [] 
        },
        {
          path: "/addediregistration",
          name: "Add Legal Entity",
          icon: LocationOn,
          component: AddEdiRegistration,
          layout: '/subtabs',
          extras: [] 
        }
        

];

export default dashboardRoutes;
