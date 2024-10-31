import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Accounting App</h1>
      {session ? (
        <nav>
          <ul className="space-y-2">
            <li>
              <Link href="/restaurant">Restaurant Management</Link>
            </li>
            <li>
              <Link href="/retail">Retail Management</Link>
            </li>
            <li>
              <Link href="/hotel">Hotel Management</Link>
            </li>
            <li>
              <Link href="/inventory">Inventory Management</Link>
            </li>
            <li>
              <Link href="/invoice">Invoice Management</Link>
            </li>
          </ul>
        </nav>
      ) : (
        <p>Please sign in to access the application.</p>
      )}
    </div>
  );
}
