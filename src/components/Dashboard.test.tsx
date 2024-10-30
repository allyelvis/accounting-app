import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Dashboard from './Dashboard'

// Mock the socket.io-client
jest.mock('socket.io-client', () => {
  const emit = jest.fn()
  const on = jest.fn()
  const disconnect = jest.fn()
  return jest.fn(() => ({
    emit,
    on,
    disconnect,
  }))
})

const mockStore = configureStore([])

describe('Dashboard', () => {
  let store

  beforeEach(() => {
    store = mockStore({
      dashboard: {
        totalRevenue: 45231.89,
        restaurantSales: 21584.32,
        retailSales: 14589.23,
        hotelRevenue: 9058.34,
      },
    })
  })

  it('renders the dashboard with correct revenue figures', () => {
    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    )

    expect(screen.getByText('Accounting Dashboard')).toBeInTheDocument()
    expect(screen.getByText('5231.89')).toBeInTheDocument()
    expect(screen.getByText('1584.32')).toBeInTheDocument()
    expect(screen.getByText('4589.23')).toBeInTheDocument()
    expect(screen.getByText('058.34')).toBeInTheDocument()
  })

  it('renders all tabs', () => {
    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    )

    expect(screen.getByRole('tab', { name: 'Overview' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Restaurant' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Retail' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Hotel' })).toBeInTheDocument()
  })

  // Add more tests as needed
})
