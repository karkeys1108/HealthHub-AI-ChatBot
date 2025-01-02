import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'

import LandingPage from "./pages/LandingPage.tsx";
import SurveyPage from "./pages/SurveyPage.tsx";
import Patient from "./components/consultation/patient/Patient.tsx";
import ChatBot from "./components/consultation/Chatbot/Chat.tsx";
import Logout from "./components/consultation/Logout/Logout.tsx";
import PageNotFound from "./components/consultation/PageNotFound/PageNotFound.tsx";
import UploadReports from "./components/consultation/patient/UploadReports.tsx";
import deferRoleChecking from "./components/consultation/deferRoleChecking.ts";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Analytics } from "@vercel/analytics/react";
import ServicesPage from "./pages/ServicesPage.tsx";


const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/survey", element: <SurveyPage /> },
    { path: "/consultation/patient", element: <Patient /> },
    { path: "/consultation/chat_bot",
        element: <ChatBot />,
        loader: deferRoleChecking,
    },
    { path: "/consultation/logout", element: <Logout /> },
    {
        path: "/consultation/upload_reports",
        element: <UploadReports />,
        loader: deferRoleChecking,
    },
    { path: "/services", element: <ServicesPage/>},
    { path: "*", element: <PageNotFound /> },
]);

function App() {
    return (
        <GoogleOAuthProvider clientId="1011414615826-gnek02s2mud1upst69nre87fkfpu7151.apps.googleusercontent.com">
            <RouterProvider router={router} />
            <Analytics />
        </GoogleOAuthProvider>
    );
}

export default App;