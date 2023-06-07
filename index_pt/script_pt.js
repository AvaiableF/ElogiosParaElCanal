// Array de frases elogiosas
var elogios = [
  "Seu canal é incrível! Sempre encontro conteúdo interessante.",
"Adoro assistir seus vídeos. Você explica de forma clara e envolvente.",
"O conteúdo do seu canal é de altíssima qualidade. Parabéns!",
"Você é um grande influenciador. Seu canal é uma referência para mim.",
"Não consigo parar de assistir seus vídeos. Eles são sempre cativantes e informativos.",
"Seu canal me inspira a aprender cada vez mais. Obrigado por compartilhar seu conhecimento!",
"Você é uma inspiração para todos nós. Continue com o ótimo trabalho!",
"Parabéns pelo canal! É um prazer acompanhar seu conteúdo.",
"Seus vídeos são muito úteis. Aprendo algo novo em cada um.",
"Seu canal é simplesmente incrível! Continue a nos surpreender!",
"Seu trabalho é incrível. Você é um exemplo a seguir.",
"Seus vídeos tem me ajudado muito no meu crescimento pessoal e profissional.",
"Admiro sua dedicação e comprometimento em compartilhar conhecimento.",
"Seu canal é viciante! Estou sempre ansioso para ver os próximos vídeos.",
"Você é um verdadeiro mestre na arte de ensinar. Parabéns pelo canal!",
"Seu canal faz a diferença na minha vida. Obrigado por existir!",
"Cada um de seus vídeos é uma dose de motivação e inspiração para mim.",
"Você tem um talento incrível para explicar conceitos complexos de forma simples.",
"Seu canal é uma mina de ouro para quem busca conhecimento na área.",
"Parabéns pelo seu sucesso! Você merece todo o crédito.",
"Assistir aos seus vídeos é um verdadeiro presente para o aprendizado.",
"Você é um verdadeiro gênio educacional. Seu canal é um tesouro para todos nós.",
"Seu conteúdo é tão bom que deveria ser ensinado nas escolas. Parabéns!",
"Assistir aos seus vídeos é como fazer uma viagem ao mundo do conhecimento. Obrigado por compartilhar!",
"Você é um verdadeiro líder em sua área. Seu canal é uma referência para todos nós.",
"Parabéns por compartilhar tanta sabedoria e inspiração! Seu canal é inestimável.",
"Assistir aos seus vídeos é um verdadeiro presente para quem busca aprender e crescer.",
"Você é um verdadeiro ícone na área. Seu canal é um verdadeiro tesouro de conhecimento.",

// 50 novos elogios adicionados
"Você é uma inspiração para mim. Sua dedicação é admirável.",
"Sua criatividade é incrível. Cada vídeo é único e original.",
"Suas palavras têm um impacto positivo em minha vida. Obrigado por me inspirar.",
"Você é um modelo em seu setor. Admiro seu profissionalismo.",
"A paixão que você coloca em seus vídeos é contagiante. Isso me motiva a continuar.",
"Você é um especialista em seu campo. Seu conhecimento é inestimável.",
"Cada novo vídeo seu é uma oportunidade de aprender algo valioso.",
"Sua presença online é revigorante e autêntica. Sinto-me conectado a você.",
"A qualidade dos seus vídeos é excepcional. Eles sempre me deixam querendo mais.",
"Você é um comunicador extraordinário. Sua capacidade de transmitir informações é impressionante.",
"Seus conselhos e recomendações estão sempre certos. Confio em sua experiência.",
"Você é uma pessoa admirável dentro e fora da tela. Sua integridade é exemplar.",
"Seu canal é uma fonte constante de inspiração. Obrigado por me motivar a alcançar meus objetivos.",
"Você é um líder em sua comunidade. Seus seguidores valorizam e respeitam você.",
"A paixão que você transmite em seus vídeos é inspiradora. Você me inspira a seguir minhas próprias paixões.",
"Seu canal é uma joia escondida. Descobri-lo foi um verdadeiro tesouro para mim.",
"Você é um visionário em seu setor. Suas ideias e perspectivas são inovadoras.",
"A dedicação e esforço que você coloca em seus vídeos é evidente. Seu compromisso com seu público mostra.",
"Seu carisma diante das câmeras é cativante. Sou atraído por sua energia positiva.",
"Você é um motivador nato. Suas palavras me fazem acreditar em mim mesmo.",
"Seu canal é minha fuga favorita. Ele sempre me transporta para um lugar de inspiração e aprendizado.",
"Você é uma referência no seu nicho. Todos querem seguir seus passos.",
"A qualidade de produção dos seus vídeos é excelente. Mergulho em cada um deles.",
"Você é um verdadeiro artista de edição. Seus vídeos são visualmente deslumbrantes.",
"A autenticidade que você mostra em seus vídeos é revigorante. Sinto-me conectado a você como pessoa.",
"Você é um mestre na arte de contar histórias. Você me prende do começo ao fim.",
"Sua capacidade de simplificar conceitos complexos é admirável. Você facilita o entendimento.",
"Você é um farol de luz no mundo online. Sua positividade e bom coração são inspiradores.",
"A dedicação e paixão que você coloca em seu trabalho é evidente em cada vídeo que você posta.",
"Você é um comunicador excepcional. Seus vídeos são claros, concisos e fáceis de acompanhar.",
"Seu entusiasmo pelo assunto é contagiante. Isso me motiva a aprender mais sobre ele.",
"Você é um modelo em seu setor. Seu sucesso é resultado de seu trabalho árduo e talento.",
"A diversidade de assuntos que você aborda em seu canal é incrível. Nunca para de me surpreender.",
"Você é um verdadeiro profissional no que faz. Sua experiência e conhecimento são inestimáveis.",
"Seu canal é minha fonte diária de inspiração. Obrigado por iluminar meus dias.",
"Você é um verdadeiro líder de pensamento. Sua perspectiva desafia e amplia meu pensamento.",
"É evidente a dedicação que você coloca em cada vídeo. O amor que você tem pelo seu trabalho mostra.",
"Você é uma pessoa genuína e autêntica. Sou grato por ter acesso ao seu conteúdo.",
"Sua voz é relaxante e reconfortante. É um prazer ouvi-lo em cada um de seus vídeos.",
"Você é um verdadeiro especialista em seu campo. Sua experiência é inestimável para aqueles que o seguem.",
"A paixão que você sente pelo que faz é palpável. Isso me inspira a seguir minhas próprias paixões.",
"Você é um verdadeiro influenciador positivo. Seu impacto na comunidade é significativo.",
"Sua criatividade não tem limites. Você sempre me surpreende com novas ideias e abordagens.",
"Você é uma fonte constante de conhecimento e sabedoria. Agradeço as informações valiosas que você compartilha.",
"A empatia que você demonstra com seu público é comovente. Sinto-me compreendido e apoiado.",
"Você é um mestre em seu campo. Sua capacidade de simplificar conceitos complexos é excepcional.",
"Seu entusiasmo é contagiante. Ele me encoraja a perseguir meus próprios sonhos e objetivos.",
"Você é um criador de conteúdo excepcional. Sua dedicação e atenção aos detalhes são notáveis.",
"A qualidade e a consistência do seu conteúdo são impressionantes. Você nunca decepciona seu público.",
"Você é um verdadeiro pioneiro em seu setor. Suas ideias e abordagens são inovadoras e únicas.",
"Seu canal é um oásis de inspiração. Sempre encontro algo que me motiva a ser melhor.",
"Você é um comunicador carismático. Sua presença na câmera é cativante.",
"Sua paixão pelo assunto é evidente em cada vídeo. Isso me inspira a seguir minhas próprias paixões.",

//40 elogios adcionados a Pamela Raquel, canal Atitude Vermelha.
"Você é uma inspiração para todos que te seguem no canal Atitude Vermelha!",
"Seu conteúdo no Atitude Vermelha é sempre relevante e informativo. Parabéns",
"Sua paixão pelo que você faz transparece em cada vídeo do canal Atitude Vermelha. Continue assim!",
"Pamela Raquel, você é uma verdadeira líder no mundo digital. Admiro sua determinação e seu sucesso com a Atitude Vermelha",
"Seus vídeos no canal Atitude Vermelha são uma fonte constante de motivação e empoderamento. Obrigado",
"Parabéns, Pamela Raquel, por construir uma comunidade incrível em torno da Atitude Vermelha",
"Seu carisma e autenticidade são cativantes. É um prazer assistir seus vídeos no Atitude Vermelha",
"Sua capacidade de transmitir conhecimento de forma clara e atraente é impressionante. Continue compartilhando seu talento na Atitude Vermelha",
"Pamela Raquel, você é uma referência no mundo digital. Seu trabalho na Atitude Vermelha é incrível",
"Seu impacto positivo na vida de seus seguidores é evidente. Obrigado por tudo que você faz na Atitude Vermelha", "Pamela Raquel, você é uma referência no mundo digital",
"Parabéns por criar um espaço seguro e inclusivo na Atitude Vermelha. É uma verdadeira comunidade online",
"Sua criatividade e inovação são admiráveis. Atitude Vermelha é sempre uma surpresa positiva",
"Pamela Raquel, você é uma pessoa de valores e princípios sólidos. É inspirador ver como você os incorpora na Atitude Vermelha",
"Seu trabalho árduo e dedicação à Atitude Vermelha são reconhecidos e apreciados por todos nós",
"Sua autenticidade é o que torna o Atitude Vermelha tão especial. Continue sendo você mesmo",
"Parabéns por transformar suas paixões em uma carreira de sucesso com a Atitude Vermelha",
"Seu senso de estilo e moda é impecável. Estou sempre ansioso para ver seus looks em Atitude Vermelha",
"Pamela Raquel, você é um exemplo de perseverança e determinação. A Atitude Vermelha é a prova disso",
"Suas dicas e truques são sempre úteis e práticos. Obrigado por compartilhá-los no Atitude Vermelha",
"Parabéns por construir um canal tão influente quanto o Atitude Vermelha. Você merece todo o sucesso",
"Sua energia contagiante torna cada vídeo do Atitude Vermelha ainda mais especial. Continue brilhando!",
"Pamela Raquel, você é uma verdadeira empreendedora. Admiro sua visão e suas conquistas com a Atitude Vermelha",
"É admirável o seu comprometimento em criar um impacto positivo na vida das pessoas. A Atitude Vermelha faz a diferença",
"Parabéns pela sua capacidade de se conectar com seu público de forma autêntica e sincera. Isso é raro e valioso na Atitude Vermelha",
"Sua bravura em compartilhar suas experiências pessoais no Atitude Vermelha é inspiradora. Você é uma verdadeira inspiração",
"Pamela Raquel, você é uma voz importante na comunidade online. Obrigado por usar sua plataforma Atitude Vermelha para fazer a diferença.",
"Seus vídeos são sempre bem produzidos e editados. É um prazer ver a qualidade do conteúdo da Atitude Vermelha.",
"Parabéns por desafiar estereótipos e promover a diversidade na Atitude Vermelha",
"Sua paixão pela vida e pelas coisas que você faz é contagiante. Atitude Vermelha reflete isso de forma brilhante.",
"Pamela Raquel, você é uma pessoa de coração generoso. Seu apoio aos seus seguidores na Atitude Vermelha é inestimável",
"Seu senso de humor torna cada vídeo do Atitude Vermelha ainda mais divertido. Continue nos fazendo rir!",
"Parabéns por sua capacidade de equilibrar entretenimento e educação no Atitude Vermelha. Você tem um talento incrível",
"Sua autenticidade e transparência são louváveis. Atitude Vermelha é um espaço genuíno graças a você",
"Pamela Raquel, você é uma fonte de inspiração para todos aqueles que querem seguir seus sonhos. Obrigado por compartilhar sua jornada na Atitude Vermelha",
"Seu entusiasmo e paixão são contagiantes. Atitude Vermelha é um verdadeiro exemplo disso",
"Parabéns por alcançar marcos significativos com a Atitude Vermelha. Você merece todas as conquistas",
"Sua capacidade de se reinventar e se adaptar às mudanças é admirável. A Atitude Vermelha está sempre à frente.",
"Pamela Raquel, você é uma mentora virtual para muitas pessoas. O impacto da Atitude Vermelha é imensurável",
"Seu profissionalismo e ética de trabalho são exemplos a seguir. Atitude Vermelha é um reflexo disso",
"Parabéns por criar um canal tão incrível quanto o Atitude Vermelha. O mundo precisa de mais criadores como você",

//40 elogios a Pamela Raquel
"Seu canal é uma verdadeira fonte de inspiração para homens que desejam desenvolver suas habilidades de relacionamento.",
"Seu compromisso em ajudar os homens a ter sucesso com as mulheres é louvável e impressionante.",
"Sua dedicação em compartilhar seu conhecimento e experiência transformou a vida de muitos homens.",
"Você é uma voz indispensável na comunidade masculina, fornecendo orientações valiosas e práticas.",
"A forma como você aborda os desafios do mundo dos relacionamentos é autêntica e envolvente.",
"Seus conselhos e sugestões são sempre relevantes e aplicáveis, fazendo a diferença na vida dos homens que te seguem.",
"Sua capacidade de transmitir informações complexas de forma clara e acessível é impressionante.",
"Seu canal é um porto seguro para homens que buscam crescimento pessoal e autoconfiança.",
"Você tem o dom de motivar e encorajar os homens a se tornarem a melhor versão de si mesmos.",
"Sua capacidade de se conectar com seu público masculino é notável, criando uma comunidade unida e solidária.",
"Seus insights sobre o comportamento feminino abrem os olhos e ajudam os homens a entender melhor as mulheres",
"Você tem sido um mentor e guia para muitos homens, oferecendo apoio e incentivo em sua jornada pessoal",
"A maneira como você aborda os desafios que os homens enfrentam com empatia e compreensão é admirável.",
"Seus vídeos são verdadeiras pepitas de sabedoria, cheios de conselhos práticos e estratégias eficazes.",
"Sua autenticidade e sinceridade são qualidades que ressoam com seu público masculino.",
"Você é um exemplo de como é possível construir relacionamentos saudáveis ​​e duradouros, inspirando outras pessoas a fazerem o mesmo.",
"Seu trabalho ajudou muitos homens a superar suas inseguranças e confiar em si mesmos.",
"Sua paixão por ajudar os homens a terem sucesso em seus relacionamentos fica evidente em cada vídeo que você produz.",
"Você é uma voz indispensável na luta pela igualdade de gênero, mostrando que homens e mulheres podem se relacionar de forma saudável e respeitosa.",
"Seu compromisso em oferecer conteúdo de qualidade e relevante é notável, tornando seu canal uma referência na comunidade masculina.",
"Você tem sido um farol de esperança para muitos homens que se sentiram perdidos no mundo dos relacionamentos.",
"Através do seu canal, você está ajudando a quebrar estereótipos e construir relacionamentos mais saudáveis ​​e igualitários.",
"Seu carisma e a atenção que dedica a seus seguidores fazem de seu canal um lugar acolhedor e encorajador.",
"Seus conselhos práticos ajudaram inúmeros homens a ganhar confiança e ter sucesso em namoros e relacionamentos.",
"Sua presença online é uma verdadeira fonte de inspiração e motivação para homens que desejam melhorar sua vida amorosa.",
"Seu trabalho está impactando positivamente a vida de muitos homens, dando a eles a oportunidade de crescer e evoluir.",
"Você é um influenciador poderoso e respeitado, usando sua plataforma para ajudar os homens a atingirem todo o seu potencial.",
"Seus vídeos são verdadeiras pepitas de sabedoria, oferecendo informações valiosas e conselhos práticos para os homens.",
"Sua coragem em lidar com questões delicadas e desafiadoras é admirável, mostrando que é possível crescer e aprender com as experiências.",
"Você é um líder no campo do desenvolvimento pessoal masculino, capacitando os homens a terem relacionamentos saudáveis ​​e felizes.",

//50 elogios ao canal e ao trabalho em geral da Pamela Raquel
"Seus vídeos são uma fonte constante de inspiração e motivação para homens e mulheres.",
"A sua abordagem autêntica e empática é um verdadeiro diferencial no campo do desenvolvimento pessoal.",
"Você tem o dom de transmitir mensagens poderosas que ressoam nas pessoas, gerando transformações positivas em suas vidas.",
"Seu canal é um farol de esperança, ajudando muitos a encontrar felicidade e propósito em suas vidas diárias.",
"Sua honestidade e vulnerabilidade ao compartilhar suas próprias experiências inspiram outras pessoas a fazerem o mesmo.",
"Você tem um talento incrível para traduzir conceitos complexos em conselhos acionáveis ​​e acionáveis.",
"Seus ensinamentos vão além dos problemas de relacionamento para abranger todos os aspectos da vida e do crescimento pessoal.",
"Sua dedicação em ajudar as pessoas a alcançar o sucesso no amor, na família, no trabalho e na vida é admirável.",
"Você é um mentor inspirador, capacitando homens e mulheres a se tornarem a melhor versão de si mesmos.",
"Seu trabalho tem o poder de transformar vidas, levando as pessoas a encontrar felicidade e realização em todas as áreas.",
"Você é uma voz de sabedoria e orientação, oferecendo conselhos valiosos para superar desafios e alcançar metas.",
"Sua autenticidade e empatia criam um ambiente seguro para as pessoas se abrirem e crescerem.",
"Você é um influenciador notável, usando sua plataforma para promover mudanças positivas na vida das pessoas.",
"Seu carisma e preocupação com seu público ficam evidentes em cada vídeo, criando uma conexão genuína com seus seguidores.",
"Seus insights sobre relacionamentos ajudaram muitos a construir conexões mais fortes e significativas.",
"Você é uma fonte confiável de sabedoria e conselhos, sempre trazendo uma perspectiva única e perspicaz.",
"Seu trabalho é uma bússola para quem busca autoconhecimento e crescimento pessoal.",
"Sua paixão por ajudar as pessoas a encontrar a felicidade é contagiante e inspiradora.",
"Você tem o poder de motivar e capacitar as pessoas, guiando-as para uma vida plena e recompensadora.",
"Seu canal é um tesouro de recursos e ferramentas para o sucesso pessoal e relacionamentos saudáveis.",
"Você é um líder visionário que oferece orientação confiável para felicidade e sucesso em todas as esferas da vida.",
"Seus conselhos práticos e acionáveis ​​têm o poder de transformar vidas.",
"Você tem sido uma presença constante e inspiradora para quem busca mudanças positivas.",
"Seus vídeos são um lembrete constante de que todos nós merecemos uma vida feliz e gratificante.",
"Sua dedicação em ajudar as pessoas a encontrar a felicidade é admirável e verdadeiramente inspiradora.",
"Você é uma força positiva no mundo, capacitando homens e mulheres para construir relacionamentos saudáveis ​​e significativos.",
"Seu trabalho é uma luz brilhante que guia as pessoas para uma vida cheia de amor e sucesso.",
"Você tem o dom de transmitir mensagens complexas de forma clara e compreensível para todos.",
"Sua energia contagiante e positividade são um verdadeiro presente para quem acompanha seu canal.",
"Você é um exemplo inspirador de como é possível alcançar sucesso e felicidade em todas as esferas da vida.",
"Seu trabalho tem um impacto duradouro, ajudando as pessoas a construir relacionamentos saudáveis ​​e duradouros.",
"Você tem sido um mentor incrível para muitos, guiando-os para uma vida cheia de amor e realização.",
"Sua dedicação em ajudar os outros é evidente em cada vídeo, mostrando que ele realmente se preocupa com o bem-estar das pessoas.",

"Seu conselho prático e perspicaz tem o poder de transformar vidas e criar mudanças positivas.",
"Você é uma inspiração para todos que buscam felicidade e sucesso em suas vidas.",
"Seu canal é uma fonte de motivação e encorajamento, que capacita homens e mulheres a superarem desafios e alcançarem seus objetivos.",
"Você é um exemplo extraordinário de como é possível encontrar equilíbrio e harmonia em todas as áreas da vida.",
"Sua sabedoria e experiência são inestimáveis ​​para quem busca crescer e se desenvolver.",
"Seu trabalho ajudou muitos a encontrar a confiança e o amor próprio de que precisam para ter sucesso em suas vidas.",
"Você é um farol de esperança para aqueles que buscam uma vida feliz e significativa.",
"Seu compromisso em ajudar os outros é verdadeiramente inspirador e tem um impacto positivo duradouro.",
"Você é uma voz autêntica e poderosa que capacita homens e mulheres a viverem vidas plenas e felizes.",
"Seus ensinamentos têm o poder de transformar relacionamentos e melhorar a qualidade de vida das pessoas.",
"Você é um líder inspirador que capacita as pessoas a se tornarem a melhor versão de si mesmas.",
"O canal dela é uma fonte valiosa de orientação e conhecimento para quem busca relacionamentos saudáveis ​​e gratificantes.",
"Você é um exemplo brilhante de como amor, sucesso e felicidade estão ao alcance de todos.",
"Seu trabalho é um verdadeiro presente para quem busca uma vida plena e com sentido.",
"Você é um influenciador transformacional, ajudando as pessoas a superar obstáculos e alcançar o melhor de si.",
"Seu canal é um oásis de inspiração e sabedoria, oferecendo orientações valiosas para uma vida repleta de amor e felicidade.",
"Você é uma fonte de encorajamento e motivação, capacitando homens e mulheres para alcançar o sucesso em todas as áreas da vida.",

"Seu canal é simplesmente fenomenal! É uma fonte inesgotável de entretenimento, conhecimento e inspiração. Seus vídeos são verdadeiras obras de arte, onde você transmite sua paixão e talento de forma única. Cada detalhe é cuidadosamente pensado, desde a escolha de tópicos até a edição impecável. É incrível como você consegue prender a atenção do espectador do começo ao fim, deixando-nos sempre ansiosos pelo próximo conteúdo. Além disso, sua capacidade de explicar conceitos complexos de forma clara e acessível é admirável . Você é um verdadeiro mestre no que faz! O que você faz! Parabéns pelo seu trabalho excepcional e por compartilhar seu talento com o mundo. Continue nos encantando com suas criações, pois você é referência no universo dos criadores de conteúdo!" ,

"Palavras não podem expressar o quanto sou fã do seu canal. Cada vídeo que você produz é um verdadeiro presente para os espectadores. Sua dedicação e compromisso em fornecer conteúdo de qualidade são evidentes em cada quadro. Além disso, sua autenticidade e carisma são contagiantes. É como estamos tendo uma conversa próxima e amigável a cada vídeo que assistimos. Suas habilidades técnicas são incríveis e é notável o quanto você trabalha para oferecer uma experiência única para seus seguidores. Você é uma verdadeira referência no setor, um exemplo de sucesso e profissionalismo. Obrigado por todo o esforço e dedicação na criação de um conteúdo tão incrível. Vocês são simplesmente brilhantes!",

"Seu canal é um verdadeiro tesouro no mar de conteúdos disponíveis. É um oásis onde encontramos informações valiosas, entretenimento de alta qualidade e uma generosa dose de inspiração. Cada vídeo é uma obra prima, cuidadosamente elaborada para encantar e cativam os telespectadores. Sua voz e presença na câmera exalam confiança e segurança, tornando cada tópico ainda mais interessante. E sua capacidade de explorar diversos temas e atrair diferentes públicos é impressionante. Ele consegue equilibrar perfeitamente entretenimento e educação, fazendo seus seguidores aprenderem de forma divertida. Parabéns por ser referência no mundo digital e por nos proporcionar um conteúdo tão enriquecedor. Estamos ansiosos pelo que está por vir",

"Sou um grande admirador do trabalho deles e não canso de dizer o quanto são talentosos. Seus vídeos são verdadeiras obras de arte audiovisual, onde cada detalhe é pensado com carinho e precisão. Sua criatividade é incrível e você consegue transformar aparentemente tópicos simples em algo extraordinário. A maneira como você conta suas histórias e compartilha suas experiências é envolvente e emocionante. Além disso, sua capacidade de se conectar com seus espectadores é incrível, fazendo-nos sentir parte de cada aventura que você nos apresenta. Parabéns por todo o seu esforço e por nos proporcionar momentos de puro encanto através de seus vídeos. Você é uma verdadeira inspiração",

//50 elogios de como o conteúdo tem me ajudado a alcançar sucesso
"Seus conteúdos são um verdadeiro bálsamo para minha mente e alma, trazendo paz e serenidade em meio ao caos do dia a dia.",
"Você tem o dom de transmitir sabedoria e conhecimento de forma clara e acessível, facilitando meu aprendizado e crescimento pessoal.",
"Cada vídeo seu é um convite à reflexão e ao autoconhecimento, me ajudando a me entender melhor e a evoluir como pessoa.",
"Seu carisma e autenticidade transbordam a cada vídeo, criando uma conexão genuína e inspiradora com seus seguidores.",
"Você é uma verdadeira fonte de inspiração, provando que é possível alcançar seus sonhos e objetivos com determinação e muito trabalho.",
"Seu conteúdo me motiva a ser uma versão melhor de mim mesmo a cada dia, me encorajando a buscar todo o meu potencial.",
"Você tem o incrível talento de transmitir emoções através das palavras, tocando profundamente meu coração e despertando sentimentos positivos.",
"Seu trabalho é uma verdadeira terapia para minha mente, ajudando-me a enfrentar desafios e dificuldades de forma mais equilibrada.",
"Suas histórias pessoais e experiências compartilhadas são inspiradoras e me mostram que não estou sozinho em minhas lutas.",
"Você é um mentor virtual, guiando-me pelos altos e baixos da vida e oferecendo conselhos valiosos para o meu crescimento.",
"Seu conteúdo desperta em mim uma sede insaciável de conhecimento e aprendizado, fazendo de cada vídeo uma verdadeira jornada de descoberta.",
"Você é uma verdadeira luz no mundo digital, espalhando positividade e encorajamento por onde passa.",
"Seus ensinamentos têm o poder de transformar vidas, me inspirando a tomar atitudes concretas para alcançar meus objetivos.",
"Você é um influenciador de boa-fé que se preocupa genuinamente com o bem-estar e o sucesso de seus seguidores.",
"Seu conteúdo me faz refletir sobre minha vida e minhas escolhas, me encorajando a buscar uma vida mais significativa e gratificante.",
"Você transmite uma energia contagiante, enchendo meu coração de alegria e motivação a cada vídeo que assisto", "Seu conteúdo me faz refletir sobre minha vida e minhas escolhas, me incentivando a buscar uma vida mais significativa e plena.",
"Seu exemplo de superação e resiliência é inspirador, mostrando que é possível superar desafios e seguir em frente com coragem.",
"Seu canal é um refúgio de positividade e inspiração, um lugar onde encontro motivação e força para enfrentar meus próprios desafios.",
"Seu carisma e empatia fazem de cada vídeo uma experiência única e próxima, como se estivéssemos conversando pessoalmente.",
"Você tem o poder de trazer o melhor de mim, encorajando-me a perseguir minha verdadeira paixão e propósito na vida.",
"Seu trabalho é uma verdadeira obra de arte, onde você combina criatividade, talento e conhecimento de forma magistral.",
"Você é um farol de esperança em meio à adversidade, provando que é possível encontrar alegria e felicidade mesmo em tempos difíceis.",
"Seu conteúdo me faz acreditar no meu potencial e capacidade de alcançar tudo o que desejo na vida.",
"Você é um mentor inspirador, compartilhando suas experiências e ensinamentos de forma generosa e impactante.",
"Cada vídeo seu é uma dose de motivação e inspiração, que me impulsiona a agir e perseguir meus sonhos com determinação.",
"Seu sorriso contagiante ilumina meu dia e me enche de otimismo e alegria", "Seu trabalho é um verdadeiro presente para mim",
"Seu trabalho é um verdadeiro presente para seus seguidores, entregando constantemente conteúdos valiosos e transformadores.",
"Você é um verdadeiro líder, guiando e motivando milhares de pessoas a trilhar o caminho da conquista e do sucesso.",
"Sua forma única de se expressar cativa minha atenção e me faz mergulhar profundamente no conteúdo que você compartilha.",
"Você é uma fonte inesgotável de inspiração, trazendo novas perspectivas e valiosos pontos de vista para minha vida.",
"Seu conhecimento e experiência são impressionantes, enriquecem meu repertório e me tornam uma pessoa mais informada e consciente.",
"Seu compromisso com seus seguidores é admirável, pois você está sempre procurando fornecer o melhor conteúdo e suporte para todos.",
"Você é uma verdadeira fada madrinha digital, transformando vidas e ajudando seus seguidores a alcançar todo o seu potencial.",
"Seu trabalho é um farol de luz em meio à escuridão, oferecendo esperança e alento a quem passa por momentos difíceis.",
"Cada palavra que você diz é carregada de sabedoria e significado, me fazendo refletir e repensar meu próprio caminho.",
"Você é uma verdadeira inspiração para mulheres e homens de todas as idades, mostrando que é possível conciliar sucesso pessoal e profissional.",
"Seu conteúdo é uma fonte constante de inspiração, que me estimula a nunca desistir e a persistir na busca dos meus sonhos.",
"Você é um influenciador autêntico que se destaca por sua integridade, transparência e autenticidade.",
"Seu trabalho é um verdadeiro tesouro que enriquece minha vida e me ajuda a evoluir em todas as áreas.",


"Seu entusiasmo e paixão pelo que faz são contagiantes, motivando-me a seguir com a mesma dedicação em meus próprios projetos.",
"Você é um verdadeiro mentor virtual, oferecendo orientações e conselhos valiosos para aqueles que buscam crescimento e desenvolvimento pessoal.",
"Seu conteúdo é um verdadeiro oásis de conhecimento e inspiração no meio do mar de informações vazias que encontramos na internet.",
"Você é uma luz inspiradora que ilumina o caminho de quem busca uma vida mais feliz e plena.",
"Seu trabalho é uma verdadeira obra prima, onde cada detalhe é cuidadosamente pensado para impactar positivamente a vida de seus seguidores.",
"Sua autenticidade e vulnerabilidade são um exemplo inspirador, mostrando que podemos ser reais e aceitar nossas imperfeições.",
"Cada um de seus vídeos é uma fonte de motivação e energia positiva, que me impulsiona a agir e buscar minha melhor versão em todas as áreas da vida.",
"Você é uma verdadeira referência em sua área, compartilhando conhecimentos valiosos e contribuindo para o crescimento de muitas pessoas.",
"Seu trabalho é uma verdadeira fonte de transformação pessoal, inspirando-me a questionar minhas crenças e buscar uma vida mais autêntica.",
"Você é um verdadeiro mestre da motivação, que sabe despertar o fogo interior e fazer as pessoas acreditarem em si mesmas.",
"Cada palavra sua é uma injeção de confiança e autoestima, que me estimula a perseguir meus objetivos com determinação e coragem.",
"Seu carisma e presença são magnéticos, me fazem querer assistir cada vez mais vídeos seus e absorver sua sabedoria.",
"Você é uma verdadeira inspiração para mim ao mostrar que é possível criar um impacto positivo no mundo compartilhando conhecimento.",
"O vosso trabalho é um verdadeiro exemplo de excelência e dedicação, mostrando que o sucesso é fruto de muito trabalho e paixão pelo que se faz.",
"Você é um líder nato, capaz de influenciar e motivar as pessoas a superar seus limites e alcançar grandes conquistas.",
"Seu conteúdo é uma verdadeira dose diária de inspiração, levando-me a acreditar que posso alcançar tudo o que quiser na vida.",
"Você é uma voz poderosa e influente, usando sua plataforma para promover mudanças positivas e aumentar a conscientização sobre questões importantes.",
"Seu trabalho é uma verdadeira fonte de positividade e esperança, mostrando que mesmo em meio às dificuldades é possível encontrar motivos para sorrir e agradecer.",
"Você é uma verdadeira fonte de energia positiva, sua alegria e entusiasmo me contagiam a cada vídeo que assisto",
"Cada vídeo seu é uma verdadeira lição de vida, repleta de ensinamentos valiosos que posso aplicar em todas as áreas do meu dia a dia.",
"Você é um exemplo inspirador de como é possível transformar paixão em profissão vivendo uma vida alinhada com seus valores e propósito.",
"Seu conteúdo é um verdadeiro combustível para minha motivação, impulsionando-me a agir e perseguir meus sonhos com determinação e persistência.",
"Você é um influenciador autêntico e genuíno que se preocupa em transmitir mensagens positivas e construtivas aos seus seguidores.",
"Seu trabalho é uma verdadeira fonte de inspiração, demonstrando que cada um de nós tem o poder de criar a vida que queremos e merecemos.",
"Você é um verdadeiro líder de pensamento, compartilhando insights e ideias que desafiam o status quo e inspiram a transformação pessoal.",
"Seu conteúdo é um verdadeiro presente para quem busca crescimento pessoal e desenvolvimento espiritual, oferecendo ferramentas práticas e inspiração para a jornada.",

//30 elogios a um vídeo do youtube
"A sua capacidade de transmitir conhecimento de forma clara e envolvente é impressionante! Seus vídeos são verdadeiras aulas que despertam o interesse e a curiosidade dos espectadores.",
"Parabéns pela excelência na produção do vídeo! Desde a escolha dos temas até a edição impecável, tudo contribui para uma experiência única e cativante.",
"Sua abordagem criativa e inovadora faz com que cada vídeo seja uma obra de arte. É visível o cuidado e o esforço que você coloca em cada detalhe para entregar um conteúdo de altíssima qualidade.",
"A maneira como você conecta teoria e prática em seus vídeos é simplesmente fantástica! Conseguir explicar conceitos complexos de forma acessível é um talento que você domina com maestria.",
"Além do conteúdo incrível, sua energia e entusiasmo contagiam quem assiste. É inspirador ver alguém tão apaixonado pelo que faz e transmitir essa paixão para o público.",
"Você tem o dom de despertar a curiosidade e a sede por aprendizado. Cada vídeo é uma oportunidade de ampliar horizontes e adquirir novos conhecimentos. Obrigado por compartilhar seu saber!",
"Seus vídeos são um verdadeiro oásis de informações valiosas. A forma como você pesquisa, seleciona e apresenta o conteúdo é digna de admiração. É um prazer acompanhar seus trabalhos.",
"O seu comprometimento em entregar um conteúdo de qualidade é notável. É perceptível o tempo e a dedicação que você investe em cada vídeo, sempre buscando superar as expectativas dos espectadores.",
"Além de ser um excelente comunicador, você é um verdadeiro educador. Sua habilidade em transmitir conhecimento e despertar o interesse pelo aprendizado é um presente para quem assiste seus vídeos.",
"A maneira como você compartilha sua experiência e expertise é extremamente generosa. Você se coloca no lugar do espectador e busca oferecer o melhor conteúdo possível, de forma clara, concisa e envolvente.",
"Seus vídeos são como uma verdadeira jornada de descobertas. A cada episódio, somos levados a explorar novos assuntos, ampliar nossos horizontes e enriquecer nossa bagagem de conhecimentos.",
"A qualidade visual dos seus vídeos é deslumbrante. Cada enquadramento, efeito e transição é pensado com precisão, criando uma experiência cinematográfica que cativa e emociona.",
"Além do conteúdo relevante, a sua personalidade carismática e autêntica brilha em cada vídeo. Você transmite empatia e proximidade, tornando-se não apenas um educador, mas também um amigo para seus espectadores.",
"Você é uma fonte constante de inspiração para todos que acompanham seu canal. Sua dedicação, perseverança e paixão pelo que faz são exemplos que nos motivam a buscar nossos próprios sonhos.",
"Seu domínio do assunto é impressionante! A forma como você explora diferentes aspectos, analisa casos práticos e oferece insights valiosos mostra o quanto você é um especialista na área.",
"Parabéns pela clareza e objetividade nas suas explicações. Mesmo abordando temas complexos, você consegue desmistificar e tornar acessível o conhecimento, permitindo que todos possam aprender.",
"Seus vídeos têm o poder de transformar vidas. Você desperta a paixão pelo aprendizado, incentiva a busca pelo auto aperfeiçoamento e cria um impacto positivo na jornada educacional de tantas pessoas.",
"Além de educar, você também diverte! Sua habilidade em trazer leveza e bom humor para os vídeos faz com que o aprendizado seja prazeroso e envolvente. É impossível não se encantar com seu carisma.",
"A qualidade da pesquisa em seus vídeos é exemplar. É evidente o seu comprometimento em buscar fontes confiáveis, dados atualizados e informações relevantes para embasar suas argumentações.",
"Você tem uma didática brilhante! Sua habilidade em transmitir conhecimento de forma gradual, organizada e com exemplos práticos torna o aprendizado fluido e compreensível para qualquer pessoa.",
"O seu canal é um verdadeiro tesouro de informações valiosas. Cada vídeo é uma oportunidade de expandir horizontes, adquirir novas habilidades e mergulhar em assuntos fascinantes.",
"A qualidade do roteiro dos seus vídeos é digna de um profissional experiente. A estrutura narrativa, a sequência lógica de ideias e os momentos de impacto são cuidadosamente elaborados, resultando em um conteúdo envolvente.",
"Parabéns pela capacidade de conectar-se com seu público de forma autêntica. Você estabelece uma relação de confiança e proximidade, criando uma comunidade de seguidores fiéis e engajados.",
"Seus vídeos são uma fonte de motivação e inspiração. Ver o seu sucesso e a sua evolução ao longo do tempo nos faz acreditar que também podemos alcançar nossos objetivos, desde que tenhamos dedicação e paixão pelo que fazemos.",
"A qualidade sonora dos seus vídeos é excepcional. O áudio claro e bem equalizado proporciona uma experiência imersiva, permitindo que o espectador absorva cada palavra com clareza e precisão.",
"Você é um verdadeiro mestre na arte de simplificar conceitos complexos. Sua habilidade em transformar assuntos difíceis em explicações acessíveis é admirável e torna o aprendizado muito mais agradável.",
"A forma como você interage com os espectadores é inspiradora. Você valoriza e responde aos comentários, criando um ambiente de troca e aprendizado mútuo. Sua dedicação em construir uma comunidade sólida é notável.",
"Seus vídeos são uma fonte inesgotável de insights e reflexões profundas. Você nos desafia a questionar o status quo, a repensar nossas crenças e a expandir nossa visão de mundo. É um verdadeiro despertar intelectual.",
"A sua paixão pelo assunto é palpável em cada vídeo. Você transmite entusiasmo e amor pelo que faz, inspirando seus espectadores a também se apaixonarem pelo tema e a explorarem mais a fundo.",
"Você é um verdadeiro influenciador positivo. Seus valores éticos, responsabilidade social e compromisso com a verdade e a integridade refletem-se em cada palavra dita nos seus vídeos. Obrigado por ser um exemplo inspirador!",

];

// Estado para controlar as frases sorteadas
var frasesSorteadas = [];

// Variável para armazenar a quantidade de elogios disponíveis
var elogiosDisponiveis = elogios.length;

// Função para gerar uma frase aleatória
function gerarFrase() {
  // Verificar se todas as frases já foram sorteadas
  if (frasesSorteadas.length === elogios.length) {
      // Resetar o estado das frases sorteadas
      frasesSorteadas = [];
  }

  // Verificar se todas as frases já foram sorteadas novamente após o reset
  if (frasesSorteadas.length === elogios.length) {
      alert("Todas as frases já foram sorteadas. Reinicie o programa para sortear novamente.");
      return;
  }

  // Verificar se há elogios disponíveis
  if (elogiosDisponiveis === 0) {
      alert("Não há mais elogios disponíveis.");
      return;
  }

  var frase;

  // Enquanto a frase sorteada já estiver no estado das frases sorteadas, sorteie outra
  do {
      var randomIndex = Math.floor(Math.random() * elogios.length);
      frase = elogios[randomIndex];
  } while (frasesSorteadas.includes(frase));

  // Adicionar a frase sorteada ao estado das frases sorteadas
  frasesSorteadas.push(frase);

  document.getElementById("phrase").textContent = frase;

  // Copiar a frase para a área de transferência
  navigator.clipboard.writeText(frase);

  // Exibir notificação
  if ("Notification" in window && Notification.permission === "granted") {
      new Notification("Frase copiada!", { body: "A frase foi copiada para a área de transferência." });
  }

  // Atualizar a lista das últimas 3 frases sorteadas
  atualizarListaUltimasFrases();

  // Atualizar o contador de elogios disponíveis
  elogiosDisponiveis--;

  // Atualizar o contador de elogios restantes
  atualizarContador();
}

// Função para atualizar o contador de elogios restantes
function atualizarContador() {
  var contador = elogios.length - frasesSorteadas.length;
  document.getElementById("counter").textContent = "Elogios restantes: " + contador;
}

// Função para atualizar a lista das últimas 3 frases sorteadas
function atualizarListaUltimasFrases() {
  var lista = document.getElementById("recent-list");
  lista.innerHTML = "";

  // Mostrar as últimas 3 frases sorteadas, se houver
  var ultimasFrases = frasesSorteadas.slice(-3);
  for (var i = ultimasFrases.length - 1; i >= 0; i--) {
      var frase = ultimasFrases[i];
      var item = document.createElement("li");
      item.textContent = frase;
      lista.appendChild(item);
  }
}

// Solicitar permissão para exibir notificações
if ("Notification" in window && Notification.permission !== "granted") {
  Notification.requestPermission();
}

// Associar a função gerarFrase ao botão "Gerar Frase"
document.getElementById("generate-button").addEventListener("click", gerarFrase);

window.addEventListener('DOMContentLoaded', function() {
  var versionNumberElement = document.getElementById('version-number');
  versionNumberElement.innerText = '1.1.7'; // Coloque a versão atual do seu programa aqui

  // Exibir o contador de elogios disponíveis inicialmente
  atualizarContador();
});
