// in lib/actions.ts
'use server';

import { SignupFormSchema, FormState } from '@/lib/definitions';
import { redirect } from 'next/navigation';
import { sql } from '@vercel/postgres';
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