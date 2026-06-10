import React, { useState, useEffect, useRef } from "react";

const SESIONES = [
  {
    n: 1,
    titulo: "Las Meninas y la mirada",
    obra: "Diego Velázquez · 1656",
    nudo: "¿Quién tiene derecho a representar a quién?",
    lectura: `Cuando entramos en Las Meninas creemos mirar un cuadro, pero el cuadro nos está mirando a nosotros. En una sala del Alcázar de Madrid, Velázquez se pinta de pie ante un lienzo enorme cuyo reverso vemos, de modo que ignoramos qué está pintando. A su lado, la infanta Margarita aparece rodeada de su séquito: dos meninas o damas de honor, dos bufones de la corte y un perro que dormita en primer plano. Todos parecen detenerse un instante; varios levantan la vista hacia un punto que está fuera del cuadro, el lugar exacto que ocupa quien lo contempla.

En ese punto, sin embargo, hay otra presencia. Al fondo, un espejo borroso devuelve la imagen de los reyes, Felipe IV y Mariana de Austria. Si el espejo los refleja, ellos están donde estamos nosotros. Por un instante, quien observa el cuadro ocupa el lugar del monarca, y la escena entera parece organizarse alrededor de una mirada que no vemos pero que lo gobierna todo.

El filósofo Michel Foucault dedicó a este cuadro las primeras páginas de uno de sus libros más célebres. Para él, Las Meninas juega sin descanso con lo visible y lo invisible: los personajes contemplan una escena que a nosotros se nos escapa, y la verdadera imagen —la que Velázquez pinta en su lienzo— nos queda vedada para siempre. El punto hacia el que convergen todas las miradas es, a la vez, uno y triple: lo comparten los reyes reflejados, el propio pintor y nosotros, los espectadores. Por eso suele decirse que el cuadro no representa una escena: representa el acto mismo de representar.

Hay además una reivindicación callada. Al autorretratarse con paleta y pinceles junto a la familia real, Velázquez defiende que pintar no es un oficio manual, sino una actividad del intelecto, digna de codearse con la realeza. La cruz de la Orden de Santiago que luce en el pecho se añadió años después, cuando el pintor obtuvo por fin ese reconocimiento que perseguía.

El verdadero tema, entonces, no es la infanta ni la corte, sino la mirada misma: quién mira, quién es mirado y, sobre todo, quién decide cómo se nos representa. Velázquez desplaza al rey del centro de la escena y coloca ahí, con una ambigüedad calculada, a cualquiera que se detenga ante el lienzo. Cuatro siglos después, en una época que produce y difunde imágenes sin descanso, esa pregunta sigue intacta.`,
    lexico: ["el lienzo", "el reverso", "el séquito", "la menina", "el bufón", "el punto de fuga", "el espejo", "el autorretrato", "lo visible / lo invisible", "reivindicar", "desplazar", "ambiguo"],
    comentario: [
      "Según el texto, ¿en qué lugar exacto se sitúa el espectador y por qué resulta inquietante esa posición?",
      "¿Qué refleja el espejo del fondo y qué consecuencia tiene para quien mira el cuadro?",
      "Foucault habla de un punto «a la vez uno y triple». ¿Quiénes lo comparten?",
      "Explica con tus palabras por qué se dice que el cuadro «representa el acto de representar».",
      "¿Qué reivindica Velázquez al autorretratarse junto a la familia real?",
    ],
    debate: [
      "Hoy producimos y publicamos imágenes sin parar. ¿Quién decide realmente cómo se nos representa?",
      "¿Es legítimo fotografiar y difundir a una persona por la calle sin su consentimiento?",
      "¿Debe el arte tener una libertad para representar que la imagen cotidiana no debería tener?",
      "En las redes elegimos cómo mostrarnos: ¿somos el pintor o el modelo de nuestra propia imagen?",
    ],
    referencias: [
      { titulo: "Las Meninas — ficha de la obra", fuente: "Museo Nacional del Prado", url: "https://www.museodelprado.es/coleccion/obra-de-arte/las-meninas/5a3c54b9-d0c0-4ffa-acb7-cea3576159fb" },
      { titulo: "Las meninas: la mirada de Foucault sobre el cuadro", fuente: "Filosofía & Co.", url: "https://filco.es/las-meninas-foucault/" },
    ],
    lexicoDefs: {
      "el lienzo": "Tela preparada para pintar sobre ella. // Obra pictórica realizada sobre tela.",
      "el reverso": "Lado opuesto al principal de una cosa.",
      "el séquito": "Conjunto de personas que acompañan a alguien de rango o categoría.",
      "la menina": "Dama joven que, en la corte española, servía a la reina o a las infantas.",
      "el bufón": "Persona que tenía por oficio divertir con gestos y dichos a los nobles o reyes.",
      "el punto de fuga": "Punto hacia el que convergen las líneas paralelas en una composición en perspectiva.",
      "el espejo": "Superficie pulida que refleja la imagen de los objetos.",
      "el autorretrato": "Retrato de una persona hecho por ella misma.",
      "lo visible / lo invisible": "Lo que puede ser percibido por la vista / Lo que no puede verse o queda oculto.",
      "reivindicar": "Reclamar algo a lo que se tiene o se cree tener derecho.",
      "desplazar": "Mover o trasladar algo o a alguien de su lugar.",
      "ambiguo": "Que puede entenderse de varios modos o admite distintas interpretaciones.",
    },
    tarea: "Elige una imagen tuya publicada en redes (o que alguien te haya hecho) y analízala como si fuera un pequeño autorretrato. En 200–250 palabras, responde: ¿quién decidió cómo apareces?, ¿qué muestras y qué queda fuera del encuadre?, ¿quién dirige la mirada? Relaciona tu análisis con la idea de que, en Las Meninas, el verdadero tema no es la corte sino la mirada.",
  },
  {
    n: 2,
    titulo: "Goya y el horror",
    obra: "Francisco de Goya · 1808–1814",
    nudo: "¿Debe el arte ser político?",
    lectura: `El 3 de mayo de 1808, Goya pinta un fusilamiento, pero no como se pintaban hasta entonces las escenas de guerra. No hay héroes a caballo, ni banderas, ni gloria. Hay un grupo de hombres anónimos iluminados por un farol en mitad de la noche, frente a un pelotón de soldados que apenas tienen rostro: una hilera de espaldas y bayonetas, una máquina de matar sin culpa individual. En el centro, un hombre con camisa blanca levanta los brazos en un gesto que recuerda a un crucificado, y en el suelo se amontonan ya los cuerpos de quienes han caído antes que él. Goya no celebra una batalla: retrata el instante anterior a una ejecución.

Esa decisión cambia algo en la historia del arte. Por primera vez, el pintor se coloca del lado de las víctimas y no del poder que ordena disparar. La guerra deja de ser una empresa noble y se convierte en lo que es: muerte administrada, sufrimiento sin sentido. Años más tarde, en la serie de grabados Los desastres de la guerra, Goya llevará esa mirada al extremo. Ochenta y dos estampas muestran mutilaciones, hambre, cadáveres y abusos cometidos por los dos bandos, sin distinguir entre buenos y malos. No hay consuelo ni moraleja; solo el testimonio descarnado de lo que los seres humanos son capaces de hacerse.

Muchos críticos ven en estos grabados el nacimiento de algo parecido al reportaje de guerra moderno. Goya trabaja como trabajaría más tarde un fotoperiodista: observa, selecciona un instante y lo fija para que nadie pueda mirar hacia otro lado. Sus imágenes no informan de una fecha ni de un lugar concreto; aspiran a algo más difícil, a que el espectador sienta el horror en su propio cuerpo. Por eso, dos siglos después, siguen pareciéndose a las fotografías que llegan de cualquier conflicto actual.

Los desastres, además, no se publicaron en vida del artista. Eran demasiado incómodos para el poder, y hubo que esperar a 1863, treinta y cinco años después de su muerte, para que vieran la luz. Ese silencio dice mucho: un arte que denuncia molesta, y el poder prefiere que no se vea. Goya lo sabía y grabó igualmente, como si confiara en que algún día esas planchas hablarían.

Queda entonces una pregunta que el propio Goya parece lanzarnos desde el farol encendido de su cuadro. ¿Sirve de algo mostrar el horror? ¿Cambia en algo a quien lo contempla, o solo lo acostumbra a verlo? El arte de Goya no responde: se limita a no apartar la vista, y nos pide que tampoco lo hagamos nosotros.`,
    lexico: ["el fusilamiento", "el pelotón", "la bayoneta", "el grabado", "la estampa", "el testimonio", "la denuncia", "descarnado", "la mutilación", "el reportaje", "fijar un instante", "incómodo"],
    comentario: [
      "¿En qué se diferencia este fusilamiento de las escenas de guerra que se pintaban antes?",
      "¿Qué significa que Goya se coloque «del lado de las víctimas»?",
      "¿Por qué en Los desastres de la guerra no se distingue entre buenos y malos?",
      "¿Por qué el texto compara a Goya con un fotoperiodista?",
      "¿Qué revela el hecho de que los grabados no se publicaran hasta 1863?",
    ],
    debate: [
      "¿Debe el arte denunciar la injusticia, o esa no es su función?",
      "Las imágenes muy crudas, ¿nos hacen reaccionar o terminan por insensibilizarnos?",
      "¿Tiene un Estado derecho a censurar una obra que lo incomoda?",
      "Vemos imágenes de guerra a diario en el móvil: ¿nos afectan como el cuadro de Goya o ya casi no las miramos?",
    ],
    referencias: [
      { titulo: "El 3 de mayo de 1808 en Madrid: los fusilamientos", fuente: "Museo Nacional del Prado", url: "https://www.museodelprado.es/aprende/enciclopedia/voz/3-de-mayo-de-1808-en-madrid-los-fusilamientos-de/f0f52ca5-546a-44c4-8da0-f3c2603340b5" },
      { titulo: "Goya, ¿precursor del fotoperiodismo?", fuente: "The Conversation", url: "https://theconversation.com/goya-precursor-del-fotoperiodismo-157975" },
    ],
    lexicoDefs: {
      "el fusilamiento": "Ejecución de una persona mediante disparos de un grupo de soldados.",
      "el pelotón": "Grupo de soldados que actúa conjuntamente, especialmente en una ejecución.",
      "la bayoneta": "Arma blanca que se acopla al extremo del fusil.",
      "el grabado": "Arte de trazar imágenes sobre una plancha. // Estampa obtenida de dicha plancha.",
      "la estampa": "Reproducción impresa de una imagen grabada en madera, metal u otro material.",
      "el testimonio": "Declaración o prueba que da fe de algo.",
      "la denuncia": "Notificación de un hecho ilegal o injusto ante quien puede remediarlo.",
      "descarnado": "Que prescinde de adornos y muestra la realidad con toda su crudeza.",
      "la mutilación": "Corte o amputación de una parte del cuerpo.",
      "el reportaje": "Trabajo periodístico que informa con detalle sobre un tema o acontecimiento.",
      "fijar un instante": "Registrar o conservar un momento concreto, deteniéndolo en el tiempo.",
      "incómodo": "Que causa malestar físico o moral. // Que genera tensión o embarazo.",
    },
    tarea: "Busca una fotografía de prensa actual (de un conflicto, una catástrofe o una injusticia) que te haya impactado. En 200–250 palabras, descríbela y compárala con la mirada de Goya: ¿de qué lado se sitúa quien hizo la imagen?, ¿busca informar, denunciar o conmover?, ¿crees que mirarla sirve de algo? Cita la fuente de la fotografía.",
  },
  {
    n: 3,
    titulo: "Guernica y la memoria",
    obra: "Pablo Picasso · 1937",
    nudo: "¿Sirve el arte para no olvidar?",
    lectura: `En abril de 1937, durante la Guerra Civil española, aviones alemanes e italianos al servicio del bando sublevado bombardearon durante horas la pequeña localidad vasca de Guernica. No era un objetivo militar: era una población civil en día de mercado. La noticia recorrió el mundo y llegó a París, donde Pablo Picasso tenía el encargo de pintar una obra para el pabellón español de una exposición internacional. En poco más de un mes, casi sin dormir, Picasso transformó aquel encargo en el cuadro antibélico más famoso del siglo XX.

El Guernica no cuenta el bombardeo como lo haría una crónica. No hay aviones, ni bombas, ni fecha. Hay un caballo que relincha de dolor, un toro impasible, una madre que sostiene a su hijo muerto, una mujer que cae entre llamas, una lámpara que ilumina la escena como un ojo. Todo está pintado en blanco, negro y gris, como si fuera una fotografía de periódico ampliada hasta lo monstruoso. Picasso renuncia al color y al detalle realista para quedarse con lo esencial: el grito, el caos, el sufrimiento de los inocentes.

Esa renuncia es precisamente lo que ha hecho del cuadro un símbolo universal. Al no representar un episodio concreto, el Guernica puede representarlos todos. Cada vez que estalla una guerra y la población civil paga el precio, alguien recupera la imagen del caballo herido o de la madre que aúlla. La obra dejó de pertenecer a 1937 para convertirse en un lenguaje común con el que el mundo nombra el horror de la guerra.

El cuadro tiene además una larga historia de exilio. Picasso decidió que no volvería a España mientras durase la dictadura de Franco, y durante décadas el Guernica vivió en un museo de Nueva York, como un emigrante que espera. Solo en 1981, ya en democracia, regresó a Madrid. Su vuelta se vivió como un acto de reparación: el cuadro no solo denunciaba una masacre, sino que se había convertido en parte de la memoria de un país que necesitaba reconciliarse con su pasado.

Hoy se expone en el Museo Reina Sofía, protegido y estudiado hasta el último trazo. Pero su función no es decorativa ni meramente histórica. Sigue funcionando como un recordatorio incómodo, una pregunta que cada generación debe volver a hacerse: ¿qué hacemos con la memoria del dolor? Olvidar parece una forma de traición a las víctimas; recordar sin cesar puede convertirse en un rito vacío si no cambia nada en nosotros.

Quizá ahí esté la verdadera fuerza del Guernica. No nos da lecciones ni señala culpables con el dedo; nos pone delante el sufrimiento y nos deja solos con él. Lo que hagamos después —mirar y olvidar, o mirar y comprometernos— ya no depende del cuadro, sino de nosotros.`,
    lexico: ["el bombardeo", "la población civil", "el encargo", "el pabellón", "antibélico", "el blanco y negro", "el exilio", "la dictadura", "la reparación", "la memoria histórica", "el símbolo", "impasible"],
    comentario: [
      "¿Por qué el texto subraya que Guernica «no era un objetivo militar»?",
      "¿Qué efecto busca Picasso al pintar solo en blanco, negro y gris?",
      "¿Por qué el hecho de no representar un episodio concreto convierte al cuadro en símbolo universal?",
      "¿Qué significó el regreso del cuadro a España en 1981?",
      "Según el texto, ¿qué pregunta nos sigue planteando hoy el Guernica?",
    ],
    debate: [
      "¿Sirve realmente el arte para que una sociedad no olvide su pasado, o el olvido acaba imponiéndose?",
      "Conmemorar las tragedias cada año, ¿mantiene viva la memoria o se vuelve un rito vacío?",
      "¿Es legítimo que un país retire o esconda símbolos que recuerdan episodios dolorosos de su historia?",
      "¿Qué imágenes de hoy crees que serán el «Guernica» de las guerras actuales?",
    ],
    referencias: [
      { titulo: "Repensar Guernica — investigación sobre la obra", fuente: "Museo Reina Sofía", url: "https://guernica.museoreinasofia.es/" },
      { titulo: "Significado del cuadro Guernica y qué representa", fuente: "Cultura Genial", url: "https://www.culturagenial.com/es/cuadro-guernica-de-pablo-picasso/" },
    ],
    lexicoDefs: {
      "el bombardeo": "Ataque con bombas lanzadas desde el aire o desde tierra.",
      "la población civil": "Conjunto de personas que no forman parte de las fuerzas armadas.",
      "el encargo": "Comisión que se da a alguien para que realice un trabajo concreto.",
      "el pabellón": "Edificio o construcción independiente dentro de un recinto mayor.",
      "antibélico": "Contrario a la guerra o que se opone a ella.",
      "el blanco y negro": "Representación visual sin colores, solo mediante la escala de grises.",
      "el exilio": "Expatriación, voluntaria o forzosa, fuera de la propia patria.",
      "la dictadura": "Régimen político en que el poder está concentrado en una sola persona sin control efectivo.",
      "la reparación": "Satisfacción o compensación dada por un daño, ofensa o agravio.",
      "la memoria histórica": "Conjunto de recuerdos colectivos sobre el pasado que conforman la identidad de un grupo.",
      "el símbolo": "Imagen, figura o signo que representa algo de carácter abstracto.",
      "impasible": "Que no se altera ni se conmueve ante algo.",
    },
    tarea: "Piensa en un hecho doloroso de la historia de tu país que se conmemore de alguna forma (un monumento, una fecha, una obra). En 200–250 palabras, explica cómo se recuerda, si crees que esa memoria sigue viva o se ha vuelto rutina, y qué papel juega el arte en mantenerla. Relaciónalo con lo que comentamos sobre el Guernica.",
  },
  {
    n: 4,
    titulo: "Frida Kahlo: cuerpo e identidad",
    obra: "Frida Kahlo · 1926–1954",
    nudo: "¿Se ha convertido Frida en un producto?",
    lectura: `Pocos rostros son hoy tan reconocibles como el de Frida Kahlo: las cejas unidas, la mirada fija, las flores en el pelo. Aparece en camisetas, tazas, imanes y carcasas de móvil en todo el mundo, muchas veces en manos de gente que no sabría nombrar un solo cuadro suyo. Conviene, por eso, volver al principio, a la mujer que pintó ese rostro una y otra vez por una razón muy concreta: pasó buena parte de su vida en cama.

A los dieciocho años, Frida sufrió un accidente de tranvía que le destrozó la columna y la condenó a decenas de operaciones y a largos periodos de inmovilidad. Empezó a pintar mientras se recuperaba, con un espejo colocado sobre su cama. De ahí nace su tema central: el autorretrato. Frida se pinta a sí misma no por vanidad, sino porque es lo que tiene más cerca y lo que mejor conoce. En sus cuadros muestra su cuerpo abierto, su columna rota, su corazón fuera del pecho, sus abortos y su dolor físico con una franqueza que en su época resultaba casi escandalosa.

Pero su pintura es mucho más que una crónica del sufrimiento. Frida convierte su cuerpo en un territorio donde se cruzan la identidad mexicana, la política y la condición de ser mujer. Viste trajes tradicionales, se rodea de símbolos prehispánicos y reivindica un México popular frente a la influencia europea. Militó en el comunismo, vivió una relación intensa y tormentosa con el muralista Diego Rivera y exploró su propia sexualidad con una libertad poco común. Todo eso está en sus autorretratos, que son a la vez muy íntimos y muy políticos.

El problema llega después. Con el tiempo, esa figura compleja se ha ido simplificando hasta convertirse en un producto. La industria ha extraído de Frida lo más vendible —el color, las flores, la imagen exótica— y ha dejado fuera lo incómodo: el dolor, la enfermedad, la ideología. La mujer que era abanderada del comunismo se vende hoy como marca registrada en tequilas y artículos de belleza. A este fenómeno se le ha llamado, no sin ironía, «fridomanía».

Surge entonces una tensión difícil de resolver. Por un lado, esa popularidad ha llevado a millones de personas a interesarse por una artista latinoamericana, algo poco frecuente. Por otro, el icono comercial amenaza con tapar a la pintora: cuanto más se repite su cara en objetos, menos se miran sus cuadros. La pregunta no es solo sobre Frida, sino sobre lo que el mercado hace con cualquier figura transgresora cuando descubre que vende.

Quizá la mejor manera de hacerle justicia sea exactamente la contraria a comprar otra camiseta: detenerse ante uno de sus autorretratos y sostener la mirada que ella sostuvo, durante años, frente a un espejo y frente al dolor.`,
    lexico: ["el autorretrato", "la columna vertebral", "la inmovilidad", "la franqueza", "prehispánico", "reivindicar", "transgresor", "la mercantilización", "la marca registrada", "el icono", "la vanidad", "abanderado/a"],
    comentario: [
      "Según el texto, ¿por qué el autorretrato se convierte en el tema central de Frida?",
      "¿Qué quiere decir que sus cuadros son «a la vez muy íntimos y muy políticos»?",
      "¿Qué elementos de Frida ha conservado la industria y cuáles ha dejado fuera?",
      "Explica la ironía que encierra la palabra «fridomanía».",
      "¿Qué tensión plantea el texto entre la popularidad de Frida y su obra?",
    ],
    debate: [
      "¿Está bien que la imagen de un artista se use para vender productos, o eso traiciona su obra?",
      "Cuando un símbolo rebelde se vuelve comercial, ¿pierde su fuerza o la difunde más?",
      "¿Quién debería decidir cómo se usa la imagen de una figura ya fallecida?",
      "¿Conoces algún caso parecido en tu país o tu cultura de alguien convertido en «marca»?",
    ],
    referencias: [
      { titulo: "La Casa Azul — el museo y su historia", fuente: "Museo Frida Kahlo", url: "https://www.museofridakahlo.org.mx/museo/" },
      { titulo: "Por qué Frida Kahlo es mucho más que una artista", fuente: "Infobae", url: "https://www.infobae.com/historias/2026/03/14/por-que-frida-kahlo-es-mucho-mas-que-una-artista-y-como-su-rostro-llego-a-la-cultura-pop/" },
    ],
    lexicoDefs: {
      "el autorretrato": "Retrato de una persona hecho por ella misma.",
      "la columna vertebral": "Eje óseo del cuerpo humano formado por una serie de vértebras.",
      "la inmovilidad": "Estado de lo que no puede moverse o está privado de movimiento.",
      "la franqueza": "Sinceridad y llaneza en el trato o en la expresión.",
      "prehispánico": "Anterior a la conquista y colonización española de América.",
      "reivindicar": "Reclamar algo a lo que se tiene o se cree tener derecho.",
      "transgresor": "Que quebranta o viola una norma, ley o convención establecida.",
      "la mercantilización": "Acción de convertir algo en objeto de comercio o negocio.",
      "la marca registrada": "Signo distintivo de un producto o empresa con protección legal.",
      "el icono": "Imagen o símbolo ampliamente reconocido que representa algo o a alguien.",
      "la vanidad": "Arrogancia, presunción. // Excesivo deseo de ser admirado.",
      "abanderado/a": "Que defiende públicamente una causa o idea con especial convicción.",
    },
    tarea: "Elige una figura (artista, músico, activista o personaje histórico) cuya imagen se haya convertido en producto comercial en tu país o cultura. En 200–250 palabras, explica qué representaba esa persona y qué se ha conservado o perdido al convertirla en marca. ¿Crees que esa popularidad la honra o la traiciona? Conecta tu reflexión con el caso de Frida.",
  },
  {
    n: 5,
    titulo: "El muralismo mexicano",
    obra: "Rivera, Orozco, Siqueiros · 1920–1950",
    nudo: "¿Arte para el pueblo o adoctrinamiento?",
    lectura: `Tras la Revolución mexicana, el país necesitaba reinventarse, y lo hizo, entre otras cosas, pintando las paredes. En 1921, el ministro de Educación José Vasconcelos tuvo una idea poco común: en lugar de encerrar el arte en los museos, lo sacaría a la calle. Encargó a un grupo de pintores que cubrieran los muros de los edificios públicos —escuelas, ministerios, palacios— con enormes murales que contaran la historia de México a un pueblo que, en buena parte, no sabía leer. Así nació el muralismo, uno de los movimientos artísticos más influyentes del continente.

Tres nombres destacan sobre los demás, los llamados «tres grandes»: Diego Rivera, José Clemente Orozco y David Alfaro Siqueiros. Sus murales no eran decorativos. Narraban la conquista, la opresión de los indígenas, las luchas campesinas, la Revolución y la promesa de un futuro mejor. Eran lecciones de historia pintadas a gran escala, pensadas para que cualquiera, al cruzar un patio o subir una escalera, recibiera un mensaje claro sobre quién era el pueblo mexicano y de dónde venía.

Hasta aquí, la idea resulta seductora: un arte gratuito, accesible, que devuelve la cultura a la mayoría en lugar de reservarla a una élite. Los propios muralistas lo defendían en su manifiesto, donde declaraban que el arte debía dejar de ser un lujo individual para convertirse en educación y combate. Querían un arte útil, comprometido, al servicio del pueblo.

Pero ahí mismo aparece la sombra. Aquel arte estaba financiado y dirigido por el Estado, y contaba la historia que al Estado le interesaba contar. Los héroes y los villanos estaban repartidos de antemano; el mensaje, casi siempre, reforzaba la legitimidad del nuevo régimen surgido de la Revolución. ¿Dónde termina la educación y dónde empieza la propaganda? Cuando un gobierno paga a unos artistas para que enseñen al pueblo qué debe pensar de su propia historia, la frontera se vuelve borrosa. Algunos historiadores han llegado a señalar en aquellos murales tonos que rozan el adoctrinamiento.

El propio Siqueiros era explícito: para él, el arte y la política eran inseparables, y el arte debía ser difusor y guía de una ideología. No lo ocultaba. Y quizá esa franqueza nos ayude a pensar el problema con calma: tal vez todo arte público lleve dentro un mensaje, y la cuestión no sea si lo tiene, sino si lo confiesa y si nos deja espacio para discutirlo.

Hoy seguimos rodeados de imágenes que el poder o las empresas colocan en el espacio público para moldear lo que pensamos. Los murales mexicanos, monumentales y hermosos, nos obligan a una pregunta incómoda que no ha caducado: ¿puede un arte ser a la vez profundamente bello y profundamente instrumental?, ¿y quién decide la diferencia entre enseñar y dirigir?`,
    lexico: ["el muro", "el mural", "encargar", "el ministerio", "el manifiesto", "el adoctrinamiento", "la propaganda", "la legitimidad", "el régimen", "comprometido", "instrumental", "la élite"],
    comentario: [
      "¿Qué idea poco común tuvo Vasconcelos en 1921 y con qué fin?",
      "¿Por qué los murales se pintaban en edificios públicos y no en museos?",
      "Según el texto, ¿qué hacía atractivo el proyecto muralista?",
      "¿Dónde sitúa el texto la frontera entre educación y propaganda?",
      "¿Qué quería decir Siqueiros al afirmar que el arte debía ser «difusor y guía»?",
    ],
    debate: [
      "¿Puede un arte pagado por el Estado ser libre, o siempre acaba sirviendo a quien lo paga?",
      "¿Dónde está, para ti, la línea entre educar y adoctrinar?",
      "El arte del espacio público —murales, monumentos, publicidad—, ¿nos forma o nos manipula?",
      "¿Conoces imágenes que en tu país transmitan una idea concreta de la historia o de la nación?",
    ],
    referencias: [
      { titulo: "México y la Revolución: el muralismo", fuente: "Secretaría de Cultura de México", url: "https://www.cultura.gob.mx/mexico1900-1950/conceptos/detalle/?id=2" },
      { titulo: "Los herederos del muralismo mexicano, un siglo después", fuente: "Infobae", url: "https://www.infobae.com/cultura/2022/08/17/los-herederos-del-muralismo-mexicano-un-siglo-despues/" },
    ],
    lexicoDefs: {
      "el muro": "Pared o tapia de gran espesor.",
      "el mural": "Pintura o imagen realizada directamente sobre una pared o muro.",
      "encargar": "Pedir a alguien que realice un trabajo o que lleve a cabo una tarea.",
      "el ministerio": "Departamento del gobierno a cargo de una rama de la administración pública.",
      "el manifiesto": "Escrito público en que un individuo o colectivo expone sus ideas o intenciones.",
      "el adoctrinamiento": "Acción de inculcar una doctrina o conjunto de creencias de forma sistemática.",
      "la propaganda": "Información difundida para promover una causa, idea o movimiento político.",
      "la legitimidad": "Conformidad con la ley o con lo que se considera justo y razonable.",
      "el régimen": "Sistema de gobierno. // Conjunto de normas que rigen una actividad.",
      "comprometido": "Que asume y defiende una causa o ideología con responsabilidad.",
      "instrumental": "Que sirve como medio o instrumento para un fin determinado.",
      "la élite": "Minoría selecta que ocupa una posición privilegiada en la sociedad.",
    },
    tarea: "Busca una imagen colocada en un espacio público de tu ciudad o país (un mural, un monumento, un cartel oficial o una gran campaña). En 200–250 palabras, descríbela y analiza qué mensaje transmite y a quién beneficia. ¿Te parece que educa, que conmemora o que adoctrina? Relaciónalo con el caso del muralismo mexicano.",
  },
  {
    n: 6,
    titulo: "Lorca en Nueva York: «La aurora»",
    obra: "Federico García Lorca · Poeta en Nueva York (1929-1930)",
    nudo: "¿Qué le hace la gran ciudad al ser humano?",
    lectura: `En 1929, Federico García Lorca llegó a Nueva York. Venía de una crisis personal y de una Granada de huertas y acequias, y se encontró de golpe con la mayor metrópoli del mundo: rascacielos, multitudes y una enorme maquinaria financiera. El choque fue brutal, y de él nació Poeta en Nueva York, un libro muy distinto a su obra anterior. Aquí no hay gitanos ni romances, sino una ciudad que el poeta vive como un infierno moderno. Dentro de ese libro está «La aurora», el poema que vamos a leer y comentar.

En la poesía de siempre, el amanecer simboliza la esperanza, el comienzo, la luz. Lorca le da la vuelta a ese símbolo. Su amanecer neoyorquino no trae esperanza: llega sobre un paisaje de fango y aguas podridas, entre bandadas de pájaros oscuros, y nadie sale a recibirlo. La ciudad no descansa ni se renueva; simplemente reanuda su rutina. En una de sus imágenes más duras, el dinero aparece como un enjambre que devora a los niños abandonados. La luz, que debería salvar, aquí no salva a nadie.

Lo que Lorca denuncia no es solo una ciudad concreta, sino una forma de vida: la del capitalismo que convierte a las personas en números y no deja sitio para lo humano, lo natural ni lo espiritual. El muchacho de la vega granadina mira Manhattan y ve un mundo sin raíces, donde la gente se mueve como autómatas y la naturaleza ha quedado sepultada bajo el cemento. Es, casi un siglo después, una crítica que resuena en cualquier gran ciudad de hoy.

El poema tiene además una segunda vida que nos interesa especialmente. En 1996, el cantaor granadino Enrique Morente —una de las grandes voces del flamenco del siglo XX— grabó el disco Omega junto al grupo de rock Lagartija Nick. En él puso música a varios poemas de Poeta en Nueva York, entre ellos «La aurora». Así, los versos que Lorca escribió en Manhattan regresaron a Granada convertidos en cante jondo mezclado con guitarras eléctricas. Dos granadinos universales, el poeta y el cantaor, se daban la mano por encima del tiempo.

Por eso esta sesión se enlaza con la siguiente. Hoy leemos «La aurora» como poema y desentrañamos sus imágenes; en la próxima clase la escucharemos en la voz rota de Morente y hablaremos de un flamenco que, como Lorca en Nueva York, se atrevió a salirse de su sitio.

Antes de clase, lee «La aurora» (tienes el texto enlazado más abajo) y, si puedes, escucha la versión de Morente. Fíjate en cómo cada imagen del poema contradice lo que solemos asociar a un amanecer.`,
    lexico: ["la metrópoli", "el rascacielos", "el fango", "la aurora", "el enjambre", "el autómata", "la explotación", "el cante jondo", "desentrañar", "sepultar", "las raíces", "resonar"],
    comentario: [
      "¿Por qué dice el texto que «La aurora» le da la vuelta al símbolo tradicional del amanecer?",
      "¿Qué visión de Nueva York transmite Lorca en el poema?",
      "Más allá de una ciudad concreta, ¿qué forma de vida critica Lorca?",
      "¿Qué relación establece el texto entre la vega granadina y la mirada sobre Manhattan?",
      "¿Qué imágenes del poema te han parecido más impactantes y por qué?",
    ],
    debate: [
      "¿La gran ciudad deshumaniza, como sugiere Lorca, o también libera y da oportunidades?",
      "Casi un siglo después, ¿sigue siendo válida su crítica al dinero y a la prisa?",
      "¿Hay lugar para la naturaleza y lo espiritual en una metrópoli moderna?",
      "¿Cómo es el amanecer en tu ciudad: se parece más al de Lorca o a la esperanza de siempre?",
    ],
    referencias: [
      { titulo: "«La aurora»: texto del poema y sus versiones musicales", fuente: "PoeMAS · UNED", url: "https://poemas.uned.es/poema/la-aurora-federico-garcia-lorca/" },
      { titulo: "Diez años sin Morente, el amigo de los modernos", fuente: "La Voz del Sur", url: "https://www.lavozdelsur.es/levantaos/diez-anos-sin-morente-amigo-modernos_253315_102.html" },
    ],
    video: { src: "https://www.youtube.com/embed/sXKOtFtSCtg?si=BsS0WYhMdItG9EAk", titulo: "«La aurora» · Enrique Morente y Lagartija Nick (Omega, 1996)" },
    lexicoDefs: {
      "la metrópoli": "Ciudad muy grande e importante. // Capital o ciudad principal de un estado.",
      "el rascacielos": "Edificio de gran altura con muchos pisos.",
      "el fango": "Lodo espeso que se forma mezclando agua y tierra.",
      "la aurora": "Luz difusa que precede a la salida del sol. // Principio o comienzo de algo.",
      "el enjambre": "Multitud de abejas que viven juntas. // Gran cantidad de cosas o personas en movimiento.",
      "el autómata": "Máquina que imita los movimientos de un ser vivo. // Persona que actúa mecánicamente, sin reflexión.",
      "la explotación": "Acción de utilizar a alguien de modo abusivo en beneficio propio.",
      "el cante jondo": "Canto flamenco de estilo grave y hondo, de raíz andaluza.",
      "desentrañar": "Descubrir o comprender lo más oculto o difícil de algo.",
      "sepultar": "Enterrar. // Cubrir u ocultar completamente algo.",
      "las raíces": "Origen o fundamento de algo. // Lazos de pertenencia a una tierra o cultura.",
      "resonar": "Producir eco o resonancia. // Tener repercusión o impacto algo.",
    },
    tarea: "Lee «La aurora» entera y elige los dos o tres versos que más te golpeen. En 200–250 palabras, explica qué imagen crea Lorca en ellos y qué sensación te producen. Después escucha la versión de Enrique Morente (Omega, 1996): ¿la música refuerza o transforma lo que sentiste al leer? Guarda esta reflexión: la retomamos en la sesión de flamenco.",
  },
  {
    n: 7,
    titulo: "Flamenco: Morente y «Omega»",
    obra: "Enrique Morente · Omega (1996)",
    nudo: "¿El flamenco debe conservarse intacto o reinventarse?",
    lectura: `En la sesión anterior leímos «La aurora», de Lorca. Hoy la escuchamos cantada y, de paso, entramos en uno de los grandes debates del flamenco. En 1996, el cantaor granadino Enrique Morente publicó Omega, un disco que ponía música a poemas de Poeta en Nueva York y a canciones del cantautor Leonard Cohen, acompañado nada menos que por una banda de rock, Lagartija Nick: guitarras eléctricas, batería atronadora y, a la vez, guitarra flamenca y cante jondo.

El resultado escandalizó al mundo del flamenco. Para los puristas, mezclar el cante con el rock era una traición, casi un sacrilegio. ¿Cómo se atrevía una de las voces más respetadas a profanar la tradición? Morente no se inmutó. Estaba convencido de que el flamenco no es una pieza de museo que haya que conservar bajo un cristal, sino un arte vivo que respira, cambia y se mezcla con lo que tiene alrededor, como hizo desde su origen. Hoy Omega se considera un disco clave, comparable a La leyenda del tiempo de Camarón, otro que en su día fue acusado de lo mismo.

El caso de Morente plantea la pregunta de esta sesión, que recoge y amplía la del flamenco como patrimonio. Una tradición, ¿se protege mejor encerrándola y repitiéndola igual que siempre, o manteniéndola abierta y dejándola evolucionar? Quienes defienden lo primero temen que, si todo se mezcla, lo auténtico se pierda. Quienes defienden lo segundo recuerdan que el propio flamenco nació de la mezcla y que un arte que no cambia, simplemente, se muere.

Aquí conviene volver al estereotipo. El flamenco que se vende al turista —lunares, abanicos, espectáculo de una hora— es precisamente la versión congelada y predecible, la «españolada» convertida en souvenir. Lo de Morente es lo contrario: un flamenco que se arriesga, que dialoga con Lorca y con el rock, que puede incomodar pero que está vivo. Paradójicamente, romper la tradición fue su forma de mantenerla en pie.

Morente, granadino como Lorca, murió en 2010 dejando una huella enorme. Su hija Estrella, que canta en Omega, continúa hoy ese camino. Y aquel poema que Lorca escribió mirando los rascacielos de Nueva York volvió, gracias a la voz de Morente, a sonar en Granada: prueba de que la tradición y la vanguardia no siempre son enemigas; a veces son la misma cosa vista en dos momentos distintos.

Escuchad «La aurora» en su versión de Omega y comparadla con el poema que leísteis. ¿Os parece una traición a Lorca y al flamenco, o la mejor manera de mantenerlos vivos?`,
    lexico: ["el cantaor", "el cante jondo", "el purista", "la tradición", "la vanguardia", "profanar", "el sacrilegio", "fusionar", "congelado", "arriesgarse", "la huella", "reinventar"],
    comentario: [
      "¿Qué tenía de provocador el disco Omega en 1996?",
      "¿Por qué los puristas lo consideraron una traición?",
      "¿Cómo entendía Morente el flamenco: como pieza de museo o como arte vivo?",
      "Según el texto, ¿qué relación hay entre el flamenco «de souvenir» y la versión de Morente?",
      "¿Por qué se dice que «romper la tradición fue su forma de mantenerla en pie»?",
    ],
    debate: [
      "¿Una tradición se protege mejor repitiéndola igual o dejándola cambiar?",
      "¿Quién tiene autoridad para decidir qué es «auténtico» en un arte?",
      "Mezclar géneros —flamenco y rock, por ejemplo—, ¿enriquece o desvirtúa?",
      "¿Hay en tu cultura una tradición que esté cambiando? ¿Te parece bien o mal?",
    ],
    referencias: [
      { titulo: "El flamenco — ficha del Patrimonio Inmaterial", fuente: "UNESCO", url: "https://ich.unesco.org/es/RL/el-flamenco-00363" },
      { titulo: "Omega (Enrique Morente y Lagartija Nick)", fuente: "La Fonoteca", url: "https://lafonoteca.net/disco/omega_lagartija-nick/" },
    ],
    video: { src: "https://www.youtube.com/embed/U9WKTK4H5xk?si=phQFrJVtoiml1V1n", titulo: "Entrevista con Aurora Carbonell, viuda de Morente: cómo se hizo Omega" },
    lexicoDefs: {
      "el cantaor": "Persona que canta flamenco.",
      "el cante jondo": "Canto flamenco de estilo grave y hondo, de raíz andaluza.",
      "el purista": "Persona que defiende la pureza de un estilo o arte sin admitir influencias externas.",
      "la tradición": "Transmisión de costumbres, valores o saberes de generación en generación.",
      "la vanguardia": "Lo más avanzado o innovador de un movimiento artístico, político o cultural.",
      "profanar": "Tratar algo sagrado sin el respeto debido. // Deshonrar algo muy valorado.",
      "el sacrilegio": "Lesión o profanación de una cosa, lugar o persona sagrada.",
      "fusionar": "Unir dos o más cosas distintas formando una sola.",
      "congelado": "Detenido o paralizado en un estado sin posibilidad de evolución.",
      "arriesgarse": "Exponerse a un peligro o contratiempo de modo consciente.",
      "la huella": "Señal que deja el paso. // Marca o rastro duradero que algo deja tras sí.",
      "reinventar": "Dar una forma nueva a algo ya existente; renovarlo profundamente.",
    },
    tarea: "Escucha «La aurora» en la versión de Enrique Morente (Omega, 1996) y vuelve al poema de Lorca que leíste. En 200–250 palabras, compara las dos experiencias: ¿qué aporta la música a las palabras?, ¿crees que Morente respeta el poema o lo transforma? Termina con tu postura: ¿es Omega una traición a la tradición o una forma de salvarla?",
  },
  {
    n: 8,
    titulo: "La Alhambra y el turismo",
    obra: "Granada nazarí · s. XIII–XV",
    nudo: "¿Cómo es vivir en una ciudad-museo?",
    lectura: `La Alhambra es uno de los monumentos más visitados de España. Cada año, millones de personas suben la colina para recorrer sus patios, sus fuentes y sus salas de yeserías, ese palacio nazarí que parece encaje tallado en piedra. Es, con razón, motivo de orgullo para Granada y una de las cumbres del arte islámico en Occidente. Pero detrás de la postal hay una realidad menos amable, y es la que viven cada día quienes habitan a sus pies.

Granada se ha convertido, en buena medida, en una ciudad organizada para el visitante. En barrios históricos como el Albaicín o el Realejo, una cuarta parte de las viviendas son ya pisos turísticos. Donde antes había vecinos y comercios de toda la vida, hoy hay alojamientos de alquiler, taquillas de equipaje y tiendas de recuerdos. Los precios de la vivienda suben, las familias se marchan a los pueblos de alrededor y el barrio, poco a poco, se vacía de vida cotidiana para llenarse de maletas con ruedas.

A este fenómeno se le llama turistificación, y no afecta solo a Granada: lo sufren Venecia, Barcelona, Lisboa y tantas otras ciudades hermosas. La lógica es siempre parecida. El turismo trae dinero y empleo, de modo que parece una bendición; pero, si nadie lo regula, acaba expulsando a los residentes y transformando la ciudad en un decorado. El propio patrimonio sufre: la dirección de la Alhambra ha advertido de que el turismo de masas tiene consecuencias graves para la conservación de los monumentos. Demasiados pies gastan el suelo que vienen a admirar.

Surge entonces una paradoja incómoda. Una ciudad como Granada necesita el turismo para vivir, pero ese mismo turismo amenaza con vaciarla de aquello que la hacía deseable: sus vecinos, su comercio, su vida de calle. Una ciudad sin habitantes deja de ser una ciudad y se convierte en un parque temático, bello pero hueco. ¿Qué sentido tiene conservar las piedras si se expulsa a la gente que les daba sentido?

No hay respuestas fáciles. Prohibir el turismo es absurdo e injusto; dejarlo crecer sin control es suicida. Entre ambos extremos, ayuntamientos y vecinos buscan a tientas un equilibrio: limitar los pisos turísticos, proteger la vivienda, repartir mejor los beneficios. Llegan, casi siempre, cuando buena parte del daño ya está hecho.

La Alhambra seguirá ahí, paciente, como lleva siete siglos. La pregunta no es por ella, sino por la ciudad que la rodea y por todas las que se le parecen. ¿Es posible vivir en un lugar que el mundo entero quiere visitar? ¿O estamos condenados a elegir entre la pobreza sin turistas y la belleza sin vecinos?`,
    lexico: ["la yesería", "nazarí", "la postal", "el piso turístico", "la turistificación", "la gentrificación", "el residente", "el decorado", "el parque temático", "la conservación", "regular", "vaciarse"],
    comentario: [
      "¿Qué contraste plantea el texto entre la «postal» de la Alhambra y la vida real de Granada?",
      "¿Qué es la turistificación y cómo se manifiesta en barrios como el Albaicín?",
      "¿Por qué dice el texto que el turismo «parece una bendición» pero puede ser un problema?",
      "¿Qué ha advertido la dirección de la Alhambra sobre el turismo de masas?",
      "Explica la paradoja final: ¿por qué una ciudad puede «morir de éxito» turístico?",
    ],
    debate: [
      "¿Debe una ciudad limitar el número de turistas o de pisos turísticos? ¿Cómo?",
      "¿Quién tiene más derecho sobre un barrio histórico: sus vecinos o los visitantes que lo sostienen económicamente?",
      "¿Has visto en tu país o ciudad un lugar transformado por el turismo, para bien o para mal?",
      "¿Se puede conservar un monumento y, a la vez, mantener viva la ciudad que lo rodea?",
    ],
    referencias: [
      { titulo: "Patronato de la Alhambra y Generalife — sitio oficial", fuente: "Patronato de la Alhambra", url: "https://www.alhambra-patronato.es/" },
      { titulo: "«Nadie puede vivir en el Albaicín»: viviendas turísticas en Granada", fuente: "elDiario.es", url: "https://www.eldiario.es/andalucia/granada/nadie-vivir-albaicin-regulacion-viviendas-turistica-granada-abre-brecha-vecinos-propietarios_1_11719132.html" },
    ],
    lexicoDefs: {
      "la yesería": "Obra o adorno realizado con yeso. // Arte o técnica de trabajar el yeso.",
      "nazarí": "Perteneciente o relativo a la dinastía que gobernó el reino de Granada (s. XIII–XV).",
      "la postal": "Tarjeta con una imagen de un lugar. // Imagen típica y simplificada de un sitio.",
      "el piso turístico": "Vivienda destinada al alquiler de corta estancia para turistas.",
      "la turistificación": "Proceso por el que una zona se transforma en función del turismo, desplazando a sus residentes.",
      "la gentrificación": "Transformación de un barrio que eleva su nivel socioeconómico desplazando a sus habitantes originales.",
      "el residente": "Persona que vive de forma habitual en un lugar determinado.",
      "el decorado": "Escenografía de un espectáculo. // Entorno que parece real pero carece de vida auténtica.",
      "el parque temático": "Recinto de ocio organizado en torno a un tema o ambientación concreta.",
      "la conservación": "Mantenimiento de algo en buen estado para evitar su deterioro o pérdida.",
      "regular": "Ajustar, ordenar o controlar algo mediante normas o leyes.",
      "vaciarse": "Quedarse sin contenido, sin habitantes o sin actividad.",
    },
    tarea: "Piensa en un lugar de tu país muy visitado por turistas. En 200–250 palabras, describe cómo es y cómo ha cambiado (o podría cambiar) la vida de quienes viven allí a causa del turismo. ¿Qué medidas propondrías para equilibrar las dos cosas? Relaciónalo con lo que comentamos sobre Granada y la Alhambra.",
  },
  {
    n: 9,
    titulo: "Arte urbano y grafiti",
    obra: "Banksy y El Niño de las Pinturas",
    nudo: "¿Vandalismo o arte? Dos formas de pintar la calle.",
    lectura: `Una pared de la ciudad amanece con una pintada. Para unos es una agresión que hay que borrar cuanto antes; para otros, una obra que merece protegerse. La misma imagen, lecturas opuestas. Ese desacuerdo resume el debate que rodea al arte urbano desde que nació.

El grafiti moderno surgió a finales de los años sesenta en los barrios pobres de Nueva York. Jóvenes, en su mayoría afroamericanos y latinos, empezaron a firmar con su «tag» los vagones del metro: una forma de decir «existo» en una ciudad que los ignoraba. Era ilegal y efímero. Con el tiempo, aquellas firmas se volvieron murales, y nombres como Basquiat o Keith Haring saltaron de la calle a las galerías. El arte urbano empezaba a tomarse en serio.

Su figura más célebre es hoy Banksy, un artista británico que mantiene en secreto su identidad. Sus imágenes, hechas con plantilla en muros de medio mundo, critican la guerra, el consumismo o la hipocresía del poder con un humor ácido. Nacen ilegales en la calle y acaban vendiéndose por millones: el que ayer era un vándalo perseguido es hoy una estrella del mercado del arte.

Frente a él podemos poner a un artista muy distinto y mucho más cercano: Raúl Ruiz (1977), conocido como El Niño de las Pinturas, el grafitero más reconocido de Granada. Empezó de adolescente firmando muros como cualquier otro escritor de grafiti, pero con los años llenó el barrio del Realejo de rostros: caras de niños y adolescentes pintadas con un realismo asombroso, acompañadas de frases y poemas breves, casi como haikus, que hablan de la infancia, la injusticia o la ternura. Sus muros no gritan consignas: conversan en voz baja con quien pasa. Su obra ha viajado por más de veinte países y ha llegado hasta Nueva York, donde dedicó un mural a Federico García Lorca inspirado en Poeta en Nueva York, el mismo libro que leímos hace unas sesiones.

Lo interesante no es comparar sus estilos, sino lo que cada uno significa. Banksy se esconde: borra su nombre y su cara para que solo hable el mensaje, una crítica afilada y universal lanzada desde el anonimato. El Niño de las Pinturas hace lo contrario: da la cara, es un vecino conocido y convierte el muro en un gesto íntimo, en poesía pegada a un barrio concreto. Uno provoca y denuncia; el otro emociona e invita a pensar. Uno apunta al mundo entero; el otro abraza su calle. Y, sin embargo, los dos hacen lo mismo de fondo: sacar el arte del museo, regalarlo a quien pase por allí y plantear, cada uno a su manera, una pregunta incómoda.

Porque esa es la cuestión que sigue sin resolverse: ¿de quién es la pared de una ciudad? Las calles están llenas de imágenes que nadie ha votado —anuncios gigantes, marcas, publicidad que invade la mirada— y, a la vez, se persigue a quien pinta un mensaje en un muro. ¿Dónde acaba el arte y empieza el vandalismo? ¿Importa el permiso, la intención, la belleza? Banksy y El Niño no responden con teorías, sino con muros: nos dejan delante de la pregunta y, como buen arte urbano, se marchan antes del amanecer.`,
    lexico: ["la pintada", "el grafiti", "el tag", "la plantilla", "efímero", "el anonimato", "la consigna", "hiperrealista", "íntimo", "la zona gris", "el espacio público", "la propiedad"],
    comentario: [
      "¿Dónde y cómo surgió el grafiti moderno, según el texto?",
      "¿Qué paradoja señala el texto en el caso de Banksy?",
      "¿Qué caracteriza la obra de El Niño de las Pinturas: qué pinta y qué añade a sus muros?",
      "El texto compara a Banksy y a El Niño no por su estilo, sino por su significado. ¿En qué se diferencian?",
      "¿Qué hacen «de fondo» los dos, a pesar de sus diferencias?",
    ],
    debate: [
      "¿Pintar un muro sin permiso es arte o un delito? ¿De qué depende?",
      "¿Qué te dice más: ocultarse como Banksy o dar la cara y el barrio como El Niño de las Pinturas?",
      "¿Por qué aceptamos la publicidad en el espacio público y no el grafiti?",
      "¿Hay grafitis o murales en tu ciudad? ¿Los ves como arte o como suciedad?",
    ],
    referencias: [
      { titulo: "El Niño de las Pinturas (Raúl Ruiz): su obra, Nueva York y Lorca", fuente: "Patrimonio · Universidad de Granada", url: "https://patrimonio.ugr.es/obra-del-mes/sin-titulo-el-nino-de-las-pinturas/" },
      { titulo: "Banksy: el arte urbano como protesta social", fuente: "Medialab", url: "https://medialab.news/bansky-el-arte-urbano-como-protesta-social/" },
    ],
    lexicoDefs: {
      "la pintada": "Escrito o dibujo trazado sobre una pared u otro lugar público.",
      "el grafiti": "Pintada realizada sobre paredes u otras superficies en el espacio urbano.",
      "el tag": "Firma personal usada por los grafiteros como marca de identidad.",
      "la plantilla": "Figura recortada en cartulina u otro material que sirve de guía para reproducir una forma.",
      "efímero": "Pasajero, de muy corta duración.",
      "el anonimato": "Estado o condición de quien no da a conocer su nombre o identidad.",
      "la consigna": "Lema o mensaje que resume la posición o reivindicación de un grupo.",
      "hiperrealista": "Que imita la realidad con una exactitud extrema; perteneciente al hiperrealismo.",
      "íntimo": "Muy interior; perteneciente al ámbito personal y reservado.",
      "la zona gris": "Ámbito de ambigüedad donde no está claro si algo es lícito o correcto.",
      "el espacio público": "Lugar de uso colectivo al que todos tienen acceso: calles, plazas, parques.",
      "la propiedad": "Derecho de poseer algo y disponer de ello dentro de los límites legales.",
    },
    video: { src: "https://www.youtube.com/embed/0ls8CkCZ-L0?si=lrhu98cUTCgc37zy", titulo: "El Niño de las Pinturas · Raúl Ruiz y su obra en Granada" },
    imagen: { src: "/lorca-banksy.jpeg", pie: "Federico García Lorca al estilo Banksy" },
    tarea: "Fotografía (o recuerda) un grafiti o un mural de tu ciudad. En 200–250 palabras, descríbelo y argumenta si para ti es arte o vandalismo, explicando tus criterios. Después, di a cuál de los dos se parece más en su significado —la denuncia anónima de Banksy o la poesía de barrio de El Niño de las Pinturas— y por qué.",
  },
  {
    n: 10,
    titulo: "«Hable con ella» de Almodóvar",
    obra: "Pedro Almodóvar · España, 2001",
    nudo: "¿Puede el cine hablar donde las palabras fallan?",
    lectura: `El telón de rosas color salmón se abre para mostrar un espectáculo de la coreógrafa alemana Pina Bausch: Café Müller. Entre el público, dos hombres sentados por casualidad uno al lado del otro observan la escena en silencio. Uno, Benigno, es un joven enfermero. El otro, Marco, es un escritor de cuarenta y pocos años. Los dos lloran. No se conocen. Así empieza Hable con ella (2001), el largometraje con el que Pedro Almodóvar ganó el Óscar al mejor guión original en 2003 —la primera vez que un director español lograba ese reconocimiento—, y con el que estuvo nominado también al mejor director.

La película narra la historia de estos dos hombres y las dos mujeres a las que cuidan: Alicia, una estudiante de ballet que yace en coma en la clínica donde Benigno trabaja; y Lydia, una torera que también ha quedado inconsciente tras una cogida en la plaza. Entre las cuatro historias, Almodóvar construye una meditación sobre la soledad, la amistad y la incomunicación, donde los monólogos ante alguien que no puede responder se convierten, paradójicamente, en la forma más íntima de diálogo.

El propio director ha escrito sobre su película con una lucidez poco común: «Hable con ella es una historia sobre la amistad de dos hombres, sobre la soledad, y la larga convalecencia de las heridas provocadas por la pasión. Es también una película sobre la incomunicación de las parejas, y sobre la comunicación. Sobre el cine como tema de conversación. Sobre cómo los monólogos ante una persona silente pueden ser una forma eficaz de diálogo. Del silencio como elocuencia del cuerpo, del cine como vehículo ideal en las relaciones de las personas, de cómo el cine contado en palabras detiene el tiempo y se instala en las vidas de quien lo cuenta y del que lo escucha.»

En el centro emocional de la película está la canción «Cucurrucucú paloma», del mexicano Tomás Méndez, interpretada por el cantante brasileño Caetano Veloso en una escena que muchos consideran una de las más hermosas del cine español reciente. La elección no es casual: Almodóvar trabaja siempre con la música como si fuera otro personaje, capaz de decir lo que los actores no pueden articular. Una canción de desamor mexicana, cantada por una voz brasileña, en una película española: ese cruce de tradiciones resume mucho del universo almodovariano.

La película plantea además preguntas éticas que no tienen respuesta fácil. ¿Tiene derecho alguien a cuidar a quien no puede decidir sobre ese cuidado? ¿Dónde termina la ternura y dónde empieza la invasión? Almodóvar no responde con juicios; retrata con una mezcla de compasión e ironía que obliga al espectador a posicionarse solo. Para el propio director, hablar con quien no puede oírte es también «una película sobre la alegría de narrar y sobre la palabra como arma para huir de la soledad, la enfermedad, la muerte y la locura». Esa incomodidad productiva es quizá su mayor logro: nos fuerza a hablar sobre lo que normalmente callamos.`,
    lexico: ["el telón", "el coma", "la convalecencia", "la cogida", "el monólogo", "la persona silente", "la incomunicación", "la ternura", "la torera", "el guión original", "el enfermero", "la elocuencia"],
    comentario: [
      "¿Qué tienen en común Benigno y Marco en la primera escena de la película?",
      "¿A quiénes cuidan los dos protagonistas y qué circunstancia comparten las dos mujeres?",
      "Según el texto de Almodóvar, ¿cómo pueden los monólogos ante alguien en silencio convertirse en diálogo?",
      "¿Por qué crees que Almodóvar eligió una canción mexicana cantada por un brasileño para una escena clave de su película española?",
      "¿Qué pregunta ética plantea la relación de Benigno con Alicia? Explícala con tus propias palabras.",
    ],
    debate: [
      "¿Crees que Marco tiene derecho a cuidar de Lydia durante su convalecencia sin que ella pueda decidirlo? ¿Y Benigno con Alicia?",
      "¿Hablarle a alguien que no puede escucharte tiene sentido? ¿Lo has hecho alguna vez?",
      "La película mezcla ternura y perturbación en los mismos personajes: ¿el cine tiene el deber de juzgar moralmente a sus protagonistas?",
      "¿Conoces canciones de otro país o idioma que te emocionen especialmente? ¿Por qué crees que ocurre eso?",
    ],
    video: { src: "https://www.youtube.com/embed/hwRNWQ2FwvQ?si=gSxkjhegQ0goRPDz", titulo: "«Cucurrucucú paloma» · Caetano Veloso en Hable con ella" },
    referencias: [
      { titulo: "Hable con ella — ficha completa", fuente: "FilmAffinity", url: "https://www.filmaffinity.com/es/film780724.html" },
      { titulo: "«Cucurrucucú paloma» — letra y contexto", fuente: "Cancioneros.com", url: "https://www.cancioneros.com/nc/18816/0/cucurrucucu-paloma-tomas-mendez" },
    ],
    lexicoDefs: {
      "el telón": "Lienzo grande que puede subirse y bajarse en el escenario de un teatro.",
      "el coma": "Estado patológico de inconsciencia profunda y prolongada.",
      "la convalecencia": "Período de recuperación gradual tras una enfermedad o intervención.",
      "la cogida": "Herida que sufre un torero al ser alcanzado por el toro.",
      "el monólogo": "Discurso en que solo habla una persona. // En teatro, escena de un único personaje.",
      "la persona silente": "Persona que no habla o que guarda silencio de modo prolongado.",
      "la incomunicación": "Falta o imposibilidad de comunicación entre personas.",
      "la ternura": "Sentimiento de afecto delicado y cariñoso.",
      "la torera": "Mujer que ejerce el toreo.",
      "el guión original": "Texto escrito específicamente para una película, no adaptado de otra obra.",
      "el enfermero": "Persona que tiene por oficio asistir y cuidar a los enfermos.",
      "la elocuencia": "Facultad de expresarse de modo eficaz para convencer o emocionar.",
    },
    tarea: "Elige una de estas dos opciones. Opción A (más literaria): Almodóvar escribió un texto evocador sobre la primera escena de la película (Benigno y Marco en el teatro de Pina Bausch). Continúa ese texto añadiendo tres o cuatro líneas en el mismo estilo: impresionista, sensorial, sin explicar demasiado. Opción B (más periodística): Imagina que eres periodista y acabas de ver Hable con ella. Escribe el párrafo introductorio de una entrevista con Almodóvar: preséntalo, sitúa el contexto del Óscar y anticipa el tema central de tu conversación. En ambos casos, entre 200 y 250 palabras.",
  },
  {
    n: 11,
    titulo: "Arte, redes e inteligencia artificial",
    obra: "Imagen generada · s. XXI",
    nudo: "Autoría, original y copia.",
    lectura: `Escribes una frase en una aplicación —«un retrato al óleo de una mujer triste bajo la lluvia»— y, en segundos, aparece una imagen que parece pintada por un maestro. No has tocado un pincel ni has movido un dedo más allá del teclado. La pregunta surge de inmediato: esa imagen, ¿es tuya?, ¿es arte?, ¿de quién es?

La inteligencia artificial generativa ha puesto patas arriba ideas que parecían firmes desde hace siglos. Hasta ahora dábamos por hecho que detrás de toda obra había un autor humano: alguien con una intención, una técnica y una mirada. Pero una máquina que produce miles de imágenes a partir de unas palabras no tiene intención ni conciencia. Por eso, en varios países, los tribunales y las oficinas de derechos de autor han decidido que una obra hecha íntegramente por una IA no puede registrarse a nombre de nadie: si no hay autor humano, no hay autoría que proteger.

Pero el asunto se complica enseguida. ¿Y si una persona escribe el texto, elige entre cientos de resultados, los retoca y los combina? ¿Cuánta intervención humana hace falta para que vuelva a haber «autor»? Los casos reales ya están en los tribunales, y las respuestas cambian de un país a otro. La frontera entre crear y encargar se ha vuelto borrosa.

Hay además un problema anterior, y más grave. Estas máquinas han aprendido analizando millones de imágenes hechas por artistas reales, casi siempre sin pedirles permiso ni pagarles nada. Cuando una IA imita el estilo de un ilustrador vivo, ¿lo homenajea o lo roba? Muchos creadores denuncian que su trabajo se ha usado para entrenar la herramienta que ahora amenaza con dejarlos sin empleo. Es lo que algunos llaman extractivismo cultural: tomar el trabajo de muchos para alimentar un producto del que se benefician unos pocos.

Y queda la pregunta más incómoda, la que afecta al valor mismo del arte. Si una imagen bonita se puede generar en segundos y por miles, ¿qué hace especial a una obra? Tal vez descubramos que lo que valorábamos no era solo el resultado —la imagen final—, sino el gesto humano que había detrás: el tiempo, el esfuerzo, la decisión, la vida de alguien volcada en una tela. Una copia perfecta sin autor quizá nos enseñe, por contraste, qué buscábamos en el original.

No se trata de estar a favor o en contra de la tecnología, que ya está aquí y no se irá. Se trata de decidir, como sociedad, qué reglas queremos: cómo proteger a los creadores, cómo distinguir lo humano de lo automático y qué seguimos llamando arte cuando cualquiera puede fabricar imágenes sin fin. La máquina ha respondido a muchas preguntas técnicas; las importantes, las que tienen que ver con qué valoramos, seguimos teniendo que responderlas nosotros.`,
    lexico: ["la IA generativa", "el algoritmo", "la autoría", "los derechos de autor", "registrar", "la intervención humana", "el extractivismo", "entrenar un modelo", "la copia", "el original", "el gesto", "automático"],
    comentario: [
      "¿Por qué, según el texto, una obra hecha solo por una IA no puede registrarse a nombre de nadie?",
      "¿En qué casos vuelve a ser «borrosa» la frontera de la autoría?",
      "¿Qué problema plantea el modo en que se han entrenado estas máquinas?",
      "¿Qué significa la expresión «extractivismo cultural»?",
      "¿Qué sugiere el texto que valorábamos realmente en una obra de arte?",
    ],
    debate: [
      "Una imagen generada por IA a partir de tu idea, ¿es tuya, de nadie o de la máquina?",
      "¿Debería pagarse a los artistas cuyas obras se usan para entrenar a las IA?",
      "Si una IA imita el estilo de un artista, ¿lo homenajea o lo roba?",
      "¿Cambia el valor de una obra saber que la hizo una máquina y no una persona?",
    ],
    referencias: [
      { titulo: "La inteligencia artificial frente al arte y los derechos de autor", fuente: "UOC", url: "https://www.uoc.edu/es/news/2025/inteligencia-artificial-apropiacion-indebida-arte-derechos-de-autor" },
      { titulo: "Arte, IA y derechos de autor: ¿a quién le pertenecen las obras?", fuente: "Chequeado", url: "https://chequeado.com/investigaciones/arte-inteligencia-artificial-derechos-de-autor-y-copyright-a-quien-le-pertenecen-las-obras/" },
    ],
    lexicoDefs: {
      "la IA generativa": "Sistema de inteligencia artificial capaz de crear contenido nuevo: texto, imágenes, música…",
      "el algoritmo": "Conjunto ordenado de instrucciones que sigue un sistema para resolver un problema.",
      "la autoría": "Condición de autor de una obra. // Responsabilidad creativa sobre algo.",
      "los derechos de autor": "Conjunto de derechos que protegen la creación intelectual en favor de su autor.",
      "registrar": "Inscribir una obra en un registro oficial para obtener protección legal.",
      "la intervención humana": "Participación directa de una persona en la creación o modificación de algo.",
      "el extractivismo": "Modelo que extrae recursos de modo masivo para beneficio de unos pocos, sin compensar a quienes los generan.",
      "entrenar un modelo": "Proceso de enseñar a un sistema de IA mediante grandes cantidades de datos.",
      "la copia": "Reproducción exacta o muy fiel de un original.",
      "el original": "Obra primera de la que se hacen reproducciones. // Lo que no es imitación.",
      "el gesto": "Movimiento expresivo del cuerpo. // Acción significativa que revela intención o valor.",
      "automático": "Que funciona por sí solo, sin intervención directa de una persona.",
    },
    tarea: "Busca dos imágenes sobre un mismo tema: una hecha por una persona y otra generada por IA (o genera tú una). En 200–250 palabras, compáralas: ¿notas la diferencia?, ¿cuál te emociona más y por qué?, ¿importa quién (o qué) la hizo? Defiende tu postura sobre si una imagen creada por IA puede considerarse arte.",
  },
  {
    n: 12,
    titulo: "¿De quién es el arte?",
    obra: "Museos, restitución y acceso",
    nudo: "Debate de cierre del curso.",
    lectura: `Llegamos a la última sesión, y lo hacemos con una pregunta que recoge muchas de las anteriores: ¿de quién es el arte? A lo largo del curso hemos visto obras que cambiaban de dueño, de sentido y de lugar. Ahora miramos el sitio donde guardamos casi todo ese arte —el museo— y descubrimos que tampoco él es un lugar neutral.

Los grandes museos europeos están llenos de objetos llegados de muy lejos: esculturas griegas, bronces africanos, momias egipcias, tesoros americanos. Muchos no llegaron comprándolos, sino tomándolos. Los bronces de Benín, por ejemplo, fueron saqueados por tropas británicas en 1897 y repartidos por museos de medio mundo. Los mármoles del Partenón fueron arrancados de Atenas a comienzos del siglo XIX y siguen en Londres. Durante generaciones, estos objetos se exhibieron como trofeos, con una cartela que daba su nombre y su fecha, pero no contaba cómo habían llegado allí.

En los últimos años, los países de origen reclaman cada vez con más fuerza la devolución de lo que les quitaron, y algunos museos han empezado a responder. Francia devolvió obras a Benín y Senegal; Alemania y los Países Bajos han iniciado restituciones; el Vaticano entregó a Atenas fragmentos del Partenón. Otros, como el Museo Británico, se resisten y proponen, a lo sumo, «préstamos». A este movimiento de revisar el pasado colonial de las colecciones se le llama «descolonizar el museo».

El debate es genuino y tiene dos caras. Quienes piden la devolución argumentan que esos objetos forman parte de la identidad de un pueblo y que conservarlos es perpetuar un robo: ningún país debería tener que viajar al extranjero para ver su propio patrimonio. Quienes se resisten responden que los grandes museos universales permiten que cualquiera, en un solo lugar, conozca el arte de toda la humanidad, y que algunas piezas estarían peor protegidas en sus lugares de origen. Hay incluso un punto intermedio: que una adquisición fuera legal según las leyes de su época no la hace, hoy, moralmente aceptable.

Detrás de todo ello late una pregunta que nos acompaña desde la primera sesión, cuando hablábamos de quién tenía derecho a mirar y a representar. El arte, ¿pertenece a quien lo creó, a quien lo posee, al país que lo vio nacer o a toda la humanidad? ¿Es el museo un lugar de conocimiento compartido o un almacén de botín? Probablemente no haya una respuesta única, y por eso vale la pena discutirlo entre todos.

Cerramos el curso como lo empezamos: ante una obra de arte y con más preguntas que certezas. Quizá sea eso lo que mejor hace el arte —y la cultura que hemos recorrido estas doce sesiones—: no darnos respuestas cómodas, sino obligarnos a pensar, a hablar y a escucharnos. Que la conversación siga fuera de clase.`,
    lexico: ["el museo", "la colección", "el saqueo", "el expolio", "la restitución", "la devolución", "descolonizar", "la cartela", "el botín", "perpetuar", "el préstamo", "universal"],
    comentario: [
      "¿Por qué dice el texto que el museo «tampoco es un lugar neutral»?",
      "¿Qué ejemplos de objetos saqueados menciona y cómo llegaron a Europa?",
      "¿Qué significa «descolonizar el museo» y qué países han empezado a hacerlo?",
      "Resume los dos argumentos enfrentados sobre la devolución.",
      "¿Con qué sesión del curso enlaza el texto y por qué?",
    ],
    debate: [
      "¿Deben los museos devolver las obras que se llevaron en contextos coloniales?",
      "¿Es mejor ver el arte de toda la humanidad reunido en un gran museo o repartido en sus países de origen?",
      "Que algo fuera legal en su época, ¿lo hace justo hoy?",
      "De todo lo que hemos visto en el curso: el arte, ¿de quién es?",
    ],
    referencias: [
      { titulo: "Cómo descolonizar un museo: de revisar el colonialismo a devolver lo robado", fuente: "Newtral", url: "https://www.newtral.es/descolonizar-museo/20240125/" },
      { titulo: "Descolonizar el arte: Europa y España frente a la restitución", fuente: "Artisting", url: "https://artisting.es/descolonizar-el-arte-europa-y-espana-frente-a-la-restitucion-de-obras-coloniales/" },
    ],
    lexicoDefs: {
      "el museo": "Institución que conserva, exhibe e investiga objetos de valor artístico, histórico o científico.",
      "la colección": "Conjunto de objetos reunidos por su valor, interés o similitud.",
      "el saqueo": "Robo con violencia de los bienes de una ciudad, institución o persona.",
      "el expolio": "Despojo o sustracción de bienes, especialmente en contextos de conquista o colonialismo.",
      "la restitución": "Acción de devolver algo a quien lo poseía antes.",
      "la devolución": "Acto de restituir algo a su dueño o lugar de origen.",
      "descolonizar": "Liberar a un país o institución de las estructuras e influencias del colonialismo.",
      "la cartela": "Rótulo o etiqueta que identifica y describe un objeto expuesto en un museo.",
      "el botín": "Conjunto de bienes tomados al enemigo o arrebatados por la fuerza.",
      "perpetuar": "Hacer que algo dure indefinidamente o por mucho tiempo.",
      "el préstamo": "Cesión temporal de algo a alguien con la obligación de devolverlo.",
      "universal": "Que pertenece o se extiende a todo el mundo o a la totalidad de los seres.",
    },
    tarea: "Elige la sesión del curso que más te haya marcado. En 250–300 palabras, explica por qué, qué aprendiste y cómo ha cambiado tu manera de mirar el arte o la sociedad. Termina respondiendo, con tu propia voz, a la pregunta que cierra el curso: ¿de quién es el arte?",
  },
];

const ESTILOS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,400;1,9..144,500&family=Spectral:ital,wght@0,400;0,500;0,600;1,400&display=swap');

:root{
  --papel:#F2EBDD;
  --papel-2:#EAE0CC;
  --tinta:#1C1814;
  --tinta-suave:#5A5043;
  --bermellon:#B23A22;
  --azul:#27384B;
}
.app-c1 *{ box-sizing:border-box; }
.app-c1{
  font-family:'Spectral', Georgia, serif;
  color:var(--tinta);
  background-color:#F2EBDD;
  background-image:radial-gradient(rgba(28,24,20,.025) 1px, transparent 1px);
  background-size:4px 4px;
  min-height:100vh;
}
.disp{ font-family:'Fraunces', Georgia, serif; }
.app-c1 ::selection{ background:var(--bermellon); color:var(--papel); }

.fade-up{ opacity:0; transform:translateY(14px); animation:fadeUp .7s cubic-bezier(.2,.7,.2,1) forwards; }
@keyframes fadeUp{ to{ opacity:1; transform:none; } }

.cartela{ transition:transform .35s cubic-bezier(.2,.7,.2,1), box-shadow .35s, border-color .35s; }
.cartela:hover{ transform:translateY(-4px); box-shadow:0 18px 40px -22px rgba(28,24,20,.55); border-color:var(--bermellon); }
.cartela:hover .cartela-num{ color:var(--bermellon); }

.regla{ height:1px; background:#1C1814; opacity:.16; border:0; }

.lectura p{ margin:0 0 1.05em 0; line-height:1.78; font-size:1.12rem; }
.lectura p:first-child::first-letter{
  font-family:'Fraunces', serif; font-weight:600;
  float:left; font-size:3.4rem; line-height:.78;
  padding:.06em .12em 0 0; color:var(--bermellon);
}

.ref-link{ transition:color .2s, border-color .2s; }
.ref-link:hover{ color:var(--bermellon); border-color:var(--bermellon); }

.lexico-chip:hover{ background:var(--azul) !important; color:var(--papel) !important; border-color:var(--azul) !important; }
.lexico-chip--def:hover .lexico-chip{ background:var(--azul); color:var(--papel); }
`;

function LexicoChip({ word, def }) {
  const [open, setOpen] = useState(false);
  const [tip, setTip] = useState({ left: 0, bottom: 0, arrowLeft: 120 });
  const chipRef = useRef(null);
  const closeTimer = useRef(null);

  const cleaned = word.replace(/^(el|la|los|las|lo)\s+/i, "").trim();
  const isMultiWord = /[\s/]/.test(cleaned);
  const raeUrl = isMultiWord ? null : `https://dle.rae.es/?w=${encodeURIComponent(cleaned)}`;

  function calcTip() {
    if (!chipRef.current) return;
    const r = chipRef.current.getBoundingClientRect();
    const W = 240;
    const raw = r.left + r.width / 2 - W / 2;
    const clamped = Math.max(8, Math.min(raw, window.innerWidth - W - 8));
    setTip({ left: clamped, bottom: window.innerHeight - r.top + 10, arrowLeft: r.left + r.width / 2 - clamped });
  }

  function openTip()  { clearTimeout(closeTimer.current); calcTip(); setOpen(true); }
  function closeTip() { closeTimer.current = setTimeout(() => setOpen(false), 120); }
  function keepOpen() { clearTimeout(closeTimer.current); }

  if (!def) {
    const chipStyle = { display: "inline-block", fontSize: ".88rem", background: "var(--papel-2)", padding: "4px 11px", borderRadius: 20, color: "var(--azul)", border: "1px solid transparent", transition: "background .2s, border-color .2s, color .2s" };
    return raeUrl
      ? <a href={raeUrl} target="_blank" rel="noreferrer" className="lexico-chip" style={{ ...chipStyle, textDecoration: "none" }}>{word}</a>
      : <span className="lexico-chip" style={chipStyle}>{word}</span>;
  }
  return (
    <span ref={chipRef} style={{ display: "inline-block" }}>
      <span
        className="lexico-chip lexico-chip--def"
        onClick={() => { open ? setOpen(false) : openTip(); }}
        onMouseEnter={openTip}
        onMouseLeave={closeTip}
        style={{ display: "inline-block", fontSize: ".88rem", background: "var(--papel-2)", padding: "4px 11px", borderRadius: 20, color: "var(--azul)", border: "1px solid transparent", transition: "background .2s, border-color .2s, color .2s", cursor: "pointer", userSelect: "none" }}
      >
        {word}<span style={{ marginLeft: 5, fontSize: ".7em", opacity: .45, fontFamily: "sans-serif" }}>?</span>
      </span>
      {open && (
        <span
          onMouseEnter={keepOpen}
          onMouseLeave={closeTip}
          style={{ position: "fixed", left: tip.left, bottom: tip.bottom, width: 240, background: "var(--tinta)", color: "var(--papel)", padding: "12px 14px", borderRadius: 6, fontSize: ".82rem", lineHeight: 1.6, zIndex: 9999, boxShadow: "0 8px 28px rgba(28,24,20,.45)", display: "block" }}>
          <span style={{ fontStyle: "italic", opacity: .55, fontSize: ".72rem", display: "block", marginBottom: 5, letterSpacing: ".06em" }}>RAE</span>
          {def}
          {raeUrl && (
            <a href={raeUrl} target="_blank" rel="noreferrer"
              style={{ display: "block", marginTop: 8, fontSize: ".75rem", color: "var(--bermellon)", textDecoration: "none", opacity: .85 }}>
              Ver en RAE →
            </a>
          )}
          <span style={{ position: "absolute", top: "100%", left: tip.arrowLeft, transform: "translateX(-50%)", borderWidth: 6, borderStyle: "solid", borderColor: "var(--tinta) transparent transparent transparent", display: "block", width: 0, height: 0 }} />
        </span>
      )}
    </span>
  );
}

function Sello({ texto, color }) {
  return (
    <span className="disp" style={{ display: "inline-block", fontSize: ".62rem", letterSpacing: ".22em", textTransform: "uppercase", padding: "4px 10px", border: `1px solid ${color}`, color, borderRadius: "2px" }}>
      {texto}
    </span>
  );
}

function Portada({ ir }) {
  return (
    <div style={{ maxWidth: 1120, margin: "0 auto", padding: "clamp(28px,5vw,72px) clamp(20px,4vw,48px)" }}>
      <header className="fade-up" style={{ marginBottom: "clamp(36px,5vw,64px)" }}>
        <div style={{ display: "flex", gap: 10, marginBottom: 22 }}>
          <Sello texto="C1 · Avanzado" color="var(--bermellon)" />
          <Sello texto="12 sesiones" color="var(--azul)" />
        </div>
        <h1 className="disp" style={{ fontWeight: 600, lineHeight: .98, margin: 0, fontSize: "clamp(2.6rem,7vw,5rem)", letterSpacing: "-.01em" }}>
          Arte y sociedad<br />
          <em style={{ fontWeight: 400, color: "var(--bermellon)" }}>en la cultura hispánica</em>
        </h1>
        <p style={{ maxWidth: 640, marginTop: 22, fontSize: "1.18rem", lineHeight: 1.6, color: "var(--tinta-suave)" }}>
          Cada día partimos de una obra, leemos un texto, lo comentamos y abrimos el
          debate. Doce miradas para hablar, leer y discutir en español.
        </p>
      </header>

      <div className="fade-up" style={{ animationDelay: ".1s", display: "flex", alignItems: "center", gap: 16, marginBottom: 26 }}>
        <span className="disp" style={{ fontSize: ".72rem", letterSpacing: ".26em", textTransform: "uppercase", color: "var(--tinta-suave)" }}>Índice del curso</span>
        <hr className="regla" style={{ flex: 1 }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(248px,1fr))", gap: 18 }}>
        {SESIONES.map((s, i) => (
          <button key={s.n} onClick={() => ir(i)} className="cartela fade-up"
            style={{ animationDelay: `${0.12 + i * 0.04}s`, textAlign: "left", cursor: "pointer", background: "rgba(255,253,247,.55)", border: "1px solid rgba(28,24,20,.18)", borderRadius: 6, padding: "20px 20px 22px", display: "flex", flexDirection: "column", gap: 10, minHeight: 168 }}>
            <span className="cartela-num disp" style={{ fontSize: "2.1rem", fontWeight: 600, lineHeight: 1, color: "var(--tinta)", transition: "color .3s" }}>{String(s.n).padStart(2, "0")}</span>
            <span className="disp" style={{ fontSize: "1.18rem", fontWeight: 600, lineHeight: 1.15 }}>{s.titulo}</span>
            <span style={{ fontSize: ".82rem", color: "var(--tinta-suave)", fontStyle: "italic" }}>{s.obra}</span>
            <span style={{ marginTop: "auto", fontSize: ".9rem", color: "var(--azul)", lineHeight: 1.35 }}>{s.nudo}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function Bloque({ etiqueta, color, tiempo, children }) {
  return (
    <section style={{ marginBottom: 40 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
        <Sello texto={etiqueta} color={color} />
        {tiempo && <span style={{ fontSize: ".8rem", color: "var(--tinta-suave)", fontStyle: "italic" }}>{tiempo}</span>}
        <hr className="regla" style={{ flex: 1 }} />
      </div>
      {children}
    </section>
  );
}

function ListaPreguntas({ items, color }) {
  return (
    <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
      {items.map((q, i) => (
        <li key={i} style={{ display: "flex", gap: 14, alignItems: "baseline" }}>
          <span className="disp" style={{ fontSize: "1.05rem", fontWeight: 600, color, flexShrink: 0 }}>{i + 1}</span>
          <span style={{ fontSize: "1.06rem", lineHeight: 1.5 }}>{q}</span>
        </li>
      ))}
    </ol>
  );
}

function Sesion({ idx, ir }) {
  const s = SESIONES[idx];
  const hayMaterial = !!s.lectura;
  const anterior = idx > 0 ? idx - 1 : null;
  const siguiente = idx < SESIONES.length - 1 ? idx + 1 : null;

  useEffect(() => { window.scrollTo(0, 0); }, [idx]);

  return (
    <div style={{ maxWidth: 760, margin: "0 auto", padding: "clamp(22px,4vw,52px) clamp(20px,4vw,40px)" }}>
      <button onClick={() => ir(null)} className="disp"
        style={{ background: "none", border: "none", cursor: "pointer", color: "var(--tinta-suave)", fontSize: ".78rem", letterSpacing: ".18em", textTransform: "uppercase", marginBottom: 30, padding: 0 }}>
        ← Índice del curso
      </button>

      <header className="fade-up" style={{ marginBottom: 38 }}>
        <span className="disp" style={{ fontSize: "1rem", fontWeight: 600, color: "var(--bermellon)", letterSpacing: ".1em" }}>Sesión {String(s.n).padStart(2, "0")}</span>
        <h1 className="disp" style={{ fontWeight: 600, fontSize: "clamp(2rem,5.5vw,3.1rem)", lineHeight: 1.04, margin: "10px 0 12px" }}>{s.titulo}</h1>
        <p style={{ fontStyle: "italic", color: "var(--tinta-suave)", fontSize: "1.05rem", margin: 0 }}>{s.obra}</p>
      </header>

      {hayMaterial ? (
        <>
          <Bloque etiqueta="Lectura" color="var(--tinta)" tiempo="≈ 15 min">
            <div className="lectura">{s.lectura.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}</div>
            {s.imagen && (
              <figure style={{ margin: "24px 0 0", padding: 0 }}>
                <img src={s.imagen.src} alt={s.imagen.pie} style={{ width: "100%", borderRadius: 6, display: "block" }} />
                {s.imagen.pie && <figcaption className="disp" style={{ fontSize: ".78rem", color: "var(--tinta-suave)", marginTop: 8, fontStyle: "italic", letterSpacing: ".04em" }}>{s.imagen.pie}</figcaption>}
              </figure>
            )}
            <div style={{ marginTop: 20, display: "flex", flexWrap: "wrap", gap: 8 }}>
              {s.lexico.map((w) => (
                <LexicoChip key={w} word={w} def={s.lexicoDefs?.[w]} />
              ))}
            </div>
          </Bloque>

          <Bloque etiqueta="Comentario del texto" color="var(--azul)" tiempo="≈ 15 min">
            <ListaPreguntas items={s.comentario} color="var(--azul)" />
          </Bloque>

          <Bloque etiqueta="Debate" color="var(--bermellon)" tiempo="≈ 25 min">
            <p style={{ fontStyle: "italic", fontSize: "1.15rem", marginTop: 0, marginBottom: 18, color: "var(--tinta)" }}>{s.nudo}</p>
            <ListaPreguntas items={s.debate} color="var(--bermellon)" />
            {s.video && (
              <div style={{ marginTop: 24 }}>
                <div className="disp" style={{ fontSize: ".7rem", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--bermellon)", marginBottom: 10 }}>{s.video.titulo}</div>
                <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, borderRadius: 6, overflow: "hidden", background: "#000" }}>
                  <iframe
                    src={s.video.src}
                    title={s.video.titulo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
                  />
                </div>
              </div>
            )}
            {s.referencias && (
              <div style={{ marginTop: 24, background: "rgba(39,56,75,.05)", borderLeft: "2px solid var(--azul)", padding: "16px 18px", borderRadius: "0 4px 4px 0" }}>
                <div className="disp" style={{ fontSize: ".7rem", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--azul)", marginBottom: 12 }}>Para preparar el debate</div>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {s.referencias.map((r) => (
                    <li key={r.url}>
                      <a href={r.url} target="_blank" rel="noreferrer" className="ref-link" style={{ color: "var(--tinta)", textDecoration: "none", borderBottom: "1px solid rgba(28,24,20,.3)", paddingBottom: 1, fontSize: "1.02rem" }}>{r.titulo}</a>
                      <span style={{ fontSize: ".85rem", color: "var(--tinta-suave)", fontStyle: "italic" }}> — {r.fuente}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Bloque>

          <Bloque etiqueta="Tarea para casa" color="var(--tinta)" tiempo="producción escrita">
            <div style={{ background: "rgba(178,58,34,.06)", border: "1px solid rgba(178,58,34,.25)", borderRadius: 6, padding: "20px 22px", fontSize: "1.08rem", lineHeight: 1.65 }}>
              {s.tarea}
            </div>
          </Bloque>
        </>
      ) : (
        <Bloque etiqueta="Material" color="var(--azul)">
          <p style={{ fontStyle: "italic", fontSize: "1.15rem", marginTop: 0, marginBottom: 18 }}>{s.nudo}</p>
          <div style={{ border: "1px dashed rgba(28,24,20,.3)", borderRadius: 6, padding: "26px 22px", color: "var(--tinta-suave)", fontStyle: "italic", fontSize: "1.02rem", lineHeight: 1.55 }}>
            Texto, léxico, preguntas y tarea en preparación. Esta sesión ya tiene definidos
            su obra y su nudo de debate; el material lo añadiremos juntos.
          </div>
        </Bloque>
      )}

      <hr className="regla" style={{ margin: "10px 0 26px" }} />
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
        <button onClick={() => anterior !== null && ir(anterior)} disabled={anterior === null} className="disp"
          style={{ background: "none", border: "none", cursor: anterior === null ? "default" : "pointer", color: anterior === null ? "rgba(28,24,20,.25)" : "var(--tinta)", fontSize: ".9rem", padding: 0, textAlign: "left" }}>
          {anterior !== null ? `← ${SESIONES[anterior].titulo}` : ""}
        </button>
        <button onClick={() => siguiente !== null && ir(siguiente)} disabled={siguiente === null} className="disp"
          style={{ background: "none", border: "none", cursor: siguiente === null ? "default" : "pointer", color: siguiente === null ? "rgba(28,24,20,.25)" : "var(--tinta)", fontSize: ".9rem", padding: 0, textAlign: "right" }}>
          {siguiente !== null ? `${SESIONES[siguiente].titulo} →` : ""}
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [idx, setIdx] = useState(null);
  return (
    <div className="app-c1">
      <style>{ESTILOS}</style>
      {idx === null ? <Portada ir={setIdx} /> : <Sesion idx={idx} ir={setIdx} />}
      <footer style={{ borderTop: "1px solid rgba(28,24,20,.14)", marginTop: 20 }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "20px clamp(20px,4vw,48px)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
          <span className="disp" style={{ fontSize: ".82rem", color: "var(--tinta-suave)" }}>Javier Benítez · Centro de Lenguas Modernas, UGR</span>
          <span className="disp" style={{ fontSize: ".95rem", color: "var(--bermellon)", letterSpacing: ".1em" }}>[|]</span>
        </div>
      </footer>
    </div>
  );
}
