class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background-color: #333;
          color: white;
          padding: 2rem;
          text-align: center;
          margin-top: 2rem;
        }
        .footer-links {
            margin-top: 1rem;
            display: flex;
            gap: 1rem;
            justify-content: center;
        }
        .footer-links a {
            color: white;
            font-size: 1.5rem;
            transition: color 0.3s ease;
        }
        .footer-links a:hover {
            color: #e63946;
        }
</style>
      <footer>
        <p>&copy; ${new Date().getFullYear()} Jurassic Crimson. All rights reserved.</p>
        <div class="footer-links">
            <a href="https://youtube.com" target="_blank"><i class="fab fa-youtube"></i></a>
            <a href="https://discord.gg/b79K3dNud6" target="_blank"><i class="fab fa-discord"></i></a>
            <a href="https://www.roblox.com/communities/35035372/ASYNC-I-Entity-Actor#!/about" target="_blank"><i class="fab fa-roblox"></i></a>
        </div>
</footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);