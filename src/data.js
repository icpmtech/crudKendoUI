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
          'Recomenda-se que elaborem um procedimento de análise periódica aos equipamentos que se encontram ativos na rede e aos respetivos Logs de entrada dos mesmos. Essa análise deve ser partilhada com os serviços de segurança que controlam e registam a entrada de pessoas na empresa, internas e externas, afim de ser validado o número de equipamentos externos com a entrada de pessoas, para que se possa averiguar por exemplo se um utilizador externo ligou mais que um equipamento na rede, quando poderia ter apenas autorização para ligar um único equipamento, ou mesmo se foi registada a entrada ou ligação de algum equipamento à rede da empresa por parte de algum elemento interno ou externo, sem conhecimento da empresa e fora da organização.',
        solutions: 'Microsoft Device Management Intune',
      },
      {
        id: 3,
        title: 'Use a Passive Asset Discovery Tool',
        maturityAtual: 2,
        maturityExpected: 5,
        recomendations:
          'Recomenda-se a elaboração de um procedimento em que utilizadores externos com equipamentos próprios, se comprometam através de um documento oficial da organização em que os seus equipamentos se encontram devidamente atualizados e sem malware que possam pôr em risco a organização ao estarem conectados à rede interna da organização.',
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
          'Recomenda-se que elaborem um procedimento para análise regular e periódica do software existente dentro da organização, que seja revista a politica de permissões dos seus colaboradores nos seus equipamentos, em que sublinhamos a recomendação de não serem dadas permissões de administrador, e que todo o software a ser instalado nos equipamentos seja efetuado através de um processo em que envolve um pedido formal ao departamento de TI com respetiva aprovação dos responsáveis pelo departamento do colaborador que solicita esse mesmo software.',
        solutions: 'Microsoft Device Management Intune',
      },
      {
        id: 5,
        title: 'Ensure Software is Supported by Vendor',
        maturityAtual: 2,
        maturityExpected: 5,
        recomendations:
          'Recomenda-se que após revisão de todo o software existente na organização, que procedam à desinstalação de software que não se encontre na lista a elaborar, de software autorizado dentro da organização e que qualquer software que não pertença a essa lista e que seja necessário utilizar, seja para testes ou desenvolvimento, que seja instalado num equipamento separado da rede interna e devidamente isolado da mesma.',
        solutions: 'Inventory Management ERP',
      },
    ],
  },
];

export default controls;
