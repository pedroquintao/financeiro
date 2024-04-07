import { RouterProvider } from 'react-router'
import { GlobalStyles } from './components/Global/GlobalStyles'
import { Theme } from './components/Theme/Theme'
import { router } from './router/router'
import { TableContextProvider } from './context/TableContext'
import { ModalContextProvider } from './context/ModalContext'
import { ColorHandlerContextProvider } from './context/ColorHandlerContext'

function App() {

  return (
    <Theme>
      <ColorHandlerContextProvider>
        <TableContextProvider>
          <ModalContextProvider>
            <GlobalStyles />
            <RouterProvider router={router} />
          </ModalContextProvider>
        </TableContextProvider>
      </ColorHandlerContextProvider>
    </Theme>
  )
}

export default App
