// Configuração para formulário estático
// Este arquivo substitui as APIs quando em modo export estático

// Para formulários em sites estáticos, você pode usar:
// 1. EmailJS (já configurado no projeto)
// 2. Formspree (alternativa)
// 3. Netlify Forms (se hospedar na Netlify)

export const FORM_CONFIG = {
  // EmailJS já está configurado - usar apenas ele
  useEmailJS: true,
  
  // Alternativa com Formspree (se preferir)
  formspreeEndpoint: null, // "https://formspree.io/f/YOUR_FORM_ID"
  
  // Para analytics simples, pode usar localStorage
  saveToLocalStorage: true,
};

// Função para enviar dados em modo estático
export const submitStaticForm = async (formData) => {
  // O EmailJS será usado diretamente no frontend
  // Dados serão enviados apenas por email, sem banco de dados
  console.log("Modo estático: usando apenas EmailJS");
  return { success: true, message: "Formulário será enviado via EmailJS" };
};
