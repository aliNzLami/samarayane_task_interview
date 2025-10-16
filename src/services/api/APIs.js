'use server'
import axiosClient from "@/lib/axiosClient";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const login = async () => {
    const res = await axiosClient.get(process.env.NEXT_PUBLIC_API_AUTH);
    if(res.data.result.credential) {
        const cookieStore = await cookies();
        cookieStore.set('token', res.data.result.credential);
        redirect('/dashboard');
    }
    return res;
}