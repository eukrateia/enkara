var enk = {
  init: function() {
    console.log('enk.start');

    enk.load.setEvents();




  },
  load: {
    setEvents: function() {
      console.log('enk.load.setEvents()');
/*
      $('.formFrame .iframe').ready(function() {
        var iHeight = $( '.iframe' ).contents().find( 'body' ).height();
        //var iHeight = $('.formFrame .iframe .freebirdLightBackground').attr('height');
        console.log('iFrame height: ' + iHeight);
        $('.formFrame iframe').attr('height', iHeight);
      });
*/

      if($('.formFrame').length > 0) {
        $( ".formFrame" ).load( "https://docs.google.com/forms/d/e/1FAIpQLSe2pfJ7fFWoBBrk1zlXEYrTFg4XsORrP25VyeIe7PXv9q4alQ/viewform?embedded=true body" );
      }

      //$(".formFrame").html('<object data="https://docs.google.com/forms/d/e/1FAIpQLSe2pfJ7fFWoBBrk1zlXEYrTFg4XsORrP25VyeIe7PXv9q4alQ/viewform?embedded=true" />');

      $('.signUp').on('click', function() {
        alert('Sign up feature coming soon.');
      });

      $('.login').on('click', function() {
        alert('Login is not setup!!!');
      });
    }
  }
};

$(document).ready(function(){
  enk.init();
});
