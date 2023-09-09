<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 11
      h1 Manejo ambiental

    p(data-aos="fade-right") Son prácticas dirigidas a evitar los impactos, efectos y riesgos ambientales que pueden causar efectos negativos o daño a las personas y al medio ambiente, según la actividad económica y productiva que se esté desarrollando. Según Orjuela (2014), la industria avícola requiere de la implementación de nuevas prácticas ambientalmente sostenibles, que permitan mejorar y optimizar las condiciones de producción y manejo, para mitigar el impacto ambiental a los recursos naturales. El sector avícola es uno de los grandes generadores de residuos, por lo tanto, para trabajar de manera amigable con el medio ambiente, se han hecho grandes avances de manejo ambiental considerando la normatividad vigente, esto consiste en la formulación de planes ambientales propios de cada granja avícola, teniendo en cuenta sus sistemas productivos, esto con el fin de un manejo eficiente de los recursos naturales.
    p.mb-5(data-aos="fade-right") Para el buen desarrollo de las granjas avícolas, se deben aplicar las Buenas Prácticas Avícolas y los protocolos de bioseguridad que establecen los entes controladores y reguladores para el buen funcionamiento productivo y económico del sector, por medio de leyes, normas, resoluciones y decretos; por eso, es importante comprender la forma en que se interactúa con el medio ambiente y los recursos naturales, que también están regulados por derecho. 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema11/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Según Rivera (2020), en algunos momentos, la industria avícola toma los recursos naturales para abastecer la actividad productiva; en otros momentos, se generan desechos, residuos o subproductos, y se adicionan al medio ambiente; esto debe ser regulado por la normatividad establecida, para cumplir ciertas condiciones para mantener el equilibrio entre la industria avícola y el medio ambiente, creando una armonía significativa entre los dos sectores.
    
    p.mb-5(data-aos="fade-right") Entre la normatividad más conocida e implementada en el sector avícola, están:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-right") 
      .tarjeta.color-acento-botones1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema11/decorador-1.svg' alt='AvatarTop')
        h3.text-center Decreto 2811 de 1974
        p.text-center Este decreto comprende todo lo correspondiente al uso del agua.

      .tarjeta.color-primario1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema11/decorador-2.svg' alt='AvatarTop')
        h3.text-center Decreto 1076 de 2015
        p.text-center Comprende el manejo de emisiones atmosféricas y el aprovechamiento forestal.

      .tarjeta.color-acento-contenido1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema11/decorador-3.svg' alt='AvatarTop')
        h3.text-center Decreto 1076 de 2016 
        p.text-center En él, se establece todo lo relacionado con la emisión de olores.

      .tarjeta.color-acento-botones1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema11/decorador-4.svg' alt='AvatarTop')
        h3.text-center Resolución 1541 de 2013
        p.text-center Comprende el manejo y control de los olores producidos en las granjas avícolas.

      .tarjeta.color-primario1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema11/decorador-5.svg' alt='AvatarTop')
        h3.text-center Ley 23 de 1973
        p.text-center En esta ley, se menciona todo lo relacionado con la contaminación medio ambiental y la conservación de este.

      .tarjeta.color-acento-contenido1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema11/decorador-6.svg' alt='AvatarTop')
        h3.text-center Ley 99 de 1993
        p.text-center En esta ley, se establece la reordenación del sector público encargado de la gestión y conservación del medio ambiente.

    .row.justify-content-center.align-items-center.mt-5
      .col-12.col-md-10.col-lg-7(data-aos="fade-right")    
        .row
          .col-lg-12
            .cajon.color-acento-contenido.p-4.mb-4
              p Nota: recuerde que, si desea consultar en detalle lo que contiene cada normatividad de manera completa, puede hacerlo a través de la web.

    p.mb-5(data-aos="fade-right") Para clasificar el manejo ambiental, es necesario identificar las actividades que se desarrollan en cada uno de los procesos dentro de la granja; para esto, se deben conocer los aspectos e impactos ambientales que se generan en cada área de producción y la relación con el recurso natural (agua, aire y suelo), esto se relaciona en la siguiente tabla, donde se presentan los aspectos e impactos ambientales:

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Tabla 10.
        span <em>Ejemplo de identificación de aspectos e impactos ambientales según las áreas y actividades de producción en granjas avícolas</em>
      img.d-md-block(src="@/assets/curso/temas/tema11/img-2.svg" data-aos="fade-left")
      figcaption Nota. Adaptado de Orjuela (2014).

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_11_1 11.1 Recolección y disposición de residuos

    p(data-aos="fade-right") Los residuos son todo aquello que se considera como un desecho generado en los procesos productivos y económicos de las granjas avícolas, lo cual hay que eliminar. En la actualidad, cada vez más, se enfatiza en la recuperación (transformación) de estos para evitar impactos ambientales; una de las propuestas más utilizadas es la clasificación según el tipo de residuo, a esta práctica se le llama reciclaje y permite el manejo y control según la normatividad vigente. 
    p(data-aos="fade-right") Los residuos se pueden clasificar según su estado físico, en las granjas avícolas, se tiene en cuenta la generación de estos, según su proceso de producción, y generalmente cuentan con un sistema de recolección y disposición. Unos de los más generados son los residuos sólidos y líquidos, que se detallan a continuación.
    ul.lista-ul.mb-5(data-aos="fade-right")
      li 
        i.lista-ul__vineta
        | <strong>Residuo sólido:</strong> son aquellos cuyas características son bastante resistentes. Entre los que se generan en las granjas avícolas, se encuentran dos tipos: uno de tipo industrial, generado dentro el proceso productivo de la granja, y el otro por los residuos domésticos producidos en la casa del viviente de la granja. Entre los residuos sólidos industriales, están:

    TabsA.color-acento-botones.mb-5(data-aos="fade-down")
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento-botones--borde.p-4(titulo="Gallinaza")
        h4 Gallinaza
        p Es el principal de la actividad avícola en las granjas, no solo por la cantidad que genera, sino por sus propiedades como abono orgánico; a esto se le debe dar un correcto manejo para evitar olores molestos y proliferación de vectores.

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento-botones--borde.p-4(titulo="Huevos rotos")
        h4 Huevos rotos
        p Son los huevos que no se pueden destinar a la venta.

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento-botones--borde.p-4(titulo="Mortalidad")
        h4 Mortalidad
        p Son las aves que mueren en la granja por diferentes factores, cada vez que ocurre este evento, se sacan de los galpones para llevarlas a la caseta de compostaje.

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento-botones--borde.p-4(titulo="Especiales")
        h4 Especiales
        p Recipientes de vacunas y diluyentes.

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      
    p(data-aos="fade-down") Entre los residuos sólidos domésticos, se encuentra otra subclasificación de los que se generan en la granja:

    ul.lista-ul.mb-5(data-aos="fade-down")
      li 
        i.lista-ul__vineta
        | <strong>Residuos orgánicos:</strong> son los residuos de comida, producidos en la granja, básicamente los provenientes de la cocina de la vivienda.
      li 
        i.lista-ul__vineta
        | <strong>Residuos inorgánicos:</strong> estos residuos se generan, principalmente, por el empaque de alimentos y de materias primas, y de productos como recipientes de vacunas, desinfectantes, los provenientes del baño de la vivienda (papeles sanitarios, toallas higiénicas, pañales desechables, etc.).
      li  
        i.lista-ul__vineta
        | <strong>Residuos líquidos:</strong> como su nombre lo dice, sus características son líquidas; para estos, se dispondrá de sistemas sanitarios adecuados para la recolección, el tratamiento y la disposición de aguas residuales aprobados por la autoridad sanitaria ambiental competente; la disposición final debe ser en lugares aprobados por la autoridad sanitaria ambiental, o darles un manejo interno que no represente ningún tipo de riesgo ni tampoco afecte la comunidad o el ambiente.

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema11/img-3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los residuos sólidos deben ser removidos frecuentemente de las diferentes áreas de las granjas y las plantas, y disponerse de manera que se elimine la generación de malos olores, el refugio y alimento de animales y plagas, y que no contribuya de otra forma al deterioro ambiental. Aquí están incluidos los huevos fértiles rechazados o no aceptables.

    p(data-aos="fade-down") Se debe disponer de recipientes e instalaciones apropiadas para la recolección y almacenamiento de los residuos sólidos, estos deben ser de material resistente, impermeable, boca ancha y estar provistos de tapa, su ubicación debe corresponder a los sitios de generación de las basuras.
    p.mb-5(data-aos="fade-down") Después de desocupados, los recipientes se deben lavar y desinfectar, antes de ser colocados en su respectivo sitio; el manejo de los residuos líquidos dentro de la planta no debe representar un riesgo de contaminación y se deben implementar sistemas de lavado que optimicen el uso de agua.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_11_2 11.2 Almacenamiento

    p.mb-5(data-aos="fade-down") Para el almacenamiento de los residuos, es necesario tener clara su clasificación y contar con espacios (sitio de acopio) establecidos por la normatividad para su almacenaje, cumpliendo con los siguientes parámetros: 

    TabsC.color-acento-contenido.mb-5(data-aos="fade-down")
      .py-3.py-md-4(titulo="Parámetro 1")
        .row
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema11/img-4.svg', alt='Texto que describa la imagen')
          .col-md-6
            p Disponer de un sitio especial para el almacenamiento, separación y clasificación temporal de los residuos peligrosos generados, que cuente con el cumplimiento de la normatividad ambiental vigente.

      .py-3.py-md-4(titulo="Parámetro 2")
        .row
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema11/img-5.svg', alt='Texto que describa la imagen')
          .col-md-6
            p Diseñar un manual de control y vigilancia para garantizar el manejo adecuado de los residuos peligrosos.

      .py-3.py-md-4(titulo="Parámetro 3")
        .row
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema11/img-6.svg', alt='Texto que describa la imagen')
          .col-md-6
            p Contar con recipientes plásticos con tapa para ubicarlos dentro del sitio de almacenamiento temporal, en todas las áreas de la granja. 

      .py-3.py-md-4(titulo="Parámetro 4")
        .row
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema11/img-7.svg', alt='Texto que describa la imagen')
          .col-md-6
            p Planificar e implementar jornadas de aseo, fumigación y desinfección en sitio de acopio temporal, después de ser recogidos por las empresas responsables y con los respectivos convenios con la granja (recicladores, empresas de servicio público, empresas prestadoras de servicio de recolección de residuos peligrosos), para evitar la generación de contaminación o vectores.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_11_3 11.3 Transporte interno

    p.mb-5(data-aos="fade-down") En las granjas avícolas, es pertinente contar con un transporte interno que se encargue de la recolección de todos los residuos que se generan en cada área de producción y administrativa para un mejor manejo, control y organización, estos deben cumplir parámetros ya establecidos según la normatividad vigente, para un buen desarrollo de recolección y almacenamiento; según Polo (s. f.), se debe implementar en orden, así:    

    .row.mb-5
      .col-md-6
        //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-primario.mb-5(data-aos="fade-down")
          .row(numero="1" titulo="Establece")
            .col-md-12.mb-4.mb-md-0
              p.text-small Establecer horarios y frecuencia de recolección de residuos, de acuerdo con el volumen generado.

          .row(numero="2" titulo="Define")
            .col-md-12.mb-4.mb-md-0
              p.text-small Definir la ruta de recolección de residuos, con el propósito de garantizar la recolección completa de residuos, y evitar cruces en áreas de flujo de personas o de restricciones por bioseguridad.  

          .row(numero="3" titulo="Demarca")
            .col-md-12.mb-4.mb-md-0
              p.text-small Demarcar la ruta de recolección y transporte.

          .row(numero="4" titulo="Adquiere")
            .col-md-12.mb-4.mb-md-0
              p.text-small Adquirir un transporte adecuado en tamaño y condiciones, para optimizar la eficiencia de esta actividad.

          .row(numero="5" titulo="Designa")
            .col-md-12.mb-4.mb-md-0
              p.text-small Designar responsabilidades a operarios encargados de las actividades de recolección y transporte.
              
          .row(numero="6" titulo="Convenio")
            .col-md-12.mb-4.mb-md-0
              p.text-small Establecer convenio con empresa proveedora de servicios de recolección de insumos peligrosos, la cual esté certificada para la recolección, transporte y disposición final de los mismos.

      img.mb-4.mb-xl-0.col-xl-3.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema11/img-8.svg" data-aos="fade-left")

    p(data-aos="fade-down") Los vehículos deben ser utilizados exclusivamente para el transporte de productos aviares y para el transporte de residuos orgánicos, inorgánicos y peligrosos; la empresa está en la obligación de revisar los vehículos antes de cargar los productos, con el fin de asegurar que se encuentren en buenas condiciones sanitarias y de operación, y diligenciar los respectivos registros.




</template>

<script>
export default {
  name: 'Tema11',
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
