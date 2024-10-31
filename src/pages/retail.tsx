import { useSession } from "next-auth/react";

export default function Retail() {
  const { data: session } = useSession();

  if (!session) {
    return <p>Access denied. Please sign in.</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Retail Management</h1>
      {/* Add retail management components here */}
    </div>
  );
}
