import authApi from "../api/authApi";

const authUtils = {
    isAuthenticatesd: async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            return false;
        }
        try {

        } catch {

        }
    }
}
