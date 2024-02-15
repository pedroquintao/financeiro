import { RouterProvider } from 'react-router'
import { GlobalStyles } from './components/Global/GlobalStyles'
import { Theme } from './components/Theme/Theme'
import { router } from './router/router'

function App() {

  return (
    <Theme>
      <GlobalStyles />
      <RouterProvider router={router} />
    </Theme>
  )
}

export default App
