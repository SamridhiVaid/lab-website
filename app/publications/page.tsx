import { type FC } from 'react'
import Link from 'next/link'

const Publications: FC = () => {
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

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Select Peer Reviewed Publications</h2>
      <p className="text-lg font-semibold">230 Total Publications including 21 patents</p>
      <p className="text-lg font-semibold">H-index: 42 (~98th percentile – Medical Informatics)</p>
      
      <ul className="list-disc pl-5 space-y-4">
        {publications.map((pub, index) => (
          <li key={index}>
            <Link 
              href={pub.link}
              className="hover:text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {pub.citation}
            </Link>
            {pub.note && ` (${pub.note})`}
          </li>
        ))}
      </ul>
      <p className="italic">* indicates the author was my trainee</p>
    </div>
  )
}

export default Publications