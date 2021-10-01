import { act, renderHook } from '@testing-library/react-hooks'
import { COINS } from 'constants/coins'
import { useCryptoCompare } from './useCryptoCompare'

// global.fetch = jest.fn(() => Promise.resolve({
//   json: () => Promise.resolve({
//     DISPLAY: {
//       BTC: {
//         USD: {
//           TOSYMBOL: '$',
//         },
//       },
//     },
//   }),
// }))

describe('useCatImages', () => {
  it('should return images', async () => {
    const { result } = renderHook(() => useCryptoCompare())

    // wait for async code in the hook to finish
    // See, e.g.: https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning#2-when-testing-custom-hooks
    await act(() => Promise.resolve())

    expect(Object.keys(result.current.DISPLAY)).toBe(COINS.length)
    // expect(result.current[0].id).toBe('15o')
    // expect(result.current[1].url).toBe(
    //   'https://cdn2.thecatapi.com/images/217.jpg',
    // )
  })
})
