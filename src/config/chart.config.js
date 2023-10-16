const barChartLabel = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
export const barchartConfig = {
    type: 'bar',
    data: {
        labels: barChartLabel,
        datasets: [
            {
                backgroundColor: barChartLabel?.map(() => "rgba(182, 183, 255, 0.296)"),
                hoverBackgroundColor: barChartLabel?.map(() => "blue"),
                data: barChartLabel?.map(() => Math.random() * 100),
                borderSkipped: false,
                borderRadius: 10,
                padding: 10
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false,
                }
                , border: {
                    display: false,
                },
            },
            y: {
                grid: {

                    display: false,
                },
                border: {
                    display: false,
                },
                ticks: {
                    display: false,
                }
            }
        },
        title: {
            display: false,
            text: 'Predicted world population (millions) in 2050'
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
}
const sliceThickness = {
    id: "sliceThickness",
    beforeDraw(chart, plugin) {
        chart.getDatasetMeta(0).data[0].outerRadius = 150

        chart.getDatasetMeta(0).data[1].outerRadius = 140
        chart.getDatasetMeta(0).data[1].innerRadius = 90

        chart.getDatasetMeta(0).data[2].innerRadius = 100
        chart.getDatasetMeta(0).data[2].outerRadius = 130


        // add text
        const ctx = chart.ctx;

        ctx.fillStyle = "black";
        ctx.font = "bold 33px Arial";

        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("65%", chart.width / 2, chart.height / 2 - 22);

        ctx.font = "bold 20px Arial";
        ctx.fillText("Total New", chart.width / 2, chart.height / 2);
        ctx.fillText("Customers", chart.width / 2, chart.height / 2 + 22);
    }
}
export const doughnutChartConfig = {
    type: 'doughnut',
    data: {
        labels: ["Africa", "Asia", "Europe"],
        datasets: [
            {
                label: "Population (millions)",
                backgroundColor: ["#ff0080", "#8400ff", "rgba(182, 183, 255, 0.296)"],
                data: [20, 40, 40],
                borderWidth: [0, 0, 0]
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Predicted world population (millions) in 2050'
        },
        plugins: {
            legend: {
                display: false
            }
        }
    },
    plugins: [sliceThickness]
}