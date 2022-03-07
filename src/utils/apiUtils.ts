export const checkError = async (response: any) => {
  if (!(response.status >= 200 && response.status < 400)) {
    const { message } = await toJson(response);
    const error = new Error(message);
    throw error;
  }
  return response;
};

export const toJson = async (response: any) => {
  let resp = await response.text();
  return resp ? JSON.parse(resp) : {};
};

export const GET = async (url: string, headers = {}) => {
  return req(url, headers, null, "GET");
};

export const PATCH = async (url: string, headers = {}) => {
  return req(url, headers, null, "DELETE");
};

export const POST = async (url: string, body: any, headers = {}) => {
  return req(url, headers, body, "POST");
};

export const PUT = async (url: string, body = null, headers = {}) => {
  return req(url, headers, body, "PUT");
};

export const DELETE = async (url: string, body = null, headers = {}) => {
  return req(url, headers, body, "DELETE");
};

export const FORMDATAPUT = async (url: string, formData: any) => {
  return formDataReq(url, formData, "PUT");
};

export const FORMDATAPOST = async (url: string, formData: any) => {
  return formDataReq(url, formData, "POST");
};

const req = async (url: string, headers: any, body: any, method: string) => {
  return fetch(
    url,
    Object.assign(
      {
        method,
        headers: Object.assign(
          {},
          {
            "Content-Type": "application/json",
            ...headers,
          },
          {}
        ),
      },
      body ? { body: JSON.stringify(body) } : {}
    )
  );
};

const formDataReq = async (url: string, formData: any, method: string) => {
  return await fetch(url, {
    method,
    headers: {},
    body: formData,
  });
};
