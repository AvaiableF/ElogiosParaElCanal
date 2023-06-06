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
          
 ];

// Estado para controlar as frases sorteadas
var frasesSorteadas = [];

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