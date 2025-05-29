import { getNotionData } from '../lib/notion';

export default async function NotionCheckPage() {
  // Next.js App Router memungkinkan penggunaan async di server component
  const notionData = await getNotionData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">Data dari Notion</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notionData.map((item) => (
            <div key={item.id} className="border border-gray-200 rounded-lg p-4 shadow-sm">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              {/* Tambahkan properti lain sesuai kebutuhan */}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}