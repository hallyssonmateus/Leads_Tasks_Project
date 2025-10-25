# 🚀 Gerenciador de Leads e Tarefas (Frontend)

Uma aplicação web simples e moderna desenvolvida com **React**, **TypeScript** e **Tailwind CSS** para gerenciar **Leads** e suas **Tarefas associadas**.  
Este projeto foca em **código limpo**, **organização da interface** e **integração com uma API backend em .NET 8**.

---

## 🧱 Visão Geral do Projeto

O objetivo deste projeto é fornecer uma interface simples e responsiva para gerenciar **leads de negócios** e acompanhar as **tarefas** relacionadas a cada lead.

O usuário pode:
- Visualizar, criar, editar e excluir **Leads**
- Filtrar e buscar Leads por **status**, **nome** ou **e-mail**
- Visualizar, criar, editar e excluir **Tarefas** de cada Lead
- Validar campos de formulário e receber mensagens de sucesso/erro

---

## 🎨 Layout
Abaixo estão as tela das principais páginas da aplicação:
 

| **Página de Leads - Principal**  
![Leads Page](../Leads_Tasks_Project/frontend/src/assets/Img_LeadsPage.PNG)


## 🖥️ Tecnologias Utilizadas

| Camada | Tecnologia |
|--------|-------------|
| Framework Frontend | [React 18+](https://react.dev/) |
| Linguagem | [TypeScript](https://www.typescriptlang.org/) |
| Estilização | [Tailwind CSS](https://tailwindcss.com/) |
| Roteamento | [React Router](https://reactrouter.com/) |
| Gerenciamento de Estado | React Hooks / Context |
| Validação de Formulários | Validação customizada (com mensagens de sucesso/erro claras) |

---

## ⚙️ Funcionalidades

### 🧩 Leads
- Criar / Editar / Excluir / Listar Leads  
- Filtrar por Status: **New**, **Qualified**, **Won**, **Lost**  
- Buscar Leads por nome ou e-mail  
- Validação:  
  - Nome deve ter **3 caracteres ou mais**  
  - E-mail deve ter formato válido  

### 📝 Tarefas
- Cada Lead pode ter várias Tarefas  
- Operações CRUD completas (Criar, Ler, Atualizar, Excluir)  
- Campos: **Título**, **Data de Vencimento**, **Status** (Todo, Doing, Done)  

### ✅ Validação e Feedback
- Validação de formulários com mensagens de erro claras  
- Mensagens de sucesso e erro usando toast ou modal  

### 📱 Design Responsivo
- Layout totalmente responsivo para **desktop, tablet e celular**  
- Construído inteiramente com **Tailwind CSS**

---

## 🗂️ Clonar o repositorio
Clone o repositorio na pasta que preferir do seu computador com o seguinte comando no seu terminal:
```bash
git clone https://github.com/hallyssonmateus/Leads_Tasks_Project
cd Leads_Tasks_Project
```
### Após clonar
- Abra o projeto na sua IDE(caso for Visual Studio Code)
- Vá em terminal -> New Terminal
```bash
cd frontend
npm install
npm run dev
```

## 🧠 Modelos de Dados
```typescript
export interface Lead {
  id: number;
  name: string;
  email: string;
  status: 'New' | 'Qualified' | 'Won' | 'Lost';
  tasks?: Task[];
}

export interface Task {
  id: number;
  title: string;
  dueDate: string;
  status: 'Todo' | 'Doing' | 'Done';
  leadId?: number;
}