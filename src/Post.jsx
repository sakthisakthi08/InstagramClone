import React, { useEffect, useState } from "react";

function Post() {
    const [posts, setPosts] = useState([]);

    // ✅ Data load from JSON Server
    useEffect(() => {
        fetch("http://localhost:5000/posts") // port number json-server ஓடுது portக்கு match பண்ணிக்கோ
            .then((res) => res.json())
            .then((data) => setPosts(data))
            .catch((err) => console.log("Error:", err));
    }, []);

    // ✅ Display
    return (
        <div>
            {posts.length ? (
                <div>
                    {posts.map((post) => (
                        <div key={post.id}>
                            <div className="post-dp">
                                <div>
                                    <img className="profile-pic" src={post.profile} alt={post.username} width="60" height="60" />
                                    <div>
                                        <div className="username">{post.username}</div>
                                        <div className="text">{post.text}</div>
                                    </div>
                                    <p className="time">Time: {post.time}</p>
                                </div>
                                <div>
                                    <i className="bi bi-three-dots-vertical"></i>
                                </div>
                            </div>
                            <br />
                            <img className="post-container" src={post.image} alt={post.username} width="400" />
                            <div className="menus">
                                <div className="menu">
                                    <div className="menu1">
                                        <div> <i className="bi bi-heart">{post.likes}</i></div>
                                        <div><i class="bi bi-chat-fill"></i></div>
                                        <div><i class="bi bi-send"></i></div>
                                    </div>
                                    <div>
                                        <i class="bi bi-bookmark-fill"></i>
                                    </div>
                                </div>
                                <div className="menu2">
                                    <p>...add command</p>
                                    <i class="bi bi-emoji-smile"></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

export default Post;
