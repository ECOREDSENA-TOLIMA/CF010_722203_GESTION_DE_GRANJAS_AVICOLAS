<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Código de Buenas Prácticas Avícolas (BPA)

    p(data-aos="fade-down") El Código de Buenas Prácticas Avícolas es un conjunto de medidas que el productor puede implementar y tener como guía en cuanto al manejo de los procesos sanitarios, ambientales, de producción e inocuidad en su granja, con el objeto de cumplir con lo que requieren el sector productivo primario y las leyes nacionales aplicables al mismo. Son herramientas técnicas que tienen como propósito permitir mejorar las condiciones sanitarias, ambientales y de producción de la población avícola y la inocuidad dentro del enfoque de cadena agroalimentaria.
    p(data-aos="fade-down") El código les permite a los productores que desean certificarse como granjas bioseguras implementar medidas y normas establecidas para el correcto funcionamiento de los procesos que se desarrollan dentro de la producción avícola, obteniendo así grandes beneficios, como valor agregado de los productos y subproductos que se generan, ofreciendo calidad y seguridad al consumidor final y al sector productivo.
    p.mb-5(data-aos="fade-down") Se puede implementar en cada uno de los parámetros que hacen parte del sistema productivo de las granjas avícolas, permitiendo al personal interno y externo tener un mejor manejo, control y organización de los procesos y desarrollo de las labores asignadas, teniendo en cuenta la relación que existe entre las Buenas Prácticas Avícolas, la bioseguridad y la inocuidad, como puede observarse a continuación:

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-down")
      .row.justify-content-center.align-items-center(titulo="Instalaciones")
        .col-lg-2.col-10.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema1/granja.svg', alt='Instalaciones')
        .col-md-8.col-12
          p Las buenas prácticas avícolas se implementan al momento de la construcción y adecuación de las instalaciones, manejando los parámetros establecidos por las normas sobre el montaje de una granja avícola certificada, que incluye zona de ubicación, distribución de cada espacio dentro y fuera, vías de ingreso, cercas vivas, materiales para los galpones; todo esto debe tener correlación con lo que son granjas avícolas bioseguras.

      .row.justify-content-center.align-items-center(titulo="Manejo de huevo fértil y comercial")
        .col-lg-2.col-10.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema1/canasta.svg', alt='Manejo de huevo fértil y comercial')
        .col-md-8.col-12
          p Se entiende por huevo fértil aquel que está fecundado y posteriormente es dirigido a las incubadoras; para implementar las buenas prácticas en la manipulación del huevo, ya sea fértil o comercial, debe ser bajo protocolos de desinfección y correcto almacenamiento.

      .row.justify-content-center.align-items-center(titulo="Medio ambiente")
        .col-lg-2.col-10.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema1/gallina-huevos.svg', alt='Medio ambiente')
        .col-md-8.col-12
          p Es importante conocer la emisión de residuos o desechos que se genera en la industria avícola para determinar el uso de las buenas prácticas bioseguras en el manejo de estos, siempre aplicando la normatividad vigente para el control y cuidado del medio ambiente; en este caso, se trata de identificar los residuos para ser llevados al correcto destino final.

      .row.justify-content-center.align-items-center(titulo="Transporte")
        .col-lg-2.col-10.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema1/transporte.svg', alt='Transporte')
        .col-md-8.col-12
          p Juega un papel vital, ya que es el medio por el cual se entrega el alimento y los insumos, también es el que entrega los animales vivos a cada granja y distribuye los huevos según su destino; las buenas prácticas se aplican en los parámetros técnicos de cada vehículo según su función, además el conductor debe conocer y aplicar las correctas medidas de bioseguridad para el ingreso y egreso de las granjas avícolas.

      .row.justify-content-center.align-items-center(titulo="Personal")
        .col-lg-2.col-10.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema1/persona-cuveta.svg', alt='Personal')
        .col-md-8.col-12
          p Son quienes hacen que la producción funcione de manera correcta en cada granja diariamente, de ellos depende que una granja sea totalmente biosegura desde el ingreso, las zonas de desinfección, portar correctamente los elementos de protección personal, realizar el correcto manejo de los animales, el uso de pediluvios en los galpones, realizar todas las labores de desinfección, y llevar al día y correctamente los registros.

      .row.justify-content-center.align-items-center(titulo="Manejo animal")
        .col-lg-2.col-10.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema1/manejo.svg', alt='Manejo animal')
        .col-md-8.col-12
          p Para implementar las buenas prácticas avícolas en el manejo animal, se deben conocer el comportamiento y las necesidades básicas que requieren las aves, siempre debemos garantizarles confort en cada actividad que se realiza, esto nos ayuda a evitar el estrés y enfermedades por mal manejo, siendo una de las mayores causas de mortalidad en la industria avícola.

      .row.justify-content-center.align-items-center(titulo="Suministro de agua y alimentos")
        .col-lg-2.col-10.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema1/gallinas-comiendo.svg', alt='Suministro de agua y alimentos')
        .col-md-8.col-12
          p Estos aportan al funcionamiento de todo el sistema productivo, ya que, para la obtención de carne y la postura de huevo, se requiere de la correcta ración de alimento y la disposición constante de agua de bebida de la mejor calidad; para la implementación de las buenas prácticas, se necesita conocer todos los procesos que se realizan al recurso hídrico de la granja y la manipulación y almacenamiento del alimento.

      .row.justify-content-center.align-items-center(titulo="Sanidad animal")
        .col-lg-2.col-10.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema1/gallinas-familia.svg', alt='Sanidad animal')
        .col-md-8.col-12
          p Es necesario conocer, según la región y el sistema productivo, los ciclos de vacunación, teniendo en cuenta  la etapa o fase productiva en la que se encuentran las aves. Hay entidades  oficiales encargadas de vigilar la seguridad sanitaria. Las buenas prácticas se implementan en el cuidado y manejo de los medicamentos, insumos y biológicos, identificando las fechas de vencimiento y el almacenamiento, llevando control y registro.

      .row.justify-content-center.align-items-center(titulo="Control de plagas")
        .col-lg-2.col-10.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema1/control-plagas.svg', alt='Control de plagas')
        .col-md-8.col-12
          p Las buenas prácticas avícolas se implementan en el control de plagas, con sistemas de trampas para la captura y manejo de las distintas plagas que se pueden encontrar en la industria avícola, aplicando todos los parámetros bioseguros que corresponden, evitando la propagación.




</template>

<script>
export default {
  name: 'Tema2',
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
