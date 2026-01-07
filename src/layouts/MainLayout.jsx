import Header from "../components/Header";
import Footer from "../components/Footer";
import ChatWidget from "../components/ChatWidget";
import "./MainLayout.css";

function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Header />
      <main className="main-content-wrapper">{children}</main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default MainLayout;
