<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Protocolos en la producción avícola

    p(data-aos="fade-down") Son los documentos escritos donde se describen los procedimientos técnicos y sanitarios, haciendo en ellos una descripción detallada y ordenada de cada actividad y acción realizada en los procesos y procedimientos establecidos para el correcto desempeño en granja avícola.  
    p.mb-5(data-aos="fade-down") En Colombia, se manejan varios tipos de protocolos según las necesidades de cada granja, estos están orientados y guiados por las normas establecidas por los entes oficiales, como el ICA y FENAVI, organizando y unificando el sector avícola, con el fin de tener un correcto manejo de las Buenas Prácticas Avícolas. Bernal (2020) propone los siguientes tipos:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-down")
      .tarjeta.color-acento-botones1.p-4
        .row.justify-content-center.mb-5.mx-auto.mt-5
          h3.text-center Protocolo de sanidad animal basado en buenas prácticas avícolas
          p.text-center Son todas las prácticas sanitarias que se deben realizar en las granjas avícolas.

      .tarjeta.color-primario1.p-4
        .row.justify-content-center.mb-3.mx-auto.mt-5
          h3.text-center Protocolo de suministro de agua y alimento basado en buenas prácticas avícolas
          p.text-center Son todas las actividades que se deben realizar para el correcto manejo del agua de bebida y alimento cumpliendo con todos los requerimientos necesarios para las aves.

      .tarjeta.color-acento-contenido1.p-4
        .row.justify-content-center.mb-3.mx-auto.mt-5
          h3.text-center Protocolo de toma de muestra en la granja 
          p.text-center Son todas las prácticas de recolección de muestras para la prevención de enfermedades y/o tratamientos.

      .tarjeta.color-secundario1.p-4
        .row.justify-content-center.mb-3.mx-auto.mt-5
          h3.text-center Protocolo de cargue de huevo basado en buenas prácticas avícolas
          p.text-center Son todas las actividades que se aplican en el manejo del huevo, desde su recolección hasta su almacenamiento, paso a paso.
      
    p(data-aos="fade-down") La aplicación de estos protocolos depende del sistema productivo y la certificación de granjas bioseguras establecidas en las resoluciones 3651 - Gallina ponedora y 3652 - Pollo de engorde, donde se indican los parámetros a implementar en cada protocolo, según las necesidades del productor y la granja, incorporando las Buenas Prácticas Avícolas en cada proceso de los planes productivos, con calidad e inocuidad.

</template>

<script>
export default {
  name: 'Tema4',
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
