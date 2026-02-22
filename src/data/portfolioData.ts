export interface PortfolioProject {
  id: string
  image: string
  title: string
  category: string
  description: string
  duration: string
  details: string[]
}

// Using Picsum for proper placeholder images - each project gets a unique, consistent image
const img = (id: number) => `https://picsum.photos/seed/${id}/800/600`

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'ecommerce-platform',
    image: img(1),
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Full-stack e-commerce platform with payment gateway integration, inventory management, and real-time order tracking.',
    duration: '6 months',
    details: [
      'The platform was built to handle high traffic during peak sale periods, supporting over 50,000 daily active users. We implemented Redis caching and CDN optimization to ensure sub-second page loads.',
      'Payment integration includes Stripe and multiple local payment gateways, with PCI-compliant tokenization for secure transactions. The checkout flow was optimized to reduce cart abandonment.',
      'Admin dashboard provides real-time analytics, inventory alerts, and order management. Sellers can track shipments, manage returns, and update product listings from a single interface.',
      'Mobile-responsive design ensures a seamless shopping experience across all devices. The platform achieved 99.9% uptime and a 3.2% conversion rate within the first quarter.'
    ]
  },
  {
    id: 'analytics-dashboard',
    image: img(2),
    title: 'Analytics Dashboard',
    category: 'Web Application',
    description: 'Real-time data visualization dashboard with interactive charts, reports, and data export capabilities.',
    duration: '4 months',
    details: [
      'Built for processing thousands of data points per second with WebSocket-based streaming. The dashboard updates in real-time without page refresh, with latency under 500ms.',
      'Custom chart library supports 25+ visualization types including line charts, bar charts, heatmaps, and Sankey diagrams. Users can drill down into any metric for deeper analysis.',
      'Report builder allows non-technical users to create custom reports with drag-and-drop interface. Scheduled reports can be emailed or exported to Excel, PDF, or CSV.',
      'Role-based access control ensures data security. API integration connects to multiple data sources including Google Analytics, CRM systems, and custom databases.'
    ]
  },
  {
    id: 'healthcare-management-app',
    image: img(3),
    title: 'Healthcare Management App',
    category: 'Mobile App',
    description: 'Patient management system with appointment scheduling, medical records, and telemedicine integration.',
    duration: '8 months',
    details: [
      'HIPAA-compliant architecture with end-to-end encryption for all patient data. Audit logs track every access and modification for compliance requirements.',
      'Telemedicine feature supports video consultations with screen sharing and prescription writing. Built-in waiting room and appointment reminders reduce no-shows by 40%.',
      'Offline mode allows clinicians in rural areas to access and update records when connectivity is limited. Sync engine handles conflict resolution when back online.',
      'Integration with pharmacy systems for e-prescriptions. Over 10 clinics onboarded, serving patients across 15 states with 2000+ appointments daily.'
    ]
  },
  {
    id: 'saas-platform',
    image: img(4),
    title: 'SaaS Platform',
    category: 'Cloud Solution',
    description: 'Scalable SaaS application with multi-tenancy, user authentication, and advanced security features.',
    duration: '10 months',
    details: [
      'Multi-tenant architecture with row-level security ensures complete data isolation between customers. Each tenant gets a configurable workspace with custom branding.',
      'Kubernetes deployment enables auto-scaling based on load. The platform handles 250+ tenants with 99.99% uptime and average API latency of 45ms.',
      'OAuth 2.0, SAML, and LDAP support for enterprise SSO. SOC 2 Type II certified with regular security audits and penetration testing.',
      'RESTful API with 100+ endpoints for third-party integrations. Webhook system notifies external systems of events in real-time.'
    ]
  },
  {
    id: 'food-delivery-app',
    image: img(5),
    title: 'Food Delivery App',
    category: 'Mobile App',
    description: 'Full-featured food delivery platform with real-time tracking, payment processing, and ratings system.',
    duration: '5 months',
    details: [
      'Live order tracking with ETA updates and driver location on map. Customers receive push notifications at each stage—confirmed, preparing, out for delivery, delivered.',
      'Peak load handling during lunch rush with queue-based order processing. The system processes 15,000+ orders daily across 500+ restaurant partners.',
      'Restaurant dashboard for menu management, order acceptance, and analytics. Automatic menu sync when restaurants update their offerings.',
      'Loyalty rewards program with points on every order. Split payment support and multiple payment options including cash on delivery.'
    ]
  },
  {
    id: 'business-management-system',
    image: img(6),
    title: 'Business Management System',
    category: 'Enterprise',
    description: 'Custom ERP system with CRM, inventory, HR, and financial management modules.',
    duration: '12 months',
    details: [
      'Unified dashboard aggregates data from CRM, inventory, HR, and finance. Configurable widgets let each role see relevant metrics at a glance.',
      'Workflow engine supports complex approval hierarchies with delegation and escalation. 80% of manual processes automated with audit trails.',
      'Phased migration from legacy systems with rollback capability. Data validation and cleanup during ETL ensured zero loss during transition.',
      'API layer enables integration with accounting software, e-commerce platforms, and third-party tools. 500+ users across departments.'
    ]
  },
  {
    id: 'e-learning-platform',
    image: img(7),
    title: 'E-Learning Platform',
    category: 'Web Application',
    description: 'Online learning system with course management, video streaming, assignments, and progress tracking.',
    duration: '6 months',
    details: [
      'Course builder with modules, lessons, quizzes, and assignments. Instructors can upload videos, add embedded content, and set prerequisites between modules.',
      'Adaptive video streaming with quality selection based on connection speed. Videos transcoded to multiple resolutions for optimal playback.',
      'Progress tracking and certificates on completion. 72% course completion rate with gamification elements like badges and leaderboards.',
      'Discussion forums and Q&A per lesson. Over 25,000 active learners and 500+ courses. Instructor dashboard for analytics and student management.'
    ]
  },
  {
    id: 'real-estate-portal',
    image: img(8),
    title: 'Real Estate Portal',
    category: 'Web Application',
    description: 'Property listing platform with advanced search filters, virtual tours, and transaction management.',
    duration: '5 months',
    details: [
      'Advanced search with filters for price, location, bedrooms, amenities, and more. Map view with clustering for dense areas. 15,000+ listings indexed.',
      '360° virtual tours for properties. High-resolution images with lazy loading and CDN delivery for fast page loads.',
      'Mortgage calculator and loan eligibility checker. Lead capture forms with CRM integration for agents to follow up.',
      'Agent CRM for managing listings, leads, and showings. Transaction management tracks offers, negotiations, and closing. 12% lead conversion rate.'
    ]
  },
  {
    id: 'creative-portfolio-site',
    image: img(9),
    title: 'Creative Portfolio Site',
    category: 'Web Design',
    description: 'Beautiful portfolio website showcasing creative work with image galleries and client testimonials.',
    duration: '2 months',
    details: [
      'Headless CMS integration for easy content updates. Image galleries with lightbox and lazy loading. 50+ projects showcased with case studies.',
      'Smooth animations and transitions. Dark mode toggle with persisted user preference. Lighthouse score of 100 for performance and accessibility.',
      'Responsive design optimized for mobile—60% of traffic from mobile devices. Fast load times under 0.6 seconds.',
      'Contact form with spam protection. SEO optimized with meta tags, sitemap, and structured data for better search visibility.'
    ]
  }
]

export function getProjectById(id: string): PortfolioProject | undefined {
  return portfolioProjects.find(p => p.id === id)
}
