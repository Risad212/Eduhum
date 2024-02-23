import { Poppins} from 'next/font/google'
import './globals.css';
import Header from './components/header/header'
import Footer from './components/footer/footer'

const poppins = Poppins({
  weight: ['400','500', '700'],
  style: ['normal'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Eduhive',
  description: 'Online Management System',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
         {children}
       <Footer />
      </body>
    </html>
  )
}
