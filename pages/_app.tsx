import '../styles/global.css'
import { AppProps } from 'next/app'

import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import materialUiTheme from '../theme/theme'

import ThemeContextProvider from '../contexts/ThemeContext'
import AuthContextProvider from '../contexts/AuthContext'
import TodosContextProvider from '../contexts/ToDosContext'


/*This App component is the top-level component 
which will be common across all the different 
pages. You can use this App component to keep 
state when navigating between pages, for example.
https://nextjs.org/learn/basics/assets-metadata-css/global-styles
*/
export default function App({ Component, pageProps }: AppProps) {

  // ThemeProvider comes from material-ui,
  // may do better inside ThemeContextProvider
  // if custom theming isn't overriding material-ui

  return (
    <div>
      <AuthContextProvider>
        <ThemeProvider theme={materialUiTheme}>
          <CssBaseline />
          <ThemeContextProvider>
            <TodosContextProvider>
              <Component {...pageProps} />
            </TodosContextProvider>
          </ThemeContextProvider>
        </ThemeProvider>
      </AuthContextProvider>
    </div>
  );
}