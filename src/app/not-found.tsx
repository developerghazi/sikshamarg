import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="font-heading font-bold text-8xl text-primary-600 mb-4">404</h1>
      <h2 className="font-heading font-bold text-2xl text-gray-900 mb-3">Page Not Found</h2>
      <p className="text-gray-500 mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
      </p>
      <Link href="/" className="btn-primary">
        <ArrowLeft size={18} /> Back to Home
      </Link>
    </div>
  );
}
