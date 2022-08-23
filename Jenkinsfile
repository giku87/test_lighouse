pipeline {
    agent any

     tools {nodejs "nodejs"}
    stages {
        stage('Build') {
            steps {
             checkout scm
            }
        }
        
         stage('install') {
            steps {
     sh """
     npm ci
     npm install -g @lhci/cli
     """
            
            
            }
        }
        
        
    }
}
