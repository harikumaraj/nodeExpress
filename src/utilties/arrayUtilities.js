import {ROLES} from "../constants"

export const ValidateRoleBeforeSaving = (roles) => {
    roles.forEach((role) => {
        if (role === "ROLE_SUPER_ADMIN") {
            return false;
        }
        if (ROLES.includes(role)) {
            return 
        }
    });
}