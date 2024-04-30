import profile from "../assets/icons/profile-placeholder.svg";
import { AppContext } from "../context/AppContext";
import * as React from "react";
import { useContext, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Input } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import ModeEditIcon from "@mui/icons-material/ModeEditOutline";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  color: "white",
  bgcolor: "black",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ProfileHeader() {
  const { user, otherUsers, setUser } = useContext(AppContext);
  const [open, setOpen] = React.useState(false);
  const [newData, setNewData] = useState({
    name: "",
    contact: "",
    userdesc: "",
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleUpdate = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/user/profile/${user.username}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...newData,
          }),
        }
      );
      //console.log(res);
      const data = await res.json();
      console.log(data);
      setNewData("");
      console.log(data.updatedUser);
      console.log("response OK");
      toast.success("Updatced Changes Successfully!");
      setUser(data.updatedUser);
      localStorage.setItem("user", JSON.stringify(data.updatedUser));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, [user]);

  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <div className="flex items-center gap-3">
            <div className="h-15 w-15 object-cover flex justify-center">
              <img
                src={profile}
                alt="logo"
                fill
                className="rounded-full object-cover shadow-2xl"
              />
            </div>

            <div className="flex-1">
              <h2 className="text-left text-heading3-bold text-light-1">
                {user.name}
              </h2>
              <p className="text-base-medium text-gray-1 text-violet-400">
                {user.username}
              </p>
            </div>
          </div>
          <div className="flex cursor-pointer gap-3 rounded-lg bg-dark-3 px-4 py-2 ">
            <ModeEditIcon
              width={16}
              height={16}
              onClick={handleOpen}
              style={{ color: "#404063" }}
            />
            <button className="text-light-2 max-sm:hidden" onClick={handleOpen}>
              Edit
            </button>
          </div>
        </div>

        <p className="mt-6 max-w-lg text-base-regular text-light-2">
          {user.userdesc}
        </p>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form">
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ mb: 2 }}
          >
            Edit Profile
          </Typography>
          <Input
            placeholder="Name"
            sx={{
              color: "white",
              borderBottom: "#6875F5",
              width: "100%",
              mt: 2,
            }}
            value={newData.name}
            onChange={(e) => setNewData({ ...newData, name: e.target.value })}
          />
          <Input
            placeholder="Contact"
            sx={{
              color: "white",
              borderBottom: "#6875F5",
              width: "100%",
              mt: 3,
            }}
            value={newData.contact}
            onChange={(e) =>
              setNewData({ ...newData, contact: e.target.value })
            }
          />
          <Input
            placeholder="Bio"
            sx={{
              color: "white",
              borderBottom: "#6875F5",
              width: "100%",
              mt: 3,
            }}
            value={newData.userdesc}
            onChange={(e) =>
              setNewData({ ...newData, userdesc: e.target.value })
            }
          />
          <Button sx={{ color: "#6875F5", mt: 4 }} onClick={handleUpdate}>
            Save
          </Button>
        </Box>
      </Modal>
      <Toaster />
    </div>
  );
}

export default ProfileHeader;
