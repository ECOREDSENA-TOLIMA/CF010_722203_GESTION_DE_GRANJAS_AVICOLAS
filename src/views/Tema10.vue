<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 Cronograma de actividades

    p(data-aos="fade-right") Los cronogramas de actividades son las programaciones de todas las actividades que se necesitan para el debido funcionamiento y desarrollo de los procesos productivos en las granjas avícolas en un tiempo determinado y con el personal encargado para incrementar la eficacia de la producción, permitiendo ejecutar las tareas en una forma ordenada y eficiente; en estos, se pueden programar las fumigaciones, desinfección, limpieza, aplicación de vitaminas, suplementos, etc. Es muy importante el registro de producción diaria para mantener el control y tomar medidas cuando se requieran; por ende, en las siguientes tablas, se presentan algunos ejemplos adaptados a los procesos diarios y mensuales en granja:

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Tabla 8.
        span <em>Ejemplo cronograma de actividades diarias en granja recolectora de huevo</em>
      img.d-md-block(src="@/assets/curso/temas/tema10/img-1.svg" data-aos="fade-left")
      figcaption Nota. Adaptado de Toscana Sociedad Avícola (2018).

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Tabla 9.
        span <em>Ejemplo cronograma de actividades diarias en granja recolectora de huevo</em>
      img.d-md-block(src="@/assets/curso/temas/tema10/img-2.svg" data-aos="fade-left")
      figcaption Nota. Adaptado de Toscana Sociedad Avícola (2018).

    p(data-aos="fade-right") Se pueden encontrar variedad de cronogramas, estos dependen de la tarea o trabajo que se va a desarrollar y se pueden implementar según su aplicación; entre los tipos de cronogramas que más se utilizan según sus características y aplicación, están:
    ul.lista-ul(data-aos="fade-right")
      li 
        i.lista-ul__vineta
        | <strong>Diagrama de Gantt:</strong> es uno de los cronogramas más utilizados, se caracteriza por ser una barra de entrada doble, es decir, se anota en las filas las actividades y en las columnas el tiempo que durará cada una. Este se puede aplicar para el desarrollo de varias actividades a nivel administrativo de las granjas, para llevar control de la ejecución diaria y mensual de las mismas.
      li 
        i.lista-ul__vineta
        | <strong>Cronograma de hitos:</strong> en este cronograma, se agrupan los puntos o etapas clave de una actividad. Pueden ser tareas esenciales, fechas de entregas o reuniones importantes. Por tanto, en este cronograma no se incluyen todas las tareas o acciones, sino aquellas más relevantes o importantes.
      li  
        i.lista-ul__vineta
        | <strong>Cronograma de Pert:</strong> este cronograma se caracteriza por ser un diagrama que prioriza las tareas y las relaciones entre ellas antes que las fechas de entrega. Cada tarea es representada en un cuadro en el que se incluyen los procesos que requiere. El orden de las cajas dependerá de la prioridad temporal y las relaciones entre cada actividad. Normalmente, se distribuyen de izquierda a derecha.
      li  
        i.lista-ul__vineta
        | <strong>Cronograma de trabajo:</strong> el cronograma que más aplica en las granjas avícolas es este, ya que se da un detalle de las actividades que normalmente se llevan a cabo en todos los procesos que se desarrollan en cada fase productiva. Este se aplica generalmente para los administradores de granjas, para llevar un control más acertado sobre las tareas que se realizan en toda la granja.
      li  
        i.lista-ul__vineta
        | <strong>Microsoft Project:</strong> es un programa que se emplea como cronograma de <em>software,</em> sirve para administrar los diferentes procesos a desarrollar, planes, asignaciones de tareas y recursos, administrar presupuestos, analizar las cargas del trabajo y dar seguimiento a la productividad. Este se puede aplicar en todos los procesos y procedimientos, tanto productivos como administrativos y de presupuesto; las personas encargadas son los directores de granjas.


    





</template>

<script>
export default {
  name: 'Tema10',
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
