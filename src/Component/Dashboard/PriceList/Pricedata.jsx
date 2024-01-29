import React, { useState } from "react";
import "./Pricedata.css";
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Pricedata = () => {
    const rows = [
        {
            no: 1234567890,
            product: "This is a test product with fifty characters this!",
            in: 900500,
            price: 1500800,
            unit: "kilometers/hour",
            stock: 2500600,
            description: "This is a test product with fifty characters this!",
        },
        {
            no: 1234567890,
            product: "This is a test product with fifty characters this!",
            in: 900500,
            price: 1500800,
            unit: "kilometers/hour",
            stock: 2500600,
            description: "This is a test product with fifty characters this!",
        },
        {
            no: 1234567890,
            product: "This is a test product with fifty characters this!",
            in: 900500,
            price: 1500800,
            unit: "kilometers/hour",
            stock: 2500600,
            description: "This is a test product with fifty characters this!",
        },
        
    ];

    const [expandedColumns, setExpandedColumns] = useState([]);

    const handleColumnToggle = (columnNames) => {
        setExpandedColumns((prevColumns) =>
            columnNames.reduce((newColumns, col) => {
                return prevColumns.includes(col) ? newColumns : [...newColumns, col];
            }, [...prevColumns])
        );
    };

    return (
        <div className="pt-10 text-xs">
            <table className="border-separate border-spacing-x-4 border-spacing-y-1">
                <thead >
                    <tr>
                        <th className={` tablet:text-nowrap  text-justify p-2 py-2 text-base font-thin ${expandedColumns.includes("no") ? '' : 'hidden'}`}>
                           Article No.<ArrowDownwardRoundedIcon style={{  color: '#00e5ff' }} />
                        </th>
                        <th >
                            <div className="sm:text-nowrap  text-justify p-2 py-2 text-base font-thin">
                                Product/Service<ArrowDownwardRoundedIcon style={{  color: '#00e676' }} />
                            </div>
                        </th>
                        <th className={`tablet:text-nowrap  text-justify p-2 py-2 text-base font-thin ${expandedColumns.includes("in") ? '' : 'hidden'}`}>In Price</th>
                        <th className="tablet:text-nowrap  text-justify p-2 py-2 text-base font-thin">Price</th>
                        <th className={`tablet:text-nowrap  text-justify p-2 py-2 text-base font-thin  ${expandedColumns.includes("unit") ? '' : 'hidden'}`}>Unit</th>
                        <th className={`text-nowrap  text-justify p-2 py-2 text-base font-thin ${expandedColumns.includes("stock") ? '' : 'hidden'}`}>In Stock </th>
                        <th className={`text-nowrap  text-justify p-2 py-2 text-base font-thin ${expandedColumns.includes("description") ? '' : 'hidden'}`}>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={row.no}>
                            <td className={`tablet:text-nowrap border border-blue-300 solid rounded-full align-items-justify p-1 py-1 " ${expandedColumns.includes("no") ? '' : 'hidden'}`}>{row.no} </td>
                            <td className="text-nowrap border border-blue-300 solid rounded-full align-items-justify p-1 py-1"> {row.product} </td>
                            <td className={`text-nowrap border border-blue-300 solid rounded-full align-items-justify p-1 py-1" ${expandedColumns.includes("in") ? '' : 'hidden'}`}>{row.in}</td>
                            <td className="text-nowrap border border-blue-300 solid rounded-full align-items-justify p-1 py-1" >{row.price}</td>
                            <td className={`text-nowrap border border-blue-300 solid rounded-full align-items-justify p-1 py-1 ${expandedColumns.includes("unit") ? '' : 'hidden'}`}>
                                {row.unit}
                            </td>
                            <td className={`text-nowrap border border-blue-300 solid rounded-full align-items-justify p-1 py-1 ${expandedColumns.includes("stock") ? '' : 'hidden'}`}>
                                {row.stock}
                            </td>
                            <td className={`text-nowrap border border-blue-300 solid rounded-full align-items-justify p-1 py-1 ${expandedColumns.includes("description") ? '' : 'hidden'}`}>
                                {row.description}
                            </td>
                            <td>
                                <MoreHorizIcon
                                    style={{ color: "#00e5ff", display: "inline-block", alignContent: "center" }}
                                    onClick={() => handleColumnToggle(["no","in", "unit", "stock", "description"])}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Pricedata;
