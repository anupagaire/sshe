"use client";

import React from 'react';
      import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  email?: string;
  image?: string;
}

interface TeamSection {
  title: string;
  members: TeamMember[];
}

const teamData: TeamSection[] = [
  {
    title: "Board of Directors",
    members: [
      {
        name: "Professor Dr. Greg Whitely",
        role: "Board Member",
        email: "",
        image: "/images/team/greg-whitely.jpg"
      },
      {
        name: "Sir Gerald Newman",
        role: "Board Member",
        email: "",
        image: "/images/team/gerald-newman.jpg"
      },
      {
        name: "Puna Bhandari",
        role: "Board Member",
        email: "",
        image: "/images/team/puna-bhandari.jpg"
      }
    ]
  },
  {
    title: "Academic Board",
    members: [
      {
        name: "Sir Gerald Newman",
        role: "Academic Board Member",
        email: "",
        image: "/images/team/gerald-newman.jpg"
      },
      {
        name: "Craig Ilis",
        role: "Academic Board Member",
        email: "",
        image: "/images/team/craig-ilis.jpg"
      },
      {
        name: "Andy West",
        role: "Academic Board Member",
        email: "",
        image: "/images/team/andy-west.jpg"
      }
    ]
  },
  {
    title: "CAC Members",
    members: [
      {
        name: "A/Prof Seedwell Sithole",
        role: "Chair",
        email: "Seedwell.sithole@avondale.edu.au",
        image: "/images/team/seedwell-sithole.jpg"
      },
      {
        name: "Prof. Lucia Carrion Gordon",
        role: "Dean & Co-Chair",
        email: "lucia@aahm.edu.au",
        image: "/images/team/lucia-gordon.jpg"
      },
      {
        name: "Mr. Mohammad Akbar",
        role: "Member",
        email: "akbar_uts@yahoo.com",
        image: "/images/team/mohammad-akbar.jpg"
      },
      {
        name: "Dr. Ratan Ghosh",
        role: "Member",
        email: "ratanghosh18@gmail.com",
        image: "/images/team/ratan-ghosh.jpg"
      },
      {
        name: "Dr. Sajal Roy",
        role: "Member",
        email: "roysajal.wgs@gmail.com",
        image: "/images/team/sajal-roy.jpg"
      }
    ]
  }
];

export default function OurPeoplePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
<section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-28 lg:py-50">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Text Side */}
      <div>
        <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wider uppercase mb-6">
          Our People
        </span>

        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
          Meet Our
          <span className="block text-[#0a97b0]">Team.</span>
        </h1>

        <div className="w-24 h-1 bg-[#0a97b0] rounded-full mb-8"></div>

        <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
          Get to know the people who, alongside our academics and
          student community, make Atlas matter. Dedicated professionals,
          passionate educators, and inspiring leaders.
        </p>

        <button className="px-8 py-4 bg-[#0a97b0] hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
          Meet Our Team
        </button>
      </div>

      {/* Image Side */}
      <div className="relative">
        <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl bg-[#0a97b0]/10"></div>

        <Image
          src="/bg people.jpg"
          alt="Our Team"
          width={200}
          height={200}
          className="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl"
        />

        {/* Floating Card */}
        <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl">
          <p className="text-3xl font-bold text-[#0a97b0]">100+</p>
          <p className="text-slate-500 text-sm">Team Members</p>
        </div>
      </div>

    </div>
  </div>
</section> {/* Team Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {teamData.map((section, sectionIndex) => (
          <section key={sectionIndex} className="animate-fade-in">
            {/* Section Title */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-12 bg-[#0a97b0] rounded-full mr-4"></span>
                {section.title}
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-[#0a97b0] to-indigo-600 rounded-full ml-6"></div>
            </div>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.members.map((member, memberIndex) => (
                <TeamMemberCard 
                  key={memberIndex} 
                  member={member} 
                  index={memberIndex}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-indigo-900 to-[#0a97b0] text-white py-12 mt-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg mb-4">Interested in joining our team?</p>
          <button className="bg-white text-[#0a97b0] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg">
            View Careers
          </button>
        </div>
      </div>
    </div>
  );
}

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  const [imageError, setImageError] = React.useState(false);

  return (
    <div 
      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Photo Section */}
      <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        {!imageError && member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100">
            <div className="text-6xl font-bold text-blue-300">
              {member.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
            </div>
          </div>
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a97b0]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Social/Contact overlay */}
        {member.email && (
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <a 
              href={`mailto:${member.email}`}
              className="inline-flex items-center text-white hover:text-blue-200 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {member.email}
            </a>
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0a97b0] transition-colors">
          {member.name}
        </h3>
        <p className="text-[#0a97b0] font-medium mb-3">
          {member.role}
        </p>
        
        {member.email && (
          <div className="pt-3 border-t border-gray-100">
            <a 
              href={`mailto:${member.email}`}
              className="text-sm text-gray-500 hover:text-[#0a97b0] transition-colors flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {member.email}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}