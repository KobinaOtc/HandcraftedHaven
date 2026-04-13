"use client";

import { useState } from "react";
import { useFormState } from "react-dom";
import { createProduct } from "@/lib/actions";
import { ProductFormState } from "@/lib/definitions";
import { CldUploadWidget } from "next-cloudinary";
import { ImagePlus, Package, Tag, Info } from "lucide-react";

export default function CreateProductForm() {
  const [imageUrl, setImageUrl] = useState("");

  const initialState: ProductFormState = { 
    message: null, 
    errors: {} 
  };

  const [state, dispatch] = useFormState(createProduct, initialState);

  return (
    <form action={dispatch} className="space-y-6">
      {/* Hidden input to pass the Cloudinary URL to the Server Action */}
      <input type="hidden" name="imageUrl" value={imageUrl} />

      <div className="space-y-4">
        <label className="block text-sm font-medium text-bark">Product Image</label>
        <CldUploadWidget 
          uploadPreset="handcrafted_haven_preset" // Create this in Cloudinary Settings
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
        {state.errors?.imageUrl && <p className="text-red-500 text-xs">{state.errors.imageUrl}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-600 text-stone-dark uppercase mb-1">Product Name</label>
          <input name="name" type="text" className="w-full p-2.5 bg-cream-50 border border-cream-200 rounded-lg outline-none focus:ring-2 focus:ring-terracotta-500" />
        </div>
        <div>
          <label className="block text-xs font-600 text-stone-dark uppercase mb-1">Price ($)</label>
          <input name="price" type="number" step="0.01" className="w-full p-2.5 bg-cream-50 border border-cream-200 rounded-lg outline-none focus:ring-2 focus:ring-terracotta-500" />
        </div>
      </div>

      <button type="submit" className="w-full py-3 bg-bark text-cream-50 rounded-full font-medium hover:bg-terracotta-600 transition-colors">
        List Product
      </button>
    </form>
  );
}