import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Keycloak";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";
import SecuredPage from "./pages/Securedpage";
import PrivateRoute from "./helpers/PrivateRoute";

function App() {
 return (
   <div>
     <ReactKeycloakProvider authClient={keycloak} initOptions={{
          checkLoginIframe: false,
            }}>
       <Nav />
       <Router>
         <Routes>
           <Route exact path="/" element={<Homepage/>} />
           <Route
             path="/secured"
             element={
               <PrivateRoute>
                 <SecuredPage/>
               </PrivateRoute>
             }
           />
         </Routes>
       </Router>
     </ReactKeycloakProvider>
   </div>
 );
}

export default App;