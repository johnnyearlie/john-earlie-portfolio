import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Music } from './components/Music';
import { Photography } from './components/Photography';
import { Dog } from './components/Dog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Music />
        <Photography />
        <Dog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}