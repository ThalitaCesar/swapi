
import {
  BrowserRouter, Route, Routes
} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Search from '../pages/Search/Search';
import Character from '../pages/Character/Character';
import NotFound from '../pages/NotFound/NotFound';

const Router = () => {

  
  return (
    <BrowserRouter>
    <Routes>
        <Route index element ={<Home/>}   />
        <Route path="/searchpage" element={<Search/>}  />
        <Route path="/player/:videoId" element={<Character/>}  />
        <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  );
};

export default Router;