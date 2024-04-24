import { RouterProvider } from 'react-router'
import { GlobalStyles } from './components/Global/GlobalStyles'
import { Theme } from './components/Theme/Theme'
import { router } from './router/router'
import { TableContextProvider } from './context/TableContext'
import { ModalContextProvider } from './context/ModalContext'
import { ColorHandlerContextProvider } from './context/ColorHandlerContext'
import { DateContextProvider } from './context/DateContext'

function App() {

  return (
    <Theme>
      <ColorHandlerContextProvider>
        <DateContextProvider>
          <TableContextProvider>
            <ModalContextProvider>
              <GlobalStyles />
              <RouterProvider router={router} />
            </ModalContextProvider>
          </TableContextProvider>
        </DateContextProvider>
      </ColorHandlerContextProvider>
    </Theme>
  )
}

export default App
