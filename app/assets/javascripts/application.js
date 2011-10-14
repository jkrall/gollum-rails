// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


$(document).ready(function() {

  if ($('#pages_edit').length) {

    $('a#preview').click(function() {
      $.post($(this).attr('href'), { data: $('#page_body').val() }, function(data) {
        $('#preview_area').html(data).show();
        $('#write_area').hide();
      });
      return false;
    });
    $('a#write').click(function() {
      $('#write_area').show();
      $('#preview_area').hide();
      return false;
    });

  }




});