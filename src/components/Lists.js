import React from 'react'
import List from "./List";

const Lists = React.memo(({budgetData, handleEdit, handleDelete}) => {
    return (
        <div className={"flex flex-col overflow-scroll"}>
            {budgetData.map((data) =>
                <div key={data.id}>
                    <List
                        id={data.id}
                        title={data.title}
                        cost={data.cost}
                        budgetData={budgetData}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                    ></List>
                </div>
            )}
        </div>
    )
})

export default Lists
