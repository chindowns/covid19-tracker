function renderStateChart(stateLabel, datesArr, countsArr) {

    // renders the chart onto the DOM
    var ctx = document.getElementById('myChart');
    $('#map').attr("style", "opacity: 0.5; ");
    ctx.setAttribute("style", "display:flex;");

    var labelsArr = datesArr;
    var dataArr = countsArr;
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labelsArr,
            datasets: [{
                label: '# of Cases for: ' + stateLabel,
                data: dataArr,
                backgroundColor: "rgba(6, 30, 54, 0.801)",
                borderColor: [],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    // console.log(myChart);
}

function chartPrep(state) {
    // Create two arrays to pass to renderStateChart
    // clear the arrays before processing another state in the same session
    let datesArr = [];
    let countsArr = [];

    const stateStats = confirmedStats[state];
    console.log(stateStats);

    // prep and aggregate dates
    // Prep the dates from the Confirmed Cases Array
    // setting variables for two arrays
    let day = "";
    let count = 0;
    
    // iterate through each object
    stateStats.forEach((obj, index) => {
        // if this is the first object set the day and count
        if(index === 0) {
            day = obj.date;
            count = obj.confirmed;
        }
        else if(day === obj.date){
            count += +obj.confirmed;
        } else {
            // use callback to ensure the data is pushed before reseting day and count
            function pushInfo(cb){
            datesArr.push(day);
            countsArr.push(count);
            cb();
            }

            pushInfo(function(){
                day = obj.date;
                count = obj.confirmed;
            //     console.log(`Reset Day to ${day}`)
            //     console.log(`Reset Count to ${count}`)
            });
        }
    });

    // console.log(datesArr);
    // console.log(countsArr);
    renderStateChart(state, datesArr, countsArr);
}