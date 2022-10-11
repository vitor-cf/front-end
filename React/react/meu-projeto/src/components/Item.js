import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}) {
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
        
}
  
Item.propTypes = {
    marca: PropTypes.string.isRequired, 
    ano_lancamento: PropTypes.number, // Definindo um tipo, neste caso String 
} 

Item.defaultProps = {
    marca: "Faltou a marca",
    ano_lancamento: 0,
}

export default Item; 

// is required -> caso não passe nenhuma string ele alarma no console.