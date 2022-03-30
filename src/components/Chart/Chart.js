import './Chart.css';
import ChartBar from './ChartBar/ChartBar';

const Chart = (props) => {
	const maximumVal = Math.max(...props.dataPoints.map(({ value }) => value));
	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint) => {
				return (
					<ChartBar
						key={dataPoint.label}
						value={dataPoint.value}
						maxValue={maximumVal}
						label={dataPoint.label}
					/>
				);
			})}
		</div>
	);
};

export default Chart;
