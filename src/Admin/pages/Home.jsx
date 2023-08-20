/*import React from "react";

export default function Home(){
    return(
        <div>Home</div>
    )
}*/
import React from 'react';

export default function AdminHome() {
  return (
    <div className="admin-home-container">
      <header className="admin-header">
        <h1>Welcome to Admin Dashboard</h1>
      </header>
      <main className="admin-main">
        <div className="admin-sidebar">
          {/* Sidebar content */}
          <ul>
            <li>Products</li>
            <li>Category</li>
            <li>Orders</li>
            {/* Add more navigation items */}
          </ul>
        </div>
        <div className="admin-content">
          {/* Main content */}
          <div className="centered-content">
            <div className="order-tracking">
              <h2>Order Tracking</h2>
              <div className="tracking-image">
                <img
                  src="https://s3.amazonaws.com/images.ecwid.com/images/1107006/955686188.jpg"
                  alt="Order Tracking"
                  style={{ width: '100%', maxWidth: '300px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="admin-footer">
        {/* Footer content */}
        <p>&copy; 2023 Admin Dashboard</p>
      </footer>
    </div>
  );
}
