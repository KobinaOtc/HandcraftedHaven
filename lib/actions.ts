// in lib/actions.ts
'use server';

import { SignupFormSchema, FormState, ProductFormSchema, ProductFormState } from '@/lib/definitions';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { sql } from '@vercel/postgres';
import { signIn, signOut, auth } from '@/auth';
import { AuthError } from 'next-auth';
import bcrypt from 'bcryptjs';

// Note the added : Promise<FormState> to enforce strict typing
export async function registerArtisan(state: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    specialty: formData.get('specialty'),
    location: formData.get('location'),
    avatar: formData.get('avatar'), // Grab the new avatar field
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing or Invalid Fields. Please check the errors above.',
    };
  }

  // Extract avatar alongside the rest
  const { name, email, password, specialty, location, avatar } = validatedFields.data;
  // Provide a fallback image if they didn't upload one
  const finalAvatar = avatar || "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80";

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update SQL to include the avatar column
    await sql`
      INSERT INTO artisans (name, email, password, specialty, location, avatar)
      VALUES (${name}, ${email}, ${hashedPassword}, ${specialty}, ${location}, ${finalAvatar})
    `;
    
  } catch (error) {
    console.error('Database Error:', error);
    return { message: 'Database Error: Failed to create user account. The email might already be in use.' };
  }

  // ADD THESE TWO LINES:
  // Purge the cache so the new artisan appears immediately on the live site!
  revalidatePath('/artisans');
  revalidatePath('/');

  redirect('/auth/login');
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    // This calls the NextAuth credentials provider we set up in auth.ts
    await signIn('credentials', formData, { redirectTo: '/artisans/dashboard' });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials. Please check your email and password.';
        default:
          return 'Something went wrong while trying to log in.';
      }
    }
    throw error;
  }
}

export async function createProduct(state: ProductFormState, formData: FormData): Promise<ProductFormState> {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");

  // 1. Validate with Zod
  const validatedFields = ProductFormSchema.safeParse({
    name: formData.get("name"),
    price: formData.get("price"),
    category: formData.get("category"),
    description: formData.get("description"),
    stock: formData.get("stock"),
    imageUrl: formData.get("imageUrl"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Product.',
    };
  }

  const { name, price, category, description, stock, imageUrl } = validatedFields.data;

  // 2. Database Insertion
  try {
    await sql`
      INSERT INTO products (artisan_email, name, price, category, description, stock, image_url)
      VALUES (${session.user.email}, ${name}, ${price}, ${category}, ${description}, ${stock}, ${imageUrl})
    `;
  } catch (error) {
    console.error('Database Error:', error);
    return { message: 'Database Error: Failed to Create Product.' };
  }

  // 3. Clear the caches so the new product shows up immediately
  revalidatePath('/artisans/dashboard');
  // ADD THESE TWO LINES:
  revalidatePath('/marketplace');
  revalidatePath('/');
  
  // 4. Redirect - THIS MUST BE OUTSIDE THE TRY/CATCH!
  redirect('/artisans/dashboard');
}

export async function logout() {
  await signOut({ redirectTo: '/auth/login' });
}

export async function checkIsLoggedIn() {
  const session = await auth();
  return !!session?.user;
}