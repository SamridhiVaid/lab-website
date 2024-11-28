// app/presentations/page.tsx
import { PageLayout } from '@/components/page-layout'
import { Card, CardContent } from '@/components/ui/card'
import { CalendarDays, MapPin, Building2, Award } from 'lucide-react'

const presentations = [
  {
    title: "The Disruption of Big Data in Healthcare",
    venue: "University of Toronto Department of Radiation Oncology Target Insight Conference",
    location: "Toronto Canada",
    date: "June 2020",
    note: "invited Keynote"
  },
  {
    title: "Artificial Intelligence in Cancer Care",
    venue: "American Association of Medical Dosimetrists 43rd Annual Meeting",
    location: "Baltimore MD",
    date: "June 2020",
    note: "invited Keynote"
  },
  {
    title: "Artificial Intelligence and the Impact on the Future of Healthcare",
    venue: "RaySearch Americas Annual User Group Meeting",
    location: "Miami FL",
    date: "October 2019",
    note: "invited Keynote"
  },
  {
    title: "DeepRadiomics: Combining Deep Learning and Radiomics to Improve Individualized Medicine",
    venue: "Moffitt Cancer Center Candidate Public Lecture",
    location: "Tampa FL",
    date: "June 2018"
  },
  {
    title: "Artificial Intelligence in Healthcare",
    venue: "American Academy of Laboratory and Animal Sciences Annual Conference",
    location: "Austin TX",
    date: "Oct. 2017",
    note: "invited Keynote"
  },
  {
    title: "Artificial Intelligence, Machine Learning and Deep Learning in Healthcare",
    venue: "Canadian Organization of Medical Physics Winter School",
    location: "Quebec Canada",
    date: "Feb. 2017",
    note: "invited Keynote"
  },
  {
    title: "Artificial Intelligence in Healthcare",
    venue: "University of Toronto",
    location: "Toronto Canada",
    date: "Dec. 2016"
  },
  {
    title: "Cancer Imagenomics",
    venue: "Canadian Organization of Medical Physics Annual Conference",
    location: "St. Johns Canada",
    date: "July 2016"
  },
  {
    title: "Texture Based Biomarkers (Using Examples from Alzheimer&apos;s Disease)",
    venue: "Workshop given at the Medical Image Computing and Computer Assisted Intervention Annual Conference",
    location: "Munich Germany",
    date: "Sep. 2015"
  }

]

export default function Presentations() {
  // Group presentations by year
  const presentationsByYear = presentations.reduce((acc, presentation) => {
    const year = presentation.date.split(' ')[1]
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(presentation)
    return acc
  }, {} as Record<string, typeof presentations>)

  // Sort years in descending order
  const sortedYears = Object.keys(presentationsByYear).sort((a, b) => Number(b) - Number(a))

  return (
    <PageLayout 
      title="Presentations" 
      description="165 Total Invited Presentations at conferences and institutions worldwide"
    >
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600">165+</div>
              <div className="text-gray-600">Total Presentations</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-purple-600">20+</div>
              <div className="text-gray-600">Countries</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 md:col-span-2 lg:col-span-1">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-emerald-600">25+</div>
              <div className="text-gray-600">Keynote Talks</div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {sortedYears.map(year => (
            <div key={year}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{year}</h3>
              <div className="grid gap-4">
                {presentationsByYear[year].map((presentation, index) => (
                  <Card key={index} className="transition-all hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <h4 className="text-lg font-medium text-gray-900">
                            {presentation.title}
                          </h4>
                          {presentation.note && (
                            <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                              <Award className="w-3 h-3 mr-1" />
                              {presentation.note}
                            </span>
                          )}
                        </div>
                        <div className="grid gap-2 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-gray-400" />
                            {presentation.venue}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            {presentation.location}
                          </div>
                          <div className="flex items-center gap-2">
                            <CalendarDays className="w-4 h-4 text-gray-400" />
                            {presentation.date}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}