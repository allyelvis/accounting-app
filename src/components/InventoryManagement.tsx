import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface InventoryItem {
  id: string
  name: string
  quantity: number
  unit: string
  reorderLevel: number
}

const InventoryManagement: React.FC = () => {
  const { data: session } = useSession()
  const [items, setItems] = useState<InventoryItem[]>([])
  const [newItem, setNewItem] = useState<Omit<InventoryItem, 'id'>>({ name: '', quantity: 0, unit: '', reorderLevel: 0 })

  useEffect(() => {
    // Fetch inventory items from API
    // This is a placeholder and should be replaced with actual API calls
    setItems([
      { id: '1', name: 'Tomatoes', quantity: 50, unit: 'kg', reorderLevel: 10 },
      { id: '2', name: 'Cheese', quantity: 20, unit: 'kg', reorderLevel: 5 },
    ])
  }, [])

  const addItem = async () => {
    // This is a placeholder and should be replaced with actual API call
    const item: InventoryItem = { ...newItem, id: Math.random().toString() }
    setItems([...items, item])
    setNewItem({ name: '', quantity: 0, unit: '', reorderLevel: 0 })
  }

  const updateItem = async (id: string, field: keyof InventoryItem, value: string | number) => {
    // This is a placeholder and should be replaced with actual API call
    setItems(items.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ))
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Inventory Management</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Unit</TableHead>
            <TableHead>Reorder Level</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map(item => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                <Input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateItem(item.id, 'quantity', Number(e.target.value))}
                />
              </TableCell>
              <TableCell>{item.unit}</TableCell>
              <TableCell>
                <Input
                  type="number"
                  value={item.reorderLevel}
                  onChange={(e) => updateItem(item.id, 'reorderLevel', Number(e.target.value))}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-4 grid grid-cols-5 gap-2">
        <Input
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          placeholder="Item Name"
        />
        <Input
          type="number"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: Number(e.target.value) })}
          placeholder="Quantity"
        />
        <Input
          value={newItem.unit}
          onChange={(e) => setNewItem({ ...newItem, unit: e.target.value })}
          placeholder="Unit"
        />
        <Input
          type="number"
          value={newItem.reorderLevel}
          onChange={(e) => setNewItem({ ...newItem, reorderLevel: Number(e.target.value) })}
          placeholder="Reorder Level"
        />
        <Button onClick={addItem}>Add Item</Button>
      </div>
    </div>
  )
}

export default InventoryManagement
