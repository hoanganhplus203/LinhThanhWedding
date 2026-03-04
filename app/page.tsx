import Hero from "@/components/wedding/Hero";
import SaveTheDate from "@/components/wedding/SaveTheDate";
import CoupleInfo from "@/components/wedding/CoupleInfo";
import Invitation from "@/components/wedding/Invitation";
import EventDetails from "@/components/wedding/EventDetails";
import Location from "@/components/wedding/Location";
import PhotoAlbum from "@/components/wedding/PhotoAlbum";
import RSVP from "@/components/wedding/RSVP";
import CloudAnimation from "@/components/wedding/CloudAnimation";
import Footer from "@/components/wedding/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative">
      <Hero />
      <SaveTheDate />
      <CoupleInfo />
      <Invitation />
      <EventDetails />
      <Location />
      <RSVP />
      <PhotoAlbum />
      <Footer />
      <CloudAnimation />
    </div>
  );
}

