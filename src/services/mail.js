const API_URL = import.meta.env.VITE_API_URL ?? "https://saas.svdnafenatran.com.br/";

async function parseResponse(response) {
  if (response.ok) {
    return response.json().catch(() => ({}));
  }

  const errorBody = await response.json().catch(() => null);
  const parsedMessage = Array.isArray(errorBody?.message)
    ? errorBody.message.join(", ")
    : errorBody?.message;
  const message =
    typeof parsedMessage === "string"
      ? parsedMessage
      : "Não foi possível enviar o formulário. Tente novamente.";

  throw new Error(message);
}

export async function sendSupplierForm(payload) {
  const response = await fetch(`${API_URL}/mail/supplier`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  return parseResponse(response);
}

export async function sendCareerForm(payload, curriculo) {
  const body = new FormData();

  Object.entries(payload).forEach(([key, value]) => {
    if (value) {
      body.append(key, value);
    }
  });

  if (curriculo) {
    body.append("curriculo", curriculo);
  }

  const response = await fetch(`${API_URL}/mail/career`, {
    method: "POST",
    body
  });

  return parseResponse(response);
}
