// app/page.tsx

import React from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const Page: React.FC = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-6">
          Welcome to the Accounting App
        </h1>
        <p className="mb-4 text-lg text-gray-700">
          This is a dashboard for managing finances across different sectors,
          including restaurant, retail, and hotel.
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Overview Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Access an overview of your financial performance, including
                charts and insights across different sectors.
              </p>
              <Link href="/dashboard">
                <a className="text-blue-600 hover:underline">Go to Dashboard</a>
              </Link>
            </CardContent>
          </Card>

          {/* Restaurant POS Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">
                Restaurant POS
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Manage restaurant sales, inventory, and reports with real-time
                insights.
              </p>
              <Link href="/restaurant">
                <a className="text-blue-600 hover:underline">
                  Manage Restaurant POS
                </a>
              </Link>
            </CardContent>
          </Card>

          {/* Retail POS Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">Retail POS</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Track retail sales, inventory, and reports. Get detailed
                insights on retail performance.
              </p>
              <Link href="/retail-pos">
                <a className="text-blue-600 hover:underline">
                  Manage Retail POS
                </a>
              </Link>
            </CardContent>
          </Card>

          {/* Hotel PMS Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">Hotel PMS</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Manage hotel bookings, revenue, and reports with integrated PMS
                functionality.
              </p>
              <Link href="/hotel-pms">
                <a className="text-blue-600 hover:underline">
                  Manage Hotel PMS
                </a>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Page;
