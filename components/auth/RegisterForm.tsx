"use client";

import { useFormState, useFormStatus } from "react-dom";
import { registerArtisan } from "@/lib/actions";
import { FormState } from "@/lib/definitions"; // Import the type
import { User, Briefcase, MapPin, Mail, Lock, Loader2, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

// ... SubmitButton component remains exactly the same ...
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-cream-50 bg-bark hover:bg-terracotta-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terracotta-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Creating Account...
        </>
      ) : (
        "Create Artisan Account"
      )}
    </button>
  );
}

export default function RegisterForm() {
  const initialState: FormState = { message: null, errors: {} };
  const [state, formAction] = useFormState(registerArtisan, initialState);

  return (
    <div className="w-full max-w-md mx-auto p-8 bg-white rounded-2xl shadow-xl border border-cream-200">
      <div className="text-center mb-8">
        <h2 className="font-display text-3xl font-600 text-bark">Join the Haven</h2>
        <p className="mt-2 text-stone-dark font-body text-sm">
          Start sharing your handcrafted story with the world.
        </p>
      </div>

      <form action={formAction} className="space-y-5">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-600 text-stone-dark uppercase tracking-wider mb-1 px-1">Full Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input name="name" type="text" required className="block w-full pl-10 pr-4 py-2.5 bg-cream-50 border border-cream-200 rounded-xl focus:ring-2 focus:ring-terracotta-500 outline-none text-bark" placeholder="Elena Vasquez" />
          </div>
          {state?.errors?.name && <p className="mt-1 text-xs text-red-500">{state.errors.name[0]}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-600 text-stone-dark uppercase tracking-wider mb-1 px-1">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input name="email" type="email" required className="block w-full pl-10 pr-4 py-2.5 bg-cream-50 border border-cream-200 rounded-xl focus:ring-2 focus:ring-terracotta-500 outline-none text-bark" placeholder="artisan@haven.com" />
          </div>
          {state?.errors?.email && <p className="mt-1 text-xs text-red-500">{state.errors.email[0]}</p>}
        </div>

        {/* Specialty & Location Grid */}
        <div className="grid grid-cols-2 gap-4 mt-5">
          <div>
            <label className="block text-xs font-600 text-stone-dark uppercase tracking-wider mb-1 px-1">Specialty</label>
            <div className="relative">
              <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              {/* UPDATED: Converted to a Select Dropdown */}
              <select 
                name="specialty" 
                required 
                defaultValue=""
                className="block w-full pl-10 pr-4 py-2.5 bg-cream-50 border border-cream-200 rounded-xl focus:ring-2 focus:ring-terracotta-500 outline-none text-bark appearance-none"
              >
                <option value="" disabled>Select...</option>
                <option value="Pottery & Ceramics">Pottery & Ceramics</option>
                <option value="Woodworking">Woodworking</option>
                <option value="Jewelry">Jewelry</option>
                <option value="Textiles">Textiles</option>
                <option value="Leatherwork">Leatherwork</option>
              </select>
            </div>
            {state?.errors?.specialty && <p className="mt-1 text-xs text-red-500">{state.errors.specialty[0]}</p>}
          </div>
          <div>
            <label className="block text-xs font-600 text-stone-dark uppercase tracking-wider mb-1 px-1">Location</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input name="location" type="text" required className="block w-full pl-10 pr-4 py-2.5 bg-cream-50 border border-cream-200 rounded-xl focus:ring-2 focus:ring-terracotta-500 outline-none text-bark" placeholder="Oaxaca, MX" />
            </div>
            {state?.errors?.location && <p className="mt-1 text-xs text-red-500">{state.errors.location[0]}</p>}
          </div>
        </div>

        {/* NEW: Profile Image URL Field */}
        <div className="mt-5">
          <label className="block text-xs font-600 text-stone-dark uppercase tracking-wider mb-1 px-1">Profile Image Link (Optional)</label>
          <div className="relative">
            <ImageIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input name="avatar" type="url" className="block w-full pl-10 pr-4 py-2.5 bg-cream-50 border border-cream-200 rounded-xl focus:ring-2 focus:ring-terracotta-500 outline-none text-bark" placeholder="https://example.com/my-photo.jpg" />
          </div>
          {state?.errors?.avatar && <p className="mt-1 text-xs text-red-500">{state.errors.avatar[0]}</p>}
        </div>

        {/* Password */}
        <div>
          <label className="block text-xs font-600 text-stone-dark uppercase tracking-wider mb-1 px-1">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input name="password" type="password" required className="block w-full pl-10 pr-4 py-2.5 bg-cream-50 border border-cream-200 rounded-xl focus:ring-2 focus:ring-terracotta-500 outline-none text-bark" placeholder="••••••••" />
          </div>
          {/* Note: Password errors can be an array of multiple issues, we'll join them */}
          {state?.errors?.password && (
            <p className="mt-1 text-xs text-red-500">{state.errors.password.join('. ')}</p>
          )}
        </div>

        {/* General Error Message */}
        {state?.message && (
          <div className="p-3 rounded-lg bg-red-50 border border-red-100 text-red-600 text-sm">
            {state.message}
          </div>
        )}

        <SubmitButton />
      </form>
    </div>
  );
}