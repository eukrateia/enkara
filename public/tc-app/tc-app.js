var testData = {
  "Accepted CC for at least 4 months" : "Yes",
"Annual Income 1":"10000",
"Annual Income 2":"20000",
"Annual Revenue":"150000",
"Average Bank Balance":"40500",
"Business Inception":"12/1/20120",
"Business Ownership % 1":"",
"Business Ownership % 2":"",
"Cell Phone 1":"",
"City":"Dover",
"City 1":"",
"City 2":"",
"Company":"Enkara Technology Solutions",
"Company Type":"LLC",
"Credit Score":"760",
"Date of Birth 1":"",
"Date of Birth 2":"",
"Date/Time (First Call)":"12/19/2017",
"Doing Business As (DBA)":"",
"Email 1":"dave.demers@gmail.com",
"Email 2":"",
"First Name 1":"David",
"First Name 2":"",
"Home Address 1":"",
"Home Address 2":"",
"Home Phone 1":"603-325-2910",
"Home Phone 2":"",
"Landlord Name":"",
"Landlord Phone":"",
"Last Name 1":"Demers",
"Last Name 2":"",
"Legal Entity":"",
"Loan Amount Requested":"",
"MCA Amount":"",
"Middle Initial 1":"",
"Middle Initial 2":"",
"Monthly Credit Card Volume":"",
"Outstanding MCA":"No",
"Phone":"",
"Rent or Own":"",
"SSN 1":"",
"SSN 2":"",
"Separate Business Bank Account":"No",
"State":"NH",
"State 1":"",
"State 2":"",
"State of Incorporation":"NH",
"Street":"130 Central Ave",
"Tax ID":"",
"Use of Funds":"Fun Money!",
"Zip 1":"",
"Zip 2":"",
"Zip Code":"03820"
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
      printPre.submit.xmlBuild(objArr);
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
