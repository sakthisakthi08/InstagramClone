import React, { useEffect, useState, useRef } from "react";

function Stories() {
  const [stories, setStories] = useState([]);
  const [activeStory, setActiveStory] = useState(null);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:5000/stories")
      .then((res) => res.json())
      .then((data) => setStories(data))
      .catch((err) => console.log("Error:", err));
  }, []);

  // When story opens → start progress bar + auto close
  useEffect(() => {
    if (activeStory) {
      setProgress(0);
      const duration =
        activeStory.storyType === "video" ? 10000 : 5000; // ms
      const interval = 50;

      progressRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressRef.current);
            closeStory();
            return 100;
          }
          return prev + (interval / duration) * 100;
        });
      }, interval);
    }

    return () => clearInterval(progressRef.current);
  }, [activeStory]);

  const closeStory = () => setActiveStory(null);

  return (
    <div style={{ backgroundColor: "#000", color: "#fff", padding: "15px" }}>
      {/* ✅ Story bubbles */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          overflowX: "auto",
          padding: "10px 0"
        }}
      >
        {stories.length ? (
          stories.map((story) => (
            <div
              key={story.id}
              onClick={() => setActiveStory(story)}
              style={{ textAlign: "center", cursor: "pointer" }}
            >
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  border: "3px solid #ff0066",
                  padding: "3px",
                  overflow: "hidden"
                }}
              >
                <img
                  src={story.profile}
                  alt={story.username}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover"
                  }}
                />
              </div>
              <p style={{ fontSize: "12px", marginTop: "6px" }}>
                {story.username}
              </p>
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>

      {/* ✅ Fullscreen story view */}
      {activeStory && (
        <div
          onClick={closeStory}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            backgroundColor: "#000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            zIndex: 1000,
            transition: "all 0.5s ease"
          }}
        >
          {/* Progress bar */}
          <div
            style={{
              position: "absolute",
              top: "20px",
              width: "90%",
              height: "4px",
              backgroundColor: "#333",
              borderRadius: "5px"
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: "100%",
                backgroundColor: "#fff",
                borderRadius: "5px",
                transition: "width 0.05s linear"
              }}
            ></div>
          </div>

          {/* Story content */}
          {activeStory.storyType === "video" ? (
            <video
              src={activeStory.storyUrl}
              autoPlay
              muted
              style={{
                width: "90%",
                maxHeight: "80vh",
                borderRadius: "12px",
                objectFit: "cover"
              }}
            />
          ) : (
            <img
              src={activeStory.storyUrl}
              alt={activeStory.username}
              style={{
                width: "90%",
                maxHeight: "80vh",
                borderRadius: "12px",
                objectFit: "cover"
              }}
            />
          )}

          <div style={{ marginTop: "10px", fontSize: "16px", opacity: 0.8 }}>
            @{activeStory.username}
          </div>
        </div>
      )}
    </div>
  );
}

export default Stories;
