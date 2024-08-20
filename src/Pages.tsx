import { Routes, Route } from 'react-router-dom';

import Home from './screens/Home';
import Second from './screens/Second';

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/second" element={<Second />} />
    </Routes>
  )
}

export default Pages;