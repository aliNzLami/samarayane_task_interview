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

export const logout = async () => {
    const cookieStore = await cookies();
    cookieStore.delete('token');
    redirect('/');
}

const prepareToken = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

export const get_patients = async () => {
    const token = await prepareToken();
    const res = await axiosClient.get(process.env.NEXT_PUBLIC_API_PATIENT, token);
    return res.data.result;
}

export const delete_patients = async (id) => {
    const token = await prepareToken();
    const res = await axiosClient.delete(`${process.env.NEXT_PUBLIC_API_PATIENT}/${id}`, token);
    return res.data;
}