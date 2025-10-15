'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = new FormData(form);

    try {
      // Submit to Zapier webhook
      await fetch(form.action, {
        method: 'POST',
        body: formData,
      });

      // Show thank you message
      setFormSubmitted(true);

      // Scroll to the thank you message
      setTimeout(() => {
        const thankYouElement = document.getElementById('thank-you-message');
        if (thankYouElement) {
          thankYouElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    } catch (error) {
      console.error('Form submission error:', error);
      // Still show thank you message even if there's an error
      setFormSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[var(--slate)] h-[80vh] min-h-[600px] flex items-center overflow-hidden">
        {/* Speech bubble background - centered behind content, reduced size on mobile for better readability */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] lg:w-[950px] lg:h-[950px] xl:w-[1100px] xl:h-[1100px] 2xl:w-[1400px] 2xl:h-[1400px] opacity-80 md:opacity-100">
          <Image
            src="/Business Brief/IndigoBubble.png"
            alt=""
            fill
            className="object-contain"
            priority
          />
          {/* Dotted texture overlay */}
          <div className="absolute inset-0 dotted-overlay-subtle pointer-events-none"></div>
        </div>

        {/* Megaphone on right side - aligned to edge with slight overflow - hidden on mobile to reduce visual clutter */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden xl:block opacity-20" style={{ marginTop: '70px', zIndex: 0 }}>
          <div className="relative w-[500px] h-[650px] xl:w-[600px] xl:h-[750px] 2xl:w-[750px] 2xl:h-[950px]" style={{ transform: 'rotate(-15deg) translateX(75px)' }}>
            <Image
              src="/megaphone.png"
              alt="Megaphone graphic"
              width={1600}
              height={2200}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        <div className="relative z-20 w-full">
          <div className="max-w-[1400px] 2xl:max-w-[1800px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            {/* Mobile: left-aligned for readability, Desktop: center-aligned for impact */}
            <div className="flex flex-col items-start text-left md:items-center md:text-center">
              {/* Small header text */}
              <p className="text-[var(--beacon)] text-xs md:text-sm 2xl:text-base uppercase tracking-[0.2em] md:tracking-[0.25em] mb-6 md:mb-8 2xl:mb-10 leading-tight opacity-90" style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}>
                A PANEL DISCUSSION PRESENTED BY DEKSIA
              </p>

              {/* Main title - responsive sizing with better mobile readability */}
              <h1 className="mb-5 md:mb-6 2xl:mb-8 w-full">
                <span className="block text-white italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-1 md:mb-2 2xl:mb-3" style={{ fontFamily: 'var(--font-accent)', fontWeight: 400, lineHeight: '0.95' }}>The</span>
                <span className="block text-white text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-bold uppercase leading-[0.8] md:leading-[0.75]" style={{ fontFamily: 'var(--font-headline)', letterSpacing: '-0.03em' }}>BUSINESS BRIEF</span>
              </h1>

              {/* Tagline - mobile left-aligned, desktop centered, removed horizontal padding on mobile */}
              <div className="text-[var(--beacon)] mb-7 md:mb-8 2xl:mb-10 max-w-2xl 2xl:max-w-3xl md:px-4" style={{ fontFamily: 'var(--font-body)' }}>
                <p className="text-base md:text-lg lg:text-xl 2xl:text-2xl leading-relaxed font-normal">
                  <span className="font-bold">This month</span> discover the three angles you can leverage immediately for smarter more scalable sales growth. Always free, always worth it.
                </p>
              </div>

              {/* CTA Button - mobile: full-width and left-aligned, desktop: inline and centered */}
              <div className="mb-6 md:mb-7 2xl:mb-9 w-full md:w-auto flex justify-start md:justify-center">
                <a
                  href="#register"
                  className="block md:inline-block w-full md:w-auto bg-white hover:bg-[var(--beacon)] text-[var(--slate)] font-bold uppercase tracking-wider px-8 sm:px-10 md:px-12 2xl:px-14 py-5 md:py-6 2xl:py-7 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-center"
                  style={{ fontFamily: 'var(--font-headline)' }}
                >
                  <span className="block text-base md:text-lg lg:text-xl 2xl:text-2xl">RESERVE YOUR FREE SEAT</span>
                  <span className="block text-xs md:text-sm 2xl:text-base mt-1 opacity-75" style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}>OCTOBER 21ST • 12–1 PM</span>
                </a>
              </div>

              {/* Event location - mobile: left-aligned, desktop: centered */}
              <div className="flex items-center justify-start md:justify-center gap-2 text-[var(--beacon)] w-full md:w-auto" style={{ fontFamily: 'var(--font-body)' }}>
                <svg className="w-4 h-4 md:w-5 md:h-5 2xl:w-6 2xl:h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <p className="text-sm md:text-base lg:text-lg 2xl:text-xl font-semibold tracking-wide">120 Stevens St SW, Grand Rapids</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Points Divider */}
      <section className="bg-white py-4 md:py-5 2xl:py-6 px-6 border-y border-[var(--slate)]/10">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-x-6 md:gap-x-10 2xl:gap-x-14 gap-y-3 text-[var(--slate)]" style={{ fontFamily: 'var(--font-body)' }}>
            <div className="flex items-center gap-2">
              <span className="text-[var(--horizon)] font-bold text-lg 2xl:text-xl">•</span>
              <span className="text-xs md:text-sm 2xl:text-base font-bold uppercase tracking-wide">Lunch included</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--horizon)] font-bold text-lg 2xl:text-xl">•</span>
              <span className="text-xs md:text-sm 2xl:text-base font-bold uppercase tracking-wide">Focused topics</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--horizon)] font-bold text-lg 2xl:text-xl">•</span>
              <span className="text-xs md:text-sm 2xl:text-base font-bold uppercase tracking-wide">Tangible takeaways</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--horizon)] font-bold text-lg 2xl:text-xl">•</span>
              <span className="text-xs md:text-sm 2xl:text-base font-bold uppercase tracking-wide">Small groups, real conversation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Combined Details & Speakers Section */}
      <section className="bg-[var(--beacon)] min-h-[80vh] flex items-center py-12 md:py-16 2xl:py-20 px-6 relative overflow-hidden">
        {/* Bullhorn on left side - hidden on mobile to reduce visual clutter */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden xl:block" style={{ zIndex: 0, opacity: 0.09 }}>
          <div className="relative w-[450px] h-[600px] xl:w-[550px] xl:h-[700px] 2xl:w-[700px] 2xl:h-[900px]" style={{ transform: 'rotate(15deg) translateX(-120px)' }}>
            <Image
              src="/Business Brief/BullhornHand.png"
              alt="Bullhorn graphic"
              width={1600}
              height={2200}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto relative z-20 w-full px-0 md:px-8 lg:px-12 2xl:px-16">
          {/* Mobile: stack vertically, Desktop: two columns */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 2xl:gap-20 items-start">
            {/* Left column - Details */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl mb-6 2xl:mb-8">
                <span className="italic text-[var(--horizon)]" style={{ fontFamily: 'var(--font-accent)', fontWeight: 400 }}>Straight talk</span>
                <span className="text-[var(--slate)]" style={{ fontFamily: 'var(--font-accent)', fontWeight: 400 }}> from people who've been there.</span>
              </h2>

              <p className="text-[var(--slate)] text-base md:text-lg 2xl:text-xl mb-4 2xl:mb-5 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                This month, discover how to build sales strategies that actually scale.
              </p>

              <p className="text-[var(--slate)] text-base md:text-lg 2xl:text-xl mb-4 2xl:mb-5 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                We're breaking it down three ways: coaching that elevates your team, software solutions that eliminate friction, and HubSpot strategies that unlock hidden potential in tools you already own.
              </p>

              <p className="text-[var(--slate)] text-base md:text-lg 2xl:text-xl font-bold mb-6 2xl:mb-8" style={{ fontFamily: 'var(--font-body)' }}>
                Together, they create a system for smarter, more sustainable growth.
              </p>

              {/* CTA Button - mobile: full-width and left-aligned, desktop: inline and left-aligned */}
              <div className="pt-2 flex justify-start w-full lg:w-auto">
                <a
                  href="#register"
                  className="block lg:inline-block w-full lg:w-auto bg-[var(--slate)] hover:bg-[#2a2d2b] text-white font-bold uppercase tracking-wider px-8 md:px-10 2xl:px-12 py-4 md:py-5 2xl:py-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-center"
                  style={{ fontFamily: 'var(--font-headline)' }}
                >
                  <span className="block text-sm md:text-base lg:text-lg 2xl:text-xl">RESERVE YOUR FREE SEAT</span>
                  <span className="block text-xs md:text-sm 2xl:text-base mt-1 opacity-75" style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}>OCTOBER 21ST • 12–1 PM</span>
                </a>
              </div>
            </div>

            {/* Right column - Speakers */}
            <div>
              <h2 className="text-[var(--slate)] text-xl sm:text-2xl md:text-3xl 2xl:text-4xl font-bold uppercase mb-6 md:mb-8 2xl:mb-10 tracking-wider" style={{ fontFamily: 'var(--font-headline)' }}>
                THIS MONTH'S SPEAKERS
              </h2>

              <div className="grid grid-cols-1 gap-6 md:gap-8 2xl:gap-10">
                {/* Speaker 1 - Walter Crosby */}
                <div className="flex items-center gap-4 2xl:gap-6">
                  {/* Mobile-optimized image size (72px = 18rem), Desktop: 96px (24rem) */}
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 2xl:w-32 2xl:h-32">
                    <Image
                      src="/Business Brief/_Headshots/Walter-Bubble.png"
                      alt="Walter Crosby"
                      width={128}
                      height={128}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[var(--slate)] text-base sm:text-lg md:text-xl 2xl:text-2xl font-bold uppercase mb-1 leading-tight" style={{ fontFamily: 'var(--font-headline)', letterSpacing: '0.05em' }}>
                      WALTER CROSBY
                    </h3>
                    <p className="text-[var(--slate)] text-xs sm:text-sm 2xl:text-base leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                      CEO of Helix Sales Development & Founder of The Sales Integrator
                    </p>
                  </div>
                </div>

                {/* Speaker 2 - John Heritage */}
                <div className="flex items-center gap-4 2xl:gap-6">
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 2xl:w-32 2xl:h-32">
                    <Image
                      src="/Business Brief/_Headshots/John-Bubble.png"
                      alt="John Heritage"
                      width={128}
                      height={128}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[var(--slate)] text-base sm:text-lg md:text-xl 2xl:text-2xl font-bold uppercase mb-1 leading-tight" style={{ fontFamily: 'var(--font-headline)', letterSpacing: '0.05em' }}>
                      JOHN HERITAGE
                    </h3>
                    <p className="text-[var(--slate)] text-xs sm:text-sm 2xl:text-base leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                      Founder & CEO of Evenbound
                    </p>
                  </div>
                </div>

                {/* Speaker 3 - Sarena Wing */}
                <div className="flex items-center gap-4 2xl:gap-6">
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 2xl:w-32 2xl:h-32">
                    <Image
                      src="/Business Brief/_Headshots/Sarena-Bubble.png"
                      alt="Sarena Wing"
                      width={128}
                      height={128}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[var(--slate)] text-base sm:text-lg md:text-xl 2xl:text-2xl font-bold uppercase mb-1 leading-tight" style={{ fontFamily: 'var(--font-headline)', letterSpacing: '0.05em' }}>
                      SARENA WING
                    </h3>
                    <p className="text-[var(--slate)] text-xs sm:text-sm 2xl:text-base leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                      Sales Manager at ZoomInfo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="register" className="bg-white py-12 md:py-16 lg:py-20 2xl:py-24 px-6">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
          <h2 className="text-[var(--slate)] text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold uppercase mb-8 md:mb-12 2xl:mb-16 tracking-wider" style={{ fontFamily: 'var(--font-headline)' }}>
            RESERVE YOUR SEAT
          </h2>

          {/* Mobile: stack vertically, Desktop: two columns */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 2xl:gap-20">
            {/* Left Column - Event Info Card */}
            <div className="bg-[var(--horizon)] text-white p-6 sm:p-8 md:p-10 2xl:p-12 rounded-2xl">
              <div className="mb-6 md:mb-8 2xl:mb-10 pb-6 2xl:pb-8 border-b-2 border-white/30">
                <h3>
                  <span className="block italic text-xl sm:text-2xl md:text-3xl 2xl:text-4xl mb-1" style={{ fontFamily: 'var(--font-accent)', fontWeight: 400, lineHeight: '1' }}>The</span>
                  <span className="block uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold leading-tight" style={{ fontFamily: 'var(--font-headline)', letterSpacing: '-0.01em' }}>BUSINESS BRIEF | SALES</span>
                </h3>
              </div>

              <div className="space-y-5 md:space-y-6 2xl:space-y-8" style={{ fontFamily: 'var(--font-body)' }}>
                <div>
                  <h4 className="text-xs sm:text-sm 2xl:text-base uppercase tracking-wider font-bold mb-2 opacity-90">WHEN</h4>
                  <p className="text-base sm:text-lg 2xl:text-xl">Monday, October 21st<br />12:00 PM – 1:00 PM</p>
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm 2xl:text-base uppercase tracking-wider font-bold mb-2 opacity-90">WHERE</h4>
                  <p className="text-base sm:text-lg 2xl:text-xl">120 Stevens Street SW<br />Grand Rapids, MI 49503</p>
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm 2xl:text-base uppercase tracking-wider font-bold mb-2 opacity-90">WHAT TO EXPECT</h4>
                  <ul className="space-y-2 text-sm sm:text-base 2xl:text-lg">
                    <li>• Expert insights on sales growth</li>
                    <li>• Actionable strategies you can use immediately</li>
                    <li>• Networking with local business leaders</li>
                    <li>• Complimentary lunch included</li>
                  </ul>
                </div>

                <div className="pt-4 2xl:pt-6 border-t border-white/20">
                  <p className="text-xs sm:text-sm 2xl:text-base opacity-90">
                    <span className="font-bold">FREE EVENT</span> – No cost to attend, lunch included
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Registration Form */}
            <div>
              {!formSubmitted ? (
                <form
                  action="https://hooks.zapier.com/hooks/catch/991040/u5ehi3b/"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-5 md:space-y-6"
                >
                {/* Hidden field for event date */}
                <input type="hidden" name="event_date" value="Monday, October 21st, 2024 - 12:00 PM – 1:00 PM" />

                <div>
                  <label htmlFor="name" className="block text-[var(--slate)] text-xs sm:text-sm font-bold uppercase tracking-wide mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                    Full Name *
                  </label>
                  {/* Mobile-optimized input with proper touch target (min 44px height) */}
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    className="w-full px-4 py-3.5 text-base border-2 border-[var(--slate)]/20 rounded-lg focus:border-[var(--horizon)] focus:outline-none transition-colors text-[var(--slate)]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[var(--slate)] text-xs sm:text-sm font-bold uppercase tracking-wide mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                    Email Address *
                  </label>
                  {/* Mobile-optimized email input with proper keyboard type */}
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    inputMode="email"
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                    title="Please enter a valid email address (e.g., name@example.com)"
                    className="w-full px-4 py-3.5 text-base border-2 border-[var(--slate)]/20 rounded-lg focus:border-[var(--horizon)] focus:outline-none transition-colors text-[var(--slate)]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-[var(--slate)] text-xs sm:text-sm font-bold uppercase tracking-wide mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    autoComplete="organization"
                    className="w-full px-4 py-3.5 text-base border-2 border-[var(--slate)]/20 rounded-lg focus:border-[var(--horizon)] focus:outline-none transition-colors text-[var(--slate)]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[var(--slate)] text-xs sm:text-sm font-bold uppercase tracking-wide mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                    Phone Number
                  </label>
                  {/* Mobile-optimized phone input with numeric keyboard */}
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    inputMode="tel"
                    pattern="[\(\)\s\-\+\.\d]{10,}"
                    title="Please enter a valid phone number (e.g., 123-456-7890 or (123) 456-7890)"
                    className="w-full px-4 py-3.5 text-base border-2 border-[var(--slate)]/20 rounded-lg focus:border-[var(--horizon)] focus:outline-none transition-colors text-[var(--slate)]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>

                <div>
                  {/* Increased touch target for checkbox (min 44px) */}
                  <label className="flex items-start gap-3 cursor-pointer py-2">
                    <input
                      type="checkbox"
                      id="bringing-guest"
                      name="bringing_guest"
                      className="w-5 h-5 mt-0.5 rounded border-2 border-[var(--slate)]/20 text-[var(--horizon)] focus:ring-[var(--horizon)] flex-shrink-0"
                      onChange={(e) => {
                        const guestFields = document.getElementById('guest-fields');
                        if (guestFields) {
                          guestFields.style.display = e.target.checked ? 'block' : 'none';
                        }
                      }}
                    />
                    <span className="text-[var(--slate)] text-xs sm:text-sm font-bold uppercase tracking-wide" style={{ fontFamily: 'var(--font-body)' }}>
                      I'm bringing a guest
                    </span>
                  </label>
                </div>

                {/* Guest Fields - Hidden by default, reduced padding on mobile */}
                <div id="guest-fields" style={{ display: 'none' }} className="space-y-5 md:space-y-6 pl-4 md:pl-8 border-l-4 border-[var(--horizon)]/30">
                  <div>
                    <label htmlFor="guest-name" className="block text-[var(--slate)] text-xs sm:text-sm font-bold uppercase tracking-wide mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                      Guest Full Name
                    </label>
                    <input
                      type="text"
                      id="guest-name"
                      name="guest_name"
                      autoComplete="name"
                      className="w-full px-4 py-3.5 text-base border-2 border-[var(--slate)]/20 rounded-lg focus:border-[var(--horizon)] focus:outline-none transition-colors text-[var(--slate)]"
                      style={{ fontFamily: 'var(--font-body)' }}
                    />
                  </div>

                  <div>
                    <label htmlFor="guest-email" className="block text-[var(--slate)] text-xs sm:text-sm font-bold uppercase tracking-wide mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                      Guest Email Address
                    </label>
                    <input
                      type="email"
                      id="guest-email"
                      name="guest_email"
                      autoComplete="email"
                      inputMode="email"
                      pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                      title="Please enter a valid email address (e.g., name@example.com)"
                      className="w-full px-4 py-3.5 text-base border-2 border-[var(--slate)]/20 rounded-lg focus:border-[var(--horizon)] focus:outline-none transition-colors text-[var(--slate)]"
                      style={{ fontFamily: 'var(--font-body)' }}
                    />
                  </div>
                </div>

                {/* Submit button - full width with proper touch target (min 44px) */}
                <button
                  type="submit"
                  className="w-full bg-[var(--slate)] hover:bg-[#2a2d2b] active:bg-[#2a2d2b] text-white font-bold uppercase tracking-wider px-8 md:px-10 py-5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98] md:hover:scale-105"
                  style={{ fontFamily: 'var(--font-headline)' }}
                >
                  <span className="block text-base md:text-lg">RESERVE YOUR FREE SEAT</span>
                  <span className="block text-xs md:text-sm mt-1 opacity-75" style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}>OCTOBER 21ST • 12–1 PM</span>
                </button>

                <p className="text-[var(--slate)]/60 text-xs text-center leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  We respect your privacy. Your information will only be used for event coordination.
                </p>
              </form>
              ) : (
                <div id="thank-you-message" className="bg-[var(--horizon)] text-white p-8 md:p-10 rounded-2xl text-center">
                  <div className="mb-6">
                    <svg className="w-16 h-16 md:w-20 md:h-20 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase mb-4" style={{ fontFamily: 'var(--font-headline)' }}>
                    YOU'RE ALL SET!
                  </h3>

                  <p className="text-base md:text-lg mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                    Thank you for registering for The Business Brief. We'll send you a confirmation email shortly with all the details.
                  </p>

                  <div className="border-t border-white/30 pt-6">
                    <p className="text-sm md:text-base font-bold mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                      SEE YOU SOON!
                    </p>
                    <p className="text-sm opacity-90" style={{ fontFamily: 'var(--font-body)' }}>
                      Monday, October 21st • 12–1 PM<br />
                      120 Stevens Street SW, Grand Rapids
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--slate)] py-12 md:py-16 lg:py-20 2xl:py-24 px-6">
        <div className="max-w-4xl 2xl:max-w-6xl mx-auto">
          <h2 className="text-white text-center text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold uppercase mb-8 md:mb-12 2xl:mb-16 tracking-wider" style={{ fontFamily: 'var(--font-headline)' }}>
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <div className="space-y-6 md:space-y-8 2xl:space-y-10">
            {/* FAQ 1 */}
            <div className="border-b border-white/20 pb-6 md:pb-8 2xl:pb-10">
              <h3 className="text-white text-lg sm:text-xl md:text-2xl 2xl:text-3xl font-bold mb-3 md:mb-4 2xl:mb-5 uppercase" style={{ fontFamily: 'var(--font-headline)' }}>
                What industries is this right for?
              </h3>
              <p className="text-[var(--beacon)] text-base md:text-lg 2xl:text-xl leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                The Business Brief is designed for leaders across all industries—whether you're in manufacturing, tech, healthcare, professional services, or retail. If you're growing a business and facing real challenges, you'll find actionable insights here.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="border-b border-white/20 pb-6 md:pb-8 2xl:pb-10">
              <h3 className="text-white text-lg sm:text-xl md:text-2xl 2xl:text-3xl font-bold mb-3 md:mb-4 2xl:mb-5 uppercase" style={{ fontFamily: 'var(--font-headline)' }}>
                Can I bring a friend?
              </h3>
              <p className="text-[var(--beacon)] text-base md:text-lg 2xl:text-xl leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                Absolutely! We encourage you to bring colleagues or business friends who would benefit from the discussion. Just make sure everyone registers so we have accurate headcount for lunch.
              </p>
            </div>

            {/* FAQ 3 */}
            <div>
              <h3 className="text-white text-lg sm:text-xl md:text-2xl 2xl:text-3xl font-bold mb-3 md:mb-4 2xl:mb-5 uppercase" style={{ fontFamily: 'var(--font-headline)' }}>
                Is lunch really free?
              </h3>
              <p className="text-[var(--beacon)] text-base md:text-lg 2xl:text-xl leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                Yes! Lunch is completely free, and so is the entire event. This is our way of investing in the local business community. Show up, learn, connect, and enjoy a great meal on us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--slate)] text-white py-8 2xl:py-10 px-6">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
          <div className="h-8 sm:h-10 2xl:h-12 relative w-32 sm:w-40 2xl:w-48">
            <Image
              src="/DeksiaWhiteLogo.svg"
              alt="Deksia"
              fill
              className="object-contain object-left md:object-center"
              priority
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-xs sm:text-sm 2xl:text-base uppercase tracking-wide text-center" style={{ fontFamily: 'var(--font-body)' }}>FOLLOW US FOR UPDATES:</span>
            <div className="flex gap-4">
              {/* Increased touch target for social icons (min 44px) */}
              <a href="#" className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-[var(--slate)] hover:bg-gray-200 active:bg-gray-300 transition text-xs font-bold" aria-label="Instagram">
                IG
              </a>
              <a href="#" className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-[var(--slate)] hover:bg-gray-200 active:bg-gray-300 transition text-xs font-bold" aria-label="Facebook">
                FB
              </a>
              <a href="#" className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-[var(--slate)] hover:bg-gray-200 active:bg-gray-300 transition text-xs font-bold" aria-label="LinkedIn">
                IN
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
