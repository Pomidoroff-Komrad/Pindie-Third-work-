import './globals.css'
// import { Header } from './Components/Header/Header'
// import { Footer } from './Components/Footer/Footer'
import {App} from './App'
export const metadata = {
  title: 'Pindie',
  description: 'Портал инди-игр от студентов Яндекс Практикума',
}

export default function RootLayout({ children }) {
  return (
  <html lang="ru">
      <body>
      <App>
      {children}
      </App>
    </body>
  </html>
  )
}