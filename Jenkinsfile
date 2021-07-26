pipeline {
    agent any
    stages {
        stage('Inicio'){
            steps{
                echo "Iniciando"
            } 
        }

        stage('Contruir imagen docker'){
                steps{
        		dir("/var/lib/jenkins/workspace/Frontend"){
                 		sh 'docker build -t frontend .'	
	         	}
                }             
        }
	stage('Subir imagen docker a hub'){
                steps{
        		dir("/var/lib/jenkins/workspace/Frontend"){
	         	}
                }             
        }
	stage('Correr imagen'){
                steps{
        		dir("/var/lib/jenkins/workspace/Frontend"){
				sh 'sudo docker run -p 80:8081  frontend'
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

