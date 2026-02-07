
import { Service, PortfolioItem, ContactDetails } from './types';

export const CONTACT_INFO: ContactDetails = {
  address: "15 Manvers Street, Kingston upon Hull, HU3 1BB, UK",
  phones: ["+447442852562", "+4474468855270", "+233202350250"],
  email: "odregconsult@gmail.com"
};

export const SERVICES: Service[] = [
  {
    id: "event-planning",
    title: "Eventx Planning & Consulting",
    description: "End-to-end strategic planning for traditional weddings and modern ceremonies.",
    fullContent: "Our planning service focuses on the intricate details of traditional unions. As seen in our Royal Wedding portfolio, we manage everything from the custom-tailored Kente selection to the coordination of outdoor ceremonies that honor your heritage with modern elegance.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
    icon: "📜"
  },
  {
    id: "decoration",
    title: "Bespoke Decoration & Design",
    description: "Majestic stage designs featuring royal thrones and custom floral installations.",
    fullContent: "We specialize in 'Royal Scaping'. Our signature setups include golden sunburst crowns, ornate velvet-lined thrones, and color-coordinated blue and gold kente backdrops that turn a traditional ceremony into a majestic royal experience.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
    icon: "✨"
  },
  {
    id: "coordination",
    title: "On-Day Coordination",
    description: "Managing corporate galas and awards nights with professional stage management.",
    fullContent: "From black-tie awards in the UK to high-profile ceremonies in Accra, we ensure your stage program is flawless. We manage everything from lighting transitions to the professional flow of award recipients, as demonstrated in our corporate excellence showcases.",
    image: "https://images.unsplash.com/photo-1475721027785-f74dea327912?auto=format&fit=crop&q=80&w=1200",
    icon: "⏱️"
  },
  {
    id: "protocol",
    title: "Professional Protocol & Ushering",
    description: "VIP guest management and elite table-side service for high-society events.",
    fullContent: "Our protocol officers are trained to provide a level of service that matches the elegance of your guests. We manage VIP seating, guest relations, and hospitality with a focus on grace, ensuring every attendee feels like a royal guest.",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=1200",
    icon: "🤝"
  },
  {
    id: "tour-management",
    title: "Cultural & Corporate Tour Management",
    description: "Exclusive heritage tours in partnership with TORGAG (Tourism Guides Association of Ghana).",
    fullContent: "In collaboration with TORGAG, we offer immersive cultural experiences. Whether it's exploring the vibrant kente markets or visiting historical heritage sites, our tours are professionally guided and culturally rich.",
    image: "https://images.unsplash.com/photo-1590074251800-410a560f6475?auto=format&fit=crop&q=80&w=1200",
    icon: "🌍"
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "royal-throne-union",
    title: "The Blue & Gold Royal Union",
    location: "Accra, Ghana",
    description: "A showcase of majestic throne-room decoration and regal attire.",
    fullStory: "This eventx redefined traditional luxury. We designed a central stage featuring blue-and-gold hand-woven Kente that matched the couple's coronation-style crowns. The setup included gold-leafed thrones and sunburst halo backdrops, creating a truly divine atmosphere for the union.",
    images: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200"
    ],
    category: "Wedding"
  },
  {
    id: "corporate-excellence-gala",
    title: "International Awards Night",
    location: "Kingston upon Hull, UK",
    description: "Seamless execution of a high-profile corporate awards ceremony.",
    fullStory: "A celebration of industry leaders. ODREG managed the entire stage protocol, ensuring that the presentation of awards was handled with the utmost professionalism. The sleek black-tie atmosphere was complemented by our elite guest management team.",
    images: [
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=1200"
    ],
    category: "Corporate"
  },
  {
    id: "torgag-cultural-expedition",
    title: "The TORGAG Heritage Tour",
    location: "Kumasi Market, Ghana",
    description: "An educational and visual journey through Ghanaian textile history.",
    fullStory: "We led a specialized group through the heart of the kente-weaving district. Working closely with the Tourism Guides Association of Ghana (TORGAG), we provided our clients with direct access to master weavers and a deep dive into the symbolism of West African fabrics.",
    images: [
      "https://images.unsplash.com/photo-1590074251800-410a560f6475?auto=format&fit=crop&q=80&w=1200"
    ],
    category: "Tour"
  }
];
