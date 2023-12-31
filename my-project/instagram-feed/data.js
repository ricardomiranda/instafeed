const data = {
  profile: {
    avatar: require("../assets/images/avatars/1.jpg")
  },
  stories: [
    {
      id: 1,
      avatar: require("../assets/images/avatars/1.jpg"),
      name: "Cado Ado",
      isSeen: true,
    },
    {
      id: 2,
      avatar: require("../assets/images/avatars/2.jpg"),
      name: "AI in Healthcare",
      isSeen: false,
    },
    {
      id: 3,
      avatar: require("../assets/images/avatars/3.jpg"),
      name: "Sustainable Energy",
      isSeen: true,
    },
  ],
  articles: [
    {
      id: 1,
      avatar: require("../assets/images/avatars/1.jpg"),
      name: "Cado Ado",
      image: require("../assets/images/posts/1.jpg"),
      likes: 200,
      commentsCount: 0,
      comments: 'View all 0 comments',
    },
    {
      id: 2,
      avatar: require("../assets/images/avatars/2.jpg"),
      name: "AI in Healthcare",
      image: require("../assets/images/posts/2.jpg"),
      likes: 350,
      commentsCount: 20,
      comments: 'View all 0 comments',
    },
    {
      id: 3,
      avatar: require("../assets/images/avatars/3.jpg"),
      name: "Sustainable Energy",
      image: require("../assets/images/posts/3.jpg"),
      likes: 1000,
      commentsCount: 3,
      comments: 'View all 0 comments',
    },
    {
      id: 4,
      avatar: require("../assets/images/avatars/2.jpg"),
      name: "Virtual Reality",
      image: require("../assets/images/posts/4.jpg"),
      likes: 780,
      commentsCount: 66,
      comments: 'View all 0 comments',
    },
    {
      id: 5,
      avatar: require("../assets/images/avatars/5.jpg"),
      name: "Space Exploration",
      image: require("../assets/images/posts/5.jpg"),
      likes: 3000,
      commentsCount: 2,
      comments: 'View all 0 comments',
    },
  ],
}

export default data;