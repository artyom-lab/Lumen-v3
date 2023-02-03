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

Waves.attach('.wave', ['waves-light']);
Waves.attach('.wave2, .dropdown-2 .dropdown-menu a', ['waves-dark']);
Waves.init();

$(".close-metrics").on("click", function(){
  $(this).closest(".metric-alert").hide();
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

var start = moment("05/12/2019"),
    end   = moment("06/11/2019");

function cb(start, end) {
    $('#reportrange').html(start.format('MMM D, YYYY') + ' - ' + end.format('MMM D, YYYY'));
};

$('#reportrange').daterangepicker({
    startDate: start,
    endDate: end,
}, cb);

cb(start, end);

var chartVars = {
  gradientStart: 'rgba(233, 233, 237, 1)',
  gradientStop: 'rgba(233, 233, 237, 0)',
  fontColor: '#222222',
  gridLine: '#dedede',
  tooltipBg: 'rgba(248, 248, 248, 0.6)',
  tooltipBorder: 'rgba(242, 242, 242, 0.5)',
};

function lightModeChart() {
  Chart.defaults.global.defaultFontColor = chartVars.fontColor;
  chartInstance.data = data;
  chartInstance.options = options;
  chartInstance.update();
};

function darkModeChart() {
  var gradientDark = chart.createLinearGradient(0, 0, 0, 320),
      dataDark = $.extend(true, {}, data),
      optionsDark = $.extend(true, {}, options);
  Chart.defaults.global.defaultFontColor = '#fff';
  gradientDark.addColorStop(0, 'rgba(0, 0, 0, 1)');
  gradientDark.addColorStop(1, 'rgba(0, 0, 0, 0)');
  dataDark.datasets[0].backgroundColor = gradientDark;
  optionsDark.scales.yAxes[0].gridLines.color = '#313943';
  optionsDark.tooltips.backgroundColor = 'rgba(0, 0, 0, .5)';
  optionsDark.tooltips.titleFontColor = '#fff';
  optionsDark.tooltips.bodyFontColor = '#fff';
  optionsDark.tooltips.borderColor = 'rgba(0, 0, 0, .5)';
  chartInstance.data = dataDark;
  chartInstance.options = optionsDark;
  chartInstance.update();
};

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

const ShadowLineElement = Chart.elements.Line.extend({
  draw () {   
    const { ctx } = this._chart
    const originalStroke = ctx.stroke
    ctx.stroke = function () {
      ctx.save()
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 1
      ctx.shadowBlur = 2
      ctx.shadowColor = 'rgba(0, 0, 0, .35)'
      originalStroke.apply(this, arguments)
      ctx.restore()
    }
    Chart.elements.Line.prototype.draw.apply(this, arguments);
    ctx.stroke = originalStroke;
  }
})

Chart.defaults.ShadowLine = Chart.defaults.line
Chart.controllers.ShadowLine = Chart.controllers.line.extend({
  datasetElementType: ShadowLineElement
})

var chart    = document.getElementById('canvas').getContext('2d'),
    gradient = chart.createLinearGradient(0, 0, 0, 320),
    gradient2 = chart.createLinearGradient(0, 0, 0, 280);

gradient.addColorStop(0, chartVars.gradientStart);
gradient.addColorStop(1, chartVars.gradientStop);

gradient2.addColorStop(0, '#fb5d46');
gradient2.addColorStop(0.25, '#fca033');
gradient2.addColorStop(0.5, '#f8d217');
gradient2.addColorStop(0.75, '#4afd3b');
gradient2.addColorStop(1, '#02d79c');

Chart.defaults.global.defaultFontColor = chartVars.fontColor;
Chart.defaults.global.defaultFontFamily = '"Roboto", sans-serif';
Chart.defaults.global.defaultFontSize = 10;
Chart.defaults.global.defaultFontStyle = 'bold';

var labels = ["May 12", "May 13", "May 14", "May 15", "May 16", "May 17", "May 18", "May 19", "May 20", "May 21", "May 22", "May 23", "May 24", "May 25", "May 26", "May 27", "May 28", "May 29", "May 30", "May 31", "Jun 1", "Jun 2", "Jun 3", "Jun 4", "Jun 5", "Jun 6", "Jun 7", "Jun 8", "Jun 9", "Jun 10", "Jun 11"];
var data  = {
    labels: labels,
    datasets: [{
      label: '',
      backgroundColor: gradient,
      borderWidth: 5,
      pointRadius: 5,
      pointBorderWidth: 3,
      pointBorderColor: 'transparent',
      pointBackgroundColor: 'transparent',
      pointHoverRadius: 6,
      pointHoverBorderWidth: 4,
      pointHoverBorderColor: 'rgba(242, 242, 242, 1)',
      hitRadius: 15,
      pointHoverBackgroundColor: 'transparent',
      borderColor: gradient2,
      data: [7, 7.5, 4.8, 6, 7.7, 6, 6.2, 5.7, 7.4, 7.7, 10, 12.678, 8.5, 7.5, 9, 8.8, 10.2, 0.7, 0.6, 2.5, 7.5, 8, 7.2, 13, 10.5, 11.3, 12.2, 12.2, 14, 13, 13],
    }]
};

var options = {
  maintainAspectRatio: false,
  scales: {

    xAxes: [{
      ticks: {
        padding: 10,
        userCallback: function(tick) {
          switch(tick) {
            case labels[0]:
              return tick;
            case labels[labels.length - 1]:
              return tick;
            case labels[labels.length - Math.round(labels.length/2)]:
              return tick;
            default:
              return;
          };
        },
      },
      gridLines: {
        display: false,
        drawTicks: false,
        drawBorder: false,

      }
    }],

    yAxes: [{
      display: true,
      // type: 'logarithmic',
      ticks: {
        max: 15,
        min: 0,
        stepSize: 5,
        padding: 10,
        userCallback: function(tick) {
          return tick.toString() + 'k';
        },
      },
      gridLines: {
        color: chartVars.gridLine,
        drawTicks: false,
        drawBorder: false,
      }
    }]

  },
  legend: {
    display: false
  },

  tooltips: {
    position: 'average',
    mode: 'index',
    intersect: false,
    displayColors: false,
    bodyAlign: "center",
    yPadding: 10,
    xPadding: 10,
    caretSize: 0,
    caretPadding: 20,
    titleFontStyle: 'normal',
    bodyFontStyle: 'bold',
    borderWidth: 2,
    cornerRadius: 4,
    backgroundColor: chartVars.tooltipBg,
    titleFontColor: chartVars.fontColor,
    bodyFontColor: chartVars.fontColor,
    borderColor: chartVars.tooltipBorder
  },
};

var chartInstance = new Chart(chart, {
  type: 'ShadowLine',
  data: data,
  options: options
});

var chart2    = document.getElementById('canvas2').getContext('2d'),
    gradient4 = chart2.createLinearGradient(0, 0, 0, 80);

gradient4.addColorStop(0, '#fb5d46');
gradient4.addColorStop(0.25, '#fca033');
gradient4.addColorStop(0.5, '#f8d217');
gradient4.addColorStop(0.75, '#4afd3b');
gradient4.addColorStop(1, '#02d79c');

var data2  = {
    labels: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    datasets: [{
      label: '',
      fill: false,
      borderWidth: 5,
      pointRadius: 0,
      pointBorderWidth: 0,
      pointBorderColor: 'transparent',
      pointBackgroundColor: 'transparent',
      pointHoverRadius: 0,
      pointHoverBorderWidth: 0,
      borderColor: gradient4,
      data: [1.5, 1.6, 1.6, 1.5, 1.3, 1.4, 2.5, 8, 14, 11, 8, 1.5, 3, 6, 5.5, 6.5, 4, 1.5, 4, 11, 4, 1.5, 6, 11, 7, 8.5, 8, 10.5, 11, 14, 12],
    }]
};

var options2 = {
  maintainAspectRatio: false,
  scales: {

    xAxes: [{
      display: false,
    }],

    yAxes: [{
      display: false,
      ticks: {
        max: 15,
        min: 0,
        stepSize: 5,
      },
    }]

  },
  legend: {
    display: false
  },
  tooltips: {
    enabled: false
  },
};

var chartInstance2 = new Chart(chart2, {
  type: 'ShadowLine',
  data: data2,
  options: options2
});

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


