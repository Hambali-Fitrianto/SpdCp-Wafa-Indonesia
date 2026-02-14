import api from "../api/axios";

/*
|--------------------------------------------------------------------------
| LOGIN
|--------------------------------------------------------------------------
*/
export const login = async (email, password) => {

    const response = await api.post("/login", {
        email,
        password,
    });

    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user));

    return response.data;
};

/*
|--------------------------------------------------------------------------
| LOGOUT
|--------------------------------------------------------------------------
*/
export const logout = async () => {
    await api.post("/logout");
    localStorage.clear();
};

/*
|--------------------------------------------------------------------------
| HELPERS
|--------------------------------------------------------------------------
*/
export const getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export const isAuthenticated = () => {
    return !!localStorage.getItem("token");
};