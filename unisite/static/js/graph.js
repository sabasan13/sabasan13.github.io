var ctx = document.getElementById('chart-js-sec');

jQuery(document).ready(function($){
    var graphSlider = [
        {
            name: "Лазерная резка",
            data: [10, 15, 25, 30, 30, 40, 40, 55, 60, 65, 60, 70],
            content: [
                '<p class="col-lg-6 search-request"><span>лазерная резка</span> <span class="dots-line"></span> <span>5</span></p>', 
                '<p class="col-lg-6 search-request"><span>лазерная резка</span><span class="dots-line"></span> <span>5</span></p>', 
                '<p class="col-lg-6 search-request"><span>лазерная резка</span> <span class="dots-line"></span> <span>5</span></p>',
                '<p class="col-lg-6 search-request"><span>лазерная резка</span> <span class="dots-line"></span> <span>5</span></p>',
                '<p class="col-lg-6 search-request"><span>лазерная резка</span> <span class="dots-line"></span> <span>5</span></p>',
                '<p class="col-lg-6 search-request"><span>лазерная резка</span> <span class="dots-line"></span> <span>5</span></p>'
            ]
        }, 
        {
            name: "Петушиные бои",
            data: [10, 15, 25, 30, 30],
            content: [
                '<p class="col-lg-6 search-request"><span>Петушиные перья</span> <span class="dots-line"></span> <span>5</span></p>', 
                '<p class="col-lg-6 search-request"><span>Петушиные перья</span><span class="dots-line"></span> <span>5</span></p>', 
                '<p class="col-lg-6 search-request"><span>Петушиные перья</span> <span class="dots-line"></span> <span>5</span></p>',
                '<p class="col-lg-6 search-request"><span>Петушиные перья</span> <span class="dots-line"></span> <span>5</span></p>',
                '<p class="col-lg-6 search-request"><span>Петушиные перья</span> <span class="dots-line"></span> <span>5</span></p>',
                '<p class="col-lg-6 search-request"><span>Петушиные перья</span> <span class="dots-line"></span> <span>5</span></p>'
            ]
        }, 
        {
            name: "Лосось горный",
            data: [10, 15, 25, 30, 30, 10, 15, 25, 30, 30],
            content: [
                '<p class="col-lg-6 search-request"><span>Лососевая икра</span> <span class="dots-line"></span> <span>5</span></p>', 
                '<p class="col-lg-6 search-request"><span>Лососевая икра</span><span class="dots-line"></span> <span>5</span></p>', 
                '<p class="col-lg-6 search-request"><span>Лососевая икра</span> <span class="dots-line"></span> <span>5</span></p>',
                '<p class="col-lg-6 search-request"><span>Лососевая икра</span> <span class="dots-line"></span> <span>5</span></p>',
                '<p class="col-lg-6 search-request"><span>Лососевая икра</span> <span class="dots-line"></span> <span>5</span></p>',
                '<p class="col-lg-6 search-request"><span>Лососевая икра</span> <span class="dots-line"></span> <span>5</span></p>'
            ]
        }, 
    ];


    var graphData = {
        labels: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"],
        datasets: [{
            borderColor: '#355da3',
            backgroundColor: 'transparent',
            lineTension: 0,
            data: graphSlider[0].data,
        }]
    };
    var chartOptions = {
        legend: {
            display: false,
            position: 'top',
            labels: {
                boxWidth: 80,
                fontColor: '#355da3'
            }
        }
    };
    var myChart = new Chart(ctx, {
        backgroundColor: "rgba(0, 0, 0, 1)",
        type: 'line',
        data: graphData,
        options: chartOptions	
    });
    $('.graph-name').find('p').html(graphSlider[0].name)
    $('.requests-row').html(graphSlider[0].content)

    var graphSliderCount = 0;
    var graphSliderLength = graphSlider.length;

    $('.buttons-left').click(function(){
        if (graphSliderCount == 0) {
            graphSliderCount = 0
        } else {
            graphSliderCount = graphSliderCount - 1;
            console.log(graphSliderCount)
            graphData.datasets[0].data = graphSlider[graphSliderCount].data
            var myChart = new Chart(ctx, {
                backgroundColor: "rgba(0, 0, 0, 1)",
                type: 'line',
                data: graphData,
                options: chartOptions	
            });
            $(this).siblings('.graph-item').find('.requests-row').html(graphSlider[graphSliderCount].content)
            $(this).siblings('.graph-item').find('.graph-name').find('p').html(graphSlider[graphSliderCount].name)
        }
    });
    $('.buttons-right').click(function(){
        if (graphSliderCount == graphSliderLength - 1) {
            console.log('work')
            graphSliderCount = graphSliderLength - 1;
        } else {
            graphSliderCount = graphSliderCount + 1;
            console.log(graphSliderCount);
            graphData.datasets[0].data = graphSlider[graphSliderCount].data
            var myChart = new Chart(ctx, {
                backgroundColor: "rgba(0, 0, 0, 1)",
                type: 'line',
                data: graphData,
                options: chartOptions	
            });
            $(this).siblings('.graph-item').find('.requests-row').html(graphSlider[graphSliderCount].content)
            $(this).siblings('.graph-item').find('.graph-name').find('p').html(graphSlider[graphSliderCount].name)
        }
    });
});

