<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Bienestar animal

    p.mb-5(data-aos="fade-right") El bienestar animal es definido en la Resolución 0253 como el estado físico y mental de un animal en relación con las condiciones en que vive y muere; este es un factor vital y de gran importancia, ya que se debe tener en cuenta el ofrecer condiciones dignas y adecuadas en el desarrollo de la producción de aves. Algunos aspectos mínimos para el bienestar animal son:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul2")(data-aos="fade-down")
      .row.justify-content-center.align-items-center(titulo="Temperatura")
        .col-lg-2.col-10.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema6/decorador-1.svg', alt='Temperatura')
        .col-md-8.col-12
          p En toda producción avícola, se deben garantizar condiciones térmicas adecuadas y acordes con el estadio de desarrollo de las aves, evitando niveles extremos de calor, humedad y frío. Se deben manejar las temperaturas adecuadas según la región y sistema productivo.

      .row.justify-content-center.align-items-center(titulo="Iluminación")
        .col-lg-2.col-10.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema6/decorador-2.svg', alt='Iluminación')
        .col-md-8.col-12
          p Es importante contar con la  luz del día para que las aves puedan realizar sus procesos fisiológicos, pero, además de esto, se deben garantizar periodos de oscuridad para facilitar el descanso, donde se promueva un periodo de adaptación progresiva a los cambios de luz.

      .row.justify-content-center.align-items-center(titulo="Consumo de alimento")
        .col-lg-2.col-10.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema6/decorador-3.svg', alt='Consumo de alimento')
        .col-md-8.col-12
          p Garantizar el acceso a alimento de calidad y en cantidad suficiente acorde con la edad de las aves, además, limpiar frecuentemente los comederos para maximizar la vida útil y frescura. Los alimentos deben contar con registro ICA.

      .row.justify-content-center.align-items-center(titulo="Consumo de agua")
        .col-lg-2.col-10.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema6/decorador-4.svg', alt='Consumo de agua')
        .col-md-8.col-12
          p Este es uno de los recursos más importantes y necesarios para las aves, por lo cual debe ser apta para el consumo; se debe buscar la hidratación y refrescarlas, promoviendo así el consumo de alimento. Los bebederos, tanques y suministros se deben limpiar frecuentemente para evitar la proliferación de microorganismos en las aves. 

      .row.justify-content-center.align-items-center(titulo="Ventilación")
        .col-lg-2.col-10.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema6/decorador-5.svg', alt='Ventilación')
        .col-md-8.col-12
          p Se debe permitir la ventilación y circulación del aire fresco,  permitiendo el intercambio de gases entre el interior y el exterior del galpón, ayudando a reducir la presentación de problemas respiratorios en las aves.

      .row.justify-content-center.align-items-center(titulo="Calidad de la cama")
        .col-lg-2.col-10.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema6/decorador-6.svg', alt='Calidad de la cama')
        .col-md-8.col-12
          p Estas deben ser de material friable y seco, que proteja a las aves de peladuras o lesiones, que además permita el aislamiento del frío en las primeras semanas de vida. Es necesario realizar periódicamente la sanitización y disposición de la misma.

      .row.justify-content-center.align-items-center(titulo="Espacio")
        .col-lg-2.col-10.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema6/decorador-7.svg', alt='Espacio')
        .col-md-8.col-12
          p No se debe tener un galpón con alta densidad o con un número significativamente mayor al recomendado, pues esto puede generar un aumento en la mortalidad, dificultades respiratorias, enfermedades en la piel o hematomas, además de la disminución de los parámetros productivos. 

      .row.justify-content-center.align-items-center(titulo="Tratamiento del pico")
        .col-lg-2.col-10.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema6/decorador-8.svg', alt='Tratamiento del pico')
        .col-md-8.col-12
          p Este procedimiento debe ser realizado por personal debidamente capacitado y con los equipos específicos requeridos, se realiza a las aves destinadas a la postura de huevo comercial, con el fin de minimizar el picaje entre ellas.
      
    p.mb-5(data-aos="fade-down") Además, se debe complementar con los siguientes componentes que aportan al bienestar animal en los sistemas de producción de aves de corral:

    TabsA.color-acento-botones.mb-5(data-aos="fade-down")
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento-botones--borde.p-4(titulo="Salud animal")
        h4 Salud animal
        p Aplicar todos los planes y protocolos sanitarios según las fases de producción de las aves. (vacunación, muestreos, desparasitación, vitaminización).

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento-botones--borde.p-4(titulo="Manejo de las aves")
        h4 Manejo de las aves
        p Se debe manejar el bienestar animal establecido, garantizando que no padezcan hambre ni sed, no sufrir molestias, no sufrir dolor, heridas o enfermedades, poder expresar su comportamiento natural y no padecer de miedo.
      
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento-botones--borde.p-4(titulo="Buenas prácticas en el uso de medicamentos veterinarios")
        h4 Buenas prácticas en el uso de medicamentos veterinarios
        p Es indispensable ser responsables con la aplicación de medicamentos veterinarios; siempre que sean necesarios, revisar sus fechas de vencimiento, usos y almacenamiento, evitar la automedicación; siempre debe estar asesorada, aplicada o dirigida por un profesional, en este caso, un médico veterinario.

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento-botones--borde.p-4(titulo="Planes de contingencia y emergencia")
        h4 Planes de contingencia y emergencia
        p Contar con programas de bioseguridad, control de enfermedades y manejo de residuos sólidos generados por las granjas, protegiendo la salud del personal y las aves.

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      


</template>

<script>
export default {
  name: 'Tema6',
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
