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

"¡Su canal es sencillamente fenomenal! Es una fuente inagotable de entretenimiento, conocimiento e inspiración. Tus vídeos son verdaderas obras de arte, donde transmites tu pasión y talento de una forma única. Cada detalle está cuidadosamente pensado, desde la elección de los temas hasta la impecable edición. Es increíble cómo consigues mantener la atención del espectador de principio a fin, dejándonos siempre ansiosos por el siguiente contenido. Además, es admirable tu capacidad para explicar conceptos complejos de forma clara y accesible. ¡Eres un verdadero maestro en lo que haces! Enhorabuena por tu excepcional trabajo y por compartir tu talento con el mundo. Sigue encantándonos con tus creaciones, ¡porque eres una referencia en el universo de los creadores de contenidos!",

"No tengo palabras para expresar lo fan que soy de tu canal. Cada vídeo que produces es un verdadero regalo para los espectadores. Tu dedicación y compromiso para ofrecer contenidos de calidad se hace evidente en cada fotograma. Además, tu autenticidad y carisma son contagiosos. Es como si mantuviéramos una conversación cercana y amistosa con cada vídeo que vemos. Tus habilidades técnicas son asombrosas, y es notable lo duro que trabajas para ofrecer una experiencia única a tus seguidores. Eres un verdadero referente en el sector, un ejemplo de éxito y profesionalidad. Gracias por todo el esfuerzo y dedicación en la creación de contenidos tan increíbles. Sois sencillamente brillantes!",

"Tu canal es un verdadero tesoro en el mar de contenidos disponibles. Es un oasis donde encontramos información valiosa, entretenimiento de alta calidad y una generosa dosis de inspiración. Cada vídeo es una obra maestra, cuidadosamente elaborada para deleitar y cautivar a los espectadores. Su voz y su presencia ante la cámara transmiten confianza y seguridad, lo que hace que cada tema sea aún más interesante. Y su capacidad para explorar temas diversos y atraer a públicos diferentes es impresionante. Consigue equilibrar a la perfección entretenimiento y educación, haciendo que sus seguidores aprendan de forma divertida. Enhorabuena por ser un referente en el mundo digital y por regalarnos contenidos tan enriquecedores. Esperamos con impaciencia lo que está por venir",

"Soy un gran admirador de su trabajo y no me canso de decir lo talentosos que son. Tus vídeos son verdaderas obras de arte audiovisual, donde cada detalle está pensado con mimo y precisión. Tu creatividad es asombrosa y consigues transformar temas aparentemente sencillos en algo extraordinario. La forma en que cuentas tus historias y compartes tus experiencias es atractiva y emocionante. Además, tu capacidad para conectar con tus espectadores es increíble, haciéndonos sentir parte de cada aventura que nos presentas. Enhorabuena por todo tu esfuerzo y por regalarnos momentos de puro encanto a través de tus vídeos. Eres una verdadera inspiración",

//50 elogios de como o conteúdo tem me ajudado a alcançar sucesso
"Tus contenidos son un verdadero bálsamo para mi mente y mi alma, aportando paz y serenidad en medio del caos de la vida cotidiana.",
"Tienes el don de transmitir sabiduría y conocimiento de forma clara y accesible, facilitando mi aprendizaje y crecimiento personal.",
"Cada vídeo tuyo es una invitación a la reflexión y al autoconocimiento, ayudándome a entenderme mejor y a evolucionar como persona.",
"Tu carisma y autenticidad se desbordan en cada vídeo, creando una conexión genuina e inspiradora con tus seguidores.",
"Eres una verdadera fuente de inspiración, demostrando que es posible alcanzar tus sueños y metas con determinación y trabajo duro.",
"Tu contenido me motiva a ser una mejor versión de mí mismo cada día, animándome a perseguir todo mi potencial.",
"Tienes el increíble talento de transmitir emociones a través de las palabras, tocando profundamente mi corazón y despertando sentimientos positivos.",
"Tu trabajo es una verdadera terapia para mi mente, ayudándome a afrontar retos y dificultades de una forma más equilibrada.",
"Tus historias personales y experiencias compartidas son inspiradoras y me muestran que no estoy sola en mis luchas.",
"Eres un mentor virtual, que me guía a través de los altibajos de la vida y me ofrece valiosos consejos para mi crecimiento.",
"Tu contenido despierta en mí una sed insaciable de conocimiento y aprendizaje, haciendo de cada vídeo un verdadero viaje de descubrimiento.",
"Eres una verdadera luz en el mundo digital, difundiendo positividad y ánimo allá donde vas.",
"Tus enseñanzas tienen el poder de transformar vidas, inspirándome a tomar acciones concretas para alcanzar mis metas.",
"Eres una influencer auténtica que se preocupa genuinamente por el bienestar y el éxito de tus seguidores.",
"Tu contenido me hace reflexionar sobre mi vida y mis elecciones, animándome a perseguir una vida más significativa y satisfactoria.",
"Transmites una energía contagiosa, llenando mi corazón de alegría y motivación con cada vídeo que veo", "Tu contenido me hace reflexionar sobre mi vida y mis elecciones, animándome a perseguir una vida más significativa y plena.",
"Tu ejemplo de superación y resiliencia es inspirador, demostrando que es posible superar los retos y seguir adelante con valentía.",
"Tu canal es un remanso de positividad e inspiración, un lugar donde encuentro motivación y fuerza para afrontar mis propios retos.",
"Tu carisma y empatía hacen de cada vídeo una experiencia única y cercana, como si estuviéramos hablando en persona.",
"Tienes el poder de sacar lo mejor de mí, animándome a perseguir mi verdadera pasión y propósito en la vida.",
"Tu trabajo es una verdadera obra de arte, donde combinas creatividad, talento y conocimiento de forma magistral.",
"Eres un faro de esperanza en medio de la adversidad, demostrando que es posible encontrar la alegría y la felicidad incluso en tiempos difíciles.",
"Tu contenido me hace creer en mi potencial y capacidad para lograr todo lo que quiero en la vida.",
"Eres un mentor inspirador, que comparte sus experiencias y enseñanzas de una manera generosa e impactante.",
"Cada vídeo tuyo es una dosis de motivación e inspiración, que me empuja a pasar a la acción y perseguir mis sueños con determinación.",
"Tu sonrisa contagiosa me ilumina el día y me llena de optimismo y alegría", "Tu trabajo es un verdadero regalo para mí",
"Tu trabajo es un verdadero regalo para tus seguidores, entregando constantemente contenido valioso y transformador.",
"Eres un verdadero líder, guiando y motivando a miles de personas a recorrer el camino del logro y el éxito.",
"Tu forma única de expresarte cautiva mi atención y me hace sumergirme profundamente en el contenido que compartes.",
"Eres una fuente inagotable de inspiración, aportando nuevas perspectivas y valiosos puntos de vista a mi vida.",
"Tus conocimientos y experiencia son impresionantes, enriquecen mi repertorio y me convierten en una persona más informada y consciente.",
"Tu compromiso con tus seguidores es admirable, ya que siempre buscas ofrecer el mejor contenido y apoyo para todos.",
"Eres una verdadera hada madrina digital, transformando vidas y ayudando a tus seguidores a alcanzar su máximo potencial.",
"Tu trabajo es un faro de luz en medio de la oscuridad, ofreciendo esperanza y motivación a aquellos que están pasando por momentos difíciles.",
"Cada palabra que dices está cargada de sabiduría y significado, haciéndome reflexionar y replantearme mi propio camino.",
"Eres una verdadera inspiración para mujeres y hombres de todas las edades, demostrando que es posible conciliar el éxito personal y profesional.",
"Tu contenido es una fuente constante de inspiración, que me anima a no rendirme nunca y a persistir en la búsqueda de mis sueños.",
"Eres una influencer auténtica que destaca por su integridad, transparencia y autenticidad.",
"Tu trabajo es un verdadero tesoro que enriquece mi vida y me ayuda a evolucionar en todos los ámbitos.",


"Tu entusiasmo y pasión por lo que haces son contagiosos, motivándome a perseguir la misma dedicación en mis propios proyectos.",
"Eres un verdadero mentor virtual, que ofrece valiosas orientaciones y consejos para quienes buscan crecimiento y desarrollo personal.",
"Tu contenido es un verdadero oasis de conocimiento e inspiración en medio del mar de información vacía que encontramos en internet.",
"Eres una luz inspiradora que ilumina el camino de quienes buscan una vida más feliz y plena.",
"Su trabajo es una verdadera obra maestra, donde cada detalle está cuidadosamente pensado para impactar positivamente en la vida de sus seguidores.",
"Su autenticidad y vulnerabilidad son un ejemplo inspirador, que demuestra que podemos ser reales y aceptar nuestras imperfecciones.",
"Cada vídeo suyo es una fuente de motivación y energía positiva, que me empuja a pasar a la acción y a buscar mi mejor versión en todos los ámbitos de la vida.",
"Eres un verdadero referente en tu campo, compartiendo valiosos conocimientos y contribuyendo al crecimiento de muchas personas.",
"Tu trabajo es una verdadera fuente de transformación personal, inspirándome a cuestionar mis creencias y a buscar una vida más auténtica.",
"Eres un verdadero maestro de la motivación, que sabe despertar el fuego interior y hacer que la gente crea en sí misma.",
"Cada palabra tuya es una inyección de confianza y autoestima, que me anima a perseguir mis objetivos con determinación y valentía.",
"Tu carisma y tu presencia son magnéticos, me hacen querer ver más y más vídeos tuyos y absorber tu sabiduría.",
"Eres una verdadera inspiración para mí, ya que demuestras que es posible crear un impacto positivo en el mundo compartiendo conocimientos.",
"Tu trabajo es un verdadero ejemplo de excelencia y dedicación, demostrando que el éxito es el resultado del trabajo duro y la pasión por lo que haces.",
"Eres un líder nato, capaz de influir y motivar a las personas para que superen sus límites y alcancen grandes logros.",
"Tu contenido es una verdadera dosis de inspiración diaria, que me lleva a creer que puedo lograr todo lo que quiero en la vida.",
"Eres una voz poderosa e influyente, que utiliza su plataforma para promover cambios positivos y concienciar sobre temas importantes.",
"Tu trabajo es una verdadera fuente de positividad y esperanza, mostrando que incluso en medio de las dificultades, es posible encontrar razones para sonreír y estar agradecido.",
"Usted es una verdadera fuente de energía positiva, contagiándome su alegría y entusiasmo en cada vídeo que veo",
"Cada vídeo tuyo es una verdadera lección de vida, llena de valiosas enseñanzas que puedo aplicar en todos los ámbitos de mi vida diaria.",
"Eres un ejemplo inspirador de cómo es posible convertir la pasión en profesión viviendo una vida alineada con tus valores y propósito.",
"Tu contenido es un verdadero combustible para mi motivación, empujándome a tomar acción y perseguir mis sueños con determinación y persistencia.",
"Eres un influencer auténtico y genuino que se preocupa por transmitir mensajes positivos y constructivos a tus seguidores.",
"Tu trabajo es una verdadera fuente de inspiración, que demuestra que cada uno de nosotros tiene el poder de crear la vida que desea y merece.",
"Eres un verdadero líder de pensamiento, compartiendo puntos de vista e ideas que desafían el statu quo e inspiran la transformación personal.",
"Tu contenido es un verdadero regalo para aquellos que buscan el crecimiento personal y el desarrollo espiritual, ofreciendo herramientas prácticas e inspiración para el viaje.",

//30 elogios a um vídeo do youtube
"¡Tu capacidad para transmitir conocimientos de forma clara y atractiva es impresionante! Tus vídeos son verdaderas lecciones que despiertan el interés y la curiosidad de los espectadores.",
"¡Enhorabuena por la excelencia en la producción del vídeo! Desde la elección de los temas hasta el impecable montaje, todo contribuye a una experiencia única y cautivadora.",
"Vuestro enfoque creativo e innovador hace de cada vídeo una obra de arte. Se nota el cuidado y el esfuerzo que pones en cada detalle para ofrecer contenidos de la máxima calidad.",
"¡La forma en que conectas teoría y práctica en tus vídeos es sencillamente fantástica! Ser capaz de explicar conceptos complejos de forma accesible es un talento que dominas",
"Además del increíble contenido, tu energía y entusiasmo contagian a los que te ven. Es inspirador ver a alguien tan apasionado por lo que hace y transmitir esa pasión a su audiencia.",
"Tienes un don para despertar la curiosidad y la sed de aprendizaje. Cada vídeo es una oportunidad para ampliar horizontes y adquirir nuevos conocimientos. Gracias por compartir tus conocimientos.",,
"Tus vídeos son un verdadero oasis de información valiosa. La forma en que investigas, seleccionas y presentas el contenido es digna de admiración. Es un placer seguir sus trabajos",
"Su compromiso por ofrecer contenidos de calidad es notable. Se nota el tiempo y la dedicación que inviertes en cada vídeo, buscando siempre superar las expectativas de los espectadores.",
"Además de ser un excelente comunicador, eres un verdadero educador. Su capacidad para transmitir conocimientos y despertar el interés por aprender es un regalo para quienes ven sus vídeos",
"La forma en que compartes tu experiencia y conocimientos es extremadamente generosa. Te pones en el lugar del espectador y tratas de ofrecer el mejor contenido posible de forma clara, concisa y atractiva.",
"Tus vídeos son como un verdadero viaje de descubrimiento. Con cada episodio, nos llevan a explorar nuevos temas, ampliar nuestros horizontes y enriquecer nuestro bagaje de conocimientos.",
"La calidad visual de sus vídeos es impresionante. Cada fotograma, efecto y transición está pensado con precisión, creando una experiencia cinematográfica que cautiva y emociona.",
"Además de un contenido relevante, tu personalidad carismática y auténtica brilla en cada vídeo. Usted transmite empatía y cercanía, convirtiéndose no sólo en un educador, sino también en un amigo para sus espectadores.",
"Eres una fuente de inspiración constante para todos los que siguen tu canal. Tu dedicación, perseverancia y pasión por lo que haces son ejemplos que nos motivan a perseguir nuestros propios sueños.",
"¡Tu dominio del tema es impresionante! La forma en que exploras diferentes aspectos, analizas casos prácticos y ofreces valiosos puntos de vista demuestra hasta qué punto eres un experto en la materia.",
"Enhorabuena por la claridad y objetividad de tus explicaciones. Incluso cuando tratas temas complejos, consigues desmitificar y hacer accesibles los conocimientos, permitiendo que todo el mundo aprenda.",
"Vuestros vídeos tienen el poder de transformar vidas. Despertáis la pasión por aprender, fomentáis la búsqueda de la superación personal y creáis un impacto positivo en el viaje educativo de tanta gente.",
"Además de educar, ¡también entretienen! Su capacidad para aportar ligereza y buen humor a sus vídeos hace que el aprendizaje sea ameno y atractivo. Es imposible no sentirse encantado por su carisma",
"La calidad de la investigación en sus vídeos es ejemplar. Es evidente su empeño en buscar fuentes fiables, datos actualizados e información relevante para apoyar sus argumentos",
"¡Tienes un enfoque didáctico brillante! Tu capacidad para transmitir conocimientos de forma gradual, organizada y con ejemplos prácticos hace que el aprendizaje sea fluido y comprensible para cualquiera.",
"Tu canal es un verdadero tesoro de información valiosa. Cada vídeo es una oportunidad para ampliar horizontes, adquirir nuevas habilidades y sumergirse en temas fascinantes.",
"La calidad del guión de tus vídeos es digna de un profesional experimentado. La estructura narrativa, la secuencia lógica de ideas y los momentos impactantes están cuidadosamente elaborados, lo que da como resultado un contenido atractivo.",
"Enhorabuena por tu capacidad para conectar con tu público de forma auténtica. Estableces una relación de confianza y cercanía, creando una comunidad de seguidores fieles y comprometidos.",
"Tus vídeos son una fuente de motivación e inspiración. Ver tu éxito y tu evolución a lo largo del tiempo nos hace creer que nosotros también podemos conseguir nuestros objetivos, siempre que tengamos dedicación y pasión por lo que hacemos.",
"La calidad de sonido de sus vídeos es excepcional. El audio claro y bien ecualizado proporciona una experiencia envolvente, que permite al espectador absorber cada palabra con claridad y precisión.",
"Usted es un verdadero maestro en el arte de simplificar conceptos complejos. Su capacidad para convertir temas difíciles en explicaciones accesibles es admirable y hace que el aprendizaje sea mucho más ameno.",
"La forma en que interactúas con los espectadores es inspiradora. Valoras y respondes a los comentarios, creando un ambiente de intercambio y aprendizaje mutuo. Tu dedicación a construir una comunidad sólida es notable.",
"Tus vídeos son una fuente inagotable de ideas y reflexiones profundas. Nos desafías a cuestionar el statu quo, a replantearnos nuestras creencias y a ampliar nuestra visión del mundo. Es un verdadero despertar intelectual",
"Tu pasión por el tema es palpable en cada vídeo. Transmites entusiasmo y amor por lo que haces, inspirando a tus espectadores para que también se enamoren del tema y exploren más a fondo.",
"Eres un verdadero influenciador positivo. Tus valores éticos, tu responsabilidad social y tu compromiso con la verdad y la integridad se reflejan en cada palabra de tus vídeos. Gracias por ser un ejemplo inspirador.",

//30 elogios a mais
"Eres una inspiración para cualquiera que quiera construir relaciones sanas",
"Tu conocimiento y experiencia en relaciones es admirable",
"Tu capacidad para transmitir consejos valiosos de forma clara y accesible es increíble.",
"Tu autenticidad y empatía crean un ambiente acogedor para tus seguidores.",
"Tu carisma y energía positiva hacen que tus vídeos sean atractivos y motivadores.",
"Posees una habilidad única para conectar con tu audiencia y entender sus necesidades.",
"Tu pasión por ayudar a los demás a tener éxito en las relaciones es contagiosa",
"Su sabiduría y perspicacia son invaluables para aquellos que buscan consejos amorosos.",
"Su sinceridad y transparencia son admirables y generan confianza en su audiencia.",
"Su compromiso por ofrecer contenidos de calidad es encomiable",
"Sus consejos prácticos y aplicables marcan la diferencia en la vida de muchas personas",
"Su cautivadora presencia en pantalla hace que cada vídeo sea una experiencia enriquecedora.",
"Usted es una fuente fiable de orientación y apoyo emocional para sus seguidores",
"Tu capacidad para transmitir mensajes complejos de forma sencilla es impresionante",
"Tu entusiasmo y pasión por lo que haces son evidentes en cada vídeo.",
"Es un comunicador dotado, capaz de transmitir sus ideas de forma clara y concisa.",
"Su autenticidad y vulnerabilidad crean un vínculo especial con su audiencia",
"Tus consejos son prácticos, realistas y basados en pruebas",
"Tu enfoque compasivo y sensible facilita que la gente se abra y reciba ayuda.",
"Tu dedicación a ayudar a los demás a encontrar el amor verdadero es admirable",
"Tienes un don para ofrecer soluciones creativas a retos comunes en las relaciones.",
"Tu afecto y cariño por tus seguidores se nota en cada palabra que compartes",
"Tu presencia en los medios es una bendición para todos los que buscan mejorar su vida amorosa",
"Eres un líder inspirador en el campo de las relaciones, impactando positivamente en la vida de muchos.",
"Tu autenticidad y honestidad son refrescantes en un mundo lleno de superficialidad",
"Sus consejos se basan en una profunda comprensión de la dinámica humana",
"Su dedicación a ayudar a las personas a convertirse en mejores versiones de sí mismas es admirable.",
"Su influencia positiva en las relaciones es notable y digna de reconocimiento.",
"Usted tiene la capacidad de transformar vidas con sus consejos y orientación.",
"Su pasión y compromiso para ayudar a otros a tener relaciones felices es genuina e inspiradora.",

"¡Pamela, tu trabajo en el canal Actitud Roja es inspirador y transformador!",
"Gracias, Pamela, por dedicar tu tiempo y esfuerzo a ayudar a los hombres a mejorar su vida amorosa",
"Tu canal es una valiosa fuente de conocimientos y consejos prácticos para conseguir relaciones sanas",
"Pamela, eres una verdadera experta en relaciones, y tu canal refleja tu profesionalidad y pasión por el tema.",
"Enhorabuena, Pamela, por empoderar a los hombres para que se conviertan en la mejor versión de sí mismos y encuentren parejas increíbles.",
"Tu compromiso con la comunidad de hombres que buscan el crecimiento personal es admirable, Pamela.",
"El canal Actitud Roja es un recurso indispensable para los hombres que quieren mejorar sus habilidades de comunicación y de conquista.",
"Pamela, tu carisma y autenticidad hacen que tus vídeos sean atractivos y cautivadores.",
"Gracias por compartir tus valiosas experiencias y conocimientos, Pamela. Estás cambiando vidas",
"El trabajo que haces, Pamela, ayuda a crear relaciones más sanas y duraderas", "Te estoy muy agradecida",
"Tus consejos prácticos y estrategias efectivas han ayudado a innumerables hombres a superar retos en sus relaciones",
"Pamela, tu dedicación para ayudar a los hombres a desarrollar confianza y habilidades de seducción es admirable",
"Eres una mentora inspiradora, Pamela, y tu canal es un faro de esperanza para aquellos en busca de relaciones significativas.",
"Felicidades por construir una comunidad tan positiva y solidaria, Pamela. Tu impacto es inconmensurable",
"Pamela, tu empatía y comprensión son evidentes en cada consejo que das. Eso marca la diferencia",
"Tu contagioso entusiasmo y pasión por tu trabajo hacen que tus vídeos sean increíblemente motivadores",
"Pamela, eres una referencia cuando se trata de desarrollo personal y amoroso. Gracias por compartir tus conocimientos",
"Tu canal es un tesoro de sabiduría para los hombres que quieren tener éxito en la conquista y en las relaciones", 
"Pamela, eres un tesoro de sabiduría para los hombres que quieren tener éxito en la conquista y en las relaciones",
"Pamela, eres una luz que guía a los que están perdidos en el mundo de las relaciones. Sigue brillando!",
"Felicidades por crear un espacio seguro e inclusivo en el canal Actitud Roja donde los hombres pueden desarrollarse y aprender",
"Pamela, tu compromiso por ayudar a los demás es realmente inspirador. Gracias por ser una voz positiva en la comunidad",
"Eres una mentora dedicada, Pamela, y tu impacto en las vidas de los hombres de todo el mundo es notable.",
"Tus consejos prácticos y tu enfoque honesto son un verdadero diferenciador en el canal Actitud Roja.",
"Pamela, tu capacidad para transmitir información compleja de forma clara y accesible es admirable.",

"Enhorabuena por proporcionar herramientas eficaces y estrategias realistas para ayudar a los hombres a alcanzar el éxito en sus relaciones.",
"Pamela, eres una verdadera inspiración para los hombres que buscan el crecimiento personal y la felicidad amorosa.",
"Tu canal es una fuente de motivación y aliento para los hombres que están comprometidos a convertirse en la mejor versión de sí mismos.",
"Pamela, tu presencia carismática y genuina en el canal transmite confianza y credibilidad.",
"Eres una comunicadora con talento, Pamela, capaz de transmitir ideas complejas de forma atractiva y fácil de entender.",
"Enhorabuena por crear un espacio de aprendizaje y transformación en el canal Actitud Roja. Tu impacto es inestimable.",
"Pamela, tu pasión por ayudar a los hombres a encontrar relaciones saludables es evidente en cada palabra que compartes.",
"Tus videos están llenos de ideas valiosas y consejos prácticos que se pueden aplicar de inmediato. Gracias por compartir tus conocimientos",
"Pamela, eres una mentora cariñosa y compasiva, siempre dispuesta a ofrecer apoyo y orientación.",
"Tu canal es un faro de esperanza para aquellos que están luchando en sus relaciones. Sigue iluminando el camino, Pamela",
"Pamela, tu capacidad para crear conexiones genuinas y significativas es una inspiración para todos los que siguen el canal", 
"Felicidades por construir una comunidad acogedora y alentadora donde los hombres pueden compartir experiencias y aprender unos de otros.",
"Pamela, tu experiencia y tus profundos conocimientos son evidentes en cada vídeo que publicas. Eres una autoridad en la materia",
"Eres una líder del pensamiento, Pamela, que está ayudando a dar forma a una nueva generación de hombres seguros de sí mismos y con éxito en las relaciones.",
"Tus consejos prácticos y estrategias efectivas han ayudado a innumerables hombres a transformar sus vidas amorosas. Gracias por tu increíble trabajo.",
"Pamela, tu autenticidad y vulnerabilidad son inspiradoras. Tu valentía al compartir tus propias experiencias marca una diferencia significativa.",
"Tu canal es una fuente constante de motivación y orientación para los hombres que están en busca de relaciones saludables y significativas.",
"Pamela, tu dedicación a proporcionar contenido de calidad y relevante a tu comunidad es realmente admirable.",
"Gracias por ser una voz de aliento y apoyo para los hombres en todas las etapas de sus relaciones, Pamela. Tu trabajo tiene un valor incalculable.",
"Usted es una verdadera mentora, Pamela, ayudando a los hombres a superar obstáculos y encontrar el amor verdadero.",
"Enhorabuena por construir una plataforma en la que los hombres pueden aprender, crecer y conectarse entre sí. Estáis marcando la diferencia.",
"Pamela, tu capacidad para identificar los retos y preocupaciones comunes a los que se enfrentan los hombres es un testimonio de tu experiencia.",
"Tus consejos son prácticos, realistas y basados en pruebas. Gracias por proporcionar un enfoque fiable para el desarrollo personal y amoroso.",
"Pamela, eres una fuerza positiva e inspiradora en la vida de muchas personas. Sigue con el excelente trabajo que haces",
"Tu canal es una fuente confiable y respetada para los hombres que buscan orientación en sus relaciones. El impacto que tienes es inconmensurable",
"Pamela, tu pasión por ayudar a los hombres a convertirse en la mejor versión de sí mismos es contagiosa. Gracias por todo lo que haces",



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
  versionNumberElement.innerText = '1.2.1'; // Coloque a versão atual do seu programa aqui

  // Exibir o contador de elogios disponíveis inicialmente
  atualizarContador();
});
