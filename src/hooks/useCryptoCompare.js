import { useEffect, useState } from 'react'
import NotificationService from 'services/notification/notification.service'
import { COINS } from 'constants/coins'

export function useCryptoCompare() {
  const [cryptoCompare, setCryptoCompare] = useState(null)

  const getCats = async () => {
    try {
      const response = await fetch(
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${COINS.join(',')}&tsyms=USD`,
      )
      const cryptoCompare = await response.json()
      setCryptoCompare(cryptoCompare)
    } catch (e) {
      NotificationService.error({
        title: 'fetch failed!',
        message: 'fetch cryptoCompare failed!',
      })
    }
  }

  useEffect(() => {
    getCats()
  }, [])

  return cryptoCompare
}
