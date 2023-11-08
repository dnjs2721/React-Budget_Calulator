import React from 'react'
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const AllDeleteButton = React.memo(({setBudgetData, handleAction}) => {
    const handleRemoveClick = () => {
        setBudgetData([]);
        localStorage.setItem("budgetData", JSON.stringify([]));
        handleAction("AllDelete")
    }

    return (
        <div>
            <button
                className={"mx-4 mt-4 px-5 py-2 bg-green-600 text-white rounded"}
                onClick={handleRemoveClick}
            >
                목록지우기 <FontAwesomeIcon icon={faTrash} className={"ml-2 text-white"}></FontAwesomeIcon>
            </button>
        </div>
    )
})

export default AllDeleteButton
