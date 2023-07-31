import React from "react";
import ReactDOM from "react-dom";
function App() {
  return (
    <div>
      <Header />
      <Pizza />
      <Pizza />
      <Pizza />
      <Footer />
    </div>
  );
}

function Header() {
  return <h2> Fast react pizza co.</h2>;
}

function Footer() {
  return (
    <div>
      <h4>{new Date().toLocaleDateString()} We are open </h4>
    </div>
  );
}
function Pizza() {
  return (
    <div>
      <h2>Pizza</h2>
      <img src="/pizzas/pizza5.jpg" alt="spinach" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
