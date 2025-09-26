const PokemonCard = ({name,url}) => {
    const id = url.split('/')[6].padStart(3,'0');
    return(
        <div className="card">
            <a href={`https://www.pokemon.com/es/pokedex/${name}`}>
            <img className="card-img-top" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`} alt="Foto Pokemon" />
            <div className="card-body">
                <h4 className="card-title text-center">{name}</h4>
            </div>
            </a>
        </div>
        
    );
};
export default PokemonCard;