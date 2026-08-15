// Created by add_section_from_catalog (ContactCenter).

import React from 'react';
import ContactCenter from '@/components/sections/contact/ContactCenter';

export default function ContactCenterSection(): React.JSX.Element {
  return (
    <div data-webild-section="contact-center" data-section="contact-center" id="contact-center">
      <ContactCenter
        tag="Contact Us"
        textAnimation="slide-up"
        description="Have questions about our laundry, salon, or gaming lounge services? Reach out to our team today."
        title="Contact Our Hub Center"
        inputPlaceholder="Enter your email address"
        buttonText="Get in Touch"
      />
    </div>
  );
}
