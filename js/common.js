$(document).ready(function() {

$(document).on('click.bs.dropdown.data-api', '.dropdown-menu', function (e) { 
    e.stopPropagation();
  });

$(".owl-4").owlCarousel({
  items: 1,
  smartSpeed: 1200,
  touchDrag: false,
  mouseDrag: false,
});

var owl1 = $(".owl-1");
owl1.owlCarousel({
  items: 1,
  smartSpeed: 1200,
  touchDrag: false,
  mouseDrag: false,
  loop: true,
});

$('body').on('click', '.click-slide', function() {
  $(this).find(owl1).trigger('next.owl.carousel');
  $(this).siblings(owl1).trigger('next.owl.carousel');
});

$('#sidebar-switcher').on('change', function() {
  if ($(this).is(':checked')) 
    $('.sidebar-2').addClass('sidebar-absolute');
  else 
    $('.sidebar-2').removeClass('sidebar-absolute');
});

$("#sandwich-1").on("click", function() {
	$(this).toggleClass("active");
	$("body").toggleClass("menubar-1");
  $("html").toggleClass("o-hidden");
  $(".form-dropdown").toggleClass("form-transform");
  window.dispatchEvent(new Event('resize'));
});

$("#sandwich-2").on("click", function() { 
	$(this).toggleClass("active");
	$("body").toggleClass("menubar-2");
  $("html").toggleClass("o-hidden");
});

$('#dark-mode').on('change', function() {
  if ($(this).is(':checked')) {
    $('body').addClass('dark-mode');
    darkModeChart();
  }
  else {
    $('body').removeClass('dark-mode');
    lightModeChart();
  }
});

Waves.attach('.wave', ['waves-light']);
Waves.attach('.wave2, .dropdown-2 .dropdown-menu a', ['waves-dark']);
Waves.init();

$(".close-metrics").on("click", function(){
  $(this).closest(".metric-alert").hide();
});

$(".btn-cross").on("click", function(){
  $(".row-hidden").hide();
});

$(".news-select").on("click", function(){
  $(this).closest(".dropdown").removeClass("show");
  $(this).closest(".dropdown-menu").removeClass("show");
  $(".hidden-store").removeClass("d-none");
  $(".row-hidden").show();
});

$(".btn-cancel-close").on("click", function(){
  $(this).closest(".hidden-store").addClass("d-none");
});

  $("#v-pills-store-tab").on("click", function(){
    $(this).removeClass("done");
    $("#v-pills-quote-tab, #v-pills-monthly-tab, #v-pills-review-tab").removeClass("done");
  });

  $("#v-pills-quote-tab").on("click", function(){
    $(this).removeClass("done");
    $("#v-pills-store-tab").addClass("done");
    $("#v-pills-monthly-tab, #v-pills-review-tab").removeClass("done");
  });

  $("#v-pills-monthly-tab").on("click", function(){
    $(this).removeClass("done");
    $("#v-pills-store-tab, #v-pills-quote-tab").addClass("done");
    $("#v-pills-review-tab").removeClass("done");
  });

  $("#v-pills-review-tab").on("click", function(){
    $(this).removeClass("done");
    $("#v-pills-store-tab, #v-pills-quote-tab, #v-pills-monthly-tab").addClass("done");
  });

$(document).ready(function () {
  var count_checked = $('.checkbox-block').find('input:checkbox:checked').length; 
  if (count_checked == 0)  {
    $(".metric-selected").hide();
  }
  $('.checkbox-block').find('input:checkbox').change(function () {
    if ($('.checkbox-block').find('input:checkbox:checked').length) {
      $('.metric-selected').hide();
      $('.checkbox-block').find('input:checkbox:checked').each(function () {
        $('.metric-selected[data-id*="' + $(this).attr('id') + '"]').show();
      }); 
    } else if(count_checked == 0) {
      $(".metric-selected").hide(); 
    }
  });
  $('.tag-list').find('.metric-selected').click(function () {
    $(this).closest(".metric-selected").hide(); 
    $('.checkbox-block').find('input:checkbox:checked[id=' + $(this).attr('data-id') + ']').prop("checked", false); 
  });
});

$('[data-toggle="popover"]').popover()

 var placeholder;
  $(document).on('change', '.uploader-input', function() {
    var input = $(this),
        profilePicValue = input.val(),
        fileNameStart = profilePicValue.lastIndexOf('\\'); /* finds the end of the filepath */
    profilePicValue = profilePicValue.substr(fileNameStart + 1).substring(0, 20); /* isolates the filename */
    placeholder = input.siblings('.form-control').find('.image').attr('src');
    if (profilePicValue != '') {
      input.siblings('.form-control').children('.uploader-text').html(profilePicValue);
      input.closest('.lumen-uploader').addClass('uploaded');
    };
    let file = this.files[0]; 
    var reader = new FileReader();
    reader.onload = function (e) {
      input.siblings('.form-control').find('.image').attr('src', e.target.result);
    };
    reader.readAsDataURL(file);
  }).on('click', '.delete', function() {
    $(this).closest('.lumen-uploader').removeClass('uploaded').find('input[type="file"]').val('').siblings('.form-control').children('.uploader-text').html('Upload your image');
    $(this).closest('.lumen-uploader').find('.image').attr('src', placeholder);
  });

var start = moment("03/04/2023"),
    end   = moment("04/08/2023");

function cb(start, end) {
    $('#reportrange').html(start.format('MMM D, YYYY') + ' - ' + end.format('MMM D, YYYY'));
};

$('#reportrange').daterangepicker({
    startDate: start,
    endDate: end,
}, cb);

cb(start, end);

$('input[name="birthday1"]').daterangepicker({
  singleDatePicker: true,
  showDropdowns: true,
  minYear: 2000,
  maxYear: parseInt(moment().format('YYYY'),10)
});

});

  var s3Uploader = new qq.FineUploader({
    element: document.getElementById('fine-uploader-s3'),
    template: 'qq-template-s3'
  });
  var s32Uploader = new qq.FineUploader({
    element: document.getElementById('fine-uploader-s3-2'),
    template: 'qq-template-s3-2'
  });
  var s33Uploader = new qq.FineUploader({
    element: document.getElementById('fine-uploader-s3-3'),
    template: 'qq-template-s3-3'
  });


