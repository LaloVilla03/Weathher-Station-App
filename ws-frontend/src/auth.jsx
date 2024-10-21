import { useState } from "react";
import { supabase } from "./supabaseClient";
import { LoadingIcon } from "./components/icons";

function Auth() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault(); //al dar clic al boton no buscar pagina nueva

        setLoading(true);

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            alert(error.error_description || error.message);
        }
        //else alert("Redireccionando...");

        setLoading(false);
    };

    return (

        <div className="h-screen ">
            <div className="flex flex-col justify-center items-center h-full bg-red-200 " >
                <h1 className="text2xl font-bold">
                    Weather Station Telem&aacute;tica
                </h1>
                <h1 className="text-x1 font-bold py-10">
                    Inicio de Sesi&oacute;n
                </h1>


                <form onSubmit={handleLogin}>

                    <div className="flex flex-col justify-center space-y-2">
                        <label htmlFor="email" className="font-bold">
                            Correo electr&oacute;nico:
                        </label>
                        <input
                            className="border border-black px-4 py-2 rounded-lg"
                            type="email"
                            placeholder="Correo electr&oacute;nico"
                            value={email}
                            required={true}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label htmlFor="password" className="font-bold ">
                            Contrase&ntilde;a:
                        </label>
                        <input
                            className="border border-black px-4 py-2 rounded-lg "
                            type="password"
                            placeholder="Contrase&ntilde;a"
                            value={password}
                            required={true}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button
                            disabled={loading}
                            className="justify-center inline-flex bg-blue-800 text-white font-bold rounded-lg space-x-2 px-4 py-2"
                        >
                            {loading
                                ?
                                <>
                                    <LoadingIcon />
                                </>
                                :
                                <span>Iniciar Sesi&oacute;n</span>
                            }
                        </button>
                    </div>
                </form>

            </div >
        </div >

    );
}


export default Auth;