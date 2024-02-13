import { useForm } from "react-hook-form";
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

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
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-info">
                <h2>Faça seu Login</h2>        
                <input type="text" {...register("email", { required: 'Campo obrigatório!' })} placeholder="Nome de usuário" />
                <p>{errors.firstName?.message}</p>

                <input type="password" {...register("password", { required: 'Campo obrigatório!', minLength: {
                    value: 6,
                    message: "Insira o minimo de 6 caracteres" 
                }})} placeholder="Senha" />
                <p>{errors.password?.message}</p>

                <input type="submit" className="btn-submit-form" value="Entrar" />
            </div>
        </form> 
    )
}