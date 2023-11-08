import React from 'react'

const ShowBox = React.memo(({showBox}) => {

    return (
        <div className={`flex w-full justify-center px-10 fixed top-3
         ${showBox === "create" || showBox === "edit" || showBox === "delete" || showBox === "AllDelete"
            ? 'opacity-100 transition duration-300 ease-in-out' 
            : 'opacity-0 transition duration-300 ease-in-out'}`}
        >
            {showBox === "create" && (
                <div className={"flex w-full justify-center p-1 mb-3 rounded bg-green-400"}>
                    <p className={"text-white"}>아이템이 생성되었습니다.</p>
                </div>
            )}
            {showBox === "delete" && (
                <div className={"flex w-full justify-center p-1 mb-3 rounded bg-red-400"}>
                    <p className={"text-white"}>아이템이 삭제되었습니다.</p>
                </div>
            )}
            {showBox === "edit" && (
                <div className={"flex w-full justify-center p-1 mb-3 rounded bg-blue-400"}>
                    <p className={"text-white"}>아이템이 수정되었습니다.</p>
                </div>
            )}
            {showBox === "AllDelete" && (
                <div className={"flex w-full justify-center p-1 mb-3 rounded bg-red-400"}>
                    <p className={"text-white"}>전체 아이템이 삭제되었습니다.</p>
                </div>
            )}
            {showBox === "createO" && (
                <div className={"flex w-full justify-center p-1 mb-3 rounded bg-green-400"}>
                    <p className={"text-white"}>아이템이 생성되었습니다.</p>
                </div>
            )}
            {showBox === "deleteO" && (
                <div className={"flex w-full justify-center p-1 mb-3 rounded bg-red-400"}>
                    <p className={"text-white"}>아이템이 삭제되었습니다.</p>
                </div>
            )}
            {showBox === "editO" && (
                <div className={"flex w-full justify-center p-1 mb-3 rounded bg-blue-400"}>
                    <p className={"text-white"}>아이템이 수정되었습니다.</p>
                </div>
            )}
            {showBox === "AllDeleteO" && (
                <div className={"flex w-full justify-center p-1 mb-3 rounded bg-red-400"}>
                    <p className={"text-white"}>전체 아이템이 삭제되었습니다.</p>
                </div>
            )}
        </div>
    )
})

export default React.memo(ShowBox);