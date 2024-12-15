import chalk from "chalk";
import gradient from "gradient-string";

export const logger = {
  error(...args: unknown[]) {
    console.log(chalk.red(...args));
  },
  warn(...args: unknown[]) {
    console.log(chalk.yellow(...args));
  },
  info(...args: unknown[]) {
    console.log(chalk.cyan(...args));
  },
  success(...args: unknown[]) {
    console.log(chalk.green(...args));
  },
  break() {
    console.log("");
  },
};

const TEXT = `
░▒▓████████▓▒░ ░▒▓█▓▒░        ░▒▓███████▓▒░   ░▒▓██████▓▒░  ░▒▓███████▓▒░   ░▒▓██████▓▒░        ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░ 
░▒▓█▓▒░        ░▒▓█▓▒░        ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░       ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░ 
░▒▓█▓▒░        ░▒▓█▓▒░        ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░       ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░ 
░▒▓██████▓▒░   ░▒▓█▓▒░        ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓███████▓▒░  ░▒▓████████▓▒░       ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░ 
░▒▓█▓▒░        ░▒▓█▓▒░        ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░       ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░ 
░▒▓█▓▒░        ░▒▓█▓▒░        ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░       ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░ 
░▒▓████████▓▒░ ░▒▓████████▓▒░ ░▒▓███████▓▒░   ░▒▓██████▓▒░  ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░        ░▒▓██████▓▒░  ░▒▓█▓▒░                                                                                                                                                                                                                                                                                                      
`;

const LOGO = `                                                                                              
                                                    &&&&                                            
                                                   &&&&&                                            
                                      &&&           &&&&          &&&&                              
                                     &&&&&                       &&&&&&                             
                                      &&&&                        &&&&                              
                                                                                                    
                                                                                                    
                                           &&&&&&          &&&&&&                                   
                           &&&&&          &&&&&&&&        &&&&&&&&          &&&&                    
                           &&&&&          &&&&&&&&&      &&&&&&&&&          &&&&&                   
                            &&            &&&&&&&&        &&&&&&&&            &                     
                                           &&&&&           &&&&&                                    
                                                                                                    
                                                                                                    
                                                 &&&&&&&&&                                          
                                  &&&&&&&       &&&&&&&&&&&       &&&&&&&&                          
                       &&&&&     &&&&&&&&&      &&&&&&&&&&&&     &&&&&&&&&      &&&&&               
                       &&&&&     &&&&&&&&&     &&&&&&&&&&&&&     &&&&&&&&&      &&&&&               
                                  &&&&&&&       &&&&&&&&&&&       &&&&&&&         &                 
                                     &           &&&&&&&&&                                          
                                                                                                    
                                                                                                    
                                            &&&&            &&&&                                    
                            &&            &&&&&&&&        &&&&&&&&            &&                    
                           &&&&&          &&&&&&&&       &&&&&&&&&          &&&&&                   
                           &&&&           &&&&&&&&        &&&&&&&&          &&&&                    
                                           &&&&&&          &&&&&                                    
                                                                                                    
                                                                                                    
                                      &&&                         &&&&                              
                                     &&&&&                        &&&&&                             
                                      &&&           &&&&          &&&&                              
                                                   &&&&&                                            
                                                    &&&                                             
`;

const theme = {
  magenta: "#9E7AFF",
  red: "#FE8BBB",
  yellow: "#FFBD7A",
};

const printer = gradient(Object.values(theme));

export const ASCII_TEXT = printer.multiline(TEXT);
export const ASCII_LOGO = printer.multiline(LOGO);

export const message = `
EldoraUI - Component library made by Karthikmudunuri.
 → https://eldoraui.site
`;

export const ColorFullText = (string: string) => printer.multiline(string);
