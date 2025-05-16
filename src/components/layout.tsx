import Navbar from './navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-6 py-16 max-w-6xl mx-auto">{children}</main>
    </>
  );
}
