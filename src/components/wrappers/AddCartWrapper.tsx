'use client'

import { Provider } from 'react-redux'
import { store } from '@/app/store'
import AddCartButton from '../buttons/AddCartButton'

export default function AddCartWrapper({counter}: {counter: number}) {
  return (
    <Provider store={store}>
        <AddCartButton counter={counter}/>
    </Provider>
  )
}
