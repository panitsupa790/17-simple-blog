pipeline {
  agent { docker { image 'node:20-alpine' } }

  stages {
    stage('Test npm') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build || echo "no build script"'
      }
    }

    stage('Deploy') {
      steps {
        sh 'echo Deploy step placeholder'
      }
    }
  }
}
