export default {
  global: {
    componenteFormativo: 'Buenas prácticas en granjas avícolas',
    descripcionCurso:
      'Las Buenas Prácticas Avícolas (BPA) son actividades, tareas y normas a cumplir garantizando la salud y el bienestar de las aves, obteniendo como beneficio productos y subproductos de alta calidad e inocuidad para el consumidor final; estas normas deben ser cumplidas por el personal que trabaja dentro la granja avícola, personal externo y visitantes, para mantener un control adecuado de la producción y la bioseguridad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Sistemas de producción',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Código de Buenas Prácticas Avícolas (BPA)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Programación de actividades avícolas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Especificaciones',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Parámetros técnicos y laborales',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Protocolos en la producción avícola',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Legislación laboral',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Recurso humano',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Normativa',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Bienestar animal',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Instalaciones y alojamiento avícola',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Espacio mínimo vital (densidad)',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Manejo preventivo',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Programación de mantenimiento',
            hash: 't_7_3',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Equipos e implementos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Normativa de seguridad y salud en trabajo en granjas avícolas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '9.1',
            titulo: 'Tipo de riesgos',
            hash: 't_9_1',
          },
          {
            numero: '9.2',
            titulo: 'Elementos de protección personal y colectiva',
            hash: 't_9_2',
          },
          {
            numero: '9.3',
            titulo: 'Programas de capacitaciones en primeros auxilios',
            hash: 't_9_3',
          },
        ],
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Cronograma de actividades',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema11',
        numero: '11',
        titulo: 'Manejo ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '11.1',
            titulo: 'Recolección y disposición de residuos',
            hash: 't_11_1',
          },
          {
            numero: '11.2',
            titulo: 'Almacenamiento',
            hash: 't_9_2',
          },
          {
            numero: '11.3',
            titulo: 'Transporte interno',
            hash: 't_11_3',
          },
        ],
      },
      {
        nombreRuta: 'tema12',
        numero: '12',
        titulo: 'Parámetros técnicos, económicos y su aplicación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema13',
        numero: '13',
        titulo: 'Plan de producción',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '2. Código de Buenas Prácticas Avícolas (BPA).',
      referencia:
        'FENAVI y FONAV. (2011). Código Buenas Prácticas Avícolas - BPAV.',
      tipo: 'Documento',
      link:
        'https://fenavi.org/wp-content/uploads/2019/02/CÓDIGO-BUENAS-PRÁCTICAS-AVÍCOLAS-BPAV-V2.pdf',
    },
    {
      tema: '4. Protocolos en la producción avícola.',
      referencia:
        'Resolución 3651 de 2014. [Instituto Colombiano Agropecuario - ICA]. Por medio de la cual se establecen los requisitos para la certificación de granjas avícolas bioseguras de postura y/o levante y se dictan otras disposiciones. Noviembre 13 de 2014.',
      tipo: 'Resolución',
      link:
        'https://www.ica.gov.co/getattachment/b8cb4efd-a1b4-409e-a11d-c81b91f59025/2014R3651.aspx',
    },
    {
      tema: '4. Protocolos en la producción avícola.',
      referencia:
        'Resolución 3652 de 2014. [Instituto Colombiano Agropecuario - ICA]. Por medio de la cual se establecen los requisitos para la certificación de granjas avícolas bioseguras de engorde y se dictan otras disposiciones. Noviembre 13 de 2014.',
      tipo: 'Resolución',
      link:
        'https://www.ica.gov.co/getattachment/124802ad-c49c-470d-809e-a9ce5ad3db76/2014R3652.aspx',
    },
    {
      tema: '4. Protocolos en la producción avícola.',
      referencia:
        'Bernal, J. (2020). Manual de protocolos para la granja Proandes fundamentado en Buenas Prácticas Avícolas. Universidad Cooperativa de Colombia.',
      tipo: 'Documento',
      link:
        'https://repository.ucc.edu.co/bitstream/20.500.12494/33120/1/2021_manual_protocolos_granja.pdf',
    },
    {
      tema: '5. Legislación laboral.',
      referencia:
        'Multiplicando Elconocimiento. (2016). Tutorial: Legislación Laboral en Colombia - Parte 1 [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=191lbrpOxvQ',
    },
    {
      tema: '6. Bienestar animal.',
      referencia:
        'FENAVI y FONAV. (2018). Confort animal en la industria avícola.',
      tipo: 'Documento',
      link:
        'https://fenavi.org/wp-content/uploads/2019/02/CONFORT-ANIMAL-EN-LA-INDUSTRIA-AV%C3%8DCOLA.pdf',
    },
    {
      tema: '7. Instalaciones y alojamiento avícola.',
      referencia:
        'Resolución 253 de 2020. [Ministerio de Agricultura y Desarrollo Rural]. Por la cual se adopta el Manual de Condiciones de Bienestar Animal propias de cada una de las especias de producción del sector agropecuario; bovina, bufalina, aves de corral y animales acuáticos. Octubre 29 de 2020.',
      tipo: 'Resolución',
      link:
        'https://fenavi.org/wp-content/uploads/2020/10/RESOLUCION-0253-DE-2020.pdf',
    },
    {
      tema: '7.1. Espacio mínimo vital (densidad).',
      referencia:
        'DANE. (2015). Boletín mensual: Insumos y factores asociados a la producción agropecuaria. Núm. 36.',
      tipo: 'Documento',
      link:
        'https://www.dane.gov.co/files/investigaciones/agropecuario/sipsa/Bol_Insumos_jun_2015.pdf',
    },
    {
      tema:
        '9. Normativa de seguridad y salud en el trabajo en granjas avícolas.',
      referencia:
        'International Labour Organization. (2015). Seguridad y salud en la granja [Video]. YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=WfrVLd2V_W0',
    },
    {
      tema: '11. Manejo ambiental.',
      referencia:
        'FENAVI y FONAV. (2020). Todo lo que debe saber sobre la Normativa Ambiental en el sector Avícola.',
      tipo: 'Cartilla',
      link:
        'https://fenavi.org/wp-content/uploads/2020/06/Cartilla_NORMATIVA-AMBIENTAL_Junio2020.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Buenas Prácticas Avícolas (BPA)',
      significado:
        'es un conjunto de medidas que el productor puede implementar y tener como guía en cuanto al manejo de los procesos sanitarios, ambientales, de producción e inocuidad en su granja.',
    },
    {
      termino: 'Bienestar animal y confort',
      significado:
        'facilidad que tienen los animales de adaptarse al medio ambiente que se les proporciona, de manera que puedan expresar un comportamiento normal.',
    },
    {
      termino: 'Galpón',
      significado:
        'establecimiento cerrado que aloja un grupo de aves de la misma especie y edad, bajo el mismo manejo sanitario, productivo y medidas de bioseguridad comunes.',
    },
    {
      termino: 'Planes de producción',
      significado:
        'es un documento que especifica qué procedimientos y recursos deben aplicarse, quién debe aplicarlos y cuándo deben aplicarse a un proceso o producto. Un plan hace referencia, con frecuencia, a partes del manual de la calidad o a procedimientos documentados establecidos por la empresa.',
    },
    {
      termino: 'Sistemas de producción',
      significado:
        'se refiere a la cría de aves de corral para mejorar la seguridad alimentaria y generar ingresos, pueden producir carne (pollo de engorde) o huevo (gallina ponedora).',
    },
  ],
  referencias: [
    {
      referencia:
        'Acosta, D. y Jaramillo, Á. (2015). Cartilla Manejo del pollo de engorde. SENA.',
      link:
        'https://repositorio.sena.edu.co/bitstream/handle/11404/4618/Manejo_de_pollo_de_engorde.PDF;jsessionid=B4B035C2E3178DB39F0C6DB0DC160CE1?sequence=1',
    },
    {
      referencia:
        'Anzola, H., Pedraza, Á. y Lezzca, M. (2017). Las buenas prácticas de bioseguridad en granjas avícolas de reproducción aviar y plantas de incubación. Instituto Colombiano Agropecuario [ICA].',
      link:
        'https://www.ica.gov.co/getattachment/af9943f9-87a5-4897-9962-2d414fa0fdbf/Publicacion-10.aspx',
    },
    {
      referencia:
        'Avicol. (2014). Guía de Manejo Ponedoras Comerciales. Novogen. Bernal, J. (2020). Manual de protocolos para granja Proandes fundamentado en Buenas Prácticas Avícolas. Universidad Cooperativa de Colombia.',
      link:
        'https://repository.ucc.edu.co/bitstream/20.500.12494/33120/1/2021_manual_protocolos_granja.pdf',
    },
    {
      referencia:
        'Cuellar, J. (2021). Sistemas de producción avícola y alojamiento en gallinas ponedoras. Veterinaria digital.',
      link:
        'https://www.veterinariadigital.com/articulos/sistemas-de-produccion-avicola-y-alojamiento-en-gallinas-ponedoras/#Sistema_de_produccion_semiintensivo_o_de_piso',
    },
    {
      referencia:
        'DANE. (2015). Boletín mensual - Insumos y factores asociados a la producción agropecuaria. Núm. 36.',
      link:
        'https://www.dane.gov.co/files/investigaciones/agropecuario/sipsa/Bol_Insumos_jun_2015.pdf',
    },
    {
      referencia: 'El Tiempo. (2001). Niveles del Sector Avícola.',
      link: 'https://www.eltiempo.com/archivo/documento/MAM-545556',
    },
    {
      referencia:
        'FENAVI y FONAV. (2019a). Aspectos productivos y administrativos en la industria avícola.',
      link:
        'https://fenavi.org/wp-content/uploads/2019/02/ASPECTOS-PRODUCTIVOS-Y-ADMINISTRATIVOS-EN-LA-INDUSTRIA-AV%C3%8DCOLA.pdf',
    },
    {
      referencia:
        'FENAVI y FONAV. (2019b). Confort animal en la industria avícola.',
      link:
        'https://fenavi.org/publicaciones-programa-tecnico/confort-animal-en-la-industria-avicola/#confort-animal-industria-avicola/1',
    },
    {
      referencia: 'FENAVI y FONAV. (2020). El laberinto de la Ley Laboral.',
      link:
        'https://fenavi.org/revista-avicultores/el-laberinto-de-la-ley-laboral/#edicion-271-el-laberinto-de-la-ley-laboral/1',
    },
    {
      referencia:
        'Girón, Ó. (2014). Plan de mantenimiento preventivo y productivo maquinaria línea externa y evisceración planta beneficio pollos El Bucanero S.A. Universidad Autónoma de Occidente.',
      link:
        'https://red.uao.edu.co/bitstream/handle/10614/7729/T05777.pdf;jsessionid=C3364A92B463BA22B999809911514DB3?sequence=1',
    },
    {
      referencia:
        'Ministerio de Salud. (2021). Observatorio del Mercado del Trabajo.',
      link:
        'https://www.minsalud.gov.co/trabajoEmpleo/Paginas/legislaci%C3%B3nlaboralenColombia.aspx',
    },
    {
      referencia:
        'Orjuela, Y. (2014). Propuesta del plan de manejo ambiental para la avícola Acapulco ubicada en el municipio San Antonio del Tequendama departamento de Cundinamarca-Colombia. Universidad Militar Nueva.',
      link:
        'https://repository.unimilitar.edu.co/bitstream/handle/10654/13476/PROPUESTA%20DEL%20PLAN%20DE%20MANEJO%20AMBIENTAL%20PARA%20LA%20AVICOLA%20ACAPULCO%20.pdf;sequence=1#:~:text=Un%20Plan%20de%20Manejo%20Ambiental,proyecto%2C%20obra%20o%20actividad%E2%80%9D',
    },
    {
      referencia:
        'Polo, K. (s. f.). Formulación para un plan integral de residuos sólidos para la avícola Villa Mabe ubicado en el Vino - Cundinamarca. Universidad Militar Nueva Granada.',
      link:
        'https://repository.unimilitar.edu.co/bitstream/handle/10654/12097/FORMULACI%C3%93N%20PARA%20UN%20PLAN%20INTEGRAL%20DE%20RESIDUOS%20S%C3%93LIDOS%20PARA%20LA%20AVICOLA%20VILLA%20MABE%20UBICADO%20EN%20EL%20VINO%20-%20%20CUNDINAMARCA.pdf?sequence=1&isAllowed=',
    },
    {
      referencia:
        'Resolución 3651 de 2014. [Instituto Colombiano Agropecuario - ICA]. Por medio de la cual se establecen los requisitos para la certificación de granjas avícolas bioseguras de postura y/o levante y se dictan otras disposiciones. Noviembre 13 de 2014.',
      link:
        'https://www.ica.gov.co/getattachment/b8cb4efd-a1b4-409e-a11d-c81b91f59025/2014R3651.aspx',
    },
    {
      referencia:
        'Rivera, F. (2020). Cartilla - Normativa ambiental en el sector avícola. FENAVI.',
      link:
        'https://fenavi.org/publicaciones-programa-ambiental/cartillas/cartilla-normativa-ambiental-en-el-sector-avicola/#cartilla-normativa-ambiental/41',
    },
    {
      referencia:
        'RToscana Sociedad Avícola. (2018). ¿Qué es un cronograma avícola?',
      link: 'https://www.avicolatoscana.com/que-es-un-cronograma-avicola/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Mercedes Orduz Gómez',
          cargo: 'Experta Temática',
          centro:
            'Regional Santander - Centro de Atención al Sector Agropecuario',
        },
        {
          nombre: 'Giovanna Andrea Escobar Ospina',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios (CIES)',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Herrera Quiñonez',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Aruzidna Sánchez Alonso',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
