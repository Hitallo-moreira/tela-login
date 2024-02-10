import { useForm } from "react-hook-form";

export default function Form() {
    const {register, handleSubmit, formState: {errors} } = useForm(); 

    console.log(errors);

    return (
        <>
            <form onSubmit={handleSubmit((data) => {
                console.log(data)
            })}>
                <div className="form-info">
                    <h2>Faça seu Login</h2>        
                    <input type="text" {...register("firstName", { required: 'Campo obrigatório!' })} placeholder="Nome de usuário" />
                    <p>{errors.firstName?.message}</p>

                    <input type="password" {...register("password", { required: 'Campo obrigatório!', minLength: {
                        value: 6,
                        message: "Insira o minimo de 6 caracteres" 
                    }})} placeholder="Senha" />
                    <p>{errors.password?.message}</p>

                    <input type="submit" className="btn-submit-form" />
                </div>
            </form> 
        </>
    )
}