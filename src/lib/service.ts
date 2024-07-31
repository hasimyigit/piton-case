import axios from "axios";

type ControllerPath = `categories` | `products`;



const combinePath = (controllerPath: ControllerPath) => {
  return process.env.BE_PATH + "/" + controllerPath;
};

export const get = async <T>(controllerPath: ControllerPath): Promise<T> => {
  try {
    return await axios.get<T, any>(combinePath(controllerPath));
  } catch (err: unknown) {
    throw err;
  }
};


