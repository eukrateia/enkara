var printPre = {
  init: {

  },
  getFormData: function () {
    var objArr = [];

    $('input').each(function() {
      var obj = null;
      var inType = $(this).attr('type');
      switch(inType) {
        case 'text':
        case 'time':
        case 'week':
        case 'month':
        case 'number':
        case 'tel':
          obj = {
            inType: $(this).attr('type'),
            id: $(this).attr('id') ? $(this).attr('id') : '',
            name: $(this).attr('name') ? $(this).attr('name') : '',
            value: $(this).val() ? $(this).val() : ''
          }
          break;
        case 'radio':
        case 'checkbox':
          var inName = $(this).attr('name');
          obj = {
            inType: $(this).attr('type'),
            id: $(this).attr('id') ? $(this).attr('id') : '',
            name: $(this).attr('name') ? $(this).attr('name') : '',
            value: $('input[name=' + inName + ']:checked').val() ? $('input[name=' + inName + ']:checked').val() : ''
          }
          break;
        default:
          break;
      }
      if(obj !== null) {
        objArr.push(obj);
      }
    });
    console.log('*********** objArr ***********');
    console.log(objArr);
  }
}
