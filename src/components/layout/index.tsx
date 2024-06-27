import Navbar from "./navbar";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode; // Define type for children prop
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <section className="bg-[#F9F9F9] text-[#212121] min-h-screen overflow-hidden regularf">
      <Navbar />
      <main >{children}</main>
      <Footer />
    </section>
  );
};

export default Layout;
