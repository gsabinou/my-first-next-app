// src/app/api/products/route.ts
import { NextResponse } from 'next/server';

// Usaremos os mesmos dados mockados por enquanto.
// Em um cenário real, isso viria de um banco de dados.
const products = [
    { id: 1, title: 'Smartphone X', price: 2999.99 },
    { id: 2, title: 'Notebook Pro', price: 7499.00 },
    { id: 3, title: 'Fone de Ouvido BT', price: 499.50 },
    { id: 4, title: 'Smartwatch 2', price: 1299.00 },
];

/* eslint-disable @typescript-eslint/no-unused-vars */
export async function GET(request: Request) {
    return NextResponse.json(products);
}