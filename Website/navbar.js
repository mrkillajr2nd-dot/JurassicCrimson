class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background-color: #333;
          color: white;
          padding: 1rem;
        }
        
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
        }

        @media (max-width: 768px) {
            .nav-container {
                flex-direction: column;
                gap: 1rem;
            }
        }
a {
          color: white;
          text-decoration: none;
        }
      </style>
      <nav>
        <div class="nav-container">
          <a href="/">Home</a>
          <div class="nav-links">
            <a href="/about.html">About</a>
            <a href="/development.html">Development</a>
            <a href="/features.html">Features</a>
            <a href="/join.html">Join Us</a>
            <a href="/staff.html">Our Team</a>
            <a href="/media.html">Media</a>
</div>
        </div>
      </nav>
    `;
  }
}

customElements.define('custom-navbar', CustomNavbar);