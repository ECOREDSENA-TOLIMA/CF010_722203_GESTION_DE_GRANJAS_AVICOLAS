<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Equipos e implementos

    p.mb-5(data-aos="fade-right") El propósito de los equipos e implementos es volver eficaz la producción avícola, teniendo en cuenta el uso, cuidado y desinfección de estos, para garantizar su duración, fortaleciendo los sistemas de bioseguridad implementados en la granja.

    .row.justify-content-center.align-items-center.mt-5
      .col-12.col-md-10.col-lg-7(data-aos="fade-right")    
        .row
          .col-lg-12
            .cajon.color-acento-contenido.p-4.mb-4
              p Los equipos son recursos físicos con los cuales se puede resolver o ejecutar una tarea en la granja avícola; y los implementos son utensilios con la finalidad de hacer más sencilla y facilitar la realización de una tarea o actividad; en lo posible, deben ser fabricados con materiales inertes, no tóxicos, resistentes a la corrosión, no recubiertos con pinturas o materiales desprendibles, y que sean fáciles de limpiar y desinfectar.

    p.mb-5(data-aos="fade-right") Las clases de equipos e implementos varían según la producción, lo más importante es contar con los manuales de instalaciones, ensamble y manejo para un mejor uso a lo largo de los procesos productivos y que cuenten con las especificaciones técnicas establecidas en los manuales de bioseguridad. Vea, entonces, la lista de equipos e implementos más usados en los sistemas productivos avícolas: 

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 Los equipos para todos los sistemas productivos:

    ul.lista-ul.mb-5(data-aos="fade-right")
      li 
        i.lista-ul__vineta
        | Comederos manuales o automáticos.
      li 
        i.lista-ul__vineta
        | Bebederos manuales o automáticos.
      li  
        i.lista-ul__vineta
        | Nidales.
      li  
        i.lista-ul__vineta
        | Criadoras o campana de luz eléctrica o de gas.
      li  
        i.lista-ul__vineta
        | Básculas.
      li  
        i.lista-ul__vineta
        | Clasificadora de huevos.
      li  
        i.lista-ul__vineta
        | Bandas transportadoras de huevo.
      li  
        i.lista-ul__vineta
        | Incubadoras.
      li  
        i.lista-ul__vineta
        | Nacedoras.
      li  
        i.lista-ul__vineta
        | Instrumentos de medición (temperatura, humedad, pH, balanzas).
      li  
        i.lista-ul__vineta
        | Ventiladores.
      li  
        i.lista-ul__vineta
        | Extractores.
      li  
        i.lista-ul__vineta
        | Tanques de agua.
      li  
        i.lista-ul__vineta
        | Guadañadora.
      li  
        i.lista-ul__vineta
        | Computadoras.
      li  
        i.lista-ul__vineta
        | Impresoras.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 Los implementos que permiten realizar una tarea más fácilmente:

    ul.lista-ul.mb-5(data-aos="fade-right")
      li 
        i.lista-ul__vineta
        | Bandejas para la recolección del huevo.
      li 
        i.lista-ul__vineta
        | Cajas para transportar los animales (pollitos).
      li  
        i.lista-ul__vineta
        | Guantes.
      li  
        i.lista-ul__vineta
        | Botas.
      li  
        i.lista-ul__vineta
        | Baldes.
      li  
        i.lista-ul__vineta
        | Mangueras.
      li  
        i.lista-ul__vineta
        | Cepillos.
      li  
        i.lista-ul__vineta
        | Escobas.
      li  
        i.lista-ul__vineta
        | Tablas sujetadoras.
      li  
        i.lista-ul__vineta
        | Pediluvios.
      li  
        i.lista-ul__vineta
        | Estibas.
      li  
        i.lista-ul__vineta
        | Bombillos.
      li  
        i.lista-ul__vineta
        | Cortinas.
      li  
        i.lista-ul__vineta
        | Carretillas.
      li  
        i.lista-ul__vineta
        | Fumigadora de espalda.
      li  
        i.lista-ul__vineta
        | Restaurantes.
      li  
        i.lista-ul__vineta
        | Polisombra.

    p(data-aos="fade-right") Los manuales de funcionamiento y las técnicas de operación son las indicaciones que traen todos los equipos para su correcto uso y manipulación en cada actividad o tarea establecida, para un mejor manejo, es importante contar con todas las instrucciones de ensambles y montaje de los equipos que se utilizan en cada proceso productivo en las granjas avícolas, estos son específicos para cada equipo, por eso es importante conocer detenidamente las fichas técnicas, ya que acá se describen todas las partes del equipo para así tener un mejor control y manejo de estos.
    p.mb-5(data-aos="fade-right") Las técnicas de operación están directamente relacionadas con los manuales, por lo que en ellos se indica la función del equipo y guían en el correcto uso de estos; en caso de un daño, se debe recurrir en primera instancia a los manuales, si son daños leves y manejables, pero si ya es algo más complicado, se recurre al técnico encargado, quien está totalmente capacitado para cualquier situación que se presente. 

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema8/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el sector avícola, el manejo operacional es importante debido a que la producción depende en gran parte del uso de ciertos equipos, sobre todo cuando son ambientes mecanizados o controlados; la implementación de grandes equipos es parte del proceso productivo, por eso, se debe contar con un personal capacitado y especializado en la operación y funcionamiento de estos, para garantizar una buena producción.










</template>

<script>
export default {
  name: 'Tema8',
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
