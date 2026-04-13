// in lib/actions.ts
'use server';

import { SignupFormSchema, FormState, ProductFormSchema, ProductFormState } from '@/lib/definitions';
import { redirect } from 'next/navigation';
import { sql } from '@vercel/postgres';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { auth } from "@/auth";
import bcrypt from 'bcrypt';

// Note the added : Promise<FormState> to enforce strict typing
export async function registerArtisan(state: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    specialty: formData.get('specialty'),
    location: formData.get('location'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing or Invalid Fields. Please check the errors above.',
    };
  }

  const { name, email, password, specialty, location } = validatedFields.data;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await sql`
      INSERT INTO artisans (name, email, password, specialty, location)
      VALUES (${name}, ${email}, ${hashedPassword}, ${specialty}, ${location})
    `;
    
  } catch (error) {
    console.error('Database Error:', error);
    return {
      message: 'Database Error: Failed to create user account. The email might already be in use.',
    };
  }

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

export async function createProduct(
  state: ProductFormState, 
  formData: FormData
): Promise<ProductFormState> {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");

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

  try {
    await sql`
      INSERT INTO products (artisan_email, name, price, category, description, stock, image_url)
      VALUES (${session.user.email}, ${name}, ${price}, ${category}, ${description}, ${stock}, ${imageUrl})
    `;
  } catch (e) {
    return { message: "Database Error: Failed to Create Product." };
  }

  redirect("/artisans/dashboard");
}