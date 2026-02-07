
export interface Service {
  id: string;
  title: string;
  description: string;
  fullContent: string;
  image: string;
  icon: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  location: string;
  description: string;
  fullStory: string;
  images: string[];
  category: string;
}

export interface ContactDetails {
  address: string;
  phones: string[];
  email: string;
}

export interface InquiryMessage {
  id: string;
  name: string;
  email: string;
  service: string;
  message: string;
  date: string;
  status: 'new' | 'read' | 'archived';
}
