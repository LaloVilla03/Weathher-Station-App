import Auth from "./auth";
import { supabase } from "./supabaseClient";
import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard"
import { SessionContext } from "./hooks/useSession";

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession()

      .then(({ data: { session } }) => {
        setSession(session);
      });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <>
      <SessionContext.Provider value={{ session, setSession }}>
        {
          !session
            ? <Auth />

            : <Dashboard />
        }
      </SessionContext.Provider>
    </>

  );
}
