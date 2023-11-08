import React from 'react'

 const TotalCost = React.memo(({budgetData}) => {
    const totalCost = budgetData.reduce((total, item) => total + item.cost, 0);

    return (
        <div className={"flex justify-end text-2xl"}>
            <span>총지출:&nbsp; </span>
            <span>{totalCost}</span>
            <span> 원</span>
        </div>
    )
})

export default TotalCost;