import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="bg-cyan-900 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-xl font-bold">Ostad Blog</div>
          <div className="flex space-x-6">
            <Link href="/">
              <p className="hover:text-cyan-300">Home</p>
            </Link>
            <Link href="/blog">
              <p className="hover:text-cyan-300">Blog</p>
            </Link>
            <Link href="/about">
              <p className="hover:text-cyan-300">About</p>
            </Link>
            <Link href="/contact">
              <p className="hover:text-cyan-300">Contact</p>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}