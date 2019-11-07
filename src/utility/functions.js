import moment from "moment";

export const checkStatus = (val) => {
    if(val) {
         console.log("wicked", val.partName)
    } 
    else {
        let notFound = {}
        console.log("not found", notFound.partName) 
    }
  }

  export const _getTimeFromObjectID = (id) => {
    const corl = "5cf4494bfe8db444e91681bb"
    const timehex = id.slice(0,8);
    // convert to a number... base 16
    const secondsSinceEpoch = parseInt(timehex, 16);    
    // convert to milliseconds, and create a new date
const dt = moment(new Date(secondsSinceEpoch*1000)).format("D MMMM YYYY")
  return dt
}