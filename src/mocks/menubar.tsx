import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GrProjects } from "react-icons/gr";
import { AiFillMessage } from "react-icons/ai";


export const menu = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "About",
      link: "/aboutme",
    },
    {
      id: 3,
      title: "Projects",
      link: "/projects",
    },
    {
      id: 4,
      title: "Contact",
      link: "/contactme",
    },
  ];
export const bottomMenu=[
 { id: 1,
  title: "Home",
  icon: <AiFillHome className="text-2xl" />,
  link: "/",
},
{ id: 2,
  title: "Profile",
  icon: <CgProfile className="text-2xl" />,
  link: "/aboutme",
},
{ id: 3,
  title: "Projects",
  icon: <GrProjects className="text-2xl" />,
  link: "/projects",
},
{ id: 3,
  title: "Contact",
  icon: <AiFillMessage className="text-2xl" />,
  link: "/contactme",
},
]


export const projects = [
  
  {
    id:1,
    title: "Build a clone of Tokopedia Web",
    date:"November 2023",
    desc:"Tokopedia is one of the biggest online marketplaces in Indonesia, i interested in building a clone and create a fitur similiar with, such add a product, add product to cart and calculate total price, product detail and more, i'm using firebase clould storange for backend services. Try To add some product by hitting Try To Add Product",
    link:"https://tokopediaclone-7af5f.firebaseapp.com/",
    image:0,
    tech:[
      "react js",
      "taildwind css",
      "daisy ui",
      "firebase"
    ]

  },
  {
    id:1,
    title: "PERFECT LEGENDS (Trivia Games)",
    date:"Januari 2024",
    desc:`Perfect Legends is an Android-based mobile game app built with React Native, this application is a team project created during bootcamp in Dumbways,
    As a frontend developer, I am responsible for creating an attractive and responsive UI display,
    From here I learned how to handle a project as a team, how to communicate between frontend and backend, solve bugs together, discuss developing new features, work together until this project can be completed according to the specified deadline.
    I collaborate with`,
    link:"",
    image:1,
    tech:[
      "react native",
      "firebase authentication",
    ]

  },
  {
    id:1,
    title: "Circle Web Apps",
    date:"Januari 2024",
    desc:`Circle web apps is a project assignment that I completed during bootcamp at Dumbways with a deadline of two weeks, this is a fullstack social media application project similar to X or Twitter with a frontend react js typescript combination of chakra ui, the backend service uses node js, express js, typeorm, postgresql.
    Try to upload threads with multiple images, add likes and comments on threads, and also follow people. 
    `,
    link:"",
    image:2,
    tech:[
      "react js",
      "chakra ui",
      "node js",
      "express js",
      "typeorm",
      "redux toolkit",
      "postgresql"
    ]

  }
]