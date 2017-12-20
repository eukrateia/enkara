var testData = {
  "Accepted CC for at least 4 months" : "Yes",
  "Annual Income 1"                   : "10000",
  "Annual Income 2"                   : "20000",
  "Annual Revenue"                    : "150000",
  "Average Bank Balance"              : "40500",
  "Business Inception"                : "12/1/20120",
  "Business Ownership Percent 1"      : "80",
  "Business Ownership Percent 2"      : "20",
  "Cell Phone 1"                      : "603-325-2910",
  "Cell Phone 2"                      : "603-325-2910",
  "City"                              : "Dover",
  "City 1"                            : "Rochester",
  "City 2"                            : "Somersworth",
  "Company"                           : "Enkara Technology Solutions",
  "Company Type"                      : "LLC",
  "Credit Score"                      : "760",
  "Date of Birth 1"                   : "10/05/1980",
  "Date of Birth 2"                   : "10/06/1981",
  "Date/Time (First Call)"            : "12/19/2017",
  "Doing Business As (DBA)"           : "ETS Advanced",
  "Email 1"                           : "dave.demers@gmail.com",
  "Email 2"                           : "dave.demers.test@gmail.com",
  "First Name 1"                      : "David",
  "First Name 2"                      : "George",
  "Home Address 1"                    : "4 Heritage Dr",
  "Home Address 2"                    : "565 Sixth Street",
  "Home Phone 1"                      : "603-555-2910",
  "Home Phone 2"                      : "603-555-1212",
  "Landlord Name"                     : "Mr Landlord",
  "Landlord Phone"                    : "603-555-1212",
  "Last Name"                         : "Demers",
  "Last Name 1"                       : "Demers",
  "Last Name 2"                       : "Davidson",
  "Legal Entity"                      : "LLC",
  "Loan Amount Requested"             : "150000",
  "MCA Amount"                        : "0",
  "Middle Initial 1"                  : "G",
  "Middle Initial 2"                  : "D",
  "Monthly Credit Card Volume"        : "4000",
  "Outstanding MCA"                   : "No",
  "Phone"                             : "603-325-2910",
  "Rent or Own"                       : "Own",
  "SSN 1"                             : "1234567890",
  "SSN 2"                             : "0987654321",
  "Separate Business Bank Account"    : "No",
  "State"                             : "NH",
  "State 1"                           : "MA",
  "State 2"                           : "RI",
  "State of Incorporation"            : "NH",
  "Street"                            : "130 Central Ave",
  "Tax ID"                            : "10-456789321",
  "Use of Funds"                      : "Fun Money!",
  "Zip 1"                             : "03867",
  "Zip 2"                             : "03801",
  "Zip Code"                          : "03820"
}

function loadTestData() {
  for (var prop in testData) {
    $('[zid="' + prop + '"]').text(testData[prop]);
  }
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
      if (objArr['Last Name'] == '' || objArr['Last Name'] == undefined) { objArr['Last Name'] = objArr['Last Name 1']; }
      console.log(objArr);
      printPre.submit.xmlBuild(objArr);
    },
    validateInput: function(objArr) {

    },
    xmlBuild: function(objArr) {

      var dataStr = 'https://crm.zoho.com/crm/private/xml/Leads/insertRecords?newFormat=1&authtoken=a5645229e18b49eb2927c290aeed90ac&scope=crmapi&xmlData=<Leads><row no="1">';
      for (var field in objArr) {
        dataStr += '<FL val="' + field + '">' + (objArr[field] == undefined ? '' : objArr[field]) + '</FL>';
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
//https://crm.zoho.com/crm/private/xml/Leads/insertRecords?newFormat=1&authtoken=a5645229e18b49eb2927c290aeed90ac&scope=crmapi&xmlData=<Leads><row no="1"><FL val="Business Ownership Percent 1">20</FL><FL val="Lead Source">Web Download</FL><FL val="Company">Your Company</FL><FL val="First Name">David</FL><FL val="Last Name">Demers</FL><FL val="Email">testing@testing.com</FL><FL val="Title">Manager</FL><FL val="Phone">1234567890</FL><FL val="Accepted CC for at least 4 months">Yes</FL><FL val="Home Phone">0987654321</FL><FL val="Other Phone">1212211212</FL><FL val="Fax">02927272626</FL><FL val="Mobile">292827622</FL></row></Leads>

$(document).ready(function() {
    printPre.init();
});
