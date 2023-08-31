<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 13
      h1 Plan de producción

    p(data-aos="fade-right") El plan de producción es un documento que especifica qué procedimientos y recursos deben aplicarse, quién lo debe hacer y cuándo deben aplicarse a un proceso o producto; este hace referencia con frecuencia a partes del manual de la calidad o a procedimientos documentados, establecidos por la empresa, permitiendo realizar el análisis del proceso productivo, identificando los puntos claves de seguimiento y control de cada fase o etapa.
    p.mb-5(data-aos="fade-right") Es importante saber cómo se va a presentar la respectiva información de los planes establecidos, para poder identificar los indicadores y las alertas en caso de fallas o falencias en los procesos, procedimientos y tareas de las granjas, para tomar decisiones acertadas, para generar y proponer medidas correctivas (soluciones). 

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema13/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para un fácil análisis de datos, se realiza la comparación de los reales con los estándares de cada línea genética y se implementa la técnica del semáforo, que es una herramienta que sirve para identificar la situación real de cada área, proceso y procedimiento, este consiste en que se asigna un color verde si va según lo esperado, amarillo si el comportamiento es poco favorable, y rojo cuando el comportamiento es nada favorable.

    p(data-aos="fade-right") Para diseñar, comprender y tener excelentes resultados con los planes de producción, es necesario tener las herramientas y parámetros adecuados, entre los que se conoce, están: la selección de los indicadores (productivos), la forma de presentar los resultados de la producción y la definición del sistema de alertas tempranas (sistemas de calidad). 
    p.mb-5(data-aos="fade-right") Los planes de producción permiten tener ventaja competitiva y mejora de los procesos, además entregan un enfoque de la visión integral de cada granja o empresa, por eso es importante cumplir con las siguientes características:
    
    .col-xl-12.mx-auto.mb-5
      img.d-md-block(src="@/assets/curso/temas/tema13/img-2.svg" data-aos="fade-left")

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 Componente sanitario y bioseguridad
    
    p(data-aos="fade-right") Son todas las prácticas y medidas preventivas que se aplican en el cuidado y sanidad de los animales, como los programas de vacunación para la prevención y control enfermedades, el cuidado de las instalaciones, la limpieza y desinfección de los galpones, equipo y herramientas, zonas de oficina, maquinaria, bodegas de almacenamiento, manejo de residuos sólidos que se utilizan en la producción y el cuidado de los trabajadores, como los protocolo de seguridad y salud en el trabajo, como la implementación de pausas activas, las capacitaciones en primeros auxilios y en manipulación de alimentos.
    p.mb-5(data-aos="fade-right") En los planes de producción, es fundamental la implementación de las medidas y protocolos de bioseguridad en las granjas avícolas, estos ya están establecidos en la normatividad por el ICA para el proceso de certificación en granjas bioseguras, para esto, existen 10 principios de las granjas bioseguras en la avicultura, donde se resumen los aspectos más importantes para el manejo, prevención, protección y control del ingreso de agentes patógenos a las áreas de producción, de los animales y trabajadores, las cuales se presentan a continuación:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-right") 
      .tarjeta.color-acento-botones1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema13/decorador-1.svg' alt='AvatarTop')
        h3.text-center Ubicación estratégica
        p.text-center En zonas rurales, estas deben ser aisladas de zonas urbanas y otras producciones pecuarias o avícolas, preferiblemente, en zona con poco tránsito de personas ajenas a la granja, al igual que contar con buenas vías de acceso y cercas perimetrales.

      .tarjeta.color-primario1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema13/decorador-2.svg' alt='AvatarTop')
        h3.text-center Señalización de prohibido el paso
        p.text-center Es necesario controlar el acceso a la granja, prohibiendo el paso a los galpones de toda persona u objeto ajeno a la actividad que se realiza o que pueda poner en riesgo la condición sanitaria de ellas.

      .tarjeta.color-acento-contenido1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema13/decorador-3.svg' alt='AvatarTop')
        h3.text-center Periodo de descanso
        p.text-center Es importante ejecutar el debido periodo de descanso entre producciones (vacío sanitario), desocupando los galpones de animales por al menos diez días, y cuanto mayor sea este período de descanso, más reducimos los riesgos.

      .tarjeta.color-acento-botones1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema13/decorador-4.svg' alt='AvatarTop')
        h3.text-center Áreas y equipos limpios
        p.text-center Estas prácticas se deben realizar sobre todo en los momentos de descanso de los galpones, para poder realizar todas las labores de limpieza y desinfección en la granja adicionales a las labores diarias.

      .tarjeta.color-primario1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema13/decorador-5.svg' alt='AvatarTop')
        h3.text-center Control de plagas
        p.text-center Los insectos (moscas y escarabajo) y roedores (ratas y ratones) son transmisores de agentes infecciosos que impactan negativamente la producción, por eso, es importante contar con los mapas de control de plagas y los mecanismos de captura.

      .tarjeta.color-acento-contenido1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema13/decorador-6.svg' alt='AvatarTop')
        h3.text-center Uniformidad
        p.text-center Se debe aplicar el sistema “todo dentro-todo fuera”, que consiste en que las aves ingresen todas juntas (única edad) y se retiren al mismo tiempo, una vez finalizada la producción, de esta manera, se reducirá la transmisión de agentes infecciosos de las parvadas adultas hacia las más jóvenes.

      .tarjeta.color-acento-botones1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema13/decorador-7.svg' alt='AvatarTop')
        h3.text-center Estrés
        p.text-center El sistema inmunológico de las aves puede verse afectado, en gran medida, por situaciones estresantes, lo que daría paso al desarrollo de determinados microorganismos.

      .tarjeta.color-primario1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema13/decorador-8.svg' alt='AvatarTop')
        h3.text-center Despicar
        p.text-center Esta es una solución para el problema del canibalismo en pollos, ponedoras y reproductoras. El comportamiento puede comenzar con picoteo entre los pollos más jóvenes, tirarse de las plumas entre pollos más grandes, o cuando las aves adultas se picotean en la cabeza, la cola y la cloaca.

      .tarjeta.color-acento-contenido1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema13/decorador-9.svg' alt='AvatarTop')
        h3.text-center Programa de sanidad animal
        p.text-center Es importante cumplir con todos los programas de vacunación que se implementan en cada zona, para aumentar la resistencia de las aves a la enfermedad, pero no elimina la posibilidad de que ocurra una infección en la parvada. Tanto las plantas de incubación como las granjas deben contar con la dirección técnica de un médico veterinario.

      .tarjeta.color-acento-botones1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema13/decorador-10.svg' alt='AvatarTop')
        h3.text-center Eliminación de aves muertas
        p.text-center Cada vez que se presenten evidencias y signos clínicos de enfermedad inexplicable o exista mortalidad de etiología desconocida, se deben realizar necropsias, aislamientos microbiológicos, pruebas serológicas y/o diagnósticos histopatológicos de las aves, siempre a la cabeza del médico veterinario responsable de la granja.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 Alimentación 
    
    p.mb-5(data-aos="fade-right") En los planes de producción, la alimentación es uno de los factores determinantes para obtener excelentes resultados en la productividad, estos alimentos deben cumplir con los parámetros establecidos según los requerimientos esenciales que necesita cada ave para su desarrollo, teniendo en cuenta su sistema productivo y etapa de producción, para que pueda transformarse en los productos finales (carne y huevo). Cada productor es libre de escoger la mejor opción, tanto en economía como en rendimiento en sus granjas, por eso se deben implementar los controles de consumo de alimento, ganancia de peso y conversión de alimento.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 Práctica de manejo

    p(data-aos="fade-right") En los planes de producción, las prácticas de manejo son el punto clave para manejar y garantizar una producción avícola, entre las prácticas más representativas en las granjas, se tienen: 
    ul.lista-ul(data-aos="fade-right") 
      li 
        i.lista-ul__vineta
        | Alistar áreas, instalaciones, máquinas, equipos, dotación personal e insumos.
      li 
        i.lista-ul__vineta
        | Desinfectar áreas, instalaciones, máquinas y equipos del proceso.
      li 
        i.lista-ul__vineta
        | Limpiar áreas, instalaciones, máquinas y equipos del proceso.
      li 
        i.lista-ul__vineta
        | Operar equipos de limpieza y desinfección.
      li 
        i.lista-ul__vineta
        | Instalar equipos en el galpón.
      li 
        i.lista-ul__vineta
        | Desarrollar programa de control de temperatura e iluminación.
      li 
        i.lista-ul__vineta
        | Recepcionar las aves.
      li 
        i.lista-ul__vineta
        | Verificar comportamiento y estado general de las aves.
      li 
        i.lista-ul__vineta
        | Efectuar procedimiento de manejo y ajuste de densidades de aves.
      li 
        i.lista-ul__vineta
        | Realizar manejo de cama de galpones.
      li 
        i.lista-ul__vineta
        | Disponer la cama de los galpones.
      li 
        i.lista-ul__vineta
        | Calcular densidad de equipos.
      li 
        i.lista-ul__vineta
        | Calcular parámetros de producción.
      li 
        i.lista-ul__vineta
        | Verificar parámetros productivos.
      li 
        i.lista-ul__vineta
        | Reportar novedades y contingencias.
      li 
        i.lista-ul__vineta
        | Aplicar normas de seguridad industrial y salud ocupacional.
      li 
        i.lista-ul__vineta
        | Disponer residuos.
      li 
        i.lista-ul__vineta
        | Registrar la información en los formatos establecidos.










</template>

<script>
export default {
  name: 'Tema13',
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
