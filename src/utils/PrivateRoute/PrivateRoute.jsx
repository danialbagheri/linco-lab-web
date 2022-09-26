import * as React from 'react'

import {Outlet, Navigate} from 'react-router-dom'

function PrivateRoute() {
  const [auth] = React.useState(true)

  return auth ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute
