import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import VideoShowcase from "./components/VideoShowcase";
import ClientsSlider from "./components/ClientsSlider";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import RetellChatWidget from "./components/RetellChatWidget";
import { Toaster } from "./components/ui/sonner";

const Home = () => {
  useEffect(() => {
    // Initialize Brevo Conversations Chatbot (fallback) - positioned on LEFT
    (function(d, w, c) {
      w.BrevoConversationsID = '640f80eb9bfdf06f4c16ec61';
      w[c] = w[c] || function() {
        (w[c].q = w[c].q || []).push(arguments);
      };
      var s = d.createElement('script');
      s.async = true;
      s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
      s.onload = function() {
        // Add CSS to position Brevo on the left after it loads
        setTimeout(() => {
          const style = document.createElement('style');
          style.id = 'brevo-position-override';
          style.innerHTML = `
            /* Force Brevo widget to left side */
            iframe[id*="brevo"],
            iframe[src*="brevo"],
            div[id*="brevo-conversations"] {
              left: 20px !important;
              right: auto !important;
              bottom: 20px !important;
            }
            
            /* Brevo button container */
            [class*="BrevoConversations"] {
              left: 20px !important;
              right: auto !important;
            }
          `;
          document.head.appendChild(style);
        }, 1000);
      };
      if (d.head) d.head.appendChild(s);
    })(document, window, 'BrevoConversations');
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <VideoShowcase />
      <ClientsSlider />
      <Testimonials />
      <ContactForm />
      <Footer />
      
      {/* Retell AI Voice Chatbot Widget - RIGHT SIDE */}
      <RetellChatWidget />
      
      <Toaster position="top-right" richColors />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
