import React, { useEffect, useState } from "react";
import { usePostUserProfileMutation, usePutUserProfileMutation } from "../redux/UserSlice";

function EditName() {
    const [postUserProfile, { data }] = usePostUserProfileMutation();
    const [showEdit, setShowEdit] = useState(false);
    const [putUserProfile] = usePutUserProfileMutation();

    const [newFirstName, setNewFirstName] = useState("");
    const [newLastName, setNewLastName] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        putUserProfile({
            firstName: newFirstName,
            lastName: newLastName,
        });
        setShowEdit(false);
    };

    useEffect(() => {
        postUserProfile({});
    }, [postUserProfile]);

    return (
        <div className="header">
            <h1>
                Welcome back <br /> {!showEdit ? data?.body?.firstName + " " + data?.body?.lastName + "!" : ""}
            </h1>
            {!showEdit ? (
                <button
                    className="edit-button"
                    onClick={() => {
                        setShowEdit(true);
                    }}
                >
                    Edit Name
                </button>
            ) : (
                <form className="form-edit">
                    <div className="main-edit-inputs">
                        <input
                            type="text"
                            className="edit-input"
                            onChange={(e) => setNewFirstName(e.target.value)}
                            placeholder={data?.body?.firstName}
                        />
                        <input
                            type="text"
                            className="edit-input"
                            onChange={(e) => setNewLastName(e.target.value)}
                            placeholder={data?.body?.lastName}
                        />
                    </div>
                    <div className="main-edit-buttons">
                        <button className="edit-button-option" onClick={onSubmit}>
                            Save
                        </button>
                        <button
                            className="edit-button-option"
                            onClick={() => {
                                setShowEdit(false);
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}

export default EditName;
