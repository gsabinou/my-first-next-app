// src/app/(components)/ProductList.tsx 
import { ProductCard } from "./ProductCard";

export interface Product {
    id: number;
    title: string;
    price: number;
}
async function getProducts(): Promise<{ products: Product[] }> {
    // A chamada fetch é feita no servidor.
    // Usamos a URL absoluta quando no servidor.
    const res = await fetch('http://localhost:3000/api/products', {
        // cache: 'no-store' // Use para garantir dados sempre frescos (SSR)
        next: { revalidate: 60 } // Use para revalidar a cada 60s (ISR)
    });

    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }

    return {
        products: await res.json(),
    };
}

export const ProductList = async () => {
    const { products } = await getProducts();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}