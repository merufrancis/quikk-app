import Register from './Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Payment from './Payment';



function App() {
	return (
		<main className="App">
			<Router>
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/register" exact element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/payment" element={<Payment />} />
				</Routes>
			</Router>
		</main>
	);
}

export default App;
