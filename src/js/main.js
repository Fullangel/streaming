//funcion para el registro de usuarios 
function crear(e){
    event.preventDefault();
// el console.log comentado se puede descomentar para comprobar que la funcion este trabajando correctamente
    //console.log('working register');

    // se crean variables de los inputs del html para que luego sea almacenado
    let email = document.getElementById('email').value;
    let username = document.getElementById('username').value;
    let pass = document.getElementById('password').value;

    let user = {
        email: email,
        username: username,
        password: pass,
    };

    // se fuerza a ser guardado en strings la información y no como objects
    // una vez guardado, en consola se da el aviso de que el usuario fue añadido
    let json = JSON.stringify(user);
    localStorage.setItem(username, json);
    console.log('user added');
}

//funcion para el inicio de sesion
function entrar(e){
    event.preventDefault();
// el console.log comentado se puede descomentar para comprobar que la funcion este trabajando correctamente
    //console.log('working log');


    //se crea variables de los inputs del html para verificar información con los datos almacenados
    let username = document.getElementById('username').value;
    let pass = document.getElementById('password').value;

    //se crea variable para llamar los datos almacenados
    let user = localStorage.getItem(username);
    let data = JSON.parse(user);
    console.log(data);

    //se realiza validación de la información suministrada con la almacenada, al estar correcta se redirecciona a la pagina home
    if(user == null){
        let avisoU = "Error usuario";
        alert('result').innerHTML = avisoU;
    }else if(username == data.username && pass == data.password){
        window.location= "home.html"; //codigo para redireccionar a la pagina home
    }else{
        let avisoC = "Error contraseña";
        alert('result').innerHTML = avisoC;
    }
}