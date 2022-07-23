import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
    const [lista, setLista] = useState([]);

        const [input, setInput] = useState("");

       useEffect(() => {
       getFromApi();

    }, []);

    //Para agregar tareas al TO DO list
    function getFromApi () {
        var requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch(
            "https://assets.breatheco.de/apis/fake/todos/user/kevinLizath",
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => setLista(result))
            .catch((error) => console.log("error", error));
    }
    
    function putFromApi() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(lista);

        var requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(
            "https://assets.breatheco.de/apis/fake/todos/user/kevinLizath",
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));
    }

    return (
        <div className="text-center">
            <div className="header"></div>
            <h1>Lista de Tareas🌸 ✏️</h1>
            <div>
                <input type={"text"} onChange={(evento) => {
                    setInput(evento.target.value);
                }}/>
            <button onClick={() => {
                setLista([...lista, {
                    "label": input,
                    "done": false
                }]); putFromApi();
                
                }}>Agregar Tarea</button>
      {lista?.map((valor, indice) => {
        if(valor.done == false){
            return (<>
                <div> 
                <li key={indice}>{valor.label}</li>
                <button>✅</button>
                <button onClick={()=>{
                   let aux = lista; 
                   aux[indice].done = true;
                setLista(aux);
                putFromApi();
                getFromApi();}}>❎</button>
               </div>
               
                </>
            );}
        })
    }
</div>
            
  

   


    </div>
  );
};

/*  const eliminarTarea = (valor.done) => {
        const listaAct = lista.filter(lista => valor.done !== false)
        setLista(listaAct);}; */ 
    

export default Home;
