import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons/faPaperPlane";

export default function Form({handleSubmit, titleVal, setTitleVal, costVal, setCostVal, isEditing, handleEditSubmit, titleInputRef}) {

    const handleTitleChange = (e) => {
        setTitleVal(e.target.value)
    }
    const handleCostChange = (e) => {
        setCostVal(e.target.value)
    }

    const handleForSubmit = (e) => {
        if (isEditing) {
            handleEditSubmit(e)
        } else {
            handleSubmit(e)
        }
    }

    return (
        <form onSubmit={handleForSubmit}>
            <div className={"flex"}>
                <div className={"flex flex-col flex-1 mx-4"}>
                    <p className={"text-orange-300"}>지출 항목</p>
                    <input
                        ref={titleInputRef}
                        className={"py-2 my-2 border-b border-orange-300 outline-none"}
                        type={"text"}
                        name={"titleVal"}
                        value={titleVal}
                        placeholder={"예) 렌트비"}
                        onChange={handleTitleChange}
                    />
                </div>
                <div className={"flex flex-col flex-1 mx-4"}>
                    <p className={"text-orange-300"}>비용</p>
                    <input
                        className={"py-2 my-2 border-b border-orange-300 outline-none"}
                        type={"number"}
                        name={"costVal"}
                        value={costVal}
                        onChange={handleCostChange}
                    />
                </div>
            </div>
            <div>
                <button
                    className={"mx-4 my-4 px-3 py-2 bg-green-600 text-white rounded transform hover:drop-shadow-xl transition duration-300 "}
                    type={"submit"}
                > {isEditing ? "수정" : "제출"}<FontAwesomeIcon icon={faPaperPlane} className={"rotate-45 ml-2"}></FontAwesomeIcon>
                </button>
            </div>
        </form>
    )
}