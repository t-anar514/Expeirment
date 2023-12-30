// src/app/pages/products/[id].js
import { useRouter } from 'next/router';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product Details</h1>
      <p>Details for product ID: {id}</p>
    </div>
  );
}
