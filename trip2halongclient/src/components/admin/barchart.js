import React, { useEffect, useRef } from 'react';

const BarChart = ({data}) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const chartWidth = canvas.width;
        const chartHeight = canvas.height;
        const barWidth = (chartWidth / data.length) * 0.6;
        const maxDataValue = Math.max(...data.map(item => item.value));

        // Clear the canvas
        context.clearRect(0, 0, chartWidth, chartHeight);

        // Draw the bars
        data.forEach((item, index) => {
            const barHeight = (item.value / maxDataValue) * (chartHeight * 0.8);
            const x = index * (chartWidth / data.length) + (chartWidth / data.length - barWidth) / 2;
            const y = chartHeight - barHeight;

            // Draw filled bar
            context.fillStyle = item.color; // Darker blue
            context.fillRect(x, y, barWidth, barHeight);

            // Draw light overlay
            context.fillStyle = item.color.replace(/, 1\)$/, ', 0.3)'); // Lighter blue
            context.fillRect(x, y, barWidth, chartHeight);
        });

        // Draw labels
        context.fillStyle = 'black';
        context.textAlign = 'center';
        context.font = '16px Arial';
        data.forEach((item, index) => {
            context.fillText(item.label, index * (chartWidth / data.length) + (chartWidth / data.length) / 2, chartHeight - 10);
        });
    }, [data]);

    return <canvas ref={canvasRef} width={400} height={300} className="" />;
};

export default BarChart;
