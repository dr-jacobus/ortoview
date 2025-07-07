import Images from 'paraview-glance/src/samples/images';

const version =
  window.GLANCE_VERSION && window.GLANCE_VERSION !== 'master'
    ? window.GLANCE_VERSION
    : 'master';

// prettier-ignore
export default [
  {
    label: 'COVID-19',
    image: Images.Covid19,
    size: '8.4 MB',
    description: 'Tomografia computadorizada de pulmão de um paciente com COVID-19 apresentando opacidades em vidro fosco (GGO)',
    acknowledgement: 'Joseph Paul Cohen and Paul Morrison and Lan Dao, "COVID-19 image data collection", arXiv:2003.11597, 2020',
    datasets: [
      {
        name: 'covid19.glance',
        url: `https://raw.githubusercontent.com/Kitware/paraview-glance/${version}/data/covid19.glance`,
      },
    ],
  },
  {
    label: '202-t + Edges',
    image: Images.CAD,
    size: '112 KB',
    description: 'Alça em T, base flangeada, barra sólida',
    acknowledgement: 'https://www.traceparts.com/',
    datasets: [
      {
        name: '202-t.glance',
        url: `https://raw.githubusercontent.com/Kitware/paraview-glance/${version}/data/202-t.glance`,
      },
    ],
  },
  {
    label: 'Lysozyme.pdb',
    image: Images.Lysozyme,
    size: '135 KB',
    description: 'uma enzima que catalisa a destruição das paredes celulares de certas bactérias, ocorrendo principalmente em lágrimas e clara de ovo.',
    datasets: [
      {
        name: 'Lysozyme.glance',
        url: `https://raw.githubusercontent.com/Kitware/paraview-glance/${version}/data/lysozyme.glance`,
      },
    ],
  },
  {
    label: 'CT dente.nrrd',
    image: Images.Tooth,
    size: '1.6 MB',
    datasets: [
      {
        name: 'Tooth.glance',
        url: `https://raw.githubusercontent.com/Kitware/paraview-glance/${version}/data/Tooth.glance`,
      },
    ],
  },
  {
    label: 'Motor',
    image: Images.Engine,
    size: '3.1 MB',
    datasets: [
      {
        name: 'Engine.glance',
        url: `https://raw.githubusercontent.com/Kitware/paraview-glance/${version}/data/Engine.glance`,
      },
    ],
    acknowledgement: 'General Electric',
    description: 'Tomografia computadorizada de dois cilindros de um bloco de motor.',
  },
  {
    label: 'lidar.vtp',
    image: Images.Lidar,
    size: '5.3 MB',
    description: 'Aerial LIDAR data',
    datasets: [
      {
        name: 'lidar.glance',
        url: `https://raw.githubusercontent.com/Kitware/paraview-glance/${version}/data/lidar.glance`,
      },
    ],
  },
  {
    label: 'SinglePin.vtp',
    image: Images.SinglePin,
    size: '8.2 MB',
    description: 'Palheta de mistura dentro do pino do reator para resfriamento',
    acknowledgement: "Dados de simulação do Hydra-TH",
    datasets: [
      {
        name: 'SinglePin.glance',
        url: `https://raw.githubusercontent.com/Kitware/paraview-glance/${version}/data/SinglePin.glance`,
      },
    ],
  },
  {
    label: 'Formula 1',
    image: Images.F1,
    size: '6.7 MB',
    datasets: [
      {
        name: 'F1.glance',
        url: `https://raw.githubusercontent.com/Kitware/paraview-glance/${version}/data/F1.glance`,
      },
    ],
  },
  // {
  //   label: 'Head.mha',
  //   image: Images.Head,
  //   size: '6.2 MB',
  //   datasets: [
  //     {
  //       name: 'head.glance',
  //       url: `https://raw.githubusercontent.com/Kitware/paraview-glance/${version}/data/head.glance`,
  //     },
  //   ],
  // },
  {
    label: 'Aneurisma.vti',
    image: Images.Aneurism,
    size: '348 KB',
    datasets: [
      {
        name: 'Aneurism.glance',
        url: `https://raw.githubusercontent.com/Kitware/paraview-glance/${version}/data/Aneurism.glance`,
      },
    ],
    acknowledgement: 'Philips Research, Hamburg, Germany',
    description: 'Radiografia rotacional com braço em C das artérias da metade direita de uma cabeça humana. Um agente de contraste foi injetado no sangue e um aneurisma foi detectado.',
  },
  // {
  //   label: 'Backpack.vti',
  //   image: Images.Backpack,
  //   size: '8.3 MB',
  //   description: "CT scan of a backpack filled with items.",
  //   acknowledgement: "Kevin Kreeger, Viatronix Inc., USA",
  //   datasets: [
  //     {
  //       name: 'Backpack.vti',
  //       url: 'https://kitware.github.io/vtk-js-datasets/data/vti/backpack.vti',
  //     },
  //   ],
  // },
  // {
  //   label: 'Head MRI CISS',
  //   image: Images.Head,
  //   size: '5.1 MB',
  //   datasets: [
  //     {
  //       name: 'Head.vti',
  //       url: 'https://kitware.github.io/vtk-js-datasets/data/vti/mri_ventricles.vti',
  //     },
  //   ],
  //   acknowledgement: 'Dirk Bartz, VCM, University of Tübingen, Germany',
  //   description: '1.5T MRT 3D CISS dataset of a human head that highlights the CSF (Cerebro-Spinal-Fluid) filled cavities of the head.',
  // },
  // {
  //   label: 'Foot',
  //   image: Images.Foot,
  //   url: 'https://kitware.github.io/vtk-js-datasets/data/vti/foot.vti',
  //   size: '4.3 MB',
  //   datasets: [
  //     {
  //       name: 'Foot.vti',
  //       url: 'https://kitware.github.io/vtk-js-datasets/data/vti/foot.vti',
  //     },
  //   ],
  //   acknowledgement: 'Philips Research, Hamburg, Germany',
  //   description: 'Rotational C-arm x-ray scan of a human foot. Tissue and bone are present in the dataset.',
  // },
];
