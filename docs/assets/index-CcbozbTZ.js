(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/assets/home-hero-DuGpXCHf.jpg`,t=`/assets/about-hero-ChYvXhoB.jpg`,n=`/assets/about-studio-CeIRii79.jpg`,r=`/assets/service-architecture-YWmJCoqh.jpg`,i=`/assets/service-executive-projects-BOnroJsj.jpg`,a=`/assets/service-interior-design-CZLgy10J.jpg`,o=`/assets/service-remodeling-jdZC7dNu.jpg`,s=`/assets/service-construction-CMQLWYo2.jpg`,c=`/assets/service-supervision-xKr2akx6.jpg`,l=`/assets/cover-DnFTI00b.jpg`,u=`/assets/detail-01-CoJuAajl.jpg`,d=`/assets/detail-02-CviTT2xT.jpg`,f=`/assets/cover-z9VeEKae.jpg`,p=`/assets/detail-01-DSMUQHDV.jpg`,m=`/assets/cover-xkX-szpU.jpg`,h=`/assets/cover-B_Gmv6m5.jpg`,g=`/assets/cover-Ca3TXK_K.jpg`,_=`/assets/detail-01-v3anyEMP.jpg`,v=`/assets/cover-DZ5iA2FS.jpg`,y=`/assets/detail-01-Dzcj3dQP.jpg`,b=`/assets/detail-01-DydJJJS4.jpg`,x=`/assets/cover-9ISSnQ7Y.jpg`,S=`/assets/cover-CGCW-yjg.jpg`,C=`/assets/detail-02-i-1nQzJD.jpg`,w=`/assets/cover-CGCW-yjg.jpg`,T=`/assets/detail-01-v3anyEMP.jpg`,E=`/assets/detail-02-i-1nQzJD.jpg`,D=`/assets/cover-CldRcJcp.jpg`,O=`/assets/detail-01-DydJJJS4.jpg`,k=`/assets/detail-01-DSMUQHDV.jpg`,A=`/assets/cover-Ca3TXK_K.jpg`,j=`/assets/cover-B_Gmv6m5.jpg`,M=`/assets/detail-02-i-1nQzJD.jpg`,N=`/assets/cover-xkX-szpU.jpg`,P=`/assets/detail-01-Dzcj3dQP.jpg`,F=`/assets/cover-DZ5iA2FS.jpg`,I=[{id:`arquitectura`,name:`Arquitectura`,shortName:`Arquitectura`,image:r,description:`Diseñamos espacios que responden a su entorno y a la forma en que serán habitados. Cada propuesta equilibra funcionalidad, identidad y una visión arquitectónica duradera.`,introduction:`De la primera intuición al espacio construido, desarrollamos proyectos residenciales y comerciales que integran contexto, estructura y experiencia. Nuestro proceso convierte necesidades concretas en una arquitectura clara y sensible.`,stages:[`Diagnóstico del sitio`,`Concepto y anteproyecto`,`Desarrollo arquitectónico`,`Coordinación integral`]},{id:`proyectos-ejecutivos`,name:`Proyectos ejecutivos`,shortName:`Proyecto ejecutivo`,image:i,description:`Traducimos una idea en planos, especificaciones y soluciones constructivas precisas para que cada etapa de la obra avance con claridad y control.`,introduction:`Documentamos cada decisión necesaria para construir con certeza. Coordinamos arquitectura, instalaciones, detalles, materiales y catálogos para reducir imprevistos durante la ejecución.`,stages:[`Levantamiento`,`Planos constructivos`,`Coordinación técnica`,`Catálogo de conceptos`]},{id:`diseno-interiores`,name:`Diseño de interiores`,shortName:`Interiorismo`,image:a,description:`Creamos atmósferas coherentes mediante materiales, iluminación, mobiliario y color, siempre pensando en el uso cotidiano de cada espacio.`,introduction:`Entendemos el interior como una extensión de quienes lo habitan. Diseñamos recorridos, mobiliario, iluminación y paletas materiales que construyen una experiencia unificada.`,stages:[`Concepto espacial`,`Materialidad`,`Iluminación`,`Mobiliario y detalle`]},{id:`remodelaciones`,name:`Remodelaciones`,shortName:`Remodelación`,image:o,description:`Reinterpretamos espacios existentes para mejorar su distribución, desempeño y carácter, aprovechando al máximo aquello que ya funciona.`,introduction:`Partimos de una lectura cuidadosa de lo existente para detectar oportunidades. Conservamos lo valioso, corregimos limitaciones y damos una nueva vida al espacio con intervenciones precisas.`,stages:[`Evaluación del inmueble`,`Estrategia de intervención`,`Proyecto y presupuesto`,`Ejecución por etapas`]},{id:`construccion`,name:`Construcción`,shortName:`Construcción`,image:s,description:`Coordinamos la ejecución integral del proyecto con procesos ordenados, comunicación constante y especial atención a cada detalle.`,introduction:`Convertimos el proyecto en obra mediante una planeación transparente, equipos especializados y seguimiento continuo. Cuidamos tiempo, costo y calidad con la misma atención.`,stages:[`Planeación`,`Presupuesto y contratos`,`Ejecución`,`Entrega y cierre`]},{id:`supervision-obra`,name:`Supervisión de obra`,shortName:`Supervisión`,image:c,description:`Verificamos calidad, tiempos y apego al proyecto para anticipar decisiones y mantener el resultado final fiel a la intención de diseño.`,introduction:`Acompañamos la construcción con visitas, reportes y revisiones técnicas. Nuestra supervisión mantiene alineados a diseñadores, contratistas y cliente.`,stages:[`Programa de visitas`,`Control de calidad`,`Reportes de avance`,`Validación de entrega`]}],L={heroImage:e,services:I,projects:[{id:1,slug:`casa-umbral`,name:`Casa Umbral`,serviceId:`diseno-interiores`,location:`Ciudad de México`,year:`2026`,cover:l,gallery:[l,u,d,u,l,d],description:`Una residencia concebida como refugio urbano, donde la luz indirecta y una paleta oscura definen espacios serenos para la convivencia cotidiana.`,problem:`La vivienda tenía áreas desconectadas y poca continuidad visual, además de requerir soluciones de almacenamiento sin saturar los espacios.`,solution:`Unificamos materiales, integramos mobiliario a medida y usamos la iluminación como hilo conductor para articular las distintas áreas de la casa.`},{id:2,slug:`patio-luz`,name:`Patio Luz`,serviceId:`remodelaciones`,location:`Querétaro`,year:`2025`,cover:f,gallery:[f,p,m,p,m,f],description:`La remodelación transforma un espacio de circulación en el centro vivo de la casa mediante vegetación, textura y luz natural.`,problem:`El acceso era oscuro y funcionaba únicamente como paso, sin relación con las áreas sociales ni con el jardín de la vivienda.`,solution:`Abrimos visuales, incorporamos un jardín interior y diseñamos una secuencia de materiales cálidos que acompaña el recorrido.`},{id:3,slug:`residencia-encino`,name:`Residencia Encino`,serviceId:`arquitectura`,location:`Valle de Bravo`,year:`2025`,cover:h,gallery:[h,g,_,g,h,_],description:`Una casa abierta al paisaje que combina proporciones generosas, materiales naturales y una distribución flexible para recibir a la familia.`,problem:`El terreno pedía aprovechar las vistas sin comprometer privacidad ni confort térmico durante las distintas estaciones del año.`,solution:`Orientamos los volúmenes hacia el paisaje, generamos patios protegidos y usamos aleros para controlar la entrada directa del sol.`},{id:4,slug:`casa-norte`,name:`Casa Norte`,serviceId:`arquitectura`,location:`Monterrey`,year:`2024`,cover:v,gallery:[v,y,b,y,v,b],description:`Dos volúmenes sobrios enmarcan el acceso y protegen los interiores, construyendo una presencia contundente sobre una calle residencial.`,problem:`La orientación y el clima exigían reducir la ganancia térmica sin perder iluminación natural ni contacto con el exterior.`,solution:`Diseñamos fachadas profundas, celosías y aperturas estratégicas que equilibran sombra, ventilación y privacidad.`},{id:5,slug:`cocina-linea`,name:`Cocina Línea`,serviceId:`diseno-interiores`,location:`Ciudad de México`,year:`2024`,cover:x,gallery:[x,S,C,S,x,C],description:`Una cocina precisa y luminosa donde cada elemento se integra en un plano continuo para facilitar el uso y ampliar visualmente el espacio.`,problem:`El espacio existente tenía circulaciones reducidas, superficies insuficientes y equipos dispersos que complicaban las tareas diarias.`,solution:`Concentramos servicios, liberamos el área central e incorporamos una isla de trabajo que funciona también como punto de reunión.`},{id:6,slug:`casa-clara`,name:`Casa Clara`,serviceId:`remodelaciones`,location:`Puebla`,year:`2024`,cover:w,gallery:[w,T,E,T,w,E],description:`La intervención abre la vivienda a una nueva etapa, incorporando luz, superficies continuas y una atmósfera relajada.`,problem:`La distribución fragmentaba la zona social y bloqueaba la entrada de luz hacia el corazón de la casa.`,solution:`Retiramos divisiones innecesarias, alineamos circulaciones y trabajamos una paleta clara que amplifica la iluminación natural.`},{id:7,slug:`oficinas-prisma`,name:`Oficinas Prisma`,serviceId:`proyectos-ejecutivos`,location:`Ciudad de México`,year:`2023`,cover:D,gallery:[D,O,k,O,D,k],description:`Un entorno de trabajo flexible definido por transparencias, luz controlada y espacios de colaboración que se adaptan a cada jornada.`,problem:`El programa requería combinar concentración, reuniones y trabajo colectivo dentro de una planta profunda.`,solution:`Organizamos los espacios por gradientes de privacidad y coordinamos el proyecto ejecutivo para integrar instalaciones sin ruido visual.`},{id:8,slug:`casa-mar`,name:`Casa Mar`,serviceId:`construccion`,location:`Puerto Escondido`,year:`2023`,cover:A,gallery:[A,j,M,j,A,M],description:`Una vivienda de descanso construida alrededor de la brisa, las vistas y una materialidad sencilla que envejece con dignidad.`,problem:`La distancia, el clima y la logística local requerían una ejecución precisa y soluciones de bajo mantenimiento.`,solution:`Planeamos suministros por etapas, simplificamos sistemas constructivos y coordinamos equipos locales con supervisión constante.`},{id:9,slug:`pabellon-uno`,name:`Pabellón Uno`,serviceId:`supervision-obra`,location:`Estado de México`,year:`2023`,cover:N,gallery:[N,P,F,P,N,F],description:`Un pabellón silencioso que combina geometría elemental y textura para crear una experiencia de pausa dentro del paisaje.`,problem:`La precisión de encuentros y acabados era fundamental para mantener la claridad formal del proyecto original.`,solution:`Establecimos muestras, puntos de control y revisiones semanales que permitieron corregir desviaciones antes de cada cierre de obra.`},{id:10,slug:`loft-jacaranda`,name:`Loft Jacaranda`,serviceId:`diseno-interiores`,location:`Ciudad de México`,year:`2026`,cover:l,gallery:[l,u,d,S,C,u],description:`Un interior compacto organizado mediante mobiliario continuo, iluminación cálida y una selección contenida de materiales.`,problem:`La planta abierta necesitaba distinguir actividades sin perder amplitud ni bloquear el paso de la luz natural.`,solution:`Diseñamos piezas multifuncionales que ordenan el espacio y generan transiciones claras entre descanso, trabajo y convivencia.`},{id:11,slug:`casa-cobalto`,name:`Casa Cobalto`,serviceId:`arquitectura`,location:`Guadalajara`,year:`2026`,cover:h,gallery:[h,g,_,y,b,g],description:`Una vivienda de patios sucesivos que protege la intimidad y mantiene una relación constante con la vegetación.`,problem:`El terreno estrecho exigía llevar iluminación y ventilación a todas las áreas sin exponerlas hacia la calle.`,solution:`Articulamos el programa alrededor de vacíos interiores que introducen luz, aire y vistas controladas.`},{id:12,slug:`terraza-olivo`,name:`Terraza Olivo`,serviceId:`remodelaciones`,location:`Morelos`,year:`2026`,cover:f,gallery:[f,p,m,T,E,p],description:`La recuperación de una terraza convierte un espacio residual en el principal punto de encuentro de la vivienda.`,problem:`La zona exterior estaba desconectada de la casa y carecía de protección frente al sol y la lluvia.`,solution:`Extendimos la cubierta, unificamos niveles e incorporamos vegetación y superficies resistentes para uso cotidiano.`},{id:13,slug:`clinica-nube`,name:`Clínica Nube`,serviceId:`proyectos-ejecutivos`,location:`Querétaro`,year:`2026`,cover:D,gallery:[D,O,k,S,C,O],description:`Un proyecto técnico para espacios de atención serenos, eficientes y fáciles de mantener.`,problem:`El programa médico requería coordinar circulaciones, instalaciones especiales y estrictos criterios de operación.`,solution:`Desarrollamos planos y detalles integrales para resolver cada encuentro y facilitar una ejecución ordenada.`},{id:14,slug:`local-origen`,name:`Local Origen`,serviceId:`construccion`,location:`Puebla`,year:`2025`,cover:x,gallery:[x,S,C,O,d,S],description:`Un espacio comercial construido con sistemas sencillos y una materialidad directa que refuerza la identidad de la marca.`,problem:`El calendario de apertura era reducido y exigía coordinar proveedores sin comprometer los acabados principales.`,solution:`Organizamos frentes simultáneos de trabajo y definimos controles de calidad para cada etapa de ejecución.`},{id:15,slug:`casa-horizonte`,name:`Casa Horizonte`,serviceId:`supervision-obra`,location:`Valle de Bravo`,year:`2025`,cover:A,gallery:[A,j,M,g,_,j],description:`La supervisión de una casa en pendiente enfocada en conservar las visuales, la precisión estructural y los acabados naturales.`,problem:`La topografía y los accesos complicaban la secuencia de obra y el suministro de materiales.`,solution:`Coordinamos revisiones por hitos y anticipamos decisiones críticas para mantener calidad y avance continuo.`},{id:16,slug:`estudio-lienzo`,name:`Estudio Lienzo`,serviceId:`diseno-interiores`,location:`Monterrey`,year:`2025`,cover:D,gallery:[D,O,k,u,d,k],description:`Un estudio creativo flexible donde iluminación, almacenamiento y superficies de trabajo forman un sistema continuo.`,problem:`El equipo necesitaba alternar entre trabajo individual, sesiones colectivas y presentación de proyectos.`,solution:`Creamos zonas reconfigurables y mobiliario integrado para adaptar el espacio a distintos ritmos de uso.`},{id:17,slug:`casa-patio`,name:`Casa Patio`,serviceId:`arquitectura`,location:`Mérida`,year:`2025`,cover:v,gallery:[v,y,b,p,m,y],description:`Una casa tropical organizada en torno a patios sombreados que favorecen ventilación, privacidad y vida exterior.`,problem:`El clima cálido requería disminuir la exposición solar y aprovechar los vientos dominantes durante todo el año.`,solution:`Trabajamos volúmenes angostos, cubiertas profundas y vegetación para producir espacios frescos de manera pasiva.`},{id:18,slug:`oficinas-norte`,name:`Oficinas Norte`,serviceId:`proyectos-ejecutivos`,location:`Monterrey`,year:`2025`,cover:D,gallery:[D,k,O,C,S,k],description:`Documentación ejecutiva para oficinas de alta ocupación con una infraestructura flexible y acabados duraderos.`,problem:`Las distintas áreas debían compartir instalaciones y permitir cambios futuros sin detener la operación.`,solution:`Coordinamos módulos, plafones y redes técnicas para facilitar mantenimiento y futuras reconfiguraciones.`},{id:19,slug:`departamento-alba`,name:`Departamento Alba`,serviceId:`remodelaciones`,location:`Ciudad de México`,year:`2025`,cover:w,gallery:[w,T,E,S,u,E],description:`Una remodelación luminosa que reorganiza un departamento existente para una forma de vida más abierta y flexible.`,problem:`Los espacios sociales eran reducidos y la cocina permanecía aislada del resto de la vivienda.`,solution:`Integramos las áreas comunes y concentramos servicios para liberar vistas y mejorar las circulaciones.`},{id:20,slug:`restaurante-brasa`,name:`Restaurante Brasa`,serviceId:`construccion`,location:`Guadalajara`,year:`2024`,cover:f,gallery:[f,p,m,O,C,m],description:`La construcción de un restaurante cálido y directo donde cocina, sala y terraza funcionan como una sola experiencia.`,problem:`La obra debía integrar equipos especializados, ventilación y acabados artesanales dentro de un local existente.`,solution:`Coordinamos instalaciones y oficios desde una secuencia precisa que redujo interferencias durante la ejecución.`},{id:21,slug:`residencia-bosque`,name:`Residencia Bosque`,serviceId:`supervision-obra`,location:`Estado de México`,year:`2024`,cover:h,gallery:[h,_,g,P,F,_],description:`Supervisión integral de una residencia entre árboles con especial atención a estructura, impermeabilización y carpinterías.`,problem:`La humedad del sitio y la complejidad de los encuentros exigían revisar cada cierre antes de avanzar.`,solution:`Implementamos listas de control, pruebas y reportes visuales para asegurar el desempeño de cada sistema.`},{id:22,slug:`casa-arena`,name:`Casa Arena`,serviceId:`arquitectura`,location:`La Paz`,year:`2024`,cover:A,gallery:[A,j,M,y,_,M],description:`Una vivienda costera de geometría sobria que enmarca el horizonte y crea refugios frente al clima del desierto.`,problem:`El proyecto debía responder al viento, la radiación intensa y la limitada disponibilidad de agua.`,solution:`Propusimos patios protegidos, materiales de bajo mantenimiento y estrategias pasivas de sombra y ventilación.`},{id:23,slug:`galeria-central`,name:`Galería Central`,serviceId:`diseno-interiores`,location:`Ciudad de México`,year:`2024`,cover:x,gallery:[x,S,C,O,E,S],description:`Un interior neutro y adaptable diseñado para que cada exposición transforme por completo la percepción del lugar.`,problem:`La galería necesitaba soportar montajes variables, controlar la luz y mantener instalaciones fuera de la vista.`,solution:`Diseñamos superficies continuas, iluminación regulable y puntos técnicos capaces de recibir múltiples configuraciones.`},{id:24,slug:`taller-sur`,name:`Taller Sur`,serviceId:`proyectos-ejecutivos`,location:`Oaxaca`,year:`2024`,cover:N,gallery:[N,P,F,O,k,P],description:`Un proyecto ejecutivo para producción artesanal que integra áreas de trabajo, almacenamiento y exhibición.`,problem:`Los procesos requerían recorridos eficientes, ventilación natural y detalles resistentes al uso intensivo.`,solution:`Documentamos flujos, instalaciones y encuentros constructivos para ejecutar el espacio con claridad y economía.`},{id:25,slug:`casa-loma`,name:`Casa Loma`,serviceId:`remodelaciones`,location:`Cuernavaca`,year:`2023`,cover:f,gallery:[f,T,m,E,p,w],description:`Una intervención puntual que recupera la relación entre una casa de los años ochenta y su jardín.`,problem:`Ampliaciones sucesivas habían bloqueado la luz y creado desniveles difíciles de recorrer.`,solution:`Retiramos agregados, ordenamos niveles y abrimos la zona social hacia una terraza continua.`},{id:26,slug:`hotel-umbral`,name:`Hotel Umbral`,serviceId:`construccion`,location:`San Miguel de Allende`,year:`2023`,cover:l,gallery:[l,u,d,p,C,d],description:`La ejecución de un hotel de escala íntima donde cada habitación conserva identidad dentro de un lenguaje común.`,problem:`La obra combinaba una estructura existente con nuevas instalaciones y acabados elaborados por proveedores distintos.`,solution:`Coordinamos muestras, secuencias y entregas por habitación para mantener consistencia en todo el conjunto.`},{id:27,slug:`pabellon-jardin`,name:`Pabellón Jardín`,serviceId:`supervision-obra`,location:`Querétaro`,year:`2023`,cover:N,gallery:[N,P,F,g,m,F],description:`Supervisión de un pabellón ligero concebido para reuniones y actividades abiertas dentro de un jardín consolidado.`,problem:`La estructura debía ejecutarse con tolerancias precisas sin afectar la vegetación ni las circulaciones existentes.`,solution:`Planificamos accesos, revisamos prefabricados y verificamos cada montaje antes de liberar los acabados finales.`}],benefits:[{icon:`palette`,label:`Diseño funcional`},{icon:`people`,label:`Acompañamiento continuo`},{icon:`tools`,label:`Soluciones personalizadas`},{icon:`medal`,label:`Calidad en ejecución`}],testimonials:[{name:`Mariana Salas`,company:`Casa Umbral`,quote:`El equipo entendió cómo queríamos vivir el espacio y lo convirtió en una propuesta clara, cálida y funcional.`,projectSlug:`casa-umbral`},{name:`Carlos Ibarra`,company:`Patio Luz`,quote:`Nos acompañaron en cada decisión. El proceso fue transparente y el resultado superó lo que habíamos imaginado.`,projectSlug:`patio-luz`},{name:`Fernanda Ruiz`,company:`Residencia Encino`,quote:`Lograron una casa serena y práctica sin perder personalidad. Cada material tiene una razón de estar ahí.`,projectSlug:`residencia-encino`},{name:`Andrés Lozano`,company:`Casa Norte`,quote:`La coordinación de obra fue impecable. Siempre tuvimos claridad sobre avances, costos y las decisiones pendientes.`,projectSlug:`casa-norte`},{name:`Lucía Ortega`,company:`Cocina Línea`,quote:`Una intervención precisa que cambió por completo nuestra rutina. Ahora el espacio funciona tan bien como se ve.`,projectSlug:`cocina-linea`},{name:`Roberto Mena`,company:`Casa Clara`,quote:`Encontramos un estudio atento, ordenado y creativo. El proyecto conservó nuestra esencia y mejoró cada ambiente.`,projectSlug:`casa-clara`}],company:{heroImage:t,studioImage:n,history:[`ÁREA nace en el año 2013, con la convicción de que la arquitectura tiene el poder de transformar la vida de las personas, a través del espacio que ocupan o habitan.`,`A lo largo de nuestra evolución comprendimos que nuestro mayor valor no está únicamente en construir, sino en entender cómo viven, trabajan y conviven las personas, para diseñar espacios que respondan a esas necesidades.`,`Por ello, evolucionamos hacia un despacho especializado en arquitectura, diseño y remodelación, donde cada proyecto parte de una idea clara: Crear espacios funcionales, estéticos y duraderos.`],philosophy:[`Creemos que un buen proyecto no debe impresionar únicamente el día de su entrega, debe seguir funcionando diez o veinte años después.`,`Cada decisión de diseño debe tener un propósito.`,`Cada material debe responder a una necesidad.`,`Cada espacio debe mejorar la experiencia de quien lo utiliza.`,`No diseñamos para seguir tendencias, diseñamos para resolver problemas y espacios.`],mission:`Diseñar y desarrollar espacios que mejoren la calidad de vida de las personas mediante soluciones arquitectónicas funcionales, estéticas y técnicamente bien ejecutadas.`,vision:`Consolidarnos como uno de los despachos de arquitectura y diseño más reconocidos a nivel global, por la calidad de sus proyectos, la confianza que genera en sus clientes y la capacidad de transformar espacios con un enfoque humano, funcional y contemporáneo.`,values:[{title:`Honestidad`,text:`Decimos la verdad, incluso cuando no es la respuesta que el cliente espera escuchar.`},{title:`Responsabilidad`,text:`Cumplimos nuestros compromisos y asumimos las consecuencias de nuestras decisiones.`},{title:`Calidad`,text:`Preferimos hacer menos proyectos, pero hacerlos extraordinariamente bien.`},{title:`Innovación`,text:`Buscamos constantemente nuevas formas de diseñar, construir y comunicar nuestros proyectos.`},{title:`Cercanía`,text:`Escuchamos antes de proponer. Comprendemos antes de diseñar.`}],promise:[`No vendemos metros cuadrados.`,`No vendemos planos.`,`No vendemos remodelaciones.`,`Creamos espacios que funcionan mejor para las personas que los habitan.`],whatWeDo:{introduction:`En ÁREA desarrollamos proyectos integrales de arquitectura y diseño, especializados en clientes residenciales y comerciales.`,services:[`Arquitectura.`,`Proyectos ejecutivos.`,`Diseño de interiores.`,`Remodelaciones.`,`Construcción`,`Supervisión de obra.`]},manifesto:`En ÁREA creemos que la arquitectura comienza mucho antes de colocar el primer ladrillo. Comienza al escuchar, observar y comprender la vida de quienes habitarán un espacio. Cada proyecto representa una oportunidad para mejorar la manera en que las personas viven, trabajan y conviven. Diseñamos con intención, ejecutamos con responsabilidad y cuidamos cada detalle porque entendemos que un buen espacio no solo se ve bien: se vive bien.`}},ee=`data:image/svg+xml,%3csvg%20width='311'%20height='312'%20viewBox='0%200%20311%20312'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_2093_2691)'%3e%3cpath%20d='M236.5%20312V301H299V234.5H310.5V312H236.5Z'%20fill='%23F75400'/%3e%3cpath%20d='M187%20293V303H0V0H280V174H270.5V9.5H9.5V293H187Z'%20fill='%23FEFFFE'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_2093_2691'%3e%3crect%20width='310.5'%20height='312'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e`,R=`data:image/svg+xml,%3csvg%20width='763'%20height='184'%20viewBox='0%200%20763%20184'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M69%2039.5L0%20183.5H24.5L76%2075.5L125.5%20183.5H149.5L83.5%2039.5H69Z'%20fill='white'/%3e%3cpath%20d='M86%2030.5H71L88.5%200H104.5L86%2030.5Z'%20fill='white'/%3e%3cpath%20d='M232.5%2039.5H293.5C308.833%2040.6667%20339.2%2051%20338%2083C336.8%20115%20313.167%20125.667%20301.5%20127L346%20183.5H318.5L259%20109.5H293.5C301.5%20108%20317.7%2098.2%20316.5%2083C315.3%2067.8%20301.5%2060.5%20293.5%2059.5H232.5V39.5Z'%20fill='white'/%3e%3cpath%20d='M429%2056.4999V40.4999L530%2040.418V56.4999H429Z'%20fill='%23F75400'/%3e%3cpath%20d='M429%20118.5V103.5H530V118.5H429Z'%20fill='%23F75400'/%3e%3cpath%20d='M530%20167.5H429V183.5H530V167.5Z'%20fill='%23F75400'/%3e%3cpath%20d='M682%2039.5L613%20183.5H637.5L689%2075.5L738.5%20183.5H762.5L696.5%2039.5H682Z'%20fill='white'/%3e%3c/svg%3e`;function z(e=``){return`<img class="brand-mark ${e}" src="${R}" alt="ÁREA" />`}function B(){return`<img class="brand-symbol" src="${ee}" alt="" aria-hidden="true" />`}var V={eye:`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3cpath%20d='M320%20144C254.8%20144%20201.2%20173.6%20160.1%20211.7C121.6%20247.5%2095%20290%2081.4%20320C95%20350%20121.6%20392.5%20160.1%20428.3C201.2%20466.4%20254.8%20496%20320%20496C385.2%20496%20438.8%20466.4%20479.9%20428.3C518.4%20392.5%20545%20350%20558.6%20320C545%20290%20518.4%20247.5%20479.9%20211.7C438.8%20173.6%20385.2%20144%20320%20144zM127.4%20176.6C174.5%20132.8%20239.2%2096%20320%2096C400.8%2096%20465.5%20132.8%20512.6%20176.6C559.4%20220.1%20590.7%20272%20605.6%20307.7C608.9%20315.6%20608.9%20324.4%20605.6%20332.3C590.7%20368%20559.4%20420%20512.6%20463.4C465.5%20507.1%20400.8%20544%20320%20544C239.2%20544%20174.5%20507.2%20127.4%20463.4C80.6%20419.9%2049.3%20368%2034.4%20332.3C31.1%20324.4%2031.1%20315.6%2034.4%20307.7C49.3%20272%2080.6%20220%20127.4%20176.6zM320%20400C364.2%20400%20400%20364.2%20400%20320C400%20290.4%20383.9%20264.5%20360%20250.7C358.6%20310.4%20310.4%20358.6%20250.7%20360C264.5%20383.9%20290.4%20400%20320%20400zM240.4%20311.6C242.9%20311.9%20245.4%20312%20248%20312C283.3%20312%20312%20283.3%20312%20248C312%20245.4%20311.8%20242.9%20311.6%20240.4C274.2%20244.3%20244.4%20274.1%20240.5%20311.5zM286%20196.6C296.8%20193.6%20308.2%20192.1%20319.9%20192.1C328.7%20192.1%20337.4%20193%20345.7%20194.7C346%20194.8%20346.2%20194.8%20346.5%20194.9C404.4%20207.1%20447.9%20258.6%20447.9%20320.1C447.9%20390.8%20390.6%20448.1%20319.9%20448.1C258.3%20448.1%20206.9%20404.6%20194.7%20346.7C192.9%20338.1%20191.9%20329.2%20191.9%20320.1C191.9%20309.1%20193.3%20298.3%20195.9%20288.1C196.1%20287.4%20196.2%20286.8%20196.4%20286.2C208.3%20242.8%20242.5%20208.6%20285.9%20196.7z'/%3e%3c/svg%3e`,instagram:`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3cpath%20d='M320.3%20205C256.8%20204.8%20205.2%20256.2%20205%20319.7C204.8%20383.2%20256.2%20434.8%20319.7%20435C383.2%20435.2%20434.8%20383.8%20435%20320.3C435.2%20256.8%20383.8%20205.2%20320.3%20205zM319.7%20245.4C360.9%20245.2%20394.4%20278.5%20394.6%20319.7C394.8%20360.9%20361.5%20394.4%20320.3%20394.6C279.1%20394.8%20245.6%20361.5%20245.4%20320.3C245.2%20279.1%20278.5%20245.6%20319.7%20245.4zM413.1%20200.3C413.1%20185.5%20425.1%20173.5%20439.9%20173.5C454.7%20173.5%20466.7%20185.5%20466.7%20200.3C466.7%20215.1%20454.7%20227.1%20439.9%20227.1C425.1%20227.1%20413.1%20215.1%20413.1%20200.3zM542.8%20227.5C541.1%20191.6%20532.9%20159.8%20506.6%20133.6C480.4%20107.4%20448.6%2099.2%20412.7%2097.4C375.7%2095.3%20264.8%2095.3%20227.8%2097.4C192%2099.1%20160.2%20107.3%20133.9%20133.5C107.6%20159.7%2099.5%20191.5%2097.7%20227.4C95.6%20264.4%2095.6%20375.3%2097.7%20412.3C99.4%20448.2%20107.6%20480%20133.9%20506.2C160.2%20532.4%20191.9%20540.6%20227.8%20542.4C264.8%20544.5%20375.7%20544.5%20412.7%20542.4C448.6%20540.7%20480.4%20532.5%20506.6%20506.2C532.8%20480%20541%20448.2%20542.8%20412.3C544.9%20375.3%20544.9%20264.5%20542.8%20227.5zM495%20452C487.2%20471.6%20472.1%20486.7%20452.4%20494.6C422.9%20506.3%20352.9%20503.6%20320.3%20503.6C287.7%20503.6%20217.6%20506.2%20188.2%20494.6C168.6%20486.8%20153.5%20471.7%20145.6%20452C133.9%20422.5%20136.6%20352.5%20136.6%20319.9C136.6%20287.3%20134%20217.2%20145.6%20187.8C153.4%20168.2%20168.5%20153.1%20188.2%20145.2C217.7%20133.5%20287.7%20136.2%20320.3%20136.2C352.9%20136.2%20423%20133.6%20452.4%20145.2C472%20153%20487.1%20168.1%20495%20187.8C506.7%20217.3%20504%20287.3%20504%20319.9C504%20352.5%20506.7%20422.6%20495%20452z'/%3e%3c/svg%3e`,whatsapp:`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3cpath%20d='M476.9%20161.1C435%20119.1%20379.2%2096%20319.9%2096C197.5%2096%2097.9%20195.6%2097.9%20318C97.9%20357.1%20108.1%20395.3%20127.5%20429L96%20544L213.7%20513.1C246.1%20530.8%20282.6%20540.1%20319.8%20540.1L319.9%20540.1C442.2%20540.1%20544%20440.5%20544%20318.1C544%20258.8%20518.8%20203.1%20476.9%20161.1zM319.9%20502.7C286.7%20502.7%20254.2%20493.8%20225.9%20477L219.2%20473L149.4%20491.3L168%20423.2L163.6%20416.2C145.1%20386.8%20135.4%20352.9%20135.4%20318C135.4%20216.3%20218.2%20133.5%20320%20133.5C369.3%20133.5%20415.6%20152.7%20450.4%20187.6C485.2%20222.5%20506.6%20268.8%20506.5%20318.1C506.5%20419.9%20421.6%20502.7%20319.9%20502.7zM421.1%20364.5C415.6%20361.7%20388.3%20348.3%20383.2%20346.5C378.1%20344.6%20374.4%20343.7%20370.7%20349.3C367%20354.9%20356.4%20367.3%20353.1%20371.1C349.9%20374.8%20346.6%20375.3%20341.1%20372.5C308.5%20356.2%20287.1%20343.4%20265.6%20306.5C259.9%20296.7%20271.3%20297.4%20281.9%20276.2C283.7%20272.5%20282.8%20269.3%20281.4%20266.5C280%20263.7%20268.9%20236.4%20264.3%20225.3C259.8%20214.5%20255.2%20216%20251.8%20215.8C248.6%20215.6%20244.9%20215.6%20241.2%20215.6C237.5%20215.6%20231.5%20217%20226.4%20222.5C221.3%20228.1%20207%20241.5%20207%20268.8C207%20296.1%20226.9%20322.5%20229.6%20326.2C232.4%20329.9%20268.7%20385.9%20324.4%20410C359.6%20425.2%20373.4%20426.5%20391%20423.9C401.7%20422.3%20423.8%20410.5%20428.4%20397.5C433%20384.5%20433%20373.4%20431.6%20371.1C430.3%20368.6%20426.6%20367.2%20421.1%20364.5z'/%3e%3c/svg%3e`,mail:`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3cpath%20d='M125.4%20128C91.5%20128%2064%20155.5%2064%20189.4C64%20190.3%2064%20191.1%2064.1%20192L64%20192L64%20448C64%20483.3%2092.7%20512%20128%20512L512%20512C547.3%20512%20576%20483.3%20576%20448L576%20192L575.9%20192C575.9%20191.1%20576%20190.3%20576%20189.4C576%20155.5%20548.5%20128%20514.6%20128L125.4%20128zM528%20256.3L528%20448C528%20456.8%20520.8%20464%20512%20464L128%20464C119.2%20464%20112%20456.8%20112%20448L112%20256.3L266.8%20373.7C298.2%20397.6%20341.7%20397.6%20373.2%20373.7L528%20256.3zM112%20189.4C112%20182%20118%20176%20125.4%20176L514.6%20176C522%20176%20528%20182%20528%20189.4C528%20193.6%20526%20197.6%20522.7%20200.1L344.2%20335.5C329.9%20346.3%20310.1%20346.3%20295.8%20335.5L117.3%20200.1C114%20197.6%20112%20193.6%20112%20189.4z'/%3e%3c/svg%3e`,pin:`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3cpath%20d='M128%20252.6C128%20148.4%20214%2064%20320%2064C426%2064%20512%20148.4%20512%20252.6C512%20371.9%20391.8%20514.9%20341.6%20569.4C329.8%20582.2%20310.1%20582.2%20298.3%20569.4C248.1%20514.9%20127.9%20371.9%20127.9%20252.6zM320%20320C355.3%20320%20384%20291.3%20384%20256C384%20220.7%20355.3%20192%20320%20192C284.7%20192%20256%20220.7%20256%20256C256%20291.3%20284.7%20320%20320%20320z'/%3e%3c/svg%3e`,clock:`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3cpath%20d='M320%2064C461.4%2064%20576%20178.6%20576%20320C576%20461.4%20461.4%20576%20320%20576C178.6%20576%2064%20461.4%2064%20320C64%20178.6%20178.6%2064%20320%2064zM296%20184L296%20320C296%20328%20300%20335.5%20306.7%20340L402.7%20404C413.7%20411.4%20428.6%20408.4%20436%20397.3C443.4%20386.2%20440.4%20371.4%20429.3%20364L344%20307.2L344%20184C344%20170.7%20333.3%20160%20320%20160C306.7%20160%20296%20170.7%20296%20184z'/%3e%3c/svg%3e`,palette:`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3cpath%20d='M576%20320C576%20320.9%20576%20321.8%20576%20322.7C575.6%20359.2%20542.4%20384%20505.9%20384L408%20384C381.5%20384%20360%20405.5%20360%20432C360%20435.4%20360.4%20438.7%20361%20441.9C363.1%20452.1%20367.5%20461.9%20371.8%20471.8C377.9%20485.6%20383.9%20499.3%20383.9%20513.8C383.9%20545.6%20362.3%20574.5%20330.5%20575.8C327%20575.9%20323.5%20576%20319.9%20576C178.5%20576%2063.9%20461.4%2063.9%20320C63.9%20178.6%20178.6%2064%20320%2064C461.4%2064%20576%20178.6%20576%20320zM192%20352C192%20334.3%20177.7%20320%20160%20320C142.3%20320%20128%20334.3%20128%20352C128%20369.7%20142.3%20384%20160%20384C177.7%20384%20192%20369.7%20192%20352zM192%20256C209.7%20256%20224%20241.7%20224%20224C224%20206.3%20209.7%20192%20192%20192C174.3%20192%20160%20206.3%20160%20224C160%20241.7%20174.3%20256%20192%20256zM352%20160C352%20142.3%20337.7%20128%20320%20128C302.3%20128%20288%20142.3%20288%20160C288%20177.7%20302.3%20192%20320%20192C337.7%20192%20352%20177.7%20352%20160zM448%20256C465.7%20256%20480%20241.7%20480%20224C480%20206.3%20465.7%20192%20448%20192C430.3%20192%20416%20206.3%20416%20224C416%20241.7%20430.3%20256%20448%20256z'/%3e%3c/svg%3e`,people:`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3cpath%20d='M320%2080C377.4%2080%20424%20126.6%20424%20184C424%20241.4%20377.4%20288%20320%20288C262.6%20288%20216%20241.4%20216%20184C216%20126.6%20262.6%2080%20320%2080zM96%20152C135.8%20152%20168%20184.2%20168%20224C168%20263.8%20135.8%20296%2096%20296C56.2%20296%2024%20263.8%2024%20224C24%20184.2%2056.2%20152%2096%20152zM0%20480C0%20409.3%2057.3%20352%20128%20352C140.8%20352%20153.2%20353.9%20164.9%20357.4C132%20394.2%20112%20442.8%20112%20496L112%20512C112%20523.4%20114.4%20534.2%20118.7%20544L32%20544C14.3%20544%200%20529.7%200%20512L0%20480zM521.3%20544C525.6%20534.2%20528%20523.4%20528%20512L528%20496C528%20442.8%20508%20394.2%20475.1%20357.4C486.8%20353.9%20499.2%20352%20512%20352C582.7%20352%20640%20409.3%20640%20480L640%20512C640%20529.7%20625.7%20544%20608%20544L521.3%20544zM472%20224C472%20184.2%20504.2%20152%20544%20152C583.8%20152%20616%20184.2%20616%20224C616%20263.8%20583.8%20296%20544%20296C504.2%20296%20472%20263.8%20472%20224zM160%20496C160%20407.6%20231.6%20336%20320%20336C408.4%20336%20480%20407.6%20480%20496L480%20512C480%20529.7%20465.7%20544%20448%20544L192%20544C174.3%20544%20160%20529.7%20160%20512L160%20496z'/%3e%3c/svg%3e`,tools:`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3cpath%20d='M468%2064C487.2%2064%20505.6%2071.6%20519.1%2085.2L554.8%20120.9C568.4%20134.4%20576%20152.8%20576%20172C576%20191.2%20568.4%20209.6%20554.8%20223.1L509.9%20268L372%20130.1L416.9%2085.2C430.4%2071.6%20448.8%2064%20468%2064zM122.9%20379.1L338.1%20164L476%20301.9L260.9%20517.1C250.2%20527.8%20236.8%20535.6%20222.2%20539.7L94.4%20575.1C86.1%20577.4%2077.1%20575.1%2071%20568.9C64.9%20562.7%2062.5%20553.8%2064.8%20545.5L100.4%20417.8C104.5%20403.2%20112.2%20389.9%20123%20379.1zM289.4%20144.8L144.8%20289.4L75.7%20220.3C60.1%20204.7%2060.1%20179.4%2075.7%20163.7L163.7%2075.7C179.3%2060.1%20204.6%2060.1%20220.3%2075.7L226.2%2081.6L169.9%20137.9C162.1%20145.7%20162.1%20158.4%20169.9%20166.2C177.7%20174%20190.4%20174%20198.2%20166.2L254.5%20109.9L289.4%20144.8zM495.2%20350.6L530.1%20385.5L473.8%20441.8C466%20449.6%20466%20462.3%20473.8%20470.1C481.6%20477.9%20494.3%20477.9%20502.1%20470.1L558.4%20413.8L564.3%20419.7C579.9%20435.3%20579.9%20460.6%20564.3%20476.3L476.3%20564.3C460.7%20579.9%20435.4%20579.9%20419.7%20564.3L350.6%20495.2L495.2%20350.6z'/%3e%3c/svg%3e`,medal:`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3cpath%20d='M320.3%20192L235.7%2051.1C229.2%2040.3%20215.6%2036.4%20204.4%2042L117.8%2085.3C105.9%2091.2%20101.1%20105.6%20107%20117.5L176.6%20256.6C146.5%20290.5%20128.3%20335.1%20128.3%20384C128.3%20490%20214.3%20576%20320.3%20576C426.3%20576%20512.3%20490%20512.3%20384C512.3%20335.1%20494%20290.5%20464%20256.6L533.6%20117.5C539.5%20105.6%20534.7%2091.2%20522.9%2085.3L436.2%2041.9C425%2036.3%20411.3%2040.3%20404.9%2051L320.3%20192zM351.1%20334.5C352.5%20337.3%20355.1%20339.2%20358.1%20339.6L408.2%20346.9C415.9%20348%20418.9%20357.4%20413.4%20362.9L377.1%20398.3C374.9%20400.5%20373.9%20403.5%20374.4%20406.6L383%20456.5C384.3%20464.1%20376.3%20470%20369.4%20466.4L324.6%20442.8C321.9%20441.4%20318.6%20441.4%20315.9%20442.8L271.1%20466.4C264.2%20470%20256.2%20464.2%20257.5%20456.5L266.1%20406.6C266.6%20403.6%20265.6%20400.5%20263.4%20398.3L227.1%20362.9C221.5%20357.5%20224.6%20348.1%20232.3%20346.9L282.4%20339.6C285.4%20339.2%20288.1%20337.2%20289.4%20334.5L311.8%20289.1C315.2%20282.1%20325.1%20282.1%20328.6%20289.1L351%20334.5z'/%3e%3c/svg%3e`},H={menu:`<path d="M4 7h16M4 12h16M4 17h16"/>`,close:`<path d="m6 6 12 12M18 6 6 18"/>`,search:`<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>`,filter:`<path d="M3 5h18l-7 8v6l-4 2v-8Z"/>`,arrow:`<path d="M5 12h14M13 6l6 6-6 6"/>`};function U(e,t=``){return V[e]?`<img class="icon icon--asset ${t}" src="${V[e]}" alt="" aria-hidden="true" />`:`<svg class="icon ${t}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${H[e]}</svg>`}var W=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='130%20220%20380%20270'%3e%3cpath%20d='M300.3%20440.8C312.9%20451%20331.4%20450.3%20343.1%20438.6L471.1%20310.6C480.3%20301.4%20483%20287.7%20478%20275.7C473%20263.7%20461.4%20256%20448.5%20256L192.5%20256C179.6%20256%20167.9%20263.8%20162.9%20275.8C157.9%20287.8%20160.7%20301.5%20169.9%20310.6L297.9%20438.6L300.3%20440.8z'/%3e%3c/svg%3e`;function G(e=!1){let t=I.map(e=>`<a href="#/servicio/${e.id}">${e.name}</a>`).join(``);return`
    <header class="site-header">
      <a class="header-symbol" href="#/" aria-label="Ir al inicio">
        ${B()}
        ${z(`header-brand-name${e?` header-brand-name--persistent`:``}`)}
      </a>
      <button class="menu-button" type="button" aria-expanded="false" aria-controls="main-navigation" aria-label="Abrir menú">
        <span class="menu-open">${U(`menu`)}</span>
        <span class="menu-close">${U(`close`)}</span>
      </button>
      <nav id="main-navigation" class="main-nav" aria-label="Navegación principal">
        <div class="nav-dropdown">
          <div class="nav-dropdown-trigger">
            <a class="nav-services-link" href="#/servicios">
              <span>Servicios</span>
              <img src="${W}" alt="" aria-hidden="true" />
            </a>
          </div>
          <div class="services-submenu">${t}</div>
        </div>
        <a href="#/portafolio">Portafolio</a>
        <a href="#/nosotros">Nosotros</a>
        <a href="#/contacto">Contacto</a>
      </nav>
    </header>
  `}function K(){return`
    <div class="home-intro" role="status" aria-label="Bienvenido a ÁREA">
      <div class="home-intro-lockup">
        <div class="home-intro-row">
          <div class="home-intro-symbol">${B()}</div>
          ${z(`home-intro-name`)}
        </div>
      </div>
    </div>
  `}function q({heroImage:e}){return`
    <section id="inicio" class="hero-section" style="--hero-image: url('${e}')">
      <div class="hero-shade"></div>
      <div class="hero-presentation">
        <div class="hero-brand-view">
          ${z(`brand-mark--hero`)}
          <p>Arquitectura &amp; diseño</p>
        </div>
      </div>
      <div class="social-rail" aria-label="Redes sociales">
        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">${U(`instagram`)}</a>
        <a href="https://wa.me/525500000000" target="_blank" rel="noreferrer" aria-label="WhatsApp">${U(`whatsapp`)}</a>
        <a href="mailto:hola@area.mx" aria-label="Correo electrónico">${U(`mail`)}</a>
      </div>
    </section>
  `}function J(e,t){return`
    <section id="portafolio" class="portfolio-section" aria-labelledby="portfolio-title">
      <div class="content-section section-heading portfolio-heading">
        <h2 id="portfolio-title">Proyectos <span>destacados</span></h2>
      </div>
      <div class="project-grid">${e.map(e=>{let n=t.find(t=>t.id===e.serviceId);return`
        <a class="portfolio-card featured-project-card" id="proyecto-${e.id}" href="#/proyecto/${e.slug}" aria-label="Ver ${e.name}">
          <img src="${e.cover}" alt="${e.name}" loading="lazy" />
          <div class="portfolio-card-shade"></div>
          <div class="portfolio-card-copy">
            <p>${n.shortName} / ${e.year}</p>
            <h2>${e.name}</h2>
          </div>
        </a>
      `}).join(``)}</div>
      <div class="portfolio-callout"><a href="#/portafolio" class="outline-button">Ver portafolio</a></div>
    </section>
  `}function Y(e){return`
    <section id="servicios" class="content-section services-showcase-section" aria-labelledby="services-title">
      <div class="section-heading">
        <h2 id="services-title">Nuestros <span>servicios</span></h2>
      </div>
      <div class="services-card-grid">${e.map(e=>`
    <article class="service-card" tabindex="0" aria-expanded="false">
      <img src="${e.image}" alt="${e.name}" loading="lazy" />
      <span class="service-card-shade"></span>
      <div class="service-card-content">
        <h3>${e.name}</h3>
        <div class="service-card-details">
          <p>${e.description}</p>
          <div class="service-card-action-slot"></div>
          <template class="service-card-action-template">
            <a class="service-card-action" href="#/servicio/${e.id}">
              Ver más ${U(`arrow`)}
            </a>
          </template>
        </div>
      </div>
    </article>
  `).join(``)}</div>
    </section>
  `}function te(e){return`
    <section id="nosotros" class="content-section benefits-section">
      <div class="section-heading split-heading">
        <h2>¿Por qué <span>elegirnos</span>?</h2>
        <a href="#/nosotros">Más sobre Área</a>
      </div>
      <div class="benefit-grid">${e.map(e=>`
    <article class="benefit-card">${U(e.icon)}<p>${e.label}</p></article>
  `).join(``)}</div>
    </section>
  `}function ne(e){return`
    <section class="content-section testimonials-section" aria-labelledby="testimonials-title">
      <div class="section-heading split-heading">
        <h2 id="testimonials-title">La experiencia de <span>nuestros clientes</span></h2>
        <a href="#/portafolio">Conoce nuestro portafolio</a>
      </div>
      <div class="testimonial-grid">${e.map(e=>`
    <article class="testimonial-card">
      <h3>${e.name}</h3>
      <p class="testimonial-company">${e.company}</p>
      <blockquote>${e.quote}</blockquote>
      <a href="#/proyecto/${e.projectSlug}">Proyecto</a>
    </article>
  `).join(``)}</div>
    </section>
  `}function X({services:e}){return`
    <section id="contacto" class="content-section contact-section" aria-labelledby="contact-title">
      <h2 id="contact-title">Hablemos de <span>tu proyecto</span></h2>
      <div class="contact-layout">
        <div class="contact-copy">
          <p class="contact-lead">El <span>primer paso</span> puede ser una buena conversación.</p>
          <p>Cuéntanos qué necesitas. Te responderemos con una ruta clara para <span>comenzar</span>.</p>
        </div>
        <form class="contact-form" novalidate>
          <label><span>Nombre</span><input name="name" type="text" placeholder="Tu nombre" autocomplete="name" required /></label>
          <label><span>Correo</span><input name="email" type="email" placeholder="ejemplo@correo.com" autocomplete="email" required /></label>
          <label><span>Servicio</span><select name="service" required><option value="">Selecciona un servicio</option>${e.map(e=>`<option value="${e.id}">${e.name}</option>`).join(``)}</select></label>
          <label><span>Proyecto</span><textarea name="project" rows="4" placeholder="Cuéntanos brevemente qué tienes en mente" required></textarea></label>
          <div class="form-footer"><p class="form-status" role="status"></p><button class="outline-button" type="submit">Enviar mensaje</button></div>
        </form>
        <div class="contact-location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7525.205144081373!2d-99.13846369604799!3d19.429570335690862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92af577b44b%3A0xdb290ed58ba64e40!2sAlameda%20Central!5e0!3m2!1ses-419!2smx!4v1786993366131!5m2!1ses-419!2smx"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
            title="Ubicación de ÁREA cerca de Alameda Central"
          ></iframe>
          <div class="contact-detail">${U(`pin`)}<p>Una calle de un lugar de por ahí.</p></div>
          <div class="contact-detail">${U(`clock`)}<p>Lunes a viernes<br />9:00 - 18:00</p></div>
          <div class="contact-social">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">${U(`instagram`)}</a>
            <a href="https://wa.me/525500000000" target="_blank" rel="noreferrer" aria-label="WhatsApp">${U(`whatsapp`)}</a>
            <a href="mailto:hola@area.mx" aria-label="Correo electrónico">${U(`mail`)}</a>
          </div>
        </div>
      </div>
    </section>
  `}function Z(e){let t=e.map(e=>`<li><a href="#/servicio/${e.id}">${e.name}</a></li>`).join(``);return`
    <footer class="site-footer">
      <div class="footer-inner">
        <a href="#/" class="footer-brand" aria-label="Volver al inicio">${B()}${z(`brand-mark--footer`)}</a>
        <div class="footer-column"><h2>Servicios</h2><ul>${t}</ul></div>
        <div class="footer-column"><h2>Legal</h2><ul><li><a href="#">Aviso de privacidad</a></li></ul></div>
        <div class="footer-column"><h2>Explora</h2><ul>
          <li><a href="#/servicios">Servicios</a></li><li><a href="#/portafolio">Portafolio</a></li>
          <li><a href="#/nosotros">Nosotros</a></li><li><a href="#/contacto">Contacto</a></li>
        </ul></div>
      </div>
      <p class="copyright">Copyright © 2026 ÁREA. Todos los derechos reservados.</p>
    </footer>
  `}function Q({title:e,image:t,eyebrow:n,subtitle:r}){return`
    <section class="page-hero" style="--page-hero-image: url('${t}')">
      <div class="page-hero-overlay"></div>
      <div class="page-container page-hero-content">
        ${n?`<p class="page-eyebrow">${n}</p>`:``}
        <h1>${e}</h1>
        ${r?`<p class="page-hero-subtitle">${r}</p>`:``}
      </div>
    </section>
  `}function $(e,t=``){return`
    <div class="internal-site ${t}">
      ${G(!0)}
      <main>${e}</main>
      ${Z(L.services)}
    </div>
  `}function re(){let{company:e}=L,t=e.values.map(e=>`
    <article class="about-value-card">
      <h3>${e.title}</h3>
      <p>${e.text}</p>
    </article>
  `).join(``),n=e.philosophy.map(e=>`<li>${e}</li>`).join(``),r=e.history.map(e=>`<p>${e}</p>`).join(``),i=e.promise.map(e=>`<p>${e}</p>`).join(``),a=e.whatWeDo.services.map((e,t)=>`
    <li><a href="#/servicio/${L.services[t].id}">${e}</a></li>
  `).join(``);return $(`
    ${Q({title:`${z(`about-title-logo`)}<span class="about-title-tagline">Arquitectura &amp; Diseño</span>`,image:e.heroImage})}
    <section class="page-container about-section about-story">
      <div class="about-heading"><h2>Nuestra <span>historia</span></h2></div>
      <div class="about-rich-text">${r}</div>
    </section>
    <section class="page-container about-section">
      <div class="about-heading"><h2>Nuestra <span>filosofía</span></h2></div>
      <div class="about-philosophy-layout">
        <figure class="about-image"><img src="${e.studioImage}" alt="Detalle de un interior diseñado por ÁREA" /></figure>
        <ul class="about-bullet-list">${n}</ul>
      </div>
    </section>
    <section class="page-container about-section about-pair">
      <article class="about-panel">
        <div class="about-heading"><h2>Nuestra <span>misión</span></h2></div>
        <p>${e.mission}</p>
      </article>
      <article class="about-panel">
        <div class="about-heading"><h2>Nuestra <span>visión</span></h2></div>
        <p>${e.vision}</p>
      </article>
    </section>
    <section class="page-container about-section">
      <div class="about-heading"><h2>Nuestros <span>valores</span></h2></div>
      <div class="about-values-grid">${t}</div>
    </section>
    <section class="page-container about-section">
      <div class="about-heading"><h2>Nuestra <span>promesa</span></h2></div>
      <div class="about-promise-layout">
        <div class="about-promise-lines">${i}</div>
        <div class="about-promise-brand" aria-hidden="true">
          ${B()}
          ${z(`about-promise-name`)}
        </div>
      </div>
    </section>
    <section class="page-container about-section">
      <div class="about-heading"><h2>¿Qué <span>hacemos?</span></h2></div>
      <p class="about-introduction">${e.whatWeDo.introduction}</p>
      <p class="about-services-label">Nuestros servicios incluyen:</p>
      <ul class="about-services-list">${a}</ul>
    </section>
    <section class="page-container about-section about-manifesto">
      <div class="about-heading"><h2>Nuestro <span>manifiesto</span></h2></div>
      <p>${e.manifesto}</p>
    </section>
  `,`about-page`)}function ie(e){let t=e.stages.map((e,t)=>`
    <article class="stage-card"><span>0${t+1}</span><h3>${e}</h3></article>
  `).join(``),n=[...L.projects].sort((t,n)=>Number(n.serviceId===e.id)-Number(t.serviceId===e.id)).slice(0,6).map(e=>`
    <a class="service-gallery-item" href="#/proyecto/${e.slug}">
      <img src="${e.cover}" alt="${e.name}" />
      <span><b>${e.name}</b>${U(`arrow`)}</span>
    </a>
  `).join(``);return $(`
    ${Q({title:e.name,image:e.image,subtitle:e.description})}
    <section class="page-container service-intro page-section">
      <div class="internal-section-heading"><h2>Diseño y precisión <span>en cada etapa</span></h2></div>
      <p class="service-intro-copy">${e.introduction}</p>
    </section>
    <section class="page-container page-section">
      <div class="internal-section-heading"><h2>Un proceso <span>claro</span>, de principio a fin</h2></div>
      <div class="stages-grid">${t}</div>
    </section>
    <section class="page-container page-section">
      <div class="internal-section-heading internal-section-heading--split"><h2>Proyectos <span>relacionados</span></h2><a href="#/portafolio?servicio=${e.id}">Ver portafolio</a></div>
      <div class="service-gallery">${n}</div>
    </section>
    ${X(L)}
  `,`service-page`)}function ae(){let e=[`<button type="button" class="filter-button is-active" data-filter="all">Todos</button>`,...L.services.filter(e=>L.projects.some(t=>t.serviceId===e.id)).map(e=>`<button type="button" class="filter-button" data-filter="${e.id}">${e.shortName}</button>`)].join(``),t=L.projects.map(e=>{let t=L.services.find(t=>t.id===e.serviceId);return`
      <a class="portfolio-card" href="#/proyecto/${e.slug}" aria-label="Ver ${e.name}" data-service="${e.serviceId}" data-name="${e.name.toLowerCase()}">
        <img src="${e.cover}" alt="${e.name}" />
        <div class="portfolio-card-shade"></div>
        <div class="portfolio-card-copy"><p>${t.shortName} / ${e.year}</p><h2>${e.name}</h2></div>
      </a>
    `}).join(``);return $(`
    <section class="portfolio-header" style="--portfolio-hero-image: url('${L.heroImage}')">
      <div class="page-container">
        <p class="page-eyebrow">Trabajo seleccionado</p>
        <h1>Portafolio</h1>
        <p>Espacios pensados desde el contexto, la función y la experiencia.</p>
      </div>
    </section>
    <section class="page-container portfolio-browser page-section">
      <div class="portfolio-controls">
        <div class="filter-bar" aria-label="Filtrar por servicio">${e}</div>
        <label class="search-field">${U(`search`)}<span class="sr-only">Buscar proyecto</span><input type="search" placeholder="Buscar proyecto" /></label>
      </div>
      <div class="portfolio-page-grid">${t}</div>
      <p class="portfolio-empty" hidden>No encontramos proyectos con esos criterios.</p>
      <nav class="portfolio-pagination" aria-label="Páginas del portafolio" hidden></nav>
    </section>
  `,`portfolio-page`)}function oe(e){let t=L.services.find(t=>t.id===e.serviceId),n=e.gallery.map((t,n)=>`
    <button class="project-gallery-item" type="button" data-gallery-index="${n}" aria-label="Ampliar imagen ${n+1} de ${e.name}">
      <img src="${t}" alt="${e.name}, vista ${n+1}" />
    </button>
  `).join(``);return $(`
    ${Q({title:e.name,image:e.cover,eyebrow:`${t.shortName} / ${e.year}`,subtitle:e.location})}
    <section class="page-container project-overview page-section">
      <div class="internal-section-heading"><h2>Sobre el <span>proyecto</span></h2></div>
      <figure class="project-feature-image"><img src="${e.gallery[1]}" alt="Detalle principal de ${e.name}" /></figure>
      <div class="project-narrative-grid">
        <article class="project-narrative-card"><h3>El proyecto</h3><p>${e.description}</p></article>
        <article class="project-narrative-card"><h3>El reto</h3><p>${e.problem}</p></article>
        <article class="project-narrative-card"><h3>La solución</h3><p>${e.solution}</p></article>
      </div>
    </section>
    <section class="page-container page-section">
      <div class="internal-section-heading"><h2>El proyecto <span>en detalle</span></h2></div>
      <div class="project-detail-gallery">${n}</div>
    </section>
    ${X(L)}
    <dialog class="gallery-dialog" aria-label="Galería ampliada">
      <button class="gallery-close" type="button" aria-label="Cerrar galería">${U(`close`)}</button>
      <button class="gallery-arrow gallery-previous" type="button" aria-label="Imagen anterior">←</button>
      <img src="" alt="" />
      <button class="gallery-arrow gallery-next" type="button" aria-label="Imagen siguiente">→</button>
      <p></p>
    </dialog>
  `,`project-page`)}function se(){return $(`
    <section class="not-found page-container">
      <p class="section-index">404 / Página no encontrada</p>
      <h1>Este espacio aún no existe.</h1>
      <a class="outline-button" href="#/">Volver al inicio</a>
    </section>
  `,`not-found-page`)}function ce(e){function t(){let t=le();document.body.classList.remove(`nav-is-open`),document.body.classList.remove(`intro-is-running`),e.innerHTML=ue(t),pe(),_e(),t.page===`home`&&fe(),(t.page===`home`||t.page===`contacto`||t.page===`servicios`)&&me(),t.page===`portafolio`&&he(t.query.get(`servicio`)),t.page===`proyecto`&&ge(),t.page===`contacto`?window.requestAnimationFrame(()=>document.querySelector(`#contacto`)?.scrollIntoView()):t.page===`servicios`?window.requestAnimationFrame(()=>document.querySelector(`#servicios`)?.scrollIntoView()):window.scrollTo({top:0,behavior:`auto`})}window.addEventListener(`hashchange`,t),t()}function le(){let[e=``,t=``]=window.location.hash.replace(/^#\/?/,``).split(`?`),n=e.split(`/`).filter(Boolean);return n.length?{page:n[0],id:n[1],query:new URLSearchParams(t)}:{page:`home`,query:new URLSearchParams(t)}}function ue(e){if(e.page===`home`||e.page===`contacto`||e.page===`servicios`)return document.title=`ÁREA | Arquitectura & Diseño`,de(e.page===`home`);if(e.page===`nosotros`)return document.title=`Nosotros | ÁREA`,re();if(e.page===`servicio`){let t=L.services.find(t=>t.id===e.id)??L.services[0];return document.title=`${t.name} | ÁREA`,ie(t)}if(e.page===`portafolio`)return document.title=`Portafolio | ÁREA`,ae();if(e.page===`proyecto`){let t=L.projects.find(t=>t.slug===e.id);if(t)return document.title=`${t.name} | ÁREA`,oe(t)}return document.title=`Página no encontrada | ÁREA`,se()}function de(e=!1){return`
    ${e?K():``}
    ${G()}
    <main>
      ${q(L)}
      ${Y(L.services)}
      ${J(L.projects.slice(0,6),L.services)}
      ${te(L.benefits)}
      ${ne(L.testimonials)}
      ${X(L)}
    </main>
    ${Z(L.services)}
  `}function fe(){let e=document.querySelector(`.home-intro`);if(!e)return;if(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches){e.remove();return}document.body.classList.add(`intro-is-running`);let t,n=()=>{window.clearTimeout(t),document.body.classList.remove(`intro-is-running`),e.remove()};e.addEventListener(`animationend`,t=>{t.target===e&&t.animationName===`home-intro-exit`&&n()}),t=window.setTimeout(n,3300)}function pe(){let e=document.querySelector(`.site-header`),t=document.querySelector(`.menu-button`),n=document.querySelector(`.main-nav`);function r(){e.classList.toggle(`is-scrolled`,window.scrollY>24)}window.onscroll=r,r(),t.addEventListener(`click`,()=>{let n=e.classList.toggle(`menu-is-open`);document.body.classList.toggle(`nav-is-open`,n),t.setAttribute(`aria-expanded`,String(n)),t.setAttribute(`aria-label`,n?`Cerrar menú`:`Abrir menú`)}),n.addEventListener(`click`,n=>{n.target.closest(`a`)&&(e.classList.remove(`menu-is-open`),document.body.classList.remove(`nav-is-open`),t.setAttribute(`aria-expanded`,`false`),t.setAttribute(`aria-label`,`Abrir menú`))}),document.onkeydown=n=>{n.key!==`Escape`||!e.classList.contains(`menu-is-open`)||(e.classList.remove(`menu-is-open`),document.body.classList.remove(`nav-is-open`),t.setAttribute(`aria-expanded`,`false`),t.setAttribute(`aria-label`,`Abrir menú`))}}function me(){[...document.querySelectorAll(`.service-card`)].forEach(e=>{let t=e.querySelector(`.service-card-action-slot`),n=e.querySelector(`.service-card-action-template`),r=window.matchMedia(`(hover: hover) and (pointer: fine)`).matches,i=()=>{t.firstElementChild||(t.replaceChildren(n.content.cloneNode(!0)),t.querySelector(`.service-card-action`).onclick=e=>{e.stopPropagation()})};r&&i();let a=()=>{let n=e.classList.toggle(`is-open`);if(e.setAttribute(`aria-expanded`,String(n)),!n&&!r){t.replaceChildren();return}i()};e.onclick=e=>{e.target.closest(`.service-card-action`)||a()},e.onkeydown=t=>{t.target!==e||![`Enter`,` `].includes(t.key)||(t.preventDefault(),a())}})}function he(e){let t=[...document.querySelectorAll(`.filter-button`)],n=document.querySelector(`.search-field input`),r=[...document.querySelectorAll(`.portfolio-card`)],i=document.querySelector(`.portfolio-empty`),a=document.querySelector(`.portfolio-pagination`),o=t.some(t=>t.dataset.filter===e)?e:`all`,s=1;function c(e){if(a.hidden=e<=1,a.hidden){a.replaceChildren();return}let t=Array.from({length:e},(e,t)=>{let n=t+1,r=n===s;return`<button type="button" class="pagination-button${r?` is-active`:``}" data-page="${n}" aria-label="Ir a la página ${n}"${r?` aria-current="page"`:``}>${n}</button>`}).join(``);a.innerHTML=`
      <button type="button" class="pagination-button pagination-previous" data-page="${s-1}" aria-label="Página anterior"${s===1?` disabled`:``}>&larr;</button>
      ${t}
      <button type="button" class="pagination-button pagination-next" data-page="${s+1}" aria-label="Página siguiente"${s===e?` disabled`:``}>&rarr;</button>
    `}function l(){let e=n.value.trim().toLowerCase(),a=r.filter(t=>{let n=o===`all`||t.dataset.service===o,r=!e||t.dataset.name.includes(e);return n&&r}),l=Math.ceil(a.length/9);s=Math.min(s,Math.max(l,1));let u=(s-1)*9,d=new Set(a.slice(u,u+9));r.forEach(e=>{e.hidden=!d.has(e)}),t.forEach(e=>e.classList.toggle(`is-active`,e.dataset.filter===o)),i.hidden=a.length>0,c(l)}t.forEach(e=>{e.addEventListener(`click`,()=>{o=e.dataset.filter,s=1,l()})}),n.addEventListener(`input`,()=>{s=1,l()}),a.addEventListener(`click`,e=>{let t=e.target.closest(`.pagination-button`);!t||t.disabled||(s=Number(t.dataset.page),l(),document.querySelector(`.portfolio-page-grid`).scrollIntoView({behavior:`smooth`,block:`start`}))}),l()}function ge(){let e=document.querySelector(`.gallery-dialog`),t=e.querySelector(`img`),n=e.querySelector(`p`),r=[...document.querySelectorAll(`.project-gallery-item`)],i=0;function a(e){i=(e+r.length)%r.length;let a=r[i].querySelector(`img`);t.src=a.src,t.alt=a.alt,n.textContent=`${i+1} / ${r.length}`}r.forEach((t,n)=>{t.addEventListener(`click`,()=>{a(n),e.showModal()})}),e.querySelector(`.gallery-close`).addEventListener(`click`,()=>e.close()),e.querySelector(`.gallery-previous`).addEventListener(`click`,()=>a(i-1)),e.querySelector(`.gallery-next`).addEventListener(`click`,()=>a(i+1)),e.addEventListener(`click`,t=>{t.target===e&&e.close()})}function _e(){let e=document.querySelector(`.contact-form`);if(!e)return;let t=e.querySelector(`.form-status`);e.addEventListener(`submit`,n=>{if(n.preventDefault(),!e.checkValidity()){t.textContent=`Completa los campos indicados.`,e.reportValidity();return}t.textContent=`¡Gracias! Tu mensaje está listo para enviarse cuando conectemos el formulario.`,e.reset()})}ce(document.querySelector(`#app`));