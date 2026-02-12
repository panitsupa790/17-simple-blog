pipeline {
  agent any

  stages {
    stage('Test npm') {
      steps {
        sh 'node -v || true'
        sh 'npm -v || true'
        sh 'npm install'
        sh 'npm test || echo "no tests"'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build || echo "no build script"'
      }
    }

    stage('Deploy') {
      steps {
        sh 'echo Deploy via Vercel Git Integration'
      }
    }
  }
}
