import React from 'react'
import {
	GridComponent,
	ColumnsDirective,
	ColumnDirective,
	Resize,
	Sort,
	ContextMenu,
	Filter,
	Page,
	ExcelExport,
	PdfExport,
	Edit,
	Inject
} from '@syncfusion/ej2-react-grids'

import { ordersData, contextMenuItems, ordersGrid } from '../Data/dummy'

const Orders: React.FC = () => {
	return (
		<div className="bg-white rounded-md dark:bg-main-dark-bg p-8 m-8">
			<p className="text-gray-400">Page</p>
			<h1 className="font-bold text-2xl mb-5">Orders</h1>
			<GridComponent
				id="gridcomp"
				dataSource={ordersData}
				allowSorting
				allowPaging
			>
				<ColumnsDirective>
					{ordersGrid.map((item, index) => {
						return <ColumnDirective key={index} {...item} />
					})}
				</ColumnsDirective>
				<Inject
					services={[
						Resize,
						Sort,
						ContextMenu,
						Filter,
						Page,
						ExcelExport,
						Edit,
						PdfExport
					]}
				/>
			</GridComponent>
		</div>
	)
}

export default Orders
