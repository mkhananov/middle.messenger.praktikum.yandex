enum METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE"
}

type RequestProps = (
  url: string,
  options: {
    [key: string]: any;
  }
) => void;

function queryStringify(data: object) {
  return (
    "?" +
    Object.entries(data)
      .reduce((acc, [key, value]) => [...acc, `${key}=${value}`], [])
      .join("&")
  );
}
class HTTPTransport {
  get: RequestProps = (url, options) => {
    const query = queryStringify(options.data);
    return this.request(
      url,
      { ...options, data: query, method: METHODS.GET },
      options.timeout
    );
  };

  post: RequestProps = (url, options) => {
    const query = queryStringify(options.data);
    return this.request(
      url,
      { ...options, data: query, method: METHODS.POST },
      options.timeout
    );
  };

  put: RequestProps = (url, options) => {
    const query = queryStringify(options.data);
    return this.request(
      url,
      { ...options, data: query, method: METHODS.POST },
      options.timeout
    );
  };

  delete: RequestProps = (url, options) => {
    const query = queryStringify(options.data);
    return this.request(
      url,
      { ...options, data: query, method: METHODS.POST },
      options.timeout
    );
  };

  request = (
    url: string,
    options: { [key: string]: string },
    timeout = 5000
  ) => {
    const { method, data, headers } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url + data);

      xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
      if (headers) {
        xhr.setRequestHeader(headers, "");
      }

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr);
        } else {
          reject;
        }
      };
      xhr.onabort = reject;
      xhr.onerror = reject;
      if (timeout) {
        // @ts-ignore
        xhr.ontimeout = setTimeout(() => {
          reject;
        }, timeout);
      }

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
