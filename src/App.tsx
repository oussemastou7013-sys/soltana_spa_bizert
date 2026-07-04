import { useState } from 'react';
import { Menu, X, MapPin, Phone, Instagram, Clock } from 'lucide-react';
import Services from './Services';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            SPA SULTANA
            <span>Salon de Beaut&eacute;</span>
          </div>
          <nav className="nav">
            <a href="#accueil" onClick={(e) => { e.preventDefault(); scrollTo('accueil'); }}>Accueil</a>
            <a href="#apropos" onClick={(e) => { e.preventDefault(); scrollTo('apropos'); }}>À Propos</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>Services</a>
            <a href="#galerie" onClick={(e) => { e.preventDefault(); scrollTo('galerie'); }}>Galerie</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Contact</a>
          </nav>
          <button className="menu-toggle" onClick={() => setMobileMenuOpen(true)} aria-label="Ouvrir le menu">
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile nav */}
      {mobileMenuOpen && (
        <div className="mobile-nav open">
          <button className="mobile-nav-close" onClick={() => setMobileMenuOpen(false)} aria-label="Fermer le menu">
            <X size={28} />
          </button>
          <a href="#accueil" onClick={(e) => { e.preventDefault(); scrollTo('accueil'); }}>Accueil</a>
          <a href="#apropos" onClick={(e) => { e.preventDefault(); scrollTo('apropos'); }}>À Propos</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>Services</a>
          <a href="#galerie" onClick={(e) => { e.preventDefault(); scrollTo('galerie'); }}>Galerie</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Contact</a>
        </div>
      )}

      {/* Hero */}
      <section id="accueil" className="hero">
        <img
          src="/images/1783200249778.jpg"
          alt="Réception SPA SULTANA"
          className="hero-image"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>SPA SULTANA</h1>
          <p>Votre oasis de bien-être et de beauté à Bizerte</p>
          <a href="#services" className="hero-btn" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>
            Découvrir nos soins
          </a>
        </div>
      </section>

      {/* About */}
      <section id="apropos" className="section">
        <div className="container">
          <h2 className="section-title">À Propos</h2>
          <div className="section-divider" />
          <p className="section-subtitle">Un espace dédié à votre beauté et votre bien-être</p>
          <div className="about-grid">
            <div className="about-image">
              <img src="/images/1783200270341.jpg" alt="Espace détente SPA SULTANA" />
            </div>
            <div className="about-text">
              <h3>Bienvenue chez SPA SULTANA</h3>
              <p>
                Niché au cœur de Bizerte, SPA SULTANA vous offre une expérience unique de détente et de beauté dans un cadre somptueux inspiré de l'art oriental.
              </p>
              <p>
                Notre équipe de professionnelles qualifiées vous accueille dans un espace raffiné pour vous proposer une large gamme de soins : hammam traditionnel, massages relaxants, épilation, soins des mains et des pieds, coiffure et bien plus encore.
              </p>
              <p>
                Laissez-vous transporter dans un univers de sérénité où chaque détail est pensé pour votre confort et votre satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section" style={{ background: 'var(--color-white)' }}>
        <div className="container">
          <h2 className="section-title">Nos Services</h2>
          <div className="section-divider" />
          <p className="section-subtitle">Une gamme complète de soins pour sublimer votre beauté</p>
          <Services />
        </div>
      </section>

      {/* Gallery */}
      <section id="galerie" className="section">
        <div className="container">
          <h2 className="section-title">Notre Galerie</h2>
          <div className="section-divider" />
          <p className="section-subtitle">Découvrez notre espace dédié à votre bien-être</p>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="/images/1783200220513.jpg" alt="Espace beauté" />
            </div>
            <div className="gallery-item">
              <img src="/images/1783200236907.jpg" alt="Hammam" />
            </div>
            <div className="gallery-item">
              <img src="/images/1783200259885.jpg" alt="Hammam oriental" />
            </div>
            <div className="gallery-item">
              <img src="/images/1783200279769.jpg" alt="Salle de massage" />
            </div>
            <div className="gallery-item">
              <img src="/images/1783200293148.jpg" alt="Espace relaxation" />
            </div>
            <div className="gallery-item">
              <img src="/images/1783200312966.jpg" alt="Salon de coiffure" />
            </div>
            <div className="gallery-item">
              <img src="/images/1783200326066.jpg" alt="Salle de soins" />
            </div>
            <div className="gallery-item">
              <img src="/images/1783200336981.jpg" alt="Espace manucure" />
            </div>
            <div className="gallery-item">
              <img src="/images/1783200270341.jpg" alt="Salon d'accueil" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title" style={{ color: 'var(--color-gold-light)' }}>Contactez-nous</h2>
          <div className="section-divider" />
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)' }}>Prenez rendez-vous dès aujourd'hui</p>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>SPA SULTANA</h3>
              <div className="contact-item">
                <div className="contact-item-icon">
                  <MapPin size={18} />
                </div>
                <div className="contact-item-text">
                  <h4>Adresse</h4>
                  <p>7VG6+3RQ, Bizerte</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">
                  <Phone size={18} />
                </div>
                <div className="contact-item-text">
                  <h4>Téléphone</h4>
                  <p><a href="tel:+21655720810">55 720 810</a></p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">
                  <Phone size={18} />
                </div>
                <div className="contact-item-text">
                  <h4>WhatsApp</h4>
                  <p><a href="https://wa.me/21655720810" target="_blank" rel="noopener noreferrer">55 720 810</a></p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">
                  <Instagram size={18} />
                </div>
                <div className="contact-item-text">
                  <h4>Instagram</h4>
                  <p><a href="https://www.instagram.com/spa_sultana?igsh=MTdkd2NiM3huaGUyYQ==" target="_blank" rel="noopener noreferrer">@spa_sultana</a></p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">
                  <Clock size={18} />
                </div>
                <div className="contact-item-text">
                  <h4>Horaires</h4>
                  <p>Sur rendez-vous</p>
                </div>
              </div>
            </div>
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.5!2d9.87!3d37.27!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z7VG6+3RQ!5e0!3m2!1sfr!2stn!4v1"
                title="Localisation SPA SULTANA"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 SPA SULTANA. Tous droits réservés. | <a href="https://www.instagram.com/spa_sultana?igsh=MTdkd2NiM3huaGUyYQ==" target="_blank" rel="noopener noreferrer">Suivez-nous sur Instagram</a></p>
        </div>
      </footer>
    </>
  );
}

export default App;
