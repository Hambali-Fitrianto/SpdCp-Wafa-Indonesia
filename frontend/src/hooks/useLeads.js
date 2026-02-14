import { useQuery } from "@tanstack/react-query";
import { getLeads } from "../services/leadService";

export const useLeads = () => {
    return useQuery({
        queryKey: ["leads"],
        queryFn: getLeads,
        staleTime: 1000 * 60 * 5,
    });
};