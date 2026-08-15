// Created by add_section_from_catalog (HeroBillboard).

import React from 'react';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';

export default function HeroSection(): React.JSX.Element {
  return (
    <div data-webild-section="hero" data-section="hero" id="hero">
      <HeroBillboard
        description="Seamlessly manage laundry, refresh your style in our salon, and unwind in our premium gaming lounge."
        avatarsSrc={["http://img.b2bpic.net/free-photo/close-up-shot-amused-enthusiastic-good-looking-malaysian-woman-smiling-feeling-positive_176420-44079.jpg","http://img.b2bpic.net/free-photo/portrait-business-woman-with-enthusiastic-face-expression-smiling-looking-confident-standing-s_1258-127188.jpg","http://img.b2bpic.net/free-photo/content-stylish-student-posing-table_23-2147666655.jpg","http://img.b2bpic.net/free-photo/woman-talking-video-call-decorated-kitchen-home_482257-16862.jpg"]}
        title="Laundry, Styling & Gaming — All Under One Roof."
        primaryButton={{"href":"#contact","text":"Book Your Session"}}
        imageSrc="http://img.b2bpic.net/free-photo/drum-closeup-perforation-symmetry-modern-dryer_169016-69505.jpg"
        avatarsLabel="Trusted by 500+ locals"
        secondaryButton={{"href":"#services","text":"Our Services"}}
        textAnimation="slide-up"
      />
    </div>
  );
}
