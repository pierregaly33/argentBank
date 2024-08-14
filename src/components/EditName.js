import React, { useEffect, useState } from "react";
import { usePostUserProfileMutation } from "../redux/UserSlice";

function EditName() {
    const [postUserProfile, { data }] = usePostUserProfileMutation();
    const [showEdit, setShowEdit] = useState(false);

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
                        <input type="text" className="edit-input" placeholder={data.body.firstName} />
                        <input type="text" className="edit-input" placeholder={data.body.lastName} />
                    </div>
                    <div className="main-edit-buttons">
                        <button className="edit-button-option" type="submit">
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
