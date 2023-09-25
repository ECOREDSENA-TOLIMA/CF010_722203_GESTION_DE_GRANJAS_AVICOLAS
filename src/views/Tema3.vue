<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Programación de actividades avícolas

    p(data-aos="fade-down") La programación de actividades avícolas son todas las acciones que se desarrollan en los procesos productivos de cada sistema que tiene cada granja, para tener un mejor control, organización y optimización de tiempos y tareas establecidos. Con una programación establecida, el funcionamiento de la producción fluye de una manera continua y constante, permitiendo que los ciclos productivos y el manejo de las aves se desarrollen según la normatividad establecida, con calidad e inocuidad.
    p.mb-5(data-aos="fade-down") Los tipos de actividades avícolas que se aplican en los procesos productivos dependen del sistema de producción y región, entre ellos, se encuentran: 

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 Pollo de engorde: extensivo o pastoreo

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-down")
      .tarjeta.color-acento-botones1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/decorador-1.svg' alt='AvatarTop')
        h3.text-center Preparación del galpón
        p.text-center Con limpieza y desinfección, arreglo de camas, instalación de equipos, como criadora, comederos y bebederos; estabilización de la temperatura ambiental, verificación de corrientes de aire y humedad.

      .tarjeta.color-primario1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/decorador-2.svg' alt='AvatarTop')
        h3.text-center Recepción de aves al día
        p.text-center Garantizando que cuenten con temperatura, humedad, ventilación, alimento y agua.

      .tarjeta.color-acento-contenido1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/decorador-3.svg' alt='AvatarTop')
        h3.text-center Muestreo de aves
        p.text-center Para revisar la condición física, temperatura, comportamiento individual y grupal.

      .tarjeta.color-acento-botones1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/decorador-4.svg' alt='AvatarTop')
        h3.text-center Alimentación
        p.text-center Revisión de comederos y llenado del buche.

      .tarjeta.color-primario1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/decorador-5.svg' alt='AvatarTop')
        h3.text-center Pesajes semanales 
        p.text-center Seguimiento al peso de los animales para identificar acciones tempranas de atención.

      .tarjeta.color-acento-contenido1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/decorador-6.svg' alt='AvatarTop')
        h3.text-center Sanidad, desparasitación y vacunación
        p.text-center Seguimiento a la salud de las aves con el fin de prevenir enfermedades y mortandad.
    
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 Gallina ponedora: intensivo o confinamiento (granjas de piso o granjas de jaulas)

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-down")
      .tarjeta.color-acento-botones1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/decorador-7.svg' alt='AvatarTop')
        h3.text-center Preparación del galpón
        p.text-center Con limpieza y desinfección, arreglo de camas, instalación de equipos, como criadora, comederos y bebederos; estabilización de la temperatura ambiental, verificación de corrientes de aire y humedad.

      .tarjeta.color-primario1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/decorador-8.svg' alt='AvatarTop')
        h3.text-center Recepción de pollitas o gallinas
        p.text-center Garantizando temperatura, humedad, ventilación, alimento, agua y nidales.

      .tarjeta.color-acento-contenido1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/decorador-9.svg' alt='AvatarTop')
        h3.text-center Programa de iluminación
        p.text-center Garantizando los ajustes necesarios  de luz.

      .tarjeta.color-acento-botones1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/decorador-10.svg' alt='AvatarTop')
        h3.text-center Pesajes semanales 
        p.text-center Seguimiento al peso de los animales para identificar acciones tempranas de atención.

      .tarjeta.color-primario1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/decorador-11.svg' alt='AvatarTop')
        h3.text-center Alimentación
        p.text-center Según la semana en que se encuentra.

      .tarjeta.color-acento-contenido1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/decorador-12.svg' alt='AvatarTop')
        h3.text-center Revisión de camas 
        p.text-center Validando aspectos de calidad y control.

      .tarjeta.color-acento-botones1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/decorador-13.svg' alt='AvatarTop')
        h3.text-center Despique (corte del pico)
        p.text-center Realizado por un personal calificado.

      .tarjeta.color-primario1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/decorador-14.svg' alt='AvatarTop')
        h3.text-center Programa sanitario y vacunación
        p.text-center Seguimiento a la salud de las aves con el fin de prevenir enfermedades y mortandad.

      .tarjeta.color-acento-contenido1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/decorador-15.svg' alt='AvatarTop')
        h3.text-center El huevo 
        p.text-center Recolección del huevo (revisión de los nidales y el suelo).

      .tarjeta.color-acento-botones1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/decorador-16.svg' alt='AvatarTop')
        p.text-center Clasificación del huevo (pesaje).

      .tarjeta.color-primario1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/decorador-17.svg' alt='AvatarTop')
        p.text-center Almacenamiento de huevos, controlando temperatura y humedad adecuada.

      .tarjeta.color-acento-contenido1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/decorador-18.svg' alt='AvatarTop') 
        p.text-center Limpieza y desinfección del huevo.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_3_1 3.1 Especificaciones

    p(data-aos="fade-down") Las especificaciones de las actividades para la industria avícola indican detenidamente cada función que se debe desarrollar durante los planes productivos, manejando los tiempos necesarios dentro de la cadena productiva avícola. En esta, se pueden encontrar dos (2) especificaciones para identificar el correcto funcionamiento y desempeño en los planes productivos y el ciclo de vida, facilitando el manejo de las Buenas Prácticas Avícolas y la aplicación de los protocolos de bioseguridad según la normatividad vigente:
    .col-sm
      ol.lista-ol.lista-ol--separador(data-aos="fade-down")
        li 
          span.text-bold a) 
          | <strong>Líneas genéticas:</strong> en estas, se deben tener en cuenta los requerimientos necesarios de las aves de acuerdo con su genética, las más utilizadas en la industria avícola de Colombia, registradas por el ICA (2013), son:
    ul.lista-ul.mb-3(data-aos="fade-down")
      li 
        i.lista-ul__vineta
        | HYBRO-PG+
      li 
        i.lista-ul__vineta
        | SHAVER BROWN
      li  
        i.lista-ul__vineta
        | Avian 48
      li  
        i.lista-ul__vineta
        | Hy-Line w-36
      li  
        i.lista-ul__vineta
        | Hy-Line w 98
      li  
        i.lista-ul__vineta
        | Hy-Line Brown
      li  
        i.lista-ul__vineta
        | Hubbard
    .col-sm.mb-5
      ol.lista-ol.lista-ol--separador(data-aos="fade-down")
        li 
          span.text-bold b)
          | <strong>Fases productivas:</strong> son las etapas de producción de cada sistema de carne o huevo; para pollo de engorde (preinicio, inicio, levante y engorde) y gallina ponedora (preinicio, inicio, levante, prepostura, postura).

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_3_2 3.2 Parámetros técnicos y laborales

    p(data-aos="fade-down") Los parámetros técnicos y laborales son los elementos que es posible medir y evaluar según el desempeño en el desarrollo o aplicación de estos en cada actividad asignada dentro del proceso productivo, teniendo en cuenta el plan de producción establecido en cada granja avícola. Los parámetros técnicos de las actividades avícolas en el plan de producción son:
    ul.lista-ul.mb-3(data-aos="fade-down")
      li 
        i.lista-ul__vineta
        | <strong>Manejo del agua:</strong> se contempla el tratamiento periódico, para el control de microorganismos, el control del <em>biofilm</em> que se presenta por la dureza del agua o el cambio del pH, este es conocido como la lama que se puede apreciar en las tuberías de suministro de agua. En la medición de los niveles de cloro (Cl) y pH (indicador del número de iones de hidrógeno), se debe tener claro cuál es la cantidad correcta y exacta de cloro, además, identificar el rango de pH adecuado para evitar enfermedades en las aves; adicionalmente, se debe realizar la evaluación de los parámetros de calidad del agua de bebida, por eso, hay que conocer los aspectos que indican si el agua es apta para el consumo de las aves, realizando exámenes microbiológicos, fisicoquímicos y toxicológicos. (FENAVI, 2019a)
      li 
        i.lista-ul__vineta
        | <strong>Manejo de la calidad del aire, de la temperatura y la ventilación del galpón:</strong> se debe garantizar la adecuada ventilación del galpón, generando la eliminación del dióxido de carbono (CO₂) y el amoniaco (NH₃) presentes, reemplazándolos por aire fresco y favoreciendo el manejo y la salud de sus aves.  Es importante resaltar que galpones poco ventilados son propensos a contener y acumular polvo y amoniaco, lo que conlleva problemas respiratorios e irritación ocular.  
    
    p.mb-5(data-aos="fade-down") En la siguiente gráfica, se puede apreciar cómo es la ventilación ideal y correcta para los diferentes tipos de galpones, mostrando el flujo del aire.

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Figura 1.
        span <em>Ventilación del galpón</em>
      img.d-md-block(src="@/assets/curso/temas/tema3/img-2.svg" data-aos="fade-left" alt="En la figura 1 se muestra la ventilación de un galpón.")
      figcaption Nota. FENAVI (2019a).

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Figura 2.
        span <em>Formas de ventilación</em>
      img.d-md-block(src="@/assets/curso/temas/tema3/img-3.svg" data-aos="fade-left" alt="En la figura 2 se muestran las formas de ventilación en una granja avícola.")
      figcaption Nota. FENAVI (2019a).

    p(data-aos="fade-down") En las dos figuras, se puede apreciar la forma correcta en que se debe manejar la ventilación de los galpones, ofreciendo comodidad y seguridad a las aves, evitando trastornos a nivel respiratorio y estrés.
    p(data-aos="fade-down") Otro aspecto importante que se debe revisar constantemente es la temperatura de los galpones, para favorecer el proceso productivo de la crianza y desarrollo de las aves; si no se mide adecuadamente la temperatura, las aves podrían sufrir graves lesiones y, por consiguiente, pérdidas en la producción.
    p.mb-5(data-aos="fade-down") En la siguiente ilustración, se presentan los factores que afectan el control de la temperatura para los pollitos:

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Figura 3.
        span <em>Factores que afectan el control térmico de los galpones</em>
      img.d-md-block(src="@/assets/curso/temas/tema3/img-4.svg" data-aos="fade-left" alt="En la figura 3 se muestran los factores que afectan el control térmico de los galpones.")
      figcaption Nota. FENAVI (2019a).

    p(data-aos="fade-down") Los factores que pueden afectar la temperatura en el ambiente ideal para la producción son: el mal manejo de las camas, la humedad relativa y las corrientes de aire, como se grafican en la anterior figura.
    p(data-aos="fade-down") En el proceso de recepción de aves, es importante conocer la distribución de las criadoras en los galpones como aspecto inicial de la producción, esto para ofrecer una temperatura y ventilación acertada en la fase de preinicio de las aves, ya que se determina el comportamiento y adaptación de estas en las granjas para un mejor manejo y control de la mortalidad. Observe los aspectos a considerar para el control térmico de los galpones:
    ul.lista-ul.mb-5(data-aos="fade-down")
      li 
        i.lista-ul__vineta
        | <strong>Manejo de la cama:</strong> el manejo de la cama en la industria avícola es un parámetro fundamental, ya que cumple múltiples funciones en el proceso de cada fase productiva de las aves, por esto, se debe tener en cuenta el tipo de material, el grosor, la humedad, la temperatura y la desinfección, para garantizar el bienestar animal; después de su uso, se debe realizar la correcta sanitización y destino final. Una de las funciones principales de la cama es ayudar a conservar una temperatura adecuada, aislando a las aves del frío y la humedad; de igual manera, actúa como un amortiguador, protegiéndolas de golpes y raspaduras, siendo además un absorbente de la humedad del suelo, de heces y de pérdidas producidas por los bebederos. Su espesor no debe ser inferior a cinco centímetros (cm). (FENAVI, 2019a)
      li 
        i.lista-ul__vineta
        | <strong> Manejo de la iluminación:</strong> es un factor determinante en todas las fases productivas. En la industria avícola, la correcta distribución y uso de la luz en los galpones permite lograr la uniformidad del lote y ayuda a evitar la agrupación de las aves y camas húmedas. Siendo consecuente con lo anterior, en la siguiente tabla, se presentan ejemplos de los diferentes programas de iluminación que se utilizan en las granjas para la optimización del proceso productivo en galpones oscuros y abiertos:
    
    .titulo-sexto.color-primario(data-aos="fade-right")
      h5 Tabla 1.
      span <em>Programa de iluminación sugerido en galpones oscuros.</em>
    .col-xl-11.mx-auto.mb-5
      img.d-md-block(src="@/assets/curso/temas/tema3/img-5.svg" data-aos="fade-left")
      figcaption Nota. FENAVI (2019a).

    .titulo-sexto.color-primario(data-aos="fade-right")
      h5 Tabla 2.
      span <em>Programa de iluminación sugerido en galpones abiertos.</em>
    .col-xl-7.mx-auto.mb-5
      img.d-md-block(src="@/assets/curso/temas/tema3/img-6.svg" data-aos="fade-left")
      figcaption Nota. FENAVI (2019a).

    p(data-aos="fade-down") En cada tabla, se presentan las sugerencias acordes con el programa de iluminación y tipo de galpón, según la edad de las aves y las horas de luz que deben recibir al día, para un mejor manejo de la producción y según los requerimientos de cada productor. También se pueden encontrar ciertos programas de oscurecimiento, para ayudar a las aves a nivelar el desarrollo sexual, considerando la fase productiva en la que se encuentran las aves.
    ul.lista-ul.mb-3(data-aos="fade-down")
      li 
        i.lista-ul__vineta
        | <strong>Alimentación:</strong> hace parte de uno de principales parámetros en la industria avícola, ya que se utiliza en todas las fases de producción de vida de las aves; para obtener grandes rendimientos, es necesario tener muy claro cómo se debe realizar el manejo de las raciones, el almacenamiento del alimento y el control de residuos en los comederos, garantizando un equilibrio económico para el productor, pues se realiza el control de las cantidades necesarias y los nutrientes esenciales para el buen desarrollo de las aves y la obtención de productos. Este es sin duda uno de los principales costos de producción, por lo que resulta importante que las dietas que se suministren proporcionen un balance correcto de energía, proteína, aminoácidos, minerales, vitaminas, ácidos grasos esenciales y agua. 
    
    p.mb-5(data-aos="fade-down") Es así como, en la siguiente tabla, se presentan los nutrientes básicos y esenciales que deben tener los alimentos como requerimientos indispensables en su nutrición:
    
    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Tabla 3.
        span <em>Nutrientes básicos en las dietas de las aves.</em>
      img.d-md-block(src="@/assets/curso/temas/tema3/img-7.svg" data-aos="fade-left")
      figcaption Nota. FENAVI (2019a).

    p(data-aos="fade-down") Es necesario identificar, de los diferentes grupos alimenticios, cuáles son los más importantes para la dieta de las aves, con el fin de garantizar desarrollo productivo y rendimiento, como se recomienda en la anterior tabla. En la práctica, es posible encontrar factores que afectan el consumo de alimento diario en las aves, y es importante tenerlos presente, los más comunes son: la temperatura, la distribución de los comederos, el número de aves por comedero, la textura del alimento, la disposición del agua de bebida, el peso corporal de las aves y los picos de producción.



</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
