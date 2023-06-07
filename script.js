// Array de frases elogiosas
var elogios = [
  "¡Tu canal es increíble! Siempre encuentro contenido interesante.",
  "Me encanta ver tus vídeos. Explicas de manera clara y envolvente.",
  "El contenido de tu canal es de altísima calidad. ¡Felicidades!",
  "Eres un gran influencer. Tu canal es una referencia para mí.",
  "No puedo dejar de ver tus vídeos. Siempre son cautivadores e informativos.",
  "Tu canal me inspira a aprender cada vez más. ¡Gracias por compartir tu conocimiento!",
  "Eres una fuente de inspiración para todos nosotros. ¡Sigue con el gran trabajo!",
  "¡Felicitaciones por el canal! Es un placer seguir tu contenido.",
  "Tus vídeos son muy útiles. Aprendo algo nuevo en cada uno.",
  "¡Tu canal es simplemente sensacional! ¡Continúa sorprendiéndonos!",
  "Tu trabajo es increíble. Eres un ejemplo a seguir.",
  "Tus vídeos me han ayudado mucho en mi crecimiento personal y profesional.",
  "Admiro tu dedicación y compromiso al compartir conocimiento.",
  "¡Tu canal es adictivo! Siempre estoy emocionado por ver los próximos vídeos.",
  "Eres un verdadero maestro en el arte de enseñar. ¡Felicitaciones por el canal!",
  "Tu canal marca la diferencia en mi vida. ¡Gracias por existir!",
  "Cada uno de tus vídeos es una dosis de motivación e inspiración para mí.",
  "Tienes un talento increíble para explicar conceptos complejos de manera sencilla.",
  "Tu canal es una mina de oro para quienes buscan conocimiento en el área.",
  "¡Felicitaciones por tu éxito! Te mereces todo el reconocimiento.",
  "Ver tus vídeos es un verdadero regalo para el aprendizaje.",
  "Eres un verdadero genio de la educación. Tu canal es un tesoro para todos nosotros.",
  "Tu contenido es tan bueno que debería enseñarse en las escuelas. ¡Felicitaciones!",
  "Ver tus vídeos es como hacer un viaje al mundo del conocimiento. ¡Gracias por compartir!",
  "Eres un verdadero líder en tu campo. Tu canal es una referencia para todos nosotros.",
  "¡Felicitaciones por compartir tanta sabiduría e inspiración! Tu canal es invaluable.",
  "Ver tus vídeos es un verdadero regalo para quienes buscan aprender y crecer.",
  "Eres un verdadero ícono en el área. Tu canal es un verdadero tesoro de conocimiento.",

   // 50 novos elogios adicionados
   "Eres una inspiración para mí. Tu dedicación es admirable.",
   "Tu creatividad es asombrosa. Cada vídeo es único y original.",
   "Tus palabras tienen un impacto positivo en mi vida. Gracias por inspirarme.",
   "Eres un modelo a seguir en tu industria. Admiro tu profesionalismo.",
   "La pasión que pones en tus vídeos es contagiosa. Me motiva a seguir adelante.",
   "Eres un experto en tu campo. Tu conocimiento es invaluable.",
   "Cada nuevo vídeo tuyo es una oportunidad para aprender algo valioso.",
   "Tu presencia en línea es refrescante y auténtica. Me siento conectado contigo.",
   "La calidad de tus vídeos es excepcional. Siempre me dejan con ganas de más.",
   "Eres un comunicador extraordinario. Tu habilidad para transmitir información es impresionante.",
   "Tus consejos y recomendaciones son siempre acertados. Confío en tu experiencia.",
   "Eres una persona admirable dentro y fuera de la pantalla. Tu integridad es ejemplar.",
   "Tu canal es una fuente constante de inspiración. Gracias por motivarme a alcanzar mis metas.",
   "Eres un líder en tu comunidad. Tus seguidores te valoran y respetan.",
   "La pasión que transmites en tus vídeos es inspiradora. Me inspiras a seguir mis propias pasiones.",
   "Tu canal es una joya escondida. Descubrirlo ha sido un verdadero tesoro para mí.",
   "Eres un visionario en tu industria. Tus ideas y perspectivas son innovadoras.",
   "La dedicación y el esfuerzo que pones en tus vídeos es evidente. Se nota tu compromiso con tu audiencia.",
   "Tu carisma en cámara es cautivador. Me siento atraído por tu energía positiva.",
   "Eres un motivador nato. Tus palabras me impulsan a creer en mí mismo.",
   "Tu canal es mi escape favorito. Siempre me transporta a un lugar de inspiración y aprendizaje.",
   "Eres un referente en tu nicho. Todos quieren seguir tus pasos.",
   "La calidad de producción de tus vídeos es excelente. Me sumerjo en cada uno de ellos.",
   "Eres un verdadero artista de la edición. Tus vídeos son visualmente impresionantes.",
   "La autenticidad que muestras en tus vídeos es refrescante. Me siento conectado contigo como persona.",
   "Eres un maestro en el arte de contar historias. Me mantienes enganchado de principio a fin.",
   "Tu capacidad para simplificar conceptos complejos es admirable. Haces que sea fácil de entender.",
   "Eres un faro de luz en el mundo en línea. Tu positividad y buen corazón son inspiradores.",
   "La dedicación y la pasión que pones en tu trabajo es evidente en cada vídeo que publicas.",
   "Eres un comunicador excepcional. Tus vídeos son claros, concisos y fáciles de seguir.",
   "Tu entusiasmo por tu tema es contagioso. Me motiva a aprender más al respecto.",
   "Eres un modelo a seguir en tu industria. Tu éxito es el resultado de tu arduo trabajo y talento.",
   "La diversidad de temas que cubres en tu canal es impresionante. Nunca deja de sorprenderme.",
   "Eres un verdadero profesional en lo que haces. Tu experiencia y conocimientos son invaluables.",
   "Tu canal es mi fuente de inspiración diaria. Gracias por alegrar mis días.",
   "Eres un verdadero líder de pensamiento. Tu perspectiva desafía y amplía mi forma de pensar.",
   "La dedicación que pones en cada vídeo es evidente. Se nota el amor que tienes por tu trabajo.",
   "Eres una persona genuina y auténtica. Me siento agradecido de tener acceso a tu contenido.",
   "Tu voz es relajante y reconfortante. Es un placer escucharte en cada uno de tus vídeos.",
   "Eres un verdadero experto en tu campo. Tu experiencia es invaluable para quienes te siguen.",
   "La pasión que sientes por lo que haces es palpable. Me inspira a seguir mis propias pasiones.",
   "Eres un verdadero influencer positivo. Tu impacto en la comunidad es significativo.",
   "Tu creatividad no tiene límites. Siempre me sorprendes con nuevas ideas y enfoques.",
   "Eres una fuente constante de conocimiento y sabiduría. Aprecio la información valiosa que compartes.",
   "La empatía que muestras hacia tu audiencia es conmovedora. Me siento comprendido y apoyado.",
   "Eres un maestro en tu campo. Tu capacidad para simplificar conceptos complejos es excepcional.",
   "Tu entusiasmo es contagioso. Me anima a perseguir mis propios sueños y metas.",
   "Eres un creador de contenido excepcional. Tu dedicación y atención al detalle son notables.",
   "La calidad y consistencia de tu contenido son impresionantes. Nunca decepcionas a tu audiencia.",
   "Eres un verdadero pionero en tu industria. Tus ideas y enfoques son innovadores y únicos.",
   "Tu canal es un oasis de inspiración. Siempre encuentro algo que me motiva a ser mejor.",
   "Eres un comunicador carismático. Tu presencia en cámara es cautivadora.",
   "La pasión que sientes por tu tema es evidente en cada vídeo. Me inspira a seguir mis propias pasiones.",

   //40 elogios adcionados a Pamela Raquel, canal Atitude Vermelha.
   "¡Eres una inspiración para todos los que te siguen en el canal Actitud Roja!",
   "Tu contenido en Actitud Roja es siempre relevante e informativo. Enhorabuena",
   "Tu pasión por lo que haces brilla en cada vídeo del canal Actitud Roja. Sigue así!",
   "Pamela Raquel, eres una auténtica líder en el mundo digital. Admiro tu determinación y tu éxito con Actitud Roja",
   "Tus vídeos en el canal Actitud Roja son una fuente constante de motivación y empoderamiento. Gracias",
   "Enhorabuena, Pamela Raquel, por construir una comunidad increíble en torno a Actitud Roja",
   "Tu carisma y autenticidad son cautivadores. Es un placer ver tus vídeos en Actitud Roja",
   "Tu capacidad para transmitir conocimientos de forma clara y atractiva es impresionante. Sigue compartiendo tu talento en Actitud Roja",
   "Pamela Raquel, eres una referencia en el mundo digital. Tu trabajo en Actitud Roja es increíble",
   "Tu impacto positivo en la vida de tus seguidores es evidente. Gracias por todo lo que haces en Actitud Roja", "Pamela Raquel, eres una referencia en el mundo digital",
   "Felicidades por crear un espacio seguro e inclusivo en Actitud Roja. Es una verdadera comunidad online",
   "Vuestra creatividad e innovación son admirables. Actitud Roja es siempre una sorpresa positiva",
   "Pamela Raquel, eres una persona de sólidos valores y principios. Es inspirador ver cómo los encarnas en Actitud Roja",
   "Tu duro trabajo y dedicación a Actitud Roja son reconocidos y apreciados por todos nosotros",
   "Tu autenticidad es lo que hace que Actitud Roja sea tan especial. Sigue siendo tú misma",
   "Enhorabuena por convertir tus pasiones en una carrera de éxito con Actitud Roja",
   "Tu sentido del estilo y de la moda es impecable. Siempre estoy deseando ver tus looks en Actitud Roja",
   "Pamela Raquel, eres un ejemplo de perseverancia y determinación. Actitud Roja es una prueba de ello",
   "Tus consejos y trucos son siempre útiles y prácticos. Gracias por compartirlos en Actitud Roja",
   "Enhorabuena por construir un canal tan influyente como Actitud Roja. Te mereces todo el éxito",
   "Tu energía contagiosa hace que cada vídeo de Actitud Roja sea aún más especial. Sigue brillando!",
   "Pamela Raquel, eres una verdadera emprendedora. Admiro tu visión y tus logros con Actitud Roja",
   "Tu compromiso para crear un impacto positivo en la vida de las personas es admirable. Actitud Roja marca la diferencia",
   "Enhorabuena por tu capacidad para conectar con tu público de forma auténtica y sincera. Eso es raro y valioso en Actitud Roja",
   "Tu valentía al compartir tus experiencias personales en Actitud Roja es inspiradora. Eres una verdadera inspiración",
   "Pamela Raquel, eres una voz importante en la comunidad online. Gracias por utilizar tu plataforma Actitud Roja para marcar la diferencia.",
   "Tus vídeos están siempre bien producidos y editados. Es un placer ver los contenidos de calidad de Actitud Roja.",
   "Enhorabuena por desafiar los estereotipos y promover la diversidad en Actitud Roja",
   "Tu pasión por la vida y las cosas que haces es contagiosa. Actitud Roja lo refleja brillantemente",
   "Pamela Raquel, eres una persona con un corazón generoso. Tu apoyo a tus seguidores en Actitud Roja es inestimable",
   "Tu sentido del humor hace que cada vídeo de Actitud Roja sea aún más divertido. Sigue haciéndonos reír!",
   "Enhorabuena por tu capacidad para equilibrar entretenimiento y educación en Actitud Roja. Tienes un talento increíble",
   "Tu autenticidad y transparencia son encomiables. Actitud Roja es un espacio genuino gracias a ti",
   "Pamela Raquel, eres una fuente de inspiración para todos los que desean seguir sus sueños. Gracias por compartir tu viaje en Actitud Roja",
   "Tu entusiasmo y pasión son contagiosos. Actitud Roja es un verdadero ejemplo de ello",
   "Felicidades por alcanzar hitos significativos con Actitud Roja. Te mereces cada logro",
   "Vuestra capacidad para reinventaros y adaptaros a los cambios es admirable. Actitud Roja siempre va por delante",
   "Pamela Raquel, eres una mentora virtual para muchas personas. El impacto de Actitud Roja es inconmensurable",
   "Tu profesionalidad y ética de trabajo son ejemplos a seguir. Actitud Roja es un reflejo de ello",
   "Enhorabuena por crear un canal tan increíble como Actitud Roja. El mundo necesita más creadores como tú",

   //40 elogios a Pamela Raquel
   "Tu canal es una verdadera fuente de inspiración para los hombres que desean desarrollar sus habilidades para relacionarse",
   "Tu compromiso para ayudar a los hombres a tener éxito con las mujeres es encomiable e impactante.",
   "Tu dedicación a compartir tus conocimientos y experiencia ha transformado la vida de muchos hombres.",
   "Eres una voz indispensable en la comunidad masculina, proporcionando una orientación valiosa y práctica.",
   "La forma en que abordas los retos del mundo de las relaciones es auténtica y atractiva.",
   "Tus consejos y sugerencias son siempre relevantes y aplicables, marcando la diferencia en la vida de los hombres que te siguen.",
   "Tu capacidad para transmitir información compleja de forma clara y accesible es impresionante.",
   "Tu canal es un refugio seguro para los hombres que buscan crecimiento personal y confianza.",
   "Tienes un don para motivar y animar a los hombres a convertirse en la mejor versión de sí mismos.",
   "Tu capacidad para conectar con tu audiencia masculina es notable, creando una comunidad unida y solidaria.",
   "Tus ideas sobre el comportamiento femenino son reveladoras y ayudan a los hombres a entender mejor a las mujeres",
   "Has sido mentor y guía para muchos hombres, ofreciéndoles apoyo y ánimo en su camino personal",
   "La forma en que aborda los retos a los que se enfrentan los hombres con empatía y comprensión es admirable.",
   "Tus vídeos son verdaderas pepitas de sabiduría, llenos de consejos prácticos y estrategias eficaces.",
   "Tu autenticidad y sinceridad son cualidades que resuenan en tu público masculino.",
   "Eres un ejemplo de cómo es posible construir relaciones sanas y duraderas, inspirando a otros a hacer lo mismo.",
   "Tu trabajo ha ayudado a muchos hombres a superar sus inseguridades y a confiar en sí mismos.",
   "Tu pasión por ayudar a los hombres a tener éxito en sus relaciones es evidente en cada vídeo que produces.",
   "Sois una voz indispensable en la lucha por la igualdad de género, demostrando que hombres y mujeres pueden relacionarse de forma sana y respetuosa.",
   "Tu compromiso por ofrecer contenidos de calidad y relevantes es notable, haciendo de tu canal un referente en la comunidad masculina.",
   "Habéis sido un faro de esperanza para muchos hombres que se sentían perdidos en el mundo de las relaciones.",
   "A través de tu canal, estás ayudando a romper estereotipos y a construir relaciones más sanas e igualitarias.",
   "Su carisma y la atención que presta a sus seguidores hacen de su canal un lugar acogedor y alentador.",
   "Sus consejos prácticos han ayudado a innumerables hombres a ganar confianza y tener éxito en las citas y las relaciones.",
   "Su presencia online es una verdadera fuente de inspiración y motivación para los hombres que quieren mejorar su vida amorosa.",
   "Su trabajo está impactando positivamente en la vida de muchos hombres, proporcionándoles la oportunidad de crecer y evolucionar.",
   "Eres un influencer poderoso y respetado, que utiliza su plataforma para ayudar a los hombres a alcanzar su máximo potencial.",
   "Tus vídeos son verdaderas pepitas de sabiduría, que ofrecen valiosas ideas y consejos prácticos para los hombres.",
   "Tu valentía al abordar temas delicados y desafiantes es admirable, demostrando que es posible crecer y aprender de las experiencias.",
   "Eres un líder en el campo del desarrollo personal masculino, empoderando a los hombres para que tengan relaciones sanas y felices.",
   
   //50 elogios ao canal e ao trabalho em geral da Pamela Raquel
   "Sus vídeos son una fuente constante de inspiración y motivación para hombres y mujeres.", 
  "Su enfoque auténtico y empático es un verdadero diferenciador en el campo del desarrollo personal.", 
  "Usted tiene el don de transmitir mensajes poderosos que resuenan en las personas, generando transformaciones positivas en sus vidas.", 
  "Tu canal es un faro de esperanza, que ayuda a muchos a encontrar la felicidad y el propósito en su vida diaria.", 
  "Tu sinceridad y vulnerabilidad al compartir tus propias experiencias inspiran a otros a hacer lo mismo.", 
  "Tienes un talento increíble para traducir conceptos complejos en consejos prácticos y aplicables.", 
  "Tus enseñanzas van más allá de los problemas de pareja para abarcar todos los aspectos de la vida y el crecimiento personal.", 
  "Tu dedicación a ayudar a las personas a alcanzar el éxito en el amor, la familia, el empleo y la vida es admirable.", 
  "Eres un mentor inspirador, que empodera a hombres y mujeres para que se conviertan en la mejor versión de sí mismos.", 
  "Tu trabajo tiene el poder de transformar vidas, llevando a la gente a encontrar la felicidad y la plenitud en todos los ámbitos.", 
  "Eres una voz de sabiduría y guía, que ofrece valiosos consejos para superar retos y alcanzar metas.", 
  "Tu autenticidad y empatía crean un entorno seguro para que la gente se abra y crezca.", 
  "Eres un notable influenciador, que utiliza su plataforma para promover un cambio positivo en la vida de las personas.", 
  "Tu carisma y preocupación por tu audiencia son evidentes en cada vídeo, creando una conexión genuina con tus seguidores.", 
  "Tus ideas sobre las relaciones han ayudado a muchos a construir conexiones más fuertes y significativas.", 
  "Eres una fuente fiable de sabiduría y consejos, siempre aportando una perspectiva única y esclarecedora.", 
  "Tu trabajo es una brújula para aquellos que buscan el autodescubrimiento y el crecimiento personal.", 
  "Tu pasión por ayudar a la gente a encontrar la felicidad es contagiosa e inspiradora.", 
  "Tienes el poder de motivar y empoderar a las personas, guiándolas hacia una vida plena y gratificante.", 
  "Tu canal es un tesoro de recursos y herramientas para el éxito personal y las relaciones sanas.", 
  "Eres un líder visionario que ofrece una guía de confianza para alcanzar la felicidad y el éxito en todos los ámbitos de la vida.", 
  "Tus consejos prácticos y procesables tienen el poder de transformar vidas.", 
  "Usted ha sido una presencia constante e inspiradora para aquellos que buscan un cambio positivo.", 
  "Sus vídeos son un recordatorio constante de que todos merecemos una vida feliz y plena.", 
  "Tu dedicación a ayudar a la gente a encontrar la felicidad es admirable y verdaderamente inspiradora.", 
  "Eres una fuerza positiva en el mundo, que empodera a hombres y mujeres para construir relaciones sanas y significativas.", 
  "Tu trabajo es una luz brillante que guía a la gente hacia una vida llena de amor y éxito.", 
  "Tienes el don de transmitir mensajes complejos de forma clara y comprensible para todos.", 
  "Tu energía contagiosa y tu positividad son un verdadero regalo para los que siguen tu canal.", 
  "Eres un ejemplo inspirador de cómo es posible alcanzar el éxito y la felicidad en todos los ámbitos de la vida.", 
  "Tu trabajo tiene un impacto duradero, ayudando a la gente a construir relaciones sanas y duraderas.", 
  "Has sido un mentor increíble para muchos, guiándoles hacia una vida llena de amor y satisfacción.", 
  "Su dedicación a ayudar a los demás es evidente en cada vídeo, demostrando que realmente se preocupa por el bienestar de las personas.", 

  "Tus consejos prácticos y perspicaces tienen el poder de transformar vidas y crear cambios positivos.", 
  "Eres una inspiración para todos los que buscan encontrar la felicidad y el éxito en sus vidas.", 
  "Tu canal es una fuente de motivación y aliento, que empodera a hombres y mujeres para superar retos y alcanzar sus metas.", 
  "Eres un ejemplo extraordinario de cómo es posible encontrar el equilibrio y la armonía en todos los ámbitos de la vida.", 
  "Su sabiduría y experiencia son inestimables para quienes buscan crecer y desarrollarse.", 
  "Tu trabajo ha ayudado a muchos a encontrar la confianza y el amor propio necesarios para alcanzar el éxito en sus vidas.", 
  "Eres un faro de esperanza para los que buscan una vida feliz y con sentido.", 
  "Tu compromiso de ayudar a los demás es realmente inspirador y tiene un impacto positivo duradero.", 
  "Eres una voz auténtica y poderosa que empodera a hombres y mujeres para vivir vidas plenas y felices.", 
  "Tus enseñanzas tienen el poder de transformar las relaciones y mejorar la calidad de vida de las personas.", 
  "Eres un líder inspirador que empodera a las personas para que se conviertan en la mejor versión de sí mismas.", 
  "Su canal es una valiosa fuente de orientación y conocimiento para aquellos que buscan relaciones sanas y satisfactorias.", 
  "Eres un brillante ejemplo de cómo el amor, el éxito y la felicidad están al alcance de todos.", 
  "Tu trabajo es un verdadero regalo para aquellos que están en busca de una vida plena y significativa.", 
  "Eres una influencer transformadora, que ayuda a la gente a superar obstáculos y alcanzar su mejor yo.", 
  "Tu canal es un oasis de inspiración y sabiduría, que ofrece una valiosa guía para una vida llena de amor y felicidad.", 
  "Eres una fuente de ánimo y motivación, que empodera a hombres y mujeres para alcanzar el éxito en todos los ámbitos de la vida.", 
   
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
    new Notification("Frase copiada!", { body: "La frase se ha copiado al portapapeles." });
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

// Associar a função gerarFrase ao botão "Generar Frase"
document.getElementById("generate-button").addEventListener("click", gerarFrase);

window.addEventListener('DOMContentLoaded', function() {
  var versionNumberElement = document.getElementById('version-number');
  versionNumberElement.innerText = '1.1.2'; // Coloque a versão atual do seu programa aqui

  // Exibir o contador de elogios disponíveis inicialmente
  atualizarContador();
});
