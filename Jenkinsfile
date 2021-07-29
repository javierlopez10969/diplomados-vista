pipeline {
    agent any
    stages {
        stage('Inicio'){
            steps{
                echo "Iniciando"
            } 
        }
	stage('Detener imagen anterior'){
                steps{
        		dir("/var/lib/jenkins/workspace/Frontend"){
				try {
					sh 'docker stop frontend'
				    } catch (err) {
					echo "No se encuentra levantado un contenedor llamado frontend${err}"
				    }
                 			
	         	}
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
				sh 'docker run --name frontend -d -p 8081:5000 frontend'
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

