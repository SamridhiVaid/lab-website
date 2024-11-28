import { type FC } from 'react'

const Presentations: FC = () => {
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

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Select Invited Presentations</h2>
      <p className="text-lg font-semibold">165 Total Invited Presentations</p>
      
      <ul className="list-disc pl-5 space-y-4">
        {presentations.map((presentation, index) => (
          <li key={index}>
            {`Mitchell JR, "${presentation.title}", ${presentation.venue}, ${presentation.location}, ${presentation.date}`}
            {presentation.note && ` (${presentation.note})`}.
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Presentations