import { RouterProvider } from 'react-router'
import { GlobalStyles } from './components/Global/GlobalStyles'
import { Theme } from './components/Theme/Theme'
import { router } from './router/router'
import { TableContextProvider } from './context/TableContext'
import { ModalContextProvider } from './context/ModalContext'
import { ColorHandlerContextProvider } from './context/ColorHandlerContext'
import { DateContextProvider } from './context/DateContext'
import { TableDataContextProvider } from './context/TableDataContext'

function App() {

  return (
    <Theme>
      <ColorHandlerContextProvider>
        <DateContextProvider>
          <ModalContextProvider>
            <TableContextProvider>
              <GlobalStyles />
              <TableDataContextProvider>
                <RouterProvider router={router} />
              </TableDataContextProvider>
            </TableContextProvider>
          </ModalContextProvider>
        </DateContextProvider>
      </ColorHandlerContextProvider>
    </Theme>
  )
}

export default App
