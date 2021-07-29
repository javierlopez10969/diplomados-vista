pipeline {
    agent any
    stages {
        stage('Inicio'){
            steps{
                echo "Iniciando"
            } 
        }
	stage('stop imagen docker if exist'){
		
                steps{
			try{
				dir("/var/lib/jenkins/workspace/Frontend"){
                 			sh 'docker build -t frontend .'	
			    	}
			}catch (Exception e) {
			    echo 'Something failed, I should sound the klaxons!'
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

