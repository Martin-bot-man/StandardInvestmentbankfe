import { useState } from "react";
import Navbar from "./components/Navbar";
import ProfileHeader from "./components/ProfileHeader";
import MemberGrid from "./components/MemberGrid";
import RecommendationSection from "./components/RecommendationSection";
import Footer from "./components/Footer";
import SignUpModal from "./components/SignUpModal";

export default function App() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedMembership, setSelectedMembership] = useState<string>("");

  function handleSignUp(membershipName: string) {
    setSelectedMembership(membershipName);
    setModalOpen(true);
  }

  return (
    <div className="min-h-screen w-full flex flex-col" style={{ background: "#e7e5e4" }}>
      <Navbar />

      <div className="w-full flex-1 flex flex-col">
        <div id="home">
          <ProfileHeader />
        </div>
        <div id="members">
          <MemberGrid />
        </div>
        <RecommendationSection onSignUp={handleSignUp} />
        <Footer />
      </div>

      <SignUpModal
        isOpen={modalOpen}
        preselectedMembership={selectedMembership}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}