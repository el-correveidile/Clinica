export const SESIONES_TALLER = [
  {
    n: 1,
    titulo: "Las oraciones concesivas",
    subtitulo: "aunque · a pesar de · por más que · si bien",
    nivel: "C2",
    nudo: "¿Cuándo expresa «aunque» un hecho y cuándo una hipótesis?",
    introduccion: `Las oraciones concesivas expresan un *obstáculo* que, en principio, podría impedir la realización de la acción principal —pero no lo impide. En «Aunque llueve, salgo a correr», la lluvia debería ser un motivo para quedarse en casa; sin embargo, la acción se produce igualmente. Este valor de «concesión» es lo que las distingue de las causales (que explican por qué ocurre algo) y de las condicionales (que plantean una condición necesaria para que algo ocurra). Las concesivas, en cambio, anulan o minimizan la fuerza de un argumento contrario: reconocen la existencia del obstáculo, pero lo declaran insuficiente.

El verdadero reto en el nivel C2 no es entender el significado general de estas construcciones, sino dominar la alternancia *indicativo / subjuntivo*, especialmente con el conector «aunque». A diferencia de las condicionales con «si» —que siempre exigen subjuntivo en la prótasis irreal—, «aunque» puede ir seguido de cualquiera de los dos modos, y la elección no es arbitraria: determina si el obstáculo se presenta como un hecho que el hablante conoce o como una hipótesis o posibilidad sobre la que muestra indiferencia. Este matiz, ausente en muchas lenguas europeas, es precisamente lo que hace que las concesivas sean un marcador de competencia avanzada en español.`,
    teoria: [
      {
        id: "aunque",
        titulo: "«Aunque» con indicativo y con subjuntivo",
        contenido: `El conector *aunque* es el más versátil y el que mayor precisión exige. La regla fundamental es la siguiente: si el obstáculo se presenta como un *hecho conocido* por el hablante —algo real, verificado o presupuesto—, se usa indicativo. Si se presenta como algo *hipotético*, *incierto* o sobre lo que el hablante muestra *indiferencia*, se usa subjuntivo.

Con *indicativo*, el hablante afirma que el obstáculo existe y es real en el momento del enunciado o en el pasado. Con *subjuntivo*, el hablante o bien no sabe si el obstáculo se dará (futuro hipotético), o bien sabe que existe pero lo considera irrelevante para el resultado (indiferencia). Esta segunda lectura —la de indiferencia— es especialmente frecuente en el registro coloquial y en argumentación: «Aunque sea verdad, no cambia nada» no niega la verdad del obstáculo, sino que lo declara sin consecuencias.

La trampa más común es asumir que indicativo y subjuntivo son intercambiables. En algunos contextos, ambos son posibles, pero con matices claramente distintos: «Aunque *tiene* razón» (reconozco que la tiene) frente a «Aunque *tenga* razón» (me da igual / es posible que la tenga, pero no cambia mi decisión).`,
        ejemplos: [
          { frase: "Aunque *hace* frío, salgo a correr.", nota: "Indicativo: sé que hace frío; es un hecho real." },
          { frase: "Aunque *llegó* tarde, nadie se quejó.", nota: "Indicativo: hecho pasado verificado." },
          { frase: "Aunque *haga* frío, saldré igualmente.", nota: "Subjuntivo: no sé si hará frío; hipótesis futura." },
          { frase: "Aunque me lo *digas* mil veces, no te creeré.", nota: "Subjuntivo: hipótesis futura + indiferencia explícita." },
          { frase: "Aunque *sea* verdad, no cambia nada.", nota: "Subjuntivo: indiferencia; el hablante no niega la veracidad." }
        ]
      },
      {
        id: "siempre-subj",
        titulo: "Conectores que siempre exigen subjuntivo",
        contenido: `Los conectores formados con *por más que*, *por mucho que*, *por muy + adjetivo/adverbio + que* y *por poco que* expresan la concesión de grado o cantidad: señalan que ni siquiera el grado máximo (o mínimo) del obstáculo impide la acción principal. Dado que siempre se trata de una cuantificación hipotética —«sea cual sea la cantidad»—, estos conectores *nunca* admiten indicativo en español estándar.

Este es un punto en el que los hablantes de inglés («no matter how much he tries») o de francés («quoiqu'il fasse») cometen errores frecuentes, pues en esas lenguas existen equivalentes con formas no subjuntivas.`,
        ejemplos: [
          { frase: "Por más que *lo intente*, no consigue concentrarse.", nota: "Solo subjuntivo; *por más que lo intenta* es incorrecto." },
          { frase: "Por mucho que *trabajes*, el tiempo es limitado.", nota: "Cuantificación hipotética: subjuntivo obligatorio." },
          { frase: "Por muy cansada que *esté*, siempre encuentra tiempo para leer.", nota: "«Por muy + adjetivo + que» → subjuntivo." },
          { frase: "Por poco que *duerma*, mañana tengo que estar al cien por cien.", nota: "Cuantificación mínima: subjuntivo igualmente." }
        ]
      },
      {
        id: "con-infinitivo",
        titulo: "«A pesar de», «pese a» y la alternancia con infinitivo",
        contenido: `Los conectores *a pesar de* y *pese a* (este último más formal y literario) funcionan de dos maneras distintas según la estructura oracional que los siga:

Cuando el sujeto de la proposición concesiva y el de la principal son *el mismo*, se prefiere —y en registros cuidados, se exige— el uso de *infinitivo*: «A pesar de haber trabajado mucho, no consiguió el puesto». Esta construcción es más económica y más elegante que la alternativa con «que»: «*A pesar de que había trabajado mucho...» es correcta, pero más pesada.

Cuando los sujetos son *distintos*, la única opción es «a pesar de que» seguido de indicativo o subjuntivo, con las mismas reglas que «aunque».

*Error frecuentísimo en todos los niveles*: la omisión de la preposición «de» en «*a pesar que...»*. Es un calco sintáctico del francés («malgré que») y del italiano («nonostante che») que en español siempre requiere la preposición.`,
        ejemplos: [
          { frase: "A pesar de *llevar* años en el país, todavía comete errores básicos.", nota: "Sujeto compartido → infinitivo." },
          { frase: "Pese a *haberlo advertido* varias veces, insistieron en el error.", nota: "«Pese a» + infinitivo compuesto: anterioridad respecto al verbo principal." },
          { frase: "A pesar de que los datos *muestran* una tendencia clara, algunos expertos dudan.", nota: "Sujetos distintos → «a pesar de que» + indicativo (hecho verificado)." },
          { frase: "*A pesar que llegó tarde* → INCORRECTO. Lo correcto: «A pesar de que llegó tarde».", nota: "Error por omisión de la preposición «de»." }
        ]
      },
      {
        id: "formal",
        titulo: "Conectores de registro formal y literario (C2)",
        contenido: `El registro culto y escrito del español cuenta con una serie de conectores concesivos cuyo uso incorrecto delata de inmediato la falta de competencia avanzada.

*Si bien* introduce una concesión con valor casi adversativo: el hablante concede un punto al interlocutor o reconoce un hecho, pero lo relativiza. Es característica de la escritura académica, periodística y jurídica. *Siempre va seguido de indicativo*, nunca de subjuntivo. Confundirlo con «bien que» del francés —que exige subjuntivo— es el error más grave que cometen los hablantes francófonos.

*Aun cuando* es más formal que «aunque» y admite tanto indicativo como subjuntivo con los mismos criterios que este. Se usa en textos argumentativos y administrativos.

*Con todo* y *con todo y eso* son conectores oracionales, no subordinadores: van entre oraciones separadas por punto o coma, y no introducen una cláusula subordinada.

*Y eso que* es de registro coloquial y siempre lleva indicativo: «El proyecto salió bien, y eso que no teníamos presupuesto».`,
        ejemplos: [
          { frase: "Si bien el presupuesto *es* escaso, los resultados han sido notables.", nota: "«Si bien» + indicativo siempre. *Si bien sea* sería incorrecto." },
          { frase: "Aun cuando los indicadores *muestran* mejoría, la situación sigue siendo delicada.", nota: "«Aun cuando» + indicativo: hecho constatado." },
          { frase: "Aun cuando los resultados *fueran* negativos, el procedimiento habrá sido riguroso.", nota: "«Aun cuando» + subjuntivo: hipótesis o condición." },
          { frase: "La reunión duró tres horas. Con todo, no se tomó ninguna decisión.", nota: "«Con todo» entre oraciones, sin subordinar." },
          { frase: "El sistema funciona perfectamente, y eso que nadie lo *puso* a prueba.", nota: "«Y eso que» coloquial + indicativo." }
        ]
      },
      {
        id: "relativas-libres",
        titulo: "Concesivas de relativo libre: «haga lo que haga», «sea como sea»",
        contenido: `Las construcciones de *relativo libre reduplicado* expresan una concesión de generalización absoluta: sea cual sea el valor de la variable, el resultado es el mismo. Tienen forma de doble subjuntivo: *verbo + pronombre relativo + verbo*, y el pronombre relativo queda libre —sin antecedente explícito—.

No deben confundirse con las subordinadas relativas normales. No dependen de ningún conector concesivo; la concesión está contenida en la propia estructura. Son frecuentes en el discurso argumentativo y literario de nivel avanzado.

Dado que expresan una universalización de posibilidades —«cualquiera que sea la acción que realice»—, se construyen siempre en *subjuntivo*. Equivalen aproximadamente a «por mucho que haga», pero con el matiz añadido de que no solo se refieren a la cantidad, sino a la variedad de posibles acciones.`,
        ejemplos: [
          { frase: "Haga lo que *haga*, el resultado siempre es el mismo.", nota: "Concesiva de relativo libre: cualquier acción que realice." },
          { frase: "Diga lo que *diga*, nadie le creerá.", nota: "La reduplicación del verbo es obligatoria en español." },
          { frase: "Sea como *sea*, tenemos que encontrar una solución.", nota: "Equivale a: «independientemente de cómo sea la situación»." },
          { frase: "Venga de donde *venga* esa información, hay que verificarla.", nota: "Complemento de procedencia generalizado." }
        ]
      }
    ],
    texto: {
      titulo: "La educación en tiempos de incertidumbre",
      fuente: "Texto elaborado para la sesión",
      cuerpo: `*Si bien* los sistemas educativos de los países desarrollados han experimentado mejoras notables en las últimas décadas —mayor cobertura, digitalización, ampliación de etapas obligatorias—, los resultados académicos no acompañan ese progreso con la misma regularidad. *Aunque* los informes internacionales *muestran* avances en comprensión lectora en algunos países del sur de Europa, los expertos advierten de que esos avances son frágiles y desiguales. *Y eso que* muchos gobiernos han multiplicado la inversión en tecnología educativa durante el último lustro.

*Por más que* se *reforme* el currículo, argumentan los pedagogos más críticos, el verdadero problema reside en la formación del profesorado y en las condiciones laborales del aula. *A pesar de que* los planes de estudio *han sido* revisados en múltiples ocasiones, la distancia entre lo que la escuela enseña y lo que la sociedad exige sigue siendo considerable. *Aun cuando* los datos de inserción laboral de los graduados universitarios *mejoran* ligeramente año a año, la precariedad estructural del mercado de trabajo convierte esas cifras en una promesa sin garantías. *Pese a* reconocer estas limitaciones, la mayoría de los organismos internacionales sigue apostando por la educación como principal mecanismo de movilidad social. *Con todo*, queda por responder la pregunta más incómoda: ¿puede la escuela compensar sola las desigualdades que el sistema económico genera?`,
      observaciones: "Identifica en el texto los siete conectores concesivos marcados en cursiva. Para cada uno, determina: (1) qué modo verbal introduce (o si va con infinitivo), (2) si la concesión presenta un hecho real o una hipótesis, y (3) si podría sustituirse por otro conector sin cambiar el registro o el matiz."
    },
    ejercicios: [
      {
        id: "modo",
        tipo: "modo",
        titulo: "Indicativo o subjuntivo",
        instruccion: "Elige la opción correcta o indica que ambas son posibles. Cuando ambas sean correctas, explica el matiz que distingue cada una.",
        items: [
          {
            id: "1",
            enunciado: "Aunque _______ (llover), saldremos igualmente.",
            opciones: ["llueve (indicativo)", "llueva (subjuntivo)"],
            correctas: [0, 1],
            explicacion: "Ambas son posibles con matices distintos. *Aunque llueve* presenta la lluvia como un hecho que el hablante ya conoce en el momento de hablar: sé que llueve ahora y aun así saldremos. *Aunque llueva* presenta la lluvia como algo hipotético o como un obstáculo ante el que el hablante muestra indiferencia: no sé si lloverá, o me da igual si llueve. En un contexto meteorológico en presente inmediato, el indicativo es más natural; en una planificación futura, el subjuntivo es más frecuente."
          },
          {
            id: "2",
            enunciado: "Por más que _______ (esforzarse, él), no logra los resultados que espera.",
            opciones: ["se esfuerza (indicativo)", "se esfuerce (subjuntivo)"],
            correctas: [1],
            explicacion: "Solo es correcta la forma de subjuntivo: *se esfuerce*. El conector «por más que» pertenece al grupo de cuantificadores concesivos (por mucho que, por muy + adj + que, por poco que) que siempre exigen subjuntivo porque expresan una cuantificación hipotética, no un hecho concreto. «*Por más que se esfuerza*» es un error característico de hablantes de lenguas en las que el equivalente no requiere subjuntivo."
          },
          {
            id: "3",
            enunciado: "Si bien el proyecto _______ (contar) con más recursos de lo previsto, los plazos siguen siendo muy ajustados.",
            opciones: ["cuenta (indicativo)", "cuente (subjuntivo)"],
            correctas: [0],
            explicacion: "Solo es correcta la forma de indicativo: *cuenta*. «Si bien» es un conector concesivo de registro formal que siempre selecciona indicativo. Su parecido superficial con el francés «bien que» —que siempre toma subjuntivo— induce a error en los hablantes francófonos. «*Si bien cuente con más recursos*» es incorrecto en español estándar."
          },
          {
            id: "4",
            enunciado: "A pesar de que los precios _______ (subir) cada mes, el consumo no cae.",
            opciones: ["suben (indicativo)", "suban (subjuntivo)"],
            correctas: [0, 1],
            explicacion: "Ambas son posibles, pero con matices diferentes. *Suben* (indicativo) presenta la subida de precios como un hecho verificado, una realidad objetiva que el hablante da por constatada. *Suban* (subjuntivo) introduce un matiz de indiferencia o generalización: «sea cual sea el nivel de subida, el consumo no cae». En un análisis económico descriptivo, el indicativo es más preciso; en un argumento que quiere subrayar la resistencia del consumo, el subjuntivo resulta más expresivo."
          },
          {
            id: "5",
            enunciado: "Aun cuando _______ (ser) cierto lo que afirmas, habría que verificarlo con datos independientes.",
            opciones: ["es (indicativo)", "sea (subjuntivo)"],
            correctas: [0, 1],
            explicacion: "Ambas formas son posibles. *Es* (indicativo) concede que lo afirmado es un hecho real: el hablante lo acepta como verdadero pero exige igualmente verificación. *Sea* (subjuntivo) plantea la veracidad de la afirmación como una hipótesis no confirmada: incluso si resultara ser cierto, habría que comprobarlo. El subjuntivo casa especialmente bien aquí con la presencia del condicional «habría que», que refuerza el tono hipotético del enunciado."
          }
        ]
      },
      {
        id: "correccion",
        tipo: "correccion",
        titulo: "Detección y corrección de errores",
        instruccion: "Cada una de las siguientes frases contiene un error relacionado con el uso de los conectores concesivos. Identifica el error, explica su origen y escribe la versión correcta.",
        items: [
          {
            id: "1",
            frase: "Bien que sea tarde, todavía podemos intentarlo.",
            correccion: "Aunque sea tarde, todavía podemos intentarlo. / Si bien es tarde, todavía podemos intentarlo.",
            explicacion: "Error por calco del francés *bien que + subjonctif*. En español no existe «bien que» con valor concesivo; el equivalente es «aunque» (con subjuntivo por el matiz concesivo-hipotético) o «si bien» seguido de indicativo. Las dos correcciones son válidas con registros ligeramente distintos: «aunque sea tarde» es neutro; «si bien es tarde» tiene un tono más formal."
          },
          {
            id: "2",
            frase: "A pesar que llegó tarde, nadie lo notó.",
            correccion: "A pesar de que llegó tarde, nadie lo notó.",
            explicacion: "Error por omisión de la preposición «de». La locución conjuntiva en español es siempre «a pesar *de* que», nunca «*a pesar que*». Este error es muy frecuente entre hablantes de francés («malgré que», sin preposición separada), catalán («malgrat que») e italiano («nonostante che»). La preposición «de» es estructuralmente necesaria: «a pesar» es un sintagma nominal que rige complemento preposicional con «de»."
          },
          {
            id: "3",
            frase: "Aunque si tengas razón, nunca lo reconocerá.",
            correccion: "Aunque tengas razón, nunca lo reconocerá.",
            explicacion: "Error por inserción incorrecta de «si» tras «aunque». Esta construcción es un calco del francés *même si* o del inglés *even if*, donde la partícula condicional acompaña al elemento de énfasis. En español, «aunque» ya contiene por sí solo el valor concesivo-hipotético cuando va con subjuntivo; la adición de «si» es redundante e incorrecta gramaticalmente."
          },
          {
            id: "4",
            frase: "Por más que intenta explicarlo, nadie entiende su argumentación.",
            correccion: "Por más que intente explicarlo, nadie entiende su argumentación.",
            explicacion: "Error de modo verbal: «por más que» requiere siempre subjuntivo (*intente*), no indicativo (*intenta*). «Por más que» expresa cuantificación hipotética —«por muchos intentos que haga, sea cual sea el esfuerzo»— y, como el resto de los cuantificadores concesivos (por mucho que, por muy + adj + que, por poco que), no admite indicativo en español estándar."
          }
        ]
      },
      {
        id: "transformacion",
        tipo: "transformacion",
        titulo: "Transformación de estructuras concesivas",
        instruccion: "Reescribe las siguientes oraciones utilizando el conector o la estructura indicada en cada caso. Es posible que sea necesario hacer cambios en la forma verbal.",
        items: [
          {
            id: "1",
            original: "Ha trabajado muchísimo durante toda su carrera. Aun así, no ha conseguido el puesto.",
            instruccion: "Reescribe combinando las dos oraciones con «a pesar de» + infinitivo compuesto.",
            respuesta: "A pesar de haber trabajado muchísimo durante toda su carrera, no ha conseguido el puesto.",
            explicacion: "Al tener las dos oraciones el mismo sujeto, podemos usar «a pesar de» + infinitivo compuesto (*haber trabajado*). El infinitivo compuesto expresa anterioridad respecto al verbo principal (*ha conseguido*), lo que mantiene la relación temporal original. Si los sujetos fueran distintos, habría que usar «a pesar de que» + indicativo o subjuntivo."
          },
          {
            id: "2",
            original: "Es una propuesta muy cara. Sin embargo, merece la pena considerarla.",
            instruccion: "Reescribe usando «aunque» en una sola oración. ¿Qué modo verbal utilizarías y por qué?",
            respuesta: "Aunque es muy cara, merece la pena considerarla.",
            explicacion: "Se usa *indicativo* (*es*) porque la carestía de la propuesta se presenta como un hecho conocido y real: el hablante la describe así, no como hipótesis. La transformación de «Sin embargo» (conector oracional entre dos frases independientes) a «aunque» (subordinador concesivo dentro de una sola oración) no cambia el significado básico, pero sí integra las dos proposiciones en una estructura más cohesionada."
          },
          {
            id: "3",
            original: "Haga lo que haga, el resultado siempre es el mismo.",
            instruccion: "Reescribe usando «por más que» manteniendo el sentido original.",
            respuesta: "Por más que haga, el resultado siempre es el mismo.",
            explicacion: "La concesiva de relativo libre «haga lo que haga» y «por más que haga» son casi equivalentes en este contexto, pero con un matiz: «haga lo que haga» pone el acento en la variedad de acciones posibles (cualquier acción que realice); «por más que haga» pone el acento en la intensidad del esfuerzo (por mucho que se esfuerce). El resultado comunicativo es muy similar, y ambas construcciones son correctas con subjuntivo."
          }
        ]
      }
    ],
    interferencias: [
      {
        lengua: "francés",
        descripcion: "El francés dispone de varios conectores concesivos que exigen subjuntivo de forma sistemática: «bien que», «quoique», «encore que». Esta obligatoriedad del subjuntivo en francés lleva a los hablantes francófonos a cometer dos tipos de errores en español: (1) usar el subjuntivo con «si bien», que en español siempre toma indicativo; y (2) construir calcos sintácticos como «bien que + subjuntivo» o «aunque si + subjuntivo». Por otro lado, la preposición en «malgré» (sin «de» separado) genera el error de omisión en «a pesar que» en lugar de «a pesar de que». Importante: el parecido visual entre «si bien» y «bien que» es una trampa —son estructuras con modos opuestos.",
        errores: [
          {
            incorrecto: "Bien que sea tarde, podemos intentarlo.",
            correcto: "Aunque sea tarde, podemos intentarlo.",
            nota: "«Bien que + subj» es un calco del francés. En español no existe esta construcción; el equivalente es «aunque + subj» o, en registro formal, «si bien + ind». Atención: «si bien» NO es el equivalente de «bien que» a pesar del parecido visual, porque «si bien» exige indicativo, no subjuntivo."
          },
          {
            incorrecto: "Aunque que sea difícil, lo intentaremos.",
            correcto: "Aunque sea difícil, lo intentaremos.",
            nota: "«Quoique» en francés equivale a «aunque» en español, sin la partícula «que». Nunca se añade «que» tras «aunque» en español; la conjunción ya es completa."
          },
          {
            incorrecto: "Aunque si tengas razón, no lo admitirá.",
            correcto: "Aunque tengas razón, no lo admitirá.",
            nota: "Calco de «même si + subjonctif». En español «aunque» ya contiene el valor hipotético cuando va con subjuntivo; la «si» es redundante e agramatical."
          },
          {
            incorrecto: "A pesar que llegó tarde, nadie protestó.",
            correcto: "A pesar de que llegó tarde, nadie protestó.",
            nota: "Calco de «malgré que» (sin preposición separada). En español la locución es siempre «a pesar *de* que»; la preposición «de» es obligatoria."
          }
        ]
      }
    ],
    tarea: "Escribe un párrafo argumentativo de 150-200 palabras sobre uno de los siguientes temas: la inteligencia artificial en la educación, el teletrabajo como modelo laboral, o el turismo masivo en ciudades patrimoniales. El objetivo es practicar la concesión argumentativa: debes conceder puntos al argumento contrario mientras defiendes una tesis clara. Usa al menos cuatro conectores concesivos distintos de los estudiados en esta sesión (aunque, si bien, a pesar de, por más que, pese a que, aun cuando, con todo, y eso que). El texto debe sonar analítico y documentado, propio del nivel C2: evita las generalizaciones sin matiz y cuida la cohesión entre oraciones.",
    referencias: [
      {
        titulo: "Oración concesiva",
        fuente: "Wikipedia en español",
        url: "https://es.wikipedia.org/wiki/Oraci%C3%B3n_concesiva"
      },
      {
        titulo: "Modo subjuntivo en español",
        fuente: "Wikipedia en español",
        url: "https://es.wikipedia.org/wiki/Modo_subjuntivo_en_espa%C3%B1ol"
      }
    ]
  }
];
