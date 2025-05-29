import { Client } from "@notionhq/client";
import dotenv from 'dotenv';

dotenv.config();

// Inisialisasi Notion client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

// Fungsi untuk mengambil data dari database Notion
export async function getNotionData() {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
    });

    // Proses data sesuai kebutuhan
    const processedData = response.results.map((page) => {
      // Mengambil properti dari page
      // Sesuaikan dengan struktur database Notion Anda
      return {
        id: page.id,
        title: page.properties.Title?.title[0]?.plain_text || "No Title",
        // Tambahkan properti lain yang dibutuhkan
        // Contoh: description: page.properties.Description?.rich_text[0]?.plain_text || "",
      };
    });

    return processedData;
  } catch (error) {
    console.error("Error fetching Notion data:", error);
    return [];
  }
}