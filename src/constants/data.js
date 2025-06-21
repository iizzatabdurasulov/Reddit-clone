import { GiGamepad } from "react-icons/gi";
import arcBrowser from "../assets/image/arcBrowser.jpeg";
import spaceX from "../assets/image/spaceX.jpeg";
import avatar from "../assets/image/user.png";


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
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=600&fit=crop",
    alt: "Diplomatic meeting between world leaders",
    title: "Israel-Iran Conflict Escalates",
    desc: "Diplomatic talks begin as tensions rise following Israeli strikes on Tehran",
    user: {
      avatar: avatar,
      userName: "r/worldnews",
    },
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
    alt: "White House and American flag",
    title: "Trump Presidency Updates",
    desc: "President declines to comment on potential Iranian nuclear facility strikes",
    user: {
      avatar: avatar,
      userName: "r/politics",
    },
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop",
    alt: "Basketball game action shot",
    title: "NBA Finals Game 7 Tonight",
    desc: "Pacers and Thunder face off in decisive championship game",
    user: {
      avatar: avatar,
      userName: "r/nba",
    },
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    alt: "Artificial intelligence and technology concept",
    title: "Pope Warns About AI Impact",
    desc: "Pope Leo XIV raises concerns about AI's effect on youth development",
    user: {
      avatar: avatar,
      userName: "r/technology",
    },
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
    alt: "Luxury yacht on Mediterranean waters",
    title: "British Superyacht Resurfaces",
    desc: "Yacht that sank off Sicily killing 7 people emerges for first time",
    user: {
      avatar: avatar,
      userName: "r/europe",
    },
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=800&h=600&fit=crop",
    alt: "Baseball player hitting home run",
    title: "Cal Raleigh Sets MLB Record",
    desc: "Mariners catcher breaks Johnny Bench's home run record before All-Star break",
    user: {
      avatar: avatar,
      userName: "r/baseball",
    },
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1569163139394-de44aa8a9a40?w=800&h=600&fit=crop",
    alt: "Climate change effects on Earth",
    title: "Climate Crisis Health Alert",
    desc: "WHO warns 2024 was warmest year on record, 80% chance 2025-2029 will be hotter",
    user: {
      avatar: avatar,
      userName: "r/climate",
    },
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    alt: "Technology and AI investment concept",
    title: "Tech Giants AI Investment Surge",
    desc: "Major corporations increase AI spending by 300% in Q2 2025",
    user: {
      avatar: avatar,
      userName: "r/technology",
    },
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&h=600&fit=crop",
    alt: "Environmental summit and green energy",
    title: "COP30 Preparations Accelerate",
    desc: "Global climate summit momentum builds as June 2025 marks milestone month",
    user: {
      avatar: avatar,
      userName: "r/environment",
    },
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=600&fit=crop",
    alt: "Bitcoin and cryptocurrency trading",
    title: "Cryptocurrency Market Rally",
    desc: "Bitcoin surges past $45,000 as institutional adoption continues",
    user: {
      avatar: avatar,
      userName: "r/cryptocurrency",
    },
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop",
    alt: "Space rocket launch and lunar mission",
    title: "Space Tourism Milestone",
    desc: "First commercial lunar orbit mission successfully completed with civilian crew",
    user: {
      avatar: avatar,
      userName: "r/space",
    },
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
    alt: "Global health and medical concept",
    title: "Global Health Crisis Warning",
    desc: "Climate change projected to cause 250,000 additional deaths annually by 2030",
    user: {
      avatar: avatar,
      userName: "r/health",
    },
  },
];

export const existedPosts = [
  {
    id: 1,
    userName: "r/Arc Browser",
    avatar: avatar,
    date: "5 days ago",
    postImage: arcBrowser,
    postImageAlt: "Modern web browser interface",
    post: "Arc Browser's new AI-powered tab management is revolutionizing how we browse the web.",
    comment: 47,
    like: 19,
    share: 20,
    followers: "3.4",
    desc: "Arc Browser community discussing the future of web browsing.",
    createdDate: "Oct 18, 2023",
  },
  {
    id: 2,
    userName: "r/TechNews",
    avatar: avatar,
    date: "3 days ago",
    postImage: 'techNews',
    postImageAlt: "Quantum computer technology",
    post: "Breakthrough in quantum computing achieved by IBM, processing speed increased by 400%.",
    comment: 89,
    like: 156,
    share: 45,
    followers: "2.1",
    desc: "Latest technology news and innovations from around the world.",
    createdDate: "Mar 15, 2020",
  },
  {
    id: 3,
    userName: "r/SpaceX",
    avatar: avatar,
    date: "1 day ago",
    postImage: spaceX,
    postImageAlt: "SpaceX rocket launch",
    post: "Successful Mars mission preparation completed, launch scheduled for next month.",
    comment: 234,
    like: 567,
    share: 123,
    followers: "8.7",
    desc: "SpaceX enthusiasts and space exploration community.",
    createdDate: "Jun 12, 2018",
  },
];

export const popComunities = [
  {
    id: 1,
    avatar:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=50&h=50&fit=crop&crop=face",
    avatarAlt: "World of Warcraft community avatar",
    userName: "r/classicWow",
    members: "23,240,058",
  },
  {
    id: 2,
    avatar:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=50&h=50&fit=crop&crop=face",
    avatarAlt: "Programming community avatar",
    userName: "r/programming",
    members: "18,456,789",
  },
  {
    id: 3,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
    avatarAlt: "Technology community avatar",
    userName: "r/technology",
    members: "15,678,234",
  },
  {
    id: 4,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
    avatarAlt: "Gaming community avatar",
    userName: "r/gaming",
    members: "12,345,678",
  },
];
