import { RouterProvider } from 'react-router'
import { GlobalStyles } from './components/Global/GlobalStyles'
import { Theme } from './components/Theme/Theme'
import { router } from './router/router'
import { TableContextProvider } from './context/TableContext'

function App() {

  return (
    <Theme>
      <TableContextProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
      </TableContextProvider>
    </Theme>
  )
}

export default App
