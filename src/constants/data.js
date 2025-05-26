import { BiGlobe } from "react-icons/bi";
import { IoIosLogOut } from "react-icons/io";
import { MdModeNight } from "react-icons/md";
import { BiStar } from "react-icons/bi";
import { BsAward } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { MdOutlineLogout } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { GiGamepad } from "react-icons/gi";
import carouselImg from "../assets/Mask Group.png";
import avatar from "../assets/user.png";
import postImage from "../assets/postImage.png";

export const sidebarData = [
  {
    id: 1,
    title: "Home",
    Icon: GiGamepad,
  },
  {
    id: 2,
    title: "Popular",
    Icon: GiGamepad,
  },
  {
    id: 3,
    title: "All",
    Icon: GiGamepad,
  },
  {
    id: 4,
    title: "Random",
    Icon: GiGamepad,
  },
];

export const carouselNews = [
  {
    id: 1,
    image: carouselImg,
    title: "Joe Biden cancer diagnosis",
    desc: "Biden diagnosed with ‘aggressive form’ of prostate cancer",

    user: {
      avatar: avatar,
      userName: "r/news",
    },
  },
  {
    id: 2,
    image: carouselImg,
    title: "Joe Biden cancer diagnosis",
    desc: "Biden diagnosed with ‘aggressive form’ of prostate cancer",

    user: {
      avatar: avatar,
      userName: "r/news",
    },
  },
  {
    id: 3,
    image: carouselImg,
    title: "Joe Biden cancer diagnosis",
    desc: "Biden diagnosed with ‘aggressive form’ of prostate cancer",

    user: {
      avatar: avatar,
      userName: "r/news",
    },
  },
  {
    id: 4,
    image: carouselImg,
    title: "Joe Biden cancer diagnosis",
    desc: "Biden diagnosed with ‘aggressive form’ of prostate cancer",

    user: {
      avatar: avatar,
      userName: "r/news",
    },
  },
  {
    id: 5,
    image: carouselImg,
    title: "Joe Biden cancer diagnosis",
    desc: "Biden diagnosed with ‘aggressive form’ of prostate cancer",

    user: {
      avatar: avatar,
      userName: "r/news",
    },
  },
  {
    id: 6,
    image: carouselImg,
    title: "Joe Biden cancer diagnosis",
    desc: "Biden diagnosed with ‘aggressive form’ of prostate cancer",

    user: {
      avatar: avatar,
      userName: "r/news",
    },
  },
];

export const existedPosts = [
  {
    id: 1,
    userName: "r/Arc Browser",
    avatar: avatar,
    date: "5 days ago",
    postImage: postImage,
    post: "lorem5Lorem ipsum dolor sit amet.",
    comment: 47,
    like: 19,
    share: 20,
  },
  {
    id: 2,
    userName: "r/Arc Browser",
    avatar: avatar,
    date: "5 days ago",
    postImage: postImage,
    post: "lorem5Lorem ipsum dolor sit amet.",
    comment: 47,
    like: 19,
    share: 20,
  },
  {
    id: 3,
    userName: "r/Arc Browser",
    avatar: avatar,
    date: "5 days ago",
    postImage: postImage,
    post: "lorem5Lorem ipsum dolor sit amet.",
    comment: 47,
    like: 19,
    share: 20,
  },
];

export const popComunities = [
  {
    id: 1,
    avatar: avatar,
    userName: "r/classicWow",
    members: "23,240,058",
  },
  {
    id: 2,
    avatar: avatar,
    userName: "r/classicWow",
    members: "23,240,058",
  },
  {
    id: 3,
    avatar: avatar,
    userName: "r/classicWow",
    members: "23,240,058",
  },
  {
    id: 4,
    avatar: avatar,
    userName: "r/classicWow",
    members: "23,240,058",
  },
];
