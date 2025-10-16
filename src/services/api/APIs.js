import axiosClient from "@/lib/axiosClient";

export const login = async () => {
    const res = await axiosClient.get(process.env.NEXT_PUBLIC_API_AUTH);
    return res;
    console.log(res);
}