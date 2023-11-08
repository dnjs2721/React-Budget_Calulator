import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencil, faTrash} from "@fortawesome/free-solid-svg-icons";

const List = React.memo(({id, title, cost, handleEdit, handleDelete}) => {

    return (
        <div className={"flex items-center justify-between px-4 py-1 my-2 mx-4 border border-gray-200 rounded shadow " +
            "transform hover:scale-105 transition duration-300"}>
            <div className={"flex items-center justify-between w-2/3"}>
                <span>{title}</span>
                <span className={"text-gray-400"}>{cost}</span>
            </div>
            <div className={"flex items-center w1/3"}>
                <button
                    className={"px-2 py-2 float-right"}
                    onClick={() => handleEdit(id, title, cost)}
                ><FontAwesomeIcon icon={faPencil} className={"ml-1 text-green-500"}></FontAwesomeIcon></button>
                <button
                    className={"px-2 py-2 float-right"}
                    onClick={() => handleDelete(id)}
                ><FontAwesomeIcon icon={faTrash} className={"ml-1 text-red-500"}></FontAwesomeIcon></button>
            </div>
        </div>
    )
})

export default List
