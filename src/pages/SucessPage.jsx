import sucessImage from "../assets/sucess.svg"

function SucessPage() {
    return (
        <div className="sucesso">
            <h1>Login realizado com sucesso!</h1>
            <div className="image">
                <img src={sucessImage} alt="sucess image" />
            </div>
        </div>
    )
}

export default SucessPage;