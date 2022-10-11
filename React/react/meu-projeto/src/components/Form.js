function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault() // não deixa att a página, permanece na pagina
        console.log("Cadastrou o usuário")
    }


    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form