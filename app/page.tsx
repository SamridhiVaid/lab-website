import { type FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HomePage: FC = () => {
  return (
    <div suppressHydrationWarning className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-1">
          <div className="relative w-100 h-100 overflow-hidden rounded-lg">
            <Image 
              src="/ross-mitchell.jpg"
              alt="Dr. J. Ross Mitchell" 
              width={1000}
              height={1000}
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">Dr. J. Ross Mitchell</h1>
          <div className="space-y-2">
            {/* Academic Positions */}
            <p>Professor, Department of Medicine</p>
            <p>Adjunct Professor, Department of Computer Science</p>
            <p>University of Alberta</p>
            
            {/* Research Chairs and Positions */}
            <p>Alberta Health Services (AHS) Chair in AI in Health</p>
            <p>Canada CIFAR AI Chair</p>
            <p>Fellow, Alberta Machine Intelligence Institute (Amii)</p>
            
            {/* Contact Information */}
            <p><strong>Office:</strong> Clinical Sciences Building, 5th floor</p>
            <p><strong>Email:</strong> jmitche at ualberta.ca</p>
          
            {/* External Profiles */}
            <p>
              <Link 
                href="https://scholar.google.com/citations?user=cqOJ26UAAAAJ&hl=en" 
                className="text-blue-600 hover:underline" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Google Scholar
              </Link>
            </p>
            <p>
              <Link
                href="https://apps.ualberta.ca/directory/person/jmitche2"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                University of Alberta Profile
              </Link>
            </p>
            <p>
              <Link
                href="https://www.amii.ca/about/our-people/ross-mitchell/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Amii Profile
              </Link>
            </p>
            <p>
              <Link
                href="https://cifar.ca/bios/joseph-ross-mitchell/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                CIFAR Profile
              </Link>
            </p>
            <p>
              <Link
                href="https://www.linkedin.com/in/jrossmitchell/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold">About Me</h2>
          <p>
          Dr. Mitchell is a Canada CIFAR AI Chair, the Alberta Health Services (AHS) Chair in AI in Health, a professor in the Department of Medicine, and an adjunct professor in the Department of Computer Science at the University of Alberta. He is also a fellow with the Alberta Machine Intelligence Institute and the senior program director of artificial intelligence adoption with AHS.

Dr. Mitchell was the inaugural artificial intelligence officer at the H. Lee Moffitt Cancer Center and Research Institute in Tampa, Florida from 2019 to 2021. There he led efforts to develop AI tools to improve the efficiency and quality of cancer care, including models to predict patient outcomes from electronic health record data, and natural language processing to infer diagnostic codes from free-text pathology reports. He was a professor and the inaugural director of the Division of Medical Imaging Informatics in the Department of Radiology, Mayo Clinic in Arizona, from 2011 to 2019. He was a professor of Biomedical Engineering, Radiology, and Clinical Neurosciences at the University of Calgary from 2000 to 2011. He received his PhD at the University of Western Ontario and has been working in the fields of biomedical imaging, artificial intelligence, and machine learning in healthcare for 30 years.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">About my Research</h2>
          <p>
            Dr. Mitchell&apos;s research focuses on the development and application of advanced imaging techniques 
            and artificial intelligence in medicine, particularly in the fields of neurology and oncology.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">My Group</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">AI Researchers</h3>
              <ul className="list-disc pl-5">
                <li>Chun Hing Cheng</li>
                <li>Samridhi Vaid</li>
                <li>Sacha Davis</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">PhD Students</h3>
              <ul className="list-disc pl-5">
                <li>Anureet Tiwana</li>
                <li>Hooda Ebrahimi</li>
                <li>Michael Parkes</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Masters Students</h3>
              <ul className="list-disc pl-5">
                <li>Kiana Aghaskasiri</li>
                <li>Tian Xiang Du</li>
                <li>Yasmin Madani</li>
                <li>Mobina Mosannafat</li>
                <li>Mohammad Tavakoli</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomePage