import { testimonialAvatar } from "./avatarUrl";

// ─── Site Config ──────────────────────────────────────────────────────────────
export const siteConfig = {
  name: "SikshaMarg",
  tagline: "Your Trusted Admission Counselling Partner",
  description:
    "SikshaMarg offers expert college admission counselling for students in Lucknow, Mumbai and across India. Get into your dream college with personalised guidance.",
  domain: "www.sikshamarg.com",
  phone: "+91 9205219017",
  email: "info@sikshamarg.com",
  whatsapp: "9205219017",
  address: {
    lucknow: "Hazratganj, Lucknow, Uttar Pradesh – 226001",
    mumbai:  "Andheri West, Mumbai, Maharashtra – 400058",
  },
  socials: {
    instagram: "https://instagram.com/sikshamarg",
    facebook:  "https://facebook.com/sikshamarg",
    linkedin:  "https://linkedin.com/company/sikshamarg",
    youtube:   "https://youtube.com/@sikshamarg",
  },
};

// ─── Navigation ───────────────────────────────────────────────────────────────
export const navLinks = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog",     href: "/blog" },
  { label: "Contact",  href: "/contact" },
];

// ─── Stats ────────────────────────────────────────────────────────────────────
export const stats = [
  { value: "2500+", label: "Students Counselled" },
  { value: "150+",  label: "Partner Universities" },
  { value: "98%",   label: "Success Rate" },
  { value: "12+",   label: "Years Experience" },
];

// ─── Services ─────────────────────────────────────────────────────────────────
export const services = [
  {
    icon: "GraduationCap",
    title: "College Admission Counselling",
    slug: "college-admission-counselling",
    shortDesc:
      "Expert guidance to help you choose the right college and secure admission with confidence.",
    longDesc:
      "Our experienced counsellors assess your academic profile, interests, and goals to create a personalised college list. We guide you through every step — application, essays, interviews, and final selection.",
  },
  {
    icon: "Globe",
    title: "Online Admission Counselling",
    slug: "online-admission-counselling",
    shortDesc:
      "Get the same premium counselling experience from the comfort of your home, anywhere in India.",
    longDesc:
      "Through video sessions, chat support and a dedicated portal, we provide the complete counselling experience digitally. Ideal for students in Tier 2 & 3 cities who deserve the same quality guidance.",
  },
  // {
  //   icon: "FileText",
  //   title: "SOP & LOR Assistance",
  //   slug: "sop-lor-assistance",
  //   shortDesc:
  //     "Craft compelling Statements of Purpose and Letters of Recommendation that stand out.",
  //   longDesc:
  //     "Our writing experts work closely with you to articulate your story, achievements and ambitions in a way that resonates with admission committees at top institutions.",
  // },
  {
    icon: "Search",
    title: "University Shortlisting",
    slug: "university-shortlisting",
    shortDesc:
      "Data-driven shortlisting of universities that match your profile, budget and aspirations.",
    longDesc:
      "We use a proprietary scoring model to match you with colleges where you have the highest probability of admission, balancing reach, match and safety schools.",
  },
  {
    icon: "CheckSquare",
    title: "Application Management",
    slug: "application-management",
    shortDesc:
      "Never miss a deadline. We manage your entire application pipeline end-to-end.",
    longDesc:
      "From form filling and document compilation to submission tracking and follow-ups, we ensure every application goes out on time and in perfect shape.",
  },
  // {
  //   icon: "MessageCircle",
  //   title: "Interview Preparation",
  //   slug: "interview-preparation",
  //   shortDesc:
  //     "Mock interviews and coaching to help you ace admission interviews with confidence.",
  //   longDesc:
  //     "Our mock interview sessions simulate real admission panels. You receive detailed feedback on communication, content and confidence so you walk in fully prepared.",
  // },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const testimonials = [
  {
    name:    "Aryan Mehta",
    city:    "Lucknow",
    college: "MNIT Allahabad ",
    photo:   testimonialAvatar("Aryan Mehta"),
    quote:
      "SikshaMarg's counsellors were with me every step of the way. From shortlisting to interview prep, their guidance was invaluable. I got into my dream B-school!",
    rating: 4.6,
  },
  {
    name:    "Priya Sharma",
    city:    "Mumbai",
    college: "Symbiosis Pune",
    photo:   testimonialAvatar("Priya Sharma"),
    quote:
      "The online counselling sessions were super convenient. My SOP was polished to perfection and the counsellor really understood what each college was looking for.",
    rating: 4.1,
  },
  {
    name:    "Rohan Singh",
    city:    "Lucknow",
    college: "BBD University Noida",
    photo:   testimonialAvatar("Rohan Singh"),
    quote:
      "I was confused about which branch to pick. SikshaMarg's aptitude assessment and one-on-one sessions gave me real clarity. Best investment of my prep journey.",
    rating: 3.9,
  },
  {
    name:    "Ananya Verma",
    city:    "Mumbai",
    college: "Christ University Bangalore",
    photo:   testimonialAvatar("Ananya Verma"),
    quote:
      "They managed my entire application process. I didn't have to worry about deadlines or documents at all. The team is incredibly professional and caring.",
    rating: 4.7,
  },
];

// ─── Blog Posts ───────────────────────────────────────────────────────────────
export const blogPosts = [
  {
    slug:        "how-to-crack-iim-admission",
    title:       "How to Crack IIM Admission: A Complete 2025 Guide",
    excerpt:     "Everything you need to know about CAT, WAT-PI rounds, and building the perfect profile for IIM admissions.",
    date:        "2025-03-15",
    readTime:    "8 min read",
    category:    "MBA Admissions",
    coverImage:  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    content: `
## Introduction

Getting into an IIM is one of the most coveted achievements for Indian MBA aspirants. With acceptance rates as low as 0.5% at top IIMs, preparation needs to be strategic and systematic.

## Step 1: Nail the CAT Exam

CAT tests Verbal Ability, Data Interpretation & Logical Reasoning, and Quantitative Ability. A score above 99 percentile significantly improves your chances at IIM A, B, and C.

**Key preparation tips:**
- Start at least 12 months before the exam
- Focus on accuracy before speed
- Practice full-length mocks regularly after September

## Step 2: Build a Strong Academic Profile

IIMs place significant weight on your Class 10, Class 12, and graduation scores. A consistent academic track record is valued highly.

## Step 3: Work Experience

While fresher profiles are considered, 2–3 years of quality work experience can strengthen your application. Diversity of profile is rewarded.

## Step 4: WAT-PI Preparation

The Written Ability Test and Personal Interview are where admissions are truly decided. Read newspapers daily, stay updated on current affairs, and practice expressing structured opinions.

## Conclusion

IIM admission is a marathon, not a sprint. SikshaMarg's counsellors can create a personalised roadmap for your journey from CAT prep to final admission.
    `,
  },
  {
    slug:        "top-colleges-for-bba-in-india-2025",
    title:       "Top 10 BBA Colleges in India for 2025 Admissions",
    excerpt:     "A curated list of the best BBA colleges in India ranked by placement, faculty, and overall experience.",
    date:        "2025-02-28",
    readTime:    "6 min read",
    category:    "BBA Admissions",
    coverImage:  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
    content: `
## Best BBA Colleges in India 2025

Choosing the right BBA college sets the foundation for your entire management career. Here are our top picks:

### 1. Shaheed Sukhdev College of Business Studies, Delhi
Consistently ranked #1 for BBA, with excellent placement records and a strong alumni network.

### 2. Christ University, Bangalore
Known for its holistic curriculum, international exchange programmes, and corporate connections.

### 3. Symbiosis Institute of Management Studies, Pune
A premier institution with strong industry linkages and a vibrant campus life.

### 4. NMIMS Mumbai — School of Business Management
Excellent faculty, strong placement cell, and a location advantage in India's financial capital.

### 5. Amity University, Noida
One of the largest private universities with excellent infrastructure and global tie-ups.

## How to Choose the Right BBA College

Consider factors like placement average, faculty credentials, location, fee structure, and alumni network before making your decision.

SikshaMarg can help you shortlist colleges based on your specific profile and goals.
    `,
  },
  {
    slug:        "common-mistakes-in-college-applications",
    title:       "7 Common Mistakes Students Make in College Applications",
    excerpt:     "Avoid these critical errors that cost thousands of students their dream college seat every year.",
    date:        "2025-01-20",
    readTime:    "5 min read",
    category:    "Admission Tips",
    coverImage:  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    content: `
## The 7 Mistakes That Kill College Applications

Every year, well-qualified students lose their dream seats due to avoidable mistakes. Here's what to watch out for:

### 1. Missing Deadlines
The most common and most costly mistake. Create a master calendar with all deadlines marked 1 week early.

### 2. Generic Statements of Purpose
Colleges read thousands of SOPs. A generic, template-based SOP will be forgotten immediately. Be specific, authentic, and compelling.

### 3. Not Researching the College
Mentioning a college's programmes, faculty or culture in your essay shows genuine interest. Most students skip this.

### 4. Poor Proofreading
Spelling errors and grammatical mistakes signal carelessness. Always have someone else proofread your application.

### 5. Ignoring the Interview
Many students focus only on written components and neglect interview preparation. A poor interview can undo a strong application.

### 6. Applying Only to Dream Schools
Build a balanced list with reach, match and safety schools. Applying to only top-tier colleges is a high-risk strategy.

### 7. Not Asking for Guidance
The admission process is complex. Working with an experienced counsellor can significantly improve your outcomes.
    `,
  },
];

// ─── FAQs ─────────────────────────────────────────────────────────────────────
export const faqs = [
  {
    question: "When should I start the college admission counselling process?",
    answer:
      "Ideally, students should start in Class 11 for undergraduate admissions or at least 12–18 months before their target intake. However, we also offer last-minute counselling for students who are closer to deadlines.",
  },
  {
    question: "Do you offer online counselling sessions?",
    answer:
      "Yes! All our services are available online through video calls, a dedicated student portal, and WhatsApp support. We serve students across India from our Lucknow and Mumbai offices.",
  },
  {
    question: "What is included in the admission counselling package?",
    answer:
      "Our packages include profile assessment, college shortlisting, application form assistance, SOP/LOR guidance, interview preparation, and dedicated counsellor support throughout the process.",
  },
  {
    question: "How is SikshaMarg different from other counselling services?",
    answer:
      "We provide truly personalised counselling — not a one-size-fits-all approach. Every student gets a dedicated counsellor, data-driven college shortlisting, and continuous support until they secure admission.",
  },
  {
    question: "What is the fee for your counselling services?",
    answer:
      "Our fees vary based on the service package and the level of support required. Please contact us for a detailed fee structure and a free 30-minute consultation to understand your needs first.",
  },
];
