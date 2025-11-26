import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import routesConfig from '../routes/routesConfig';
import { LMS } from '../scorm/LMS';

export const AppRoutes = () => {
	const navigate = useNavigate();
	const lms = LMS.getInstance();

	useEffect(() => navigate(lms.lastPage), []);

	return (
		<Routes>
			{routesConfig.map((route, index) => {
				return <Route key={index} path={route.path} element={<route.component />} />;
			})}
		</Routes>
	);
};
