import { RiFacebookFill } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";

export const SOCIAL_ICONS = {
  Facebook: RiFacebookFill,
  Instagram: RiInstagramLine,
  Linkedin: TiSocialLinkedin,
  Twitter: FaTwitter,
};

let idBlog = 0;

const getBlogId = (title, suffix = "") => {
  const sanitizedTitle = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  idBlog++;
  return `${sanitizedTitle}${suffix}`;
};

let idSocial = 0;
const getIdSocial = (suffix = "") => {
  idSocial++;
  return `${idSocial}${suffix}`;
};

let idTag = 0;
const getIdTag = (suffix = "") => {
  idTag++;
  return `${idTag}${suffix}`;
};

let idCategory = 0;
const getIdCategory = (suffix = "") => {
  idCategory++;
  return `${idCategory}${suffix}`;
};



export const createBlog = (
  title,
  image,
  info,
  rating,
  caption,
  categorys,
  tags,
  socialiocn,
  date // Store as Date object
) => {


  return {
    id: getBlogId(title),
    blogImage: image,
    title,
    info,
    rating,
    caption,
    BlogCategory: categorys.map((item) => ({
      id: getIdCategory("-category"),
      ...item,
    })),
    Blogtags: tags.map((tag) => ({
      id: getIdTag("-tag"),
      ...tag,
    })),
    BlogSocial: socialiocn.map((icon) => ({
      id: getIdSocial("-social"),
      ...icon,
    })),
    montheData:new Date(date),
  };
};


export const BlogListData = [
  createBlog(
    "veryes elementum sesuren then aucan vestibu.",
    "/images/blog/blog-1.jpg",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since
     the 1500s, when an unknown printer took a galley of type and scrambled it 
     to make a type specimen book. It has survived not only five centuries, but 
     also the leap into electronic typesetting, remaining essentially unchanged. 
     It was popularised in the 1960s with the release of Letraset sheets containing 
     Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
      PageMaker including versions of Lorem Ipsum.
     `,
    "5",
    "ByShafiqul - Appartment",
    [
      { categoryname: "Bar & Pub" },
      { categoryname: "Deluxe Hotel" },
      { categoryname: "Family Room" },
      { categoryname: "Luxury" },
    ],

    [
      { nametag: "Appartment" },
      { nametag: "Bar & Pub" },
      { nametag: "Deluxe Hotel" },
      { nametag: "Family Room" },
     
    ],

    [
      {
        socialname: "Facebook",
        icon: <RiFacebookFill />,
        url: "https://facebook.com",
      },

      {
        socialname: "Instagram",
        icon: <RiInstagramLine />,
        url: "https://instagram.com",
      },

      {
        socialname: "Linkedin",
        icon: <TiSocialLinkedin />,
        url: "https://linkedin.com",
      },

      {
        name: "Twitte",
        icon: <FaTwitter />,
        url: "https://twitte.com",
      },
      
    ],

    "2023-01-10"
  ),

  createBlog(
    "Nam id sapien suscipit won ullamcorper lectus et.",
    "/images/blog/blog-2.jpg",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since
     the 1500s, when an unknown printer took a galley of type and scrambled it 
     to make a type specimen book. It has survived not only five centuries, but 
     also the leap into electronic typesetting, remaining essentially unchanged. 
     It was popularised in the 1960s with the release of Letraset sheets containing 
     Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
      PageMaker including versions of Lorem Ipsum.
     `,
    "5",
    "Interior Design",
    [
      { categoryname: "Appartment" },
      { categoryname: "Bar & Pub" },
      { categoryname: "Deluxe Hotel" },
    ],

    [
      { nametag: "Appartment" },
      { nametag: "Bar & Pub" },
      { nametag: "Luxury" },
    ],

    [
      {
        socialname: "Facebook",
        icon: <RiFacebookFill />,
        url: "https://facebook.com",
      },

      {
        socialname: "Instagram",
        icon: <RiInstagramLine />,
        url: "https://instagram.com",
      },

      {
        socialname: "Linkedin",
        icon: <TiSocialLinkedin />,
        url: "https://linkedin.com",
      },

      {
        name: "Twitte",
        icon: <FaTwitter />,
        url: "https://twitte.com",
      },
    ],


    "2024-06-05"
  ),

  createBlog(
    "Explore Interior Design Of Hotel Lobbies",
    "/images/blog/blog-2.jpg",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since
     the 1500s, when an unknown printer took a galley of type and scrambled it 
     to make a type specimen book. It has survived not only five centuries, but 
     also the leap into electronic typesetting, remaining essentially unchanged. 
     It was popularised in the 1960s with the release of Letraset sheets containing 
     Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
      PageMaker including versions of Lorem Ipsum.
     `,
    "5",
    "Couple Room",
    [
      { categoryname: "Appartment" },
      { categoryname: "Bar & Pub" },
      { categoryname: "Deluxe Hotel" },
      { categoryname: "Family Room" },
      { categoryname: "Luxury" },
    ],

    [
      { nametag: "Appartment" },
      { nametag: "Bar & Pub" },
      { nametag: "Deluxe Hotel" },
      { nametag: "Family Room" },
      { nametag: "Luxury" },
    ],

    [
      {
        socialname: "Facebook",
        icon: <RiFacebookFill />,
        url: "https://facebook.com",
      },

      {
        socialname: "Instagram",
        icon: <RiInstagramLine />,
        url: "https://instagram.com",
      },

      {
        socialname: "Linkedin",
        icon: <TiSocialLinkedin />,
        url: "https://linkedin.com",
      },

      {
        name: "Twitte",
        icon: <FaTwitter />,
        url: "https://twitte.com",
      },
    ],

    "2026-01-07"
  ),

  createBlog(
    "Knowing Business & Priorities",
    "/images/blog/blog-4.jpg",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since
     the 1500s, when an unknown printer took a galley of type and scrambled it 
     to make a type specimen book. It has survived not only five centuries, but 
     also the leap into electronic typesetting, remaining essentially unchanged. 
     It was popularised in the 1960s with the release of Letraset sheets containing 
     Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
      PageMaker including versions of Lorem Ipsum.
     `,
    "5",
    "ByShafiqul - Appartment",
    [
      { categoryname: "Appartment" },
      { categoryname: "Family Room" },
      { categoryname: "Luxury" },
    ],

    [
      { nametag: "Deluxe Hotel" },
      { nametag: "Family Room" },
      { nametag: "Luxury" },
    ],

    [
      {
        socialname: "Facebook",
        icon: <RiFacebookFill />,
        url: "https://facebook.com",
      },

      {
        socialname: "Instagram",
        icon: <RiInstagramLine />,
        url: "https://instagram.com",
      },

      {
        socialname: "Linkedin",
        icon: <TiSocialLinkedin />,
        url: "https://linkedin.com",
      },

      {
        name: "Twitte",
        icon: <FaTwitter />,
        url: "https://twitte.com",
      },
    ],

    "2021-01-07"
  ),

  createBlog(
    "Swiming Benefits is Good For Your Health",
    "/images/blog/blog-5.jpg",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since
     the 1500s, when an unknown printer took a galley of type and scrambled it 
     to make a type specimen book. It has survived not only five centuries, but 
     also the leap into electronic typesetting, remaining essentially unchanged. 
     It was popularised in the 1960s with the release of Letraset sheets containing 
     Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
      PageMaker including versions of Lorem Ipsum.
     `,
    "5",
    "ByShafiqul - Appartment",
    [
      { categoryname: "Appartment" },
      { categoryname: "Bar & Pub" },
      { categoryname: "Deluxe Hotel" },
      { categoryname: "Family Room" },
      { categoryname: "Luxury" },
    ],

    [
      { nametag: "Appartment" },
      { nametag: "Bar & Pub" },
      { nametag: "Deluxe Hotel" },
      { nametag: "Family Room" },
      { nametag: "Luxury" },
    ],

    [
      {
        socialname: "Facebook",
        icon: <RiFacebookFill />,
        url: "https://facebook.com",
      },

      {
        socialname: "Instagram",
        icon: <RiInstagramLine />,
        url: "https://instagram.com",
      },

      {
        socialname: "Linkedin",
        icon: <TiSocialLinkedin />,
        url: "https://linkedin.com",
      },

      {
        name: "Twitte",
        icon: <FaTwitter />,
        url: "https://twitte.com",
      },
    ],
    "2025-07-11"
  ),

  createBlog(
    "Avalible Now Health Club For Your Fitness",
    "/images/blog/blog-6.jpg",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since
     the 1500s, when an unknown printer took a galley of type and scrambled it 
     to make a type specimen book. It has survived not only five centuries, but 
     also the leap into electronic typesetting, remaining essentially unchanged. 
     It was popularised in the 1960s with the release of Letraset sheets containing 
     Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
      PageMaker including versions of Lorem Ipsum.
     `,
    "5",
    "ByShafiqul - Appartment",
    [
      { categoryname: "Appartment" },
      { categoryname: "Bar & Pub" },
      { categoryname: "Deluxe Hotel" },
      { categoryname: "Family Room" },
      { categoryname: "Luxury" },
    ],

    [
      { nametag: "Appartment" },
      { nametag: "Bar & Pub" },
      { nametag: "Deluxe Hotel" },
      { nametag: "Family Room" },
      { nametag: "Luxury" },
    ],

    [
      {
        socialname: "Facebook",
        icon: <RiFacebookFill />,
        url: "https://facebook.com",
      },

      {
        socialname: "Instagram",
        icon: <RiInstagramLine />,
        url: "https://instagram.com",
      },

      {
        socialname: "Linkedin",
        icon: <TiSocialLinkedin />,
        url: "https://linkedin.com",
      },

      {
        name: "Twitte",
        icon: <FaTwitter />,
        url: "https://twitte.com",
      },
    ],
    "2022-01-10"
  ),


  createBlog(
    "Retore Lighting Design in The Hotel",
    "/images/blog/blog-7.jpg",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since
     the 1500s, when an unknown printer took a galley of type and scrambled it 
     to make a type specimen book. It has survived not only five centuries, but 
     also the leap into electronic typesetting, remaining essentially unchanged. 
     It was popularised in the 1960s with the release of Letraset sheets containing 
     Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
      PageMaker including versions of Lorem Ipsum.
     `,
    "5",
    "ByShafiqul - Appartment",
    [
      { categoryname: "Appartment" },
      { categoryname: "Bar & Pub" },
      { categoryname: "Deluxe Hotel" },
      { categoryname: "Family Room" },
      { categoryname: "Luxury" },
    ],

    [
      { nametag: "Appartment" },
      { nametag: "Bar & Pub" },
      { nametag: "Deluxe Hotel" },
      { nametag: "Family Room" },
      { nametag: "Luxury" },
    ],

    [
      {
        socialname: "Facebook",
        icon: <RiFacebookFill />,
        url: "https://facebook.com",
      },

      {
        socialname: "Instagram",
        icon: <RiInstagramLine />,
        url: "https://instagram.com",
      },

      {
        socialname: "Linkedin",
        icon: <TiSocialLinkedin />,
        url: "https://linkedin.com",
      },

      {
        name: "Twitte",
        icon: <FaTwitter />,
        url: "https://twitte.com",
      },
    ],

    "2024-02-10"
  ),


  createBlog(
    "libero ipsum eleifend odiol a fringilla nisl odio.",
    "/images/blog/blog-7.jpg",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since
     the 1500s, when an unknown printer took a galley of type and scrambled it 
     to make a type specimen book. It has survived not only five centuries, but 
     also the leap into electronic typesetting, remaining essentially unchanged. 
     It was popularised in the 1960s with the release of Letraset sheets containing 
     Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
      PageMaker including versions of Lorem Ipsum.
     `,
    "5",
    "ByShafiqul - Appartment",
    [
      { categoryname: "Appartment" },
      { categoryname: "Bar & Pub" },
      { categoryname: "Deluxe Hotel" },
      { categoryname: "Luxury" },
    ],

    [
      { nametag: "Appartment" },
      { nametag: "Deluxe Hotel" },
      { nametag: "Family Room" },
      { nametag: "Luxury" },
    ],

    [
      {
        socialname: "Facebook",
        icon: <RiFacebookFill />,
        url: "https://facebook.com",
      },

      {
        socialname: "Instagram",
        icon: <RiInstagramLine />,
        url: "https://instagram.com",
      },

      {
        socialname: "Linkedin",
        icon: <TiSocialLinkedin />,
        url: "https://linkedin.com",
      },

      {
        name: "Twitte",
        icon: <FaTwitter />,
        url: "https://twitte.com",
      },
    ],

    "2024-05-08"
  ),


];
