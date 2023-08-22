import "./style/EstiloProfileCard.css"

function ProfileCard (props) {
    return (
        <div className="profileCard">
            <img src="../imagens/Perfil.jpg" alt="perfil" />
            <h3>{props.user}</h3>
            <div className="conteudo">
                <strong>cargo:</strong>
                <p>{props.cargo}</p>
                <strong>a receber:</strong>
                <p>{props.salario}</p>
            </div>
        </div>
    )
}

export default ProfileCard

