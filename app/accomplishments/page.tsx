// app/accomplishments/page.tsx
import { PageLayout } from '@/components/page-layout'
import { Card, CardHeader, CardContent } from '@/components/ui/card'

export default function Accomplishments() {
  const accomplishments = [
    {
      title: "Deep Learning for Brain Tumor MRI Analysis",
      location: "Mayo Clinic AZ & Moffitt Cancer Center Tampa FL",
      description: "Formed and lead an international collaboration to develop a deep learning system for analysis of clinical-grade MRI exams of brain cancer patients. Created a pipeline with multiple 3D deep neural networks for various tasks. System runs on AWS in 1 - 2 mins. per MR exam."
    },
    {
      title: "A Q&A System to Extract Data from Free-Text Pathology Reports",
      location: "Moffitt Cancer Center Tampa FL",
      description: "Designed and implemented a DNN pipeline (caBERTnet) to identify and extract tumor site and histology from pathology reports. The system predicts fine-grained ICD-O-3 codes across 214 tumor sites and 193 histologies with top-5 accuracies of 94% and 95%, respectively."
    },
    {
      title: "Founded the Division of Medical Imaging Informatics",
      location: "Mayo Clinic AZ",
      description: "Recruited, supervised, and mentored a dynamic team including 2 PhD scientists, 3 post-docs, 4 PhD students, and multiple MSc & BSc students. Fostered and maintained key relationships with various departments and universities."
    },
    {
      title: "Mobile Image Viewer Pilot and Implementation",
      location: "Mayo Clinic AZ",
      description: "Spearheaded efforts to configure, install, and support ResolutionMD Mobile backend and frontend hardware and software for Mayo Clinic AZ. Improved precision health via rapid, simple, and secure access to medical images and reports, anywhere."
    },
    {
      title: "Machine Learning in Healthcare Initiative",
      location: "Mayo Clinic AZ",
      description: "Hand-selected by Dr. Wyatt Decker, then the VP of Mayo Clinic, to become the first member of a machine learning and data science in healthcare advisory panel. Center projects focused on revenues, improved quality, and optimized care delivery."
    }
  ]

  return (
    <PageLayout title="Accomplishments">
      <div className="grid gap-6">
        {accomplishments.map((item, index) => (
          <Card key={index} className="transition-all hover:shadow-md">
            <CardHeader>
              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="text-sm text-muted-foreground italic">{item.location}</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageLayout>
  )
}