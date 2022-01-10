import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ThemeNestingExtend from "./components/UI/Theme";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { GlobalContext } from "./components/context/Provider";
import { autoLogin } from "./components/context/actions/auth/autoLogin";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import useInterval from "./components/hooks/useInterval";

import AlertTemplate from "react-alert-template-basic";
import { updateQuotes } from "./components/context/actions/stocks/addData";

const ForgotPassword = React.lazy(() =>
  import("./components/Auth/ForgotPassword")
);
const ResetPassword = React.lazy(() =>
  import("./components/Auth/ResetPassword")
);
const Signin = React.lazy(() => import("./components/Auth/Signin"));
const Signup = React.lazy(() => import("./components/Auth/Signup"));
const Dashboard = React.lazy(() => import("./components/Views/Dashboard"));
const Details = React.lazy(() => import("./components/Views/Details"));
const Profile = React.lazy(() => import("./components/Views/Profile"));
const Manage = React.lazy(() => import("./components/Views/Admin"));


const Portfolio = React.lazy(() => import("./components/Views/Portfolio"));

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 3000,
  offset: "30px",
  transition: transitions.SCALE,
};

function App() {
  const {
    authDispatch,
    stocksDispatch,
    authState: { auth },
    sto,
  } = React.useContext(GlobalContext);

  React.useEffect(() => {
    autoLogin()(authDispatch);
  }, []);

  useInterval(async () => {
    if (auth.data !== null) {
      updateQuotes()(stocksDispatch);
      console.log("res pol set");
    }
  }, 20000);

  return (
    <ThemeNestingExtend>
      <AlertProvider template={AlertTemplate} {...options}>
        <Suspense
          fallback={
            <Box
              sx={{
                display: "flex",
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
                opacity: 0.8,
              }}
            >
              <CircularProgress />
            </Box>
          }
        >
          <Routes>
            {auth.data == null ? (
              <>
                <Route path="/forgotPassword" element={<ForgotPassword />} />
                <Route path="/resetPassword" element={<ResetPassword />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/*" element={<Signin />} />
              </>
            ) : (
              <>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/manage" element={<Manage />} />
                <Route path="/details" element={<Details />} />
                <Route path="/*" element={<Dashboard />} />
              </>
            )}
          </Routes>
        </Suspense>
      </AlertProvider>
    </ThemeNestingExtend>
  );
}

export default App;
