export default function Accomplishments() {
    return (
      <div className="space-y-8">
        <h2 className="text-2xl font-bold mb-4">Accomplishments</h2>
        
        <section>
          <h3 className="text-xl font-semibold mb-2">Deep Learning for Brain Tumor MRI Analysis</h3>
          <p className="italic">Mayo Clinic AZ & Moffitt Cancer Center Tampa FL</p>
          <p className="mt-2">Formed and lead an international collaboration to develop a deep learning system for analysis of clinical-grade MRI exams of brain cancer patients. Created a pipeline with multiple 3D deep neural networks for various tasks. System runs on AWS in 1 - 2 mins. per MR exam.</p>
        </section>
  
        <section>
          <h3 className="text-xl font-semibold mb-2">A Q&A System to Extract Data from Free-Text Pathology Reports</h3>
          <p className="italic">Moffitt Cancer Center Tampa FL</p>
          <p className="mt-2">Designed and implemented a DNN pipeline (caBERTnet) to identify and extract tumor site and histology from pathology reports. The system predicts fine-grained ICD-O-3 codes across 214 tumor sites and 193 histologies with top-5 accuracies of 94% and 95%, respectively.</p>
        </section>
  
        <section>
          <h3 className="text-xl font-semibold mb-2">Founded the Division of Medical Imaging Informatics</h3>
          <p className="italic">Mayo Clinic AZ</p>
          <p className="mt-2">Recruited, supervised, and mentored a dynamic team including 2 PhD scientists, 3 post-docs, 4 PhD students, and multiple MSc & BSc students. Fostered and maintained key relationships with various departments and universities.</p>
        </section>
  
        <section>
          <h3 className="text-xl font-semibold mb-2">Mobile Image Viewer Pilot and Implementation</h3>
          <p className="italic">Mayo Clinic AZ</p>
          <p className="mt-2">Spearheaded efforts to configure, install, and support ResolutionMD Mobile backend and frontend hardware and software for Mayo Clinic AZ. Improved precision health via rapid, simple, and secure access to medical images and reports, anywhere.</p>
        </section>
  
        <section>
          <h3 className="text-xl font-semibold mb-2">Machine Learning in Healthcare Initiative</h3>
          <p className="italic">Mayo Clinic AZ</p>
          <p className="mt-2">Hand-selected by Dr. Wyatt Decker, then the VP of Mayo Clinic, to become the first member of a machine learning and data science in healthcare advisory panel. Center projects focused on revenues, improved quality, and optimized care delivery.</p>
        </section>
      </div>
    )
  }
  