<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Sistemas de producción 

    p.mb-5(data-aos="fade-down") Los sistemas de producción avícola aplican para pequeños, medianos y grandes productores, estos se pueden identificar por el tipo de alojamiento según las condiciones de cada productor y región, promueven el desarrollo y crecimiento del sector productivo avícola, ofreciendo productos de calidad e inocuidad a los consumidores finales.   

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los sistemas de producción avícola en Colombia se pueden clasificar dependiendo de dónde se alojan las aves, que pueden ser de tres tipos, los cuales son descritos por Cuellar (2021), así: “el primer tipo se denomina producción intensiva, donde las aves permanecen alojadas en jaulas y están cubiertas todo el tiempo; el segundo tipo se denomina producción semintensiva, donde los animales cuentan con un área al aire libre y otra con cubierta; y el tercer tipo se denomina producción extensiva y se refiere al ambiente al aire libre, donde las aves pasan parte de su tiempo”.

    p.mb-5(data-aos="fade-down") Las características de los sistemas de producción varían según la región y el tipo de producción, teniendo en cuenta que la avicultura se conoce como una industria que cría un gran número de aves, como pollo de engorde y gallina ponedora. Se pueden considerar las siguientes características:

    ul.lista-ul.mb-3(data-aos="fade-down")
      li 
        i.lista-ul__vineta
        | Zona de ubicación.
      li 
        i.lista-ul__vineta
        | Clima.
      li  
        i.lista-ul__vineta
        | Temperatura.
      li  
        i.lista-ul__vineta
        | Humedad.
      li  
        i.lista-ul__vineta
        | Corrientes de aire.
      li  
        i.lista-ul__vineta
        | Terreno o suelos.
      li  
        i.lista-ul__vineta
        | Vías de accesos a la granja.
      li  
        i.lista-ul__vineta
        | Recurso económico.
      li  
        i.lista-ul__vineta
        | Otras producciones cercanas.
      li  
        i.lista-ul__vineta
        | Materiales de construcción para las instalaciones.
      li  
        i.lista-ul__vineta
        | Cercas vivas.
      li  
        i.lista-ul__vineta
        | Fuentes hídricas.
      li  
        i.lista-ul__vineta
        | Distribución de la producción.
      li  
        i.lista-ul__vineta
        | Número de aves (pollo de engorde o gallina ponedora).

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
