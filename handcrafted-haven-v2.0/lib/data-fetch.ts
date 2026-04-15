import { sql } from '@vercel/postgres';
import { Product, ArtisanProfile } from './definitions';

// --------------------------------------------------------
// PRODUCT QUERIES
// --------------------------------------------------------

export async function getAllProducts() {
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
  try {
    // SECURITY: Explicitly naming columns ensures we NEVER select the password
    const data = await sql<ArtisanProfile>`
      SELECT id, name, email, specialty, location, bio 
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
  try {
    const data = await sql<ArtisanProfile>`
      SELECT id, name, email, specialty, location, bio 
      FROM artisans 
      WHERE id = ${id}
    `;
    return data.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch artisan profile.');
  }
}