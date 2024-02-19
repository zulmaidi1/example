import { useSelector } from "react-redux"

export const validateMaintenance = (maintenance, feature) => {
    if(maintenance != null){
        return false;
    }else{
        return true;
    }
}