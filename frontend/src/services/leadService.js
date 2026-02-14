import api from "../api/axios";

/*
|--------------------------------------------------------------------------
| GET ALL LEADS
|--------------------------------------------------------------------------
| Normalize Laravel response → always return array
*/
export const getLeads = async () => {
    const res = await api.get("/leads");

    // Laravel pagination / resource format safe
    if (Array.isArray(res.data)) {
        return res.data;
    }

    if (Array.isArray(res.data.data)) {
        return res.data.data;
    }

    return [];
};

/*
|--------------------------------------------------------------------------
| CREATE
|--------------------------------------------------------------------------
*/
export const createLead = async (data) => {
    const res = await api.post("/leads", data);
    return res.data;
};

/*
|--------------------------------------------------------------------------
| UPDATE
|--------------------------------------------------------------------------
*/
export const updateLead = async (id, data) => {
    const res = await api.put(`/leads/${id}`, data);
    return res.data;
};

/*
|--------------------------------------------------------------------------
| DELETE
|--------------------------------------------------------------------------
*/
export const deleteLead = async (id) => {
    await api.delete(`/leads/${id}`);
};