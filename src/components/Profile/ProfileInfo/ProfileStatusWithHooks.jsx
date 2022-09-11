import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChenge = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            { 
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status}</span>
                </div>
            }
            {
                false && <div>
                    <input onChange={onStatusChenge} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;