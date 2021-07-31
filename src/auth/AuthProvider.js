import { createContext, useState, useEffect } from "react";
import clienteAxios from "../config/axios";

import Swal from "sweetalert2";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("dataUser")) || null
  );
  console.log(!!user);
  // console.log(user);

  // Cada que se actualice el estado se va a guardar en el storage
  useEffect(() => {
    try {
      // if(user != null){
      // const {id_usuario, nombre_usu, apellido_usu, tipo_usu} = user;
      // //nuevo objeto con ciertos datos del usuario
      // const newUser = {
      //     id: id_usuario,
      //     nombres: nombre_usu+' '+apellido_usu,
      //     tipo: tipo_usu,
      // }
      // Ese nuevo objeto lo mandamos al storage
      localStorage.setItem("dataUser", JSON.stringify(user));
      // }
    } catch (error) {
      localStorage.removeItem("dataUser");
      console.log(error);
    }
  }, [user]);

  //objeto con informacion del usuario
  const contextValue = {
    user,
    async login(correoUsuario, contraseniaUsuario) {
      // console.log(userExist);
      //Consultar con axios si las credenciales son correctas
      let ruta = "";
      await clienteAxios
        .post("/userAuth", {
          correo_usu: correoUsuario,
          contrasenia_usu: contraseniaUsuario,
        })
        .then((respuesta) => {
          // console.log(!respuesta.data.msg);
          if (!respuesta.data.msg) {
            let timerInterval;
            Swal.fire({
              title: "Iniciando Sesión...",
              timer: 2000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading();
                timerInterval = setInterval(() => {
                  const content = Swal.getHtmlContainer();
                  if (content) {
                    const b = content.querySelector("b");
                    if (b) {
                      b.textContent = Swal.getTimerLeft();
                    }
                  }
                }, 100);
              },
              willClose: () => {
                clearInterval(timerInterval);
              },
            }).then((result) => {
              /* Read more about handling dismissals below */
              if (result.dismiss === Swal.DismissReason.timer) {            
                setUser(respuesta.data);
            }
        });
        ruta = "/catalogo";
            
          } else {
            // console.log('Usuario o Contraseña Incorrectos');

            Swal.fire({
              icon: "error",
              title: "Usuario o Contraseña Incorrectos",
              showCloseButton: true,
              confirmButtonColor: "#fc5c1b",
            });
            // ruta = '/loguin'
          }

          // Guardar en el state el resultado
          // console.log(respuesta.data);
        })
        .catch((error) => {
          console.log(error);
        });

      return ruta;
    },
    logout() {
      setUser(null);
      localStorage.removeItem("dataUser");
      // history.push("/loguin");
    },
    isLogged() {
      return !!user;
    },
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
