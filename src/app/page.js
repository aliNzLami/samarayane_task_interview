'use client'
import { login } from "@/services/api/APIs";
import { useEffect, useState } from "react";

export default function Home() {

    const [isLogged, setIsLogged] = useState(null);

    const authenticate = () => {
      if(isLogged === false) {

      }
      else if(isLogged === true) {

      }
    }

    useEffect(() => {
      authenticate()
    }, [])
    
    return (
      <>
        {
          isLogged === null
          ?
            <div>LOADING</div>
          :
            "NOTHING"
        }
      </>
    );
}
