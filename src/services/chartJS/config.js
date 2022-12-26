export const initialData = {
    labels: ["2022-10-16"],
    datasets: [
        {
            label: 'XAU/XAG',
            data: [78],
            fill: false,
            borderColor: "rgb(201, 165, 235)"
        },
    ]
};

export const tooltipLine = {
    id: 'tooltipLine',
    beforeDraw: (chart) => {
        if (chart.tooltip._active && chart.tooltip._active.length) {
            const ctx = chart.ctx;
            ctx.save()
            const activePoint = chart.tooltip._active[0]
            
            ctx.beginPath()
            ctx.moveTo(activePoint.element.x, chart.chartArea.top)
            ctx.lineTo(activePoint.element.x, chart.chartArea.bottom)
            ctx.lineWidth = 1
            ctx.strokeStyle = 'rgb(138, 43, 226)'
            ctx.stroke()

            ctx.beginPath()
            ctx.moveTo(chart.chartArea.left, activePoint.element.y)
            ctx.lineTo(chart.chartArea.right, activePoint.element.y)
            ctx.stroke()
            ctx.restore()
         }
    }
}


export const options = {
    type: 'line',
    title: {
        display: true,
        text: "Chart Title"
      },
    interaction: {
        mode: 'index',
        intersect: false
    },
    plugins: {
        legend: {
            position: 'bottom',
            display: false
        }
    },
    elements: {
        point: {
            pointStyle: 'cross',
            radius: 1,
            hoverRadius: 5
        },
        line: {
            borderWidth: 1
        }
    },
    scales: {
        
        y: { // defining min and max so hiding the dataset does not change scale range
            min: 80,
            max: 100
        },
        x: {
            grid: {
                display: false
            }
        }
    }
}

