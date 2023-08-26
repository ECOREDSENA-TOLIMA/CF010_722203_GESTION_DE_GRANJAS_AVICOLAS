<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 12
      h1 Parámetros técnicos, económicos y su aplicación

    p.mb-5(data-aos="fade-right") Los cronogramas de actividades son las programaciones de todas las actividades que se necesitan para el debido funcionamiento y desarrollo de los procesos productivos en las granjas avícolas en un tiempo determinado y con el personal encargado para incrementar la eficacia de la producción, permitiendo ejecutar las tareas en una forma ordenada y eficiente; en estos, se pueden programar las fumigaciones, desinfección, limpieza, aplicación de vitaminas, suplementos, etc. Es muy importante el registro de producción diaria para mantener el control y tomar medidas cuando se requieran; por ende, en las siguientes tablas, se presentan algunos ejemplos adaptados a los procesos diarios y mensuales en granja:

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema12/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los equipos necesarios en las instalaciones avícolas son: bebederos, comederos, criadoras, nidales, tanques, bombillos (sistemas de iluminación), ventiladores, jaulas, bandejas para los huevos, mangueras (lavado y desinfección).
    
    ul.lista-ul.mb-5(data-aos="fade-down")
      li 
        i.lista-ul__vineta
        | <strong>Áreas:</strong> son todos los espacios establecidos según el sistema de producción para llevar a cabo todo el proceso y procedimiento para la obtención de los productos (carne o huevos), estos deben estar debidamente señalizados para un control de las Buenas Prácticas Avícolas y los protocolos de bioseguridad.

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema12/img-2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las áreas se pueden dividir en: áreas de producción (galpones), áreas de máquinas (incubadoras y nacedoras), áreas de selección, sexaje y vacunación; áreas de almacenamiento (insumos, alimento y huevos), áreas administrativas (oficinas), áreas de desinfección del personal al momento del ingreso (zona sucia, intermedia y limpia), áreas de desinfección (equipos y herramientas), áreas de recepción y control para el ingreso a la granja (portería).

    p(data-aos="fade-right")  Estas deben contar con una separación física, como paredes, puertas y ventanas; además, deben contar con un flujo lógico, secuencial y unidireccional, para evitar contaminaciones cruzadas y tener un mejor control de los protocolos de bioseguridad y las prácticas de manejo.
    
    ul.lista-ul(data-aos="fade-right") 
      li 
        i.lista-ul__vineta
        | <strong>Alojamiento:</strong> es considerado un aspecto importante para el éxito del sistema productivo, ya que la mayoría de los procesos y manejo de las aves se realizan en ellos, de ahí la importancia de contar con estos y que cumplan con todos los requisitos y necesidades que demandan los animales para su desarrollo, siempre brindándoles confort y bienestar animal, en el que puedan mostrar toda su productividad y potencial genético.

    p(data-aos="fade-right")  Como recomendación, se deben aprovechar los espacios, terrenos, clima y puntos cardinales, ya que todos son necesarios para una buena construcción, por ejemplo, el eje largo del galpón debe estar en dirección norte-sur en climas fríos y oriente-occidente, en climas cálidos, para que el sol caliente adecuadamente en cada clima; el piso debe ser preferiblemente en cemento, ya que garantiza condiciones ambientales y de higiene adecuadas; si es de tierra, debe ser firme o compactada. Se pueden encontrar algunas especificaciones básicas para la construcción de los alojamientos (galpón):
    ul.lista-ul(data-aos="fade-right") 
      li 
        i.lista-ul__vineta
        | Es importante manejar diferentes alturas de los techos, de acuerdo con los pisos térmicos o climas, siendo más altos entre más cálido sea el sitio de la explotación. Lo mismo opera con el ancho del galpón: entre más cálido, más angosto y con paredes laterales más bajas. 
      li 
        i.lista-ul__vineta
        | Generalmente, llevan un caballete central para evacuar el aire caliente del centro, aunque es manejable sin el mismo.
      li 
        i.lista-ul__vineta
        | Techo de dos aguas, principalmente, o a una sola agua de cinco metros de ancho, en laderas, de modo que el lado alto quede en contra de la mayor corriente de aire.

    p.mb-5(data-aos="fade-right")  Entre los parámetros económicos, se pueden encontrar los siguientes:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-right") 
      .tarjeta.color-acento-botones1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema12/decorador-1.svg' alt='AvatarTop')
        h3.text-center Producción del mercado
        p.text-center Identifica los canales de distribución y comercialización en el sector de ubicación (zonal, municipal, regional, nacional o internacional).

      .tarjeta.color-primario1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema12/decorador-2.svg' alt='AvatarTop')
        h3.text-center Presupuesto de ventas
        p.text-center Son todas las ventas de productos elaborados a lo largo del tiempo (1 año, 2 a 3 años), son las proyecciones de las ventas.

      .tarjeta.color-acento-contenido1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema12/decorador-3.svg' alt='AvatarTop')
        h3.text-center Plan de producción 
        p.text-center Son las proyecciones de la cantidad de los productos elaborados a largo del tiempo (1, 2, 3 años), tenemos los siguientes: productos finales, productos intermedios, desperdicios, subproductos, materias primas.

      .tarjeta.color-acento-botones1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema12/decorador-4.svg' alt='AvatarTop')
        h3.text-center Cadena de abastecimiento
        p.text-center Se caracteriza por estar conformada por las instalaciones, actividades y medios de distribución para el correcto funcionamiento de la granja y posterior al proceso de venta de los productos producidos para que lleguen al consumidor final.

      .tarjeta.color-primario1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema12/decorador-5.svg' alt='AvatarTop')
        h3.text-center Requerimientos de materiales
        p.text-center Es la planificación de la adquisición (compra) de los insumos, materias primas y materiales para la obtención del producto final (administración de inventarios).

      .tarjeta.color-acento-contenido1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema12/decorador-6.svg' alt='AvatarTop')
        h3.text-center Plan de abastecimiento
        p.text-center En el plan de abastecimiento, se realiza la compra de materias primas y materiales para la obtención de un producto, se programan actividades para su transformación y distribución, se puede medir la productividad y eficiencia de la granja.

      .tarjeta.color-acento-botones1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema12/decorador-7.svg' alt='AvatarTop')
        h3.text-center Plan de inversiones
        p.text-center Se considera como el calendario de todas las inversiones que se realizan durante el tiempo de vida del proyecto, granja o empresa avícola; podemos clasificarlos en activos fijos operativos, activos fijos de administración y ventas, activos diferidos, capital de trabajo y otros.

      .tarjeta.color-primario1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema12/decorador-8.svg' alt='AvatarTop')
        h3.text-center Punto de equilibrio
        p.text-center Es donde se mide el volumen de ventas, esto es igual a costos y gastos, donde, si aumentan las ventas, se obtiene utilidad, y al disminuir las ventas, se producen pérdidas.

    p(data-aos="fade-right")  Los métodos de cálculo son todas las fórmulas y operaciones que se utilizan para obtener un resultado fijo en la producción y administración de las granjas avícolas. Para saber el estado de la productividad y el control de todos los procesos, según el tipo de sistema productivo (carne o huevo), estos se analizan y se toman decisiones con base en ellos; entre los que se pueden resaltar, están: los productivos (espacios requeridos para la construcción de las instalaciones, densidad de animales, consumo de alimento, viabilidad de los animales, mortalidad, postura, peso del huevo, conversión de alimento e índice de producción) y los económicos (presupuesto de ventas, plan de producción, capital de trabajo, inversiones, compras, ingresos, egresos y requerimiento de materiales).
    p.mb-5(data-aos="fade-right")  Además, es importante conocer los métodos de cálculo en los procesos productivos, para obtener cantidades exactas de ración de alimento concentrado, mortalidad de aves, eficiencia alimenticia, índice de productividad, etc. Estos son algunos ejemplos que se aplican:

    .col-xl-10.mx-auto.mb-5
      img.d-md-block(src="@/assets/curso/temas/tema12/img-3.svg" data-aos="fade-left")

    p(data-aos="fade-right") Los parámetros técnicos y económicos son todos los elementos de planificación e inversión de los procesos productivos, ya que podemos enfocarnos en el tipo de sistema según el terreno, el número de aves para producir, cuánto material y equipos se necesitan según las medidas y densidades de los lotes de aves, para llevar a cabo el inicio de la producción; por eso, estos parámetros están directamente relacionados, porque se puede realizar un estudio y análisis de qué tan factible es el montaje de una granja avícola o, si ya está establecida la granja, nos enfoca en qué debemos implementar y la situación en que se encuentra.





</template>

<script>
export default {
  name: 'Tema12',
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
