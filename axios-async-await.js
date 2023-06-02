/**
 * Estos ejemplos aplican tanto para usar axios en una pagina de forma normal
 * o usar axios en Nodejs, vuejs, react ... Solo se tendria que llamar ya sea por CDN o instalar
 * el paquete de axios e incluirlo para usarlo.
 */

let url_api = "https://famous-quotes4.p.rapidapi.com/random";
axios
  .get(url_api)
  .then((response) => {
    // Handle response
    console.log(response.data);
  })
  .catch((err) => {
    // Handle errors
    console.error(err);
  });

/**
 *
 */

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((resp) => {
    console.log(resp.data);
  })
  .catch((err) => {
    // Handle Error Here
    console.error(err);
  });

/**
 * Usando Async/Await con axios
 */
async function getUser() {
  try {
    const response = await axios.get("/user?ID=12345");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

/**
 * Este metodo es mas moderno, usando la funcion de flecha
 */
const getData = async () => {
  try {
    const res = await axios.get(url_api);
    console.log(res);
    console.log(res.data);

    if (!res.status) {
      console.log(`HTTP error! status: ${res.status} 😭`);
    }

    if (response.status === 200) {
      console.log("Todo salio OK");
    }
  } catch (error) {
    console.error(error);
  }
};

const sendDeleteRequest = async () => {
  try {
    const resp = await axios.delete(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    console.log(resp.data);
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

async function getUserData() {
  try {
    const response = await axios.get("/user?ID=12345");
    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("peticion finalizada");
  }
}

//Usando async/await con Axios
let URL = "https://fakestoreapi.com/users";
async function obtenerUsersConAxios() {
  try {
    const response = await axios.get(URL);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("peticion finalizada OK");
  }
}
