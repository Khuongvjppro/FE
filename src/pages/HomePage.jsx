import MainLayout from "../layouts/MainLayout";
import HeroBanner from "../components/HeroBanner";
import ProductList from "../components/ProductList";
import About from "../components/About";
import CategorySection from "../components/CategorySection";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import { useFetch } from "../hooks";
import { productService, categoryService } from "../services/api";
import "./HomePage.css";

function HomePage() {
  const { data: products, loading: productsLoading } = useFetch(
    () => productService.getAll(),
    []
  );

  const { data: categories, loading: categoriesLoading } = useFetch(
    () => categoryService.getAll(),
    []
  );

  const loading = productsLoading || categoriesLoading;

  return (
    <MainLayout>
      <HeroBanner />

      <section className="top-products-section">
        <div className="container">
          <h2 className="section-title">TOP ĐỒNG PHỤC BÁN CHẠY</h2>

          {loading ? (
            <div className="loading">Đang tải...</div>
          ) : (
            <ProductList products={products || []} />
          )}
        </div>
      </section>

      <About />

      <CategorySection
        products={products || []}
        categories={categories || []}
      />

      <Testimonials />
      <ContactForm />
    </MainLayout>
  );
}

export default HomePage;
