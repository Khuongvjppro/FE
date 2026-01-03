import "./LoadingSpinner.css";

function LoadingSpinner() {
  return (
    <div className="loading-spinner-container">
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>Đang tải...</p>
      </div>
    </div>
  );
}

export default LoadingSpinner;
