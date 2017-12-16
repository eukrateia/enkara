var printPre = {
  init: {

  },
  getFormData: function () {
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
          console.log('inDataInputType: ' + inDataInputType + '   zid: ' + zid + '   inName: ' + inName);
          console.log('input[name="' + inName + '"] = ' + $('input[name="' + inName + '"]:checked').val());
          break;
        case 'checkbox':
          var inName = $(this).attr('name');
          objArr[zid] = $(this).val();
          break;
        default:
          break;
      }
    });
    console.log(objArr);
  }
}


//***** API insertRecords example *****
//https://crm.zoho.com/crm/private/xml/Leads/insertRecords?newFormat=1&authtoken=a5645229e18b49eb2927c290aeed90ac&scope=crmapi&xmlData=<Leads><row no="1"><FL val="Lead Source">Web Download</FL><FL val="Company">Your Company</FL><FL val="First Name">David</FL><FL val="Last Name">Demers</FL><FL val="Email">testing@testing.com</FL><FL val="Title">Manager</FL><FL val="Phone">1234567890</FL><FL val="Home Phone">0987654321</FL><FL val="Other Phone">1212211212</FL><FL val="Fax">02927272626</FL><FL val="Mobile">292827622</FL></row></Leads>


var zohoMap = {
  "Lead Owner"        : "Lead Owner",
  "Salutation"        : "Salutation",
  "First Name"        : "First Name",
  "Title"             : "Title",
  "Last Name*"        : "Last Name*",
  "Company*"          : "Company*",
  "Lead Source"       : "Lead Source",
  "Industry"          : "Industry",
  "Annual Revenue"    : "Annual Revenue",
  "Phone"             : "Phone",
  "Mobile"            : "Mobile",
  "Fax"               : "Fax",
  "Email"             : "Email",
  "Secondary Email"   : "Secondary Email",
  "Skype ID"          : "Skype ID",
  "Website"           : "Website",
  "Lead Status"       : "Lead Status",
  "Rating"            : "Rating",
  "No. of Employees"  : "No. of Employees",
  "Email Opt-out"     : "Email Opt-out",
  "Street"            : "Street",
  "City"              : "City",
  "State"             : "State",
  "Zip Code"          : "Zip Code",
  "Country"           : "Country",
  "Description"       : "Description",
}
