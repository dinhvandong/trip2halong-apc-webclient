import React from "react";

const PieChart = () => {
  const data = [
    { label: "Figma", value: 30, color: "#4A90E2" },
    { label: "Sketch", value: 20, color: "#50E3C2" },
    { label: "XD", value: 25, color: "#F5A623" },
    { label: "Photoshop", value: 25, color: "#9013FE" },
  ];

  const total = data.reduce((acc, item) => acc + item.value, 0);
  let cumulativeValue = 0;

  return (
    <div className="flex flex-row justify-between px-20">
      <svg width="150" height="150" viewBox="0 0 200 200" className="">
        {data.map((slice, index) => {
          const [startX, startY] = [
            100 +
              100 *
                Math.cos((cumulativeValue * 2 * Math.PI) / total - Math.PI / 2),
            100 +
              100 *
                Math.sin((cumulativeValue * 2 * Math.PI) / total - Math.PI / 2),
          ];
          cumulativeValue += slice.value;

          const [endX, endY] = [
            100 +
              100 *
                Math.cos((cumulativeValue * 2 * Math.PI) / total - Math.PI / 2),
            100 +
              100 *
                Math.sin((cumulativeValue * 2 * Math.PI) / total - Math.PI / 2),
          ];

          const largeArcFlag = slice.value > total / 2 ? 1 : 0;

          const pathData = `
                M 100 100
                L ${startX} ${startY}
                A 100 100 0 ${largeArcFlag} 1 ${endX} ${endY}
                Z
              `;

          return <path key={index} d={pathData} fill={slice.color} />;
        })}
      </svg>

      <div className="flex flex-col justify-center">
        {data.map((item) => (
          <div key={item.label} className="flex items-center mb-2">
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="ml-2">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;
