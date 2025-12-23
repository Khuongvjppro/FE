import MainLayout from "../layouts/MainLayout";
import OrderProcess from "../components/OrderProcess";
import "./OrderProcessPage.css";

function OrderProcessPage() {
  return (
    <MainLayout>
      <div className="order-process-page">
        <OrderProcess />
      </div>
    </MainLayout>
  );
}

export default OrderProcessPage;
