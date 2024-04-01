export const appListingObj = {
    date: "date",
    ownerName: "ownerName",
    projectName: "projectName", 
    projectEmail: "projectEmail", 
    projectDisc: "projectDisc", 
  };
  const {ownerName, projectName, projectEmail,projectDisc,date } = appListingObj
  
  export const appListingObjDefault = {
    [ownerName]: "",
    [projectName]: "",
    [projectEmail]: "",
    [projectDisc]: "",
    [date]: null,
  }