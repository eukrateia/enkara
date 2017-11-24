var enk = {
  init: function() {
    console.log('enk.start');

    enk.load.setEvents();




  },
  load: {
    setEvents: function() {

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
