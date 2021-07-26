pipeline {
    agent any
    stages {
        stage('Inicio'){
            steps{
                echo "Iniciando"
            } 
        }

        stage('Levantar frontend'){
                steps{
        		dir("/var/lib/jenkins/workspace/frontend"){
                 		sh 'docker build -t forntend .'	
	         	}
                }             
        }
        stage('Fin'){
                steps{
                    echo "Terminado"
                } 
            }
        

        }
}

