'use server'

import { redirect } from "next/navigation";
import Patients from "./(patients)/Patients"
import { cookies } from "next/headers";

async function Dashboard() {

  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  if(token) {
    return (
      <>
        <Patients />
      </>
    )
  }
  else {
    redirect('/')
  }

  
}

export default Dashboard