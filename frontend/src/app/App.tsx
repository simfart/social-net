import { FC } from 'react'
import { RouterProvider } from './providers'
import { QueryClientProvider } from './providers/QueryClientProvider'
import { BrowserRouter } from 'react-router-dom'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'

TimeAgo.addDefaultLocale(en)

import './App.scss'

export const App: FC = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <QueryClientProvider>
          <RouterProvider />
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  )
}
