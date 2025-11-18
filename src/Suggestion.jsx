import React, { useEffect, useState } from "react";

function Profile() {
  const [profile, setProfile] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/profile")
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/suggestions")
      .then((res) => res.json())
      .then((data) => setSuggestions(data));
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Profile Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginBottom: "30px",
        }}
      >
        <img
          src={profile.profilePic}
          alt={profile.username}
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            border: "2px solid #fff",
            marginBottom: "10px",
          }}
        />
        <h2>@{profile.username}</h2>
        <h3>{profile.fullName}</h3>
        <p>{profile.bio}</p>

        <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
          <div>
            <strong>{profile.posts}</strong>
            <div>Posts</div>
          </div>
          <div>
            <strong>{profile.followers}</strong>
            <div>Followers</div>
          </div>
          <div>
            <strong>{profile.following}</strong>
            <div>Following</div>
          </div>
        </div>
      </div>

      {/* Suggestions */}
      <div style={{ marginTop: "20px" }}>
        <h3 style={{ color: "#aaa", fontSize: "16px" }}>Suggestions For You</h3>

        {suggestions.map((user) => (
          <div
            key={user.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "15px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img
                src={user.profilePic}
                alt={user.username}
                style={{ width: "45px", height: "45px", borderRadius: "50%" }}
              />
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <span style={{ fontWeight: "bold" }}>{user.username}</span>
                  {user.isVerified && <span style={{ color: "#0095f6" }}>✔️</span>}
                </div>
                <div style={{ fontSize: "12px", color: "#aaa" }}>
                  Followed by {user.followedBy}
                </div>
              </div>
            </div>
            <button
              style={{
                backgroundColor: "transparent",
                color: "#0095f6",
                border: "none",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
