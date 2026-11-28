/**
 * pages.config.js - Page routing configuration
 * 
 * This file is AUTO-GENERATED. Do not add imports or modify PAGES manually.
 * Pages are auto-registered when you create files in the ./pages/ folder.
 * 
 * THE ONLY EDITABLE VALUE: mainPage
 * This controls which page is the landing page (shown when users visit the app).
 * 
 * Example file structure:
 * 
 *   import HomePage from './pages/HomePage';
 *   import Dashboard from './pages/Dashboard';
 *   import Settings from './pages/Settings';
 *   
 *   export const PAGES = {
 *       "HomePage": HomePage,
 *       "Dashboard": Dashboard,
 *       "Settings": Settings,
 *   }
 *   
 *   export const pagesConfig = {
 *       mainPage: "HomePage",
 *       Pages: PAGES,
 *   };
 * 
 * Example with Layout (wraps all pages):
 *
 *   import Home from './pages/Home';
 *   import Settings from './pages/Settings';
 *   import __Layout from './Layout.jsx';
 *
 *   export const PAGES = {
 *       "Home": Home,
 *       "Settings": Settings,
 *   }
 *
 *   export const pagesConfig = {
 *       mainPage: "Home",
 *       Pages: PAGES,
 *       Layout: __Layout,
 *   };
 *
 * To change the main page from HomePage to Dashboard, use find_replace:
 *   Old: mainPage: "HomePage",
 *   New: mainPage: "Dashboard",
 *
 * The mainPage value must match a key in the PAGES object exactly.
 */
import Accessibility from './pages/Accessibility';
import AirFreight from './pages/AirFreight';
import Blog from './pages/Blog';
import CEOMessage from './pages/CEOMessage';
import CarbonNeutral from './pages/CarbonNeutral';
import Company from './pages/Company';
import Contact from './pages/Contact';
import CookiesPolicy from './pages/CookiesPolicy';
import CustomsClearance from './pages/CustomsClearance';
import DocumentAML from './pages/DocumentAML';
import BlogPostPage from './pages/BlogPostPage';
import DocumentAudit2023 from './pages/DocumentAudit2023';
import DocumentAudit2024 from './pages/DocumentAudit2024';
import DocumentAudit2025 from './pages/DocumentAudit2025';
import DocumentCompliance from './pages/DocumentCompliance';
import DocumentProhibited from './pages/DocumentProhibited';
import DocumentRisk from './pages/DocumentRisk';
import DocumentSanctions from './pages/DocumentSanctions';
import Documents from './pages/Documents';
import DomesticShipping from './pages/DomesticShipping';
import FourPL from './pages/FourPL';
import GetQuote from './pages/GetQuote';
import GlobalNetwork from './pages/GlobalNetwork';
import Home from './pages/Home';
import MetalsTrading from './pages/MetalsTrading';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Profile from './pages/Profile';
import ProjectLogistics from './pages/ProjectLogistics';
import RailFreight from './pages/RailFreight';
import RoadFreight from './pages/RoadFreight';
import SeaFreight from './pages/SeaFreight';
import Services from './pages/Services';
import TermsConditions from './pages/TermsConditions';
import Testimonials from './pages/Testimonials';
import TrackOrder from './pages/TrackOrder';
import Warehousing from './pages/Warehousing';
import WoodTrading from './pages/WoodTrading';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Accessibility": Accessibility,
    "AirFreight": AirFreight,
    "Blog": Blog,
    "BlogPostPage": BlogPostPage,
    "CEOMessage": CEOMessage,
    "CarbonNeutral": CarbonNeutral,
    "Company": Company,
    "Contact": Contact,
    "CookiesPolicy": CookiesPolicy,
    "CustomsClearance": CustomsClearance,
    "DocumentAML": DocumentAML,
    "DocumentAudit2023": DocumentAudit2023,
    "DocumentAudit2024": DocumentAudit2024,
    "DocumentAudit2025": DocumentAudit2025,
    "DocumentCompliance": DocumentCompliance,
    "DocumentProhibited": DocumentProhibited,
    "DocumentRisk": DocumentRisk,
    "DocumentSanctions": DocumentSanctions,
    "Documents": Documents,
    "DomesticShipping": DomesticShipping,
    "FourPL": FourPL,
    "GetQuote": GetQuote,
    "GlobalNetwork": GlobalNetwork,
    "Home": Home,
    "MetalsTrading": MetalsTrading,
    "PrivacyPolicy": PrivacyPolicy,
    "Profile": Profile,
    "ProjectLogistics": ProjectLogistics,
    "RailFreight": RailFreight,
    "RoadFreight": RoadFreight,
    "SeaFreight": SeaFreight,
    "Services": Services,
    "TermsConditions": TermsConditions,
    "Testimonials": Testimonials,
    "TrackOrder": TrackOrder,
    "Warehousing": Warehousing,
    "WoodTrading": WoodTrading,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};