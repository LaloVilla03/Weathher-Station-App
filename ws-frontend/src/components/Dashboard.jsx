
import { supabase } from "../supabaseClient";
import { useSessionContext } from "../hooks/useSession";
import { useState } from "react";
import Table from "./Table";
import Forecasting from "./Forecasting";

export default function Dashboard() {

    const [section, setSection] = useState("Dashboard");
    const { session } = useSessionContext();

    return (
        <>
            <div className="bg-slate-900 w-full text-white">
                <div className=" flex justify-between px-5">

                    {/*left section*/}
                    <div className="inline-flex space-x-4 items-center">

                        <h3 className="text-2xl font-bold ">Telematica Weather Sation</h3>

                        <p
                            onClick={() => setSection("Dashboard")}
                            className="cursor-pointer"
                        >
                            Dashboard
                        </p>

                        <p
                            onClick={() => setSection("Forecasting")}
                            className="cursor-pointer"
                        >
                            Forecasting
                        </p>

                    </div>

                    {/* Righ Section */}
                    <div className="py-4 inline-flex space-x-4" >
                        <p className="p-4 text-white">
                            {session.user.email}
                        </p>
                        <button
                            className="p-4 rounded-full bg-red-400 font-bold text-black cursor-pointer "
                            onClick={() => supabase.auth.signOut()}>
                            Cerrar sesi&oacute;n
                        </button>
                    </div>
                </div>
            </div >

            {/* Title */}
            <div className="w-full" >
                <div className="px-5 py-4 border-b border-black">

                    <div className="">

                        <h1 className="text-4xl font-bold">{section}</h1>

                    </div>

                </div>
            </div >

            <div className="px-5 py-8">

                {section === "Dashboard" && <Table />}

                {section === "Forecasting" && <Forecasting />}

            </div>
        </>
    );
}
