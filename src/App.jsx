import React from 'react'
import 'react-notifications-component/dist/theme.css'
import './styles/index.scss'
import ReactNotification from 'react-notifications-component'
import CryptoCompare from './components/crypto-compare/crypto-compare'

function App() {
  return (
    <>
      <ReactNotification />
      <CryptoCompare />
    </>
  )
}

export default App
