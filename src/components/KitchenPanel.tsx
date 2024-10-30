import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface KOTItem {
  menuItem: {
    name: string
  }
  quantity: number
  notes?: string
}

interface KOT {
  id: string
  tableNumber: number
  status: 'PENDING' | 'PREPARING' | 'READY' | 'SERVED'
  items: KOTItem[]
}

const KitchenPanel: React.FC = () => {
  const { data: session } = useSession()
  const [kots, setKots] = useState<KOT[]>([])

  useEffect(() => {
    // Fetch KOTs from API
    // This is a placeholder and should be replaced with actual API calls
    setKots([
      {
        id: '1',
        tableNumber: 1,
        status: 'PENDING',
        items: [{ menuItem: { name: 'Burger' }, quantity: 2 }]
      },
      {
        id: '2',
        tableNumber: 2,
        status: 'PREPARING',
        items: [{ menuItem: { name: 'Pizza' }, quantity: 1 }, { menuItem: { name: 'Salad' }, quantity: 1 }]
      }
    ])
  }, [])

  const updateKOTStatus = async (kotId: string, newStatus: 'PREPARING' | 'READY') => {
    // This is a placeholder and should be replaced with actual API call
    setKots(kots.map(kot => 
      kot.id === kotId ? { ...kot, status: newStatus } : kot
    ))
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Kitchen Panel</h2>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
        {kots.filter(kot => kot.status !== 'SERVED').map(kot => (
          <Card key={kot.id}>
            <CardHeader>
              <CardTitle>KOT #{kot.id} - Table {kot.tableNumber}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside mb-4">
                {kot.items.map((item, index) => (
                  <li key={index}>
                    {item.quantity}x {item.menuItem.name}
                    {item.notes && <span className="text-sm text-gray-500"> ({item.notes})</span>}
                  </li>
                ))}
              </ul>
              {kot.status === 'PENDING' && (
                <Button onClick={() => updateKOTStatus(kot.id, 'PREPARING')}>Start Preparing</Button>
              )}
              {kot.status === 'PREPARING' && (
                <Button onClick={() => updateKOTStatus(kot.id, 'READY')}>Mark as Ready</Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default KitchenPanel
