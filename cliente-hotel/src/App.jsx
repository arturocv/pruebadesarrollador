import {BrowserRouter as Router,
        Routes,
        Route
} from 'react-router-dom';

import { Layout } from './layout/Layout'

import './App.css'
import { Tutorial } from './components/presentacion/Tutorial';
import NewHotel from './components/createHotel/NewHotel';
import ShowHotel from './components/showHotel/ShowHotel';

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
						<Route exac path={'/'} element={ <Tutorial />} />	
            <Route exac path={'/new-hotel'} element={ <NewHotel />} />	
            <Route path="/:name" element={<ShowHotel />} />				
					</Route>
      </Routes>
    </Router>
  )
}

export default App
