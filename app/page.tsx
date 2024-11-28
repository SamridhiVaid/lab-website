// app/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { Grid } from '@/components/ui/grid'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function HomePage() {
  return (
    <div className="space-y-12">
    <section className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/3">
          <div className="relative aspect-[3/4] md:h-[600px] w-full">
            <Image 
              src="/ross-mitchell.jpg"
              alt="Dr. J. Ross Mitchell"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center"
              priority
              />
            </div>
          </div>
          <div className="p-6 md:p-8 md:w-2/3">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Dr. J. Ross Mitchell
            </h1>
            <div className="space-y-4 text-gray-600">
              <div>
                <h2 className="font-semibold text-gray-900">Academic Positions</h2>
                <p>Professor, Department of Medicine</p>
                <p>Adjunct Professor, Department of Computer Science</p>
                <p>University of Alberta</p>
              </div>
              <div>
                <h2 className="font-semibold text-gray-900">Research Chairs</h2>
                <p>Alberta Health Services (AHS) Chair in AI in Health</p>
                <p>Canada CIFAR AI Chair</p>
                <p>Fellow, Alberta Machine Intelligence Institute (Amii)</p>
              </div>
              <div>
                <h2 className="font-semibold text-gray-900">Contact</h2>
                <p>Office: Clinical Sciences Building, 5th floor</p>
                <p>Email: jmitche at ualberta.ca</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">About Me</h2>
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <p className="text-gray-600 leading-relaxed">
          Dr. Mitchell is a Canada CIFAR AI Chair, the Alberta Health Services (AHS) Chair in AI in Health, a professor in the Department of Medicine, and an adjunct professor in the Department of Computer Science at the University of Alberta. He is also a fellow with the Alberta Machine Intelligence Institute and the senior program director of artificial intelligence adoption with AHS.
          Dr. Mitchell was the inaugural artificial intelligence officer at the H. Lee Moffitt Cancer Center and Research Institute in Tampa, Florida from 2019 to 2021. There he led efforts to develop AI tools to improve the efficiency and quality of cancer care, including models to predict patient outcomes from electronic health record data, and natural language processing to infer diagnostic codes from free-text pathology reports. He was a professor and the inaugural director of the Division of Medical Imaging Informatics in the Department of Radiology, Mayo Clinic in Arizona, from 2011 to 2019. He was a professor of Biomedical Engineering, Radiology, and Clinical Neurosciences at the University of Calgary from 2000 to 2011. He received his PhD at the University of Western Ontario and has been working in the fields of biomedical imaging, artificial intelligence, and machine learning in healthcare for 30 years.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">My Group</h2>
        <Grid columns={{ default: 1, sm: 2, md: 3 }}>
          <Card>
            <CardHeader>
              <CardTitle>AI Researchers</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Chun Hing Cheng</li>
                <li>Samridhi Vaid</li>
                <li>Sacha Davis</li>
              </ul>
            </CardContent>
            </Card>

            <Card>
            <CardHeader>
              <CardTitle>PhD Students</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Anureet Tiwana</li>
                <li>Hooda Ebrahimi</li>
                <li>Michael Parkes</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Masters Students</CardTitle>
            </CardHeader>
            <CardContent>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Kiana Aghaskasiri</li>
                <li>Tian Xiang Du</li>
                <li>Yasmin Madani</li>
                <li>Mobina Mosannafat</li>
                <li>Mohammad Tavakoli</li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
      </section>
    </div>
  )
}