import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectarDB from "./config/db.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import productoRoutes from "./routes/productoRoutes.js";
import ventaRoutes from "./routes/ventaRoutes.js";
dotenv.config();

const PORT = process.env.PORT|| 4000;
//se le agrega toda la funcionalidad del servidor de express
const app = express();
app.use(express.json());

conectarDB();

//Middlewares
// se utiliza para realizar la comunicacion entre el servidor del frontend y el backend
//reg:informacion que nos llega
//res:respuesta nuestra
const dominiosPermitidos=[process.env.FRONTEND_URL];
const corsOptions ={
    origin:function (origin,callback){
        if(dominiosPermitidos.indexOf(origin)!==-1){
            //El origen del Request esta permitido
            callback(null, true);
        }else{
        
            callback(new Error("No permitido por CORS"));
        }
    }
};
app.use(cors(corsOptions));

//Gestion modelo de Usuario
app.use("/api/usuarios",usuarioRoutes);

//Gestion Modelo de productos
app.use("/api/productos",productoRoutes);
// gestion modelo de ventas
app.use("/api/ventas",ventaRoutes);
app.listen(PORT,()=>{
    console.log(`Servidor funcionando en el puerto ${PORT} `);
})