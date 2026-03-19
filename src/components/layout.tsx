import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-secondary text-white min-h-screen font-sans">
      <Navbar />
      <main className="px-6 md:px-16 lg:px-32">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
