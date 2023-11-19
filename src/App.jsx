import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Edit from './pages/Edit';
import FourOFour from './pages/FourOFour';
import Index from './pages/Index';
import New from './pages/New';
import Show from './pages/Show';

function App() {
	return (
		<div>
			<Router>
				<NavBar />
				<main>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/hotwheels' element={<Index />} />
						<Route path='/hotwheels/new' element={<New />} />
						<Route path='/hotwheels/:id' element={<Show />} />
						<Route path='/hotwheels/:id/edit' element={<Edit />} />
						<Route path='*' element={<FourOFour />} />
					</Routes>
				</main>
			</Router>
		</div>
	);
}

export default App;
