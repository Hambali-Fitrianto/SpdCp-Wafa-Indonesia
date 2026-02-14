import api from "../api/axios";

/*
|--------------------------------------------------------------------------
| GET ALL LOGS
|--------------------------------------------------------------------------
*/
export const getActivityLogs = async () => {
    const res = await api.get("/activity-logs");

    if (Array.isArray(res.data)) return res.data;
    if (Array.isArray(res.data.data)) return res.data.data;

    return [];
};

/*
|--------------------------------------------------------------------------
| GET DETAIL
|--------------------------------------------------------------------------
*/
export const getActivityLog = async (id) => {
    const res = await api.get(`/activity-logs/${id}`);
    return res.data;
};