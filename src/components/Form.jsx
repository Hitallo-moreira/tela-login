import { useForm } from "react-hook-form";
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/login.svg";

export default function Form() {
    const {register, handleSubmit, formState: {errors} } = useForm(); 
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            await signInWithEmailAndPassword(auth, data.email, data.password);
            navigate("/sucesso");
        } catch (error) {
            alert("Informações incorretas, revise e tente novamente");
        }
    };

    return (
        <div className="login">
            <div className="image">
                <img src={loginImage} />        
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-info">
                    <h2>Login</h2>        
                    <span>Por favor, insira suas informações</span>
                    <input type="text" {...register("email", { required: 'Campo obrigatório!' })} placeholder="Email" />
                    <p>{errors.email?.message}</p>

                    <input type="password" {...register("password", { required: 'Campo obrigatório!', minLength: {
                        value: 6,
                        message: "Insira o minimo de 6 caracteres" 
                    }})} placeholder="Senha" />
                    <p>{errors.password?.message}</p>

                    <input type="submit" className="btn-submit-form" value="Entrar" />
                </div>
            </form>
        </div>
    )
}