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
          <ModalContextProvider>
            <TableContextProvider>
              <GlobalStyles />
              <RouterProvider router={router} />
            </TableContextProvider>
          </ModalContextProvider>
        </DateContextProvider>
      </ColorHandlerContextProvider>
    </Theme>
  )
}

export default App
