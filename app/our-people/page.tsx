"use client";

import React from 'react';
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  email?: string;
  image?: string;
  bio?: string;
  qualifications?: string[];
}

interface TeamSection {
  title: string;
  description?: string;
  members: TeamMember[];
}

const teamData: TeamSection[] = [
  {
    title: "Board of Directors",
    description: "Our Board of Directors provides strategic oversight and governance to ensure Atlas delivers on its mission of excellence in education.",
    members: [
      {
        name: "Professor Dr. Greg Whitely",
        role: "Board Member",
        image: "/team/Greg-Whateley-1.png",
        bio: "Professor Dr. Greg Whitely brings decades of academic leadership and governance experience to the Atlas Board, guiding the institution's strategic direction and educational standards.",
      },
      {
        name: "Sir Gerald Newman",
        role: "Board Member",
        image: "/team/gerard.jpeg",
        bio: "Sir Gerald Newman contributes extensive expertise in institutional governance and education policy, supporting Atlas in achieving its vision for quality higher education.",
      },
      {
        name: "Puna Bhandari",
        role: "Board Member",
        image: "/team/puna.jpeg",
        bio: "Puna Bhandari brings a wealth of experience in business development and community engagement, championing diversity and inclusion across Atlas's programs and initiatives.",
      },
    ],
  },
  {
    title: "Academic Board",
    description: "The Academic Board upholds the integrity and quality of Atlas's academic programs, ensuring our curriculum meets the highest standards.",
    members: [
      {
        name: "Sir Gerald Newman",
        role: "Academic Board Member",
        image: "/team/gerard.jpeg",
        bio: "Sir Gerald Newman provides vital academic governance expertise, ensuring Atlas's programs maintain rigorous quality standards and alignment with industry needs.",
      },
      {
        name: "Craig Ilis",
        role: "Academic Board Member",
        image: "/team/craig.png",
        bio: "Professor Craig Ellis has over 20 years’ higher education industry experience with the last 10 in senior management and executive roles, including the positions of Associate Dean (Academic) and Acting Executive Dean, as well as Non-executive Director of Western Sydney University Enterprises (formerly UWS College). ",
      },
      {
        name: "Andy West",
        role: "Academic Board Member",
        image: "/team/andy.jpeg",
        bio: "Andy West brings practical industry insight to the Academic Board, bridging the gap between academia and professional practice in Atlas's educational offerings.",
      },
    ],
  },
  {
    title: "CAC Members",
    description: "Our Curriculum Advisory Committee (CAC) ensures Atlas's programs are current, relevant, and aligned with industry and regulatory requirements.",
    members: [
      {
        name: "A/Prof Seedwell Sithole",
        role: "Chair",
        email: "Seedwell.sithole@avondale.edu.au",
        image: "/team/seed.webp",
        bio: "Associate Professor Seedwell Sithole is a distinguished academic leader with expertise in accounting, curriculum design, and online program development. As former Associate Dean (Learning & Teaching) at the University of Tasmania, he led the design and launch of fully online business programs and drove digital transformation aligned with AACSB standards. He has led accreditation processes and contributed to academic governance across multiple institutions.",
        qualifications: ["Associate Professor, Avondale University", "Former Associate Dean (L&T), University of Tasmania", "AACSB Accreditation Expert"],
      },
      {
        name: "Prof. Lucia Carrion Gordon",
        role: "Dean & Co-Chair",
        email: "lucia@aahm.edu.au",
        image: "/team/lucia.jpeg",
        bio: "Professor Dr. Lucia Carrion Gordon is an accomplished researcher and lecturer with distinguished academic credentials and advanced technological expertise. She is committed to fostering innovative ideas and solutions, with proven expertise in data analysis and diverse research methodologies. Known for her integrity and adaptability, she excels in culturally diverse environments and has a strong track record in stakeholder engagement and academic leadership.",
        qualifications: ["Prof. Dr² — Dual Doctorate", "Expert in Data Analysis & Research Methodologies", "Alumni, University of Technology Sydney"],
      },
     
      {
        name: "Dr. Ratan Ghosh",
        role: "Member",
        email: "ratanghosh18@gmail.com",
        image: "/team/ratan.jpeg",
        bio: "Dr. Ratan Ghosh is a PhD Researcher in Accounting and Finance at the Australian Catholic University and an Emerald Literati Award Winner. He specialises in Finance, Accounting, Forensic Auditing, and Business Data Analytics. Proficient in Stata, SPSS, and NVivo, he brings expertise in unit coordination, curriculum development, and technology-enabled education through platforms such as Canvas and Moodle.",
        qualifications: ["PhD Candidate, Australian Catholic University", "Emerald Literati Award Winner", "Expert: Stata, SPSS, NVivo"],
      },
      {
        name: "Dr. Sajal Roy",
        role: "Member",
        email: "roysajal.wgs@gmail.com",
        image: "/team/sajal.jpeg",
        bio: "Dr. Sajal Roy is an established academic and dedicated researcher in human services with expertise spanning community services, social work, sociology, and gender and development studies. He has held impactful roles at UNSW and UTS, contributing to social impact, financial wellbeing, and climate change resilience projects. A proactive educator, he excels in curriculum development and student mentorship, promoting multicultural perspectives in higher education.",
        qualifications: ["PhD — Human Services & Social Work", "Former Academic, UNSW & UTS", "CHC52021 Diploma of Community Services"],
      },
    ],
  },
];

export default function OurPeoplePage() {
  return (
    <div className="min-h-screen" style={{ background: '#f8fafc' }}>

      {/* Hero */}
      <section className="relative overflow-hidden py-38 lg:py-36"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #0a97b0 100%)' }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold tracking-wider uppercase mb-6"
                style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', backdropFilter: 'blur(10px)' }}>
                Our People
              </span>
              <h1 className="font-bold leading-tight mb-6"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff' }}>
                Meet the People
                <span className="block" style={{ color: '#7dd3fc' }}>Behind Atlas.</span>
              </h1>
              <div className="w-24 h-1 rounded-full mb-8" style={{ background: '#7dd3fc' }} />
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Get to know the dedicated professionals, passionate educators, and inspiring leaders
                who make Atlas a place of genuine learning and growth.
              </p>
              <div className="flex gap-8">
                {[
                  { num: '3', label: 'Board Members' },
                  { num: '3', label: 'Academic Board' },
                  { num: '5', label: 'CAC Members' },
                ].map(({ num, label }) => (
                  <div key={label}>
                    <p className="text-3xl font-bold" style={{ color: '#7dd3fc' }}>{num}</p>
                    <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl"
                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }} />
              <Image
                src="/3.jpg"
                alt="Our Team"
                width={600}
                height={500}
                className="relative rounded-3xl shadow-2xl w-full object-cover"
                style={{ height: 420 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {teamData.map((section, sectionIndex) => (
          <section key={sectionIndex}>
            {/* Section header */}
            <div className="mb-14">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-1.5 h-12 rounded-full" style={{ background: '#0a97b0' }} />
                <h2 className="text-4xl font-bold" style={{ color: '#0f172a' }}>
                  {section.title}
                </h2>
              </div>
              {section.description && (
                <p className="text-lg ml-6" style={{ color: '#64748b', maxWidth: 720 }}>
                  {section.description}
                </p>
              )}
              <div className="h-px mt-6 ml-6"
                style={{ background: 'linear-gradient(to right, #0a97b0, transparent)' }} />
            </div>

            {/* Members grid */}
            <div className={`grid gap-8 ${
              section.members.length <= 3
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}>
              {section.members.map((member, memberIndex) => (
                <TeamMemberCard key={memberIndex} member={member} index={memberIndex} />
              ))}
            </div>
          </section>
        ))}
      </div>

    
    </div>
  );
}

function TeamMemberCard({ member, index }: { member: TeamMember; index: number }) {
  const [imageError, setImageError] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const initials = member.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

  return (
    <div
      className="group bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.06)',
        border: '1px solid #f1f5f9',
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Photo */}
      <div className="relative overflow-hidden" style={{ height: 260 }}>
        {!imageError && member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #e0f2fe, #bae6fd)' }}>
            <span className="text-5xl font-bold" style={{ color: '#0a97b0' }}>{initials}</span>
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'linear-gradient(to top, rgba(10,151,176,0.85) 0%, transparent 60%)' }} />

        {/* Email on hover */}
        {member.email && (
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <a href={`mailto:${member.email}`}
              className="flex items-center gap-2 text-white text-sm hover:text-blue-200 transition-colors">
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="truncate">{member.email}</span>
            </a>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="text-lg font-bold mb-1 group-hover:text-[#0a97b0] transition-colors"
          style={{ color: '#0f172a' }}>
          {member.name}
        </h3>
        <p className="text-sm font-semibold mb-4" style={{ color: '#0a97b0' }}>
          {member.role}
        </p>

        {/* Bio */}
        {member.bio && (
          <div>
            <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
              {expanded ? member.bio : `${member.bio.slice(0, 120)}...`}
            </p>
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-2 text-xs font-semibold transition-colors"
              style={{ color: '#0a97b0' }}
            >
              {expanded ? 'Show less ↑' : 'Read more ↓'}
            </button>
          </div>
        )}

        {/* Qualifications */}
        {member.qualifications && member.qualifications.length > 0 && (
          <div className="mt-4 pt-4" style={{ borderTop: '1px solid #f1f5f9' }}>
            <div className="flex flex-wrap gap-2">
              {member.qualifications.map((q, i) => (
                <span key={i} className="text-[10px] font-medium px-2 py-1 rounded-full"
                  style={{ background: '#e0f2fe', color: '#0369a1' }}>
                  {q}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Email link */}
        {member.email && (
          <div className="mt-4 pt-4" style={{ borderTop: '1px solid #f1f5f9' }}>
            <a href={`mailto:${member.email}`}
              className="flex items-center gap-2 text-sm transition-colors hover:text-[#0a97b0]"
              style={{ color: '#94a3b8' }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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