export type ScheduleItem = {
  time: string;
  title: string;
  detail: string;
};

export type Track = {
  name: string;
  description: string;
  prize: string;
};

export type FAQItem = {
  q: string;
  a: string;
};

export type Event = {
  id: string;
  slug: string;
  name: string;
  year: string;
  tagline: string;
  description: string;
  longDescription: string;
  participants: number;
  reach: number;
  reachLabel: string;
  accent: 'emerald' | 'gold';
  highlights: string[];
  status: 'past' | 'live' | 'upcoming';
  date: string;
  venue: string;
  duration: string;
  teamSize: string;
  tracks: Track[];
  schedule: ScheduleItem[];
  prizes: { place: string; amount: string; perk: string }[];
  faqs: FAQItem[];
  galleryQueries: string[];
};

export const events: Event[] = [
  {
    id: 'kodekalesh',
    slug: 'kodekalesh',
    name: 'Kodekalesh',
    year: '2025',
    tagline: 'The festival of code',
    description:
      'A 24-hour hackathon carnival that brought together builders, dreamers, and coders for an unforgettable marathon of innovation, mentorship, and midnight caffeine.',
    longDescription:
      'Kodekalesh is IDEAKODE\'s flagship 24-hour hackathon carnival — a full-circle festival of code where 3,000 builders converged to turn wild ideas into working demos. Across a single sleepless night, participants moved through mentorship tracks, live debugging sessions, and on-spot mini-challenges, all fueled by enough caffeine to power a small city. The energy was electric, the projects were ambitious, and the midnight energy never dipped.',
    participants: 3000,
    reach: 200000,
    reachLabel: '2 Lakh+ students reached',
    accent: 'emerald',
    highlights: ['24-hour hackathon', 'Live mentorship tracks', 'On-spot prizes'],
    status: 'past',
    date: 'March 2025',
    venue: 'DS Softwares Campus, Bangalore',
    duration: '24 hours',
    teamSize: '2–4 members',
    tracks: [
      { name: 'AI / ML', description: 'Build intelligent systems — LLM apps, computer vision, predictive models.', prize: '₹50,000' },
      { name: 'Web3 / Blockchain', description: 'Smart contracts, DeFi, and decentralized apps on Polygon & Aptos.', prize: '₹40,000' },
      { name: 'Open Innovation', description: 'Any problem, any stack. The wildcard track for bold ideas.', prize: '₹30,000' },
    ],
    schedule: [
      { time: '09:00 AM', title: 'Check-in & kit pickup', detail: 'Arrive, grab your swag bag, and find your team zone.' },
      { time: '10:30 AM', title: 'Opening ceremony', detail: 'Welcome address, rules reveal, and theme announcement.' },
      { time: '11:00 AM', title: 'Hacking begins', detail: 'The clock starts. 24 hours on the clock.' },
      { time: '02:00 PM', title: 'Mentorship round 1', detail: 'Industry mentors rotate through teams for 1:1 guidance.' },
      { time: '08:00 PM', title: 'Mini-challenge: Debug Derby', detail: 'On-spot debugging competition with instant prizes.' },
      { time: '02:00 AM', title: 'Midnight pizza & jam', detail: 'Food break, live music, and a coding meme contest.' },
      { time: '08:00 AM', title: 'Final mentorship push', detail: 'Last chance to refine with mentors before submissions.' },
      { time: '11:00 AM', title: 'Hacking ends', detail: 'Submissions close. Code freeze.' },
      { time: '12:00 PM', title: 'Judging & demos', detail: 'Teams pitch to a panel of industry judges.' },
      { time: '03:00 PM', title: 'Closing & prizes', detail: 'Winners announced, prizes distributed, group photo.' },
    ],
    prizes: [
      { place: '1st Place', amount: '₹1,00,000', perk: 'GeeksforGeeks premium + internship referrals' },
      { place: '2nd Place', amount: '₹50,000', perk: 'CodeCrafters subscription + mentorship' },
      { place: '3rd Place', amount: '₹25,000', perk: 'InterviewBuddy credits + swag' },
      { place: 'Best Beginner', amount: '₹15,000', perk: 'First-time builder recognition + goodies' },
    ],
    faqs: [
      { q: 'Who could participate?', a: 'Any college student with a valid ID. First-time builders were especially welcome — we had a dedicated beginner track.' },
      { q: 'Was there a registration fee?', a: 'No. Kodekalesh was completely free for all selected participants, including meals and swag.' },
      { q: 'Did IDEAKODE provide travel support?', a: 'Selected outstation teams received partial travel reimbursement on a first-come basis.' },
      { q: 'What was the judging criteria?', a: 'Innovation, technical complexity, design, and demo polish. Each team got 4 minutes to pitch.' },
    ],
    galleryQueries: ['hackathon coding night', 'developers team collaboration', 'tech event stage presentation', 'programmers late night'],
  },
  {
    id: 'hack-on-titan',
    slug: 'hack-on-titan',
    name: 'Hack On Titan',
    year: '2025',
    tagline: 'Attack on limits',
    description:
      'Our flagship titan-scale hackathon. 5,000 builders pushed the boundaries of what student teams can ship — from AI agents to full-stack products in a single weekend.',
    longDescription:
      'Hack On Titan is the biggest event on the IDEAKODE calendar — a titan-scale weekend hackathon where 5,000 builders assembled to attack their limits. Over 36 hours, teams built everything from autonomous AI agents to production-grade full-stack products, judged by engineers from Google, Amazon, and other tech giants. It wasn\'t just a hackathon; it was a statement that student builders can ship at titan scale.',
    participants: 5000,
    reach: 500000,
    reachLabel: '5 Lakh+ students reached',
    accent: 'gold',
    highlights: ['Weekend-long build', 'Industry judges', 'Titan-scale prizes'],
    status: 'past',
    date: 'October 2025',
    venue: 'Grand Arena, Hyderabad',
    duration: '36 hours',
    teamSize: '3–5 members',
    tracks: [
      { name: 'AI Agents', description: 'Autonomous agents, LLM orchestration, and agentic workflows.', prize: '₹75,000' },
      { name: 'Full-Stack', description: 'End-to-end products with real users in mind — design + scale.', prize: '₹60,000' },
      { name: 'Blockchain', description: 'On-chain apps, DeFi, and infrastructure on Polygon & Aptos.', prize: '₹50,000' },
      { name: 'Hardware / IoT', description: 'Embedded systems, robotics, and connected devices.', prize: '₹45,000' },
    ],
    schedule: [
      { time: '08:00 AM', title: 'Gates open', detail: 'Check-in across 4 zones, Titan kit distribution.' },
      { time: '10:00 AM', title: 'Opening keynote', detail: 'Industry leaders set the stage and reveal tracks.' },
      { time: '11:00 AM', title: 'Hacking begins', detail: '36-hour clock starts. Build zones go live.' },
      { time: '06:00 PM', title: 'Tech talks track', detail: 'Fireside chats with engineers from Google & Amazon.' },
      { time: '11:00 PM', title: 'Titan checkpoint', detail: 'Progress review — teams submit mid-point demos.' },
      { time: '08:00 AM', title: 'Day 2 kickoff', detail: 'Breakfast, mentorship surge, and sprint to finish.' },
      { time: '05:00 PM', title: 'Hacking ends', detail: 'Final submissions. Code freeze.' },
      { time: '07:00 PM', title: 'Titan demos', detail: 'Top 20 teams pitch on the main stage.' },
      { time: '10:00 PM', title: 'Closing ceremony', detail: 'Winners crowned, titan prizes awarded.' },
    ],
    prizes: [
      { place: 'Titan Champion', amount: '₹2,00,000', perk: 'Direct interview referrals + Google mentorship' },
      { place: 'Runner-up', amount: '₹1,00,000', perk: 'Amazon internship fast-track + swag vault' },
      { place: 'Track Winners (×4)', amount: '₹75,000 each', perk: 'Track-specific sponsor prizes + premium tools' },
      { place: 'People\'s Choice', amount: '₹25,000', perk: 'Community-voted, live audience award' },
    ],
    faqs: [
      { q: 'How big could teams be?', a: 'Teams of 3 to 5 members. Solo participation wasn\'t allowed, but we ran a team-matching portal before the event.' },
      { q: 'Were there domain-specific prizes?', a: 'Yes — each of the 4 tracks had its own winner, plus an overall Titan Champion and People\'s Choice award.' },
      { q: 'Was the event hybrid?', a: 'Hack On Titan was fully on-site at the Grand Arena. No remote participation for the main hackathon.' },
      { q: 'What about hardware for the IoT track?', a: 'IDEAKODE provided Arduino, ESP32, and sensor kits on a first-come basis at the hardware station.' },
    ],
    galleryQueries: ['large tech conference crowd', 'hackathon arena', 'developers presenting stage', 'coding competition teams'],
  },
  {
    id: 'elevate',
    slug: 'elevate',
    name: 'Elevate',
    year: '2026',
    tagline: 'Rise above the ordinary',
    description:
      'A seminar + mini-hack series designed to lift first-time builders off the ground — pairing talks from industry engineers with hands-on building sprints.',
    longDescription:
      'Elevate is IDEAKODE\'s newest format — a seminar + mini-hack hybrid built specifically for first-time and early-stage builders. Instead of a grueling overnight marathon, Elevate pairs focused talks from industry engineers with guided, hands-on building sprints. The goal is simple: by the end, every participant has shipped at least one project and made at least one career connection.',
    participants: 1200,
    reach: 400000,
    reachLabel: '4 Lakh+ students reached',
    accent: 'emerald',
    highlights: ['Engineer-led talks', 'Guided build sprints', 'Career networking'],
    status: 'upcoming',
    date: 'February 2026',
    venue: 'Multi-city — Bangalore, Pune, Delhi',
    duration: '2 days × 3 cities',
    teamSize: 'Solo or pairs',
    tracks: [
      { name: 'First-Ship', description: 'Your first deployed web app — guided end-to-end, zero experience needed.', prize: '₹20,000' },
      { name: 'AI Starter', description: 'Build and ship your first AI-powered feature with guided APIs.', prize: '₹20,000' },
      { name: 'Career Sprint', description: 'Resume reviews, mock interviews, and recruiter networking.', prize: 'Internship referrals' },
    ],
    schedule: [
      { time: 'Day 1 · 09:30 AM', title: 'Check-in & kickoff', detail: 'Welcome, badge pickup, and track selection.' },
      { time: 'Day 1 · 10:30 AM', title: 'Engineer talk: Shipping your first product', detail: 'A senior engineer walks through a real ship from idea to deploy.' },
      { time: 'Day 1 · 12:00 PM', title: 'Guided sprint begins', detail: 'Hands-on building with mentors walking the room.' },
      { time: 'Day 1 · 04:00 PM', title: 'Mid-sprint review', detail: 'Mentors check in, debug, and unblock every team.' },
      { time: 'Day 2 · 10:00 AM', title: 'Career sprint', detail: 'Mock interviews, resume roasts, and recruiter booths open.' },
      { time: 'Day 2 · 02:00 PM', title: 'Final build push', detail: 'Last sprint to polish and deploy projects.' },
      { time: 'Day 2 · 05:00 PM', title: 'Showcase & demos', detail: 'Every participant demos what they shipped.' },
      { time: 'Day 2 · 07:00 PM', title: 'Networking & close', detail: 'Connect with engineers, sponsors, and peers.' },
    ],
    prizes: [
      { place: 'Best First Ship', amount: '₹20,000', perk: 'Mentorship + premium dev tools' },
      { place: 'Best AI Starter', amount: '₹20,000', perk: 'API credits + AI mentorship' },
      { place: 'Career Sprint Winner', amount: 'Referrals', perk: 'Direct internship interview opportunities' },
      { place: 'All Finishers', amount: 'Certificate', perk: 'Digital certificate + Elevate swag' },
    ],
    faqs: [
      { q: 'Is Elevate beginner-friendly?', a: 'Absolutely. Elevate is designed for first-time and early builders. No prior project experience required.' },
      { q: 'Do I need to attend both days?', a: 'Yes — the guided sprint runs across two days. Both days build on each other.' },
      { q: 'Is it happening in my city?', a: 'Elevate 2026 runs in Bangalore, Pune, and Delhi. Pick your city during registration.' },
      { q: 'Is there a registration fee?', a: 'A nominal refundable deposit secures your spot. It\'s fully refunded on attendance.' },
    ],
    galleryQueries: ['tech seminar audience', 'developer workshop hands-on', 'coding mentorship session', 'career networking event'],
  },
];

export type Sponsor = {
  name: string;
  tier: 'title' | 'platinum' | 'gold' | 'partner';
};

export const sponsors: Sponsor[] = [
  { name: 'GeeksforGeeks', tier: 'title' },
  { name: 'Amazon', tier: 'platinum' },
  { name: 'Google', tier: 'platinum' },
  { name: 'CodeCrafters', tier: 'gold' },
  { name: 'InterviewBuddy', tier: 'gold' },
  { name: 'Polygon', tier: 'gold' },
  { name: 'Devfolio', tier: 'gold' },
  { name: 'Aptos', tier: 'gold' },
  { name: 'Algos', tier: 'gold' },
  { name: 'Unstop', tier: 'partner' },
  { name: 'Altcampus', tier: 'partner' },
  { name: 'Coding Ninjas', tier: 'partner' },
  { name: 'GitHub', tier: 'partner' },
  { name: 'Postman', tier: 'partner' },
];

export const stats = {
  totalParticipants: 9200,
  totalReach: 1100000,
  totalSponsors: 50,
  eventsRun: 3,
};

export function getEventBySlug(slug: string): Event | undefined {
  return events.find((e) => e.slug === slug);
}
