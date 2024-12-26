import React from 'react';
import Image from 'next/image';
import { PageLayout } from '@/components/page-layout';
import { GlobeIcon, TwitterIcon, BookOpenIcon, Linkedin } from 'lucide-react';

// Data structure for principal investigators
const principalInvestigators = [
  {
    name: "Dr. J. Ross Mitchell",
    title: "University of Alberta",
    image: "/ross.webp",
    description: "Professor, Department of Medicine",
    links: {
      webpage: "https://sites.google.com/view/j-ross-mitchell/",
      scholar: "https://scholar.google.com/citations?user=cqOJ26UAAAAJ&hl=en",
      linkedin: "https://www.linkedin.com/in/jrossmitchell/"
    }
  }, {
    name: 'Mohamed Abdalla',
    image: "/abdallah.png",
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
    image: "/chunhingcheng.png",
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
    image: "/sam.png",
    description: "MLOps and GenAI for healthcare",
    links: {
      scholar: "https://scholar.google.ca/citations?user=x8fot_QAAAAJ&hl=en",
      twitter: "https://twitter.com/samridhivaid",
      linkedin: "https://www.linkedin.com/in/samridhivaid/"
    }
  },
  {
    name: "Sacha Davis",
    title: "AI Researcher",
    image: "/sachadavis.png",
    description: "Neural networks and AI ethics",
    links: {
      webpage: "#",
      twitter: "#",
      scholar: "#",
      linkedin: "#"
    }
  }
];

const phdStudents = [
  {
    name: "Anureet Tiwana",
    title: "PhD Student",
    image: "/anureettiwana.png",
    description: "Robotics and reinforcement learning",
    links: {
      webpage: "#",
      scholar: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "Hooda Ebrahimi",
    title: "PhD Student",
    image: "/hoodaebrahimi.png",
    description: "Natural language processing and AI",
    links: {
      webpage: "#",
      scholar: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "Michael Parkes",
    title: "PhD Student",
    image: "/michaelparkes.png",
    description: "Optimization algorithms in machine learning",
    links: {
      webpage: "#",
      scholar: "#",
      twitter: "#",
      linkedin: "#"
    }
  }
];

const mastersStudents = [
  {
    name: "Kiana Aghaskasiri",
    title: "Masters Student",
    image: "/kianaaghaskasiri.png",
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
    image: "/tianxiangdu.png",
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
    image: "/yasminmadani.png",
    description: "Ethics in AI and automation",
    links: {
      webpage: "#",
      scholar: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "Mobina Mosannafat",
    title: "Masters Student",
    image: "/mobinamosannafat.png",
    description: "Data science and predictive modeling",
    links: {
      webpage: "#",
      scholar: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "Mohammad Tavakoli",
    title: "Masters Student",
    image: "/mohammadtavakoli.png",
    description: "AI systems and scalability",
    links: {
      webpage: "#",
      scholar: "#",
      twitter: "#",
      linkedin: "#",
    }
  }
];

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
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-200"
          />
        </div>
      </div>
      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold text-gray-900">{person.name}</h3>
        <p className="text-primary font-medium">{person.title}</p>
        <p className="text-sm text-muted-foreground max-w-sm">{person.description}</p>
        <div className="flex justify-center gap-3 pt-3">
          {Object.entries(person.links).map(([key, url]) => (
            <SocialLink key={key} type={key as 'webpage' | 'twitter' | 'scholar' | 'linkedin'} url={url} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

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
              {phdStudents.map((person, index) => (
                <PersonCard key={index} person={person} />
              ))}
            </div>
          </section>

          <section>
            <SectionHeader title="Masters Students" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {mastersStudents.map((person, index) => (
                <PersonCard key={index} person={person} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}