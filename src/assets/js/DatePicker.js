$(function () {  
      //Date picker
      $('#datepicker').datepicker({
        autoclose: true
      })
      .datepicker("setDate",'now')
});

$(function () {  
      //Date picker disabled
      $('#datepickerdisabled').datepicker({
        autoclose: true
      })
      .datepicker("setDate",'now')
      .prop('disabled', true);
})
