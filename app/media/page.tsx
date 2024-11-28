// app/media/page.tsx
import { PageLayout } from '@/components/page-layout'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { ExternalLink, Video } from 'lucide-react'

const mediaAppearances = [
  {
    date: "May 2022",
    title: "Panelist for the UAlberta Chancellor's Forum",
    description: "The Chancellor's Forum is an initiative of the University of Alberta Senate that invites the public to campus to engage with a timely topic related to the University of Alberta.",
    link: "https://sites.google.com/view/j-ross-mitchell/media?authuser=0#h.2hjfjv7px1vk"
  },
  {
    title: "Mr. Robot | Edify",
    description: "Dr. Joseph Ross Mitchell believes Alberta-based AI may accelerate the health-care process",
    link: "https://edifyedmonton.com/urban/innovation-technology/mr-robot/"
  },
  {
    title: "New research chair uses artificial intelligence to accelerate precision health care in Alberta",
    link: "https://www.ualberta.ca/en/medicine/news/2022/02/new-research-chair-uses-artificial-intelligence-to-accelerate-precision-health-care-in-alberta.html"
  },
  {
    title: "Using AI to Transform Cancer Care",
    description: "Moffitt trained a deep learning program to extract information from medical records",
    link: "https://www.moffitt.org/endeavor/archive/using-ai-to-transform-cancer-care/"
  }
]

const videoPresentations = [
  {
    title: "AI in Healthcare Presentation",
    link: "https://youtu.be/2Q8glNkMY3M"
  },
  {
    title: "AI Applications in Medicine",
    link: "https://youtu.be/WK5TY2QoObA"
  },
  {
    title: "Healthcare Innovation Talk",
    link: "https://youtu.be/lKmoO6UARWs"
  },
  {
    title: "Medical AI Research Overview",
    link: "https://youtu.be/br_7GStows0"
  },
  {
    title: "Additional Presentation Recording",
    link: "https://drive.google.com/file/d/1Ej9mZMnAu312gKerQ5eqUWQte8CYwBXo/view"
  }
]

export default function Media() {
  return (
    <PageLayout title="Media" description="Media appearances, interviews, and presentations">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-6">Media Appearances and Mentions</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {mediaAppearances.map((item, index) => (
              <Card key={index} className="transition-all hover:shadow-md">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="font-medium text-lg">
                        <Link 
                          href={item.link}
                          className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2 group"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.title}
                          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </h3>
                      {item.date && (
                        <span className="text-sm text-gray-500 whitespace-nowrap">
                          {item.date}
                        </span>
                      )}
                    </div>
                    {item.description && (
                      <p className="text-gray-600">{item.description}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Video Presentations</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {videoPresentations.map((video, index) => (
              <Card key={index} className="transition-all hover:shadow-md">
                <CardContent className="p-6">
                  <Link 
                    href={video.link}
                    className="flex items-center gap-3 text-blue-600 hover:text-blue-800 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Video className="w-5 h-5" />
                    <span className="group-hover:underline">{video.title}</span>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  )
}