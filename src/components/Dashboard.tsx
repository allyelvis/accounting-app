import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import RestaurantPOS from './RestaurantPOS'
import RetailPOS from './RetailPOS'
import HotelPMS from './HotelPMS'

const data = [
  { name: 'Jan', restaurant: 4000, retail: 2400, hotel: 2400 },
  { name: 'Feb', restaurant: 3000, retail: 1398, hotel: 2210 },
  { name: 'Mar', restaurant: 2000, retail: 9800, hotel: 2290 },
  { name: 'Apr', restaurant: 2780, retail: 3908, hotel: 2000 },
  { name: 'May', restaurant: 1890, retail: 4800, hotel: 2181 },
  { name: 'Jun', restaurant: 2390, retail: 3800, hotel: 2500 },
]

export default function Dashboard() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Accounting Dashboard</h1>
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="restaurant">Restaurant</TabsTrigger>
          <TabsTrigger value="retail">Retail</TabsTrigger>
          <TabsTrigger value="hotel">Hotel</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5,231.89</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Restaurant Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,584.32</div>
                <p className="text-xs text-muted-foreground">+15.2% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Retail Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4,589.23</div>
                <p className="text-xs text-muted-foreground">+8.4% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Hotel Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">,058.34</div>
                <p className="text-xs text-muted-foreground">+12.3% from last month</p>
              </CardContent>
            </Card>
          </div>
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Revenue Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="restaurant" fill="#8884d8" />
                  <Bar dataKey="retail" fill="#82ca9d" />
                  <Bar dataKey="hotel" fill="#ffc658" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="restaurant">
          <RestaurantPOS />
        </TabsContent>
        <TabsContent value="retail">
          <RetailPOS />
        </TabsContent>
        <TabsContent value="hotel">
          <HotelPMS />
        </TabsContent>
      </Tabs>
    </div>
  )
}
