import { Scissors, Droplets, Hand, Footprints, Sparkles, Heart, Pen, FlameKindling, Sun, Crown, Star, Diamond, Bath, Wand2 } from 'lucide-react';

interface ServiceCategory {
  title: string;
  icon: React.ReactNode;
  items: string[];
}

const services: ServiceCategory[] = [
  {
    title: 'Hair',
    icon: <Scissors size={22} />,
    items: [
      'Brushing cheveux courts',
      'Brushing cheveux mi-longs',
      'Brushing cheveux longs',
      'Brushing cheveux extra longs',
      'Shampooing + soins cheveux',
      'Épilation sourcils',
      'Épilation sourcils + teinture',
    ],
  },
  {
    title: 'Lella Beya',
    icon: <Droplets size={22} />,
    items: [
      'Hammam marocain',
      'Enveloppement',
      'Masque',
      'Massage humide (15 min)',
    ],
  },
  {
    title: 'Soins des mains',
    icon: <Hand size={22} />,
    items: [
      'Supplément pose vernis',
      'Supplément dépose vernis permanent',
    ],
  },
  {
    title: 'Soins des pieds',
    icon: <Footprints size={22} />,
    items: [
      'Supplément pose vernis',
      'Supplément dépose vernis permanent',
      'Pose vernis (sans soins)',
    ],
  },
  {
    title: 'Épilation (Halawa)',
    icon: <Sparkles size={22} />,
    items: [
      'Demi-jambes',
      'Jambes complètes',
      'Bras',
      'Aisselles',
      'Visage',
      'Ventre',
      'Dos',
      'Maillot simple',
      'Maillot intégral',
      'Corps complet',
    ],
  },
  {
    title: 'Massage',
    icon: <Heart size={22} />,
    items: [
      'Douche après épilation',
      '20 min',
      '30 min',
      '40 min',
      '1 heure',
      'Pierres chaudes',
    ],
  },
  {
    title: 'Tatouage Harkous',
    icon: <Pen size={22} />,
    items: [
      'Petit modèle',
      'Moyen modèle',
      'Grand modèle',
    ],
  },
  {
    title: 'Épilation (Cire)',
    icon: <FlameKindling size={22} />,
    items: [
      'Demi-jambes',
      'Jambes complètes',
      'Bras',
      'Aisselles',
      'Visage',
      'Ventre',
      'Dos',
      'Maillot intégral',
      'Corps complet',
    ],
  },
  {
    title: 'Head Spa',
    icon: <Sun size={22} />,
    items: [
      '40 min',
      '60 min',
      'Étape 1 : Démaquillage, Nettoyage, Massage visage, Massage cou, Massage épaules, Masque détox',
      'Étape 2 : Massage crânien, Brushing',
      'Étape 3 : Shampooing + massage, Shampooing soin + massage, Masque cheveux + massage, Huile pailletée épaules',
    ],
  },
  {
    title: 'Imperial',
    icon: <Crown size={22} />,
    items: [
      'Pierres chaudes',
      'Hammam',
      'Enveloppement savon noir',
      'Gommage traditionnel',
      'Masque d\'argile blanche',
      'Enveloppement argile verte',
      'Massage 30 min (dont 5 min visage)',
    ],
  },
  {
    title: 'Sultan',
    icon: <Star size={22} />,
    items: [
      'Pierres chaudes',
      'Hammam',
      'Enveloppement savon noir',
      'Gommage traditionnel',
      'Masque d\'argile blanche',
      'Enveloppement argile verte',
      'Jacuzzi',
      'Massage 30 min (dont 5 min visage)',
    ],
  },
  {
    title: 'Arabesque',
    icon: <Diamond size={22} />,
    items: [
      'Enveloppement savon noir',
      'Gommage traditionnel',
      'Masque d\'argile blanche',
      'Enveloppement argile verte',
      'Esmeralda cheveux courts',
      'Esmeralda cheveux longs',
      'Esmeralda cheveux extra longs',
    ],
  },
  {
    title: 'Hammam',
    icon: <Bath size={22} />,
    items: [
      'Enveloppement savon noir',
      'Gommage traditionnel',
      'Masque d\'argile blanche',
      'Enveloppement argile verte',
      'Brushing',
    ],
  },
  {
    title: 'Cinderella',
    icon: <Wand2 size={22} />,
    items: [
      'Hammam',
      'Enveloppement savon noir',
      'Gommage traditionnel',
      'Masque d\'argile blanche',
      'Enveloppement argile verte',
      'Massage 25 min',
    ],
  },
];

export default function Services() {
  return (
    <div className="services-grid">
      {services.map((category) => (
        <div key={category.title} className="service-card">
          <div className="service-card-header">
            <div className="service-card-icon">{category.icon}</div>
            <h3>{category.title}</h3>
          </div>
          <ul>
            {category.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
