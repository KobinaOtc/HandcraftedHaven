import { sql } from '@vercel/postgres';
import { Product, ArtisanProfile } from './definitions';
// 1. IMPORT the Next.js cache bypass function
import { unstable_noStore as noStore } from 'next/cache'; 

// --------------------------------------------------------
// PRODUCT QUERIES
// --------------------------------------------------------

export async function getAllProducts() {
  // 2. CALL it at the top of the function
  noStore(); 
  
  try {
    const data = await sql<Product>`
      SELECT id, artisan_email, name, price, category, description, stock, image_url, created_at 
      FROM products 
      ORDER BY created_at DESC
    `;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch all products.');
  }
}

export async function getProductById(id: string) {
  noStore(); // Add here too to ensure fresh detail pages!
  try {
    const data = await sql<Product>`
      SELECT * FROM products 
      WHERE id = ${id}
    `;
    return data.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch product.');
  }
}

export async function getProductsByArtisanEmail(email: string) {
  noStore(); // Add here too!
  try {
    const data = await sql<Product>`
      SELECT * FROM products 
      WHERE artisan_email = ${email}
      ORDER BY created_at DESC
    `;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch artisan products.');
  }
}

// --------------------------------------------------------
// ARTISAN QUERIES (SECURE)
// --------------------------------------------------------

export async function getAllArtisans() {
  noStore(); // Add here so the artisan directory is always fresh!
  try {
    const data = await sql<ArtisanProfile>`
      SELECT id, name, email, specialty, location, bio, avatar 
      FROM artisans 
      ORDER BY name ASC
    `;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch artisans.');
  }
}

export async function getArtisanById(id: string) {
  noStore(); // Add here too!
  try {
    const data = await sql<ArtisanProfile>`
      SELECT id, name, email, specialty, location, bio, avatar 
      FROM artisans 
      WHERE id = ${id}
    `;
    return data.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch artisan profile.');
  }
}