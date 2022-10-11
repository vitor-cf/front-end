import Item from './Item'

function List() {
    return (
        <>   {/* fragment */}
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca="Fiat" ano_lancamento={1964}/>
                <Item marca="Volvo" ano_lancamento={1988}/>
                <Item marca="BMW" ano_lancamento={2001}/>
                <Item />

            </ul>
        </>
    )
}

export default List