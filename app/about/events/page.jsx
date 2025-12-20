import FestivalCelebrationSection from "../../components/about/FestivalCelebrationSection";

export const metadata = {
  title: "Festival Celebrations & Events | NextGen Business Consultancy",
  description:
    "Explore festival celebrations, corporate events, and cultural moments at NextGen Business Consultancy that reflect our values, teamwork, and vibrant work culture.",

  robots: {
    index: false,
    follow: false,
  },

  alternates: {
    canonical: "https://www.nextgenbusiness.co.in/events",
  },
};

export default function EventsPage() {
  return <FestivalCelebrationSection />;
}
