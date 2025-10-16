import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function Home() {

    let isLogged = null;
    const cookieStore = await cookies();
    
    isLogged = cookieStore.get('token')?.value;

    if(isLogged) {
      redirect('/dashboard')
    }

    return (
      <>
        LOGIN
      </>
    );
}
