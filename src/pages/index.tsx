import { Layout } from "@/components";

export default function Home() {
  return (
    <Layout>
      <h1>Multi-language challenge</h1>
      <p>
        Esse será um site multi-idiomas para um desafio da Onesight. Terá três
        páginas:
      </p>
      <ul>
        <li>Home</li>
        <li>Sobre nós</li>
        <li>Receitas -{`>`} uma receita</li>
      </ul>
    </Layout>
  );
}