import React from 'react'
import { useQuery } from '@tanstack/react-query'

const fetchRecentCustomers = async () => {
  const response = await fetch('/api/customers/recent')
  if (!response.ok) throw new Error('Błąd ładowania')
  return response.json()
}

const CustomerMarquee = () => {
  const { data: customers, isLoading } = useQuery({
    queryKey: ['recentCustomers'],
    queryFn: fetchRecentCustomers,
    refetchInterval: 30000,
    staleTime: 30000,
  })

  if (isLoading || !customers?.length) return null

  const doubledCustomers = [...customers, ...customers]

  return (
    <div className="customer-marquee">
      <div className="marquee-content">
        {doubledCustomers.map((customer, index) => (
          <div key={`${customer.id}-${index}`} className="marquee-item">
            <img
              src={`https://mc-heads.net/avatar/${customer.minecraftNick}/32`}
              alt={customer.minecraftNick}
              className="marquee-avatar"
            />
            <span className="marquee-name">{customer.minecraftNick}</span>
            <span className="marquee-reward">{customer.rewardLabel || '🎁'}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CustomerMarquee