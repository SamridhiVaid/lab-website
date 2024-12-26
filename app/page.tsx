import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from '@/components/footer'

export default function HomePage() {
  const researchCategories = [
    {
      title: "Clinical AI Applications",
      description: "Developing AI solutions for specific medical conditions including stroke, IBD, cancer, and rheumatology, with focus on medical imaging and EMR data analysis.",
      projects: ["Hematoma growth prediction", "Gut segmentation", "CBCT segmentation"]
    },
    {
      title: "Natural Language Processing",
      description: "Advancing healthcare through NLP applications, including medical text analysis, AI scribing, and automated assessment tools.",
      projects: ["Frailty estimation", "Medical text analysis", "AI Scribe implementation"]
    },
    {
      title: "Machine Learning Infrastructure",
      description: "Building robust ML systems with emphasis on data labeling efficiency and predictive modeling using EMR and imaging data.",
      projects: ["Data labeling optimization", "EMR prediction models", "Multi-modal analysis"]
    }
  ]

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 space-y-16 py-16">
        <section className="space-y-8">
          <div className="relative aspect-[21/12] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/lab.jpg"
              alt="PHAIR Lab"
              layout="fill"
              objectFit="fit"
              priority
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>

          <Card className="bg-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">About Us</h2>
              <div className="text-gray-600 space-y-4">
                <p>
                PHAIR (Precision Health AI Research) is a research lab at the University of Alberta dedicated to transforming healthcare through artificial intelligence. Bringing together an interdisciplinary team with expertise in clinical medicine, computer science, and data analytics, the lab focuses on innovative solutions to advance precision health.
                </p>
                <p>
                  Led by Dr. J. Ross Mitchell, a trailblazer with over 30 years of expertise in biomedical imaging, AI, and healthcare innovation, the lab embodies his vision of leveraging technology to transform patient care.
                </p>
                <p>
                  Dr. Mitchell, a Canada CIFAR AI Chair and the Alberta Health Services Chair in AI in Health, brings a distinguished career that includes leadership roles at the H. Lee Moffitt Cancer Center, Mayo Clinic, and University of Calgary, making the PHAIR Lab a leader in AI-driven healthcare research.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Research Areas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {researchCategories.map((category, index) => (
              <Card key={index} className="bg-white transition-colors duration-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-700">Key Projects:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {category.projects.map((project, idx) => (
                        <li key={idx} className="ml-2">{project}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

