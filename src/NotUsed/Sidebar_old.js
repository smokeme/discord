import React, { useState } from "react";
import { connect } from "react-redux";

// action
import { logout } from "../redux/actions";
import { addChannel } from "../redux/actions";

// components
import Button from "react-bootstrap/Button";
import ChannelList from "../dashboard/ChannelList";

function Sidebar({ user, addChannel, logout }) {
  const [chnlName, setChnlName] = useState("");

  const onChange = (new_chnl) => {
    setChnlName(new_chnl);
  };

  const handleClick = () => {
    addChannel(chnlName);
    setChnlName("");
  };
  return (
    <div className="border border-danger">
      <h1>this is the side bar</h1>
      <input
        className=""
        type="text"
        placeholder="Create New Channel"
        onChange={(e) => onChange(e.target.value)}
        value={chnlName}
      />
      <input
        className="btn btn-primary"
        type="button"
        value="submit"
        onClick={() => handleClick()}
      />

      <hr></hr>
      <Button variant="danger" onClick={logout}>
        Log out
      </Button>
      <ChannelList></ChannelList>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addChannel: (val) => dispatch(addChannel(val)),
    logout: () => dispatch(logout()),
  };
};

const mapStateToProps = ({ authRes }) => ({
  user: authRes.user,
});
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
