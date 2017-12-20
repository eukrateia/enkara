var testData = {

}


var printPre = {
  init: function() {
    printPre.setDefaults();
    printPre.events.buttons();
  },
  setDefaults: function () {

  },
  events: {
    buttons: function() {

      $('#submitApplication').on('click', function() {
        printPre.submit.getFormData();
      });

    }
  },
  submit: {
    getFormData: function() {
      var objArr = [];

      $('[data-input-type]').each(function() {
        var inDataInputType = $(this).attr('data-input-type');
        var zid = $(this).attr('zid');
        switch(inDataInputType) {
          case 'text':
          case 'time':
          case 'week':
          case 'month':
          case 'number':
          case 'tel':
            objArr[zid] = $(this).text();
            break;
          case 'radio':
            var inName = $(this).attr('name');
            objArr[zid] = $('input[name="' + inName + '"]:checked').val();
            break;
          case 'checkbox':
            var inName = $(this).attr('name');
            objArr[zid] = $(this).val();
            break;
          case 'encrypted':
          default:
            break;
        }
      });
      console.log(objArr);
      printPre.submit.postData(objArr);
    },
    validateInput: function(objArr) {

    },
    xmlBuild: function(objArr) {

      var dataStr = 'https://crm.zoho.com/crm/private/xml/Leads/insertRecords?newFormat=1&authtoken=a5645229e18b49eb2927c290aeed90ac&scope=crmapi&xmlData=<Leads><row no="1">';
      for (var field in objArr) {
        dataStr += '<FL val="' + field + '">' + objArr[field] + '</FL>';
      }
      dataStr += '</row></Leads>';
      console.log('*****************************');
      console.log(dataStr)
      console.log('*****************************');
      printPre.api.postData(dataStr);
    }
  },
  api: {
    postData: function(dataStr) {
      window.open(
        dataStr,
        '_blank' // <- This is what makes it open in a new window.
      );
    }
  }
}



//***** API insertRecords example *****
//https://crm.zoho.com/crm/private/xml/Leads/insertRecords?newFormat=1&authtoken=a5645229e18b49eb2927c290aeed90ac&scope=crmapi&xmlData=<Leads><row no="1"><FL val="Lead Source">Web Download</FL><FL val="Company">Your Company</FL><FL val="First Name">David</FL><FL val="Last Name">Demers</FL><FL val="Email">testing@testing.com</FL><FL val="Title">Manager</FL><FL val="Phone">1234567890</FL><FL val="Home Phone">0987654321</FL><FL val="Other Phone">1212211212</FL><FL val="Fax">02927272626</FL><FL val="Mobile">292827622</FL></row></Leads>

$(document).ready(function() {
    printPre.init();
});
