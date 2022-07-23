import React, {useEffect} from "react";

const Home = () => (
    const[lista, setLista] = useState([]);
    
    useEffect(()=>{
        var requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch("https://assets.breatheco.de/apis/fake/todos/user/profemacarena", requestOptions)
              .then(responde => responde.json())
              .then(result => setLista(result))
              .catch(error => console.log("error", error));
    },[])   //CARGA EL COMPONENTE
    function putApi(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify(lista);

    var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    fetch(
        "https://assets.breatheco.de/apis/fake/todos/user/profemacarena",
        requestOptions
    ) //VA MODIFICANDO LOS VALORES
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error)) => console.log("error", error)
    }
    return (
        <div className="text-center">
            <h1 className="text-center mt-5">Hello Rigo!</h1>
            <p>
                <img src={rigoImage} />
            </p>
            <button onClick={()=>{
                setLista([...lista,
                    "label": "tareas desde el front",
                    "done": false
            putApi();
            ])
            }}>add</button>
        
        {lista?.map((objeto,i)=>{
            if(objeto.done==false){
                return <li key={i}>{objeto.label}</li>
            } //MOSTRAR VERDADERO O FALSO (AGREGAR O ELIMINAR)
            
        })};
    )</div>
);