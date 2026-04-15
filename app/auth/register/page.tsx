import RegisterForm from "@/components/auth/RegisterForm";

export const metadata = {
    title: "Register as an Artisan | Handcrafted Haven",
    description: "Create an artisan account to start selling your handcrafted goods.",
};

export default function RegisterPage() {
    return (
        <main className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-cream-50">
            <div className="w-full max-w-md space-y-8">
                <RegisterForm />
            </div>
        </main>
    );
}