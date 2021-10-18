import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { validateUserPermissions } from "../utils/validateUserPermissionts";

type UseCanParams = {
    permissions?: string[],
    roles?: string[] 
}

export function useCan ({ permissions = [], roles = [] }: UseCanParams) {
    const { user, isAuthenticated } = useContext(AuthContext);

    if(!isAuthenticated) {
        return false;
    }

    const userHasValidaPermissions = validateUserPermissions({
        user, permissions, roles
    });

    return userHasValidaPermissions;
}