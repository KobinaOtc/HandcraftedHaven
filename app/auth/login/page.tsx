import LoginForm from "@/components/auth/LoginForm";

export const metadata = {
  title: "Sign In | Handcrafted Haven",
  description: "Sign in to your Handcrafted Haven artisan account.",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-cream-50">
      <div className="w-full max-w-md space-y-8">
        <LoginForm />
      </div>
    </main>
  );
}