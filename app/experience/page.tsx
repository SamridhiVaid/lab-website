import { type FC } from 'react'

const Experience: FC = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      
      <section>
        <h3 className="text-xl font-semibold mb-2">Education & Credentials</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Scientific Leadership Course, 2008 – University of Calgary, Calgary, Alberta</li>
          <li>Ph.D. in Medical Biophysics, 1996 – Western University, London, Ontario (Collip Medal: top PhD grad)</li>
          <li>Master of Science in Computer Science, 1989 – University of Regina & The Allan Blair Cancer Center, Regina, Saskatchewan</li>
          <li>Bachelor of Science Honors in Computer Science, 1986 – University of Regina, Regina, Saskatchewan (a Co-op Work Study program. Graduated with High Honors: GPA &gt; 85%)</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Skills</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Communication:</strong> Accomplished & engaging public speaker. Able to effectively convey complex technical concepts to non-expert audiences.</li>
          <li><strong>Programming:</strong> Python, C</li>
          <li><strong>Medical Imaging:</strong> Teleradiology, MRI, CT, PET, US, Mammography, DICOM, Radiomics, Biomarkers</li>
          <li><strong>Applications:</strong> Cancer (brain, ENT, breast, liver, pancreas) MS, Stroke, Alzheimer&apos;s, Neurosurgery</li>
          <li><strong>Image Processing:</strong> Computer Vision, ITK, VTK, OpenCV, scikit-image, Wavelets, Fourier, Stockwell, Statistics, Analytics, Algorithms, Graphics, GPGPU</li>
          <li><strong>ML:</strong> PyTorch, Keras, TensorFlow, huggingface.co, Spacy, scikit-learn, XGB, Random Forests, PCA</li>
          <li><strong>Technology:</strong> AWS, Docker, linux, bash, MacOS, iOS, Xcode, Windows, make, git, latex</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Work Experience</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-medium">H. LEE MOFFITT CANCER CENTER AND RESEARCH INSTITUTE, Tampa, Florida</h4>
            <p className="italic">AI Officer and Senior Member of Research Staff, January 2019 to May 2021</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Lead Center efforts to develop digital tools that utilize artificial intelligence and other advanced technologies to improve the efficiency and quality of cancer care.</li>
              <li>Developed multiple models to predict patient outcomes using EHR data.</li>
              <li>Developed a novel recurrent neural network architecture to predict sepsis onset in ICU patients.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium">MAYO CLINIC COLLEGE OF MEDICINE, Phoenix, Arizona</h4>
            <p className="italic">Professor of Radiology, September 2011 to January 2019</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Saved Mayo Clinic $10M on Mobile Image Viewer by developing a research partnership with PureWeb Inc.</li>
              <li>Guided project to develop informatics tools for Division of Breast Imaging.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Experience as Primary Supervisor</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>23 Scientists and Technical Staff</li>
          <li>12 Post-doctoral Fellows, Medical Fellows and Residents</li>
          <li>31 Graduate Students (15 PhD and 16 MSc Students)</li>
        </ul>
      </section>
    </div>
  )
}

export default Experience