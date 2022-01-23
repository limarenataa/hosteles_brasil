$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    $('.carousel').carousel({
     interval: 4000
    });

    $('#alerta').on('show.bs.modal', function (e) {      // O "on" é uma sintaxe de Jquary e sempre vamos utilizá-la quando utilizamos eventos. O #alerta está associado ao data-Target previamente estabelecido.
       console.log('el model se está mostrando')

       $('#alertaBtn').removeClass('btn btn-outline-success')
       $('#alertaBtn').addClass('btn btn-primary')
       $('#alertaBtn').prop('disabled', true) // desabilitar o botao

     })
     $('#alerta').on('shown.bs.modal', function (e) {  
       console.log('el model se mostró')
     })
     $('#alerta').on('hide.bs.modal', function (e) {  
       console.log('el model se oculta')
     })
     $('#alerta').on('hidden.bs.modal', function (e) {  
       console.log('el model se ocultó')
       $('#alertaBtn').prop('disabled', false) // para que o botão desativado volte ao normal quando se encerre o modal.

     })
 });
