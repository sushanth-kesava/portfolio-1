
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";

  // Set favicon to profile image (uses Vite asset resolution)
  try {
    const profileFavicon = new URL('./assets/sushanth.jpg', import.meta.url).href;
    let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = profileFavicon;
  } catch (e) {
    // If asset resolution fails, fallback silently
    console.warn('Could not set favicon from profile image', e);
  }

  createRoot(document.getElementById("root")!).render(<App />);
  