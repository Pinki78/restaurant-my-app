import { BiSolidFoodMenu } from "react-icons/bi";
import { GiChefToque } from "react-icons/gi";
import { TbSaladFilled } from "react-icons/tb";
import { FaGlobe } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { MdBookOnline } from "react-icons/md";
import { BiSolidBowlHot } from "react-icons/bi";

let idService = 0;

const generateId = (suffix = "") => {
  idService++;
  return `${idService}${suffix}`;
};



export const SERVICE_LISTS =[

{
    id:generateId('se'),
    svIcon:<BiSolidBowlHot />,
    title: 'Delicious Food',
    description:'Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.',
   
},

{
    id:generateId('se'),
    svIcon:<MdBookOnline   />,
    title: 'Online Order',
    description:'Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.',
   
},

{
    id:generateId('se'),
    svIcon: <MdDeliveryDining />,
    title: 'Free Delivery',
    description:'Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.',
   
},

{
    id:generateId('se'),
    svIcon:<TbSaladFilled />,
    title: 'Always fresh ingredients',
    description:'Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.',
   
},

{
    id:generateId('se'),
    svIcon:<GiChefToque />,
    title: 'Experienced chefs',
    description:'Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.',
   
},


{
    id:generateId('se'),
    svIcon:<BiSolidFoodMenu />,
    title: 'Menu for every taste',
    description:'Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.',
   
},








]