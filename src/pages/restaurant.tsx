import { useSession } from "next-auth/react";
import KOTManagement from "../components/KOTManagement";
import KitchenPanel from "../components/KitchenPanel";
import WaiterPanel from "../components/WaiterPanel";

export default function Restaurant() {
  const { data: session } = useSession();

  if (!session) {
    return <p>Access denied. Please sign in.</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Restaurant Management</h1>
      <KOTManagement />
      <KitchenPanel />
      <WaiterPanel />
    </div>
  );
}
