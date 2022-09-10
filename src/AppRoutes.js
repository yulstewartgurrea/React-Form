import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Contact from './pages/contact'


const AppRoutes = () => {
	return(
		<BrowserRouter>
			<Routes>
				<Route path="/contact" element={<Contact />} /> 
			</Routes>
			
		</BrowserRouter>
	)
}

export default AppRoutes;