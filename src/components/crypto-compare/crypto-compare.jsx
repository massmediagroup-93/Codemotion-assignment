import React, { useEffect, useMemo } from 'react'
import { useCryptoCompare } from 'hooks/useCryptoCompare'
import { COINS } from 'constants/coins'
import Loader from 'components/loader/loader'
import { useTable, useSortBy } from 'react-table'
import styles from './crypto-compare.module.scss'
import { getRandomKey } from '../../helpers/get-random-key'

function Table({ columns, data, defaultSortBy }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    toggleSortBy,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
  )

  useEffect(() => toggleSortBy(defaultSortBy.accessor, defaultSortBy.isDescending, true), [defaultSortBy])

  // We don't want to render all 2000 rows for this example, so cap
  // it at 20 for this use case
  const firstPageRows = rows.slice(0, 20)

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} key={getRandomKey()}>
            {headerGroup.headers.map(column => (
              // Add the sorting props to control sorting. For this example
              // we can add them into the header props
              <th {...column.getHeaderProps(column.getSortByToggleProps())} key={getRandomKey()}>
                {column.render('Header')}
                {/* Add a sort direction indicator */}
                <span>
                  {/* eslint-disable-next-line no-nested-ternary */}
                  {column.isSorted
                    ? column.isSortedDesc
                      ? ' ↓ '
                      : ' ↑ '
                    : ''}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {firstPageRows.map(
          (row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} key={getRandomKey()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()} key={getRandomKey()}>{cell.render('Cell')}</td>
                  )
                })}
              </tr>
            )
          },
        )}
      </tbody>
    </table>
  )
}

const CryptoCompare = () => {
  const cryptoCompareData = useCryptoCompare()

  const columns = useMemo(
    () => [
      {
        Header: 'Coin Name',
        accessor: 'coinName',
      },
      {
        Header: 'Current Price (USD)',
        accessor: 'currentPrice',
      },
      {
        Header: 'Opening price (USD)',
        accessor: 'openingPrice',
      },
      {
        Header: 'Price Increase',
        accessor: 'priceIncrease',
      },
    ],
    [],
  )

  const defaultSortBy = {
    accessor: 'priceIncrease',
    isDescending: true,
  }

  const parseResponse = resp => {
    return COINS.map(coin => ({
      coinName: coin,
      currentPrice: resp.DISPLAY[coin].USD.PRICE,
      openingPrice: resp.DISPLAY[coin].USD.OPENDAY,
      priceIncrease: resp.DISPLAY[coin].USD.CHANGEHOUR,
    }))
  }

  const data = useMemo(
    () => (cryptoCompareData ? parseResponse(cryptoCompareData) : ''),
    [cryptoCompareData],
  )

  return (
    <>
      <h1 className={styles.cryptoCompare__title}>Finixio - React.js tech test</h1>
      {cryptoCompareData
        ? (
          <div className={styles.cryptoCompare__table}>
            <Table columns={columns} data={data} defaultSortBy={defaultSortBy} />
          </div>
        )
        : <Loader isCentered />}
    </>
  )
}

export default CryptoCompare
