import { RouterProvider } from 'react-router'
import { GlobalStyles } from './components/Global/GlobalStyles'
import { Theme } from './components/Theme/Theme'
import { router } from './router/router'
import { UserContext } from './context/UserContext'

function App() {

  return (
    <Theme>
      {/* <UserContext> */}
        <GlobalStyles />
        <RouterProvider router={router} />
      {/* </UserContext> */}
    </Theme>
  )
}

export default App
