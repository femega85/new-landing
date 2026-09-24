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
