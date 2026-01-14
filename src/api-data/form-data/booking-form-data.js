let IdFormInput = 0;

const getIdInput = (suffix = "") => {
  IdFormInput++;
  return `${IdFormInput}-${suffix}`;
};

export const BoookingInputData =[

    {
    id:getIdInput("form"),
    Inputname: "Your Name",
    label: "Your Name",
    type: "text",
    errorText: "Username is required",
  },
  {
    id:getIdInput("form"),
    Inputname: "number",
    label: "Phone Number",
    type: "number",
    errorText: "Phone Number is required",
  },
 
  {
    id:getIdInput("form"),
    Inputname: "Time",
    label: "Time",
    type: "Time",
    errorText: "Time is required",
  },
 {
    id:getIdInput("form"),
    Inputname: "Date",
    label: "Date",
    type: "date",
    errorText: "Date is required",
  },
  {
    id:getIdInput("form"),
    Inputname: "members",
    label: "Adults",
    type: "select",
    errorText: "Number of Members is required",
    options: [...Array(10).keys()].map((value) => ({
      value: value + 1,
      label: value + 1,
    })),
  },
  {
    id:getIdInput("form"),
    Inputname: "children",
    label: "Number of Children",
    type: "select",
    errorText: "Number of Children is required",
    options: [...Array(10).keys()].map((value) => ({ value, label: value })),
  },

  {
    id:getIdInput("form"),
    Inputname: "message",
    label: "Enter Message",
    type: "textarea",
    errorText: "Message is required",
  },


]