import { useForm } from "react-hook-form";
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Form() {
    const {register, handleSubmit, formState: {errors} } = useForm(); 

    const onSubmit = async (data) => {
        try {
            await signInWithEmailAndPassword(auth, data.email, data.password);
            
            console.log("Usuário autenticado com sucesso!");
        } catch (error) {
            console.error('Erro ao fazer login:', error.message);
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