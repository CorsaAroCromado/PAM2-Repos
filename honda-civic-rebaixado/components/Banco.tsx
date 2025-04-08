import react from 'react';
import {View, Button} from 'react-native';
import * as SQLite from 'expo-sqlite';
//compose

const Banco=()=>{
    let nome:String;
    async function CriaBanco() {
        const db = await SQLite.openDatabaseAsync('Celta_preto');
        if(db){
            console.log('banco criado');
        }else{
            console.log('não foi possivel criar o banco');
        }
    }
    return(
        <View>
        <View>
            <Button 
            title="Criar Banco"
            onPress={()=>CriaBanco()}
             />
             </View>

             <View style={{marginTop: 10}}>
              <Button 
            title="Criar Tabela"
            onPress={()=>CriaTabela()}
             />   
             </View>
        </View>
            
        
    )

    async function CriaTabela() {
        const db = await SQLite.openDatabaseAsync('Celta_preto');
        try{
            console.log('tabela criada');
            // Execute SQL commands to create a table and insert data
            await db.execAsync(`
                PRAGMA journal_mode = WAL;
                CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL, intValue INTEGER);
                `);
            console.log('Tabela criada e dados inseridos com sucesso!');
        }catch (error) {
            console.error('Error creating table:', error);
          
        }

    
        
    }
};

export default Banco;