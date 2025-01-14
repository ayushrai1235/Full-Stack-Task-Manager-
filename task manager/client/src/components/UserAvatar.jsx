import React from 'react'
import {Menu, Transition} from "@headlessui/react";
import {Fragment, useState} from "react";
import { FaUser, FaUserLock } from 'react-icons/fa';
import { IoLogOutOutline } from 'react-icons/io5';

const UserAvatar = () => {
    const [Open, setOpen] = useState(false);
    const [openPassword, setOpenPassword] = useState(false);
    const {user} = useSelector(state => state.auth);
    // const [logoutUser] = useLogoutMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log("Logging out");
    }
  return (
    <div>UserAvatar</div>
  )
}

export default UserAvatar