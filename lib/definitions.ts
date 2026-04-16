import { z } from 'zod';

export const SignupFormSchema = z.object({
    name: z.string().min(2, { message:  "Name must be at least 2 characters long." }).trim(),
    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    password: z
        .string()
        .min(8, { message: 'Be at least 8 characters long' })
        .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
        .regex(/[0-9]/, { message: 'Contain at least one number.' })
        .regex(/[^a-zA-Z0-9]/, { message: 'Contain at least one special character.' })
        .trim(),
    specialty: z.string().min(2, { message: 'Specialty is required.' }).trim(),
    location: z.string().min(2, { message: 'Location is required.' }).trim(),
    avatar: z.string().url({ message: 'Please provide a valid image URL.' }).optional().or(z.literal('')),
});

export type FormState = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
    specialty?: string[];
    location?: string[];
    avatar?: string[];
  };
  message?: string | null;
};

export type ProductFormState = {
  errors?: {
    name?: string[];
    price?: string[];
    category?: string[];
    description?: string[];
    stock?: string[];
    imageUrl?: string[];
  };
  message?: string | null; // Use null here to avoid the "string | undefined" mismatch
};

export interface Product {
  id: string;
  artisan_email: string;
  name: string;
  price: number;
  category: string;
  description: string | null;
  stock: number;
  image_url: string;
  created_at?: string;
}

export const ProductFormSchema = z.object({
  name: z.string().min(2, "Product name is required"),
  price: z.coerce.number().gt(0, "Price must be greater than 0"),
  category: z.string().min(1, "Please select a category"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  stock: z.coerce.number().int().min(1, "Stock must be at least 1"),
  imageUrl: z.string().url("Please upload an image"),
});

export interface ArtisanProfile {
  id: string;
  name: string;
  email: string;
  specialty: string;
  location: string;
  bio: string | null;
  // Notice: The password field is strictly omitted here!
}