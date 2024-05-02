import home from "../assets/icons/home.svg"
import people from "../assets/icons/people.svg"
import search from "../assets/icons/search-gray.svg"
import saved from "../assets/icons/bookmark.svg"
import createpost from "../assets/icons/gallery-add.svg"
import profile from "../assets/icons/profile-placeholder.svg"
import sampleimg from "../assets/images/box1-img.png"
export const sidebarLinks = [
  {
    imgURL: home,
    route: "/home",
    label: "Home",
  },
  {
    imgURL: createpost,
    route: "/create-post",
    label: "Create Post",
  },
];

export const bottombarLinks = [
  {
    imgURL: home,
    route: "/",
    label: "Home",
  },
  {
    imgURL: search,
    route: "/search",
    label: "Search",
  },
  {
    imgURL: createpost,
    route: "/create-post",
    label: "Create",
  },
  {
    imgURL: profile,
    route: "/profile",
    label: "Profile",
  }
];

export const communities = [
  {
    id:"1",
    name:"LeetCode",
    username:"leetcode",
    imgUrl:""
  },
  {
    id:"2",
    name:"Google",
    username:"google",
    imgUrl:""
  },
  {
    id:"3",
    name:"TCS",
    username:"tcs",
    imgUrl:""
  },
];

export const similarminds = [
  {
    id:"1",
    name:"Sanskar",
    username:"sanskar",
    imgUrl:""
  },
  {
    id:"2",
    name:"Isha",
    username:"isha",
    imgUrl:""
  },
  {
    id:"3",
    name:"Divyanshi",
    username:"divyanshi",
    imgUrl:""
  },
  {
    id:"4",
    name:"Rahul",
    username:"rahul",
    imgUrl:""
  },
  {
    id:"5",
    name:"Prakash",
    username:"prakash",
    imgUrl:""
  }
];

export const user = [
  {
    id:"1",
    name:"Sanskar",
    username:"sanskar",
    bio:"Vedanshi",
    imgUrl:""
  },
  {
    id:"2",
    name:"Isha",
    username:"isha",
    imgUrl:""
  },
  {
    id:"3",
    name:"Divyanshi",
    username:"divyanshi",
    imgUrl:""
  },
  {
    id:"4",
    name:"Rahul",
    username:"rahul",
    imgUrl:""
  },
  {
    id:"5",
    name:"Prakash",
    username:"prakash",
    imgUrl:""
  }
];


export const posts = [
  {
    id:1,
    username:"Zoro",
    text:{
      title:"Knowledge Hive",
      desc:"Knowledge Hive combines a content sharing platform, a question and answer platform, and a notes sharing platform.",
    },
    author:{
      id:"101",
      image:profile,
      name:'Zoro',
      isImg:true,
      imgUrl:sampleimg
    },
    createdAt:"2:00 pm",
    comment:"Amazing!",
    isComment:true
  },
  {
    id:2,
    username:"Vedika",
    text:{
      title:"About React",
      desc:"React applications are built using reusable components, which are like independent building blocks that encapsulate UI logic and state.",
    },
    author:{
      id:"102",
      image:profile,
      name:'Vedika',
      isImg:false,
      imgUrl:""
    },
    createdAt:"2:00 pm",
    comment:"Great!",
    isComment:true
  },
  {
    id:3,
    username:"Vedanshi",
    text:{
      title:"About Tailwind CSS",
      desc:"Tailwind CSS is a unique utility-first CSS framework that aims to empower developers to rapidly build modern websites without writing a lot of custom CSS. ",
    },
    author:{
      id:"103",
      image:profile,
      name:'Vedanshi',
      isImg:false,
      imgUrl:""
    },
    createdAt:"2:00 pm",
    comment:"Hello Vedanshi",
    isComment:true
  },
  {
    id:4,
    username:"Isha",
    text:{
      title:"",
      desc:"Hello!! I'm Isha. This is my first post.",
    },
    author:{
      id:"104",
      image:profile,
      name:'Isha',
      isImg:false,
      imgUrl:""
    },
    createdAt:"2:00 pm",
    comment:"Hello Isha",
    isComment:true
  },
  {
    id:4,
    username:"Luffy",
    text:{
      title:"One Piece",
      desc:"I'm Luffy, I'm gonna be the Kings of Pirates. BTW has anybody seen zoro.",
    },
    author:{
      id:"104",
      image:profile,
      name:'Luffy',
      isImg:false,
      imgUrl:""
    },
    createdAt:"2:00 pm",
    comment:"Yah I'm here.",
    isComment:true
  }
];

export const profileTabs = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "replies", label: "Replies", icon: "/assets/members.svg" },
  { value: "tagged", label: "Tagged", icon: "/assets/tag.svg" },
];