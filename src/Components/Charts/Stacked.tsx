import React from 'react'
import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	Legend,
	Category,
	StackingColumnSeries,
	Tooltip
} from '@syncfusion/ej2-react-charts'
import { ChartSeriesType } from '@syncfusion/ej2-charts/src/chart/utils/enum'

interface StackedProps {
	stackedCustomSeries: {
		dataSource: {
			x: string
			y: number
		}[]
		xName: string
		yName: string
		name: string
		type: ChartSeriesType
		background: string
	}[]
	min: number
	max: number
	interval: number
	title: string
	width: string
	height: string
}

const Stacked: React.FC<StackedProps> = ({
	stackedCustomSeries,
	title,
	min,
	max,
	interval,
	width,
	height
}) => {
	return (
		<ChartComponent
			id="charts"
			style={{ textAlign: 'center' }}
			primaryXAxis={{
				majorGridLines: { width: 0 },
				minorGridLines: { width: 0 },
				majorTickLines: { width: 0 },
				minorTickLines: { width: 0 },
				interval: 1,
				lineStyle: { width: 0 },
				labelIntersectAction: 'Rotate45',
				valueType: 'Category'
			}}
			primaryYAxis={{
				title: title,
				lineStyle: { width: 0 },
				minimum: min,
				maximum: max,
				interval: interval,
				majorTickLines: { width: 0 },
				majorGridLines: { width: 1 },
				minorGridLines: { width: 1 },
				minorTickLines: { width: 0 },
				labelFormat: '{value}'
			}}
			width={width}
			height={height}
			chartArea={{ border: { width: 0 } }}
			tooltip={{ enable: true }}
		>
			<Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
			<SeriesCollectionDirective>
				<SeriesDirective
					dataSource={stackedCustomSeries[0].dataSource}
					xName={stackedCustomSeries[0].xName}
					yName={stackedCustomSeries[0].yName}
					name={stackedCustomSeries[0].name}
					type={stackedCustomSeries[0].type}
				></SeriesDirective>
				<SeriesDirective
					dataSource={stackedCustomSeries[1].dataSource}
					xName={stackedCustomSeries[1].xName}
					yName={stackedCustomSeries[1].yName}
					name={stackedCustomSeries[1].name}
					type={stackedCustomSeries[1].type}
				></SeriesDirective>
			</SeriesCollectionDirective>
		</ChartComponent>
	)
}

export default Stacked
