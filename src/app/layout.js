"use client";
import './globals.css'
import { Provider } from 'react-redux'
import Store from '@/store';



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={Store}>
        <body>{children}</body>
      </Provider>
    </html>
  )
}

