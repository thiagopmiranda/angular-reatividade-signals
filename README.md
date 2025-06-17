📌 Angular Signals - Reatividade Moderna com Standalone e RxJS
Este projeto é uma demonstração prática dos novos conceitos de reatividade no Angular, utilizando:

✅ Angular Signals
✅ Standalone Components
✅ RxJS + HttpClient
✅ Lazy Loading de Componentes
✅ Http Interceptor Fake API (Mock)
✅ Control Flow Angular 17 (@if, @for)

🛠️ Tecnologias e Versão Angular
Angular 17.x

TypeScript

RxJS

Standalone APIs

Signals API

HttpClient

Angular Router com lazy-loading

📂 Estrutura do Projeto
/app.config.ts → Configuração de router, HttpClient e interceptor

/app.routes.ts → Rotas com lazy loading usando loadComponent

/todo/ → Exemplo de Signals + RxJS + HttpClient

/product/ → Exemplo de Signals locais + Update State

/cart/ → Componente simples standalone

🚀 Executando o projeto
bash
Copiar
Editar
npm install
ng serve
🧪 Testando a API Fake
O interceptor simula a API /api/todos com um pequeno delay.
A lista de todos é carregada via HttpClient + RxJS + Signals.

🎯 Conceitos demonstrados
State Management com Signals

Efeitos Reativos com effect()

Derivações Computadas com computed()

Lazy Loading com loadComponent()

Standalone Components sem módulos

Interceptação de requisições HTTP simulando backend

💡 Próximos Passos (opcional para expandir o projeto)
Criar testes unitários com Jasmine/Karma ou Jest

Adicionar backend real para persistência

Implementar Signals no Router e Forms

👨‍💻 Autor
Thiago Miranda