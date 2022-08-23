node('any') {
  stage('Echo') {
    echo 'FOO2'
  }
  stage('Buildtools checkout') {
    dir ('jenkins-jobs') {
      git changelog: false, poll: false, url: 'git@github.com:giku87/test_lighouse.git'
    }
  }
}
