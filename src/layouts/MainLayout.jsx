import Header from "../components/Header";
import Footer from "../components/Footer";
import "./MainLayout.css";

function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Header />
      <main className="main-content-wrapper">{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
