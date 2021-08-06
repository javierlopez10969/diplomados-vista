pipeline {
    agent any
    stages {
        stage('Inicio'){
            steps{
                echo "Iniciando"
            } 
        }
	stage('Parar la imagen anterior'){
		
                steps{
		
			dir("/var/lib/jenkins/workspace/Frontend"){
				sh 'docker stop frontend || true && docker rm frontend || true'	
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
	stage('Correr imagen'){
                steps{
        		dir("/var/lib/jenkins/workspace/Frontend"){
				sh 'docker run --rm --name frontend -d -p 8081:5000 frontend'
	         	}
                }             
        }
	stage('Subir imagen docker a hub'){
                steps{
			sh 'docker tag frontend ducktales10969/frontend:latest'	
			sh 'docker login -u ducktales10969 -p chupalo123'	
			sh 'docker push ducktales10969/frontend:latest'
                }             
        }
        stage('Fin'){
                steps{
                    echo "Terminado"
                } 
            }
        

        }
}
