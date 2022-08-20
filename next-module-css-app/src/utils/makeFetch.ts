export default function makeFetch(url: string, body?, verb?: string) {
  let httpMethod;
  if (verb === undefined) {
    httpMethod = "GET";
  } else {
    httpMethod = verb.toUpperCase();
  }
  return async () => {
    return await fetch(url, {
      method: httpMethod, // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",

        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

      referrerPolicy: "no-referrer",
      body: body !== undefined ? JSON.stringify(body) : null,
      credentials: "include",
    })
      .then((r) => r.json())
      .catch((err) => console.error(err));
  };
}
export function makeFetchNoBody(url: string, verb?: string) {
  let httpMethod;
  if (verb === undefined) {
    httpMethod = "GET";
  } else {
    httpMethod = verb.toUpperCase();
  }
  return async () => {
    return await fetch(url, {
      method: httpMethod, // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",

        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

      referrerPolicy: "no-referrer",
      credentials: "include",
    })
      .then((r) => r.json())
      .catch((err) => console.error(err));
  };
}
export function makeFetchWithCookie(
  url: string,
  cookie: any,
  body?,
  verb?: string
) {
  let httpMethod;
  if (verb === undefined) {
    httpMethod = "GET";
  } else {
    httpMethod = verb.toUpperCase();
  }
  return async () => {
    return await fetch(url, {
      method: httpMethod, // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        Cookie: cookie,

        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

      referrerPolicy: "no-referrer",
      body: body !== undefined ? JSON.stringify(body) : null,
      credentials: "include",
    })
      .then((r) => r.json())
      .catch((err) => console.error(err));
  };
}

export function makeFetchNoUrl(body?, verb?: string) {
  let httpMethod;
  if (verb === undefined) {
    httpMethod = "GET";
  } else {
    httpMethod = verb.toUpperCase();
  }
  return async (url: string) => {
    return await fetch(url, {
      method: httpMethod, // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      referrerPolicy: "no-referrer",
      credentials: "include",
      body: body !== undefined ? JSON.stringify(body) : null,
    })
      .then((r) => r.json())
      .catch((err) => console.error(err));
  };
}
