import { AuthProvider } from "../contexts/AuthContext";
import Dashboard from "./Dashboard";
import Login from "./Login";
import SignUp from "./SignUp";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
Routes;
function App() {
	return (
		<Container
			className="d-flex align-items-center justify-content-center"
			style={{ minHeight: "100vh" }}
		>
			<div className="w-100" style={{ maxWidth: "400px" }}>
				<Router>
					<AuthProvider>
						<Routes>
							<Route exact path="/" Component={PrivateRoute}>
								<Route exact path="/" Component={Dashboard} />
							</Route>
							<Route
								path="/update-profile"
								Component={PrivateRoute}
							>
								<Route
									exact
									path="/update-profile"
									Component={UpdateProfile}
								/>
							</Route>
							<Route path="/signup" Component={SignUp} />
							<Route path="/login" Component={Login} />
							<Route
								path="/forgot-password"
								Component={ForgotPassword}
							/>
						</Routes>
					</AuthProvider>
				</Router>
			</div>
		</Container>
	);
}

export default App;
