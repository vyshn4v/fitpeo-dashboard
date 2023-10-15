import { useEffect, useRef } from "react";
import { Bar, Doughnut, Pie } from "react-chartjs-2";
import Chart from 'chart.js/auto';
function ChartComponent({ type, data, options, plugins }) {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            const chartInstance = chartRef.current.chartInstance;
            if (chartInstance) {
                chartInstance.destroy(); // Destroy the existing chart if it exists
            }

            // Create the new chart using the components provided by react-chartjs-2
        }
    }, [type, data, options]);

    const style = {
        height: "300px"
    }

    return (
        <div>
            {
                type === "bar" ? (
                    <Bar style={style} key={Math.random()} data={data} options={options} ref={chartRef} plugins={plugins} />
                ) : type === "doughnut" ? (
                    <Doughnut style={style} key={Math.random()} data={data} options={options} ref={chartRef} plugins={plugins} />
                ) : ""
            }
        </div>
    );
}

export default ChartComponent;