import read from 'readline-sync';
import "colors";

export function pare(){
        console.log();
        const ordem = Number(read.question("Pressione a tecla <enter> para continuar... ou 9 + <enter> para parar: ")).toFixed(0);
        if(ordem==9){
            console.log('End-of-Job'.green);
            process.exit();
        } 
        console.clear();
}

export function ok() {
        console.log("ok");
}
    
export function pula() {
        console.log("");
}