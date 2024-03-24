import { RouterProvider } from 'react-router'
import { GlobalStyles } from './components/Global/GlobalStyles'
import { Theme } from './components/Theme/Theme'
import { router } from './router/router'
import { UserContextProvider } from './context/UserContext'

function App() {

  return (
    <Theme>
      <UserContextProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
      </UserContextProvider>
    </Theme>
  )
}

export default App
