import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setLocation } from '../features/location/locationSlice';
import routesConfig from '../routes/routesConfig';

// Hook para navegar para outras páginas
const useHandleNavigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const locations = routesConfig.map((route) => {
    return route.path;
  });
  
  const handleNavigationClick = (pageToNavigate: string) => {
    const path = locations.filter((path) => pageToNavigate.toLocaleLowerCase() === path).toString();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    dispatch(setLocation(path));
    navigate(path);
  };

  return { handleNavigationClick };
};

export default useHandleNavigation;
