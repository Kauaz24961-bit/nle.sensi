export default function Login() {
  return (
    <div className="container">
      <div className="card">

        <div className="logo">
          <img src="/logo.png" alt="nle sensi" />
        </div>

        <h1>nle sensi</h1>

        <form>
          <label>Login</label>
          <input type="text" placeholder="Digite seu usuário" />

          <label>Senha</label>
          <input type="password" placeholder="Digite sua senha" />

          <button type="submit">Entrar</button>
        </form>

      </div>
    </div>
  );
}
