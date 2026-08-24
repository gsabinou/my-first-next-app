// export const dynamic = 'force-dynamic';

// async function getDashboardData() {
//     const res = await fetch('https://api.example.com/data', { cache: 'no-store' });
//     if (!res.ok) throw new Error('Erro ao buscar dados');
//     return res.json();
// }

// export default async function DashboardPage() {
//     const data = await getDashboardData();
//     return (
//         <main>
//             <h1>Dashboard</h1>
//             <pre>{JSON.stringify(data, null, 2)}</pre>
//             <p>Atualizado em: {new Date().toLocaleTimeString()}</p>
//         </main>
//     );
// }