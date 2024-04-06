import { RouterProvider } from 'react-router'
import { GlobalStyles } from './components/Global/GlobalStyles'
import { Theme } from './components/Theme/Theme'
import { router } from './router/router'
import { TableContextProvider } from './context/TableContext'
import { ModalContextProvider } from './context/ModalContext'

function App() {

  return (
    <Theme>
      <TableContextProvider>
      <ModalContextProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ModalContextProvider>
      </TableContextProvider>
    </Theme>
  )
}

export default App
