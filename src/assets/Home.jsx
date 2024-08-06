import React from 'react';

function Home() {
  return (
    <div className="home">
      <header>
        <h1>Welcome to Our Home Page</h1>
      </header>
      <main>
        <section>
          <h2>Featured Content</h2>
          <p>This is where you can showcase your main content.</p>
        </section>
        <section>
          <h2>Latest Updates</h2>
          <ul>
            <li>Update 1</li>
            <li>Update 2</li>
            <li>Update 3</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
