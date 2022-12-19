const controls = [
  {
    id: 1,
    title: 'Inventory and Control of Hardware Assets',
    maturityAtual: 2,
    audit: 2,
    maturityExpected: 5,
    recomendations: '',
    solutions: '',
    subcontrols: [
      {
        id: 2,
        title: 'Utilize an Active Discovery Tool',
        maturityAtual: 2,
        maturityExpected: 5,
        recomendations:
          'Recomenda-se que elaborem um procedimento de análise periódica aos equipamentos... ',
        solutions: 'Microsoft Device Management Intune',
      },
      {
        id: 3,
        title: 'Use a Passive Asset Discovery Tool',
        maturityAtual: 2,
        maturityExpected: 5,
        recomendations: 'Recomenda-se a elaboração de um procedimento...',
        solutions: 'Microsoft Device Management Intune',
      },
    ],
  },
  {
    id: 2,
    title: 'Inventory and Control of Software Assets',
    maturityAtual: 2,
    maturityExpected: 5,
    subcontrols: [
      {
        id: 4,
        title: 'Maintain Inventory of Authorized Software',
        maturityAtual: 2,
        maturityExpected: 5,
        recomendations:
          'Recomenda-se que elaborem um procedimento para análise regular e periódica do software existente dentro da .',
        solutions: 'Microsoft Device Management Intune',
      },
      {
        id: 5,
        title: 'Ensure Software is Supported by Vendor',
        maturityAtual: 2,
        maturityExpected: 5,
        recomendations: 'Recomenda-se que após revisão de todo o software',
        solutions: 'Inventory Management ERP',
      },
    ],
  },
];

export default controls;
