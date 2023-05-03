import React from 'react'
import TableItem from './TableItem';

const Table = ({ data }) => {
    return (
        <>
            <div className='flex flex-col px-6  sm:px-10  lg:px-[80px] my-12 w-full'>
                <h1 className='font-bold text-2xl my-5'>Top Traded</h1>
                <div className='grid  sm:gap-0 grid-cols-2 md:grid-cols-[.5fr,1fr,1fr,1fr,1fr,1fr] px-4 w-full'>
                    <p className=' font-semibold text-indigo-500 '>#</p>
                    <p className=' font-semibold text-indigo-500 '>TOKEN</p>
                    <p className='col-span-1 hidden md:flex items-center font-semibold text-indigo-500 '>VOLUME</p>
                    <p className='col-span-1  font-semibold text-indigo-500 '>PRICE</p>
                    <p className='col-span-1 hidden md:flex items-center font-semibold text-indigo-500 '>CHANGE(24H)</p>
                    <p className='col-span-1 hidden md:flex items-center font-semibold text-indigo-500 '>CHANGE(7D)</p>
                </div>
                <div className='w-full h-[500px] flex flex-col overflow-auto ThinScrollbar'>
                    {
                        data.map((item) => {
                            return (
                                <TableItem
                                    rank={item.market_cap_rank}
                                    title={item.symbol}
                                    logo={item.image}
                                    volume={item.total_volume}
                                    price={item.current_price}
                                    change24h={item.price_change_percentage_24h_in_currency.toString().slice(0, 4)}
                                    change7d={item.price_change_percentage_7d_in_currency.toString().slice(0, 4)}
                                />
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default Table;