<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-primario
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5 En este componente, se abordarán los conceptos para reconocer los aspectos relacionados con la coordinación y control de procesos productivos avícolas, interpretando las normativas aplicables y las buenas prácticas aplicables a los procesos, actividades y condiciones de bioseguridad en la granja avícola. Como punto de partida, lo invitamos a ver el siguiente video introductorio:
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/nNulSflWPWk" title="Buenas prácticas en granjas avícolas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
