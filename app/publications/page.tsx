// app/publications/page.tsx
import { PageLayout } from '@/components/page-layout'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { ExternalLink, BookOpen, Award, Users } from 'lucide-react'

const publications = [
  {
    citation: 'Tang A, Tam R, Cadrin-Chênevert A, Guest W, Chong J, Barfett J, Chepelev L, Cairns R, Mitchell JR, et. al. "Canadian Association of Radiologists White Paper on Artificial Intelligence", Canadian Association of Radiology Journal, 69(2), 120-135. 2018',
    note: 'Cited >450 Times',
    link: 'https://doi.org/10.1016/j.carj.2018.02.002'
  },
  {
    citation: 'Gareau PJ*, Rutt BK, Karlik SJ, Mitchell, JR. "Magnetization Transfer and Multicomponent T2 Relaxation Measurements with Histopathologic Correlation in an Experimental Model of MS," Journal of Magnetic Resonance Imaging, 11 (6), 586-595, 2000',
    note: 'Cited >250 Times, ISMRM Young Investigator Award 2000',
    link: 'https://doi.org/10.1002/1522-2586(200006)11:6<586::AID-JMRI5>3.0.CO;2-8'
  },
  {
    citation: 'Clarke SE, Hammond RR, Mitchell JR, Rutt BK, "Quantitative Assessment of Carotid Plaque Composition Using Multicontrast MRI and Registered Histology", Magnetic Resonance in Medicine, 50 (6), 1199-1208, 2003',
    note: 'Cited >225 Times; Early ML / radiomics paper',
    link: 'https://doi.org/10.1002/mrm.10644'
  },
  {
    citation: 'Drabycz S*, Roldan G, de Robles P, Adler D*, McIntyre JB, Magliocco AM, Cairncross JC, Mitchell JR. "An Analysis of Image Texture, Tumor Location and MGMT Promoter Methylation in Glioblastoma Using Magnetic Resonance Imaging", Neuroimage, 49, 1398-1405. 2010',
    note: 'Cited >220 Times; Early ML & radiogenomics paper',
    link: 'https://doi.org/10.1016/j.neuroimage.2009.09.049'
  },
  {
    citation: 'Metz LM, Zhang Y*, Yeung M, Patry DG, Bell RB, Stoian CA, Yong VW, Patten SB, Duquette D, Antel JP, Mitchell, JR. "Minocycline Reduces Gadolinium-Enhancing Magnetic Resonance Imaging Lesions in Multiple Sclerosis," Annals of Neurology, 55 (5), 2004',
    note: 'Cited >215 Times',
    link: 'https://doi.org/10.1002/ana.20111'
  },
  {
    citation: 'Hu LS, Ning S, Eschbacher JM, Gaw N, Ranjbar S*, Plascencia J, Dueck AC, Peng S, Smith KA, Nakaji P, Karis JP, … Mitchell JR. "Radiogenomics to Characterize Regional Genetic Heterogeneity in Glioblastoma," Neuro-Oncology, 19(1), 128-137. 2017',
    note: 'Cited >210 Times',
    link: 'https://doi.org/10.1093/neuonc/now135'
  },
  {
    citation: 'Picot PA, Rickey DW, Mitchell JR, Rankin RN, Fenster A, "Three-dimensional Colour Doppler Imaging," Ultrasound in Medicine and biology, 19 (2), 95-104. 1993',
    note: 'Cited >170 Times. Introduced 3D Color Doppler US',
    link: 'https://doi.org/10.1016/0301-5629(93)90003-I'
  },
  {
    citation: 'Coutts SA, Simon JE, Tomanek AI, Barber PA, Chan J, Hudon ME, Mitchell JR, Frayne R, Eliasziw M, Buchan AM, Demchuk AM, "Reliability of Assessing Percentage of Diffusion-Perfusion Mismatch", Stroke, 34 (7), 1681-1683. 2003',
    note: 'Cited >150 Times',
    link: 'https://doi.org/10.1161/01.STR.0000076985.36073.5D'
  },
  {
    citation: 'Zabad RL. Metz LM, Todoruk TR, Zhang Y*, Mitchell JR, Yeung M, Patry DG, Bell RB, Yong VW, "The Clinical Response to Minocycline in Multiple Sclerosis is Accompanied by Beneficial Immune Changes: A Pilot Study", MS Journal, 13 (4), 517-526. 2007',
    note: 'Cited >140 Times',
    link: 'https://doi.org/10.1177/1352458507078722'
  },
  {
    citation: 'Brown R*, Zlatescu M, Sijben A, Roldan G, Easaw J, Forsyth P, Parney I, Sevick R, Yan E, Demetrick D, Schiff D, Cairncross G, Mitchell JR, "The Use of Magnetic Resonance Imaging to Noninvasively Detect Genetic Signatures in Oligodendroglioma", Clinical Cancer Research, 14 (8), 2357-2362. 2008',
    note: 'Cited >140 Times',
    link: 'https://doi.org/10.1158/1078-0432.CCR-07-2032'
  },
  {
    citation: 'Pati S, Baid U, Edwards B, et. al. "Federated Learning Enables Big Data for Rare Cancer Boundary Detection", Nature Communications, 13(1), Article 7346. 2022',
    note: 'Cited > 100 times',
    link: 'https://doi.org/10.1038/s41467-022-35090-y'
  },
  {
    citation: 'Mitchell JR, Szepietowski P, Howard R, Reisman P, Jones JD, Lewis P, Fridley BL, Rollison DE, "A Question-and-Answer System to Extract Data From Free-Text Oncological Pathology Reports (CancerBERT Network): Development Study", Journal of Medical Internet Research, 24(3):e27210, 2022',
    link: 'https://doi.org/10.2196/27210'
  },
  {
    citation: 'Jim HSL, Hoogland AI, Brownstein NC, et. al. "Innovations in Research and Clinical Care Using Patient-Generated Health Data", CA: A Cancer Journal for Clinicians, 70(3), 182-199, 2020',
    note: 'Cited > 100 times',
    link: 'https://doi.org/10.3322/caac.21608'
  }
]

export default function Publications() {
  return (
    <PageLayout title="Publications">
      <div className="space-y-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-blue-600" />
                <div>
                  <div className="text-3xl font-bold text-blue-600">230+</div>
                  <div className="text-gray-600">Total Publications</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-pink-50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-purple-600" />
                <div>
                  <div className="text-3xl font-bold text-purple-600">21</div>
                  <div className="text-gray-600">Patents</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-50 to-teal-50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-emerald-600" />
                <div>
                  <div className="text-3xl font-bold text-emerald-600">42</div>
                  <div className="text-gray-600">H-index</div>
                  <div className="text-xs text-gray-500">98th percentile – Medical Informatics</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Publications List */}
        <div className="space-y-4">
          {publications.map((pub, index) => (
            <Card 
              key={index} 
              className="transition-all hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="space-y-3">
                  <Link 
                    href={pub.link}
                    className="group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex gap-2 items-start">
                      <div className="flex-1">
                        <p className="text-gray-900 group-hover:text-blue-600 transition-colors">
                          {pub.citation}
                        </p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all" />
                    </div>
                  </Link>
                  {pub.note && (
                    <div className="flex gap-2 items-center text-sm">
                      <Award className="w-4 h-4 text-blue-600" />
                      <span className="text-blue-600 font-medium">
                        {pub.note}
                      </span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-center gap-2 text-gray-600 italic">
          <Users className="w-4 h-4" />
          <p>* indicates the author was my trainee</p>
        </div>
      </div>
    </PageLayout>
  )
}