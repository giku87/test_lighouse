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
                
              //  println scm.branches[0].name
     sh """ export LHCI_BUILD_CONTEXT__CURRENT_BRANCH='*/lighthouse' """
     sh """
     env
     git rev-parse --abbrev-ref HEAD
      npm install -g @lhci/cli
       lhci autorun
     """
            
            }
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
