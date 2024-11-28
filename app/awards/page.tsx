// app/awards/page.tsx
import { PageLayout } from '@/components/page-layout'
import { Card, CardContent } from '@/components/ui/card'

export default function Awards() {
  const awards = [
    {
      year: "2023",
      title: "Top 25 Health Sciences Article in Nature Communications",
      description: "Our paper on Federated Learning was frequently downloaded"
    },
    {
      year: "2021",
      title: "Most Viewed Publication",
      description: "(10/2020 - 04/2021), Journal of Medical Imaging"
    },
    {
      year: "2020",
      title: "Top-20 Achievement",
      description: "H Lee Moffitt Cancer Center (#9 AI makes its mark at Moffitt)"
    },
    {
      year: "2015",
      title: "Outstanding Researcher",
      description: "US Citizenship & Immigration Service (Accelerated Green Card)"
    },
    {
      year: "2011",
      awards: [
        {
          title: "Enabling Technology Award",
          description: "Frost & Sullivan (for PureWeb remote visualization tech.)"
        },
        {
          title: "Top 5 Innovator",
          description: "PriceWaterhouseCoopers (for ResolutionMD mobile medical image viewer)"
        },
        {
          title: "Alumni Crowning Achievement Award",
          description: "University of Regina"
        }
      ]
    },
    {
      year: "2010",
      title: "Best Practices Award",
      description: "Frost & Sullivan (for ResolutionMD mobile medical image viewer)"
    },
    {
      year: "2008",
      title: "Industrial Chair in Medical Imaging Informatics",
      description: "Alberta Informatics Circle of Research Excellence"
    },
    {
      year: "2006",
      awards: [
        {
          title: "Senior Scholarship Award",
          description: "Alberta Heritage Foundation for Medical Research (5 years of salary support)"
        },
        {
          title: "Research Award",
          description: "Berlex Canada (Imaging biomarker for MS)"
        }
      ]
    },
    {
      year: "2001",
      title: "Scholarship Award",
      description: "Alberta Heritage Foundation for Medical Research (5 years of salary support)"
    },
    {
      year: "2000",
      title: "Dr. Donald Paty Career Development Award",
      description: "MS Society of Canada (9 years of salary support)"
    },
    {
      year: "1998",
      awards: [
        {
          title: "Best Paper Award",
          description: "International Conference on Medical Physics, New Delhi India"
        },
        {
          title: "Best Paper Award",
          description: "Canadian Association of Radiologists, Halifax Nova Scotia"
        }
      ]
    },
    {
      year: "1996",
      title: "Collip Medal",
      description: "Western University, Ontario Canada, (Top PhD Grad in Medicine & Bioscience)"
    },
    {
      year: "1991-1993",
      awards: [
        {
          title: "Scientific Exhibit Awards of Merit",
          description: "Radiological Society of North America (2 total)"
        },
        {
          title: "Studentship",
          description: "Medical Research Council of Canada (for PhD studies)"
        }
      ]
    },
    {
      year: "1987-1990",
      title: "Post Graduate Scholarships",
      description: "Natural Sciences and Engineering Research Council of Canada (3 total)"
    }
  ]

  return (
    <PageLayout 
      title="Awards" 
      description="Select awards and recognitions throughout my academic career"
    >
      <div className="space-y-6">
        {awards.map((award, index) => (
          <Card key={index} className="transition-all hover:shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="min-w-[80px] text-lg font-semibold text-blue-600">
                  {award.year}
                </div>
                <div className="space-y-4 flex-1">
                  {'awards' in award ? (
                    // Multiple awards in same year
                    award.awards?.map((subAward, subIndex) => (
                      <div key={subIndex} className="space-y-1">
                        <h3 className="font-semibold text-gray-900">{subAward.title}</h3>
                        <p className="text-gray-600">{subAward.description}</p>
                      </div>
                    ))
                  ) : (
                    // Single award
                    <div className="space-y-1">
                      <h3 className="font-semibold text-gray-900">{award.title}</h3>
                      <p className="text-gray-600">{award.description}</p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageLayout>
  )
}