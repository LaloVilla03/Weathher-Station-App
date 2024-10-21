
//supabase
const { createClient } = require('@supabase/supabase-js');
require("dotenv").config(); //agarrar claves de un archivo que no subiremos al repositorio en caso de subir este
const supabaseUrl = process.env.SbUrl; // los toma por defecto como string
const supabaseKey = process.env.SbKey;
const supabase = createClient(supabaseUrl, supabaseKey)

// broker
const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://broker.hivemq.com:1883");

//conectarse al topico del broker
client.on("connect", () => {
    client.subscribe("ucol/weather-station/villa", (err) => {
        if (!err) {
            console.log("Hello mqtt");
        } else {
            console.log("error");
        }
    });
});

//  guardar el mensaje e insertar datos
client.on("message", (topic, message) => {
    // message is Buffer
    message.toString();
    let mssg = JSON.parse(message);
    console.log(mssg)

    //insertar datos a la base de datos
    async function insert() {
        const { error } = await supabase
            .from('measurements')
            .insert({ station_id: mssg.station_id, latitude: mssg.latitude, longitude: mssg.longitude, temperature: mssg.temperature, humidity: mssg.humidity })
        if (error)
            console.log(error);
    }
    insert();
});


// autenticarme con la base de datos
async function auth() {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: process.env.SbEmail,
        password: process.env.SbPass,
    })
    if (error)
        console.log(error);
}



async function logOut() {
    await supabase.auth.signOut();
}

// autenticarme, insertar y cerrar sesion
auth();

logOut();