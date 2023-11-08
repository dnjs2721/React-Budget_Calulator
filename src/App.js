import './App.css';
import React, {useCallback, useEffect, useRef, useState} from "react";
import Form from "./components/Form";
import TotalCost from "./components/TotalCost";
import Lists from "./components/Lists";
import AllDeleteButton from "./components/AllDeleteButton";
import ShowBox from "./components/ShowBox";

export default function App() {
    const initialBudgetData= localStorage.getItem("budgetData") ? JSON.parse(localStorage.getItem("budgetData")) : [];

    const [budgetData, setBudgetData] = useState(initialBudgetData);
    const [titleVal, setTitleVal] = useState("");
    const [costVal, setCostVal] = useState(0);
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [showBox, setShowBox] = useState("");

    const titleInputRef = useRef(null);

    useEffect(() => {
        if (titleInputRef.current) {
            titleInputRef.current.focus();
        }
    }, []);

    const resetFields = () => {
        setTitleVal("");
        setCostVal(0);
        if (titleInputRef.current) {
            titleInputRef.current.focus();
        }
    };

    const handleEdit = useCallback((id, title, cost) => {
        setIsEditing(true);
        setEditingId(id);
        setTitleVal(title);
        setCostVal(cost);
        if (titleInputRef.current) {
            titleInputRef.current.focus();
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (titleVal.trim().length === 0 || costVal < 0) {
            resetFields()
            return
        }

        let newBudget = {
            id: Date.now(),
            title: titleVal,
            cost: isNaN(parseInt(costVal)) ? 0 : parseInt(costVal)
        };

        setBudgetData(prev => [...prev, newBudget])
        localStorage.setItem("budgetData", JSON.stringify([...budgetData, newBudget]));
        resetFields()
        handleAction("create")
    }

    const handleEditSubmit = (e) => {
        e.preventDefault();

        if (titleVal.trim().length === 0  || costVal < 0) {
            setIsEditing(false);
            setEditingId(null);
            resetFields()
            return
        }

        let newBudget = budgetData.map((data) => {
            if(data.id === editingId) {
                data.title = titleVal
                data.cost = isNaN(parseInt(costVal)) ? 0 : parseInt(costVal)
            }
            return data
        })

        setBudgetData(newBudget)
        localStorage.setItem("budgetData", JSON.stringify(newBudget));
        setIsEditing(false);
        setEditingId(null);
        resetFields()
        handleAction("edit")
    };

    const handleAction = useCallback((action) => {
        setShowBox(action);
        setTimeout(() => {
            setShowBox(action + "O");
        }, 2000);
    }, [setShowBox]);

    const handleDelete = useCallback((id) => {
        let newBudget = budgetData.filter((data) => data.id !== id)
        setBudgetData(newBudget)
        localStorage.setItem("budgetData", JSON.stringify(newBudget));
        if (isEditing && editingId === id) {
            setIsEditing(false);
            setEditingId(null);
        }
        resetFields()
        handleAction("delete")
    }, [budgetData, editingId, isEditing, handleAction])

    return (
        <div className={"flex flex-col w-screen h-screen pt-10 pb-5 bg-orange-300"}>
            <ShowBox showBox={showBox}></ShowBox>
            <div className={"flex flex-col w-full h-full px-10 py-2"}>
                <h1 className={"flex justify-start font-bold text-2xl"}>
                    예산 계산기
                </h1>
                <div className={"flex flex-col w-full p-6 my-4 bg-white rounded shadow overflow-scroll"}>
                    <Form
                        handleSubmit={handleSubmit}
                        titleVal={titleVal}
                        setTitleVal={setTitleVal}
                        costVal={costVal}
                        setCostVal={setCostVal}
                        isEditing={isEditing}
                        handleEditSubmit={handleEditSubmit}
                        titleInputRef={titleInputRef}
                    ></Form>

                    <Lists
                        budgetData={budgetData}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                    ></Lists>
                    {budgetData.length > 0 && (
                        <AllDeleteButton
                            setBudgetData={setBudgetData}
                            handleAction={handleAction}
                        ></AllDeleteButton>
                    )}
                </div>
                <TotalCost budgetData={budgetData}></TotalCost>
            </div>
        </div>
    );
}