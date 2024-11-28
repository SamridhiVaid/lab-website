import { type FC } from 'react'
import Link from 'next/link'

const Media: FC = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Media</h2>
      
      <section>
        <h3 className="text-xl font-semibold mb-2">Media Appearances and Mentions</h3>
        <ul className="list-disc pl-5 space-y-4">
          <li>
            <p className="font-medium">
              <Link 
                href="https://sites.google.com/view/j-ross-mitchell/media?authuser=0#h.2hjfjv7px1vk"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                May 2022: Panelist for the UAlberta Chancellor&apos;s Forum
              </Link>
            </p>
            <p>The Chancellor&apos;s Forum is an initiative of the University of Alberta Senate that invites the public to campus to engage with a timely topic related to the University of Alberta.</p>
          </li>
          <li>
            <p className="font-medium">
              <Link 
                href="https://edifyedmonton.com/urban/innovation-technology/mr-robot/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mr. Robot | Edify
              </Link>
            </p>
            <p>Dr. Joseph Ross Mitchell believes Alberta-based AI may accelerate the health-care process</p>
          </li>
          <li>
            <p className="font-medium">
              <Link 
                href="https://www.ualberta.ca/en/medicine/news/2022/02/new-research-chair-uses-artificial-intelligence-to-accelerate-precision-health-care-in-alberta.html"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                New research chair uses artificial intelligence to accelerate precision health care in Alberta
              </Link>
            </p>
          </li>
          <li>
            <p className="font-medium">
              <Link 
                href="https://www.moffitt.org/endeavor/archive/using-ai-to-transform-cancer-care/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Using AI to Transform Cancer Care
              </Link>
            </p>
            <p>Moffitt trained a deep learning program to extract information from medical records</p>
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Video Presentations</h3>
        <ul className="list-disc pl-5 space-y-4">
          <li>
            <Link 
              href="https://youtu.be/2Q8glNkMY3M"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              AI in Healthcare Presentation
            </Link>
          </li>
          <li>
            <Link 
              href="https://youtu.be/WK5TY2QoObA"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              AI Applications in Medicine
            </Link>
          </li>
          <li>
            <Link 
              href="https://youtu.be/lKmoO6UARWs"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Healthcare Innovation Talk
            </Link>
          </li>
          <li>
            <Link 
              href="https://youtu.be/br_7GStows0"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medical AI Research Overview
            </Link>
          </li>
          <li>
            <Link 
              href="https://drive.google.com/file/d/1Ej9mZMnAu312gKerQ5eqUWQte8CYwBXo/view"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Additional Presentation Recording
            </Link>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Media