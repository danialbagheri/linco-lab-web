import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import {PrivateRoute} from 'utils'
import {Home, Login} from 'screens'

const router = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route element={<PrivateRoute />}>
        <Route path="/home" element={<Home />} />
      </Route>
      <Route element={<Login />} path="/login" />
    </Routes>
  </Router>
)

export default router
