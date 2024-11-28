// app/experience/page.tsx
import { PageLayout } from '@/components/page-layout'
import { Card, CardHeader, CardContent } from '@/components/ui/card'

const education = [
  {
    degree: "Scientific Leadership Course",
    year: "2008",
    institution: "University of Calgary",
    location: "Calgary, Alberta"
  },
  {
    degree: "Ph.D. in Medical Biophysics",
    year: "1996",
    institution: "Western University",
    location: "London, Ontario",
    achievement: "Collip Medal: top PhD grad"
  },
  {
    degree: "Master of Science in Computer Science",
    year: "1989",
    institution: "University of Regina & The Allan Blair Cancer Center",
    location: "Regina, Saskatchewan"
  },
  {
    degree: "Bachelor of Science Honors in Computer Science",
    year: "1986",
    institution: "University of Regina",
    location: "Regina, Saskatchewan",
    achievement: "Co-op Work Study program. Graduated with High Honors: GPA > 85%"
  }
]

const skills = {
  technical: [
    { category: "Programming", skills: "Python, C" },
    { category: "Medical Imaging", skills: "Teleradiology, MRI, CT, PET, US, Mammography, DICOM, Radiomics, Biomarkers" },
    { category: "Image Processing", skills: "Computer Vision, ITK, VTK, OpenCV, scikit-image, Wavelets, Fourier, Stockwell, Statistics, Analytics, Algorithms, Graphics, GPGPU" },
    { category: "ML", skills: "PyTorch, Keras, TensorFlow, huggingface.co, Spacy, scikit-learn, XGB, Random Forests, PCA" },
    { category: "Technology", skills: "AWS, Docker, linux, bash, MacOS, iOS, Xcode, Windows, make, git, latex" }
  ],
  domain: [
    { category: "Communication", skills: "Accomplished & engaging public speaker. Able to effectively convey complex technical concepts to non-expert audiences." },
    { category: "Applications", skills: "Cancer (brain, ENT, breast, liver, pancreas) MS, Stroke, Alzheimer's, Neurosurgery" }
  ]
}

const workExperience = [
  {
    organization: "H. LEE MOFFITT CANCER CENTER AND RESEARCH INSTITUTE",
    location: "Tampa, Florida",
    position: "AI Officer and Senior Member of Research Staff",
    period: "January 2019 to May 2021",
    achievements: [
      "Lead Center efforts to develop digital tools that utilize artificial intelligence and other advanced technologies to improve the efficiency and quality of cancer care.",
      "Developed multiple models to predict patient outcomes using EHR data.",
      "Developed a novel recurrent neural network architecture to predict sepsis onset in ICU patients."
    ]
  },
  {
    organization: "MAYO CLINIC COLLEGE OF MEDICINE",
    location: "Phoenix, Arizona",
    position: "Professor of Radiology",
    period: "September 2011 to January 2019",
    achievements: [
      "Saved Mayo Clinic $10M on Mobile Image Viewer by developing a research partnership with PureWeb Inc.",
      "Guided project to develop informatics tools for Division of Breast Imaging."
    ]
  }
]

const supervision = [
  { role: "Scientists and Technical Staff", count: 23 },
  { role: "Post-doctoral Fellows, Medical Fellows and Residents", count: 12 },
  { role: "Graduate Students", count: 31, details: "(15 PhD and 16 MSc Students)" }
]

export default function Experience() {
  return (
    <PageLayout title="Experience" description="Academic and professional experience">
      <div className="space-y-8">
        {/* Education Section */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Education & Credentials</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="min-w-[60px] text-blue-600 font-semibold">
                    {edu.year}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{edu.degree}</h3>
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-gray-500 text-sm">{edu.location}</p>
                    {edu.achievement && (
                      <p className="text-indigo-600 mt-1 text-sm">{edu.achievement}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Skills & Expertise</h2>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="font-semibold text-lg text-gray-900">Technical Skills</h3>
                {skills.technical.map((item, index) => (
                  <div key={index} className="space-y-1">
                    <h4 className="font-medium text-gray-900">{item.category}</h4>
                    <p className="text-gray-600">{item.skills}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                <h3 className="font-semibold text-lg text-gray-900">Domain Expertise</h3>
                {skills.domain.map((item, index) => (
                  <div key={index} className="space-y-1">
                    <h4 className="font-medium text-gray-900">{item.category}</h4>
                    <p className="text-gray-600">{item.skills}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Work Experience Section */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Work Experience</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {workExperience.map((exp, index) => (
                <div key={index} className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">{exp.organization}</h3>
                    <p className="text-gray-600">{exp.location}</p>
                    <p className="text-indigo-600 font-medium">{exp.position}</p>
                    <p className="text-sm text-gray-500">{exp.period}</p>
                  </div>
                  <ul className="list-disc pl-5 space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-600">{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Supervision Section */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Experience as Primary Supervisor</h2>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {supervision.map((item, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">{item.count}</div>
                  <div className="text-gray-700">{item.role}</div>
                  {item.details && (
                    <div className="text-sm text-gray-500 mt-1">{item.details}</div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  )
}