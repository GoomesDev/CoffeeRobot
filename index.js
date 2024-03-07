const {NlpManager} = require('node-nlp')
const readline = require('readline')
const manager = new NlpManager({ languages: ['pt-br'] })

manager.addDocument('pt', 'Qual é a origem do café?', 'origem_cafe');
manager.addDocument('pt', 'De onde vem o café?', 'origem_cafe');
manager.addDocument('pt', 'Como começou o cultivo do café?', 'origem_cafe');
manager.addDocument('pt', 'Quem descobriu o café?', 'origem_cafe');
// Adicione mais perguntas relacionadas à origem do café com o alias 'origem_cafe'...

manager.addDocument('pt', 'Como é cultivado o café?', 'cultivo_cafe');
manager.addDocument('pt', 'Quais são as etapas do cultivo do café?', 'cultivo_cafe');
manager.addDocument('pt', 'Quais são as condições ideais para o cultivo do café?', 'cultivo_cafe');
manager.addDocument('pt', 'Quais são os principais países produtores de café?', 'cultivo_cafe');
// Adicione mais perguntas relacionadas ao cultivo do café com o alias 'cultivo_cafe'...

// Adicionando respostas para cada tópico
manager.addAnswer('pt', 'origem_cafe', 'O café é originário da Etiópia, onde foi descoberto por pastores que notaram os efeitos revigorantes das sementes de café.');
manager.addAnswer('pt', 'origem_cafe', 'A história do café remonta ao século IX na Etiópia, onde as primeiras plantas de café foram encontradas.');
manager.addAnswer('pt', 'origem_cafe', 'O café foi descoberto na região de Kaffa, na Etiópia, onde as pessoas perceberam o potencial das sementes de café como estimulante.');
// Adicione mais respostas sobre a origem do café...

manager.addAnswer('pt', 'cultivo_cafe', 'O café é cultivado em áreas tropicais e subtropicais ao redor do mundo, com condições ideais de altitude, temperatura e umidade.');
manager.addAnswer('pt', 'cultivo_cafe', 'O cultivo do café envolve várias etapas, incluindo o plantio das mudas, o cuidado com as plantas durante o crescimento e a colheita dos grãos maduros.');
manager.addAnswer('pt', 'cultivo_cafe', 'Os principais países produtores de café incluem Brasil, Colômbia, Vietnã, Indonésia e Etiópia, que possuem condições climáticas favoráveis para o cultivo.');

manager.addDocument('pt', 'Quais são os países com os melhores cafés?', 'melhores_cafes');
manager.addDocument('pt', 'Onde encontrar os melhores cafés?', 'melhores_cafes');
manager.addDocument('pt', 'Quais países são famosos por seu café?', 'melhores_cafes');
manager.addDocument('pt', 'Quais são as características dos cafés de diferentes países?', 'melhores_cafes');
// Adicione mais perguntas relacionadas aos países com os melhores cafés com o alias 'melhores_cafes'...

// Adicionando respostas sobre os melhores cafés
manager.addAnswer('pt', 'melhores_cafes', 'O Brasil é conhecido por produzir uma grande variedade de cafés, desde o robusta no sul até os cafés arábica de alta qualidade em Minas Gerais.');
manager.addAnswer('pt', 'melhores_cafes', 'A Colômbia é famosa por seus cafés suaves e com sabor equilibrado, cultivados em altitudes elevadas na região da Cordilheira dos Andes.');
manager.addAnswer('pt', 'melhores_cafes', 'O Quênia produz cafés arábica de alta qualidade, conhecidos por seus sabores cítricos e florais, cultivados em solos vulcânicos ricos em nutrientes.');
manager.addAnswer('pt', 'melhores_cafes', 'O Etiópia é considerada o berço do café, produzindo uma ampla variedade de cafés arábica com sabores distintos, incluindo notas frutadas e florais.');

manager.addDocument('pt', 'O que é espresso?', 'o_que_e_espresso');
manager.addDocument('pt', 'Como fazer espresso?', 'como_fazer_espresso');
manager.addDocument('pt', 'Quais são as dicas para fazer um bom espresso?', 'dicas_espresso');
// Adicione mais perguntas sobre espresso com os respectivos aliases...

// Adicionando respostas sobre espresso
manager.addAnswer('pt', 'o_que_e_espresso', 'Espresso é um método de extração de café onde água quente é forçada sob pressão através de grãos de café finamente moídos, resultando em uma bebida concentrada e aromática.');
manager.addAnswer('pt', 'como_fazer_espresso', 'Para fazer espresso, você precisará de uma máquina de espresso, grãos de café frescos e água filtrada. Moa os grãos finamente, preencha o porta-filtro, compacte levemente e extraia o café sob alta pressão por cerca de 25-30 segundos.');
manager.addAnswer('pt', 'dicas_espresso', 'Algumas dicas para fazer um bom espresso incluem usar grãos frescos e de alta qualidade, garantir a moagem correta, preaquecer a xícara, monitorar a temperatura da água e limpar regularmente sua máquina de espresso.');

manager.addDocument('pt', 'O que é espresso?', 'o_que_e_espresso');
manager.addDocument('pt', 'Me fale sobre espresso', 'o_que_e_espresso');
manager.addDocument('pt', 'Como preparar espresso?', 'como_fazer_espresso');
manager.addDocument('pt', 'Dicas para um bom espresso', 'dicas_espresso');
// Adicione mais perguntas sobre espresso com os respectivos aliases...

// Adicionando respostas sobre espresso
manager.addAnswer('pt', 'o_que_e_espresso', ['Espresso é um método de extração de café onde água quente é forçada sob pressão através de grãos de café finamente moídos, resultando em uma bebida concentrada e aromática.', 'O espresso é uma bebida de café altamente concentrada, preparada através de um método de extração sob pressão.']);
manager.addAnswer('pt', 'como_fazer_espresso', ['Para fazer espresso, você precisará de uma máquina de espresso, grãos de café frescos e água filtrada. Moa os grãos finamente, preencha o porta-filtro, compacte levemente e extraia o café sob alta pressão por cerca de 25-30 segundos.', 'Preparar um espresso requer uma máquina especializada, grãos de café frescos e uma boa técnica. Moa os grãos, encha o porta-filtro, nivele a superfície e extraia o café com pressão controlada para obter o sabor desejado.']);
manager.addAnswer('pt', 'dicas_espresso', ['Algumas dicas para fazer um bom espresso incluem usar grãos frescos e de alta qualidade, garantir a moagem correta, preaquecer a xícara, monitorar a temperatura da água e limpar regularmente sua máquina de espresso.', 'Para obter um espresso perfeito, certifique-se de usar grãos frescos e bem moídos, ajustar a pressão e a temperatura corretas, e seguir os passos de preparo com atenção aos detalhes.']);

manager.addDocument('pt', 'O que é espresso?', 'o_que_e_espresso');
manager.addDocument('pt', 'Como fazer um espresso?', 'como_fazer_espresso');
manager.addDocument('pt', 'Explique o processo de fazer espresso', 'como_fazer_espresso');
manager.addDocument('pt', 'Dicas para um espresso perfeito', 'dicas_espresso');
manager.addDocument('pt', 'Qual a origem do espresso?', 'origem_espresso');
manager.addDocument('pt', 'Por que o espresso é tão concentrado?', 'concentracao_espresso');
// Adicione mais perguntas sobre espresso com os respectivos aliases...

// Adicionando respostas sobre espresso
manager.addAnswer('pt', 'o_que_e_espresso', ['Espresso é um método de extração de café onde água quente é forçada sob pressão através de grãos de café finamente moídos, resultando em uma bebida concentrada e aromática.', 'O espresso é uma bebida de café altamente concentrada, preparada através de um método de extração sob pressão.']);
manager.addAnswer('pt', 'como_fazer_espresso', ['Para fazer espresso, você precisará de uma máquina de espresso, grãos de café frescos e água filtrada. Moa os grãos finamente, preencha o porta-filtro, compacte levemente e extraia o café sob alta pressão por cerca de 25-30 segundos.', 'Preparar um espresso requer uma máquina especializada, grãos de café frescos e uma boa técnica. Moa os grãos, encha o porta-filtro, nivele a superfície e extraia o café com pressão controlada para obter o sabor desejado.']);
manager.addAnswer('pt', 'dicas_espresso', ['Algumas dicas para fazer um bom espresso incluem usar grãos frescos e de alta qualidade, garantir a moagem correta, preaquecer a xícara, monitorar a temperatura da água e limpar regularmente sua máquina de espresso.', 'Para obter um espresso perfeito, certifique-se de usar grãos frescos e bem moídos, ajustar a pressão e a temperatura corretas, e seguir os passos de preparo com atenção aos detalhes.']);
manager.addAnswer('pt', 'origem_espresso', ['O espresso tem sua origem na Itália, onde foi desenvolvido no início do século XX. A busca por uma bebida de café concentrada e saborosa levou à criação deste método de extração sob pressão, que se tornou popular em todo o mundo.', 'A origem do espresso remonta à Itália, onde foi inventado no início do século XX como resposta à demanda por uma bebida de café rápida e intensa.']);
manager.addAnswer('pt', 'concentracao_espresso', ['O espresso é tão concentrado devido ao método de extração sob pressão, que extrai uma quantidade significativa de sólidos solúveis e óleos dos grãos de café em um curto período de tempo. Isso resulta em uma bebida encorpada e intensa em sabor.', 'A concentração do espresso é resultado da extração rápida e eficiente dos componentes do café sob alta pressão, o que proporciona uma bebida altamente concentrada e saborosa.']);

// Adicionando mais documentos sobre espresso
manager.addDocument('pt', 'O que diferencia um espresso de um café normal?', 'diferenca_espresso_cafe');
manager.addDocument('pt', 'Posso fazer espresso em casa sem uma máquina especializada?', 'fazer_espresso_em_casa');
manager.addDocument('pt', 'Quais são os tipos de grãos de café mais adequados para espresso?', 'tipos_graos_espresso');
manager.addDocument('pt', 'Qual é a temperatura ideal da água para fazer espresso?', 'temperatura_agua_espresso');
manager.addDocument('pt', 'Quanto tempo dura um shot de espresso?', 'duracao_shot_espresso');
// Adicione mais perguntas sobre espresso com os respectivos aliases...

// Adicionando mais respostas sobre espresso
manager.addAnswer('pt', 'diferenca_espresso_cafe', ['A principal diferença entre espresso e café normal está na forma de preparo e na concentração. O espresso é preparado sob alta pressão, resultando em uma bebida mais concentrada e encorpada, enquanto o café normal é geralmente preparado por infusão e tem uma concentração mais baixa.', 'A diferença chave entre espresso e café normal está na concentração e no método de extração. O espresso é mais concentrado e é feito sob alta pressão, o que resulta em uma bebida encorpada e intensa em sabor.']);
manager.addAnswer('pt', 'fazer_espresso_em_casa', ['Embora seja mais difícil replicar a qualidade de um espresso feito em uma máquina especializada, é possível fazer uma versão caseira utilizando métodos alternativos, como a prensa francesa ou a Moka pot. No entanto, o resultado pode não ser tão consistente quanto o de uma máquina de espresso.', 'É possível fazer espresso em casa sem uma máquina especializada, mas o resultado pode variar em termos de sabor e qualidade. Métodos alternativos, como a prensa francesa ou a Moka pot, podem ser utilizados, mas é importante ajustar o processo para obter o melhor resultado possível.']);
manager.addAnswer('pt', 'tipos_graos_espresso', ['Os melhores grãos de café para espresso são geralmente de origem única e têm um perfil de torra média a escura. Grãos de variedades como Arabica ou Robusta podem ser utilizados, dependendo das preferências de sabor e da intensidade desejada.', 'Existem várias opções de grãos de café adequados para espresso, incluindo Arabica e Robusta, com diferentes perfis de sabor e intensidade. É importante experimentar diferentes variedades para encontrar a que melhor se adapta ao seu paladar.']);
manager.addAnswer('pt', 'temperatura_agua_espresso', ['A temperatura ideal da água para fazer espresso está entre 90°C e 95°C. Esta faixa de temperatura ajuda a extrair os sabores e aromas dos grãos de café de forma eficiente, resultando em uma bebida balanceada e saborosa.', 'A temperatura da água é crucial para fazer um bom espresso. Ela deve estar entre 90°C e 95°C para garantir uma extração adequada dos sabores e aromas dos grãos de café.']);
manager.addAnswer('pt', 'duracao_shot_espresso', ['Um shot de espresso geralmente dura entre 20 e 30 segundos, dependendo da máquina e das preferências individuais. O tempo de extração afeta a concentração e o sabor da bebida, por isso é importante ajustá-lo de acordo com o resultado desejado.', 'A duração ideal de um shot de espresso é de 25 a 30 segundos, o que permite extrair os sabores e aromas dos grãos de café de forma balanceada e consistente.']);
// Adicione mais respostas sobre espresso...

// Adicionando mais documentos sobre espresso
manager.addDocument('pt', 'Quais são os benefícios de beber espresso?', 'beneficios_espresso');
manager.addDocument('pt', 'Qual é o preço médio de um espresso em cafeterias?', 'preco_medio_espresso');
manager.addDocument('pt', 'É verdade que o espresso contém menos cafeína do que o café normal?', 'espresso_menos_cafeina_cafe');
manager.addDocument('pt', 'Quais são as curiosidades sobre a história do espresso?', 'curiosidades_historia_espresso');
manager.addDocument('pt', 'Posso adicionar açúcar ao espresso?', 'adicionar_acucar_espresso');
// Adicione mais perguntas sobre espresso com os respectivos aliases...

// Adicionando mais respostas sobre espresso
manager.addAnswer('pt', 'beneficios_espresso', ['O espresso oferece uma concentração maior de antioxidantes e compostos bioativos em comparação com o café normal. Além disso, seu sabor intenso e encorpado proporciona uma experiência sensorial única.', 'Beber espresso pode ter vários benefícios para a saúde, incluindo melhora do foco e da concentração, aumento da energia e proteção contra doenças crônicas, como diabetes e doenças cardíacas.']);
manager.addAnswer('pt', 'preco_medio_espresso', ['O preço médio de um shot de espresso em cafeterias varia dependendo da localização e da qualidade do estabelecimento. Em geral, pode variar de R$ 3 a R$ 8, aproximadamente.', 'O preço médio de um espresso em cafeterias costuma variar entre R$ 3 e R$ 8, dependendo do local e da qualidade do café.']);
manager.addAnswer('pt', 'espresso_menos_cafeina_cafe', ['Embora o espresso seja mais concentrado do que o café normal, ele não necessariamente contém menos cafeína. A quantidade de cafeína pode variar dependendo de vários fatores, como o tipo de grão, o método de preparo e o tamanho da xícara.', 'É um mito comum que o espresso contenha menos cafeína do que o café normal. Na verdade, a concentração de cafeína pode ser semelhante ou até maior, pois o espresso é feito com uma proporção maior de café moído por unidade de água.']);
manager.addAnswer('pt', 'curiosidades_historia_espresso', ['O espresso foi inventado na Itália no final do século XIX. Foi criado como uma maneira rápida e conveniente de servir café, especialmente para pessoas que estavam com pressa. O termo "espresso" significa "expresso" em italiano, referindo-se à rapidez com que a bebida é preparada.', 'O espresso foi inventado na Itália por volta de 1900 e tornou-se rapidamente popular em todo o mundo. Sua criação foi uma resposta à demanda por uma bebida de café rápida e saborosa, que pudesse ser preparada e consumida em poucos minutos.']);
manager.addAnswer('pt', 'adicionar_acucar_espresso', ['Adicionar açúcar ao espresso é uma questão de preferência pessoal. Algumas pessoas gostam de saborear o café puro, enquanto outras preferem adoçá-lo para suavizar o sabor forte e amargo. Experimente diferentes quantidades de açúcar até encontrar o equilíbrio perfeito para o seu paladar.', 'É perfeitamente possível adicionar açúcar ao espresso, mas isso pode alterar o sabor da bebida. Alguns apreciam o sabor robusto do espresso puro, enquanto outros preferem adoçá-lo para suavizar o amargor. A quantidade de açúcar pode variar de acordo com as preferências individuais.']);
// Adicione mais respostas sobre espresso...

// Adicionando documentos sobre café coado
manager.addDocument('pt', 'Como fazer café coado?', 'como_fazer_cafe_coiado');
manager.addDocument('pt', 'Quais são os tipos de filtro para café coado?', 'tipos_filtro_cafe_coado');
manager.addDocument('pt', 'Qual é a diferença entre café coado e espresso?', 'diferenca_cafe_coado_espresso');
manager.addDocument('pt', 'Posso reutilizar o filtro de café coado?', 'reutilizar_filtro_cafe_coado');
// Adicione mais perguntas sobre café coado com os respectivos aliases...

// Adicionando respostas sobre café coado
manager.addAnswer('pt', 'como_fazer_cafe_coiado', ['Para fazer café coado, você precisará de café moído na medida certa, água quente, um filtro de papel ou de pano e um porta-filtro. Coloque o café moído no filtro, despeje a água quente sobre o café em movimentos circulares, aguarde a infusão e depois sirva o café coado.']);
manager.addAnswer('pt', 'tipos_filtro_cafe_coado', ['Existem vários tipos de filtro para café coado, incluindo filtros de papel, filtros de pano, filtros de metal e filtros de cerâmica. Cada tipo de filtro pode afetar o sabor e a textura do café coado, portanto, experimente diferentes opções para encontrar a que mais lhe agrada.']);
manager.addAnswer('pt', 'diferenca_cafe_coado_espresso', ['A principal diferença entre café coado e espresso está na forma de preparo e na concentração da bebida. O café coado é feito passando água quente através de café moído em um filtro, resultando em uma bebida suave e aromática. Já o espresso é preparado forçando água quente sob alta pressão através de uma pequena quantidade de café moído, resultando em uma bebida mais concentrada e encorpada.']);
manager.addAnswer('pt', 'reutilizar_filtro_cafe_coado', ['Sim, você pode reutilizar o filtro de café coado, desde que o enxágue bem após cada uso e o armazene adequadamente. No entanto, a qualidade do café coado pode ser afetada se o filtro estiver sujo ou desgastado, portanto, é recomendável substituí-lo regularmente.']);
// Adicione mais respostas sobre café coado...

// Adicionando mais documentos sobre café coado
manager.addDocument('pt', 'Quais são os melhores grãos para café coado?', 'melhores_graos_cafe_coado');
manager.addDocument('pt', 'Qual é a temperatura ideal da água para fazer café coado?', 'temperatura_agua_cafe_coado');
manager.addDocument('pt', 'Como armazenar corretamente o café coado?', 'armazenamento_cafe_coado');
// Adicione mais perguntas sobre café coado com os respectivos aliases...

// Adicionando mais respostas sobre café coado
manager.addAnswer('pt', 'melhores_graos_cafe_coado', ['Os melhores grãos para café coado são aqueles de alta qualidade, frescos e recentemente torrados. Procure por grãos de café de origem única ou blends especiais, de acordo com suas preferências de sabor e aroma.']);
manager.addAnswer('pt', 'temperatura_agua_cafe_coado', ['A temperatura ideal da água para fazer café coado varia entre 90°C e 96°C. Água muito quente pode queimar o café, resultando em um sabor amargo, enquanto água muito fria pode não extrair completamente os sabores e aromas do café.']);
manager.addAnswer('pt', 'armazenamento_cafe_coado', ['Para armazenar corretamente o café coado, transfira-o para um recipiente hermético e mantenha-o em local fresco, seco e escuro. Evite expor o café coado à luz direta do sol, umidade ou ar, pois isso pode afetar sua frescura e sabor.']);
// Adicione mais respostas sobre café coado...

// Adicionando mais documentos sobre café coado
manager.addDocument('pt', 'Quais são os tipos de filtros mais utilizados para café coado?', 'tipos_filtros_cafe_coado');
manager.addDocument('pt', 'Como fazer café coado na Hario V60?', 'fazer_cafe_hario_v60');
manager.addDocument('pt', 'Qual é a diferença entre café coado e café expresso?', 'diferenca_cafe_coado_espresso');
// Adicione mais perguntas sobre café coado com os respectivos aliases...

// Adicionando mais respostas sobre café coado
manager.addAnswer('pt', 'tipos_filtros_cafe_coado', ['Os tipos de filtros mais utilizados para café coado incluem filtros de papel, filtros de pano, filtros de metal e drippers como Hario V60, Chemex e Kalita Wave. Cada tipo de filtro pode influenciar no sabor e na textura do café coado.']);
manager.addAnswer('pt', 'fazer_cafe_hario_v60', ['Para fazer café coado na Hario V60, você precisará de café moído na granulometria adequada, filtro de papel Hario V60, água aquecida entre 90°C e 96°C e uma jarra ou xícara para servir. Siga as instruções específicas para o método Hario V60 para obter o melhor resultado.']);
manager.addAnswer('pt', 'diferenca_cafe_coado_espresso', ['A principal diferença entre café coado e café expresso está na forma de preparo e na concentração do café. No café coado, a água passa lentamente pelo café moído, resultando em uma bebida suave e com mais volume. Já no café expresso, a água é forçada sob alta pressão através do café moído, resultando em uma bebida concentrada e encorpada.']);
// Adicione mais respostas sobre café coado...

// Adicionando mais documentos sobre métodos de preparo de café
manager.addDocument('pt', 'Como fazer café na prensa francesa?', 'fazer_cafe_prensa_francesa');
manager.addDocument('pt', 'Qual é o tempo ideal de infusão na prensa francesa?', 'tempo_infusao_prensa_francesa');
manager.addDocument('pt', 'Quais são os benefícios de usar o método Clever para fazer café?', 'beneficios_metodo_clever');
manager.addDocument('pt', 'Como utilizar o método Hario para fazer café?', 'usar_metodo_hario');
manager.addDocument('pt', 'Quais são as vantagens de usar a AeroPress para preparar café?', 'vantagens_aeropress');
// Adicione mais perguntas sobre métodos de preparo de café com os respectivos aliases...

// Adicionando mais respostas sobre métodos de preparo de café
manager.addAnswer('pt', 'fazer_cafe_prensa_francesa', ['Para fazer café na prensa francesa, você precisará de café moído na granulometria adequada, água aquecida entre 90°C e 96°C, a prensa francesa e uma jarra ou xícara para servir. Siga as instruções específicas para o método da prensa francesa para obter o melhor resultado.']);
manager.addAnswer('pt', 'tempo_infusao_prensa_francesa', ['O tempo ideal de infusão na prensa francesa geralmente varia de 3 a 4 minutos, mas pode ser ajustado de acordo com suas preferências de sabor.']);
manager.addAnswer('pt', 'beneficios_metodo_clever', ['O método Clever oferece alguns benefícios, como facilidade de uso, controle sobre o tempo de infusão e uma xícara de café limpa e sem sedimentos.']);
manager.addAnswer('pt', 'usar_metodo_hario', ['Para utilizar o método Hario para fazer café, você precisará de um dripper Hario, filtro de papel Hario V60, café moído na granulometria adequada, água aquecida entre 90°C e 96°C e uma jarra ou xícara para servir.']);
manager.addAnswer('pt', 'vantagens_aeropress', ['A AeroPress oferece algumas vantagens, como portabilidade, facilidade de limpeza, versatilidade na preparação de diferentes estilos de café e a capacidade de produzir uma xícara de café de alta qualidade em pouco tempo.']);
// Adicione mais respostas sobre métodos de preparo de café...

// Adicionando mais documentos sobre métodos de preparo de café
manager.addDocument('pt', 'Qual é a origem da prensa francesa?', 'origem_prensa_francesa');
manager.addDocument('pt', 'Como limpar o Clever após o uso?', 'limpar_clever');
manager.addDocument('pt', 'Quais são os diferentes tamanhos de filtros de papel Hario V60?', 'tamanhos_filtros_hario');
manager.addDocument('pt', 'Qual é o campeonato mundial de AeroPress?', 'campeonato_aeropress');
// Adicione mais perguntas sobre métodos de preparo de café com os respectivos aliases...

// Adicionando mais respostas sobre métodos de preparo de café
manager.addAnswer('pt', 'origem_prensa_francesa', ['A prensa francesa foi inventada pelo designer italiano Attilio Calimani em 1929, mas foi popularizada na França.']);
manager.addAnswer('pt', 'limpar_clever', ['Para limpar o Clever após o uso, basta descartar o filtro de papel usado, enxaguar o filtro de metal e o copo com água quente e detergente suave, e deixar secar completamente.']);
manager.addAnswer('pt', 'tamanhos_filtros_hario', ['Os filtros de papel Hario V60 estão disponíveis em diferentes tamanhos, como 01, 02 e 03, para corresponder aos diferentes tamanhos dos drippers Hario V60.']);
manager.addAnswer('pt', 'campeonato_aeropress', ['O Campeonato Mundial de AeroPress é um evento anual onde os participantes competem para criar a melhor xícara de café usando uma AeroPress.']);
// Adicione mais respostas sobre métodos de preparo de café...

// Adicionando mais documentos sobre métodos de preparo de café
manager.addDocument('pt', 'Qual é a melhor moagem para a prensa francesa?', 'melhor_moagem_prensa_francesa');
manager.addDocument('pt', 'Como ajustar a moagem para o Clever?', 'ajustar_moagem_clever');
manager.addDocument('pt', 'Quais são os principais benefícios da Hario V60?', 'beneficios_hario_v60');
manager.addDocument('pt', 'Como fazer a receita vencedora do Campeonato Mundial de AeroPress?', 'receita_vencedora_aeropress');
// Adicione mais perguntas sobre métodos de preparo de café com os respectivos aliases...

// Adicionando mais respostas sobre métodos de preparo de café
manager.addAnswer('pt', 'melhor_moagem_prensa_francesa', ['A melhor moagem para a prensa francesa é uma moagem grossa, semelhante à de pão ralado.']);
manager.addAnswer('pt', 'ajustar_moagem_clever', ['Para ajustar a moagem para o Clever, experimente uma moagem média, semelhante à de açúcar granulado.']);
manager.addAnswer('pt', 'beneficios_hario_v60', ['Os principais benefícios da Hario V60 incluem sua simplicidade de uso, capacidade de controlar a extração e produzir uma xícara limpa e clara de café.']);
manager.addAnswer('pt', 'receita_vencedora_aeropress', ['A receita vencedora do Campeonato Mundial de AeroPress varia a cada ano, mas geralmente inclui uma combinação específica de proporções de café, temperatura da água e tempo de imersão.']);
// Adicione mais respostas sobre métodos de preparo de café...

// Adicionando mais documentos sobre métodos de preparo de café
manager.addDocument('pt', 'Qual é o tempo ideal de infusão para a prensa francesa?', 'tempo_infusao_prensa_francesa');
manager.addDocument('pt', 'Como evitar a sedimentação excessiva no Clever?', 'evitar_sedimentacao_clever');
manager.addDocument('pt', 'Quais são as características do filtro da Hario V60?', 'caracteristicas_filtro_hario_v60');
manager.addDocument('pt', 'Quais são as diferentes técnicas de inversão na AeroPress?', 'tecnicas_inversao_aeropress');
// Adicione mais perguntas sobre métodos de preparo de café com os respectivos aliases...

// Adicionando mais respostas sobre métodos de preparo de café
manager.addAnswer('pt', 'tempo_infusao_prensa_francesa', ['O tempo ideal de infusão para a prensa francesa é geralmente entre 3 e 4 minutos, mas pode variar de acordo com suas preferências de sabor.']);
manager.addAnswer('pt', 'evitar_sedimentacao_clever', ['Para evitar a sedimentação excessiva no Clever, experimente mexer levemente a água e o café após a adição da água quente antes de colocar a tampa e deixar a infusão ocorrer.']);
manager.addAnswer('pt', 'caracteristicas_filtro_hario_v60', ['O filtro da Hario V60 é conhecido por sua espessura e textura específicas, que permitem um fluxo de água uniforme e uma extração consistente do café.']);
manager.addAnswer('pt', 'tecnicas_inversao_aeropress', ['Existem várias técnicas de inversão na AeroPress, incluindo o método padrão de imersão completa e inversão, bem como variações que ajustam a agitação, o tempo de imersão e a temperatura da água.']);
// Adicione mais respostas sobre métodos de preparo de café...

// Adicionando mais documentos sobre como fazer cada método de preparo de café
manager.addDocument('pt', 'Qual é o passo a passo para fazer café na prensa francesa?', 'passo_a_passo_prensa_francesa');
manager.addDocument('pt', 'Como preparar café usando o Clever?', 'preparar_cafe_clever');
manager.addDocument('pt', 'Quais são os passos básicos para fazer café na Hario V60?', 'passos_fazer_cafe_hario_v60');
manager.addDocument('pt', 'Como utilizar a AeroPress para fazer café?', 'utilizar_aeropress_fazer_cafe');
// Adicione mais perguntas sobre como fazer cada método de preparo de café com os respectivos aliases...

// Adicionando mais respostas sobre como fazer cada método de preparo de café
manager.addAnswer('pt', 'passo_a_passo_prensa_francesa', ['Para fazer café na prensa francesa, você precisará de café moído grosso, água quente, uma prensa francesa e um cronômetro. Siga estes passos: 1. Adicione café moído à prensa francesa. 2. Despeje água quente sobre o café e mexa. 3. Coloque a tampa com o filtro na prensa, mas não pressione ainda. 4. Deixe o café em infusão por cerca de 4 minutos. 5. Pressione lentamente o êmbolo para baixo. 6. Sirva e aproveite!']);
manager.addAnswer('pt', 'preparar_cafe_clever', ['Para preparar café usando o Clever, você precisará de café moído médio, água quente, um filtro de papel, o filtro Clever e um cronômetro. Aqui está um passo a passo básico: 1. Adicione o filtro de papel ao Clever e enxágue com água quente. 2. Adicione café moído ao filtro úmido. 3. Despeje água quente sobre o café e mexa. 4. Deixe o café em infusão por cerca de 3-4 minutos. 5. Coloque o Clever em cima de uma xícara e deixe o café drenar. 6. Sirva e aproveite!']);
manager.addAnswer('pt', 'passos_fazer_cafe_hario_v60', ['Os passos básicos para fazer café na Hario V60 são os seguintes: 1. Coloque o filtro de papel na Hario V60 e enxágue com água quente. 2. Adicione café moído médio ao filtro. 3. Faça uma pré-infusão com um pouco de água quente, cobrindo uniformemente o café. 4. Despeje o restante da água em movimentos circulares, garantindo uma extração uniforme. 5. Deixe o café drenar completamente. 6. Sirva e aproveite!']);
manager.addAnswer('pt', 'utilizar_aeropress_fazer_cafe', ['Para utilizar a AeroPress para fazer café, siga estes passos: 1. Coloque um filtro de papel no porta-filtro e enxágue com água quente. 2. Monte a AeroPress e coloque-a sobre uma xícara ou jarra. 3. Adicione café moído médio à câmara da AeroPress. 4. Despeje água quente até a marca desejada. 5. Agite suavemente por alguns segundos e insira o êmbolo na câmara. 6. Pressione lentamente o êmbolo para baixo até ouvir um sibilo. 7. Sirva e aproveite!']);
// Adicione mais respostas sobre como fazer cada método de preparo de café...

// Adicionando mais documentos sobre métodos de preparo de café coado em geral
manager.addDocument('pt', 'Como fazer café usando o método Chemex?', 'fazer_cafe_chemex');
manager.addDocument('pt', 'Qual é a técnica para preparar café na Kalita Wave?', 'tecnica_preparo_cafe_kalita_wave');
manager.addDocument('pt', 'Quais são os passos para fazer café no filtro de pano?', 'passos_fazer_cafe_filtro_pano');
manager.addDocument('pt', 'Como utilizar o método Hario Woodneck para fazer café?', 'utilizar_metodo_hario_woodneck');
// Adicione mais perguntas sobre métodos de preparo de café coado em geral com os respectivos aliases...

// Adicionando mais respostas sobre métodos de preparo de café coado em geral
manager.addAnswer('pt', 'fazer_cafe_chemex', ['Para fazer café usando o método Chemex, você precisará de um Chemex, filtro de papel Chemex, café moído médio, água quente e um cronômetro. Siga estes passos: 1. Coloque o filtro de papel no Chemex e enxágue com água quente. 2. Adicione café moído ao filtro úmido. 3. Despeje água quente sobre o café em movimentos circulares. 4. Deixe o café em infusão por cerca de 3-4 minutos. 5. Remova o filtro e sirva o café.']);
manager.addAnswer('pt', 'tecnica_preparo_cafe_kalita_wave', ['A técnica para preparar café na Kalita Wave envolve os seguintes passos: 1. Coloque o filtro de papel na Kalita Wave e enxágue com água quente. 2. Adicione café moído ao filtro úmido. 3. Faça uma pré-infusão com um pouco de água quente, cobrindo uniformemente o café. 4. Despeje o restante da água em movimentos circulares, garantindo uma extração uniforme. 5. Deixe o café drenar completamente. 6. Sirva e aproveite!']);
manager.addAnswer('pt', 'passos_fazer_cafe_filtro_pano', ['Os passos para fazer café no filtro de pano são simples: 1. Coloque o filtro de pano em um suporte. 2. Adicione café moído médio ao filtro. 3. Despeje água quente sobre o café em movimentos circulares. 4. Deixe o café em infusão por alguns minutos. 5. Remova o filtro e sirva o café.']);
manager.addAnswer('pt', 'utilizar_metodo_hario_woodneck', ['Para utilizar o método Hario Woodneck para fazer café, siga estes passos: 1. Enxágue o filtro de pano com água quente. 2. Coloque o suporte de madeira em cima de uma xícara ou jarra. 3. Adicione café moído ao filtro úmido. 4. Despeje água quente sobre o café em movimentos circulares. 5. Deixe o café em infusão por alguns minutos. 6. Remova o filtro e sirva o café.']);
// Adicione mais respostas sobre métodos de preparo de café coado em geral...



manager.train().then(() => 
	manager.save()
)
