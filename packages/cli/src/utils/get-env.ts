import Configstore from "configstore";

const envName = "ELDORAUI_PRO_ENV";
const config = new Configstore("eldoraui");

export const getEnv = () => config.get(envName) as string | undefined;
export const setEnv = (env: string) => config.set(envName, env);
export const clearAll = () => config.clear();

export const login = async (env: string) => {
  try {
    setEnv(env);
    return "Logged in ✅";
  } catch (error) {
    return;
  }
};
