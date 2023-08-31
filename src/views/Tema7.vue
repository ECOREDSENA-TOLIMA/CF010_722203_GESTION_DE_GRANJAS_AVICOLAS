<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Instalaciones y alojamiento avícolas

    p.mb-5(data-aos="fade-right") El alojamiento es el recinto donde las aves se pueden resguardar en grupos numerosos, brindándoles la protección necesaria del medio ambiente (temperatura, corrientes de aire, humedad, cambios climáticos) para su desarrollo y producción; este es conocido como el galpón, cuya estructura depende del sistema de producción; puede ser en piso o jaulas, tradicional o ambiente controlado. La instalación, por otra parte, es todo el espacio donde se ubica la producción avícola, es decir, el predio; este se compone de galpones, zonas de desinfección, de almacenamiento, de descanso, de oficinas, de tratamiento de agua, de maquinaria, pozos sépticos, zonas de compostaje y perimetrales.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema7/img-1.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Según Acosta y Jaramillo (2015), es necesario contar con instalaciones bien diseñadas, que cumplan específicamente con los requisitos indispensables de economía, comodidad, resistencia y facilidad para el trabajo de los operarios y pequeños productores. Asimismo, se debe ofrecer al pollo un ambiente adecuado, en el que este muestre toda su productividad, estatus sanitario y potencial genético, y el poder nutricional del alimento balanceado.

    p.mb-5(data-aos="fade-down") Los tipos de instalaciones y alojamientos varían según la región, el clima o el tipo de sistema de producción, para poder garantizar una adecuada disposición de las instalaciones y el uso de los suelos; además, se debe contar con las buenas prácticas de bioseguridad en granjas avícolas, cumpliendo la Resolución 0253.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 7.1 Espacio mínimo vital (densidad)

    p(data-aos="fade-down") Para la industria avícola es necesario manejar la densidad del número de aves por metro cuadrado en cada granja, según el tipo de sistema productivo y fase de producción; para esto, en la Resolución 0253, se presentan las tablas que ayudan a definir el número de pollitos que se quieren alojar o encasetar, teniendo en cuenta el área útil del galpón, la disponibilidad de equipos y la densidad de ocupación recomendada por metro cuadrado y el clima. 
    p.mb-5(data-aos="fade-down") En la siguiente tabla, se especifica con detalle la densidad requerida para las aves.

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Tabla 5.
        span <em>Manejo de espacios de los pollitos.</em>
      img.d-md-block(src="@/assets/curso/temas/tema7/img-2.svg" data-aos="fade-left")
      figcaption Nota. DANE (2015, p.7).

    p.mb-5(data-aos="fade-down") En la producción de gallina ponedora, se puede encontrar que los espacios de densidad varían según el tipo de sistema, si es en piso o jaula. Observe, al respecto, lo que explica la siguiente tabla:
    
    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Tabla 6.
        span <em>Pautas de espacio vital en gallina ponedora criada en piso.</em>
      img.d-md-block(src="@/assets/curso/temas/tema7/img-2-1.svg" data-aos="fade-left")
      figcaption Nota. AVICOL (2014).

    p.mb-5(data-aos="fade-down") Así se representa cómo, según las semanas de vida, se deben ampliar los espacios y la distribución de los comederos y bebederos.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 7.2 Manejo preventivo

    p(data-aos="fade-down") El manejo preventivo son todas las actividades que se realizan para evitar el ingreso de agentes patógenos, como bacterias, virus u hongos, a las instalaciones y evitar el deterioro por manejo de estas. Según ICA (2017), dentro de las etapas de la cadena aviar, existen ciertos peligros, que pueden ser de tres tipos: biológicos, químicos y físicos. Dentro del programa de bioseguridad, los más significativos son los agentes infecciosos, que producen una serie de riesgos a los que está expuesta la materia prima, como son las aves, el propio trabajador, el medio que los rodea y la misma comunidad.
    p(data-aos="fade-down") Es importante cumplir con los requerimientos preventivos para evitar grandes pérdidas económicas por el ingreso de agentes extraños o patógenos a las instalaciones de cada granja avícola, ocasionando la disminución de la producción y mortalidad de las aves. Los siguientes son parámetros establecidos para las granjas bioseguras:
    ul.lista-ul.mb-5(data-aos="fade-down")
      li 
        i.lista-ul__vineta
        | La ubicación de las granjas debe ser en zonas rurales.
      li 
        i.lista-ul__vineta
        | Es importante tener un cerco perimetral para evitar el ingreso a personal no autorizado u otro tipo de animales.
      li  
        i.lista-ul__vineta
        | Distancias considerables entre galpones, granjas u otro tipo de producción pecuaria.
      li  
        i.lista-ul__vineta
        | Se debe realizar periódicamente el control de la maleza de los alrededores de los galpones.
      li  
        i.lista-ul__vineta
        | Para el ingreso de vehículos, es necesario contar con un arco de desinfección.
      li  
        i.lista-ul__vineta
        | Las vías de acceso deben estar en muy buenas condiciones.
      li  
        i.lista-ul__vineta
        | Se debe contar con las medidas y protocolos de bioseguridad.
      li  
        i.lista-ul__vineta
        | Toda la granja debe estar debidamente señalizada.
        
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 7.3 Programación de mantenimiento

    p.mb-5(data-aos="fade-down") La programación de mantenimiento son todas las labores propuestas en las instalaciones avícolas, según el tipo de producción y sistema, para poder establecer las diferentes actividades a desempeñar en cada sección de la granja con el fin de mantener en excelentes condiciones todas las áreas de producción y no producción. En el siguiente cuadro, se puede apreciar un modelo de programación de mantenimiento de cada área de producción:

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Tabla 7.
        span <em>Ejemplo de programación de mantenimiento de áreas de producción</em>
      img.d-md-block(src="@/assets/curso/temas/tema7/img-3.svg" data-aos="fade-left")
      figcaption Nota. Girón (2014).







</template>

<script>
export default {
  name: 'Tema7',
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
