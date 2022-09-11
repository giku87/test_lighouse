pipeline {
    agent any
    
    tools {nodejs "nodejs"}
    
    stages {
        
        stage('Init') {
            steps {
             sh """ rm -rf lhci_reports"""
             println ("ddd"+$BUILD_NUMBER)
            }
        }
        
        stage('Build') {
            steps {
             checkout scm
            }
        }
        
         stage('Install Lighouse') {
                steps {
                     sh """ export LHCI_BUILD_CONTEXT__CURRENT_BRANCH='*/lighthouse' """
                     sh """
                     git rev-parse --abbrev-ref HEAD
                      npm install -g @lhci/cli
                     """
                }
         }
        stage('Run Lighouse') {
            steps {
                 sh """
                  lhci autorun
                   """
            }
             
             
               post {
                always {
                  publishHTML (target: [
                    allowMissing: false,
                    alwaysLinkToLastBuild: false,
                    keepAll: true,
                    reportDir: '.',
                    reportFiles: '*.html',
                    reportName: "Lighthouse"
                  ])
                }
              }
             
             
        }
    }
    

    
}
