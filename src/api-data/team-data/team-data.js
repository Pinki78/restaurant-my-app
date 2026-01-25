 


 let idTeam = 0;

const getTeamId = (title, suffix = "") => {
  const sanitizedTitle = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace one or more non-alphanumeric characters with a single hyphen
    .replace(/^-+|-+$/g, "");
  idTeam++;
  return `${sanitizedTitle}${suffix}`;
};

export const createTeam = (
  title,
  image,
  info,
  caption,
  email,
  phone,
  location,
  experience,
   socials = {}
) => ({
  id: getTeamId(title),
  teamImage: image,
  title,
  info,
  caption,
  email,
  phone,
  location,
  experience,
  facebook: socials.facebook || "",
  twitter: socials.twitter || "",
  instagram: socials.instagram || "",
});


export const TeamData =[

createTeam(
     "Daniel Scott",
    "/images/team/team-1.jpg",
    `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.`,
    "Head Chef",
    'info@domainname.com',
    '+91 123456789',
    'India',
    '10 year',
     {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    }
  ),

  
createTeam(
    "Sophia Taylor",
    "/images/team/team-4.jpg",
    `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.`,
    "Sous Chef",
    'info@domainname.com',
    '+91 123456789',
    'India',
    '5 year',
    {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    }
  ),

createTeam(
    "Jack Sparrow",
    "/images/team/team-2.jpg",
    `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.`,
    "Grill & Nun Chef",
    'info@domainname.com',
    '+91 123456789',
    'India',
    '8 year',
    {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    }
  ),

  createTeam(
    "Jack Danial",
    "/images/team/team-2.jpg",
    `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.`,
    "Head Chef",
    'info@domainname.com',
    '+91 123456789',
    'India',
    '4 year',
    {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    }
  ),


  createTeam(
    "Jenifer Lynda",
    "/images/team/team-5.jpg",
    `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.`,
    "Grill & Nun Chef",
    'info@domainname.com',
    '+91 123456789',
    'India',
    '2 year',
    {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    }
  ),

    createTeam(
    "Danny Watt",
    "/images/team/team-6.jpg",
    `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.`,
    "Financial Manager",
    'info@domainname.com',
    '+91 123456789',
    'India',
    '11 year',
    {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    }
  ),

    createTeam(
    "Alice Capsey",
    "/images/team/team-7.jpg",
    `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.`,
    "Manager",
    'info@domainname.com',
    '+91 123456789',
    'India',
    '9 year',
    {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    }
  ),

    createTeam(
    "Danial Frankie",
    "/images/team/team-8.jpg",
    `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.`,
    "Chinese Cuisine",
    'info@domainname.com',
    '+91 123456789',
    'India',
    '3 year',
    {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    }
  ),

    createTeam(
    "Alex john",
    "/images/team/team-9.jpg",
    `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.`,
    "French Cuisine",
    'info@domainname.com',
    '+91 123456789',
    'India',
    '6 year',
    {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    }
  ),

    createTeam(
    "Michal Smart",
    "/images/team/team-10.jpg",
    `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.`,
    "Japanese Cuisine",
    'info@domainname.com',
    '+91 123456789',
    'India',
    '12 year',
    {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    }
  ),




]