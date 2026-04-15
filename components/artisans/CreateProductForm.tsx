"use client";

import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { createProduct } from "@/lib/actions";
import { CldUploadWidget } from "next-cloudinary";
import { ImagePlus, Loader2 } from "lucide-react";
import { ProductFormState } from "@/lib/definitions";

// 1. We create a separate button component to track the 'pending' state
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full flex justify-center py-4 bg-bark text-cream-50 rounded-full font-600 hover:bg-terracotta-600 transition-all disabled:opacity-50"
    >
      {pending ? (
        <>
          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
          Listing your item...
        </>
      ) : (
        "List Product Now"
      )}
    </button>
  );
}

export default function CreateProductForm() {
  const [imageUrl, setImageUrl] = useState("");
  const initialState: ProductFormState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createProduct, initialState);

  return (
    <form action={dispatch} className="space-y-6">
      {/* Hidden input holds the Cloudinary URL for the Server Action */}
      <input type="hidden" name="imageUrl" value={imageUrl} />

      {/* Cloudinary Widget Area */}
      <div className="space-y-2">
        <label className="block text-xs font-600 text-stone-dark uppercase">Product Image</label>
        <CldUploadWidget 
          uploadPreset="handcrafted_haven_preset" 
          onSuccess={(results: any) => setImageUrl(results.info.secure_url)}
        >
          {({ open }) => (
            <button
              type="button"
              onClick={() => open()}
              className="w-full h-40 border-2 border-dashed border-cream-300 rounded-xl flex flex-col items-center justify-center bg-cream-50 hover:bg-cream-100 transition-colors group"
            >
              {imageUrl ? (
                <img src={imageUrl} alt="Preview" className="h-full w-full object-cover rounded-xl" />
              ) : (
                <>
                  <ImagePlus className="w-8 h-8 text-stone-400 group-hover:text-terracotta-500 mb-2" />
                  <span className="text-sm text-stone-500">Click to upload product photo</span>
                </>
              )}
            </button>
          )}
        </CldUploadWidget>
        {/* If Zod catches a missing image, it shows here! */}
        {state.errors?.imageUrl && (
          <p className="text-red-500 text-xs mt-1">{state.errors.imageUrl[0]}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label className="text-xs font-600 text-stone-dark uppercase px-1">Product Name</label>
          <input name="name" type="text" className="w-full p-3 bg-cream-50 border border-cream-200 rounded-xl outline-none focus:ring-2 focus:ring-terracotta-500" required />
          {state.errors?.name && <p className="text-red-500 text-xs">{state.errors.name[0]}</p>}
        </div>

        <div className="space-y-1">
          <label className="text-xs font-600 text-stone-dark uppercase px-1">Price ($)</label>
          <input name="price" type="number" step="0.01" className="w-full p-3 bg-cream-50 border border-cream-200 rounded-xl outline-none focus:ring-2 focus:ring-terracotta-500" required />
          {state.errors?.price && <p className="text-red-500 text-xs">{state.errors.price[0]}</p>}
        </div>
      </div>
      
      {/* Category, Description, and Stock inputs go here (similar pattern to above) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="text-xs font-600 text-stone-dark uppercase px-1">Category</label>
            <input name="category" type="text" className="w-full p-3 bg-cream-50 border border-cream-200 rounded-xl outline-none focus:ring-2 focus:ring-terracotta-500" required />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-600 text-stone-dark uppercase px-1">Stock</label>
            <input name="stock" type="number" defaultValue={1} className="w-full p-3 bg-cream-50 border border-cream-200 rounded-xl outline-none focus:ring-2 focus:ring-terracotta-500" required />
          </div>
      </div>

      <div className="space-y-1">
          <label className="text-xs font-600 text-stone-dark uppercase px-1">Description</label>
          <textarea name="description" rows={4} className="w-full p-3 bg-cream-50 border border-cream-200 rounded-xl outline-none focus:ring-2 focus:ring-terracotta-500" required></textarea>
      </div>

      {/* Global Message (e.g., Database errors) */}
      {state.message && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm">
          {state.message}
        </div>
      )}

      {/* 2. Use the new SubmitButton component here */}
      <SubmitButton />
    </form>
  );
}