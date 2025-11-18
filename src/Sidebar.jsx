import React from "react";
import insta from "./assets/insta.png";

function Sidebar() {
  return (
    <div
      style={{
        height: "100vh",
        width: "250px",
        backgroundColor: "black",
        color: "white",
        padding: "25px 15px",
        borderRight: "1px solid #262626",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Top section */}
      <img
        src={insta}
        alt="Instagram logo"
        style={{
          width: "120px",
          marginBottom: "40px",
          marginLeft: "10px",
          filter: "brightness(0) invert(1)", // black → white
        }}
      />


      {/* Menu items */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          fontSize: "17px",
        }}
      >
        <div className="sidebar-item">
          <i className="bi bi-house-door"></i>
          <span>Home</span>
        </div>
        <div className="sidebar-item">
          <i className="bi bi-search"></i>
          <span>Search</span>
        </div>
        <div className="sidebar-item">
          <i className="bi bi-compass"></i>
          <span>Explore</span>
        </div>
        <div className="sidebar-item">
          <i className="bi bi-camera-reels"></i>
          <span>Reels</span>
        </div>
        <div className="sidebar-item">
          <i className="bi bi-chat-dots"></i>
          <span>Messages</span>
        </div>
        <div className="sidebar-item">
          <i class="bi bi-bell-fill"></i>
          <span>Notifications</span>
        </div>
        <div className="sidebar-item">
          <i className="bi bi-plus-square"></i>
          <span>Create</span>
        </div>
        <div className="sidebar-item">
          <i className="bi bi-person"></i>
          <span>Profile</span>
        </div>
      </div>
      <div className="sidebar-item">
        <i class="bi bi-three-dots-vertical"></i>
        <span>More</span>
      </div>
    </div>


  );
}

export default Sidebar;
