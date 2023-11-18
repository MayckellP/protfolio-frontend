import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const RadarData = {
  labels: ["Analytical", "Resilient", "Team player", "Creative", "Efficient"],
  datasets: [
    {
      data: [9, 7, 7, 6, 8],
      backgroundColor: "rgba(16, 112, 134, 0.75)",
      borderColor: "#2AC4E6",
      borderWidth: 2,
    },
  ],
};
export const RadarOptions = {
  plugins: {
    legend: {
      display: false,
    },
  },
  /*  options: {
    transition: {
      show: {
        animation: {
          delay: 10000,
        },
      },
    },
  }, */
  scale: {
    ticks: {
      max: 10,
      stepSize: 2,
    },
  },
  scales: {
    r: {
      max: 10,
      min: 1,
      // https://www.chartjs.org/docs/latest/axes/radial/
      angleLines: {
        color: "gray",
      },
      grid: {
        color: "gray",
      },
      pointLabels: {
        // https://www.chartjs.org/docs/latest/axes/radial/#point-labels
        color: "white",
        font: {
          size: 13,
        },
      },
      ticks: {
        // https://www.chartjs.org/docs/latest/axes/radial/#ticks
        color: "white",
        backdropColor: "transparent", // https://www.chartjs.org/docs/latest/axes/_common_ticks.html
        font: {
          size: 15,
        },
      },
    },
  },
};

const ChartSkill = () => {
  return <Radar data={RadarData} options={RadarOptions} />;
};

export default ChartSkill;
