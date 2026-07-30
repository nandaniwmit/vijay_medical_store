export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  image: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface HealthTip {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  content: string;
  image: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'store' | 'shelves' | 'products' | 'equipment' | 'counter';
  imageUrl: string;
  description: string;
}

export const STORE_INFO = {
  name: "Vijay Medical Store",
  tagline: "Your Trusted Medical Store for Genuine Medicines & Healthcare Needs",
  owner: "Mr. Vijay Kumar & Team",
  established: "2012",
  phone: "09304096446",
  phoneDisplay: "09304096446",
  whatsappNumber: "919304096446",
  email: "vijaymedicalgaya@gmail.com",
  address: "Gouri Rd, Ram Pur, Mohan Nagar, Gewalbigha, Gaya, Bihar 823001",
  landmark: "Opposite Mohan Nagar Gouri Road, near Rampur, Gewalbigha, Gaya",
  city: "Gaya",
  state: "Bihar",
  pincode: "823001",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.5839213451!2d85.00123!3d24.78912!2m3!1f02f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32a58b68a514d%3A0x6b4a2e5d5e5e!2sGouri%20Rd%2C%20Ram%20Pur%2C%20Gewalbigha%2C%20Gaya%2C%20Bihar%20823001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  mapDirectLink: "https://maps.google.com/?q=Gouri+Rd,+Ram+Pur,+Mohan+Nagar,+Gewalbigha,+Gaya,+Bihar+823001",
  workingHours: [
    { days: "Monday - Saturday", hours: "7:30 AM - 10:30 PM" },
    { days: "Sunday", hours: "8:00 AM - 9:30 PM" },
    { days: "Emergency Medicine Dispatch", hours: "24/7 Available on Call" }
  ],
  stats: [
    { label: "Satisfied Customers", value: "25,000+" },
    { label: "Genuine Medicines", value: "100% Guaranteed" },
    { label: "Years of Trust in Gaya", value: "14+ Years" },
    { label: "Avg Delivery Time", value: "Under 45 Mins" }
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "prescription-medicines",
    title: "Prescription Medicines & Refills",
    category: "Medicines",
    shortDesc: "Authentic doctor-prescribed medications sourced directly from WHO-GMP certified manufacturers.",
    fullDesc: "We stock authentic ethical and branded prescription drugs for chronic and acute illnesses. Our licensed pharmacists meticulously review every doctor's prescription to ensure correct dosage, expiration verification, and patient drug interaction warnings.",
    iconName: "Pill",
    features: ["Batch & Expiry verified", "Direct company sourcing", "Prescription auto-refill alert", "Cool-temperature storage"],
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "otc-medicines",
    title: "OTC & First Aid Care",
    category: "Medicines",
    shortDesc: "Over-the-counter remedies for cold, fever, pain relief, digestive health, and first aid essentials.",
    fullDesc: "Comprehensive range of over-the-counter remedies, pain relief sprays, antiseptic creams, bandages, acidity relief syrups, and cough suppressants available immediately without delays.",
    iconName: "ShieldAlert",
    features: ["Instant OTC assistance", "Trusted brand products", "Emergency first aid kits", "Safe dosage guidance"],
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "health-devices",
    title: "Medical Equipment & Digital Devices",
    category: "Devices",
    shortDesc: "Certified BP monitors, glucometers, nebulizers, pulse oximeters, and digital thermometers.",
    fullDesc: "High-accuracy diagnostic instruments for regular home monitoring. We supply brand-warranty digital blood pressure machines, Accu-Chek glucometers with test strips, compressor nebulizers, and pulse oximeters.",
    iconName: "Activity",
    features: ["1-3 Year Brand Warranty", "Free home demo/guidance", "Original test strips", "Calibration assistance"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "baby-care-nutrition",
    title: "Baby Care & Infant Nutrition",
    category: "Baby & Mom",
    shortDesc: "Pediatric-approved baby formula, diapers, baby wipes, bath care, and child supplements.",
    fullDesc: "Dedicated section for infant wellness featuring Nestle Cerelac, Lactogen, Pampers diapers, Sebamed baby skincare, Himalayan baby lotion, and pediatric multivitamin drops.",
    iconName: "Baby",
    features: ["Dermatologically tested", "Fresh stock guarantee", "Gentle organic baby products", "Infant nutrition advice"],
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "nutritional-supplements",
    title: "Health Supplements & Immunity",
    category: "Wellness",
    shortDesc: "Multivitamins, calcium, protein powders, ayurvedic tonics, and diabetic care drinks.",
    fullDesc: "Boost your daily vitality with genuine nutritional supplements including Vitamin D3, Omega-3 fish oil, Horlicks Protein+, Ensure, Revital H, and traditional Dabur Chyawanprash.",
    iconName: "Sparkles",
    features: ["FSSAI certified brands", "Diabetic-safe sugar free options", "Bone & joint support", "Gym & active lifestyle nutrition"],
    image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "home-delivery-whatsapp",
    title: "Express Home Delivery via WhatsApp",
    category: "Services",
    shortDesc: "Order medicines on WhatsApp with a photo of your prescription for fast doorstep delivery in Gaya.",
    fullDesc: "For elderly citizens, busy professionals, or sick patients, simply snap a picture of your prescription or medicine name, send it on WhatsApp, and our local delivery agent will deliver to your doorstep in Gewalbigha, Rampur, and surrounding Gaya neighborhoods.",
    iconName: "Truck",
    features: ["Quick 45-min local delivery", "Cash on delivery / UPI", "Prescription image upload", "Temperature sealed packaging"],
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "surgical-homecare",
    title: "Surgical Supplies & Elder Homecare",
    category: "Surgical",
    shortDesc: "Wheelchairs, adult diapers, urine bags, wound dressings, cotton rolls, and IV sets.",
    fullDesc: "Complete inventory of medical disposable supplies and post-surgery patient care products for home healthcare setups.",
    iconName: "Stethoscope",
    features: ["Sterile hospital grade", "Bulk order discount", "Adult hygiene products", "Dressing materials"],
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1cdb?auto=format&fit=crop&q=80&w=800"
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Ramesh Prasad Singh",
    location: "Rampur, Gaya",
    rating: 5,
    date: "July 2026",
    comment: "Vijay Medical Store is my go-to shop for my mother's daily diabetes and BP medicines. They always give authentic medicines with proper bill and reasonable discount.",
    verified: true
  },
  {
    id: "rev-2",
    name: "Anjali Kumari",
    location: "Gewalbigha, Gaya",
    rating: 5,
    date: "June 2026",
    comment: "Very polite behavior of Mr. Vijay and staff. Sent my prescription on WhatsApp and got delivery within 30 minutes at Gouri Road. Highly recommended!",
    verified: true
  },
  {
    id: "rev-3",
    name: "Dr. Alok Verma",
    location: "Mohan Nagar, Gaya",
    rating: 5,
    date: "May 2026",
    comment: "As a local physician, I trust Vijay Medical Store for maintaining strict cold chain storage for insulin and vaccines. Reliable and prompt service.",
    verified: true
  },
  {
    id: "rev-4",
    name: "Sanjay Kumar Gupta",
    location: "Gaya Station Road",
    rating: 5,
    date: "April 2026",
    comment: "They keep all hard-to-find prescription medicines that other stores don't have. Excellent digital BP monitor demo as well.",
    verified: true
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: "faq-1",
    category: "Ordering",
    question: "How do I order medicines through WhatsApp from Vijay Medical Store?",
    answer: "Ordering is super easy! Simply click the 'WhatsApp Order' button on our website, upload or type your required medicines or prescription photo, provide your address in Gaya, and send. Our pharmacist will confirm your order and total amount within minutes."
  },
  {
    id: "faq-2",
    category: "Medicines",
    question: "Are all medicines 100% genuine and verified?",
    answer: "Yes, absolutely! At Vijay Medical Store, we source all medications directly from authorized drug distributors and WHO-GMP certified manufacturers. We strictly adhere to drug control department regulations."
  },
  {
    id: "faq-3",
    category: "Delivery",
    question: "Do you offer home delivery in Gaya?",
    answer: "Yes! We offer express local home delivery across Gewalbigha, Rampur, Mohan Nagar, Gouri Road, Station Area, and nearby locations in Gaya, Bihar."
  },
  {
    id: "faq-4",
    category: "Payments",
    question: "What payment methods do you accept?",
    answer: "We accept Cash on Delivery (COD), PhonePe, Google Pay, Paytm, UPI QR scanning at doorstep, and credit/debit cards."
  },
  {
    id: "faq-5",
    category: "Prescription",
    question: "Is a prescription required for purchasing prescription drugs?",
    answer: "Yes, for Schedule H and H1 medications, a valid prescription from a registered medical practitioner is mandatory for patient safety."
  },
  {
    id: "faq-6",
    category: "Timings",
    question: "What are the store timings for Vijay Medical Store?",
    answer: "Our retail counter is open Monday to Saturday from 7:30 AM to 10:30 PM, and Sunday from 8:00 AM to 9:30 PM. For emergency medicine requests, you can call us anytime at 09304096446."
  }
];

export const HEALTH_TIPS: HealthTip[] = [
  {
    id: "tip-1",
    title: "5 Vital Tips to Ensure You Buy Genuine Medicines in India",
    category: "Medication Safety",
    readTime: "3 min read",
    date: "July 2026",
    summary: "Learn how to inspect batch numbers, expiry dates, hologram packaging, and demand GST invoices for complete safety.",
    content: "When purchasing medicines, always check for intact foil packaging, clear batch codes, and expiration dates. Buy only from licensed pharmacies like Vijay Medical Store that maintain proper temperature controls.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "tip-2",
    title: "How to Store Insulin and Temperature-Sensitive Drugs at Home",
    category: "Home Healthcare",
    readTime: "4 min read",
    date: "June 2026",
    summary: "Prevent medicine degradation by keeping biologicals stored in 2°C–8°C refrigeration without freezing.",
    content: "Insulin vials and eye drops can lose potency if left in hot weather. Keep unopened vials in the main refrigerator compartment away from the freezer wall.",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "tip-3",
    title: "Managing Blood Pressure & Sugar Levels During Seasonal Changes",
    category: "Chronic Wellness",
    readTime: "5 min read",
    date: "May 2026",
    summary: "Simple dietary adjustments and daily monitoring tips using home BP & Glucose meters.",
    content: "Regular home testing with a digital BP machine or glucometer helps track fluctuations. Maintain hydration and take prescribed dosages on time every day.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600"
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "gal-1",
    title: "Vijay Medical Store Front View",
    category: "store",
    imageUrl: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800",
    description: "Main entrance of Vijay Medical Store at Gouri Road, Gewalbigha, Gaya."
  },
  {
    id: "gal-2",
    title: "Organized Prescription Shelves",
    category: "shelves",
    imageUrl: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=800",
    description: "Systematically categorized medicine shelves for quick stock retrieval."
  },
  {
    id: "gal-3",
    title: "Cold Chain Storage & Refrigeration",
    category: "equipment",
    imageUrl: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=800",
    description: "Dedicated medical refrigerator maintaining 2°C–8°C for insulin & vaccines."
  },
  {
    id: "gal-4",
    title: "Healthcare Devices & BP Machines Counter",
    category: "products",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    description: "Certified Omron BP machines, Accu-Chek glucometers and nebulizers display."
  },
  {
    id: "gal-5",
    title: "Pharmacist Customer Counter",
    category: "counter",
    imageUrl: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1cdb?auto=format&fit=crop&q=80&w=800",
    description: "Clean, hygienic dispensing desk with courteous pharmacist consultation."
  },
  {
    id: "gal-6",
    title: "Baby Care & Infant Nutrition Rack",
    category: "products",
    imageUrl: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=800",
    description: "Wide assortment of Cerelac, Pampers diapers and infant skincare products."
  }
];
