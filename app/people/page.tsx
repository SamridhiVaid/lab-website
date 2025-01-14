import React from 'react';
import Image from 'next/image';
import { PageLayout } from '@/components/page-layout';
import { GlobeIcon, TwitterIcon, BookOpenIcon, Linkedin } from 'lucide-react';

const DEFAULT_AVATAR = "/image/assets/next.svg";


// Data structure for principal investigators
const principalInvestigators = [
  {
    name: "Dr. J. Ross Mitchell",
    title: "University of Alberta",
    image: "/image/assets/ross.webp",  // Updated path
    description: "Professor, Department of Medicine",
    links: {
      webpage: "https://sites.google.com/view/j-ross-mitchell/",
      scholar: "https://scholar.google.com/citations?user=cqOJ26UAAAAJ&hl=en",
      linkedin: "https://www.linkedin.com/in/jrossmitchell/"
    }
  }, {
    name: 'Mohamed Abdalla',
    image: "/image/assets/abdallah.png",  // Updated path
    title: 'University of Alberta',
    description: 'Assistant Professor, Department of Medicine',
    links: {
      webpage: 'https://www.cs.toronto.edu/~msa/',
      scholar: 'https://scholar.google.com/citations?user=U8D2dlMAAAAJ&hl=en',
    }
  }
];

// Data structure for students and researchers
const researchers = [
  {
    name: "Chun Hing Cheng",
    title: "AI Researcher",
    image: DEFAULT_AVATAR,
    description: "Artificial Intelligence and Machine Learning",
    links: {
      webpage: "#",
      twitter: "#",
      scholar: "#",
      linkedin: "#"
    }
  },
  {
    name: "Samridhi Vaid",
    title: "AI Researcher",
    image: "/image/assets/sam.png",
    description: "MLOps and GenAI for healthcare",
    links: {
      scholar: "https://scholar.google.ca/citations?user=x8fot_QAAAAJ&hl=en",
      twitter: "https://twitter.com/samridhivaid",
      linkedin: "https://www.linkedin.com/in/samridhivaid/"
    }
  },
  {
    name: "Sacha Davis",
    title: "AI Specialist",
    image: "/image/assets/sacha.png",
    description: "ML for Electronic Health Records",
    links: {
      webpage: "https://www.sachadavis.com",
      twitter: "https://x.com/sachamarendavis",
      scholar: "https://scholar.google.com/citations?user=IhVmweAAAAAJ&hl=en&authuser=1",
      linkedin: "https://www.linkedin.com/in/sachamarendavis/"
    }
  }
];

// Person Card Component
interface Person {
  name: string;
  title: string;
  image: string;
  description: string;
  links: {
    webpage?: string;
    twitter?: string;
    scholar?: string;
    linkedin?: string;
  };
}

const PersonCard = ({ person }: { person: Person }) => (
  <div className="group relative">
    <div className="flex flex-col items-center p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="relative w-48 h-48 mb-6">
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <Image
            src={person.image}
            alt={person.name}
            width={192}
            height={192}
            className="object-cover transform group-hover:scale-105 transition-transform duration-200"
            unoptimized
          />
        </div>
      </div>
      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold text-gray-900">{person.name}</h3>
        <p className="text-primary font-medium">{person.title}</p>
        <p className="text-sm text-muted-foreground max-w-sm">{person.description}</p>
        <div className="flex justify-center gap-3 pt-3">
          {Object.entries(person.links).map(([key, url]) => (
            url !== "#" && <SocialLink key={key} type={key as 'webpage' | 'twitter' | 'scholar' | 'linkedin'} url={url} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Social Link Component
const SocialLink = ({ type, url }: {
  type: 'webpage' | 'twitter' | 'scholar' | 'linkedin',
  url: string
}) => {
  const icons = {
    webpage: <GlobeIcon className="w-4 h-4" />,
    twitter: <TwitterIcon className="w-4 h-4" />,
    scholar: <BookOpenIcon className="w-4 h-4" />,
    linkedin: <Linkedin className="w-4 h-4" />
  };

  return (
    <a
      href={url}
      className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
      aria-label={`Visit ${type} profile`}
      target='_blank'
    >
      {icons[type]}
    </a>
  );
};

// Section Header Component
interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => (
  <div className="relative pb-12">
    <h2 className="text-4xl font-bold text-center">
      {title}
    </h2>
    <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2">
      <div className="w-20 h-1 bg-primary rounded-full" />
    </div>
  </div>
);

// Main Page Component
export default function PeoplePage() {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Team</h1>
          <p className="text-xl text-muted-foreground">
            Meet the brilliant minds behind our groundbreaking research
          </p>
        </div>

        <div className="space-y-24">
          <section>
            <SectionHeader title="Principal Investigators" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {principalInvestigators.map((person, index) => (
                <PersonCard key={index} person={person} />
              ))}
            </div>
          </section>

          <section>
            <SectionHeader title="Researchers" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {researchers.map((person, index) => (
                <PersonCard key={index} person={person} />
              ))}
            </div>
          </section>

          <section>
            <SectionHeader title="PhD Students" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                {
                  name: "Anureet Tiwana",
                  title: "PhD Student",
                  image: DEFAULT_AVATAR,
                  description: "Robotics and reinforcement learning",
                  links: {
                    webpage: "#",
                    scholar: "#",
                    twitter: "#",
                    linkedin: "#"
                  }
                },
                {
                  name: "Hoda Ebrahimi",
                  title: "PhD Student",
                  image: "/image/assets/hoda.JPG",
                  description: "Computer Vision in Healthcare and Medical Image Processing",
                  links: {
                    webpage: "#",
                    scholar: "#",
                    twitter: "#",
                    linkedin: "https://www.linkedin.com/in/hoda-ebrahimi-88a49a239"
                  }
                },
                {
                  name: "Michael Parkes",
                  title: "PhD Student",
                  image: DEFAULT_AVATAR,
                  description: "Optimization algorithms in machine learning",
                  links: {
                    webpage: "#",
                    scholar: "#",
                    twitter: "#",
                    linkedin: "#"
                  }
                }
              ].map((person, index) => (
                <PersonCard key={index} person={person} />
              ))}
            </div>
          </section>

          <section>
            <SectionHeader title="Masters Students" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                {
                  name: "Kiana Aghaskasiri",
                  title: "Masters Student",
                  image: DEFAULT_AVATAR,
                  description: "AI for healthcare",
                  links: {
                    webpage: "#",
                    scholar: "#",
                    twitter: "#",
                    linkedin: "#"
                  }
                },
                {
                  name: "Tian Xiang Du",
                  title: "Masters Student",
                  image: DEFAULT_AVATAR,
                  description: "Computer vision and robotics",
                  links: {
                    webpage: "#",
                    scholar: "#",
                    twitter: "#",
                    linkedin: "#"
                  }
                },
                {
                  name: "Yasmin Madani",
                  title: "Masters Student",
                  image: "/image/assets/Yasmin.png",
                  description: "Natural language processing and AI",
                  links: {
                    webpage: "#",
                    scholar: "https://scholar.google.ca/citations?user=VBFLp8wAAAAJ&hl=en",
                    twitter: "https://x.com/yasmin_mdn?s=11",
                    linkedin: "https://www.linkedin.com/in/yasmin-madani"
                  }
                },
                {
                  name: "Mobina Mosannafat",
                  title: "Masters Student",
                  image: "/image/assets/MobinaMosannafat.jpeg",
                  description: "AI in Periciosion Health, Mecial Image Processing, Machine Learning",
                  links: {
                    webpage: "#",
                    scholar: "https://scholar.google.ca/citations?user=Kelj4IUAAAAJ&hl=en",
                    twitter: "#",
                    linkedin: "https://www.linkedin.com/in/mobina-mosannafat/"
                    
                  }
                },
                {
                  name: "Mohammad Tavakoli",
                  title: "Masters Student",
                  image: "/image/assets/mohammadtavakoli.png",
                  description: "Large Language Models and Retrieval-Augmented Generation",
                  links: {
                    webpage: "#",
                    scholar: "https://scholar.google.ca/citations?user=gCgTCMQAAAAJ&hl=en&authuser=1",
                    twitter: "#",
                    linkedin: "https://www.linkedin.com/in/mohamadtavakoli/",
                  }
                }
              ].map((person, index) => (
                <PersonCard key={index} person={person} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
