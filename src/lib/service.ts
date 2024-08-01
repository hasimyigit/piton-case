import axios from "axios";

type ControllerPath = `categories` | `products`;

const combinePath = (controllerPath: ControllerPath, additionalPath: string = "") => {
  return `${process.env.NEXT_PUBLIC_BE_PATH}/${controllerPath}${additionalPath}`;
};

export const get = async <T>(controllerPath: ControllerPath, additionalPath: string = ""): Promise<T> => {
  try {
    const { data } = await axios.get<T>(combinePath(controllerPath, additionalPath));
    return data;
  } catch (err: unknown) {
    throw err;
  }
};
