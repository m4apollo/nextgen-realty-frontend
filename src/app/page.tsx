import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">NextGen Realty</h1>
          <nav>
            <Button variant="ghost">Login</Button>
            <Button className="ml-2">Sign Up</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          AI-Powered CRM for Real Estate Success
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Streamline your workflow with our end-to-end automation for solo agents and small teams.
        </p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          Get Started
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 NextGen Realty. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}