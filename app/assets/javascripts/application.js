// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require jquery.min
//= require turbolinks
//= require popper.min
//= require bootstrap.min
//= require perfect-scrollbar.jquery.min
//= require bootstrap-notify
//= require black-dashboard
//= require moment
//= require fullcalendar
//= require daterangepicker
//= require bootstrap-datepicker
//= require_tree .


function functionReveal() {
  var x = document.getElementById("card-hide");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
