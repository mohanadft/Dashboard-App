import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import { Stacked, Pie, Button } from '../Components'
import { earningData, SparklineAreaData, ecomPieChartData } from '../Data/dummy'
import { useGlobalContext } from '../Contexts/ContextProvider'
import { stackedCustomSeries } from './../Data/dummy'
import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	Legend,
	Category,
	StackingColumnSeries,
	Tooltip,
	ILoadedEventArgs,
	ChartTheme
} from '@syncfusion/ej2-react-charts'

const Ecommerce: React.FC = () => {
	return (
		<div className="mt-12 bg-main-bg">
			<div className="flex flex-wrap lg:flex-nowrap justify-center gap-5">
				<div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-40 rounded-xl w-full lg:w-80 p-4 mx-3 pt-9 bg-hero-pattern bg-no-repeat bg-cover bg-center flex flex-col justify-between">
					<div>
						<h3 className="text-gray-400 font-bold">Earnings</h3>
						<p className="text-xl font-semibold">$63,448.78</p>
					</div>
					<button className="text-white bg-orange-300 w-fit p-2 rounded-md">
						Download
					</button>
				</div>
				<div className="flex justify-center items-center flex-wrap gap-5">
					{earningData.map(item => {
						return (
							<div
								key={item.title}
								className="flex flex-col gap-3 bg-white py-5 pl-3 pr-20 rounded-md dark:bg-main-dark-bg"
							>
								<button
									style={{
										backgroundColor: item.iconBg
									}}
									className="p-3 rounded-full w-fit"
								>
									<span
										style={{
											color: item.iconColor
										}}
										className="text-2xl"
									>
										{item.icon}
									</span>
								</button>
								<p className="font-semibold">
									{item.amount}
									<span className={`ml-2 text-xs text-${item.pcColor}`}>
										{item.percentage}
									</span>
								</p>
								<p className="text-gray-400 text-sm font-semibold">
									{item.title}
								</p>
							</div>
						)
					})}
				</div>
			</div>
			<div className="flex gap-10 flex-wrap justify-center">
				<div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
					<div className="flex justify-between">
						<p className="font-semibold text-xl">Revenu Updates</p>
						<p className="flex items-center gap-4">
							<span className="flex gap-1 items-center text-gray-600">
								<GoPrimitiveDot /> Expense
							</span>
							<span className="text-green-600 flex gap-1 items-center">
								<GoPrimitiveDot /> Budget
							</span>
						</p>
					</div>
					<div className="mt-10 flex gap-10 flex-wrap justify-center">
						<div className="border-r-1 border-color m-4 pr-10">
							<div className="pr-10">
								<p>
									<span className="text-2xl font-bold flex items-center gap-3">
										<span>$93,438</span>
										<span className="bg-green-500 rounded-full p-1 text-xs font-light text-white">
											23%
										</span>
									</span>
									<span className="text-gray-400">Budget</span>
								</p>
							</div>
							<div className="pt-4">
								<p>
									<span className="text-2xl font-bold flex items-center gap-3">
										$48,438
									</span>
									<span className="text-gray-400">Expense</span>
								</p>
							</div>
							<button className="text-white bg-orange-300 w-fit p-2 rounded-md mt-20">
								Download
							</button>
						</div>
						<div>
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
									title: 'Sales',
									lineStyle: { width: 0 },
									minimum: 100,
									maximum: 400,
									interval: 100,
									majorTickLines: { width: 0 },
									majorGridLines: { width: 1 },
									minorGridLines: { width: 1 },
									minorTickLines: { width: 0 },
									labelFormat: '{value}B'
								}}
								width="300px"
								height="300px"
								chartArea={{ border: { width: 0 } }}
								tooltip={{ enable: true }}
							>
								<Inject
									services={[StackingColumnSeries, Category, Legend, Tooltip]}
								/>
								<SeriesCollectionDirective>
									<SeriesDirective
										dataSource={stackedCustomSeries[0].dataSource}
										xName="x"
										yName="y"
										name="Budget"
										type="StackingColumn"
									></SeriesDirective>
									<SeriesDirective
										dataSource={stackedCustomSeries[1].dataSource}
										xName="x"
										yName="y"
										name="Expense"
										type="StackingColumn"
									></SeriesDirective>
								</SeriesCollectionDirective>
							</ChartComponent>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Ecommerce
